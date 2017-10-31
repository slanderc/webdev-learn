var SIZE_ARRAY = 10;
var MAX_RANDOM_BOARD = 15;

var randomArray = [];

for (var i = 0; i < SIZE_ARRAY; i++) {
  randomArray.push(Math.floor(Math.random() * MAX_RANDOM_BOARD));  
}

do {
  var key = prompt('Enter element:', '');
  var checkFlag = false;
  if (key % 1 != 0) {
    checkFlag = true;  
  }
  if (checkFlag) {
    alert("Input error! Repeat input."); 
  }
} while (checkFlag || (key == '') || isNaN(key)
         || (key == null));
         
document.write("<p>Filled random array:</p>");
document.write("<p>" + randomArray + "</p>");
         
if (randomArray.indexOf(parseInt(key)) !== -1) {
  document.write("<p>This element in random array!</p>"); 
} else {
  document.write("<p>This element not in random array.</p>");
}