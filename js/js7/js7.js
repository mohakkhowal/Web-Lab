a = prompt("Enter the string");
var dict = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};
translate(a);
function translate(a){
    ans = "";
    for(const x of a.split(" ")){
        if(x in dict){
            ans+=dict[x];
        }
        else{
            ans+=x;
        }
        ans+=" ";
    }
    alert(ans);
}