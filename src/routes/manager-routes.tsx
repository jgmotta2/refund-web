import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import AppLayout from "../components/AppLayout";

export default function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
