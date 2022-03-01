# Review 3/1/22 - React Questions

## What is React.js?

- Open source **JavaScript Library**
- Used to build _Single Page Applications_
- Utilizes reusable _components_
- Helpful for dynamic user interfaces

## What is JSX?

- _JavaScript XML_, used to create React elements that resemble HTML elements
- Can only return one JSX element per component
- Can include embedded JS surrounded by `{}`
- Cannot contain JS protected keywords (e.g. `for`, `class`, etc)

## Describe State and Props.

### State

- Data values that persist throughout the _lifecycle_ of a component, and when change/updated, _they trigger a component re-render_

```jsx
class ClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Hello World",
    };
  }
  // ...
}

const FuncComp = () => {
  const [title, setTitle] = useState("Hello World");

  // ...
};
```

### Props

- Data values that are passed from parent component to child component

```jsx
const Child = (props) => {
  return <h1>{props.title}</h1>;
};

const Parent = () => {
  return <Child title="Hello World" />;
};
```

## How do you render a list in React?

- Lists are arrays that can be returned to JSX as a _list of JSX elements_

```jsx
const arr = [1, 2, 3];
const callback = (num, index) => <span key={index}>{num}</span>;
// ...
<div>{arr.map(callback)}</div>;
```
