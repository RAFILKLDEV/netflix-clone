import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import IndexPage from "./pages/IndexPage/IndexPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import UserPage from "./pages/UserPage/UserPage";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/user",
      element: <UserPage />,
    },
    {
      path: "/watch",
      element: <MoviesPage />,
    },
  ]);

  const [userState, setUserState] = useState({
    user: "",
    img: "",
    active: false,
  });

  return (
    <div className="App">
      <UserContext.Provider value={{ userState, setUserState }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
