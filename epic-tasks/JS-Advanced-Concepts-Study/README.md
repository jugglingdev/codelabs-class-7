# JS Advanced Concepts Study

This file documents my notes covering a [playlist](https://www.youtube.com/playlist?list=PLj9uZuEI0pcyIL6CXw4qoYsGhyBZkhKlv) over the topics below.  It includes key concepts, questions, and other ponderings.

## Design Patterns

At their core, design patterns are problem-solving patterns, best practice solutions for common problems.  As a bonus, they help keep code clean and less buggy.

### Builder Pattern

The builder pattern is used as an alternative to complex constructors or cases where you aren't passing in a value for every parameter in a constructor.  Instead of passing `undefined`, the builder pattern allows you to chain methods that add specific property values to the object.

As an alternative for simple objects, it is also possible to pass in optional parameters as a JSON object.  You can even set a default value for a property with `=`.

### Facade Pattern

The facade pattern is useful when wanting to cover up ugly code, or rather, relegate it to a single place, so that clean code is out front.  A great use case for the facade pattern is when working with APIs.

All that code that includes the method, headers, and thenables?  Simplify it so that it stays in one function (like `getFetch()`) and clean up every place where `fetch()` was previously called.

By doing this, it's much easier to change implementation.  Let's say you want to use `axios` instead of `fetch`.  In that case, you only need to change the ugly code instead of every spot where you called `fetch()`.

### Observer Pattern

In the observer pattern, when one object changes, it alerts and updates all its dependents (observers).  This pattern can be designed with a class in mind or with a function.

One of my favorite practical applications for this pattern is a messaging app.  In it, there are two classes, `ChatRoom` (observable) and `User` (observer).  You first instantiate users and then add them to the chat room.  Finally, you can send the chat room a message and all users will be notified.

## Destructuring

Destructuring is a clean and readable way to extract values from arrays or properties from objects and assign them to variables.  It can also be used with function parameters.  Destructuring is also useful for renaming variables, swapping variables, and using default values.  It uses JSON format on the left side of the assignment operator with the array or object name on the right side.

## Spread Operator



## Memoization

Got slow code?  Memoization is a great optimization technique that caches the results of expensive function calls and returns those results when the same inputs occur again.  This makes memoization great for slow functions, fetching external resources, and dynamic programming with recursive functions.

## Callbacks

A callback function is passed as an argument to another function to be executed after a given task is completed.  Callbacks are used in asynchronous operations and event handling.  

Think of the last time you went to the mechanic or dropped your dog off at the vet.  They promised to call you back when everything was done, right?  That's exactly what happens here.  A function is called with the callback passed as a parameter.  Once the function is done, at the end, it calls the callback with whatever data it has.  Then, the callback is executed.

## Async JavaScript

Asynchronous JavaScript is a programming paradigm that allows you to manage tasks that take time to complete (e.g. fetching data from a server or waiting for user input) without blocking the rest of the program.

Key concepts related to async JavaScript include:

### Event Loop, Call Stack, and Message Queue

JavaScript is single-threaded, meaning it can only execute one piece of code at a time.  The *event loop* manages async code execution, ensuring that it doesn't block the main execution thread.  The event loop continuously checks the *call stack* and *message queue* for tasks to execute.

The call stack keeps track of what code is running at what time.  It follows the last-in, first-out (LIFO) principle, meaning that the most recently called function is the first executed and removed from the stack.

The message queue ensures that async tasks are processed in the order they were scheduled and don't interfere with the synchronous execution of the code.  It operates on a first-in, first-out (FIFO) principle, though timers such as `setTimeout()` can affect this.

When the call stack is empty, the event loop takes the first task from the message queue and pushes it onto the call stack for execution.  This repeats for remaining tasks in the queue.

Together, the event loop, call stack, and message queue ensure that the code in the main execution thread executes properly while allowing the async functions to take the time they need and get executed without interfering with the main thread.

### Callback Hell

AKA 'Pyramid of Doom', callback hell happens when multiple callbacks are nested in asynchronous code.  This makes the code difficult to read.  These nested callbacks may show up when there is a dependency on the result of a previous function or when handling errors.

### Promises

Enter Promises.  Promises solve the callback hell problem, brining structure and readability back to asynchronous code.  

A Promise is an object that represents the eventual completion or failure of an async operation.  It can be in one of 3 states:
    - **Pending**: the async operation is still ongoing
    - **Fulfilled (Resolved)**: the async operation is complete and a result value is available
    - **Rejected**: the async operation failed and an error reason is available

Promises can be chained together to connect multiple async operations.  The `.then()` method specifies what should happen when a Promise is resolved.  Promises also have built-in error handling with the `.catch()` method.

### Async/Await

`async/await` is a powerful feature in JavaScript that simplifies asynchronous code, making it easier to read, maintain, and debug.  

A function labeled with the keyword `async` returns a Promise.  Inside that function, the keyword `await` pauses the execution of the code until the Promise is resolved.

Errors are handled with `try...catch` blocks.  When an `await` Promise rejects, it throws an exception that is caught with `try...catch`.

The neat thing about `async/await` is that it can be used with exiting Promise-based code.  This is helpful when dealing with multiple async operations and complex error handling.  It brings even more structure and ease compared to using callbacks or Promises alone.

## Reflection

