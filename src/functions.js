function capitalize(string) {
    let firstLetter = string.slice(0,1)
    return firstLetter.toUpperCase() + string.slice(1)
}

function reverseString(string) {
    return string.split("").reverse().join("")
}

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    divide: function(a,b) {
        return a / b;
    },
    multiply: function(a,b) {
        return a * b;
    }
}
export { capitalize, reverseString, calculator };