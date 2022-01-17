import { Header } from "../../components/header/header";
import "./inventory-page.css";
import Modal from "../../components/modal/modal-modify";

function InventoryPage() {
  const inventory = [
    {
      id: "1",
      name: "Café molido",
      cuantity: "29",
      measure: "bolsa",
    },
    {
      id: "2",
      name: "Milo",
      cuantity: "30",
      measure: "bolsa",
    },
    {
      id: "3",
      name: "Eclair",
      cuantity: "29",
      measure: "unidades",
    },
    {
      id: "4",
      name: "Pandebono",
      cuantity: "29",
      measure: "unidades",
    },
    {
      id: "5",
      name: "Pan queso",
      cuantity: "30",
      measure: "unidades",
    },
  ];
  return (
    <div>
      <Header nameScreen="Inventario" />
      <div className="container">
        <div className="row">
          <div className="col 3m fields-inventory">
            <div class="input-field">
              <i class="material-icons prefix">kitchen</i>
              <input type="text" id="name-input"></input>
              <label for="name-input">Nombre</label>
            </div>
          </div>
          <div className="col 3m fields-inventory">
            <div class="input-field">
              <i class="material-icons prefix">plus_one</i>
              <input type="text" id="cuantity-input"></input>
              <label for="cuantity-input">Cantidad</label>
            </div>
          </div>
          <div className="col 3m fields-inventory">
            <a className="waves-effect waves-light btn-large">Agregar</a>
          </div>
          <div className="col 3m fields-inventory">
            <a className="waves-effect waves-light btn-large" href="/administrador">Volver</a>
          </div>
        </div>

        <table className="centered striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Insumo</th>
              <th>Cantidad</th>
              <th>Medida</th>
              <th>Modificar insumo</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((element) => (
              <tr key={Math.random()}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.cuantity}</td>
                <td>{element.measure}</td>
                <td>
                  <Modal product={element} order="false" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryPage;
