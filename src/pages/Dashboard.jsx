import React from "react";
import {
  useMemo,
  useState
} from "react";

import {
  Search,
  Plus,
  ClipboardList,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import {
  complaints
} from "../data/mockData";

import {
  StatCard,
  StatusBadge
} from "../components/UI";


function Dashboard() {

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("All");


  const filteredComplaints =
    useMemo(() => {

      return complaints.filter(
        (complaint) => {

          const matchesSearch =
            complaint.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            complaint.location
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesFilter =
            filter === "All" ||
            complaint.status === filter;

          return (
            matchesSearch &&
            matchesFilter
          );
        }
      );

    }, [search, filter]);


  return (
    <section className="dashboard page-container">

      <div className="page-heading">

        <div>

          <span className="eyebrow">
            CITIZEN DASHBOARD
          </span>

          <h1>
            Welcome back, Harsh
          </h1>

          <p>
            Track and manage your
            reported civic issues.
          </p>

        </div>


        <Link
          to="/complaints/new"
          className="primary-button"
        >
          <Plus size={18} />
          New Complaint
        </Link>

      </div>


      <div className="stats-grid">

        <StatCard
          title="Total Complaints"
          value="12"
          icon={<ClipboardList />}
        />

        <StatCard
          title="Pending"
          value="5"
          icon={<Clock />}
        />

        <StatCard
          title="In Progress"
          value="3"
          icon={<Clock />}
        />

        <StatCard
          title="Resolved"
          value="7"
          icon={<CheckCircle />}
        />

      </div>


      <div className="complaints-section">

        <div className="section-toolbar">

          <div>

            <h2>
              My Complaints
            </h2>

            <p>
              Recent complaints reported
              by you.
            </p>

          </div>


          <div className="filters">

            <div className="search-box">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search complaints..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>


            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
            >

              <option value="All">
                All Status
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Resolved">
                Resolved
              </option>

            </select>

          </div>

        </div>


        <div className="complaint-list">

          {filteredComplaints.map(
            (complaint) => (

              <Link
                key={complaint.id}
                to={`/complaints/${complaint.id}`}
                className="complaint-card"
              >

                <div className="complaint-main">

                  <div className="complaint-top">

                    <span className="complaint-id">
                      {complaint.id}
                    </span>

                    <StatusBadge
                      status={
                        complaint.status
                      }
                    />

                  </div>


                  <h3>
                    {complaint.title}
                  </h3>


                  <p>
                    {complaint.description}
                  </p>


                  <div className="complaint-meta">

                    <span>
                      📍 {complaint.location}
                    </span>

                    <span>
                      {complaint.category}
                    </span>

                    <span>
                      {complaint.submitted}
                    </span>

                  </div>

                </div>


                <div className="complaint-arrow">
                  <ArrowRight />
                </div>

              </Link>

            )
          )}


          {filteredComplaints.length === 0 && (

            <div className="empty-state">

              <h3>
                No complaints found
              </h3>

              <p>
                Try changing your search
                or filter.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Dashboard;