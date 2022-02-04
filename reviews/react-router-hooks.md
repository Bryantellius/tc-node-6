# Review 2/4/22 - React Router Hooks

Imported from the _react-router-dom_ package:

```sh
npm install react-router-dom
```

## Navigate Hook

Returns a function that can be used to programmically navigate routes.

```jsx
let navigate = useNavigate();
// ...
navigate("path");
```

## Params Hook

Returns an object of parsed URL parameters

```jsx
<Route path="docs/:id" element={/* ... */} />
// ...
let params = useParams();
params.id;
```

## Location Hook

Returns an object with location values:

- pathname
- state
- hash
- search

```jsx
let location = useLocation();
location.pathname;
```
