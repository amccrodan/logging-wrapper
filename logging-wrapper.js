var wrapLog = function (callback, name) {
  /* your code here */
  return function() {
    var args = Array.from(arguments);
    console.log(name + "(" + args + ")" + " => " + callback.apply(callback, args));
  };
};

var sum = function (a, b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5, 3); // sum(5,3) => 8
logSum(3, 2); // sum(3,2) => 5
logSum(4, 9);