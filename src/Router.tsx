import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompletedOrder } from "./pages/CompletedOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";
import { CatalogCoffe } from "./pages/Home/components/catalogCoffe";
import { CatalogAccessories } from "./pages/Home/components/catalogAccessories";
import { CatalogComplements } from "./pages/Home/components/catalogComplements";
import { CoffeeTypePage } from "./pages/CoffeeTypePage";
import { AccessoriesTypePage } from "./pages/AccessoriesTypePage";
import { ComplementsTypePage } from "./pages/ComplementsTypePage";
import { CoffeeSubTypePage } from "./pages/CoffeeSubTypesPage";
import { AccessoriesSubTypePage } from "./pages/AccessoriesSubTypePage";
import { ComplementsSubTypesPage } from "./pages/ComplementsSubTypesPage";

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

        <Route path="/category/cafes/:type" element={<CoffeeTypePage />} />
        <Route path="/category/acessorios/:type" element={<AccessoriesTypePage />} />
        <Route path="/category/complementos/:type" element={<ComplementsTypePage />} />
        
        <Route path="/category/cafes/:type/:subType" element={<CoffeeSubTypePage />} />
        <Route path="/category/acessorios/:type/:subType" element={<AccessoriesSubTypePage />} />
        <Route path="/category/complementos/:type/:subType" element={<ComplementsSubTypesPage />} />
      </Route>
    </Routes>
  );
}
