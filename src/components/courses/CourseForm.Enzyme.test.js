import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

function reanderCourseForm(arg) {
  const defaultProps = {
    course: {},
    authors: [],
    saveing: false,
    onChange: () => {},
    onSave: () => {},
    errors: {},
  };

  const props = { ...defaultProps, ...arg };
  return shallow(<CourseForm {...props} />);
}

it("render course form", () => {
  const wrapper = reanderCourseForm();

  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it("render course form", () => {
  const wrapper = reanderCourseForm();
  expect(wrapper.find("button").text()).toEqual("Save");
});

it("render course form", () => {
  const wrapper = reanderCourseForm({ saveing: true });
  expect(wrapper.find("button").text()).toEqual("Saveing...");
});
