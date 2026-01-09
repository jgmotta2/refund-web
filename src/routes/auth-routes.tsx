import { Route, Routes } from "react-router";
import SignIn from "../pages/SignUp";
import AuthLayout from "../components/AuthLayout";
import SignUp from "../pages/SignIn";
import NotFound from "../pages/NotFound";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
