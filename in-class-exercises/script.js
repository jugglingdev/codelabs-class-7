// Exercise 1

class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter((item) => item !== observer);
    }

    notifyObservers() {
        this.observers.forEach((observer) => {
            observer.update();
        });
    }
}

class Observer {
    update() {
        console.log('Observer updated!');
    }
}

console.groupCollapsed('Exercise 1');

    const subject = new Subject();
    const observer1 = new Observer();
    const observer2 = new Observer();
    const observer3 = new Observer();

    subject.addObserver(observer1);
    subject.addObserver(observer2);
    subject.addObserver(observer3);

    subject.notifyObservers();

console.groupEnd();

// Exercise 2

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    },
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

// Destructuring

const { name: personName, age: personAge } = person;
const [ , item2, , item4 ] = fruits;
const { address: { city, country } } = person;

console.groupCollapsed('Exercise 2');

    console.log(personName, personAge);
    console.log(item2, item4);
    console.log(city, country);

console.groupEnd();

// Exercise 3

console.groupCollapsed('Exercise 3');

    async function fetchPosts() {
        const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch(err) {
            console.log('Uh oh');
            console.log(err);
        }
    }

    fetchPosts();

console.groupEnd();

// Exercise 4



