const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };
const consonent = 'bcdfghjklmnpqrstvwxyz';
const vowel = 'aeiou';

const person = {
    name: 'Matt',
    surname: 'Curie',
    gender: 'M',
    dob: '1/1/1900'
}

function fiscalCode(person) {
    let tempArray = [];
    const personSurname = person.surname.toLowerCase();
    const personName = person.name.toLowerCase();

    let firstThreeLetters;

    // first 3 code (3 capital letters from surname)
    let surnameConsonentArray = [];
    let surnameVowelArray = [];
    for (let i = 0; i < personSurname.length; i++) {
        if (personSurname.length >= 3) {
            if (consonent.includes(personSurname[i])) {
                surnameConsonentArray.push(personSurname[i]);
            }
            if(vowel.includes(personSurname[i])) {
                surnameVowelArray.push(personSurname[i]);
            }
        }
    }
    if (personSurname.length >= 3) {
        if(surnameConsonentArray.length >= 3) {
            firstThreeLetters = surnameConsonentArray.splice(0, 3).join('');
        }
        else if(surnameConsonentArray.length < 3) {
            firstThreeLetters = surnameConsonentArray.join('');
            if(firstThreeLetters.length === 2) {
                firstThreeLetters += surnameVowelArray[0];
            }
            else if(firstThreeLetters.length === 1) {
                firstThreeLetters += surnameVowelArray[0];
                firstThreeLetters += surnameVowelArray[1];
            }
            else {
                firstThreeLetters += surnameVowelArray.splice(0,3).join('');
            }
        }
    }
    else {
        if(personSurname.length === 2) {
            firstThreeLetters = personSurname + 'x';
        }
        else if(personSurname === 1) {
            firstThreeLetters = personSurname + 'xx';
        }
    }
    firstThreeLetters = firstThreeLetters.toUpperCase();
    tempArray.push(firstThreeLetters);
    console.log(tempArray);

    // second 3 code (3 letters from name)
    
}

fiscalCode(person);