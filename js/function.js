var num1=200;
var num2=350;

num3=add(num1,num2);
console.log(num3);

num4=sub(num1,num2);
console.log(num4);

num5=multiple(num1,num2);
console.log(num5);


function add(x,y)
{
    z=x+y;
    return z;
}
function sub(x,y)
{
    z=x-y;
    return z;
}
function multiple(x,y)
{
    z=x*y;
    return z;
}