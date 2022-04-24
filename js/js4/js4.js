a = prompt("Enter a string");
document.write(translate(a));
function translate(a){
    var ans = "";
    var data = ['a','e','i','o','u','A','E','I','O','U'," "];
    for(const x of a){
        if(data.includes(x)){
            ans+=x;
        }
        else{
            ans+=x+"o"+x;
        }
    }
    return ans;
}

