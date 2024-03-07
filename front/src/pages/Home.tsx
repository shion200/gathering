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
  render.options.wireframes = false

  // create two boxes and a ground
  var boxA = Bodies.rectangle(400, 100, 60, 120, {
		density: 0.0002,
    // chamfer: {radius: 45*0.5},
		render: {
			strokeStyle: "#ffffff",
			sprite: {texture: "./beer.jpg", xScale: 0.28, yScale: 0.28}
		}
  });
  var boxB = Bodies.rectangle(450, 450, 60, 120);
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
  