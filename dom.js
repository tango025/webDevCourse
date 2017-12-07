// document.getElementById("First")
// document.getElementsByClassName("Special")
// document.getElementsByTagName("p")
// document.querySelector("#first")
// document.querySelector("p")
// document.querySelectorAll("Special")[0]
var isPurple = false;

var butt = document.querySelector("button");
butt.addEventListener("click",function(){
	// if(isPurple)
	// {
	// 	document.body.style.background = "white";
	// 	isPurple = false;
	// }
	// else
	// {
	// 	document.body.style.background = "purple";
	// 	isPurple = true;
	
	// }
	document.body.classList.toggle("tog");
});


