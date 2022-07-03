//let randomNumber = 7; //di luar fungsi

let add = function (a, b) {
    let randomNumber = 7;
    let result = a + b + randomNumber;
    return result; //di dalam fungsi
};

//console.log(result); error
console.log(add(1, 2));

const multiply = (a, b) => {
    let result = a * b;
    return result;
};

console.log(multiply(5, 6));