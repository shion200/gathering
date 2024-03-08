import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { drizzle } from "drizzle-orm/d1";
import { users } from "./schema";
import { cors } from "hono/cors";
import {
	VerifyFirebaseAuthConfig,
	VerifyFirebaseAuthEnv,
	verifyFirebaseAuth,
	getFirebaseToken,
} from "@hono/firebase-auth";
import { HTTPException } from "hono/http-exception";
import { eq } from "drizzle-orm";

type Bindings = { DB: D1Database };
const app = new Hono<{ Bindings: Bindings & VerifyFirebaseAuthEnv }>();

// Setup middlewares
// Enable CORS for all routes
app.use("*", cors({ origin: "*" }));
// Verify Firebase Auth for all routes
const config: VerifyFirebaseAuthConfig = {
	projectId: "gathering-eee66",
};
app.use("*", verifyFirebaseAuth(config));

// GET /alcohol
app.get("/alcohol", async (c) => {
	const idToken = getFirebaseToken(c);
	if (!idToken) {
		throw new HTTPException(401, { message: "Unauthorized" });
	}

	const userId = idToken.uid;

	const db = drizzle(c.env.DB);
	const result = await db
		.select()
		.from(users)
		.where(eq(users.userId, userId))
		.all();

	return c.json(result);
});

// POST /alcohol
const schema = zValidator(
	"json",
	z.object({
		name: z.string(),
		url: z.string().url(),
	}),
);

app.post("/alcohol", schema, async (c) => {
	const idToken = getFirebaseToken(c);
	if (!idToken) {
		throw new HTTPException(401, { message: "Unauthorized" });
	}

	const userId = idToken.uid;
	const { name, url } = c.req.valid("json");
	const db = drizzle(c.env.DB);

	console.log("name", name);

	await db
		.insert(users)
		.values({ userId, name, url, date: new Date() })
		.execute();

	return c.json({ message: "success" }, 201);
});

export default app;
