function isValid(theString) {
    const stringToArray = theString.split('');
    const uniqueArray = [];
    let multipleArray = [];
    let countArray = [];
    for (const indexes of stringToArray) {
        if(uniqueArray.includes(indexes)) {
            continue;
        }
        uniqueArray.push(indexes);
    }
    for(let i=0; i<uniqueArray.length; i++){
        multipleArray[i] = [];
        for(let j=0; j<stringToArray.length; j++) {
            if(uniqueArray[i] === stringToArray[j]){
                multipleArray[i].push(stringToArray[j]);
            }
        }
    }
    for(let i=0; i<multipleArray.length; i++) {
        countArray.push(multipleArray[i].length);
    }
    return countArray;
}

console.log(isValid('abcc'));