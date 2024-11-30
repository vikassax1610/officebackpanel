import TaskList from "./TaskList";
import Tasks from "./Tasks";
import Users from "./Users";
import Login from "./Login";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/Users"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            <button>Users</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Tasks"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            <button>Tasks</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/TaskList"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            <button>TaskList</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/" className="Logout">
            <button>Logout</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
