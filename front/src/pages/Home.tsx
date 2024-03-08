import Matter, { Runner } from "matter-js";
import { useAuth } from "../contexts/Auth";
import { Form, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { ToAl, ToCo } from "../components/Button";
import { Brock } from "../components/Brock";

interface AlcoholResponse {
  name: string;
  url: string;
  date: Date;
}

export const Home = () => {
  const canvas = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user])


  useEffect(() => {
    const { Engine, Render, World, Bodies } = Matter;
    const engine = Engine.create();
    const render = Render.create({
      element: canvas.current!,
      engine: engine,
      options: {
        wireframes: false
      }
    })

    const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    World.add(engine.world, ground)
    Engine.run(engine);
    Render.run(render);

    user?.getIdToken()
      .then((idToken) => fetch('http://localhost:8787/alcohol', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }))
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson as AlcoholResponse[];

        const brocks = data.map((d) => Brock(d.url));
        World.add(engine.world, brocks);
      })
      .catch((error) => {
        console.error(error);
      });
  })

  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
      }}
    >
      <h1>Home</h1>
      <p><ToAl /></p>
      <p><ToCo /></p>
      <div ref={canvas} />
    </div>
  );
};
