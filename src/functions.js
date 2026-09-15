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

function caesarCipher(string, shiftBy) {

    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // handles negative numbers and numbers higher than the amount of letters in the alphabet
    shiftBy = ((shiftBy % 26) + 26) % 26;

    let output = "";

    for(let i = 0; i < string.length; i++) {
        let char = string[i];
        let code = string.charCodeAt(i);
        if(lowerAlphabet.includes(char)) {
            char = String.fromCharCode(((code - 97 + shiftBy) % 26) + 97);
        }
        else if(upperAlphabet.includes(char)) {
            char = String.fromCharCode(((code - 65 + shiftBy) % 26) + 65);
        }
        output += char;
    }
    return output;
}


export { capitalize, reverseString, calculator, caesarCipher };