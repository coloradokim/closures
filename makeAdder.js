//From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
};

var add5 = makeAdder(5); //a closure; x is 5
var add10 = makeAdder(10); // a closure; x is 10

//both add5 and add1- share the same function body definition, but they store different enviornments

console.log(add10(3));

//makeAdder() is a function factory. We can create new functions from makeAdder()
