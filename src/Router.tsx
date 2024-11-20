import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompletedOrder } from "./pages/CompletedOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";
import { CatalogCoffe } from "./pages/Home/components/catalogCoffe";
import { CatalogAccessories } from "./pages/Home/components/catalogAccessories";
import { CatalogComplements } from "./pages/Home/components/catalogComplements";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completedOrder" element={<CompletedOrder />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
        <Route path="/category/cafes" element={<CatalogCoffe />} />
        <Route path="/category/acessorios" element={<CatalogAccessories />} />
        <Route path="/category/complementos" element={<CatalogComplements />} />
      </Route>
    </Routes>
  );
}
