function findLongest(sentence) {
    if (typeof sentence !== 'string') {
        return '';
    }

    let arrSentence = sentence.split(' ');
    let longest='';
    
    for (let i = 0; i < arrSentence.length; i++) {
        let wordLength = arrSentence[i].length;

         if (longest.length < wordLength) {
            longest = arrSentence[i];   
        }
    }

    return longest;

}

console.log(findLongest('london is the capital of great britain its political economic and cultural centre political'))