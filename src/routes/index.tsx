import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <Dashboard />
        }
      />
      <Route path="*" element={<p>Rota inexistente!!</p>} />
    </Routes>
  )
};
