import "./App.css";
import MainPage from "./pages/main-page/main-page";
import SellerPage from "./pages/seller-page/seller-page";
import AdminPage from "./pages/admin-page/admin-page";
import OperationPage from "./pages/operations-page/operations-page";
import RequestPage from "./pages/order-page/order-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vendedor" element={<SellerPage />} />
        <Route path="/administrador" element={<AdminPage />} />
        <Route path="/operaciones" element={<OperationPage />} />
        <Route path="/operaciones/:id" element={<OperationPage />} />
        <Route path="/pedido/:id" element={<RequestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
