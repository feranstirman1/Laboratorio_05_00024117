function esPalindromo(palabra){
    var inverso= palabra.split("").reverse().join("");
    if(inverso==palabra){
        return true;
    }
    return false;
}