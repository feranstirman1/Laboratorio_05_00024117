function Conversor(numero){
    var binario="";
    while(numero>0){
        binario=binario+(numero%2).toString();
        numero=Math.trunc(numero/2);
    }
    binario=binario.split("").reverse().join("");
    return binario;
}