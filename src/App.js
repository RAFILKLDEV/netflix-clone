import "./App.css";
import IndexPage from "./pages/IndexPage/IndexPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <div className="App">
      <IndexPage/>
      <LoginPage />
      <UserPage />
    </div>
  );
}

export default App;
