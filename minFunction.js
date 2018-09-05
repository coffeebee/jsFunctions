const min = (x,y) =>{
    if((typeof x ==='string') || (typeof y ==='string')){
        return "NA";
    }
    else if(x<y)
        return x;    
    else if(y<x)
        return y;
    else (x===y)
        return x;   
}
console.log(min(4.5,5));
console.log(min(19,9));
console.log(min(1,1));

//console.log(min("dog", "to"));