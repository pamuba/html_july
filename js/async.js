//#1. always returns a promise
//#2. blocks only the statement
//#3. if u have more than one await, they will execute parallely
//#4. await accept thenables, obs with callable then methods

class Thenable{
    constructor(num){
        this.num = num
    }
    then(resolve, reject){
        console.log(resolve)

        setTimeout(()=> resolve(this.num*2),1000);
    }
}

async function f(){
    //waits fr 1 sec, then result becomes 2
    let result = await new Thenable(1);
    console.log(result);
}

f();