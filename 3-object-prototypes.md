
## revisiting create()

> confusing. person2 is an empty object but its prototype is person1, so we have inheritance

Object.create(): What create() actually does is to create a new object from a specified prototype object.


```js
 let person2 = Object.create(person1);
```


## the constructor property

constructor property: Every constructor function has a prototype property whose value is an object containing a constructor property. This constructor property points to the original constructor function.

`Person.prototype.constructor`


```js
console.log("Person.prototype.constructor", Person.prototype.constructor)
```

properties defined on the Person.prototype property become available to all the instance objects created using the Person() constructor

```js
console.log("person1.constructor",person1.constructor)
console.log("person2.constructor",person2.constructor)
console.log("person1.prototype.constructor",person1.prototype.constructor)
```

A clever trick is that you can put parentheses onto the end of the constructor property (containing any required parameters) to create another object instance from that constructor.

The constructor is a function after all, so can be invoked using parentheses;

you just need to include the new keyword to specify that you want to use the function as a constructor.



```js
 let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
console.log("person3", person3)

console.log("person3.name.first", person3.name.first)
console.log('person3.age', person3.age)
console.log("person3.bio()", person3.bio())
```

You won't need to use it often, but it can be really useful when you want to create a new instance and don't have a reference to the original constructor easily available for some reason

if you have an object instance and you want to return the name of the constructor it is an instance of


`person3.constructor`

```js
console.log("person3.constructor", person3.constructor.name)
```

constructor.name vs instanceof

> The value of constructor.name can change (due to prototypical inheritance, binding, preprocessors, transpilers, etc.). Therefore, for more complex examples, you'll want to use the instanceof operator instead.




## modifying prototypes

```js
Person.prototype.farewell = function () {
alert(this.name.first + ' has left the building. Bye for now!');
};
// person1.farewell();
```

the whole inheritance chain has updated dynamically, automatically making this new method available on all object instances derived from the constructor.

You will rarely see properties defined on the prototype property, because they are not very flexible when defined like this.

`Person.prototype.fullName = 'Bob Smith';`

This isn't very flexible, as the person might not be called that.

It'd be much better to build the fullName out of name.first and name.last:

`Person.prototype.fullName = this.name.first + ' ' + this.name.last;`

However, this doesn't work. That's because this will be referencing the global scope in this case, not the function scope.

Calling this property would return undefined.

This worked fine on the method we defined earlier in the prototype because it is sitting inside a function scope, which will be transferred successfully to the object instance scope.

constant property - summary: So you might define constant properties on the prototype (i.e. ones that never need to change), but generally it works better to define properties inside the constructor.

method property - summary: define it on prototype is better

a fairly common pattern for more object definitions is to define the properties inside the constructor, and the methods on the prototype.

This makes the code easier to read, as the constructor only contains the property definitions, and the methods are split off into separate blocks.

```js
// Constructor with property definitions

function Test(a, b, c, d) {
// property definitions
}

// First method definition

Test.prototype.x = function() { ... };

// Second method definition

Test.prototype.y = function() { ... };

// etc.
```