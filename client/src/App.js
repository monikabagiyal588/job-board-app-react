import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import JobDetails from "./pages/JobDetails";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/job/:id" element={<JobDetails />} />
       
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
