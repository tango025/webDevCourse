function isEven(num)
{
	if (num%2=== 0) 
		return true;
	else
		return false;

	
}

function factorial(num)
{
	var f=1;
	for (var i = num; i >= 1; i--) {
		f*=i;
	}
	return f;
}

function kababToSnake(str)
{
	for(i=0;i<str.length;i++)
	{
		if(str[i]=='-')
			newstr=str.replace(/-/g,'_');

	}
	return newstr;
}

function talk()
{
	console.log("HEY THERE!!!");
}

//HIGHER ORDER FUNCTION
setInterval()