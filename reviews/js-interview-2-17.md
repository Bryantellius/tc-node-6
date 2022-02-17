# JavaScript Interview Questions - 2/17/22

1. What are the differences between declaring variables using var, let and const?

   They are all **declaration keywords**.

   - Variables declared with `const` **cannot** have their values reassigned, are **blocked scoped**, **cannot** be redeclared
   - Variables declared with `let` **can** have their values reassigned, are **blocked scoped**, **cannot** be redeclared
   - Variables declared with `var` **can** have their values reassigned, are **function scoped**, **can** be redeclared

   > Variables declared with `var` are hoisted, although you cannot read their values, while `const` and `let` values fall into the **Temporal Dead Zone** (TDZ)

2. What are arrow notation functions?

   - Streamlines code
   - Doesn't create it's own `this` binding during the execution context
   - Syntax includes the **lambda expression** (`=>`)
   - **Anonymous Functions**, meaning we must either pass them as inline parameters, or assign them to variables
   - **Implicit Return**, means that you can drop the `{}` and the single statement will be executed _and the value returned_

3. What is the use of promises in JavaScript?

   - To handle asynchronous operations
   - **Promise consumers**, methods that handle _resolved_ or _rejected_ values through _callbacks_

   > As of ES6, you can alternatively use `async/await` syntax instead of promise syntax and callbacks. Note that `async/await` still uses promises.

4. What are classes in JavaScript?

   - "Model" or "Blueprint" syntax that can be used for _instantiating objects_
   - Can be defined with _properties and methods_
   - The `constructor` method is used to create _instances_
     - Takes the name of the class, called as a function after the `new` keyword

   > Class syntax is just "syntax sugar" for JavaScript _prototypes_

5. What is Object Destructuring?

   - Allows you to instantiate a variable with a property/value pair from an object
   - Example:

   ```js
   let obj = {
     name: "Ben",
     city: "Birmingham",
   };

   let { name, city } = obj;
   name; // "Ben"
   city; // "Birmingham"
   ```

6. What is the rest parameter and spread operator?

   - `...` syntax for both
   - Rest takes many values and _rests_ them in a single iterable object or location
   - **Rest** Example:

   ```js
   function add(...numbers) {
     return numbers.reduce((sum, num) => sum + num);
   }

   add(1, 2, 3, 4, 5);
   add(1);
   add(1, 2, 3);
   ```

   - Spread takes values from an iterable object, and _spreads_ them individually to a new location
   - **Spread** Example:

   ```js
   // Shallow array copy
   let arr = [1, 2, 3, 4, 5];

   let arrFromCopy = [...arr, 6, 7, 8];
   ```
