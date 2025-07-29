const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jobboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error(err));

const jobRoutes = require("./routes/jobs");
app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
