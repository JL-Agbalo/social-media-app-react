The React Router
Install React Router Package
npm install react-router-dom

## KeyCOnecpts in react Router

### 1. **Router Components**

### 2. **Route Matching**

- Define routes using the `Route` component inside the `Routes` component.
- Match routes to specific components based on the URL.

**Example:**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile/:id" element={<Profile />} />
  </Routes>
</BrowserRouter>;
```

### 3. **Navigation**

Use navigation components to move between routes without page reloads:

```jsx
<Link to="/about">About</Link>
<NavLink to="/about" activeClassName="active">About</NavLink>
const navigate = useNavigate();
navigate('/profile'); // Inside the Function
```
