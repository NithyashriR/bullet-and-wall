var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);
  


  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,50);
  wall = createSprite(700, 200, thickness, height/2);
  wall.shapeColor = "blue"
  bullet = createSprite(50, 200, 40, 40);
  bullet.shapeColor = "green";
  

  bullet.velocityX = speed;
}

function draw() {
  background(0)
if(hasCollided(bullet,wall)){

bullet.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

if(deformation>10){
bullet.shapeColor = color(255,0,0);
}

if(deformation<10){

  bullet.shapeColor = color(0,255,0);
}


}
drawSprites();
  }

  function hasCollided(bullet,wall){

    bulletRedge = bullet.x + bullet.width;
    walledge = wall.x;
    if(walledge<= bulletRedge){

      return true;
    
    }
    return false;

  }

