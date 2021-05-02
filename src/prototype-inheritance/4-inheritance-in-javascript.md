> i grasped most part of the article, except some points, like "_" and delegation, they are userful, i should double check

## prototypal-inheritance


## getting-started


## defining a Teacher() constructor function

call()

This function basically allows you to call a function defined somewhere else


### inheriting-from-a-constructor-with-no-parameters


## setting-teacher's-prototype-and-constructor-reference

> should double check it

We have defined a new constructor, and it has a prototype property, which by default just contains an object with a reference to the constructor function itself.

It does not contain the methods of the Person constructor's prototype property.

```js
create()

PcGame.prototype = Object.create(Game.prototype)

create a new object and make it the value of Teacher.prototype
```

Teacher.prototype's constructor property is now equal to Person()

because we just set PcGame.prototype to reference an object that inherits its properties from Game.prototype!

```js
    Object.defineProperty(PcGame.prototype, 'constructor', {
        value: PcGame,
        enumerable: false, 
        writable: true
    });
```


## giving-teacher-a-new-greeting-function

## giving teacher() a new greeting() function

## trying the example out

## a further exercise

## object member summary

> this summary is handy

```js
this.x=x, new

Object.keys(), static properties/methods
```




## ECMAScript 2015 Classes

supporting a browser that doesn't support this syntax (most notably Internet Explorer).

your classes are being converted into Prototypal Inheritance models — this is just syntactic sugar 语法糖.


### inheritance with class syntax

extends keyword

Unlike old-school constructor functions where the new operator does the initialization of this to a newly-allocated object

this isn't automatically initialized for a class defined by the extends keyword, i.e the sub-classes.

For sub-classes, the this intialization to a newly allocated object is always dependant 依赖 on the parent class constructor

i.e the constructor function of the class from which you're extending.

do you mean Game class's constructor function?

Here we are extending the Game class — the PcGame sub-class is an extension of the Game class.

So for PcGame, the this initialization is done by the Game constructor.



super() operator is actually the parent class constructor, passing it the necessary arguments of the Parent class constructor will also initialize the parent class properties in our sub-class



## getters and setters

Getters and setters work in pairs. A getter returns the current value of the variable and its corresponding setter changes the value of the variable to the one it defines.

use `_` to create a separate value in which to store our name property. Without using this convention, we would get errors every time we called get or set


## when would you use inheritance in javascript

> this delegation definition!


the sharing of functionality between objects is often called **delegation** 委托.

Specialized objects delegate functionality to a generic object type.


## alternatives for extending the prototype chain