var square1= document.querySelector("#color_1");
var squares = document.querySelectorAll(".colors");
var guessColor = document.querySelector("#colorTitle");
var playAgain = document.querySelector("#guess");
var header = document.querySelector("header")
var message = document.querySelector("#message");
var activeClass = document.querySelector(".active");
var isColor = false;



for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor= rgbGenerate();
	
	squares[i].addEventListener("click",function(){
 	
 	 var id = this.getAttribute("id");
 	 var squareColor = this.style.backgroundColor;
		if(!isColor){
			this.style.opacity = "0";
			message.textContent = "Try again!";
			
			if(squareColor === color){
				playAgain.textContent = "PLAY AGAIN?";
				message.textContent = "Correct!";
				header.style.backgroundColor = squareColor;
				activeClass.style.backgroundColor = squareColor;

				squares.forEach(function(square){
					square.style.backgroundColor = squareColor;
					square.style.opacity = "1";
				});

				isColor = true;
			}
		}
	});
};
var randomIndex = Math.floor(Math.random()*(6-0) + 0);
console.log(randomIndex);
var square = squares[randomIndex];
var color = square.style.backgroundColor;
console.log(color);
guessColor.textContent = color;

playAgain.addEventListener("click", function(){
	reset();
});

function reset(){
	playAgain.textContent = "NEW COLOR";
	message.textContent = "";
	header.style.backgroundColor = "rgb(175, 203, 2)";
	squares.forEach(function(square){
		square.style.backgroundColor = rgbGenerate();
		square.style.opacity = "1";
	});
	randomIndex = Math.floor(Math.random()*(6-0) + 0);
	console.log(randomIndex);
	var square = squares[randomIndex];
	var color = square.style.backgroundColor;
	console.log(color);
	guessColor.textContent = color;
	isColor = false;
	
}


//generating the random color-rgb code
function rgbGenerate(){
	var min = 100;
	var max = 250;
	var rgb = [];
	for(var i = 0; i < 2; i++){
		rgb [i] = Math.floor(Math.random() * (max - min) + min);
		rgb.push(rgb[i]);
	}
	return rgb = "rgb(" + rgb[0] +" ," +rgb[1]+" ," + rgb[2] + ")";
}

//chose a random color to be displayed at the top

