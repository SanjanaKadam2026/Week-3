function frequencyCounter(arr) {
    let frequency = {};

    for (let item of arr) {
        if (frequency[item]) {
            frequency[item]++;
        } else {
            frequency[item] = 1;
        }
    }

    return frequency;
}

console.log(
    frequencyCounter(["apple", "banana", "apple", "orange", "banana", "apple"])
);