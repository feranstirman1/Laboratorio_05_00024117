function areaCirculo(radio){
    if(radio==0 || radio<0){
        return -1;
    }else{
        var area= Math.PI * (radio*radio);
        return area;
    }
}