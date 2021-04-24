





function fn() {
    // "use strict"

    this.fName = 'fn'
    this
    arguments
    arguments.callee
    debugger
 }



fn.call(this, 1,2,3)