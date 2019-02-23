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


for(var i = 0; i < squares.length; i++){
	
	squares[i].style.backgroundColor= rgbGenerate();
	
	squares[i].addEventListener("click",function(){
 	
 	 	var squareColor = this.style.backgroundColor;
		
		if(!isColor){
			this.style.opacity = "0";
			message.textContent = "Try again!";
			
			if(squareColor === guessColor.textContent){

				changeColor.textContent = "PLAY AGAIN?";
				message.textContent = "Correct!";
				header.style.backgroundColor = squareColor;
				// activeClass.style.backgroundColor = squareColor;

				squares.forEach(function(square){
					square.style.backgroundColor = squareColor;
					square.style.opacity = "1";
				});

				isColor = true;
			}
		}
	});
};


//generate the random numbers with randomNumber()
var index = randomNumber(5,0);
var num1 = randomNumber(5,0);
var num2 = randomNumber(5,0);


/***** ADDING EVENT LISTENER - CLICK ********/

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


/*********** FUNCTIONS ************/

//when easy level, show 3 squares only, and 2 random, out of total 6
function levelEasy(){
	
	if(!isActive){
		
		while(!(num1 !== num2 && num1 !== index && num2 !== index)){
			num1 = randomNumber(5,0);
			num2 = randomNumber(5,0);
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


//function to chose random square's color
function colorToGuess(){
	var color = squares[index].style.backgroundColor;
	console.log(index, color);
	return color;
}

//mathching the text and the color
guessColor.textContent = colorToGuess();

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
