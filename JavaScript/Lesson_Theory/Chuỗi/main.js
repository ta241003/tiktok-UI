/*
    Chuỗi trong JAVASCRIPT

1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash(\)
3. Xem độ dài chuỗi
4. Chý ý độ dài khi viết code
5. Template string ES6        
*/

// var fullName = 'The Anh yeu \'Binh Minh\'';
// // var fullName = 'Day la dau \\';
// //var fullName = new String('The Anh');

// //console.log(fullName)
// console.log(fullName.length)

// Template string ES6  
// var firstname = 'The';
// var lastname = 'Anh';
//  console.log(`Toi la: ${firstname} ${lastname}`);



// --------------------- Làm việc với chuỗi ------------------

var myString = 'Hoc JS tại F8!';
// var myString = 'Hoc JS tại JS JS F8!';

// 1.length
//console.log(myString.length)

// 2. Find index
// console.log(myString.indexOf('JS'))
// console.log(myString.indexOf('JS', 6))
// console.log(myString.lastIndexOf('JS'))
// console.log(myString.search('JS'))

// 3. Cut String
// console.log(myString.slice(4, 6))
// console.log(myString.slice(4))
// console.log(myString.slice(0))
// console.log(myString.slice(-3, -1))

// 4. Replace
// console.log(myString.replace('JS', 'Javascript'))
// console.log(myString.replace(/JS/g, 'Javascript'))

// 5. Convert to upper case
// console.log(myString.toUpperCase());

// 6. Convert to lower case
// console.log(myString.toLowerCase());

// 7.Trim
// console.log(myString.trim().length);

// 8. Split (tim diem chung)
// var languages = 'Javascript, PHP, Ruby';
// console.log(languages.split(', '));

// var languages = 'Javascript';
// console.log(languages.split(''));

// 9. Get a character by index
const myString2 = 'The Anh';

// console.log(myString2.charAt(0));
// console.log(myString2[0]);

//----------------------- Number --------------------
var age = 18;
var PI = 3.14;

// var result = 20 / 'ABC';

// console.log(isNaN(result));
// console.log(typeof age.toString());
console.log(PI.toFixed());