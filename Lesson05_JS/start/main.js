alert('200 * 3');

var name = "山田　太郎";
name = "鈴木　一郎";

console.log(name);
// > 鈴木　一郎

/*
let name = "山田　太郎";
let name = "鈴木　一郎";

console.log(name);
// >Uncaught SyntaxError: Identifier 'name' has already been declared
*/

/*
const name = "山田　太郎";
name = "鈴木　一郎";

console.log(name);
// >Uncaught SyntaxError: Identifier 'name' has already been declared
*/

let color = "赤";
switch (color) {
case "赤":
console.log("止まれ");
break;
case "黄":
console.log("注意");
break;
case "緑":
console.log("進め");
break;
default:
console.log("無効な色です"); }
// 出力: 止まれ