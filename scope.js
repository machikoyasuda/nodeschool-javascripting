// Scope: the set of variables, objects and functions you have access to.

// 1 - Global
// A variable declared outside of a function definition is global.
// Global variables are accessible and modifiable throught the program.
// 2 - Local
// A variable decared inside of a function is local to that function.
// The variable is created and destroyed every time the function is executed, and it cannot be accessed or modified by any code outside of it.

// Nested functions: functions defined inside other functions, known as nested functions, have access to their parent function's scope.

// IIFE, Immediately Invoked Function Expression: a common pattern for creating local scopes

// Function expression: surrounded by parenthesis, and end in ()

// (function(){})();

var a = 1, b = 2, c = 3;

(function firstFunction(){
  var b = 5, c = 6;

    (function secondFunction(){
      var b = 8;

        (function thirdFunction(){
          var a = 7, c = 9;


            (function fourthFunction(){
              var a = 1, c = 8;
            })();

        })();
      console.log("a: "+a+", b: "+b+", c: "+c);
    })();

})();
