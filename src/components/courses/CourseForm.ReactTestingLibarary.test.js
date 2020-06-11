import React from "react";
import { render, cleanup } from "@testing-library/react";
import CourseForm from "./CourseForm";
afterEach(cleanup);

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
  return render(<CourseForm {...props} />);
}

it("should render Add course heaer", () => {
  const { getByText } = reanderCourseForm();
  getByText("Add Course");
});

it("should label save button as 'Save' when not saving", () => {
  const { getByText } = reanderCourseForm();
  getByText("Save");
});

it("should label save button as 'Saveing...' when saving", () => {
  const { getByText } = reanderCourseForm({ saveing: true });
  getByText("Saveing...");
});
