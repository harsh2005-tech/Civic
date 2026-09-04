import {
  MapPin,
  Building2,
  CalendarDays,
  Flag,
  ArrowLeft
} from "lucide-react";

import {
  Link,
  useParams
} from "react-router-dom";

import {
  complaints
} from "../data/mockData";

import {
  StatusBadge
} from "../components/UI";


function ComplaintDetail() {

  const { id } =
    useParams();


  const complaint =
    complaints.find(
      (item) => item.id === id
    );


  if (!complaint) {

    return (
      <section className="page-container">

        <h1>
          Complaint not found
        </h1>

        <Link
          to="/dashboard"
          className="primary-button"
        >
          Back to Dashboard
        </Link>

      </section>
    );

  }


  return (
    <section className="page-container detail-page">

      <Link
        to="/dashboard"
        className="back-link"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>


      <div className="detail-header">

        <div>

          <div className="detail-id">
            Complaint ID: {complaint.id}
          </div>

          <h1>
            {complaint.title}
          </h1>

          <p>
            Submitted on {complaint.submitted}
          </p>

        </div>


        <StatusBadge
          status={complaint.status}
        />

      </div>


      <div className="detail-grid">

        <div className="detail-content">

          <div className="detail-card">

            <h2>
              Complaint Details
            </h2>

            <p className="description">
              {complaint.description}
            </p>


            <div className="info-grid">

              <div className="info-item">

                <MapPin />

                <div>

                  <span>
                    Location
                  </span>

                  <strong>
                    {complaint.location}
                  </strong>

                </div>

              </div>


              <div className="info-item">

                <Building2 />

                <div>

                  <span>
                    Department
                  </span>

                  <strong>
                    {complaint.department}
                  </strong>

                </div>

              </div>


              <div className="info-item">

                <CalendarDays />

                <div>

                  <span>
                    Submitted
                  </span>

                  <strong>
                    {complaint.submitted}
                  </strong>

                </div>

              </div>


              <div className="info-item">

                <Flag />

                <div>

                  <span>
                    Priority
                  </span>

                  <strong>
                    {complaint.priority}
                  </strong>

                </div>

              </div>

            </div>

          </div>


          <div className="detail-card">

            <h2>
              Complaint Timeline
            </h2>


            <div className="timeline">

              {complaint.history.map(
                (item, index) => (

                  <div
                    className="timeline-item"
                    key={index}
                  >

                    <div className="timeline-dot" />

                    <div>

                      <span>
                        {item.date}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>


        <aside className="detail-sidebar">

          <div className="map-placeholder">

            <MapPin size={36} />

            <h3>
              Complaint Location
            </h3>

            <p>
              {complaint.location}
            </p>

            <small>
              Map integration can be
              connected with Google Maps
              or OpenStreetMap.
            </small>

          </div>


          <div className="help-card">

            <h3>
              Need help?
            </h3>

            <p>
              Contact CivicConnect support
              if you have questions about
              this complaint.
            </p>

            <button>
              Contact Support
            </button>

          </div>

        </aside>

      </div>

    </section>
  );
}

export default ComplaintDetail;