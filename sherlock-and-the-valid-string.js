// Check if the string has the equal number of character or not. also you can remove 1 character to fulfill the condition

function isValid(theString) {
    const stringToArray = theString.split('');
    const uniqueArray = [];
    let multipleArray = [];
    for (const indexes of stringToArray) {
        if (uniqueArray.includes(indexes)) {
            continue;
        }
        uniqueArray.push(indexes);
    }
    for (let i = 0; i < uniqueArray.length; i++) {
        multipleArray[i] = [];
        for (let j = 0; j < stringToArray.length; j++) {
            if (uniqueArray[i] === stringToArray[j]) {
                multipleArray[i].push(stringToArray[j]);
            }
        }
    }

    let countArray = [];
    for (let i = 0; i < multipleArray.length; i++) {
        countArray.push(multipleArray[i].length);
    }
    let uniqueCountArray = [];
    let multipleCountArray = [];
    for (const array of countArray) {
        if (uniqueCountArray.includes(array)) {
            continue;
        }
        uniqueCountArray.push(array);
    }
    for (let i = 0; i < uniqueCountArray.length; i++) {
        multipleCountArray[i] = [];
        for (let j = 0; j < countArray.length; j++) {
            if (uniqueCountArray[i] === countArray[j]) {
                multipleCountArray[i].push(countArray[j]);
            }
        }
    }

    if(multipleCountArray.length === 1) {
        return 'YES';
    }
    else if (multipleCountArray.length === 2 && (multipleCountArray[0].length === 1 || multipleCountArray[1].length === 1)) {
        if(multipleCountArray[0][0]+1 === multipleCountArray[1][0] || multipleCountArray[0][0]-1 === multipleCountArray[1][0]) {
            return 'YES';
        }
    }
    return 'NO';
}

console.log(isValid("aabbccddeefghi"))
console.log(isValid("aabbcd"))
console.log(isValid("abcdefghhgfedecba"))
console.log(isValid("abc"))
console.log(isValid("abcc"))
console.log(isValid("abccc"))