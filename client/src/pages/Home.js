import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
 const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then(res => setJobs(res.data))
     .catch(err => {
  if (err.response && err.response.data.errors) {
    alert("Validation Errors:\n" + err.response.data.errors.join("\n"));
  } else {
    alert("Something went wrong.");
  }
})
       .finally(() => setLoading(false));
  }, []);

   const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );



  <div className="row">
    {filteredJobs.length === 0 && <p>No jobs found.</p>}
    ...
  </div>


  return (
    <div className="container mt-4">
      <h2 className="mb-4">Job Listings</h2>
        <div className="mb-3">
        <input
          type="text"
          placeholder="Search by title or location"
          className="form-control"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
  {loading ? (
  <Spinner />
) : (
       <div className="row">
        {filteredJobs.length === 0 && <p>No jobs found.</p>}
        {filteredJobs.map(job => (
          <div className="col-md-4" key={job._id}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">
                  <strong>{job.company}</strong><br />
                  {job.location} | {job.type}
                </p>
                <Link to={`/job/${job._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
)}
    </div>
  );
}

export default Home;
