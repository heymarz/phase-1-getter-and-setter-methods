class Circle {
  constructor(radius){
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2
  }
  set diameter(diameter){
    this.radius = diameter / 2
  }
  get circumference() {
    return  3.14159 * (this.radius * 2)
  }
  set circumference(circumference){
    this.radius = circumference/(3.14159 * 2)
  }
  get area() {
    return 3.14159 * (this.radius * this.radius)
  }
  set area(area){
    this.radius = Math.sqrt(area/3.14159)
  }
  
}