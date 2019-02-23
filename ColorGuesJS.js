var squares = document.querySelectorAll(".colors");
var guessColor = document.querySelector("#colorTitle");
var changeColor = document.querySelector("#guess");
var header = document.querySelector("header")
var message = document.querySelector("#message");
var activeClass = document.querySelector(".active");
var difLevel = document.querySelectorAll(".level");
var easyLevel = document.querySelector("#easy");
var hardLevel = document.querySelector("#hard");
var isColor = false;
var isActive = false;

//loop through all the squares to find the requested color
for(var i = 0; i < squares.length; i++){
	
	//add random colors to squares
	squares[i].style.backgroundColor= rgbGenerate();
	
	//add even listener to squares
	squares[i].addEventListener("click",function(){
 		//searching for a mac
 	 	var squareColor = this.style.backgroundColor;
		
		//if color of clicked square is not the correct one, isColor=false (!isColor) is true
		if(!isColor){
			
			//make the squares invisible
			this.style.opacity = "0";
			
			//set the message to tyr again
			message.textContent = "Try again!";
			
			//if the color is correct one
			if(squareColor === guessColor.textContent){

				//change the text
				changeColor.textContent = "PLAY AGAIN?";
				message.textContent = "Correct!";
				
				//set the background color of a header to correct color
				header.style.backgroundColor = squareColor;

				//set the color of all squares to correct color and opacity to 1
				squares.forEach(function(square){
					square.style.backgroundColor = squareColor;
					square.style.opacity = "1";
				});
				//boolean is true, quit the game
				isColor = true;
			}
		}
	});
};


//generate the random numbers with randomNumber()
var num1 = randomNumber(5,0);
var num2 = randomNumber(5,0);

//add event listener to "easy level"
easyLevel.addEventListener("click", function(){
	this.classList.add("active");
	hardLevel.classList.remove("active");
	reset();
	levelEasy();

	/*if not reste(), these functions below should be added, to enable
	switch toggle easy/hard*/
	// rgbGenerate();
	// colorToGuess();
	// isColor = false;
	// isActive = false;
});

//when easy level, show 3 squares only, and 2 random, out of total 6
function levelEasy(){
	
	if(!isActive){
		while(!(num1 !== num2 && num1 !== index && num2 !== index)){
			num1 = randomNumber(5,0);
			num2 = randomNumber(5,0);
			console.log(num1, num2, index);
		}

		//adding .easy{display:none} class, to hide all 6 squares
		squares.forEach(function(square){
			square.classList.add("easy");
		});

		//showing only 3 (2+index) which satisfy condition
		// (num1 !== num2 && num1 !== index && num2 !== index)
		squares[num1].classList.remove("easy");
		squares[num2].classList.remove("easy");
		squares[index].classList.remove("easy");
		
		//setting isActive = true, to stop the function
		isActive = true;
	}
}
//add event listener to "hard level"
hardLevel.addEventListener("click", function(){
	this.classList.add("active");
	easyLevel.classList.remove("active");
	// easyLevel.style.backgroundColor = "white";
	reset();
	levelHard();

	/*if not reste(), these functions below should be added, to enable
	switch toggle easy/hard*/
	// rgbGenerate();
	// colorToGuess();
	// isColor = false;
	// isActive = false;
});


//when har level, show all 6 squares
function levelHard(){
	squares.forEach(function(square){
		square.classList.remove("easy");
	});
}

// function for random number, bewteen min and max, including the min and max
function randomNumber(max, min){
	var randomIndex = Math.floor(Math.random()*(max-min + 1) + min);
	return randomIndex;
}

var index = randomNumber(5,0);

//creat the reset when clicked on new color or try again?
changeColor.addEventListener("click", function(){

	//reset all to default
	reset();

	//if easy level, toggle active class, and call easyLevel()
	if(easyLevel.classList.contains("active")){
		hardLevel.classList.remove("active");
		levelEasy();

		//if hard level, call harLevel()
	}else if(hardLevel.classList.contains("active")){
		easyLevel.classList.remove("active");
		levelHard();
	}
});

//reset function
function reset(){
	//change text
	changeColor.textContent = "NEW COLOR";
	message.textContent = "";

	//change background color to default
	header.style.backgroundColor = "rgb(175, 203, 2)";
	
	//generate new colors of squares
	squares.forEach(function(square){
		square.style.backgroundColor = rgbGenerate();
		square.style.opacity = "1";
	});

	//generate new radnom numbers
	index = randomNumber(5,0);
	num1 = randomNumber(5,0);
    num2 = randomNumber(5,0);

	//set the text to color rgb
	guessColor.textContent = colorToGuess();

	//set boolean variables to false
	isColor = false;
	isActive = false;
}

//function to chose random square's color
function colorToGuess(){
	index;
	var color = squares[index].style.backgroundColor;
	console.log(index, color);
	return color;
}
//mathching the text and the color
guessColor.textContent = colorToGuess();

//generating the random color-rgb code
function rgbGenerate(){
	var rgb = [];
	//rgb has 3 elements, positions 0,1,2, so i<3
	for(var i = 0; i < 3; i++){
		rgb [i] = randomNumber(255, 0);
		rgb.push(rgb[i]);
	}
	return rgb = "rgb(" + rgb[0] +" ," +rgb[1]+" ," + rgb[2] + ")";
}

