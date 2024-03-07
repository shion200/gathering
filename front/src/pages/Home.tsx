import Matter from "matter-js"
import { useAuth } from "../contexts/Auth";
import { Form, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import React from 'react';
import { ToAl } from "../components/Button";
import { Brock } from "../components/Brock";

// export const Home = () => {
//   const [data, setData] = useState("");
//   const { user } = useAuth()
//   const navigate = useNavigate();
  // const [name, setupPhysicsEngine] = useState();
  // const [isLoaded, setIsLoaded] = useState(false);
  // const loaded = () => setIsLoaded(true);
  

//   useEffect(() => {
//     if (!user) {
//       navigate('/login')
//     }
//     else {
//       <Brock/>
//     }
//       // create two boxes and a ground
//   }, [])

//   return (
//     <div>
//       <h1>Home</h1>
//       <Brock/>
//     </div>
//   );

// };
export const Home = () => {
  const { user } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    else {
      const method = "GET";
      fetch('http://localhost:8787/alcohol', {
        method
      })
        .then((response) => response.json())
        .then((responseJson) => {
          const data = responseJson;
          console.log(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      

      var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;

      // create an engine
      var engine = Engine.create();

      // create a renderer
      var render = Render.create({
        element: document.body,
        engine: engine
      });
      render.options.wireframes = false

      // create two boxes and a ground
      var boxA = Bodies.rectangle(400, 100, 60, 120, {
        density: 0.0002,
        // chamfer: {radius: 45*0.5},
        render: {
          strokeStyle: "#ffffff",
          sprite: { texture: "./beer.jpg", xScale: 0.28, yScale: 0.28 }
        }
        // https://www.miraido-onlineshop.com/images/pd-dtl/5-bombay-sapphire-b.jpg
      });
      var boxB = Bodies.rectangle(450, 450, 60, 120, {
        density: 0.0002,
        // chamfer: {radius: 45*0.5},
        render: {
          strokeStyle: "#ffffff",
          sprite: { texture: "./beer.jpg", xScale: 0.28, yScale: 0.28 }
        }
      });
      // var circle = Bodies.circle(400, 400, 100,[10])
      var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

      // add all of the bodies to the world
      World.add(engine.world, [boxA, boxB, ground]);

      // run the engine
      Engine.run(engine);

      // run the renderer
      Render.run(render);
    }
  }, [user])

  return (
    <div>
      <h1>Home</h1>
      <ToAl />
    </div>
  );

};