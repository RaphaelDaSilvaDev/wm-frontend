import { createContext, ReactNode } from "react";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthToken } from "./authToken";

interface AuthUserInterface {
  info: {
    token: string;
    user: {
      name: string;
      email: string;
      isAdmin: string;
    };
  };

  handleSignOut(): void;
}

export const AuthUserContext = createContext({} as AuthUserInterface);

interface Props {
  children: ReactNode;
}

export function AuthUserProvider({ children }: Props) {
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);

  const info = cookies && cookies.user;

  function handleSignOut() {
    try {
      removeCookies("user");
      AuthToken(undefined);
      return <Navigate to="/login" />;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthUserContext.Provider
      value={{
        info,
        handleSignOut,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}
