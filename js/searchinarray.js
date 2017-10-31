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