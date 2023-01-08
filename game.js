arr = [];

n = 0.01

class square {
  constructor(p1, p2, iteration) {
    this.p1 = p1;
    this.p2 = p2;
    this.a =
      Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x) - Math.PI / 2;
    this.iteration = iteration;
    this.size = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    this.p3 = {
      x: this.p1.x + Math.cos(this.a) * this.size,
      y: this.p1.y + Math.sin(this.a) * this.size,
    };
    this.p4 = {
      x: this.p2.x + Math.cos(this.a) * this.size,
      y: this.p2.y + Math.sin(this.a) * this.size,
    };
    if (this.iteration < 10) {
      let p5 = {
        x: this.p4.x + Math.cos(this.a + Math.PI / 3) * this.size * n,
        y: this.p4.y + Math.sin(this.a + Math.PI / 3) * this.size * n,
      };
      arr.push(new square(this.p3, p5, this.iteration + 1));
      arr.push(new square(p5, this.p4, this.iteration + 1));
    }
  }
  draw() {
    drawLine(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    drawLine(this.p2.x, this.p2.y, this.p4.x, this.p4.y);
    drawLine(this.p3.x, this.p3.y, this.p4.x, this.p4.y);
    drawLine(this.p3.x, this.p3.y, this.p1.x, this.p1.y);

    // drawLine(this.p3.x,this.p3.y,this.p5.x,this.p5.y)
    // drawLine(this.p4.x,this.p4.y,this.p5.x,this.p5.y)
  }
}

function generate(){
  arr = []
  arr.push(
    new square(
      { x: window.innerWidth / 2 + 10, y: window.innerHeight / 2 + 50 },
      { x: window.innerWidth / 2 - 10, y: window.innerHeight / 2 + 50 },
      0
    )
  );
}

generate()

function draw() {
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.strokeStyle = "cyan";
  for (let i = 0; i < arr.length; i++) {
    arr[i].draw();
  }
}

function update() {
  if(isKeyPressed[32]){
    n+=0.01
    generate()
  }
}
