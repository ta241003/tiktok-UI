/*
Gioi thieu 1 so ham built-in
    1.Alert
    2.Console
    3.Confirm
    4.Prompt
    5.Set timeout
    6.Set interval
*/

var fullname = 'Ngo The Anh';

// console.log(fullname)
// console.warn(fullname)
// console.error(fullname)

// confirm('Xac nhan do tuoi!');

// prompt('Xac nhan ban du tuoi')

// setTimeout(function() {
//     alert('Thong bao')
// }, 1000)

setInterval(function() {
    console.log('Day la log ' + Math.random())
}, 1000)