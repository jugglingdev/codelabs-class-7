// Observer Pattern
// Messaging app example

// Observable (ChatRoom)
class ChatRoom {
    constructor() {
        this.users = [];
        this.messages = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(user) {
        const index = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }

    sendMessage(message) {
        this.messages.push(message);
        this.notifyUsers(message);
    }

    notifyUsers(message) {
        for (const user of this.users) {
            user.receiveMessage(message);
        }
    }
}

// Observer (User)
class User {
    constructor(name) {
        this.name = name;
    }

    receiveMessage(message) {
        console.log(`${this.name} received a new message: "${message}"`);
    }
}

// Usage
const chatRoom = new ChatRoom();

const user1 = new User('Alice');
const user2 = new User('Bob');

chatRoom.addUser(user1);
chatRoom.addUser(user2);

chatRoom.sendMessage('Hello, everyone!');
