function secondLargest(numbers) {
    let uniqueNumbers = [...new Set(numbers)];

    uniqueNumbers.sort((a, b) => b - a);

    return uniqueNumbers[1];
}

console.log(secondLargest([10, 50, 20, 80, 30]));