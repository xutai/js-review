


```js
/* (3) [1, 2, 3] */

// [1,2,3].slice()

// Array.prototype.slice.call([1, 2, 3])

function fn() {
    return Array.prototype.slice.call(arguments)
}
v = fn(1, 2, 3)

console.time('a')
console.log(v)
console.timeEnd('a')
```