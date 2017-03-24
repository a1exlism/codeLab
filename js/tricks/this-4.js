//  arrow function this's env decided by its context;
function Period(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
}
Period.prototype.format = () => {
  console.log(this === window); // => true
  return this.hours + ' hours and ' + this.minutes + ' minutes';
};
let walkPeriod = new Period(2, 30);
walkPeriod.format(); // => 'undefined hours and undefined minutes'
