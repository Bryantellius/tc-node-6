# Review 2/7/22 - Everything React

React is a open-source JavaScript library used to build dynammic user interfaces via a single-page application (_SPA_)

## Components

Can either be _class_ or _function_.

React elements that construct (make up) a react application

Typcally return JSX

## JSX

_JavaScript XML_ is a syntax that brings HTML into a JS file

Since it is in a JS file, JS protected keywords are changed, as well as all attribute names are written as camelCase.

- `className` instead of `class` for HTML class list attributes
- `strokeWidth` instead of `stroke-width`

### Render

Defined in class components; returns JSX

## Lists and Keys

When _rendering a list in react_, use the `.map()` array method to return a new array of JSX elements, each of which having a _unique_ **key** prop assigned to it

```jsx
const arr = [1, 2, 3, 4, 5];
// ...
arr.map((num) => {
  return <p key={"key" + num}>{num}</p>;
});
```

## State

Values that will change throughout the lifecycle of a component on the DOM, and should be reflected on the DOM, are considered _state_.

Updating any state values will trigger a component render.

## Props

Props are values passed between components, specifically parent -> child

## Hooks

### State Hook

Will return an array of two values: state and updater function.

Used to handle, _hook into_, state within a functional component

```jsx
const [state, setState] = useState(null);
// ...
setState("new state value");
```

### Effect Hook

Will receive a callback function and dependency array. Calls the function after each render, but only if any of the values mentioned in the dependency array _have_ changed.

```jsx
useEffect(() => {
  console.log("location has changed to: ", location.pathname);
}, [location.pathname]);
```

## Router

Allows for a react application to display many different views depending on the URL path.

Install into a project with `npm install react-router-dom`

Components:

- BrowserRouter
- Routes
- Route
- Link

```jsx
<BrowserRouter>
  <Link to="/">Home</Link>
  <Link to="about">About</Link>
  <Link to="projects">Projects</Link>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="projects" element={<Projects />} />
  </Routes>
</BrowserRouter>
```

### Router Hooks

#### Navigate Hook

Will return a function that will programmically navigate to a new route, causing a new component to be rendered

```jsx
const navigate = useNavigate();
// ...
navigate("timeline"); // navigates to the /timeline url path
```

#### Params Hook

Will return an object with parsed URL parameter name/values

```jsx
const params = useParams();
// if url is: https://mydomain.com/about/123-abc
params.id; // id will be: "123-abc"
```

#### Location Hook

Will return an object with:

- pathname
- search queries
- state passed from navigation
- url hash values

## Helpful JavaScript in React

- fetch api
- destructuring
- spread/rest
- NPM, _node package manager_
