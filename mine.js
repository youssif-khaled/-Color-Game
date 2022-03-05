var span = document.getElementById('color-display');
var square = document.querySelectorAll('.square');
var reset = document.getElementById('reset');
var header = document.getElementById('ground');
var easy = document.getElementById("easy");
var messageDisplay = document.querySelector("#message");

var arr2 = [];
var index;
var pick = 6;


 function change(){

	index= Math.floor(Math.random() * 6);
	var color = changeColors(pick);
	reset.textContent = "New Colors"
	messageDisplay.textContent = "";
	for (var i = 0; i < square.length; i++){
		
			square[i].style.backgroundColor = color[i];
	
	}
	
}
reset.addEventListener("click", function () {

	change();
})
easy.addEventListener("click", function () {
	pick = 3;
	var color = changeColors(pick);
	change();

})

function changeColors(k) {
	var arr = [];
	for (var i = 0; i < k; i++) {
		arr.push(randomColor());
	}
	span.textContent = arr[index];
	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function setupSquares() {
	
	for(var i = 0; i < square.length; i++){
	
		square[i].addEventListener("click", function(){
			if(this.style.backgroundColor == span.textContent){
				messageDisplay.textContent = "Correct!";
				reset.textContent = "Play Again?";
				header.style.backgroundColor = span.textContent;
				
				
				
			
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
			
		});
	}
}
setupSquares();