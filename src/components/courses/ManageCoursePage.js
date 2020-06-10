import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";

function CourseManagePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saveing, setSaveing] = useState(false);

  useEffect(() => {
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        console.log("Author loading error" + error);
      });
    }

    if (courses.length === 0) {
      loadCourses().catch((error) => {
        console.log("Courses loading error: " + error);
      });
    } else {
      setCourse({ ...props.course });
    }
  }, [props.course]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((preCourse) => ({
      ...preCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaveing(true);
    saveCourse(course)
      .then(() => {
        history.push("/courses");
      })
      .catch((errors) => {
        setSaveing(false);
        setErrors({ onSave: errors.message });
      });
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Title is required";
    if (!course.category) _errors.category = "Title is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  return authors.length === 0 && courses.length === 0 ? (
    <Spinner />
  ) : (
    <>
      <CourseForm
        authors={authors}
        course={course}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        saveing={saveing}
      />
    </>
  );
}

CourseManagePage.propTypes = {
  course: PropTypes.object,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug == slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagePage);
