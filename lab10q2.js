let myCars;
function setup() {
  createCanvas(400, 400);
  myCar = new Car(0, 60, 2)
  speed = 2
  carsToStart = 5;
  cars = [];
  for (
    let carDefined = 0;
    carDefined < carsToStart;
    carDefined++
  ) {
    let x = random(width);
    let y = random(height);
    cars.push(new Car(x, y, speed));
  }
}

function draw() {
  background("black");
  noStroke();
  fill("green");
  rect(0, 0, 400, 100);
  rect(0, 200, 400, 50);
  rect(0, 350, 400, 50);
  
  // myCar.show();
  // myCar.move();
for (let carShown = 0; carShown < cars.length; carShown++) {
    let thisCar = cars[carShown];
    thisCar.move();
    thisCar.show();
  }
}

class Car{
  constructor(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    
  }
  show(){
    push();
    translate(this.x, this.y, this.speed);
    stroke(5);
    fill("white");
    rect(0, 40, 50);
    pop();
  }
  move(){
  this.x = this.x + 2;
    this.y = this.y;
    // let isTooFarLeft = this.x < 0;
    // let isTooFarRight = this.x > width;
    // if (isTooFarLeft || isTooFarRight) {
    //   this.addX = -this.addX;
    //   this.y = random(height);}
  }
}
