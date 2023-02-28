import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import { AuthToken } from "../services/authToken";
interface AuthRouteProps {
  children: JSX.Element;
}

export function AuthRoute({ children }: AuthRouteProps) {
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);

  const token = cookies.user?.token;
  const { isExpired } = useJwt(token);

  if (isExpired) {
    removeCookies("user");
    AuthToken(undefined);
  }

  if (!cookies.user) {
    return <Navigate to="/login" />;
  }

  return children;
}
