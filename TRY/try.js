const input = document.getElementsByTagName('input')[0]
input.addEventListener('change', inputWords)



function inputWords (){
    const array = input.value.split('')
    const wordsObject = {}
    for (let i = 0; i< array.length;i++ ){
        const value = array[i]
        console.log(value,i)
        if (wordsObject.hasOwnProperty(value)){
            wordsObject[value]++
        }else {
            wordsObject[value] = 1
        }
    }
    console.log (wordsObject)
}