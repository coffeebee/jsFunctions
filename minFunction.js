const min = (x,y) =>{
    if(x<y)
        return x;    
    else if(y<x)
        return y;
    else 
        return x;
}
console.log(min(4.5,5));
console.log(min(19,9));
console.log(min(1,1));