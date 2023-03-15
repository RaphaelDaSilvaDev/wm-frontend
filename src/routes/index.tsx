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
import { CreateProduct } from "../pages/Product/components/CreateProduct";
import { CreateUserPage } from "../pages/Clients/components/CreateUser";
import { CreateVehicle } from "../pages/Vehicles/components/CreateVehicle";
import { serviceRoutes } from "./services";
import { clientsRoutes } from "./clients";
import { vehiclesRoutes } from "./vehicles";
import { productsRoutes } from "./products";
import { settingsRoutes } from "./settings";

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesReact>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<HeaderLayout />}>
          {serviceRoutes}
          {clientsRoutes}
          {vehiclesRoutes}
          {productsRoutes}
          {settingsRoutes}
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/not-found" element={<UserNotFound />} />
      </RoutesReact>
    </BrowserRouter>
  );
}
