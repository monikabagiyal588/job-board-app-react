import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => {
  if (err.response && err.response.data.errors) {
    alert("Validation Errors:\n" + err.response.data.errors.join("\n"));
  } else {
    alert("Something went wrong.");
  }
})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{job.title}</h2>
          <h5 className="card-subtitle mb-2 text-muted">{job.company}</h5>
          <p className="card-text">
            <strong>Type:</strong> {job.type}<br />
            <strong>Location:</strong> {job.location}<br />
            <strong>Description:</strong><br />
            {job.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
