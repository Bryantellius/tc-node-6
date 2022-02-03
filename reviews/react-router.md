# Review 2/3/22 - React Router

## React Router

- Syncs the URL with the UI that is displayed on the screen

## Components

- BrowserRouter
- Routes
- Route
- Link

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

Example:

```jsx
<BrowserRouter>
  <Link to="/">Home</Link>
  {/* ... repeat for links */}
  <Routes>
    <Route path="/" element={<Home />} />
    {/* ... repeat for routes */}
  </Routes>
</BrowserRouter>
```
