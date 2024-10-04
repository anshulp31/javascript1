
function printDetails(country,city) {
    console.log(`${this.firstName} ${this.lastName} ${country} ${city}`)
}

const user={
    firstName:"Anshul",
    lastName:"Porwal"
}
Function.prototype.myApply=function(context,args){
    if(typeof this!=='function'){
        throw new Error("Its not callable");
    }
    if(!Array.isArray(args)){
        throw new Error("Create list of array like called on a non-object") 
    }
    context.fn=this;
    context.fn(...args);
}

printDetails.myApply(user,["India","Indore"]);