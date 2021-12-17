import { NumsEnum } from "./example.enum"

const example1 = [1, 2, 3, 4] // Implicit Typing
const example2: number[] = [1, 2, 3, 4] // Explicit Typing

// We have the option to give our arrays multiple types
const example3: (number | boolean)[] = [1, true, 3, false] 
// if there were any other data type, it would throw an error;

const example4: any = [1, 2, 3, '', false, 3.2] // allows for any type of data. This does 

// Though the above code has any type of data, ts will still throw an error if operations that do not belong
// to that data structure are evoked. Uncomment below example

// example4 += 1;


// Here is how you declare type for a function.
function add(num1: NumsEnum, num2:NumsEnum) : number {
    return num1 + num2;
}
// The last type is the return type. The first two are parameter types.

add(NumsEnum.NUN1, NumsEnum.NUM2);


// Here is an example of how to define a type
type numExample = {num1: number, num2: number}

// Here is how you would use that type
function addNums(nums: numExample): string {
    return nums.num1.toString()
}

const newNums : numExample = {num1 : 2, num2 : 4}