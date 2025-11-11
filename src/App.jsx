


import { Routes, Route, Navigate } from "react-router-dom";
import AuthLogin from "./pages/AuthLogin/AuthLogin";
import AuthRegister from "./pages/AuthRegister/AuthRegister";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import MainPage from "./MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLogin />} />
      <Route path="/MainPage" element={<MainPage/>} />
      <Route path="/register" element={<AuthRegister />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;



