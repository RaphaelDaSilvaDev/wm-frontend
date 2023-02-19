import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface AuthRouteProps {
  children: JSX.Element;
}

export function AuthAdminRoute({ children }: AuthRouteProps) {
  const [cookies] = useCookies(["user"]);
  const { isAdmin } = cookies.user.user;
  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}
