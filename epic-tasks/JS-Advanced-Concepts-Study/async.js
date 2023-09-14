// Global vs. function execution context

// Example 1

console.log(0);
logger();
// Everything below is stopped until logger() finishes and is popped off the call stack
console.log(1);

function logger() {
    console.log(2);
    finish();
    console.log(3);
    function finish() {
        console.log('finished');
    }
}

// 0 2 finished 3 1

// Example 2

function first() {
    console.log(1);
}

function second() {
    setTimeout(() => {
        console.log(2);
    }, 0);
}

function third() {
    console.log(3);
}

first();
second();
third();

// 1 3 2

// Example 3

function message() {
    console.log('hello there');
}

function logger2(message) {
    message();
}

logger2(message);

// Example 4

function firstB() {
    console.log(1);
}

function secondB(callback) {
    setTimeout(() => {
        console.log(2);
        callback();
    }, 0);
}

function thirdB() {
    console.log(3);
}

firstB();
secondB(thirdB);

// Example 5

function callbackHell() {
    setTimeout(() => {
        const data = { user: 'Johnny' }
        console.log(data);
        setTimeout(() => {
            console.log('Data has been Updated');
        })
    }, 500)
}

callbackHell();

// These last two examples are hard to read, though.  Enter promises.

// Example 6

const promise = new Promise((resolve, reject) => {
    resolve({ user2: 'Mario' })
});

promise
    .then((data2) => {
        const user2 = data2;
        return fetch('https://jsonplaceholder.typicode.com/todos/1');
    })
    .then((todos) => {
        console.log(todos);
    })
    .catch((err) => {
        console.log(err);
    });


// Example 7

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('this is my data from a server'), 2000)
}); 

promise2.then((res) => {
    console.log(res);
});

// Example 8

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        return data.json();
    })
    .then((jsonedData) => {
        console.log(jsonedData);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Everything is done.');
    })


// Example 9

async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        console.log(2);
    } catch(err) {
        console.log('Something went wrong');
        console.log(err);
    }
}

getTodos();
