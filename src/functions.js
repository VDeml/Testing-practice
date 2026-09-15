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


function analyzeArray(array) {

    let total = array.reduce((prev, curr)=> prev + curr)
    const average = total / array.length

    let min = Infinity;
    let max = -Infinity
    function getMinValue(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] < min) {
                min = arr[i]
            }
        }
    }
    getMinValue(array)

    function getMaxValue(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i]
            }
        }
    }
    getMaxValue(array)

    const length = array.length
    return {length, total, average, min, max} 
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };