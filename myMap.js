Array.prototype.myMap=function(cb){
    let temp=[];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i],i,this));        
    }
    return temp;
}
let arr=[1,2,3,4,5];
let newArr=arr.myMap((num,i,arr)=>num*2)
console.log(newArr);