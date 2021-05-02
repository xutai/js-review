/* A prototype-based language? */

/* Understanding prototype objects */

function Person(first, last, age, gender, interests) {

    // property and method definitions
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
}
let blackCat = new Person('cat', 'black', 99, 'male', ['gaming', 'programming']);


console.log("Person:", Person)
console.log("blackCat:", blackCat)
console.log("blackCat.valueOf():", blackCat.valueOf())
console.log("blackCat.__proto__:", blackCat.__proto__)
console.log("Person.prototype:", Person.prototype)
console.log("blackCat.__proto__ === Person.prototype:", blackCat.__proto__ === Person.prototype)
console.log("blackCat.__proto__.__proto__:", blackCat.__proto__.__proto__)




/* The prototype property: Where inherited members are defined */



console.log("Object.prototype:", Object.prototype)




/* Revisiting create() */
const blackMonsterCat = Object.create(blackCat);

/**
 * blackCat.__proto__ -> <Object> Person.prototype
 * blackMonsterCat.__proto__ -> <Person> blackCat
*/
blackMonsterCat.name  // blackMonsterCat.__proto__


let booleanTrue: boolean =  Object.getPrototypeOf(blackMonsterCat) === blackMonsterCat.__proto__




/* The constructor property */


/* Modifying prototypes */


debugger