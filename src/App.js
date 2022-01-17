import "./App.css";
import MainPage from "./pages/main-page/main-page";
import SellerPage from "./pages/seller-page/seller-page";
import LoginPage from "./pages/login-page/login-page";
import AdminPage from "./pages/admin-page/admin-page";
import OperationPage from "./pages/operations-page/operations-page";
import RequestPage from "./pages/order-page/order-page";
import BillPage from "./pages/bill-page/bill-page";
import InventoryPage from "./pages/inventory-page/inventory-page"
import ExportPage from "./pages/export-page/export-page"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vendedor" element={<SellerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/operaciones" element={<OperationPage />} />
        <Route path="/operaciones/:id" element={<OperationPage />} />
        <Route path="/pedido/:id" element={<RequestPage />} />
        <Route path="/factura/:id" element={<BillPage />} />
        <Route path="/administrador" element={<AdminPage />}></Route>
        <Route path="/inventario" element={<InventoryPage />}></Route>
        <Route path="/exportar" element={<ExportPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
