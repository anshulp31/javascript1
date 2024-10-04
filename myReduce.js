//reduce takes a callback fn as an argument return one calculated value

//Add the myReduce function in prototype of array
Array.prototype.myReduce=function(cb,initialValue){
    // here this keyword is pointing the array with this funtion has been invoked
    let acc=initialValue
    for (let i = 0; i < this.length; i++) {
        //here if user does not provide  a initial value of accumlator then we assign a value of Oth index of array
        acc=acc?cb(acc,this[i],i,this):this[i];
    }
    return acc;
}
let arr=[1,2,3,4,5];
let sum=arr.myReduce((acc,curr,i,arr)=>acc+=curr,0)
console.log(sum)