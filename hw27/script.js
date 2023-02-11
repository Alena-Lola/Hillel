// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз
// і т. д. Все це із замиканнями, наприклад:
//
// sum(3) = 3
//
// sum(5) = 8
//
// sum(20) = 28

function calculator(number){
    let num=number;
    return function (num2){
        return num+= num2
    }
}

const sum=calculator(0)


console.log(sum(3))
console.log(sum(5))
console.log(sum(20))