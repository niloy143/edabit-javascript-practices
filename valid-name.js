function validName(theName) {

    // condition variables
    let isFirstLetterCapital = false;
    let isInitialValid = true;
    let isWordsNotOneChar = true;
    let isName2Or3Words = false;
    let istheLastWordValid = true;
    let isMiddleAndFirstNameValid = true;

    
    const capitalArray = theName.split(' ');
    let capitalCount = 0;
    for (let i=0; i<capitalArray.length; i++) {

        // deleting empty words
        if(capitalArray[i] === '') {
            capitalArray.splice(capitalArray.indexOf(capitalArray[i], 1));
            continue;
        }

        if(capitalArray[i][0] === capitalArray[i][0].toUpperCase()) {
            capitalCount++;
        }

        // checking if the initial is valid or not
        if(capitalArray[i].endsWith('.')) {
            if(capitalArray[i].length !== 2) {
                isInitialValid = false;
            }
        }

        // checking if any words are one character
        if(capitalArray[i].length === 1) {
            isWordsNotOneChar = false;
        }
        
    }

    // checking if all the first letters are uppercase;
    if(capitalArray.length === capitalCount) {
        isFirstLetterCapital = true;
    }

    // checking if the name 2 or 3 words long
    if(capitalArray.length === 2 || capitalArray.length === 3) {
        isName2Or3Words = true;

        if(capitalArray.length === 3) {
            if(capitalArray[0].length === 2 && capitalArray[0].endsWith('.')) {
                if(!(capitalArray[1].length === 2 && capitalArray[1].endsWith('.'))) {
                    isMiddleAndFirstNameValid = false;
                }
            }
        }
    }

    // checking the last word a name or not
    if(capitalArray[capitalArray.length - 1].length < 2 || capitalArray[capitalArray.length - 1].endsWith('.')) {
        istheLastWordValid = false;
    }


    // the final result
    if(isFirstLetterCapital && isInitialValid && isMiddleAndFirstNameValid && isName2Or3Words && isWordsNotOneChar && istheLastWordValid) {
        return true;
    }
    else {return false;}
}

console.log(validName('Herb. George Wells'));