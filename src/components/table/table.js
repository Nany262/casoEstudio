import React from "react";
import "./table.css";

export const Table = ({ numberTable }) => {
  return (
    <form
      onSubmit={() => {
        console.log("selecionando mesa");
      }}
      id={"mesa-" + numberTable}
      action={`/operaciones/${numberTable}`}
    >
      <button className="btn btn-large button-table">
        <img className="table" src="mesa.png" />
        Mesa # {numberTable}
      </button>
    </form>
  );
};
