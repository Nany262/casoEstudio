import { Header } from "../../components/header/header";
import { useParams } from "react-router-dom";
import "./operations-page.css";
import "materialize-css/dist/css/materialize.min.css";
import Modal from "../../components/modal/modal-modify";

function OperationPage() {
  let { id } = useParams();
  let list = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  list.splice(parseInt(id) - 1, 1);

  let products = [
    {
      name: "Eclair",
      cuantity: 1,
      price: "$2.000",
    },
    {
      name: "Cafe Expresso",
      cuantity: 1,
      price: "$1.500",
    },
    {
      name: "Pandebono",
      cuantity: 1,
      price: "$1.300",
    },
  ];

  return (
    <div>
      <Header nameScreen={`Mesa #${id}`} isPrincipal="true" />
      <div className="container row">
        <div className="col m6 container-buttons operation-options">
          <div className="row">
            <a
              className="waves-effect waves-light btn-large button-operation"
              href={`/pedido/${id}`}
            >
              Agregar Pedido
            </a>
          </div>
          <div className="row">
            <a
              className="waves-effect waves-light btn-large button-operation "
              href="/factura"
            >
              Generar Factura
            </a>
          </div>
          <div className="row button-operation">
            <select className="browser-default" defaultValue={"default"}>
              <option value="default" disabled>
                Elige una mesa
              </option>
              {list.map((element) => (
                <option value={element} key={element}>
                  Mesa {element}
                </option>
              ))}
            </select>
            <button className="waves-effect waves-light btn-large button-operation">
              Cambio Mesa
            </button>
          </div>
          <div className="row">
            <a
              className="waves-effect waves-light btn-large operation-back"
              href="/vendedor"
            >
              Volver
            </a>
          </div>
        </div>
        <div className="col m6">
          <table className="centered striped products-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Modificar pedido</th>
              </tr>
            </thead>

            <tbody>
              {products.map((element) => (
                <tr key={Math.random()}>
                  <td>{element.name}</td>
                  <td>{element.cuantity}</td>
                  <td>{element.price}</td>
                  <td>
                    <Modal product={element} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OperationPage;
