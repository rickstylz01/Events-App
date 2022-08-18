import './App.css';
import Navbar from "./components/layout/Navbar/Navbar";
import Landing from './components/layout/Landing/Landing';
import {Route, Routes} from "react-router-dom";
import Register from "./components/auth/Register/Register";
import Login from "./components/auth/Login/Login";

function App() {
  return (
    <Routes>
      <div className="App">
        <Navbar />
        <Route exact path="/" element={<Landing />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/login" element={<Login />}/>
        <Landing />
      </div>
    </Routes>
  );
}

export default App;
