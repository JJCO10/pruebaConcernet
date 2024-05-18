import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Login from './Components/Login';
import Spaces from "./Components/Spaces";
import Households from "./Components/Households";
import About from "./Components/About";

function App() {
  return (
    <AuthProvider>
    <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Spaces" element={<Spaces />} />
        <Route path="/Households" element={<Households/>} />
        <Route path="/About" element={<About/>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
