import { Route } from "react-router-dom";
import { Product } from "../../pages/Product";
import { CreateProduct } from "../../pages/Product/components/CreateProduct";
import { AuthAdminRoute } from "../authAdminRouter";

export const productsRoutes = (
  <>
    <Route
      path="/products"
      element={
        <AuthAdminRoute>
          <Product />
        </AuthAdminRoute>
      }
    />
    <Route
      path="/products/create"
      element={
        <AuthAdminRoute>
          <CreateProduct />
        </AuthAdminRoute>
      }
    />
  </>
);
