import { Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { CreateService } from "../../pages/Home/components/CreateService";
import { AuthRoute } from "../authRoute";

export const serviceRoutes = (
  <>
    <Route
      path="/service"
      element={
        <AuthRoute>
          <Home />
        </AuthRoute>
      }
    />
    <Route
      path="/service/create"
      element={
        <AuthRoute>
          <CreateService />
        </AuthRoute>
      }
    />
  </>
);
