// App.jsx
import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          Shop
        </NavLink>

        <NavLink
          to="/posts"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          Posts
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          About
        </NavLink>

        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            padding: 5,
            ...(isActive ? { color: "red" } : {}),
          })}
        >
          Profile
        </NavLink>
      </nav>

      {/* Child routes render here */}
      <Outlet />
    </div>
  );
}

export default App;
