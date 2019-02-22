
//selecting html elements
var play_1Btn = document.querySelector("#player1Btn");
var play_2Btn = document.querySelector("#player2Btn");
var rsetBtn   = document.querySelector("#resetBtn");
var score_1Disp = document.querySelector("#score_pl1");
var score_2Disp = document.querySelector("#score_pl2");
var maxScoreText = document.querySelector("#maxNumb").textContent;
var maxScore = Number(maxScoreText);
var inputScore = document.querySelector("#inputMax");


//variable to disable further clicking when max score is reached
var isGameOver = false; 

//defining the scores variables
var score_1 = 0;
var score_2 = 0;

//adding the event listener to the button of player 1
play_1Btn.addEventListener("click", function(){
	//if it is not game over, (if it is true that isGameOver = false),incerase the score
	if (!isGameOver){
		score_1++;
		
		//if max score is reached, game is over 
		if (score_1 == maxScore){
			//adding green color to the winner
			score_1Disp.classList.add("winner");
			isGameOver = true;
		}
	}
	score_1Disp.textContent = score_1;
});

//adding the event listener to the button of player 2
play_2Btn.addEventListener("click", function(){
	
	//if it is not game over, (if it is true that isGameOver = false),incerase the score
	if (!isGameOver){
		score_2++;

		//if max score is reached, game is over 
		if (score_2 == maxScore){

			score_2Disp.classList.add("winner");
			isGameOver = true;
		}
	}
	score_2Disp.textContent = score_2;
});


//adding the event listener to the reset button
rsetBtn.addEventListener("click", function(){
	//function run everytime when reset is clicked
	resetAll();
	document.querySelector("#maxNumb").textContent ="5";
	inputScore.value = "";
});

function resetAll(){
	//return score counting to 0
	score_1 = 0;
	score_2 = 0;

	//set result display to 0
	score_1Disp.textContent = score_1;
	score_2Disp.textContent = score_2;

	//remove winner classes
	score_1Disp.classList.remove("winner");
	score_2Disp.classList.remove("winner");

	//set again isGameOver to false
	isGameOver = false;
};

//add event listener to input
inputScore.addEventListener("input", function(){
	var newMaxScore = inputScore.value;
	maxScore = Number(newMaxScore);
	document.querySelector("#maxNumb").textContent = newMaxScore;
	resetAll();
});