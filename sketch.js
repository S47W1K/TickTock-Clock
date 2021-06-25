

var hr, mn, sc
var hrAngle, mnAngle, scAngle






function setup() {
  createCanvas(800,400);
 angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate(-90)
  hr=hour()
  mn=minute()
  sc=second()
  secondAngle=map(sc,0,60,0,360)
  hourAngle=map(hr%12,0,12,0,360)
  minuteAngle=map(mn,0,60,0,360)

  push()
  rotate(secondAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(minuteAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(hourAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

 noFill()

strokeWeight(10)
stroke(255,0,0)
arc(0,0,300,300,0,secondAngle)

strokeWeight(10)
stroke(0,255,0)
arc(0,0,280,280,0,minuteAngle)

strokeWeight(10)
stroke(0,0,255)
arc(0,0,260,260,0,hourAngle)

  drawSprites();
}