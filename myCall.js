
function printDetails(country,city) {               
    console.log(`${this.firstName} ${this.lastName} ${country} ${city}`)
}

const user={
    firstName:"Anshul",
    lastName:"Porwal"
}
Function.prototype.myCall=function(context,...args){
    if(typeof this!=='function'){
        throw new Error("Its not callable");
    }
    context.fn=this;
    context.fn(...args);
}

printDetails.myCall(user,"India","Indore");
console.log("user" ,user);