import { Route } from "react-router-dom";
import { EditAccount } from "../../pages/Settings/BasicData";
import { Category } from "../../pages/Settings/Category";
import { AddCategory } from "../../pages/Settings/Category/page/AddCategory";
import { Employees } from "../../pages/Settings/Employees";
import { CreateEmployer } from "../../pages/Settings/Employees/Page/CreateEmployer";
import { AuthAdminRoute } from "../authAdminRouter";

export const settingsRoutes = (
  <>
    <Route
      path="/settings/account"
      element={
        <AuthAdminRoute>
          <EditAccount />
        </AuthAdminRoute>
      }
    />
    <Route
      path="/settings/categories"
      element={
        <AuthAdminRoute>
          <Category />
        </AuthAdminRoute>
      }
    />
    <Route
      path="/settings/categories/create"
      element={
        <AuthAdminRoute>
          <AddCategory />
        </AuthAdminRoute>
      }
    />
    <Route
      path="/settings/employees"
      element={
        <AuthAdminRoute>
          <Employees />
        </AuthAdminRoute>
      }
    />
    <Route
      path="/settings/employees/create"
      element={
        <AuthAdminRoute>
          <CreateEmployer />
        </AuthAdminRoute>
      }
    />
  </>
);
