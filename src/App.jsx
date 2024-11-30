import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/Users";
import TaskList from "./components/TaskList";
import Tasks from "./components/Tasks";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/Users",
    element: (
      <div>
        <Navbar />
        <Users />
      </div>
    ),
  },
  {
    path: "/Tasks",
    element: (
      <div>
        <Navbar />
        <Tasks />
      </div>
    ),
  },
  {
    path: "/TaskList",
    element: (
      <div>
        <Navbar />
        <TaskList />
      </div>
    ),
  },
  {
    path: "/",
    element: <Login />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
