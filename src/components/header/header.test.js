import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom//extend-expect"

import { Header } from "./header";

describe("Header of the pages", () => {
  it("should display the page title", () => {
    const header = render(<Header />);
    expect(header.container).toHaveTextContent("Ventana Principal")
  });
});

