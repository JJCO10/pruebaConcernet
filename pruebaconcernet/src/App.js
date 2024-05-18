import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Login from './Login';
import "./Styles/index.css";

function App() {
  return (
    <AuthProvider>
    <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
