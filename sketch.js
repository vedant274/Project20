var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = color(80,80,80)
  car.velocityX = speed;

}

function draw() {
  background(255,255,255); 
 
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = Math.round(0.5 * weight * speed * speed/22500);
    if(deformation >180){
      car.shapeColor = color(255,0,0);
      textSize(20);
      stroke("blue");
      fill("red");
      text("Car weight:",670,170);
      text(weight,800,170);
      text("Car Speed:",670,200 );
      text (speed, 800,200);
      text("Deformation:",670,230);
      text(deformation,800,230);
      text("Safety Grade: Lethal for the Passengar",670,260);
    }
    if(deformation <180 && deformation>100){
      car.shapeColor = color(230,230,0);
      textSize(20);
      stroke("blue");
      fill("red");
      text("Car weight:",670,170);
      text(weight,800,170);
      text("Car Speed:",670,200 );
      text (speed, 800,200);
      text("Deformation:",670,230);
      text(deformation,800,230);
      text("Safety Grade: Average for the Passengar",670,260);
      
    }
    if(deformation <100){
      car.shapeColor = color(0,255,0);
      textSize(20);
      stroke("blue");
      fill("red");
      text("Car weight:",670,170);
      text(weight,800,170);
      text("Car Speed:",670,200 );
      text (speed, 800,200);
      text("Deformation:",670,230);
      text(deformation,800,230);
      text("Safety Grade: Good for the Passengar",670,260);
    }
}
 
  drawSprites();
}