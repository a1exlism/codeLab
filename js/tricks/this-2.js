function Animal(type, legs) {
  that = this;
  this.type = type;
  this.legs = legs;
  this.getInfo = function() {
    console.log(this === myCat);
    console.log('Type: ' + this.type + ' Legs: ' + this.legs);
    console.log('Type: ' + that.type + ' Legs: ' + that.legs);
    // console.log(this); //  context: this Timeout
  };
}

let myCat = new Animal('Cat', 4);
setTimeout(myCat.getInfo, 100);

/* -- output --
  false
  Type: undefined Legs: undefined
  Type: Cat Legs: 4
 */
