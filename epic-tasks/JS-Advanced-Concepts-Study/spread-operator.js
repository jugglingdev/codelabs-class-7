// Spread in function calls

const temperatures = [76, 72, 68, 79, 54, 65];
console.log(Math.min(temperatures));  // NaN
// old way
console.log(Math.min.apply(null, temperatures));  // 54
// spread way
console.log(Math.min(...temperatures));  // 54

const tvShows = [ 'Six Feet Under', 'Chernobyl', 'Black Mirror', 'Fleabag' ]
console.log(tvShows);  // [ 'Six Feet Under', 'Chernobyl', 'Black Mirror', 'Fleabag' ]
console.log(...tvShows);  // Six Feet Under Chernobyl Black Mirror Fleabag

console.log('B is for bananas: ', 'BANANAS');  // B is for bananas: BANANAS
console.log('B is for bananas: ', ...'BANANAS');  // B is for bananas: B A N A N A S


// Spread in array literals

const parents = ['Lorie', 'Steve'];
const kids = ['Jake', 'Annie', 'Jess'];

const fullFamily = [parents, kids];
console.log(fullFamily);  // [['Lorie', 'Steve'], ['Jake', 'Annie', 'Jess']]

const fullFamily2 = [...parents, ...kids];
console.log(fullFamily2);  // ['Lorie', 'Steve', 'Jake', 'Annie', 'Jess']

const dogs = ['Olie', 'Cosmo'];
const fullFamily3 = [...parents, ...kids, 'ME!', ...dogs, 'Pet Turtle'];
console.log(fullFamily3);  // ['Lorie', 'Steve', 'Jake', 'Annie', 'Jess', 'ME!', 'Olie', 'Cosmo', 'Pet Turtle']


const originals = ['Mona Lisa', 'American Gothic', 'The School of Athens'];
const copies = originals;
copies.push('Nighthawks');
console.log(copies);  // ['Mona Lisa', 'American Gothic', 'The School of Athens', 'Nighthawks']
console.log(originals);  // ['Mona Lisa', 'American Gothic', 'The School of Athens', 'Nighthawks']

const copies2 = [...originals];
copies.push('Nighthawks');
console.log(copies);  // ['Mona Lisa', 'American Gothic', 'The School of Athens', 'Nighthawks']
console.log(originals);  // ['Mona Lisa', 'American Gothic', 'The School of Athens']
                         // Successful copy (only 1 layer deep - not for nested arrays!!!)


// Spread in object literals

const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true };

const hybrid = { name: 'Gryphon', ...lion, ...eagle };
console.log(hybrid);  // { name: 'Gryphon', hasTail: true, legs: 4, canFly: true }


const todos = [
    { user: 'Brick', completed: false, task: 'Upload Video' },
    { user: 'Lilith', completed: true, task: 'Rob Bank' }
]

function addTodo(newTodo) {
    return [ ...todos, { ...newTodo, completed: false } ];
}

console.log(addTodo({ user: 'Mordecai', task: 'Walk Dog' }));
/*
{ user: 'Brick', completed: false, task: 'Upload Video' },
{ user: 'Lilith', completed: true, task: 'Rob Bank' },
{ user: 'Mordecai', task: 'Walk Dog', completed: false }
*/
// This makes a copy of the array and only alters the copy 
// without touching the original.  .push() would alter the 
// original
