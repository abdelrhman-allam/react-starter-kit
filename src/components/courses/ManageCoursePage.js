import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

function CourseManagePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  ...props
}) {
  useEffect(() => {
    if (authors.length == 0) {
      loadAuthors().catch((error) => {
        console.log("Author loading error" + error);
      });
    }

    if (courses.length == 0) {
      loadCourses().catch((error) => {
        console.log("Courses loading error: " + error);
      });
    }
  }, [courses, authors]);

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}

CourseManagePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagePage);
