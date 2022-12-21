let number=10;
let string='';
console.group();
while (number<=20){
    if (number===20){
        string+=number;
    }else {
    string+=`${number},`;
    }
    number++;
}
console.log(string);
console.groupEnd();














