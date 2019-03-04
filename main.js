let circles = [];
let numberOfCircles = 1000;
let whichStartingCircle = 0;
let clicked = false;
let average;
let shade;

function setup(){
	createCanvas(windowWidth,windowHeight);
  for (let i = 0; i < numberOfCircles; i++){
    circles[i] = new Circle();
  }
}

function draw() {
  background(0);

  for (let i = 0; i < numberOfCircles; i++){
    if(circles[i].visible){
      circles[i].display();
      circles[i].move();
    }
  }
}


function keyPressed(){
  whichStartingCircle+=10;
  for (let i=0; i<10; i++){
    circles[whichStartingCircle+i].visible = true;
  } 
}

class Circle {
  constructor(){
    this.x=width/2;
    this.y=height/2;
    this.smallness=random(50);
    this.xSpeed=random(-2.5,3);
    this.ySpeed=random(-2.5,3);
    this.visible=false;
  }

  display(){
    shade=random(255);
    if (shade<100){
      shade=shade+100;
    }
    noStroke();
    fill(0,0,255,shade);
    ellipse(this.x-5,this.y-5,this.smallness,this.smallness);
    noStroke();
    fill(255,0,0,shade);
    ellipse(this.x, this.y, this.smallness, this.smallness);
  }

  move(){
    average=random(30);
    if (average<20){
      average=20;
    }
    if (mouseIsPressed){
      this.x=(this.x*20+mouseX)/average;
      this.y=(this.y*20+mouseY)/average;
    }else{
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
    }
  }

}