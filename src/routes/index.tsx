import { BrowserRouter } from "react-router";
import AuthRoutes from "./auth-routes";
import ManagerRoutes from "./manager-routes";

export default function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
