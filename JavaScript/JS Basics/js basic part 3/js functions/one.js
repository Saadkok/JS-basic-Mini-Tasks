// Normla Functions...!
function get() {
    let a = document.getElementById("age").value;
    document.write(a);
}
var salary = 50000;  // in a variable we are storing a value.
//anonomys function -->  a function which does not have a name.
var hello = function ()   //
{
    console.log("this is hello function");
}
hello();
// ancyacacgaaid  sadd  jucfc zcnuabah9chcsdcasdbviuasdcm  junaijd 

var addition = function () {
    console.log("this is addition")
    return 2;
}
console.log(addition());
// normal function
function add(a, b) {
    return a + b;
}
document.write("<br> the normal function ")
document.write(add(10, 10) + "<br>");


//function expression - anonomys functions
var addition = function (a, b) {
    return a + b;
}
document.write("<br> the Anonomys function ")
document.write(addition(20, 20) + "<br>");


// arrow function --> for single no need to write return keyword
var sum = (a, b) => a + b;
document.write("<br> the Arrow function ")
document.write(sum(1, 1) + "<br>");



// for multiple we need to provide body
var message = () => {
    document.write("this is message line 1 from the Arrow function of multiple lines   <br>");
    document.write("this is message line 2 from the Arrow function of multiple lines<br>");

}
message();

// for single line no need to provide body.
var message2 = () => document.write("this is single line  from the arrow function of single line ");
message2();


// simple sum largest num amonge three nums 
document.write("<br><br>")
var largest = (a,b,c) =>
{
    if(a>b && a>c)
        return a;
    else if(b>a && b>c)
        return b;
    return c;    

}
document.write(largest(21,14,51));


//  Binding of "this" keyword....!

const obj = {
    data: 42,
    normalFunc: function () {
      return this.data;
    },
    arrowFunc: () => this.data, // 'this' refers to the global object (or undefined in strict mode)
  };
  
  console.log(obj.normalFunc()); // Output: 42
  console.log(obj.arrowFunc());  // Output: undefined...!


//Arguments object:
//normal functions ....!
// In a normal function, you have access to a special variable called arguments, which is like an array and contains all the values that were passed to the function when it was called, even if those values were not explicitly listed as parameters in the function's definition.

  function addNumbers(a, b) {
    console.log(b);
    console.log(arguments[0]); // Accesses the first argument
    console.log(arguments[1]); // Accesses the second argument
    return a + b;
  } 
  const result = addNumbers(2, 3);
  console.log(result); // Output: 2, 3, 5

  //Arrow functions: Arrow functions don't have an arguments object. If you want to work with the function's arguments, you should use ...args in the parameter list

  const printArguments = (...args) => {
    console.log(args[0]); // Accesses the first argument
    console.log(args[1]); // Accesses the second argument
  };
  
  printArguments(2, 3);
  
  
  








