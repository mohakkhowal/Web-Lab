a = prompt("Enter a character");
document.write(isVowel(a));
function isVowel(a){
    var data = ['a','e','i','o','u','A','E','I','O','U'];
    return data.includes(a);
}

