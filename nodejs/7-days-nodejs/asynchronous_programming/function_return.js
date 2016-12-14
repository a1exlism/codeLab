/*
 * sychronous 
 */
var output = func1(func2('input'));

//  asychronous
func2('input', function( output2 ){
	func1( output2, function( output1 ){
		//Coding
	});
});