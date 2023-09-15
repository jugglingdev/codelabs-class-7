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

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.notifyObservers();

