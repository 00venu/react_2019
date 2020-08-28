import React from "react";
import { shallow } from "enzyme";

import Headline from "./index";
const dataTestHandler = (component, attr) => {
  let wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("<Headline />", () => {
  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });
    it("Headline with props render", () => {
      const HeadlineComponent = dataTestHandler(wrapper, "HeadlineComponent");
      expect(HeadlineComponent).toHaveLength(1);
    });
  });
  describe("Have No Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Headline with out props render", () => {
      const HeadlineComponent = dataTestHandler(wrapper, "HeadlineComponent");
      expect(HeadlineComponent).toHaveLength(0);
    });
  });
});
