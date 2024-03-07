import Matter from "matter-js"
import React from 'react';
import { useState, useEffect } from "react";

interface userinfo{
    id: number;
    name: string;
    url: string;
    date: string;
  }

export const Brock = () => {
    const [data, setData] = useState<userinfo[]>([]);
    // const [loading, setLoading] = useState(true);
    const method = "GET";
    const [isFirst, setIsFirst] = useState<boolean>(true);
    // const [xxx, setnumber] = useState();

    useEffect(() => {
    if (isFirst){
        setIsFirst(false);
        return;
    }
    fetch('http://localhost:8787/alcohol', {
      method
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson)
        // const ids = data.map(())
        console.log(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
      var nc = data[2];
        const CreateBrock = async () => {
            var Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies;
            console.log(data)
        
            // create an engine
            var engine = Engine.create();
            var items = [];
            // create a renderer
            var render = Render.create({
            element: document.body,
            engine: engine
            });
    
            render.options.wireframes = false
            // if (data[0] != "undefined"){
                for (let i = 0; i<data.length; i++){
                    var num = data[i];
                    console.log(num.url);
                    var addition = Bodies.rectangle(1000, 1000, 60, 120, {
                        density: 0.0002,
                            render: {
                                strokeStyle: "#ffffff",
                                sprite: {texture: num.url, xScale: 0.28, yScale: 0.28}
                            }
                    });
                    items.push(addition);
                }
            
                World.add(engine.world, items);
            
                // run the engine
                Engine.run(engine);
            
                // run the renderer
                Render.run(render);
            // }
            if (data.length == 0){
                setIsFirst(true);
                console.log(data)
                return;
                
        }
      }

    //   console.log(data[1][0]);
    },[isFirst]
    )
        // var circle = Bodies.circle(400, 400, 100,[10])

        // add all of the bodies to the worl
  // module aliases
    return (
        <div>
            {/* {data === undefined ? "" : <div>{data[0].}</div>} */}
        </div>
    );
  };
  
  export default Brock;