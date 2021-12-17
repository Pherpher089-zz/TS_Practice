"use strict";
exports.__esModule = true;
var example_enum_1 = require("./example.enum");
var example1 = [1, 2, 3, 4]; // Implicit Typing
var example2 = [1, 2, 3, 4]; // Explicit Typing
//we have the option to give our arrays multiple types
var example3 = [1, true, 3, false];
// if there were any other data type, it would throw an error;
var example4 = [1, 2, 3, '', false, 3.2]; // allows for any type of data. This does 
//Though the above code has any type of data, ts will still throw an error if operations that do not belong
//to that data structure are evoked. Uncomment below example
//example4 += 1;
// Here is how you declare type for a function.
function add(num1, num2) {
    return num1 + num2;
}
// The last type is the return type. The first two are parameter types.
add(example_enum_1.NumsEnum.NUN1, example_enum_1.NumsEnum.NUM2);
function addNums(nums) {
    return nums.num1.toString();
}
var newNums = { num1: 2, num2: 4 };
console.log(addNums(newNums));
