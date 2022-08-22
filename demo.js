var a= 1;
var b = 2;
var c = a +b;
console.log(c)

// Định nghĩa hàm:  fucntion 
// ví dụ: định nghĩa một function 
function functionName(){
    code;
}

// Gọi fucntion 

functionName()


// First-class fucntion 

function f1 () {
    console.log("f1")
}

function PassFunctiponAsParams (f){  // First-class fucntion đóng vai trò là tham số của hàm 
    f ();
    var f2 = function (){  //First-class fucntion và có thể gán cho một biến 
        console.log("f2");
    }

    // return a fucntion  First-class fucntion đóng vai trò là giá trị trả về từ một hàm 
    return f2;
}

PassFunctiponAsParams(f1) (); // irst-class fucntion đóng vai trò là gọi hàm và truyền hàm f1 như một tham số