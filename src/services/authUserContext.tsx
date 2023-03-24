import axios from "axios";
import Cookies from "js-cookie";
import { createContext, ReactNode } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { ToastStyle } from "../components/Toast";
import { AuthToken } from "./authToken";

interface AuthUserInterface {
  info: {
    token: string;
    user: {
      name: string;
      username: string;
      permission: string;
      id: string;
    };
  };

  handleSignOut(): boolean;
  setCookies: (name: "user", value: any) => void;
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
      Cookies.remove("client");
      Cookies.remove("clientCode");
      AuthToken(undefined, undefined);
      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
      return false;
    }
  }

  return (
    <AuthUserContext.Provider
      value={{
        info,
        handleSignOut,
        setCookies,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}
