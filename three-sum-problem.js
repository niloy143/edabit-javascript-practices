const inputArray = [1, 2, -1, 4, 0, -4, -2, 0, 1, 0, -1];

function threeSum(arr) {
    let resultArray = [];
    let resultArrayIndex = 0;
    for (let a = 0; a < arr.length; a++) {
        for (let b = 1; b < arr.length; b++) {
            for (let c = 2; c < arr.length; c++) {
                if (arr[a] + arr[b] + arr[c] === 0) {
                    resultArray[resultArrayIndex] = [];
                    resultArray[resultArrayIndex].push(arr.splice(arr[a], 1));
                    resultArray[resultArrayIndex].push(arr.splice(arr[b], 1));
                    resultArray[resultArrayIndex].push(arr.splice(arr[c], 1));
                    resultArrayIndex++;
                    break;
                }
            }
        }
    }
    return resultArray;
}

console.log(threeSum(inputArray));


// let inputArray = [1, 2, 3, 4];
// let subArray = [inputArray[0]];
// console.log(subArray);