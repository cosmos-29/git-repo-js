//тест
var x = 8;
var y = 8;
var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var chessBoard = document.getElementById("chessBoard");

for (var i = 0; i <= y; i++){
   if (i < y) {
    var row = chessBoard.appendChild(document.createElement("div"));
    for (var j = 0; j <=x ; j++){
        if (j < x) {
        	row.appendChild(document.createElement("span"));
    } else if (j == x) {
    		var $cellEnd = document.createElement("div");
    		row.appendChild($cellEnd);
    		$cellEnd.textContent = x - i;
    				}
				}
			} else {
				row = chessBoard.appendChild(document.createElement("div"));
				for (var j = 0; j < x ; j++) {
					var $cell = document.createElement("span")
					row.appendChild($cell);
					$cell.textContent = arr[j];	

				 }
			}
			

}