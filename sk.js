var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var p1dis = document.querySelector("#p1d");
var p2dis = document.querySelector("#p2d");
var reset = document.querySelector("#res");
var gameOver = false;
var winScore = 5;
var input = document.querySelector("input");
var playing = document.querySelector("#playingTo");



p1.addEventListener("click",function(){
	if(!gameOver)
		{
		p1Score++;
		if(p1Score===winScore)
		{
			gameOver=true;
			p1dis.classList.add("win");
			console.log("Gameover");
		}	
	}
	p1dis.textContent = p1Score;
})

p2.addEventListener("click",function(){
	if(!gameOver)
		{
		p2Score++;
		if(p2Score===winScore)
		{
			gameOver=true;
			p2dis.classList.add("win");
			console.log("Gameover");
		}}
	p2dis.textContent = p2Score;
})

reset.addEventListener("click",function()
{
	rese();
})
function rese(){
	p1Score = 0;
	p2Score = 0;
	p1dis.textContent = p1Score;
	p2dis.textContent = p2Score;
	gameOver = false;
	p1dis.classList.remove("win");
	p2dis.classList.remove("win");
}
// if(p1Score===winScore)
// {
// 	gameOver=true;
// 	alert("Player 1 wins");
// }
// else if(p2Score===winScore)
// {
// 	gameOver=true;
// 	alert("Player 2 Wins");
// }
input.addEventListener("change",function(){
	playing.textContent = Number(input.value);

	winScore = Number(input.value);
	rese();
})




