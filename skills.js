function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const result = sumNumbers(1, 2, 3, 4, 5);
console.log(result); // Output: 15