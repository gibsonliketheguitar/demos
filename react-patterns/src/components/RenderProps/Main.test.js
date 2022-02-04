import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Main from "./Main";
import { data } from "./mockData";

test("render content", () => {
  const component = render(<Main data={data} />);
  //component.debug;
  expect(component.container).toHaveTextContent("Gibson Han");
});
