var num=531;

var result=findReverse(num);
console.log(result);



function findReverse()
{
    var rev=0;
    var rem=0;

    while(num>0)
    {
    rem=num%10;
    rev=rev*10+rem;
    num=parseInt(num/10);
  
    }
    return rev;
}

