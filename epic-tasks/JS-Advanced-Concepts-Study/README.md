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

## Promises

## Async/Await
