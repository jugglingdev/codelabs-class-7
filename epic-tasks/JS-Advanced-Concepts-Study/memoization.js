// Example 1

const preValues = [];

function square(n) {
    if (preValues[n] != null) {
        return preValues[n];
    }
    let result = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1;
        }
    }
    preValues[n] = result;
    return result
}

console.log(square(5));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));  // These are slow without preValues, but fast with it

// Example 2 (Fibonacci)

function fib(n, preValues2 = []) {
    if (preValues2[n] != null) {
        return preValues2[n];
    }
    let result;
    if (n <= 2) {
        result = 1;
    } else {
        result = fib(n - 1, preValues2) + fib(n - 2, preValues2);
    }
    preValues2[n] = result;
    return result;
}

console.log(fib(4));
console.log(fib(41));