import "./App.css";
import Home from "./pages/Index.jsx";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "Iqbaal D.",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
