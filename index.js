// địng nghĩa một hàm đơn giản 
function sayHello(){
    console.log("Hello Node.js !!")
}

sayHello();

// Định nghĩa một hàm first-class- function 

function logSaying(fn) {
    fn()
}

logSaying(sayHello);

// khái niệm function Expression  (hàm như là một biến)
var sayGoodbye = function () {
console.log("Good bye!!");
}


sayGoodbye();

// tính năng trong javascript có thể truyền hàm vào như một biểu thức 


logSaying(function(){
    console.log("Hello Nodejs !! is Expression ");
})