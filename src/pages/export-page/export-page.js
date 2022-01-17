import { Header } from "../../components/header/header";
import "./export-page.css";

function ExportPage() {
  return (
    <div>
      <Header nameScreen="Exportar XML" />
      <div className="container admin">
        <form action="/exportar">
          <label for="" className="admin-label">
            Fecha inicio
          </label>
          <input id="init-date" type="date"></input>
          <label className="admin-label">Fecha final</label>
          <input id="end-date" type="date"></input>
          <div className="export-options">
            <button className="waves-effect waves-light btn-large btn-export">
              Exportar
            </button>
            <a
              className="waves-effect waves-light btn-large btn-export"
              href="/administrador"
            >
              Volver
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExportPage;
