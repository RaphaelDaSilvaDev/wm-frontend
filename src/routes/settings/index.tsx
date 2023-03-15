import { Route } from "react-router-dom";
import { SettingsCategory } from "../../pages/Settings/Category";
import { SettingsEditAccount } from "../../pages/Settings/EditAccount";
import { AuthAdminRoute } from "../authAdminRouter";

export const settingsRoutes = (
  <>
    <Route
      path="/settings/account"
      element={
        <AuthAdminRoute>
          <SettingsEditAccount />
        </AuthAdminRoute>
      }
    />
    <Route
      path="/settings/categories"
      element={
        <AuthAdminRoute>
          <SettingsCategory />
        </AuthAdminRoute>
      }
    />
  </>
);
