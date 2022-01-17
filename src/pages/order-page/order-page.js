import "./order-page.css";
import { Header } from "../../components/header/header";
import { useParams } from "react-router-dom";

function RequestPage() {
  let { id } = useParams();
  let productsAdded = [
    {
      name: "Granizado Milo",
      cuantity: 1,
      price: "$4.000",
    },
  ];
  return (
    <div>
      <Header nameScreen={`Agregar pedido (M${id})`} isPrincipal="true" />
      <div className="container orders">
        <div class="input-field">
          <i class="material-icons prefix">local_bar</i>
          <input
            type="text"
            id="autocomplete-input"
            className="autocomplete"
          ></input>
          <label for="autocomplete-input">Nombre</label>
        </div>
        <table className="centered striped">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>

          <tbody>
            {productsAdded.map((element) => (
              <tr key={Math.random()}>
                <td>{element.name}</td>
                <td>{element.price}</td>
                <td>
                  <input id="input_cuantity" type="number"></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons-orders">
          <a
            className="waves-effect waves-light btn-large operation-back"
            href={`/operaciones/${id}`}
          >
            Confirmar
          </a>
          <a
            className="waves-effect waves-light btn-large operation-back"
            href={`/operaciones/${id}`}
          >
            Volver
          </a>
        </div>
      </div>
    </div>
  );
}

export default RequestPage;
