import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom//extend-expect";

import SellerPage from "./seller-page";

describe("Elements and function on the seller page", () => {
  it("'volver' button should redirec to principal page ", () => {
    const { getByText } = render(<SellerPage />);
    expect(getByText("Volver").getAttribute("href")).toBe("/");
  });

  it("'eventos' button should redirect to event page", () => {
    const { getByText } = render(<SellerPage />);
    expect(getByText("Eventos").getAttribute("href")).toBe(
      "/registrarEventos"
    );
  });

  it("should display the 9 tables", () => {
    const sellerPage = render(<SellerPage />);
    const tables = sellerPage.queryAllByText("Mesa", {exact: false});
    expect(tables).toHaveLength(9);
  });
});
