#
1.請寫一個程式可以印出指定數量的 * 號
例如： star(5) 會印出 5 個 * 號

star(5)

*
*
*
*
*

第一題ANSWER
```
function star(n)
{
    for(var i=0; i<=n; i++)
    {
        console.log("*");
    }
}

star(5);
```
執行結果
```
*
*
*
*
*
*
```

2.請寫一個函數可以印出 a..b 之間的所有整數
例如： between(3,8) 會印出

3
4
5
6
7
8

第二題ANSWER
```
function between(a,b)
{
    for(var a; a<=b; a++)
    {
        console.log(a);
    }
}

between(3,8);
```
執行結果
```
3
4
5
6
7
8
```

加分題

3 請寫一個函數 primeBetween(a,b) 可以印出 a..b 之間的質數

例如 primeBetween(3,15)

3
5
7
11
13
記得善用函數，先寫一個判斷是否為質數的函數 isPrime(n) 去判斷會比較好

第三題ANSWER
```
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
```
執行結果
```
3
5
7
11
13
```
