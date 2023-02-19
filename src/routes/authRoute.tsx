import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface AuthRouteProps {
  children: JSX.Element;
}

export function AuthRoute({ children }: AuthRouteProps) {
  const [cookies] = useCookies(["user"]);

  if (!cookies.user) {
    return <Navigate to="/login" />;
  }

  return children;
}
