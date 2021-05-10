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

console.log('x.add(y)=', x.add(y).add(x).add(y));
console.log('x.sub(y)=', x.sub(y));
console.log('x.dot(y)=', x.dot(y));
console.log('x.neg()=', x.neg());
