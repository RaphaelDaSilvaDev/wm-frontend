import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { HeaderLayout } from "../layout/HeaderLayout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Users } from "../pages/Users";
import { AuthRoute } from "./authRoute";

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesReact>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<HeaderLayout />}>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route
            path="/users"
            element={
              <AuthRoute>
                <Users />
              </AuthRoute>
            }
          />
        </Route>
      </RoutesReact>
    </BrowserRouter>
  );
}
