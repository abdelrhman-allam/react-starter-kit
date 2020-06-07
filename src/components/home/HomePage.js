import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Courses Administration</h1>
      <p>React, Redux, React Router</p>
      <Link to="about" className="btn btn-primary">
        Learn more
      </Link>
    </div>
  );
}

export default HomePage;
