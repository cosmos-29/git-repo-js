var $board = document.getElementById('board');
var $table = document.createElement('table');

for(var i = 0; i < 10; i++) {
  var $row = document.createElement('tr');
  for(var j = 0; j < 10; j++) {
    var $cell = document.createElement('td');
    $cell.textContent = i + ' ' + j;
    
    $row.appendChild($cell);
  }

  $table.appendChild($row);
}

$board.appendChild($table);