alert(filterLongWords());
function filterLongWords(){
    data = prompt("Enter the string").split(" ");
    i = parseInt(prompt("Enter cutoff length"));
    console.log(data);
    console.log(i);
    let ans = [];
    for(const x of data){
        if(x.length>i){
            ans.push(x);
            console.log(ans);       
        }
    }
    return ans;
}