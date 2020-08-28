import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

const dataTestHandler = (component, attr) => {
  let wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("<Header />", () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<Header />);
  });
  it("header should run without error", () => {
    const logo = dataTestHandler(wrap, "logo");
    expect(logo).toHaveLength(1);
  });
});
