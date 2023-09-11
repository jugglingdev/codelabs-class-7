# JS Advanced Concepts Study

This file documents my notes covering a [playlist](https://www.youtube.com/playlist?list=PLj9uZuEI0pcyIL6CXw4qoYsGhyBZkhKlv) over the topics below.  It includes key concepts, questions, and other ponderings.

## Design Patterns

At their core, design patterns are problem-solving patterns, best practice solutions for common problems.  As a bonus, they help keep code clean and less buggy.

### Builder Pattern

The builder pattern is used as an alternative to complex constructors or cases where you aren't passing in a value for every parameter in a constructor.  Instead of passing `undefined`, the builder pattern allows you to chain methods that add specific property values to the object.

As an alternative for simple objects, it is also possible to pass in optional parameters as a JSON object.  You can even set a default value for a property with `=`.

### Facade Pattern

This pattern is useful when wanting to cover up ugly code, or rather, relegate it to a single place, so that clean code is out front.  A great use case for the facade pattern is when working with APIs.

All that code that includes the method, headers, and thenables?  Simplify it so that it stays in one function (like `getFetch()`) and clean up every place where `fetch()` was previously called.

By doing this, it's much easier to change implementation.  Let's say you want to use `axios` instead of `fetch`.  In that case, you only need to change the ugly code instead of every spot where you called `fetch()`.

### 

## Destructuring

## Spread Operator

## Memoization

## Callbacks

## Promises

## Async/Await
