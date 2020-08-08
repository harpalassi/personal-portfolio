import React from "react";
import Navbar from "../components/Navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let wrapper;

describe("Navbar", () => {
  beforeEach(() => {
    wrapper = render(<Navbar />);
  });

  it("> Navbar / initial load ", () => {
    expect(wrapper).toBeDefined();
  });

  it("Navbar / renders nav links", () => {
    const navLinkNodes = screen.getAllByTestId("NavItem");
    const snapshot = navLinkNodes.map((node) => node.textContent);
    expect(snapshot).toMatchInlineSnapshot(`
      Array [
        "About",
        "Contact",
        "Projects",
        "Résumé",
      ]
    `);
  });
});
