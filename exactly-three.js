// Determine whether the number has exactly 3 divisors or not


const numberInput = 999966000289;

function threeDivisors(number) {
    let divisorsCount = 0;
    for (let i = 0; i < number; i++) {
        if(divisorsCount > 2) {
            break;
        }
        else if (number % i === 0) {
            divisorsCount++;
            if(number / i === i) {
                break;
            }
        }
        else {
            continue;
        }
    }
    if (divisorsCount === 2) {
        return true;
    }
    else {
        return false;
    }

}

console.log(threeDivisors(numberInput));