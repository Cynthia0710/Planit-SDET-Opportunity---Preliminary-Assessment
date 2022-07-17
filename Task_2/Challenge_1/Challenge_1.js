// Challenge 1

//The function to get the nth number in the fibonacci sequence given n
function findNthFibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
    }
}


// The function is to check whether the number is a fibonacci number and find the closest index in the fibonacci sequence oh this number, and print out the result
function challenge(number) {
    let result = "";
    if (number === 0) {
        const index = 0;
        result = `${number} is a fibonacci number, and the closest index in the fibonacci sequence is ${index}.`;
    } else if (number === 1) {
        const index = "1,2";
        result = `${number} is a fibonacci number, and the closest index in the fibonacci sequence is ${index}.`;
    } else {
        let index = 2;
        let firstFibonacciNumber = 0;
        let secondFibonacciNumber = 1;
        let thirdFibonacciNumber = firstFibonacciNumber + secondFibonacciNumber;

        while (thirdFibonacciNumber < number) {
            index += 1;
            firstFibonacciNumber = secondFibonacciNumber;
            secondFibonacciNumber = thirdFibonacciNumber;
            thirdFibonacciNumber = firstFibonacciNumber + secondFibonacciNumber;
        }

        if (number === thirdFibonacciNumber) {
            result = `${number} is a fibonacci number, and the closest index in the fibonacci sequence is ${index}.`;
        } else {
            index = (Math.abs(thirdFibonacciNumber - number) >= Math.abs(secondFibonacciNumber - number)) ? index - 1 : index;
            result = `${number} is not a fibonacci number, and the closest index in the fibonacci sequence is ${index}.`;
        }
    }

    console.log(result);
}

// This function is to use 0-10 test the findNthFibonacci function
function testScenario1() {
    for (let i = 0; i <= 10; i++) {
        const fibonacciNumber = findNthFibonacci(i);
        console.log(fibonacciNumber);
    }
}

// This function is to use number 0-20 test the challenge function
function testScenario2() {
    for (let i = 0; i <= 20; i++) {
        challenge(i);
    }
}

testScenario1();
console.log("---------------------------------------------------------------------------------");
testScenario2();

