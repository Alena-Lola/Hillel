const input=document.getElementsByTagName('input')[0]

input.addEventListener('change',inputWords)

function inputWords(){
    const array=input.value.split('')
    const wordObject={}
    for (let i=0;i<array.length;i++){
        const value=array[i]
        console.log(value,i)
        if (wordObject.hasOwnProperty(value)){
            wordObject[value]++
        }else {
            wordObject[value]=1
        }
    }
    console.log(wordObject)
}
