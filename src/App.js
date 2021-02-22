import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
