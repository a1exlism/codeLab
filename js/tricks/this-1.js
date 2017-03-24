let numbers = {
  numA: 5,
  numB: 10,
  sum: function() {
    let test = 'test';
    console.log(this === numbers);
    function calculate() {
      console.log(this === numbers);
      console.log(this.numA + this.numB);
    }
    return calculate;
    // return calculate.call(this);
  },
};

numbers.sum();
