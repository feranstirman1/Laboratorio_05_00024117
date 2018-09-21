function burbuja(miArray)
{
    for(var i=1;i<miArray.length;i++)
    {
        for(var j=0;j<(miArray.length-i);j++)
        {
            if(miArray[j]>miArray[j+1])
            {
                k=miArray[j+1];
                miArray[j+1]=miArray[j];
                miArray[j]=k;
            }
        }
    }
    return miArray;
}


