import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

function CourseForm({
  course,
  authors,
  onChange,
  onSave,
  saveing = false,
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
        error={props.errors.authorId}
      />

      <TextInput
        name="category"
        id="category"
        label="Category"
        value={props.course.category}
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
