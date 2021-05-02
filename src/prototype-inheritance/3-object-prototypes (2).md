# Object prototypes



[Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)



Prototypes are the mechanism by which JavaScript objects inherit features from one another.    



- a prototype-based langauge

  ```
  prototype-based langauge: to provide inheritance
  
  prototype object: objects can have a prototype object, which acts as a template object that it inherits methods and properties from.
  
  prototype chain: An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on.
  
  prototype property: the properties and methods are defined on the prototype property on the Objects' constructor functions, not the object instances themselves.
  
  __proto__ property: a link is made between the object instance and its prototype, , which is derived from the prototype property on the constructor), and the properties and methods are found by walking up the chain of prototypes.
  
  derived adj. 导出的；衍生的，派生的
  
  
  an object's prototype vs the prototype property on constructor functions
  
  available via Object.getPrototypeOf(obj) or via the deprecated __proto__ property 
  
  the property on each instance | the property on the constructor
  
  Object.getPrototypeOf(new Foobar()) === same object === Foobar.prototype
  
  ```

  |             | an object's prototype         | an object's prototype               | the prototype property on constructor functions              |
  | ----------- | ----------------------------- | ----------------------------------- | ------------------------------------------------------------ |
  | via         | Object.getPrototypeOf(obj)    | __proto__ property                  | the prototype property on constructor functions              |
  | deprecated? | no                            | yes                                 | no                                                           |
  | where?      | the property on each instance | the property on each instance       | the property on the constructor                              |
  | example     | \-                            | Object.getPrototypeOf(new Foobar()) | Object.getPrototypeOf(new Foobar()) refers to the same object as                Foobar.prototype. |

  

- understanding prototype objects

  ```js
  function Person(first, last, age, gender, interests) {
  
      // property and method definitions
      this.name = {
          'first': first,
          'last': last
      };
      this.age = age;
      this.gender = gender;
      //...see link in summary above for full definition
  }
  let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
  ```

  ![](C:\js\inheritance-in-javascript\3-object-prototypes - Person abstraction.png)

  ![](C:\js\inheritance-in-javascript\3-object-prototypes - Person.png)
  
  ![](C:\js\inheritance-in-javascript\3-object-prototypes - Person details.png)
  
  ![](C:\js\inheritance-in-javascript\3-object-prototypes - person1 instance.png)
  
  ```
  Object.valueOf(): The valueOf() method returns the primitive value of the specified object.
  
  By default, the valueOf method is inherited by every object descended from Object.
  
  Every built-in core object overrides this method to return an appropriate value.
  
  If an object has no primitive value, valueOf returns the object itself.
  
  ---
  
  [[prototype]]: Before ECMAScript 2015, there wasn't officially a way to access an object's prototype directly
  
  __proto__ : contains the object's constructor's prototype object
  ```
  <img src="C:\js\inheritance-in-javascript\3-object-prototypes - person1.png" alt="3-object-prototypes - person1"  />
  
  `person1.valueOf()`
  
  ```js
  Object { name: {…}, age: 32, gender: "male" }
  ```
  
  `person1.__proto__:`
  
  ```js
  Object { … }
  
  {…}
  constructor: function Person(first, last, age, gender, interests)​
  <prototype>: {…
  // this prototype property is in the constructor Person()
  ```
  
  `person1.__proto__.__proto__ :`
  
  ```js
  Object{...}
  
  // this prototype property is in the constructor Object()
  ```
  
  ![](C:\js\inheritance-in-javascript\3-object-prototypes - person1 details.png)

> confusing. person2 is an empty object but its prototype is person1, so we have        inheritance



- the prototype property: where inherited members are defined

- revisiting create()

```
  confusing. person2 is an empty object but its prototype is person1, so we have inheritance

  Object.create(): What create() actually does is to create a new object from a specified prototype object. 
```

  

- the constructor property

  ```
  constructor property: Every constructor function has a prototype property whose value is an object containing a constructor property. This constructor property points to the original constructor function.
  Person.prototype.constructor

  properties defined on the Person.prototype property become available to all the instance objects created using the Person() constructor
  ```


  console.log("person1.constructor",person1.constructor)
  console.log("person2.constructor",person2.constructor)
  console.log("person1.prototype.constructor",person1.prototype.constructor)
                              
                              
                             
  ```

  ```
  A clever trick is that you can put parentheses onto the end of the constructor property (containing any required parameters) to create another object instance from that constructor.

  The constructor is a function after all, so can be invoked using parentheses;

  you just need to include the new keyword to specify that you want to use the function as a constructor.
  let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

  You won't need to use it often, but it can be really useful when you want to create a new instance and don't have a reference to the original constructor easily available for some reason.
  ```

  ```
   if you have an object instance and you want to return the name of the constructor it is an instance of
  person3.constructor

  constructor.name vs instanceof

  The value of constructor.name can change (due to prototypical inheritance, binding, preprocessors, transpilers, etc.). Therefore, for more complex examples, you'll want to use the instanceof operator instead. 
  ```

- modifying prototypes

  ```

  Person.prototype.farewell = function () {
  alert(this.name.first + ' has left the building. Bye for now!');
  };
  // person1.farewell();
                          

  the whole inheritance chain has updated dynamically, automatically making this new method available on all object instances derived from the constructor.

  


  You will rarely see properties defined on the prototype property, because they are not very flexible when defined like this.
  Person.prototype.fullName = 'Bob Smith';

  This isn't very flexible, as the person might not be called that.

  It'd be much better to build the fullName out of name.first and name.last:
  Person.prototype.fullName = this.name.first + ' ' + this.name.last;

  However, this doesn't work. That's because this will be referencing the global scope in this case, not the function scope.

  Calling this property would return undefined.

  This worked fine on the method we defined earlier in the prototype because it is sitting inside a function scope, which will be transferred successfully to the object instance scope.

  constant property - summary: So you might define constant properties on the prototype (i.e. ones that never need to change), but generally it works better to define properties inside the constructor.

  method property - summary: define it on prototype is better

  a fairly common pattern for more object definitions is to define the properties inside the constructor, and the methods on the prototype.

  This makes the code easier to read, as the constructor only contains the property definitions, and the methods are split off into separate blocks.

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

  

  ```