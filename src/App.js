import "./App.css";
import IndexPage from "./pages/IndexPage/IndexPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <div className="App">
      <IndexPage />
      <LoginPage />
      <UserPage />
      <MoviesPage />
    </div>
  );
}

export default App;
