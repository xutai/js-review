

// var v = Array.prototype.slice.apply([1, 2, 3])

// const unboundSlice = Array.prototype.slice;
// var v = unboundSlice.apply([1, 2, 3])


const unboundSlice = Array.prototype.slice;

// var v = Function.prototype.apply.bind(unboundSlice)
// console.table(v([1, 2, 3]))
// console.table(v([1, 2, 3], [2]))

// var v = Function.prototype.apply.bind(unboundSlice, [1, 2, 3])
// console.log(v())
// console.log(v([2]))

// console.table(v)
// console.dir(v)
// console.dirxml(v)
// console.table(v())
// console.log(v())