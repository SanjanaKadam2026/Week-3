function findMaximum(numbers) {
    let max = numbers[0];

    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

console.log(findMaximum([10, 50, 20, 80, 30]));