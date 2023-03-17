function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    return function add(a,b){return a+b}
}


function returnsAnAnonymousFunction(){
    return  (a,b)=>{
        a * b;
    }
}