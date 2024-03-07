import Matter from "matter-js"
export const Brock = () => {

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

//   // create two boxes and a ground
//   var boxA = Bodies.rectangle(400, 100, 60, 120, {
// 		density: 0.0002,
//     // chamfer: {radius: 45*0.5},
// 		render: {
// 			strokeStyle: "#ffffff",
// 			sprite: {texture: "./beer.jpg", xScale: 0.28, yScale: 0.28}
// 		}
//     // https://www.miraido-onlineshop.com/images/pd-dtl/5-bombay-sapphire-b.jpg
//   });
  var addition = Bodies.rectangle(1000, 1000, 60, 120, {
    density: 0.0002,
    // chamfer: {radius: 45*0.5},
		render: {
			strokeStyle: "#ffffff",
			sprite: {texture: "https://firebasestorage.googleapis.com/v0/b/gathering-eee66.appspot.com/o/beer.jpg?alt=media&token=1e2ce081-905e-41c0-8b2d-6746c8eb5a2b", xScale: 0.28, yScale: 0.28}
		}
  });
  // var circle = Bodies.circle(400, 400, 100,[10])

  // add all of the bodies to the world
  World.add(engine.world, addition);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
    return (
        <div>

        </div>
    );
  };
  