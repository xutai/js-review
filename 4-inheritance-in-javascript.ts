



/* 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
*/


/* ## prototypal-inheritance */



/* ## getting-started */


function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

Person.prototype

Person.prototype.greeting = function () {
    alert('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype

/* ## defining a Teacher() constructor function */
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}


// function Teacher(first, last, age, gender, interests, subject) {
//     this.name = {
//       first,
//       last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.subject = subject;
//   }




/* ### inheriting-from-a-constructor-with-no-parameters */
function Brick() {
    this.width = 10;
    this.height = 20;
}

function BlueGlassBrick() {
    Brick.call(this);

    this.opacity = 0.5;
    this.color = 'blue';
}



/* ## setting-teacher's-prototype-and-constructor-reference */
const Person_Property_Prototype_OwnPropertyNames = Object.getOwnPropertyNames(Person.prototype)
const Teacher_Property_Prototype_OwnPropertyNames = Object.getOwnPropertyNames(Teacher.prototype)

const objectInheriting_PersonPropertyPrototype = Object.create(Person.prototype)
Teacher.prototype = objectInheriting_PersonPropertyPrototype;

Person
Teacher


debugger















