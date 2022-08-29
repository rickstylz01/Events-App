import './App.css';
import Navbar from "./components/layout/Navbar/Navbar";
import Landing from './components/layout/Landing/Landing';
import Register from "./components/auth/Register/Register";
import { Route, Routes } from "react-router-dom";
// import RequireAuth from "./components/RequireAuth";
import Login from "./components/auth/Login/Login";
import Layout from "./components/layout/Layout";
import ProfileCard from "./components/auth/Profile";
import RequireAuth from "./components/RequireAuth";

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
          {/*protected routes*/}
          <Route element={<RequireAuth allowedRoles={[2001]} />}>
            <Route path="profile" element={ <ProfileCard /> } />
          </Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
