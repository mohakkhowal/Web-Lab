a = BigInt(prompt("number 1"));
b = BigInt(prompt("number 2"));
document.write(greater(a,b));
function greater(a,b){
    if(a<b){
        return b;
    }
    else{
        return a;
    }
}

