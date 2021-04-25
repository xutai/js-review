

// normal function

// function createNewGame(game) {
//     const obj = {};
//     obj.name = name;
//     obj.updates = function() {
//         alert('it\'s not the right time yet');
//     };
//     return obj;
// }

// This works well enough, but it is a bit long-winded; 
// if we know we want to create an object, 
// why do we need to explicitly create a new empty object and return it? 



// constructor function
// The constructor function is JavaScript's version of a class.

// function Game(name) {
//     this.name = name;
//     this.updates = function() {
//         alert('it\'s not the right time yet.');
//     };
// }

// Notice that it has all the features you'd expect in a function, 
//  although it doesn't return anything or explicitly create an object 
//  it basically just defines properties and methods
// this keyword?
// whenever one of these object instances is created, 
// the object's name property will be equal to the name value passed to the constructor call
// the update() method will use the name value passed to the constructor call too.

// let game1 = new Game('twoSouls')
// let game2 = new Game('assassin');

// new keyword?
// tell the browser we want to create a new object instance
// followed by the function name with its required parameters contained in parentheses
// the result is stored in a variable

// when we are calling our constructor function, we are defining greeting() every time, 
// which isn't ideal. To avoid this, we can define functions on the prototype instead




// finished constructor
function Game(englishName, chineseName, releaseDate, guide, supportedLanguages, updates, note) {
    this.name = {
        english: englishName,
        chinese: chineseName
    };
    this.releaseDate = releaseDate;
    this.guide = guide;
    this.supportedLanguages = supportedLanguages;
    this.updates = function() {
        alert(this.name.english + ' it\'s release data is ' + releaseDate)
    };
    this.note = function() {
        alert('no note yet')
    }
}

let game1 = new Game('twoSouls','', 20201230, 'no guide yet', ['english', 'chinese'] );
 

// the Object() constructor


let game2 = new game1.constructor('darkSoul', 'darkdark', 20200101, 'no guide', ['endglish']);


Game.prototype.fullName = function() {
    return this.name.english + ' ' + this.name.chinese
}


function PcGame(englishName, chineseName, releaseDate, guide, supportedLanguages, updates, note, systemSupport) {
    Game.call(englishName, chineseName, releaseDate, guide, supportedLanguages, updates, note)
    this.systemSupport = systemSupport
}

// Object.getOwnPropertyNames(PcGame.prototype)
// * Array [ "constructor" ]
// Object.getOwnPropertyNames(Game.prototype)
// * Array [ "constructor", "fullName" ]
// Game.prototype.fullName
// * function fullName()
// PcGame.prototype.fullName 
// * undefined
PcGame.prototype = Object.create(Game.prototype)
// PcGame.prototype.constructor
Object.defineProperty(PcGame.prototype, 'constructor', {
    value: PcGame,
    enumerable: false, 
    writable: true
});

PcGame.prototype.fullName = function() {
    let gameName;

    if (this.englishName !== '') {
        gameName = this.englishName;
    }

    alert('ok, gameName is ' + gameName);
};

