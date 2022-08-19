import './App.css';
import Navbar from "./components/layout/Navbar/Navbar";
import Landing from './components/layout/Landing/Landing';
import Register from "./components/auth/Register/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Register />
    </div>
  );
}

export default App;
