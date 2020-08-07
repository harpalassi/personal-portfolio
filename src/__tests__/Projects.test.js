import React from "react";
import ReactDOM from "react-dom";
import Projects from "../components/Projects";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let wrapper;

describe("Projects", () => {
  beforeEach(() => {
    wrapper = render(<Projects />);
  });

  it("> Projects / initial load ", () => {
    expect(wrapper).toBeDefined();
  });

  it("Projects / renders list of current projects", () => {
    const titleNodes = screen.getAllByTestId("ProjectTitle");
    const snapshot = titleNodes.map((node) => node.textContent);
    expect(snapshot).toMatchInlineSnapshot(`
      Array [
        "Car Mate",
        "All My Books",
        "Mixmag News Scraper",
        "Twitter Data Analyser",
      ]
    `);
  });
});
