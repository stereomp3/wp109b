請寫出一個具有『加、減、內積、負』的向量物件？ (Vector, add, sub, dot, neg)

提示：架構如下：

class Vector {
  constructor(array) {
    this.a = array
  }
  add(y) {
    var r = []
    var x = this
    for (var i=0; i<x.a.length; i++) {
      r[i] = x.a[i]+y.a[i]
    }
    return new Vector(r)
  }
}

var x = new Vector([1,2,3])
var y = new Vector([1,1,1])
console.log('x.add(y)=', x.add(y)) // Vector { a: [ 2, 3, 4 ] }
console.log('x.add(y).add(y).add(x)=', x.add(y).add(y).add(x)) // Vector { a: [ 4, 6, 8 ] }
// x.dot(y) 應該是 6
// x.neg() 應該是 Vector([-1,-2,-3])
// x.sub(y) 應該是 Vector([0,1,2])

ANSWER:
```
class vector{
    constructor(array){
        this.a = array;
    }
    add(y){
        var r = [];
        for(var i=0; i < this.a.length; i++)
        {
            r[i] = this.a[i] + y.a[i];//y === vector，y.a 跟 this.a 是相同的，但array值不一樣
        }
        return new vector(r);
    }
    sub(y){
        var r = [];
        for(var i=0; i < this.a.length; i++)
        {
            r[i] = this.a[i] - y.a[i];
        }
        return new vector(r);
    }
    dot(y){
        var sum = 0;
        for(var i=0; i < this.a.length; i++)
        {
            sum += this.a[i] * y.a[i];
        }
        return sum;
    }
    neg(){
        var r = [];     
        for(var i=0; i < this.a.length; i++)
        {
            r[i] = -this.a[i];
        }
        return new vector(r);
    }
}

var x = new vector([1,2,3]);
var y = new vector([1,1,1]);

console.log('x.add(y)=', x.add(y));
console.log('x.sub(y)=', x.sub(y));
console.log('x.dot(y)=', x.dot(y));
console.log('x.neg()=', x.neg());
```
執行結果
```
x.add(y)= vector { a: [ 2, 3, 4 ] }
x.sub(y)= vector { a: [ 0, 1, 2 ] }
x.dot(y)= 6
x.neg()= vector { a: [ -1, -2, -3 ] }
```