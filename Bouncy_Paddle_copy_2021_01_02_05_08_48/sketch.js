var ball , ball_image
    
var paddle , paddle_image

function preload() 
{
  paddle_image=loadImage("paddle.png");
  
  ball_image=loadImage("ball.png")
}
function setup()
{
  createCanvas(400, 400);
  
  
  paddle=createSprite(380,350.20,20);
  paddle.addImage("paddleImg", paddle_image);
  
  ball=createSprite(10,200,20,20);
  ball.addImage("ballImg", ball_image);
  ball.velocityX=5;
  
}

function draw() {
  background(205,153,0);
 
  edges= createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);

 

  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
   paddle.y=paddle.y+ -20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y=paddle.y+ 20;
  }
  drawSprites();
  
  randomVelocity();
}
function randomVelocity()
{
if(ball.bounceOff(paddle))
  {
    ball.velocityY=random(-3,-8);
    ball.velocityX=random(-3,-8)
  }
}

