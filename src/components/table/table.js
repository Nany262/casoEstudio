import React from "react";
import "./table.css";

export const Table = ({ numberTable }) => (
  <button
    className="btn btn-large button-table"
    type="submit"
    key={numberTable}
  >
    <img className="table" src="mesa.png" alt="mesa" />
    Mesa # {numberTable}
  </button>
);
