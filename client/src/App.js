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

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*public routes*/}
          <Route element={<RequireAuth allowedRoles={[2001]} />}>
            <Route path="/" element={<Landing />}/>
          </Route>

          <Route path="register" element={<Register />}/>
          <Route path="login" element={ <Login />}/>
          {/*protected routes*/}
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}
          <Route path="profile" element={ <ProfileCard /> } />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
