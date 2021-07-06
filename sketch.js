
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if(keyDown(LEFT_ARROW)){
    background("yellow");
  }
  if(keyDown(RIGHT_ARROW)){
    background("purple");
  }
  if(keyDown(DOWN_ARROW)){
    background("red");
  }
  if(keyDown(UP_ARROW)){
    background("blue");
  }
}




