//  forget new
//  constructor VS normal function
function Vehicle(type, wheelsCount) {
  this.type = type;
  this.wheelsCount = wheelsCount;
  return this;
}
// 函数调用
let car = Vehicle('Car', 4);
car.type; // => 'Car'
car.wheelsCount; // => 4
console.log(car === window); // => true
