var nsquares = 6
var colors = generateRandomColor(nsquares);
var chosenColor = pickRandom();			  
var h1 = document.querySelector("h1");
var sq = document.querySelectorAll(".square");
var resetbut = document.querySelector("#resetButton");
var topDisplay = document.querySelector("#topDis");
var mes = document.querySelector("#mesDis");
var easyBut = document.querySelector("#easyBut");
var hardBut = document.querySelector("#hardBut");

topDisplay.textContent = chosenColor;
easyBut.addEventListener("click",function(){
	easyBut.classList.add("blue");
	hardBut.classList.remove("blue");
	nsquares = 3;
	colors = generateRandomColor(nsquares);
	chosenColor = pickRandom();
	topDisplay.textContent = chosenColor;
	for(var i = 0 ; i<sq.length ; i++)
	{
		if(i<3)
		{
			sq[i].style.backgroundColor = colors[i];
		}
		else{
			sq[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
});
hardBut.addEventListener("click",function(){
	hardBut.classList.add("blue");
	easyBut.classList.remove("blue");
	nsquares = 6;
	colors = generateRandomColor(nsquares);
	chosenColor = pickRandom();
	topDisplay.textContent = chosenColor;
	for(var i = 0;i<sq.length;i++)
	{
		sq[i].style.backgroundColor = colors[i];
		sq[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";


});

resetbut.addEventListener("click",function()
{
	colors = generateRandomColor(nsquares);
	chosenColor = pickRandom();
	topDisplay.textContent = chosenColor;
	for(var i = 0;i<sq.length;i++)

		sq[i].style.backgroundColor = colors[i];
	h1.style.backgroundColor = "steelblue";
	this.textContent = "NEW COLORS";
	mes.textContent = "";
});

for(var i = 0;i<sq.length;i++)
{
	sq[i].style.backgroundColor = colors[i];
	// console.log(sq[i].style.backgroundColor);

	sq[i].addEventListener("click",function()
	{	
		var pickedColor = this.style.backgroundColor;
		console.log(pickedColor);
		console.log(chosenColor);
		

		if(pickedColor===chosenColor)
		{
			mes.textContent = "Correct";
			colorChange(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetbut.textContent = "Play Again?";

		}
		else
		{
			this.style.backgroundColor = "#232323";
			mes.textContent = "tryAgain";
		}
	});	
} 

function colorChange(color)
{
	for(var i = 0;i<sq.length;i++)
	{
		sq[i].style.backgroundColor = color;
	}
}

function pickRandom()
{
	var random = Math.floor(Math.random()*colors.length);

	return colors[random];
}

function generateRandomColor(num)
{
	var arr = [];
	for(var i = 0;i<num;i++)
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
	var r =Math.floor(Math.random()*256);
	var g =Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g + ", " + b + ")"

}
