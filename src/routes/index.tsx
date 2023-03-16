import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { HeaderLayout } from "../layout/HeaderLayout";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
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
      </RoutesReact>
    </BrowserRouter>
  );
}
