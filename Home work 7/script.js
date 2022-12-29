const arrayOne=['Lviv','Dnipro','Ternopil','London'];
const arrayTwo=['Dnipro','Paris','York','Ternopil'];

function choose(innerArrayOne,innerArrayTwo){
    let sameArray=[];

    if(!(innerArrayOne instanceof Array && innerArrayTwo instanceof Array)){
        console.log('mistake: not array');
        return [];
    }

    for (let i=0;i<=innerArrayOne.length;i++){
        const elementOne=innerArrayOne[i];
        if (!(innerArrayTwo.includes(elementOne))){
            sameArray.push(elementOne);
        }
    }
    for(let i=0;i<=innerArrayTwo.length ;i++){
        const elementTwo=innerArrayTwo[i];
        if (!(innerArrayOne.includes(elementTwo))){
            sameArray.push(elementTwo)
        }
    }
    return sameArray;
}

console.log(choose(arrayOne,arrayTwo));
