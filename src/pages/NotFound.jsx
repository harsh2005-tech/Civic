// import React from "react";
import {
  Link
} from "react-router-dom";


function NotFound() {

  return (
    <section className="not-found">

      <div>

        <span>
          404
        </span>

        <h1>
          Page not found
        </h1>

        <p>
          The page you are looking for
          does not exist.
        </p>

        <Link
          to="/"
          className="primary-button"
        >
          Go Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;