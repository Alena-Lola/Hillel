function reverse(n) {
    if (!(typeof n==='number')){
        console.log(0);
    }else{
        n = n + "";
        return n.split("").reverse().join("");
    }
}
console.log(Number(reverse(12345)));
