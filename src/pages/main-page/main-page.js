import "./main-page.css";
import { PrincipalHeader } from "../../components/header/header";

function MainPage() {
  return (
    <div>
      <PrincipalHeader />
        <div className="row">
          <div className="col m6 container-buttons">
            <div className="row">
              <a className="waves-effect waves-light btn-large role">Administrador</a>
            </div>
            <div className="row">
              <a className="waves-effect waves-light btn-large role vendedor">Vendedor</a>
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
