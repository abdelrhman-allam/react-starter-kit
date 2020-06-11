import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { authors, courses } from "../../../tools/mockData";

it('sets button label to "Saving..." when saving is true', () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSave={jest.fn()}
      errors={{}}
      saveing
    />
  );

  expect(tree).toMatchSnapshot();
});

it('sets button label to "Save" when saving is false', () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSave={jest.fn()}
      errors={{}}
      saveing={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
