var square1= document.querySelector("#color_1");
var squares = document.querySelectorAll(".colors");
var guessColor = document.querySelector("#colorTitle");
var changeColor = document.querySelector("#guess");
var header = document.querySelector("header")
var message = document.querySelector("#message");
var activeClass = document.querySelector(".active");
var difLevel = document.querySelectorAll(".dificulty");
var easyLevel = document.querySelector("#easy");
var hardLevel = document.querySelector("#hard");
var isColor = false;
var isActive = false;


for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor= rgbGenerate();
	
	squares[i].addEventListener("click",function(){
 	
 	 var id = this.getAttribute("id");
 	 var squareColor = this.style.backgroundColor;
		if(!isColor){
			this.style.opacity = "0";
			message.textContent = "Try again!";
			
			if(squareColor === guessColor.textContent){
				changeColor.textContent = "PLAY AGAIN?";
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

//add/remove active class to level of dificulty
difLevel.forEach(function(level){
	level.addEventListener("click", function(){
			this.classList.add("active");
			if(this === easyLevel){
				hardLevel.classList.remove("active");
				
			}else{
				easyLevel.classList.remove("active");
			}
				
	});

});
//function to chose random square's color
function colorToGuess(){
	var randomIndex = Math.floor(Math.random()*(6-0) + 0);
	console.log(randomIndex);
	var square = squares[randomIndex];
	var color = square.style.backgroundColor;
	return color;
}

//mathching the text and the color
guessColor.textContent = colorToGuess();

//creat the reset when clicked
changeColor.addEventListener("click", function(){
	reset();
	
});

//reset function
function reset(){
	changeColor.textContent = "NEW COLOR";
	message.textContent = "";
	header.style.backgroundColor = "rgb(175, 203, 2)";
	activeClass.style.backgroundColor = "rgb(175, 203, 2)";
	squares.forEach(function(square){
		square.style.backgroundColor = rgbGenerate();
		square.style.opacity = "1";
	});
	guessColor.textContent = colorToGuess();
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

