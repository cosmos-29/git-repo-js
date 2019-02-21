var a;
var b;
a = +prompt("Введите число A");
b = +prompt("Введите число B");
function compare_ab(x,y) {
if (x >= 0 && y >=0) {
if (x-y > 0) {
alert(x-y);
} else {
alert(y-x);
}
}
 else if (x < 0 && y < 0) {
alert(x*y);
} else if (x > 0 && y <0 || x > 0 && y < 0) {
alert(x+y);
}
}
compare_ab(a,b);