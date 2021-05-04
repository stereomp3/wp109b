function isPrime(n)
{
    var flag=0;
    for(var i=2; i<=n/2; i++)
    {
        if(n==1)
        {
            flag=0;
        }
        else if(n%i==0)
        {
            flag++;
        }
    }
    if(flag == 0)
    {
        console.log(n);
    }
}
function primeBetween(a,b)
{
    for(var a; a<=b; a++)
    {
        isPrime(a);
    }
}

primeBetween(3,15);