import React from "react";

import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import App from "../App";

describe("App", () => {
  it("works", () => {
    expect(2 + 2).toEqual(4);
  });
});
