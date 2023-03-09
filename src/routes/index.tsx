import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { HeaderLayout } from "../layout/HeaderLayout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Product } from "../pages/Product";
import { Settings } from "../pages/Settings";
import { UserNotFound } from "../pages/UserNotFound";
import { Client } from "../pages/Clients";
import { AuthAdminRoute } from "./authAdminRouter";
import { AuthRoute } from "./authRoute";
import { Vehicles } from "../pages/Vehicles";
import { CreateService } from "../pages/Home/components/CreateService";

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
            path="/service"
            element={
              <AuthRoute>
                <CreateService />
              </AuthRoute>
            }
          />
          <Route
            path="/clients"
            element={
              <AuthAdminRoute>
                <Client />
              </AuthAdminRoute>
            }
          />
          <Route
            path="/vehicles"
            element={
              <AuthAdminRoute>
                <Vehicles />
              </AuthAdminRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <AuthAdminRoute>
                <Settings />
              </AuthAdminRoute>
            }
          />
          <Route
            path="/products"
            element={
              <AuthAdminRoute>
                <Product />
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
