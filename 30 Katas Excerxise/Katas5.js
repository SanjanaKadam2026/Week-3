function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible to Vote";
    } else {
        return "Not Eligible to Vote";
    }
}

console.log(checkVotingEligibility(24));