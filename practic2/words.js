function findLongest(sentence) {
    let arrSentence = sentence.split(' ');
    let longest;
    let wordLength = 0;

    for (let i = 0; i < arrSentence.length; i++) {
        wordLength = arrSentence[1].length;

        if (arrSentence[i].length > wordLength) {
            longest = arrSentence[i];

            return longest;
        }
    }

    if (typeof sentence !== 'string') {
        return ' ';
    }

}


console.log(findLongest('london is the capital of great britain its political economic and cultural centre political'))

