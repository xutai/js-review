


```js
function fn() {
    // console.log(this)
    return Array.prototype.slice.call(arguments)
}
// v = fn(1, 2, 3)

// v = fn.bind(null, 91)
// v = fn.bind(null, 1, 2, 3)
v = fn.bind(null, [1, 2, 3])

// console.time('a')
// console.log(v)
// console.log(v())
// console.log(v(1, 2, 3))
// console.timeEnd('a')
```