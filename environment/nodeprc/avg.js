var arraay = [10,20,30,40];
avg(arraay);
function avg(arr)
{
    var sum = 0;
    for(var i = 0;i<arr.length;i++)
    {
        sum +=arr[i];
    }
    sum /=arr.length;
    console.log(sum);
}