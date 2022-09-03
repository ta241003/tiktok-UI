/*
Hàm (function) trong Javascript

1. Hàm?
    - Một khối mã
    - Làm 1 việc cụ thể
2. Loại hàm
    - Built-in
    - Tự định nghĩa
3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
4. Tạo hàm đầu tiên            
*/

// function showDialog() {
//     alert('Hi. Xin chào!');
// }


// showDialog();


// ------------------------Tham số trong hàm -----------------------

/*
1. Tham số
    -Định nghĩa?
    -Kiểu dữ liệu
    -Tính private?
    -1 tham số
    -Nhiều tham số
    
2. Truyền tham số
    -1 tham số
    -Nhiều tham số
    
3. Arguments?
    -Đối tượng arguments
    -giới thiệu vòng for of
*/

// function writeLog(message, message2) {
//     console.log(message)
//     //console.log(typeof message)
//     console.log(message2)
// }

// writeLog('Test Message','AHUUU');


// function writeLog() {
//     //console.log(arguments)
//     var myString ='';
//     for(var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString)
// }

// writeLog('Log 1', 'Log 2', 'Log 3');


// ------------------------Return trong hàm -----------------------

// function cong(a, b) {
//     // return a + b;
//     return a.toString() + b.toString();
// }

// var result = cong(2, 8);

// console.log(result)


// ------------------------Các loại hàm -----------------------
/*
    Các loại function:
    1. Declaration function
    2. Expression function
    3. Arrow function
*/

// Declaration function
function showMessage() {
    console.log('Declaration function');
}

// Expression function
var showMessage2 = function() {
    console.log('Expression function');
}

// setTimeout(function autoLogin() {

// });

// var myObject = {
//     myFunction: function() {
        
//     }
// }


showMessage2();