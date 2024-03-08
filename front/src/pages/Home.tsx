import Matter, { Runner } from "matter-js";
import { useAuth } from "../contexts/Auth";
import { Form, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { ToAl, ToCo } from "../components/Button";
import { Brock } from "../components/Brock";

export const Home = () => {
	const canvas = useRef<HTMLDivElement>(null);
	const { user } = useAuth();
	const navigate = useNavigate();

	if (!user) {
		console.log("ログインしていません．");
		navigate("/login");
	}

	user?.getIdToken().then((idToken) => {
		fetch("http://localhost:8787/alcohol", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${idToken}`,
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
			})
			.catch((error) => {
				console.error(error);
			});
	});

	useEffect(() => {
		if (!user) {
			navigate("/login");
		} else {
			const { Engine, Render, World, Bodies } = Matter;

			// create an engine
			const engine = Engine.create();

			// create a renderer
			if (!canvas.current) {
				return;
			}
			const render = Render.create({
				element: canvas.current,
				engine: engine,
				options: {
					wireframes: false,
				},
			});

			// create two boxes and a ground
			const boxA = Bodies.rectangle(400, 100, 60, 120, {
				density: 0.0002,
				// chamfer: {radius: 45*0.5},
				render: {
					strokeStyle: "#ffffff",
					sprite: { texture: "./beer.jpg", xScale: 0.28, yScale: 0.28 },
				},
				// https://www.miraido-onlineshop.com/images/pd-dtl/5-bombay-sapphire-b.jpg
			});

			const boxB = Bodies.rectangle(450, 450, 60, 120, {
				density: 0.0002,
				// chamfer: {radius: 45*0.5},
				render: {
					strokeStyle: "#ffffff",
					sprite: { texture: "./beer.jpg", xScale: 0.28, yScale: 0.28 },
				},
			});
			// var circle = Bodies.circle(400, 400, 100,[10])
			const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

			// add all of the bodies to the world
			World.add(engine.world, [boxA, boxB, ground]);

			// run the renderer
			Render.run(render);

			// run the engine
			Runner.run(engine);
		}
	}, [user, navigate]);

	return (
		<div
			style={{
				margin: "auto",
				width: "50%",
			}}
		>
			<h1>Home</h1>
			<ToAl />
			<ToCo />
			<div ref={canvas} />
		</div>
	);
};
