import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldCheck
} from "lucide-react";

import {
  Link
} from "react-router-dom";


function Landing() {

  return (
    <div>

      <section className="hero">

        <div className="hero-content">

          <span className="eyebrow">
            SMART CIVIC SERVICES
          </span>


          <h1>
            Report a problem.
            <br />
            Track the progress.
          </h1>


          <p>
            CivicConnect helps citizens report
            local issues, communicate with
            government departments and track
            complaints until resolution.
          </p>


          <div className="hero-buttons">

            <Link
              to="/complaints/new"
              className="primary-button"
            >
              Report a Problem
              <ArrowRight size={18} />
            </Link>


            <Link
              to="/dashboard"
              className="secondary-button"
            >
              View Dashboard
            </Link>

          </div>

        </div>


        <div className="hero-card">

          <div className="mini-header">

            <span>
              Recent complaint
            </span>

            <span className="status in-progress">
              In Progress
            </span>

          </div>


          <h3>
            Street light not working
          </h3>


          <p>
            Malviya Nagar, Jaipur
          </p>


          <div className="progress">

            <div className="progress-line">
              <span></span>
            </div>


            <div className="progress-labels">

              <span>
                Submitted
              </span>

              <span>
                Assigned
              </span>

              <span>
                Resolved
              </span>

            </div>

          </div>

        </div>

      </section>


      <section className="features">

        <div className="section-heading">

          <span className="eyebrow">
            HOW IT WORKS
          </span>

          <h2>
            One simple platform
            for civic problems.
          </h2>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <CheckCircle2 />
            </div>

            <h3>
              Report Easily
            </h3>

            <p>
              Submit civic complaints with
              location, description and
              supporting evidence.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <Clock3 />
            </div>

            <h3>
              Track Progress
            </h3>

            <p>
              Follow your complaint status
              from submission to final
              resolution.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <ShieldCheck />
            </div>

            <h3>
              Transparent Service
            </h3>

            <p>
              Get clear updates and communicate
              with the responsible department.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Landing;