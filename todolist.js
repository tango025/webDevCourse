// toDoList = ["hui "];

// while(num !== "4")
// {	
// 	var num = prompt("Enter the choice");
// 	if(num==="1")
// 	{
// 		var a=prompt("Enter the todo");
// 		toDoList.push(a);
// 		console.log(a + "is in your todolist");
// 	}
// 	else if (num==="2") 
// 	{
// 		for(var i=0;i<toDoList.length;i++)
// 			{
// 				console.log(i + ":" + toDoList[i]);
// 			}
// 	}
// 	else if(num==="3")
// 	{
// 		var del = prompt("Enter the task to delete");
// 		console.log(toDoList.indexOf(del));
// 		if(toDoList.indexOf(del)!==-1)
// 		{
// 			toDoList.splice(toDoList.indexOf(del),1);
// 		}
			
// 	}
			
// }

var lis = document.querySelectorAll("li");

for( var i = 0;i<lis.length;i++)
{
	lis[i].addEventListener("mouseover",function(){
		this.classList.add ("selected");
	});

	lis[i].addEventListener("mouseout",function(){
		this.classList.remove("selected");
	});	

	lis[i].addEventListener("click",function(){
		this.classList.toggle("strike");
	});	
}
