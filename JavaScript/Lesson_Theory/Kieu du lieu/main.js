/*
Kiểu dữ liệu trong Javascript

1. Dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object   
*/


// Number type
var a = 1;
var b = 2;

//console.log(typeof a)

// String type
var fullName = 'The Anh';

// Boolean type
var isSuccess = true;
//console.log(typeof isSuccess)


// Undefined type
var age;

//console.log(typeof age)

// Null
var isNull = null; // nothing
//console.log(typeof isNull)

// Symbol
var id = Symbol('id'); //  unique
var id2 = Symbol('id'); //  unique


// Function
var myFunction = function() {
    alert('Hi.Xin chao cac ban!');
}

myFunction();


// Object types
var myObject = {
    name: 'The Anh' ,
    age: 18,
    address: 'Nghe An',
    myFunction: function () {

    }
};

//console.log('myObject', myObject)

var myArray = [
    'javascript',
    'PHP',
    'Ruby'
];
// console.log(myArray)

