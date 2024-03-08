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
    const wall = Bodies.rectangle(800, 610, 60, 1400, { isStatic: true });
    const wall2 = Bodies.rectangle(0, 610, 60, 1400, { isStatic: true });
    // engine.world.gravity.y = 0.7; 
    World.add(engine.world, [ground,wall, wall2])
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
        console.log(responseJson);
        const data = responseJson as AlcoholResponse[];
        let index = 0;
        const intervalId = setInterval(() => {
          if (index >= data.length) {
            clearInterval(intervalId);
            return;
          }
          const d = data[index++];
          const brock = Brock(d.url); // URL から Body オブジェクトを作成
          World.add(engine.world, brock); // 作成した Body オブジェクトを World に追加
        }, 200);
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
