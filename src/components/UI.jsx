import React from "react";
import {
  AlertCircle,
  Clock,
  CheckCircle2
} from "lucide-react";


export function StatusBadge({
  status
}) {

  const statusClass =
    status
      .toLowerCase()
      .replaceAll(" ", "-");

  return (
    <span
      className={`status ${statusClass}`}
    >
      {status}
    </span>
  );
}


export function StatCard({
  title,
  value,
  icon
}) {

  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div>

        <p>
          {title}
        </p>

        <h3>
          {value}
        </h3>

      </div>

    </div>
  );
}


export function StatusIcon({
  status
}) {

  if (status === "Resolved") {
    return <CheckCircle2 size={18} />;
  }

  if (status === "In Progress") {
    return <Clock size={18} />;
  }

  return <AlertCircle size={18} />;
}