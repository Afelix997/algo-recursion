exports.factorial = function(num) {
    if (num == 0) {
        return 1
    }
        return num * factorial(num - 1)
};

exports.palindrome = function (word) {
    word = word.toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    word = word.split("")
    
    if (word.shift() != word.pop()) {
        return false
    } else if (word.length <= 1 ) {
        return true
    }
    return palindrome(word)
}

// exports.bottles = function() {

// };

// exports.romanNum = function() {

// };


console.log(palindrome('racecar'))