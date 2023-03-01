import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { HeaderLayout } from "../layout/HeaderLayout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { UserNotFound } from "../pages/UserNotFound";
import { Users } from "../pages/Users";
import { AuthAdminRoute } from "./authAdminRouter";
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
              <AuthAdminRoute>
                <Users />
              </AuthAdminRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/not-found" element={<UserNotFound />} />
      </RoutesReact>
    </BrowserRouter>
  );
}
