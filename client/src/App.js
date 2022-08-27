import './App.css';
import Navbar from "./components/layout/Navbar/Navbar";
import Landing from './components/layout/Landing/Landing';
import Register from "./components/auth/Register/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*public routes*/}
          <Route path="/" element={<Landing />}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={ <Login />}/>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
