







// if (!Date.prototype.toISOString) {  }

(function() {
  
    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
        return this.getUTCFullYear() +
            '-' + pad(this.getUTCMonth() + 1) +
            '-' + pad(this.getUTCDate());
    };

  })();

  function XDate() {
      var x = new (
          Function.prototype
              .bind
              .apply(
                  Date,
                  [Date].concat(
                      Array.prototype.slice.call(arguments)
                  )
              )
      );
  
      Object
          .getOwnPropertyNames(Date.prototype)
          .forEach(function (func) {
              this[func] = function() {
                  return x[func].apply(x, Array.prototype.slice.call(arguments));
              };
      }.bind(this));
  
      this.foo = function() {
          return 'bar';
      };
  }

console.dir(
      new Date(12443312311231).toISOString(),
      // new XDate(12443312311231),
      new XDate(12443312311231).toISOString()
  )






