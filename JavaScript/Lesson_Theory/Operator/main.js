/*
Gioi thieu toan tu trong JavaScript
1. Toán tử số học - Arithmetic
2. Toán tử gán - Assignment
3. Toán tử so sánh - Comparison
4. Toán tử logic - logical
*/

//Toán tử số học
var a =1 + 2;
// console.log(a)

//Toán tử gán
var fullname = 'Ngo The Anh';

//Toán tử so sánh
var a = 1;
var b =2;

//Toán tử so sánh
// if(a<b){
//     alert('Dung');
// }

//Toán tử logic
var a=1;
var b=2;

// if(a > 0 && b > 0){
//     alert('a & b lớn hơn 0')
// }

// ---------------------TOÁN TỬ SO SÁNH - P2-----------------------------------


/**
 * ===
 * !==
 */

var a = '1';
var b = 1;

// console.log(a === b);
console.log( a!== b);


//1. document.all chuyển sang boolean sẽ là false
//2. document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
//3. Khi typeof document.all sẽ trả về "undefined"
if (document.all) {
    alert("hello");
}