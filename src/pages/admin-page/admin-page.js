import { Header } from "../../components/header/header";
import "./admin-page.css";

function AdminPage() {
  return (
    <div>
      <Header nameScreen="Administrador" />
      <div className="container admin">
        <div className="row">
          <a
            className="waves-effect waves-light btn-large admin-options"
            href="/inventario"
          >
            Inventario
          </a>
        </div>
        <div className="row">
          <a
            className="waves-effect waves-light btn-large admin-options"
            href="/login"
          >
            Productos
          </a>
        </div>
        <div className="row">
          <a
            className="waves-effect waves-light btn-large admin-options"
            href="/exportar"
          >
            Exportar
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
