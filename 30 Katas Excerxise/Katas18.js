function findMinimum(numbers) {
    let min = numbers[0];

    for (let num of numbers) {
        if (num < min) {
            min = num;
        }
    }

    return min;
}

console.log(findMinimum([10, 50, 20, 80, 30]));