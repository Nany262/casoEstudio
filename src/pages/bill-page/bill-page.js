import { useParams } from "react-router-dom";
import { Header } from "../../components/header/header";
import "./bill-page.css";

function BillPage() {
  let { id } = useParams();
  let products = [
    {
      id: "1",
      name: "Eclair",
      cuantity: 1,
      price: "$2.000",
      payment: "0",
    },
    {
      id: "2",
      name: "Cafe Expresso",
      cuantity: 1,
      price: "$1.500",
      payment: "0",
    },
    {
      id: "3",
      name: "Pandebono",
      cuantity: 1,
      price: "$1.300",
      payment: "0",
    },
  ];
  return (
    <div>
      <Header nameScreen={`Factura mesa #${id}`} isPrincipal="true" />
      <div className="container">
        <table className="centered striped orders">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {products.map((element) => (
              <tr key={Math.random()}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.cuantity}</td>
                <td>{element.price}</td>
                <td>{element.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="info-bill">
          <div className="row">
            <h4>Precio a pagar: $4.800</h4>
          </div>
          <div className="row">
            <div className="col m3">
              <input id="parcial-payment" type="number"></input>
              <label for="parcial-payment"> Valor del pago</label>
            </div>
          </div>
          <button className="waves-effect waves-light btn-large btn-bill">
            Pago parcial
          </button>
          <a className="waves-effect waves-light btn-large btn-bill">
            Cambio a entregar
          </a>
          <button className="waves-effect waves-light btn-large btn-bill">
            Aceptar
          </button>
          <a
            className="waves-effect waves-light btn-large btn-bill"
            href={`/operaciones/${id}`}
          >
            Volver
          </a>
        </div>
      </div>
    </div>
  );
}

export default BillPage;
