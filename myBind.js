function printDetails(country,city) {
    console.log(`${this.firstName} ${this.lastName} ${country} ${city}`)
}

const user={
    firstName:"Anshul",
    lastName:"Porwal"
}

Function.prototype.myBind=function(context,...args){
    let cont=JSON.parse(JSON.stringify(context));
    if(typeof this!=='function'){
        throw new Error("Its not callable");
    }
    cont.fn=this
    return function(...newArgs){
        return cont.fn(...args,...newArgs);
    }
}
let fun=printDetails.myBind(user);
fun("India","Indore");
console.log(user)
