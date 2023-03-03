import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import { Navigate } from "react-router-dom";
import { AuthToken } from "../services/authToken";

interface AuthRouteProps {
  children: JSX.Element;
}

export function AuthAdminRoute({ children }: AuthRouteProps) {
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);

  const token = cookies.user?.token;
  const { isExpired } = useJwt(token);

  if (isExpired) {
    removeCookies("user");
    Cookies.remove("client");
    Cookies.remove("clientCode");
    AuthToken(undefined, undefined);
  }

  if (!cookies.user) {
    return <Navigate to="/" />;
  }
  const { permission } = cookies.user.user;
  if (permission !== "master") {
    return <Navigate to="/" />;
  }

  return children;
}
