function countOdd(numbers) {
    let count = 0;

    for (let num of numbers) {
        if (num % 2 !== 0) {
            count++;
        }
    }

    return count;
}

console.log(countOdd([1, 2, 3, 4, 5, 6]));