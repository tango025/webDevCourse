secretNumber=8;
guess=prompt("Guess a number");
if (Number(guess)===secretNumber) {alert("correct");}

else if (Number(guess)>secretNumber) {alert("high");}

else if (Number(guess)<secretNumber) {alert("low");}

else
{
	alert("Pick a correct number");
}