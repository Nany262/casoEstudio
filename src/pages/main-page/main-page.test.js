import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom//extend-expect";

import MainPage from "./main-page";

describe("Elements and function on the main page", () => {
  it("should display the admin button", () => {
    const { getByText } = render(<MainPage />);
    expect(getByText("Administrador").textContent).toBeTruthy();
  });

  it("should display the seller button", () => {
    const { getByText } = render(<MainPage />);
    expect(getByText("Vendedor").textContent).toBeTruthy();
  });

  it("should display the logo", () => {
    const { getByTestId } = render(<MainPage />);
    expect(getByTestId(/principal-logo/i)).toBeTruthy();
  });

  it("'vendedor' button should redirect to seller screen", () => {
    const { getByText } = render(<MainPage />);
    expect(getByText("Vendedor").getAttribute("href")).toBe("/vendedor");
  });

  it("'administrador' button should redirect to login screen", () => {
    const { getByText } = render(<MainPage />);
    expect(getByText("Administrador").getAttribute("href")).toBe("/administrador");
  });
});
