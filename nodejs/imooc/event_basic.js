//	https://nodejs.org/api/events.html
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function func(num){
	console.log('You are the ' + num + 'st');
}
//add a event
myEmitter.on('event', (names) => {
	//	equal to addEventListener(type, hanlder);
	console.log('an event occurred');
	console.log(names || 'No more things');
});	//register

myEmitter.on('event2', func);

//trigger
myEmitter.emit('event', 'hexigen');
			//	foucus this two parameters

//return
myEmitter.emit('event');	//true
myEmitter.emit('event1');	//faulse

//remove a non-anonymous function
console.log(myEmitter.emit('event2', 1));
myEmitter.removeListener('event2', func);
console.log(myEmitter.emit('event2', 2));

//account event's num
console.log(myEmitter.listenerCount(myEmitter, 'event'));