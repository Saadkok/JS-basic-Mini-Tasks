// - Write a program to print the first 100 prime numbers. Create a function isPrime() that will take a number and return 1 or 0 if the number is prime or not.
//     - As a variation, make changes to use Anonymous Function and store it in a variable to call it.
//     - As a variation, make changes to use Arrow Function.
// Regular function to check if a number is prime


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let c = 5;
    while (c * c <= num) {
        if (num % c == 0)
            return false;
        c++;
    }


    return c * c > num;
}

// Anonymous function to check if a number is prime

const isPrimeAnonymous = function (num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let c = 5;
    while (c * c <= num) {
        if (num % c == 0)
            return false;
        c++;
    }
    return c * c > num;
};

// Arrow function to check if a number is prime
const isPrimeArrow = (num) => {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    while (c * c <= num) {
        if (num % c == 0)
            return false;
        c++;
    }
    return c * c > num;
};



// Print the first 100 prime numbers using a regular function
let count = 0;
let num = 2;
while (count < 100) {
    if (isPrime(num)) {
        console.log(num);
        count++;
    }
    num++;
}
