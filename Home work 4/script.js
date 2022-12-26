console.group('Вивести на сторінку в один рядок через кому числа від 10 до 20.');
let number=10;
let string='';
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



console.group('Вивести квадрати чисел від 10 до 20.');
let i=10;
while (i<=20){
    console.log(i,`Square of number ${i*i}`);
    i++;
}
console.groupEnd();


console.group('Вивести таблицю множення на 7.');
for(let n=1;n<=10;n++){
    console.log(`${n}*7=${n*7}`);
}
console.groupEnd();


console.group('Знайти добуток усіх цілих чисел від 15 до 35.');
let num=1;
for(let i=15;i<=35;i++){
    num=num*i;

}
console.log(num);
console.groupEnd();


console.group('Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');
let plus=0;
let arithmetic=0;
for(let i=1;i<=500;i++){
    plus=plus+i;
    arithmetic=plus%i;

}
console.log(plus,arithmetic);
console.groupEnd();

console.group('Вивести суму лише парних чисел в діапазоні від 30 до 80.');
let sum=0;
for(let i=30;i<=80;i++){
    if (!(i%2)) {
        sum=sum+i;
    }
    }
console.log(sum);
console.groupEnd()





