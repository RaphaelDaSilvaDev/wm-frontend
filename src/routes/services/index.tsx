import { Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { CreateService } from "../../pages/Home/components/CreateService";
import { AuthRoute } from "../authRoute";

export const serviceRoutes = (
  <>
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
  </>
);
