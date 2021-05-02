
// normal function

function createNewGame(name) {
    const obj = {};
    obj.name = name;
    obj.updates = function () {
        alert('it\'s game name equals to ' + obj.name);
    };
    return obj;
}

const theElderScrollV = createNewGame('theElderScrollV')
console.log(theElderScrollV)

// This works well enough, but it is a bit long-winded; 
// if we know we want to create an object, 
// why do we need to explicitly create a new empty object and return it? 


// constructor function

// The constructor function is JavaScript's version of a class.

function NewGame(name) {
    this.name = name;
    this.updates = function() {
        alert('it\'s game name equals to ' + obj.name);
    };
}

let newGame1 = new NewGame('twoSouls')
let newGame2 = new NewGame('assassin');

// Notice that it has all the features you'd expect in a function, 
//  although it doesn't return anything or explicitly create an object 
//  it basically just defines properties and methods
// this keyword?
// whenever one of these object instances is created, 
// the object's name property will be equal to the name value passed to the constructor call
// the update() method will use the name value passed to the constructor call too.

// new keyword?
// tell the browser we want to create a new object instance
// followed by the function name with its required parameters contained in parentheses
// the result is stored in a variable

// when we are calling our constructor function, we are defining greeting() every time, 
// which isn't ideal. To avoid this, we can define functions on the prototype instead




