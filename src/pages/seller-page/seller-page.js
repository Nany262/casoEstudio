import { Header } from "../../components/header/header";
import { Table } from "../../components/table/table";
import "./seller-page.css";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function SellerPage() {
  return (
    <div>
      <Header nameScreen="Ventana vendedor" />
      <div className="container">
        <form className="tables" onSubmit={handleSubmit}>
          {list.map((element) => (
            <Table numberTable={element} key={element}/>
          ))}
        </form>
      </div>
      <div className="container buttons-options">
      <a className="waves-effect waves-light btn-large options" href="/registrarEventos">Eventos</a>
      <a className="waves-effect waves-light btn-large options" href="/">Volver</a>
      </div>
    </div>
  );
}

function handleSubmit(event) {
  alert('Seleccionando tabla');
}

export default SellerPage;
