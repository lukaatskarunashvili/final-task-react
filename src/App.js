import "./App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
