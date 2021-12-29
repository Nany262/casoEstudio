import "./main-page.css";
import { Header } from "../../components/header/header";

function MainPage() {
  return (
    <div>
      <Header nameScreen="Ventana Principal" isPrincipal="true"/>
        <div className="row">
          <div className="col m6 container-buttons">
            <div className="row">
              <a className="waves-effect waves-light btn-large role" href="/administrador">Administrador</a>
            </div>
            <div className="row">
              <a className="waves-effect waves-light btn-large role vendedor" href="/vendedor">Vendedor</a>
            </div>
          </div>
          <div className="col m6">
            <img data-testid="principal-logo" className="principal-logo" src="logo192.png" alt="tatayamba icon" />
          </div>
        </div>
    </div>
  );
}

export default MainPage;
