
// finished constructor
function Game(englishName, chineseName, releaseDate, guide, supportedLanguages, updates, note) {
    this.name = {
        english: englishName,
        chinese: chineseName
    };
    this.releaseDate = releaseDate;
    this.guide = guide;
    this.supportedLanguages = supportedLanguages;
    this.updates = function () {
        alert(this.name.english + ' it\'s release data is ' + releaseDate)
    };
    this.note = function () {
        alert('no note yet')
    }
}

let game1 = new Game('twoSouls', '', 20201230, 'no guide yet', ['english', 'chinese']);


// the Object() constructor


let game2 = new game1.constructor('darkSoul', 'darkdark', 20200101, 'no guide', ['endglish']);


Game.prototype.fullName = function () {
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

PcGame.prototype.fullName = function () {
    let gameName;

    if (this.englishName !== '') {
        gameName = this.englishName;
    }

    alert('ok, gameName is ' + gameName);
};
