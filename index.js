function myfunction(p){
    console.log('hello world',p);
}
myfunction();


const h = [1,2,3,4,5,6]

h.forEach(myfunction)

const fn = function(p,m){
    return p*m ;
}
fn(200)

const arrow = (p,m)=>{
    return p+m;
}
const m = fn(2,3)
const arr = arrow(5,10)
console.log(m)
console.log(arr)

const b = (k,j)=> k-j
const d = b(9,6)
console.log(d)

const pos = a => "Hello"
const o = pos(2)
console.log(o)

const array4 = ()=>[1,2,3,4,5]
const e =array4()
console.log(e)

const obj = {
    a:1,
    b:2,
}

const w = ()=>({
    a:1,
    b:2
});
console.log(w)

const qwerty = {
    r:100,
    t:200,
    myf : ()=>{
        return this.r+this.t;
    }
}

console.log(qwerty.myf())

const ras = {
    ab:1,
    ac:2,
    cd:function(){
        console.log(this);
    }
};

const you = {
    a:8,
    b:9
}


var ds = ras.cd;
ds.call(you)

ras.cd = ras.cd.bind(ras)
var l =ras.cd;
l()

//bind,call,apply

class Putin{
    mydart=()=>{
        console.log(this)
    }
}
var buty = new Putin();
var ert = buty.mydart.bind(buty);
ert.call(buty)