
var snow,snowimg;
var bg;
var kid;
function preload(){
  snowimg = loadImage("snow4.webp");
bg = loadImage("snow3.jpg")
}




function setup() {
  createCanvas(800,400);

  kid= createSprite(400,320,70,140);
kid.shapeColor="blue" 

}

function draw() {
  background(bg);  
 



  if(frameCount%1===0){
    snow= createSprite(Math.round(random(-50,800)), 0, 50, 50);
    
    snow.addImage(snowimg);
    snow.velocityY=8
    snow.velocityX=4
    snow.scale=0.06
    snow.lifetime=90
    snow= createSprite(Math.round(random(-50,800)), 0, 50, 50);
    
    snow.addImage(snowimg);
    snow.velocityY=8
    snow.velocityX=4
    snow.scale=0.06
    snow.lifetime=90
    snow= createSprite(Math.round(random(-50,800)), 0, 50, 50);
    
    snow.addImage(snowimg);
    snow.velocityY=8
    snow.velocityX=4
    snow.scale=0.06
    snow.lifetime=90
  }
  if(keyDown("left_arrow")){
    kid.x=kid.x-10;
  }
  if(keyDown("right_arrow")){
    kid.x=kid.x+10;
  }

  drawSprites();
}