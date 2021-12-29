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

  it("should redirect to seller screen", () => {

  });

  it("should redirect to login screen", () => {
    
  });
});
