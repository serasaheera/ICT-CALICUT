function operation()
{
    var x=parseInt(document.getElementById("number1").value);
    var y=parseInt(document.getElementById("number2").value);
    var op=document.getElementById("operation").value;
    var z=0;
    if(op=="Addition")
    {
        z=x+y;
    }
    else if(op=="subtraction")
    {
        z=x-y;
    }
    else if(op=="multiplication")
    {
        z=x*y;
    }
    console.log(z);
    document.getElementById("result").innerHTML="<b>"+z+"<b>";
    // alert(z);

}
