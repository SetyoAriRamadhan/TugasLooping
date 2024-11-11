function setup() {
  createCanvas(400, 200);
  background(255);
  
  let x = 0;
  let y = height / 2;
  let snakeLength = 7;

  textSize(32); 

  let count = 0;
  while (count < snakeLength) {
    text("🐍", x, y); 
    x += 35;
    count++;
  }
}





