# Review 1/24/22 - JavaScript Promises

- Promises are a way handle asynchronous JavaScript code by using callbacks to handle the results of asynchronous (not bound by order or execution) operations

## Creating a Promise

Example:

```js
let anyVariableName = new Promise((resolve, reject) => {
  if (true) {
    resolve("success");
  } else {
    reject("fail");
  }
});
```

## Consuming a Promise

- "Using" the result of a promise

```js
anyVariableName
  .then((result) => {
    // do something with the resolved result
  })
  .catch((error) => {
    // do something with the rejeced result or error
  });
```
