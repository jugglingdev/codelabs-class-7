// Class

class Observable {
    constructor() {
        this.subscribers = [];
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter((item) => item !== fn);
    }

    broadcast(data) {
        for (let i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i](data);
        }
    }
}

console.groupCollapsed('Observable with Class');

    const observer = new Observable();

    const fn = (data) => {
        console.log('Callback was executed with data', data);
    };

    observer.subscribe(fn);

    observer.broadcast('Hello from the observable');

console.groupEnd();

// Function

console.groupCollapsed('Observable with Function');

    function createObservable() {
        return {
            subscribers: [],
            subscribe(fn2) {
                this.subscribers.push(fn2);
            },    
            unsubscribe(fn2) {
                this.subscribers = this.subscribers.filter((item) => item !== fn2);
            },    
            broadcast(data) {
                for (let i = 0; i < this.subscribers.length; i++) {
                    this.subscribers[i](data);
                }
            }
        }
    }

    const observer2 = createObservable();

    const fn2 = (data) => {
        console.log('Callback was executed with data', data);
    };

    observer2.subscribe(fn2);

    observer2.broadcast('Hello from the observable');

console.groupEnd();

