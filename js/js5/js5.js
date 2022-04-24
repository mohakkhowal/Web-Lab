a = prompt("Enter the numbers");
a = a.split(" ");
document.write("Sum: "+add(a));
document.write("</br>");
document.write("Product: "+multiply(a));

function add(a){
    var ans = 0;
    for(const x of a){
        ans+=(parseInt(x)||0);
    }
    return ans;
}
function multiply(a){
    var ans = 1;
    for(const x of a){
        ans*=isNaN(parseInt(x))?1:parseInt(x);
    }
    return ans;
}

