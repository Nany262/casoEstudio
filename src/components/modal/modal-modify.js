import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./modal-modify.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log(this.props.product);
      },
      onOpenEnd: () => {
        //console.log("Open End");
      },
      onCloseStart: () => {
        //console.log("Close Start");
      },
      onCloseEnd: () => {
        //console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div>
        <a
          className="btn-floating btn-large waves-light modal-trigger"
          data-target="modal1"
        >
          <i className="material-icons">edit</i>
        </a>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">
            <h4>Modificar pedido</h4>
            <br />
            <p>Producto a modificar: {this.props.product.name}</p>
            {this.props.order && <p>Precio de venta: {this.props.product.price}</p>}
            <input type="number" id="cuantity"></input>
            <label htmlFor="cuantity">Cantidad</label>
          </div>
          <div className="modal-footer">
            <a className="modal-close btn-flat">Confirmar</a>
            <a className="modal-close btn-flat">Volver</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
