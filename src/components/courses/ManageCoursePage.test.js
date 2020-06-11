import React from "react";
import { mount } from "enzyme";
import { ManageCoursePage } from "./ManageCoursePage";
import { authors, courses, newCourse } from "../../../tools/mockData";

function reanderCourseForm(arg) {
  const defaultProps = {
    history: {},
    courses,
    authors,
    course: newCourse,
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    match: {},
  };

  const props = { ...defaultProps, ...arg };
  return mount(<ManageCoursePage {...props} />);
}

it("sets error when attempating to save an empty title field", () => {
  const warpper = reanderCourseForm();
  warpper.find("form").simulate("submit");
  const error = warpper.find(".alert").first();
  expect(error.text()).toBe("Title is required");
});
