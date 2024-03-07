import Matter from "matter-js"

function createCar(x, y, w, h, wSize){

	const group = Body.nextGroup(true);
	const car = Composite.create({label: "Car"});
	const wOffX = w * 0.4;// Offset

	// 1-1, 車体に画像を適用する
	const body = Bodies.rectangle(x, y, w, h, {
		collisionFilter: {group: group},
		chamfer: {radius: h*0.5},
		density: 0.0002,
		render: {
			strokeStyle: "#ffffff",
			sprite: {texture: "./images/u_marisa.png"}
		}
    });
}