const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };
const consonent = 'bcdfghjklmnpqrstvwxyz';
const vowel = 'aeiou';

const person = {
    name: 'Brendan',
    surname: 'Eich',
    gender: 'M',
    dob: '1/12/1961'
}

function fiscalCode(person) {
    let tempArray = [];
    const personSurname = person.surname.toLowerCase();
    const personName = person.name.toLowerCase();

    let firstThreeLetters;
    let secondThreeLetters;

    // first 3 code (3 capital letters from surname)
    let surnameConsonentArray = [];
    let surnameVowelArray = [];
    for (let i = 0; i < personSurname.length; i++) {
        if (consonent.includes(personSurname[i])) {
            surnameConsonentArray.push(personSurname[i]);
        }
        if (vowel.includes(personSurname[i])) {
            surnameVowelArray.push(personSurname[i]);
        }
    }
    if (personSurname.length >= 3) {
        if (surnameConsonentArray.length >= 3) {
            firstThreeLetters = surnameConsonentArray.splice(0, 3).join('');
        }
        else if (surnameConsonentArray.length < 3 && personSurname.length >= 3) {
            firstThreeLetters = surnameConsonentArray.join('');
            if (firstThreeLetters.length === 2) {
                firstThreeLetters += surnameVowelArray[0];
            }
            else if (firstThreeLetters.length === 1) {
                firstThreeLetters += surnameVowelArray[0];
                firstThreeLetters += surnameVowelArray[1];
            }
            else {
                firstThreeLetters += surnameVowelArray.splice(0, 3).join('');
            }
        }
    }
    else if (personSurname.length < 3) {
        if (surnameConsonentArray.length === 2) {
            firstThreeLetters = surnameConsonentArray.join('') + 'x';
        }
        else if (surnameConsonentArray.length === 1) {
            firstThreeLetters = surnameConsonentArray[0] + surnameVowelArray[0] + 'x';
        }
        else if (surnameVowelArray.length === 2) {
            firstThreeLetters = surnameVowelArray.join('') + 'x';
        }
    }
    firstThreeLetters = firstThreeLetters.toUpperCase();
    tempArray.push(firstThreeLetters);

    // second 3 code (3 letters from name)
    let nameConsonentArray = [];
    let nameVowelArray = [];
    for (let i = 0; i < personName.length; i++) {
        if (consonent.includes(personName[i])) {
            nameConsonentArray.push(personName[i]);
        }
        if (vowel.includes(personName[i])) {
            nameVowelArray.push(personName[i]);
        }
    }
    if (nameConsonentArray.length === 3) {
        secondThreeLetters = nameConsonentArray.join('');
    }
    else if (nameConsonentArray.length > 3) {
        secondThreeLetters = nameConsonentArray[0] + nameConsonentArray[2] + nameConsonentArray[3];
    }
    else if (nameConsonentArray.length < 3 && personName.length >= 3) {
        secondThreeLetters = nameConsonentArray.join('');
        if (secondThreeLetters.length === 2) {
            secondThreeLetters += nameVowelArray[0];
        }
        else if (secondThreeLetters.length === 1) {
            secondThreeLetters += nameVowelArray[0];
            secondThreeLetters += nameVowelArray[1];
        }
        else {
            secondThreeLetters += nameVowelArray.splice(0, 3).join('');
        }
    }
    else if (personName.length < 3) {
        if (nameConsonentArray.length === 2) {
            secondThreeLetters = nameConsonentArray.join('') + 'x';
        }
        else if (nameConsonentArray.length === 1) {
            secondThreeLetters = nameConsonentArray[0] + nameVowelArray[0] + 'x';
        }
        else if (nameVowelArray.length === 2) {
            secondThreeLetters = nameVowelArray.join('') + 'x';
        }
    }
    secondThreeLetters = secondThreeLetters.toUpperCase();
    tempArray.push(secondThreeLetters);

    // the last part (2 numbers, 1 letter and 2 numbers)
    // generate 2 numbers according to the last 2 digits of the dob year
    const lastTwoDigitsOfYear = person.dob.slice((person.dob.length - 2), (person.dob.length));
    tempArray.push(lastTwoDigitsOfYear);

    // generate a letter according to the month
    let monthScannerArray = [];
    let monthScannerVar = true;
    for (let i = 0; i < person.dob.length; i++) {
        if (person.dob[i] === '/') {
            if (monthScannerVar === true) {
                monthScannerVar = false;
            }
            else if (monthScannerVar === false) {
                monthScannerVar = true;
            }
            continue;
        }
        if (monthScannerVar === false) {
            monthScannerArray.push(person.dob[i]);
        }
    }
    let monthNumber = monthScannerArray.join('');
    monthNumber = Number(monthNumber);
    const monthValue = months[monthNumber];
    tempArray.push(monthValue);

    // generate 2 numbers from the gender
    let dayOfBirth = '';
    for (let i = 0; i < person.dob.length; i++) {
        if (person.dob[i] === '/') {
            break;
        }
        dayOfBirth += person.dob[i];
    }
    dayOfBirth = Number(dayOfBirth);
    if (person.gender === 'M') {
        if (dayOfBirth < 10) {
            dayOfBirth = '0' + dayOfBirth;
        }
    }
    else if (person.gender === 'F') {
        dayOfBirth += 40;
    }
    tempArray.push(dayOfBirth);

    // join all the things together
    const finalCode = tempArray.join('');

    return finalCode;
}

console.log(fiscalCode(person));