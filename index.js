console.log(1);
document.getElementById('button').onclick = myfunction;

const a=[2,3,9,4];
a.forEach(myfunction);
function myfunction(arg){
    console.log(arg);
}
myfunction(10)
console.log(2);