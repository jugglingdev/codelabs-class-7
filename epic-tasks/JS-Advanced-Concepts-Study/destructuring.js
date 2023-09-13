// Accessing objects the old way

let person = {
    firstName: 'Sonny',
    lastName: 'Sangha'
};

let personFirstName = person.firstName;
let personLastName = person.lastName;

console.log(personFirstName);
console.log(personLastName);

// Accessing objects the new way

let { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);

// We can also RENAME the variables with the new way

let { firstName: fName, lastName: lName } = person;

console.log(fName);
console.log(lName);

// What happens if you destruct a property that does not exist?

let { ffName, llName, middleName } = person;
console.log(middleName); // undefined

// Setting defaults when object destructuring

let person2 = {
    firstName2: 'Sonny',
    lastName2: 'Sangha',
    currentAge2: 28
}

let { firstName2, lastName2, middleName2 = '', currentAge2: age = 20 } = person2;

console.log(middleName2); // ''
console.log(age); // 28 // default not used

// Prior to ES6, when you want to assign the elements of the array to variables, you typically do it like this:

const arr = [1, 2, 3];

let x = arr[0];
let y = arr[1];
let z = arr[2];

console.log(x);
console.log(y);
console.log(z);

// But now ES6 introduces the array destructuring syntax that provides an alternative way to assign elements of an array to variables:

let [t, u, v] = arr;

console.log(t);
console.log(u);
console.log(v);

// Here, the left side has variables and the right side has values.  They are assigned in order.

let [a, b, c, d] = [1, 2, 3, 4];

// Skipping items when array destructuring

const arrValue = ['one', 'two', 'three'];

// Destructuring assignment in arrays

const [q,,s] = arrValue;

console.log(q); // one
console.log(s);  // three

// Assign remaining elements to a single variable

const names = ['Sonny', 'Jay', 'Brian', 'Rodgers'];

const [o, ...p] = names;

console.log(o);  // Sonny
console.log(p);  // [ 'Jay', 'Brian', 'Rodgers' ]

// This trick works in object destructing, too!

const person3 = {
    name: 'Sonny Sangha',
    age: 28,
    gender: 'male'
}

let { name, ...rest } = person3;

console.log(name);  // Sonny Sangha
console.log(rest);  // { age: 28, gender: 'male' }

// In this example, two variables are swapped using the destructuring assignment syntax;

let name1 = 'Sonny';
let name2 = 'Jay';

[name1, name2] = [name2, name1];

console.log(name1);  // Jay
console.log(name2);  // Sonny

// A function may return an object or null in some situations.  For example:

function getPerson() {
    return null;
}

/*
let { firstName3, lastName3 } = getPerson();
console.log(firstName3, lastName3);  // This will throw an error...  Cannot destructure property....as it is null
*/

// To avoid this, you can use the OR operator to fallback the null object to an empty object

let { firstName4, lastName4 } = getPerson() || {};
console.log(firstName4, lastName4);  // undefined undefined

// Nested object destructuring

let member = {
    id: 0o1,
    name5: {
        firstName5: 'Hazel',
        lastName5: 'Rivers'
    }
};

let { id, name5: { firstName5, lastName5 } } = member;

console.log(id);  // 1
console.log(firstName5);  // Hazel
console.log(lastName5);  // Rivers

// It's possible to destructure nested properties as well as the parent property

let member2 = {
    id2: 0o2,
    name6: {
        firstName6: 'Shirley',
        lastName6: 'Temple'
    }
};

let { id2, name6: { firstName6, lastName6 }, name6 } = member2;

console.log(firstName6);  // Shirley
console.log(lastName6);  // Temple
console.log(name6);  // { firstName6: 'Shirley', lastName6: 'Temple' }

// Destructuring function arguments
// Old way:

let displayFullName = (anotherPerson) => `${anotherPerson.fffName} ${anotherPerson.lllName}`;

let anotherPerson = {
    fffName: 'Missy',
    lllName: 'Clementine'
};

console.log(displayFullName(anotherPerson));  // Missy Clementine

// New way:

let displayFullName2 = ({fffName, lllName}) => `${fffName} ${lllName}`;

console.log(displayFullName2(anotherPerson));  // Missy Clementine
