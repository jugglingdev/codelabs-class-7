// Example 1a

setTimeout(() => {
    console.log('Hello');
}, 100);

// Example 1b

const logHello = () => {
    console.log('Hello');
};

setTimeout(logHello, 100);

// Quiz

console.log('1');

setTimeout(() => {
    console.log('2')
}, 0)

console.log('3');

// logs out 1 3 2

// Example 2

const names = ['james', 'jess', 'lily', 'sevy'];

names.forEach((name) => console.log(name));

const myForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element);
    }
}

myForEach(names, (name) => {
    console.log(name);
})

// Example 3

const loadPokemon = (id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        cb(data)
    })
}

loadPokemon(56, (pokemon) => {
    console.log(pokemon);
})
