a = prompt("Enter String 1");
b = prompt("Enter String 2");
document.write("<h3>mixUp:</h3>");
document.write(a+" , "+b+"</br>");
document.write(mixUp(a,b)+"</br>");
c = prompt("Enter String for verbing");
document.write("<h3>verbing:</h3>");
document.write(c+" : "+verbing(c)+"</br>");
function mixUp(x,y){
    return y.slice(0,2)+x.slice(2)+" "+x.slice(0,2)+y.slice(2);
}
function verbing(x){
    if(x.length<3)return x;
    else if(x.slice(-3)=="ing")return x+"ly";
    else return x+"ing";
}
