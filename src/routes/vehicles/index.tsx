import { Route } from "react-router-dom";
import { Vehicles } from "../../pages/Vehicles";
import { CreateVehicle } from "../../pages/Vehicles/components/CreateVehicle";
import { AuthAdminRoute } from "../authAdminRouter";

export const vehiclesRoutes = (
  <>
    <Route
      path="/vehicles"
      element={
        <AuthAdminRoute>
          <Vehicles />
        </AuthAdminRoute>
      }
    />
    <Route
      path="/vehicles/create"
      element={
        <AuthAdminRoute>
          <CreateVehicle />
        </AuthAdminRoute>
      }
    />
  </>
);
