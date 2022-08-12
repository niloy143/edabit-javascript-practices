const inputArray1 = [0, 1, -1, -1, 2];

const inputArray2 = [0, 0, 0, 5, -5]; //
const inputArray3 = [0, -1, 1, 0, -1, 1]; /////

const inputArray4 = [0, 5, 5, 0, 0];

const inputArray5 = [0, 5, -5, 0, 0]; //

const inputArray6 = [1, 2, 3, -5, 8, 9, -9, 0];
const inputArray7 = [0, 0, 0];
const inputArray8 = [1, 5, 5, 2];
const inputArray9 = [1, 1];
const inputArray10 = [];

function threeSum(arr) {
    let resultArray = [];
    let i;
    let subArray = [];

    for (let a = 0; a < arr.length; a++) {
        i = false;
        for (let b = a+1; b < arr.length; b++) {
            if(b === arr.length -1) {
                b = 0;
            };
            for (let c = b+1; c < arr.length; c++) {
                if(c === arr.length - 1) {
                    c = 0;
                };
                if(arr[a] + arr[b] + arr[c] === 0) {
                    subArray.push(arr[a]);
                    subArray.push(arr[b]);
                    subArray.push(arr[c]);
                    resultArray.push(subArray.splice(0, 3));
                    i = true;
                    break;
                }
            }
            if(i){break};
        }
    }
    return resultArray;
}

console.log(threeSum(inputArray1));
console.log(threeSum(inputArray2));
console.log(threeSum(inputArray3));
console.log(threeSum(inputArray4));
console.log(threeSum(inputArray5));
console.log(threeSum(inputArray6));
console.log(threeSum(inputArray7));
console.log(threeSum(inputArray8));
console.log(threeSum(inputArray9));
console.log(threeSum(inputArray10));
