import { BrowserRouter } from "react-router";
import AuthRoutes from "./auth-routes";
import EmployeeRoutes from "./Employee-routes";

export default function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
