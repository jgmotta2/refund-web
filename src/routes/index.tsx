import { BrowserRouter } from "react-router";
import AuthRoutes from "./auth-routes";
import Loading from "../components/Loading";
import EmployeeRoutes from "./employee-routes";
import ManagerRoutes from "./manager-routes";

const isLoading = false;

const session = {
  user: {
    role: "",
  },
};

export default function Routes() {
  function Route() {
    switch (session.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return <BrowserRouter>{Route()}</BrowserRouter>;
}
