str = prompt("Enter a string");
charFreq(str);
function charFreq(str){
    const data = new Map();
    for(const x of str.split("")){
        if(data[x]!=undefined){
            data[x]=data[x]+1;
        }
        else{
            data[x]=1;
        }
    }
    console.log(data);
}