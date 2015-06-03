// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many milliseconds later.
// Refactor it so that is has a default timeout.
// 
// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.
// 
// When setting the timeout, the function needs to
// work like this:
// 
//     callLater(1000, function(){
//          ...
//     })
//
// When using the default timeout, the function
// needs to work like this:
//
//     callLater(function(){
//          ...
//     })

function callLater() {
	var args = [].slice.call(arguments)
	if (args.length < 2) args.unshift(2000)
	setTimeout(args[1], args[0])
}

callLater(1000, () => console.log('hi!'))
callLater(() => console.log('hi!'))




// Write a function that allows you to use 
// Array.prototype.slice without using slice.call 
// or slice.apply to invoke it.

// var slice = Array.prototype.slice

// function() {
//   var args = slice.call(arguments) // this works
// }

var slice = function(proxied_arguments){
	//return array of args
	return Array.prototype.slice.call(proxied_arguments)
}

function() {
  var args = slice(arguments)
  console.assert(args instanceof Array)
}














