
function memoize(fn) {
    const cache={}
     return function(...args) {
         const key=JSON.stringify(args);
         if(cache[key]){
             return cache[key];
         }
         const result=fn(...args);
         cache[key]=result;
         return result;
     }
 }
 let cnt=0;
 function multiply(a,b){
    cnt++;
    return a*b;
}
 const memoizedFn=memoize(multiply);

 console.log(memoizedFn(10,20));
 console.log(memoizedFn(10,50));
 console.log(memoizedFn(10,20));

console.log(cnt);
