"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var a, b, rest;
a = 10;
b = 20;
console.log(a); // 10

console.log(b); // 20

a = 10;
b = 20;
rest = [30, 40, 50];
console.log(a); // 10

console.log(b); // 20

console.log(rest); // [30, 40, 50]

var _a$b = {
  a: 10,
  b: 20
};
a = _a$b.a;
b = _a$b.b;
console.log(a); // 10

console.log(b); // 20
// Stage 4(finished) proposal

var _a$b$c$d = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
};
a = _a$b$c$d.a;
b = _a$b$c$d.b;
rest = _objectWithoutProperties(_a$b$c$d, ["a", "b"]);
console.log(a); // 10

console.log(b); // 20

console.log(rest); // {c: 30, d: 40}