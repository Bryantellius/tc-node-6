# Review 2/2/22 - React Hooks

Hooks are used in functional components to extends _state and lifecycle logic_ within functional components.

All react hooks follow the naming convention `use<NAME>`

## State Hook

State are values that have a special function for updating themselves. When state values are updated, the component is re-rendered.

Syntax:

```jsx
this.state = {
  title: "New Title",
};
const [title, setTitle] = useState([]);
```

## Effect Hook

The effect hook takes in a callback function and optional _dependency array_, that is called after each render. This is where all lifecycle logic happens.

Syntax:

```jsx
useEffect(() => {
  // lifecycle logic
}, [state1, state2, ...]);
```
