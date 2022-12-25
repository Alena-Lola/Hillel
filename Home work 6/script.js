let array= [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


console.group('Знайти суму та кількість позитивних елементів');
let sum=0;
let counter_max=0;
for (let i=0; i<=array.length; i++) {
    if (array[i] > 0) {
        sum = sum+array[i];
        counter_max++ ;
    }
}
console.log(sum,counter_max);
console.groupEnd();



console.group('Знайти мінімальний елемент масиву та його порядковий номер.');
let min=0;
for (let i=0;i<=array.length;i++){
    if (array[i]<array[min]){
        min=i;
    }
}
console.log(array[min],min);
console.groupEnd();



console.group('Знайти максимальний елемент масиву та його порядковий номер.');
let max=0;
for (let i=0;i<=array.length;i++){
    if (array[i]>array[max]){
        max=i;
    }
}
console.log(array[max],max);
console.groupEnd();

console.group('Визначити кількість негативних елементів.');
let counter_min=0
for (let i=0;i<=array.length;i++){
    if(array[i]<0){
        counter_min--;
    }
}
console.log(counter_min);
console.groupEnd();

console.group('Знайти добуток позитивних елементів.');
let prod=1;
for (let i=0;i<=array.length;i++){
    if(array[i]>0){
        prod=prod*array[i];
    }
}
console.log(prod);
console.groupEnd();
