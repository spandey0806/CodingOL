//  Q1: Create a counter function which has increment and getValue functionality

const privateCounter = function (){
    let count =0 ;
    return {
        increment : (val =1)=> {
            count += val;
        },
        getValue :  ()=>{
            return count;
        }
    }
}

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());




//

const privateSecret =()=>{
    let secret ="foo";
    return () => secret ;
}

const getSecret = privateSecret();
console.log(getSecret());