class Paper {
    constructor(x, y, radius, height) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, height, options);
      this.radius = 100;
      this.height = 100;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      imageMode(CENTER);
      image(this.image, 300, 625, this.radius, this.height);
      pop();
    }
  };