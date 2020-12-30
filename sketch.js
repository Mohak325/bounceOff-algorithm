var r1,r2,edges
function setup() {

  createCanvas(800,400);
 r1 =  createSprite(400, 200, 50, 20);
 r1.velocityX = -3;
 
 r2 = createSprite(200,200,20,50);
 r2.velocityX = 3;
 

}

function draw() {

  background(255,255,255);  
  bounceOff(r1,r2);
 edges = createEdgeSprites();
 r1.bounceOff(edges);
 r2.bounceOff(edges);

  drawSprites();
}