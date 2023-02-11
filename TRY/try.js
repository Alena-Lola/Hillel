
function createIncr(n){
    return function (num){
        return n+num
    }
}

const addOne=createIncr(1)
const addTwo=createIncr(10)

console.log(addOne(1))
console.log(addTwo(1))
