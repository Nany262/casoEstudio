import { Header } from "../../components/header/header";
import "./login-page.css";

function LoginPage() {
  return (
    <div>
      <Header nameScreen="Inicio de sesión" />
      <div className="container admin">
        <form action="/administrador">
          <label className="admin-label">USUARIO</label>
          <input type="text"></input>
          <label className="admin-label">CONTRASEÑA</label>
          <input type="password"></input>
          <button className="waves-effect waves-light btn-large login">
            Iniciar sesion
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
