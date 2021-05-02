



```js
function constructorFn() {}
const objectInstance = new constructorFn()

constructorFn.prototype
Object.getPrototypeOf(constructorFn)
Object.getPrototypeOf(objectInstance)
objectInstance.__proto__

objectInstance.__proto__
    === Object.getPrototypeOf(objectInstance)
    === constructorFn.prototype
```

