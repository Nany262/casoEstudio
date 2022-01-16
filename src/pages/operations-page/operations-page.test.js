import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom//extend-expect";

import OperationPage from "./operations-page";

describe("Elements and function on the operation page", () => {
  it("'volver' button should redirec to principal page ", () => {
    const { getByText } = render(<OperationPage />);
    expect(getByText("Volver").getAttribute("href")).toBe("/vendedor");
  });

  it("'agregar pedido' button should redirect to event page", () => {
    const { getByText } = render(<OperationPage />);
    expect(getByText("Agregar Pedido").getAttribute("href")).toBe(
      "/pedido/undefined"
    );
  });

  it("'modificar pedido' button should redirect to event page", () => {
    const { getAllByTestId } = render(<OperationPage />);
    const allModify = getAllByTestId("modificar-pedido");
    allModify.map((element) =>
      expect(
        element.getAttribute("href")
      ).toBe("/pedido")
    );
  });

  it("'generar factura' button should redirect to event page", () => {
    const { getByText } = render(<OperationPage />);
    expect(getByText("Generar Factura").getAttribute("href")).toBe("/factura");
  });
});
