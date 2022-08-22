var sayHello =  require("./hello.js");

 // chúng ta có hệ thống tiêu chuẩn common js và node js đã tuân thủ tiêu chuẩn đó và khởi tạo các cái biến toàn cục để chúng ta sử dụng thì chúng ta sử dụng được cái hàm sayHello() trong  cái app.js này
// chúng ta cần sử dụng một biến toàn cục để làm cho cái hàm sayHello() có thể sử dụng được trong hàm chính app.js
// và đối tượng chúng ta mong muốn sử dụng ở đây là module.export chúng ta có thể chia ra được các cái hàm các cái function để module khác có thể gọi đến để sử dụng 

 sayHello();


 //ES6 Template Literals
 console.log(`string text line 1 
 string text line 2`);


 //ví dụ 2

 var a = 5;
 var b = 10;
console.log(`Fifteen is $(a+b) and|not $(2* a +b)`);



