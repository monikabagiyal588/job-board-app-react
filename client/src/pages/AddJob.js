import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddJob() {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    title: "",
    company: "",
    type: "",
    location: "",
    description: "",
  });

const navigate = useNavigate();

 const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

 const validateForm = () => {
    let formErrors = {};
    if (!form.title) formErrors.title = "Job title is required";
    if (!form.company) formErrors.company = "Company name is required";
    if (!form.type) formErrors.type = "Job type is required";
    if (!form.location) formErrors.location = "Location is required";
    if (!form.description) formErrors.description = "Description is required";
    return formErrors;
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/jobs", form);
      navigate("/");
    } catch (err) {
      alert("Server error while adding job. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        {["title", "company", "type", "location", "description"].map(field => (
          <div className="mb-3" key={field}>
            <label className="form-label text-capitalize">{field}</label>
            {field === "description" ? (
              <textarea
                name={field}
                className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                onChange={handleChange}
                rows="4"
              />
            ) : (
              <input
                type="text"
                name={field}
                className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                onChange={handleChange}
              />
            )}
            {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
          </div>
        ))}
        <button type="submit" className="btn btn-success">Add Job</button>
      </form>
    </div>
  );
}

export default AddJob;
