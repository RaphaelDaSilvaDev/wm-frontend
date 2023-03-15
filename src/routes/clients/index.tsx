import { Route } from "react-router-dom";
import { Client } from "../../pages/Clients";
import { CreateUserPage } from "../../pages/Clients/components/CreateUser";
import { AuthAdminRoute } from "../authAdminRouter";

export const clientsRoutes = (
  <>
    <Route
      path="/clients"
      element={
        <AuthAdminRoute>
          <Client />
        </AuthAdminRoute>
      }
    />
    <Route
      path="/clients/create"
      element={
        <AuthAdminRoute>
          <CreateUserPage />
        </AuthAdminRoute>
      }
    />
  </>
);
