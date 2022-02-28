# Review 2/28/22 - JavaScript

## JS Data Types

### Primitive Data Types

- Boolean: `true` or `false`
- String: `""`, `''`, or ``
- Number: `3`, `3.1427`, `NaN`, `15241578753238834e+38`
- Null: `null`
- Undefined: `undefined`
- BigInt: `15241578753238834n`
- Symbol: `Symbol("unique")`

### Structured Data Types

- Objects `{}`

## Difference between _passed by value_ and _passed by reference_?

```js
// Passed by value
let name = "Ben";
let nameCopy = name;
name = "Eric";

console.log(name); // "Eric"
console.log(nameCopy); // "Ben"

// Passed by reference
let person = { name: "Ben" };
let personCopy = person;
person.name = "Eric";

console.log(person.name); // "Eric"
console.log(personCopy.name); // "Eric"

// Mutating props or parameters
function changeName(person, newName) {
  person.name = newName;
}

changeName(person, "Eric");
```

## Give an example of a class

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}

let floorplan = new Rectangle(4, 5);

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

console.log(floorplan.getArea());
```
