function countWords(sentence) {
    return sentence.trim().split(/\s+/).length;
}

console.log(countWords("JavaScript is easy to learn"));