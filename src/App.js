import "./App.css";
import MainPage from "./pages/main-page/main-page";
import SellerPage from "./pages/seller-page/seller-page"
import AdminPage from "./pages/admin-page/admin-page"
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/vendedor" element={<SellerPage />} />
      <Route path="/administrador" element={<AdminPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
