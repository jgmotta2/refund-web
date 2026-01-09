import { Route, Routes } from "react-router";
import Refund from "../pages/Refund";
import NotFound from "../pages/NotFound";
import AppLayout from "../components/AppLayout";

export default function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
