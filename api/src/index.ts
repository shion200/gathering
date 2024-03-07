import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { drizzle } from 'drizzle-orm/d1';
import { users } from './schema';
import { alias, time } from 'drizzle-orm/mysql-core';
import { cors } from 'hono/cors';

type Bindings = { DB: D1Database }
const app = new Hono<{ Bindings: Bindings }>();

app.use(
  "*",
  cors({
      origin: "*",
  }),
);

// GET /alcohol
app.get('/alcohol', async (c) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(users).all();
  return c.json(result)

})

// POST /alcohol
const schema = zValidator(
  'json',
  z.object({
    name: z.string(),
    url: z.string().url(),
  })
);

app.post('/alcohol', schema, async (c) => {
  const { name, url } = c.req.valid('json');
  const db = drizzle(c.env.DB);

  await db.insert(users).values({ name, url, date: new Date() }).execute();

  return c.json({ message: "success" }, 201)
});

export default app
