a = prompt("Enter the string");
data = a.split(" ")
console.log(a);
console.log(data);
alert(findLongestWord(data))
function findLongestWord(data){
    let len = 0,ans="";
    for(const x of data){
        if(x.length>len){
            len=x.length;
            ans=x;
        }
    }
    return ans;
}