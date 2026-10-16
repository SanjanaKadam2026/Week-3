function arraySum(numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(arraySum([10, 20, 30]));