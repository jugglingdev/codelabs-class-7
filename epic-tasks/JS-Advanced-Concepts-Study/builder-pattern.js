// Option 1: No design pattern

class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, age, phone, address) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

const user = new User('Bob', undefined, undefined, new Address('1', 'Main'));
// In this approach, we have to pass in undefined for values we don't have anything for
console.log(user);

// Option 2: Builder Pattern

/* 
class Address is the same
class User can just have `name` as a parameter
*/

class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }

    setAge(age) {
        this.user.age = age;
        return this;
    }

    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }

    setAddress(address) {
        this.user.address = address;
        return this;
    }

    build() {
        return this.user;
    }
}

let user2 = new UserBuilder('Bob').setAge(18).setPhone('11111111').build();
console.log(user2);

// Option 3: Optional Parameters as JS Object

/*
This option is for simple objects
class Address is the same
class User passes optional parameters as JSON object
The syntax states that if nothing is passed, pass the object as empty
It's also possible to set a default value with =
*/

class User2 {
    constructor(name, { age, phone = '1234567890', address } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let user3 = new User2('Bob', {age: 10,  address: new Address('1', 'Main')})
console.log(user3);
