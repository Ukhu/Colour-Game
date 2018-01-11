var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

resetButton.addEventListener("click", function(){
reset();
});

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 

			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;

			//compare it to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				messageDisplay.style.color = "green";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
				messageDisplay.style.color = "red";
			}
		});
	}
}

function reset(){
	//generate new set of colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change h1 background color back to default
	h1.style.backgroundColor = "steelblue";
	//change resetButton textContent from "Play Again?" to "New Colors"
	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
}

function changeColor(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++){
		arr[i] = "rgb(" + Math.floor(Math.random() * 255 + 1) + ", " + 
				 	Math.floor(Math.random() * 255 + 1) + ", " + 
				 	Math.floor(Math.random() * 255 + 1) + ")";
	}
	//return that array
	return arr;
}