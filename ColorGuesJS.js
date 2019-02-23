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
var isEasy = false;


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

var num1 = randomNumber();
var num2 = randomNumber();
var count;
//add event listener to easy/hard level, to toggle active class
difLevel.forEach(function(level){
	
	level.addEventListener("click", function(){
		
		this.classList.add("active");
		
		//if easy is clicked
		if(this === easyLevel){
			
			//remove active class from hard
			hardLevel.classList.remove("active");
			
			//set all squares class .easy{display:none;}
			squares.forEach(function(el){
				el.classList.add("easy");
			});

			if(isEasy){
			//find 2 random squares to show with chosen square, by index
				while (num1 === num2 || num1 === index || num2 === index){
					console.log("Not satisfied");
					num1 = randomNumber(6,0);
					num2 = randomNumber(6,0);
					console.log(num1, num2, index);
					count++;

				}
			}else{
				console.log("Satisfied");
				squares[num1].classList.remove("easy");
				squares[num2].classList.remove("easy");
				squares[index].classList.remove("easy");
				console.log(squares[index].getAttribute("id"));
				// reset();
				isEasy = true;
			}
		}else{
			easyLevel.classList.remove("active");
			
			squares.forEach(function(el){
				el.classList.remove("easy");
			});
		}	

				
	});

});


// function for random number, bewteen min and max, including the min and max
function randomNumber(max, min){
	var randomIndex = Math.floor(Math.random()*(max-min + 1) + min);
	return randomIndex;
}
var index;
//function to chose random square's color
function colorToGuess(){
	index = randomNumber(6,0);
	// var randomIndex = Math.floor(Math.random()*(6-0) + 0);
	console.log(index);
	var square = squares[index];
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
	isEasy = false;
}


//generating the random color-rgb code
function rgbGenerate(){
	var rgb = [];
	for(var i = 0; i < 3; i++){
		rgb [i] = randomNumber(250, 10);
		rgb.push(rgb[i]);
	}
	return rgb = "rgb(" + rgb[0] +" ," +rgb[1]+" ," + rgb[2] + ")";
}

//chose a random color to be displayed at the top

