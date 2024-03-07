import Matter from "matter-js"
export const Home = () => {


  // module aliases
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

  // create two boxes and a ground
  var boxA = Bodies.rectangle(400, 100, 120, 45, {
		density: 0.0002,
    chamfer: {radius: 45*0.5},
		render: {
			strokeStyle: "#ffffff",
			sprite: {texture: "./images/u_marisa.png"}
		}
  });
  var boxB = Bodies.rectangle(450, 450, 85, 45);
  // var circle = Bodies.circle(400, 400, 100,[10])
  var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

  // add all of the bodies to the world
  World.add(engine.world, [boxA, boxB, ground]);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
    return (
      <div>
        <h1>Home</h1>

      </div>
    );
  };
  