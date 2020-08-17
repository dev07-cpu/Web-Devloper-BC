alert("Connected!");

//button selection


var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

//display installation

var displayP1score = document.querySelector("#scoreone");
var displayP2score = document.querySelector("#scoretwo");
var numInput = document.querySelector("input");
var displaynumInput = document.querySelector("p span");


//ground rule
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


//event-triggers for each button click
p1Button.addEventListener("click", function(){
	if(!gameOver){
	p1Score++;
	if(p1Score===winningScore){
		gameOver = true;
		displayP1score.classList.add("winner");
	}
	// console.log(p1Score);
	displayP1score.textContent= p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score++;
	if(p2Score===winningScore){
		gameOver = true;
		displayP2score.classList.add("winner");
	}
	// console.log(p1Score);
	displayP2score.textContent= p2Score;
	}
});

resetButton.addEventListener("click",function(){
	p1Score = 0;
	p2Score = 0;
	displayP1score.textContent = 0;
	displayP2score.textContent = 0;
	displayP1score.classList.remove("winner");
	displayP2score.classList.remove("winner");
	gameOver = false;
});

numInput.addEventListener("change", function(){
	displaynumInput.textContent=numInput.value;
	winningScore=Number(numInput.value);
	reset();
});


function reset(){
	p1Score = 0;
	p2Score = 0;
	displayP1score.textContent = 0;
	displayP2score.textContent = 0;
	displayP1score.classList.remove("winner");
	displayP2score.classList.remove("winner");
	gameOver = false;
}