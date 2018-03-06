let x=0;
const balls = [];

let height=0;
let width=0;

function setup() { 
	height=windowHeight;
	width=windowWidth-10;
	createCanvas(width,height);
	/*for(let i=0;i<20;i++){
		let ball={
			x: Math.floor(random(20,width)),
			y: Math.floor(random(20,height)),
			d: Math.floor(random(20,100)),
			r: Math.floor(random(0,255)),
			g: Math.floor(random(0,255)),
			b: Math.floor(random(0,255))
		}
		balls.push(ball);
	}*/
	//frameRate(5);
}

function draw() {
	//x++;
	noStroke();
	background('#fff');
	//fill('#00f');
	for(let i=0; i<balls.length;i++){
		fill(balls[i].r,balls[i].g,balls[i].b);
		ellipse(balls[i].x,balls[i].y,balls[i].d,balls[i].d);
		/*balls[i].x+=Math.floor(random(-1,2));
		balls[i].y+=Math.floor(random(-1,2));*/
		balls[i].y+= balls[i].rebote;
		if ((balls[i].y+balls[i].d/2)>height) {
			balls[i].rebote*=-1;
		}else if((balls[i].y-balls[i].d/2)<0){
			balls[i].rebote*=-1;
		}
		
	}	
	/*console.log(balls);
	noLoop();*/
	
}

function mouseClicked(){
	let ball={
		//x: Math.floor(random(20,width)),
		x: mouseX,
		//y: Math.floor(random(20,height)),
		y: mouseY,
		d: Math.floor(random(20,100)),
		r: Math.floor(random(0,255)),
		g: Math.floor(random(0,255)),
		b: Math.floor(random(0,255)),
		rebote: Math.floor(random(2,20))
	}
	balls.push(ball);
}