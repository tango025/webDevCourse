var array = [1,2,3,4,5];
function preReverse( vara)
{
	for(i = vara.length - 1;i >= 0;i--)
	{
		console.log(vara[i]);
	}
}

function isUniform(vara)
 {
 	var flag=0;
 	for(var i=0;i<vara.length-1;i++)
 	{
 		if(vara[i]===vara[i+1])
 		{
 			flag++;
 		}
 	}
 	console.log(flag);
 	if(flag===vara.length-1)
 		console.log("Uniform array");
 	else
 		console.log("non Uniform array");
 }
