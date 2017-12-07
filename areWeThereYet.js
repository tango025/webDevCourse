// var answer =prompt("Are We there Yet") ;
// while(answer!=="yeah" && answer!=="Yes")
// {
// 	answer=prompt("Are We there Yet");
// }
// alert("Yah");
var answer =prompt("Are We there Yet") ;
while(answer.indexOf("yes")===-1 && answer.indexOf("yeah")===-1)
{
	answer=prompt("Are We there Yet");
}
alert("Yah");