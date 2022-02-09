# JavaScript Interview Questions

1. What are the different data types present in JavaScript?

   - **Primitive Values** (passed by value)
   - Boolean
   - Number (including NaN)
   - String
   - BigInt
   - Symbol
   - Null
   - Undefined
   - **Structured Values** aka Non-primitive (passed by reference)
   - Objects

2. Difference between "==" and "===" operators.

   - "==" is equality, or _loose equality_
     - Checks for equal values. If the values are _different data types_, one of the types will be converted to match the other to then check for equality between values of the same type.
   - "===" is strict equality
     - Checks for equal values. If the values are _different data types_, **type coercion will NOT BE USED**, so therefore the values of different types will not be equal.

3. Explain Implicit Type Coercion in JavaScript.

   - Coercing values to different data types depending on the use case during execution.
   - Example `10 + "eleven" == "10eleven" // -> true`

4. Is JavaScript a statically typed or a dynamically typed language?

   - _Dynamically typed_, meaning that you can re-assign a variable with a value of a different data type than the data type that it was initialized with.
   - Example:

   ```js
   let value = "Ben"; // value is initialized a string data type
   value = 12; // value is assigned a number data type
   ```

   ```cs
    string value = "Ben"; // value is initialized with a string data type
    value = 12; // Error, can't assign a number value as a string data type
   ```

5. Explain Higher Order Functions in JavaScript.

   - Functions that operate on other functions, either by:
     - taking function values in a parameters
     - returning function values
   - Example:

   ```js
   // Taking a function as a parameter
   function HOF(msg, action) {
     action(msg);
   }

   // or by returning a function
   function HOF2(greeting) {
     return (msg) => {
       console.log(`${greeting}. ${msg}.`);
     };
   }
   ```

6. What is DOM?

   - The _Document Object Model_ is a tree structure of HTML elements represented as JavaScript objects. The DOM API allows us to access these element objects, with properties and methods, that can be used to manipulate the DOM interface.
