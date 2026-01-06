import { BrowserRouter } from "react-router";
import AuthRoutes from "./auth-routes";

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
