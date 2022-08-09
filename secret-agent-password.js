// Return an encoded password.

const password = 'HeLen-eda';
const validChar = 'abcdefghijklmnopqrstuvwxyz';

function secretPassword(password) {
    let isValid = 0;
    for (let i = 0; i < password.length; i++) {
        if (validChar.indexOf(password[i]) !== -1) {
            isValid++;
        }
        else {
            return 'BANG! BANG! BANG!';
        }
    }
    if (password.length === 9 && isValid === 9) {
        let passArray = password.split('');

        passArray[0] = (validChar.indexOf(passArray[0])) + 1;
        passArray[2] = (validChar.indexOf(passArray[2])) + 1;

        [passArray[3], passArray[5]] = [passArray[5], passArray[3]];

        for (let p = 6; p < 9; p++) {
            if (passArray[p] === 'z') {
                passArray[p] = 'a';
            }
            else {
                passArray[p] = validChar[validChar.indexOf(passArray[p]) + 1];
            }
        }
        password = passArray[3] + passArray[4] + passArray[5] + passArray[6] + passArray[7] + passArray[8] + passArray[0] + passArray[1] + passArray[2];

        return password;

    }
    else {
        return 'BANG! BANG! BANG!';
    }
}

console.log(secretPassword(password));