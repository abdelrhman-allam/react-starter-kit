import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import PropTypes from "prop-types";
function CourseForm({
  course,
  authors,
  onChange,
  onSave,
  saveing,
  errors = {},
}) {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        id="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        id="author"
        name="authorId"
        label="Author"
        value={course.authorId || ""}
        onChange={onChange}
        defaultOption="Select Author"
        options={authors.map((author) => {
          return { value: author.id, title: author.name };
        })}
        error={errors.authorId}
      />

      <TextInput
        name="category"
        id="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saveing} className="btn btn-primary">
        {saveing ? "Saveing..." : "Save"}
      </button>
    </form>
  );
}
CourseForm.propTypes = {
  course: PropTypes.object,
  authors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saveing: PropTypes.bool,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
