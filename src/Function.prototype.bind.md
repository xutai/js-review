# Array.prototype.bind

```js
// var v = Array.prototype.slice.apply([1, 2, 3])

// const unboundSlice = Array.prototype.slice;
// var v = unboundSlice.apply([1, 2, 3])

// const unboundSlice = Array.prototype.slice;

// var v = Function.prototype.apply.bind(unboundSlice)

// var v = Function.prototype.apply.bind(unboundSlice, [1, 2, 3])

// Function.prototype.bind(Function.prototype.apply)([1, 2, 3, 4], []);
```

```js
// console.table(v([1, 2, 3]))
// console.table(v([1, 2, 3], [2]))

// console.table(v)
// console.dir(v)
// console.dirxml(v)
// console.table(v())
// console.log(v())
// console.dir()


// console.log(v())
// console.log(v([2]))
```

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








const out =
    Function.prototype.apply
        .bind(
            Array.prototype.reduce
        )
        (
            [1, 2, 3, 4],
            [(acc, cur) => acc + cur]
        )

console.dir(out)



```
