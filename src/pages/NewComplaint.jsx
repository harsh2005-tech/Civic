import React from "react";
import {
  useState
} from "react";

import {
  ArrowLeft,
  Upload,
  CheckCircle2
} from "lucide-react";

import {
  Link,
  useNavigate
} from "react-router-dom";


function NewComplaint() {

  const navigate = useNavigate();


  const [form, setForm] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
    priority: "Medium"
  });


  const [file, setFile] =
    useState(null);


  const [submitted, setSubmitted] =
    useState(false);


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.title ||
      !form.category ||
      !form.location ||
      !form.description
    ) {

      alert(
        "Please fill all required fields."
      );

      return;
    }


    setSubmitted(true);


    setTimeout(() => {

      navigate("/dashboard");

    }, 1500);

  };


  if (submitted) {

    return (
      <section className="success-page">

        <div className="success-card">

          <CheckCircle2
            size={60}
          />

          <h1>
            Complaint Submitted!
          </h1>

          <p>
            Your complaint has been
            successfully submitted.
          </p>

          <p>
            Redirecting to dashboard...
          </p>

        </div>

      </section>
    );

  }


  return (
    <section className="page-container form-page">

      <Link
        to="/dashboard"
        className="back-link"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>


      <div className="form-heading">

        <span className="eyebrow">
          REPORT AN ISSUE
        </span>

        <h1>
          Submit a new complaint
        </h1>

        <p>
          Provide accurate information
          so the concerned department
          can resolve your issue quickly.
        </p>

      </div>


      <form
        className="complaint-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label htmlFor="title">
            Complaint Title *
          </label>

          <input
            id="title"
            name="title"
            type="text"
            placeholder="Example: Street light not working"
            value={form.title}
            onChange={handleChange}
          />

        </div>


        <div className="form-row">

          <div className="form-group">

            <label htmlFor="category">
              Category *
            </label>

            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
            >

              <option value="">
                Select category
              </option>

              <option value="Electricity">
                Electricity
              </option>

              <option value="Water Supply">
                Water Supply
              </option>

              <option value="Sanitation">
                Sanitation
              </option>

              <option value="Roads">
                Roads
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>


          <div className="form-group">

            <label htmlFor="priority">
              Priority
            </label>

            <select
              id="priority"
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >

              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>

            </select>

          </div>

        </div>


        <div className="form-group">

          <label htmlFor="location">
            Location *
          </label>

          <input
            id="location"
            name="location"
            type="text"
            placeholder="Example: Malviya Nagar, Jaipur"
            value={form.location}
            onChange={handleChange}
          />

        </div>


        <div className="form-group">

          <label htmlFor="description">
            Description *
          </label>

          <textarea
            id="description"
            name="description"
            rows="6"
            placeholder="Describe the problem in detail..."
            value={form.description}
            onChange={handleChange}
          />

        </div>


        <div className="form-group">

          <label>
            Supporting Evidence
          </label>

          <label className="upload-box">

            <Upload size={28} />

            <strong>
              Click to upload
            </strong>

            <span>
              JPG, PNG or PDF
            </span>

            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) =>
                setFile(
                  e.target.files[0]
                )
              }
            />

          </label>


          {file && (

            <div className="file-name">
              Selected: {file.name}
            </div>

          )}

        </div>


        <div className="form-actions">

          <Link
            to="/dashboard"
            className="secondary-button"
          >
            Cancel
          </Link>


          <button
            type="submit"
            className="primary-button"
          >
            Submit Complaint
          </button>

        </div>

      </form>

    </section>
  );
}

export default NewComplaint;