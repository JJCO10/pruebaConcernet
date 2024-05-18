import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Login from './Components/Login';

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
