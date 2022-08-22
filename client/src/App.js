import './App.css';
import Navbar from "./components/layout/Navbar/Navbar";
import Landing from './components/layout/Landing/Landing';
import Register from "./components/auth/Register/Register";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
