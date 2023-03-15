import { Route } from "react-router-dom";
import { Settings } from "../../pages/Settings";
import { AuthAdminRoute } from "../authAdminRouter";

export const settingsRoutes = (
  <>
    <Route
      path="/settings"
      element={
        <AuthAdminRoute>
          <Settings />
        </AuthAdminRoute>
      }
    />
    <Route
      path="/settings/account"
      element={
        <AuthAdminRoute>
          <Settings />
        </AuthAdminRoute>
      }
    />
    <Route
      path="/settings/categories"
      element={
        <AuthAdminRoute>
          <Settings />
        </AuthAdminRoute>
      }
    />
  </>
);
