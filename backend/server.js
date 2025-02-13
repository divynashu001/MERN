const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/userRoute");
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Allow these HTTP methods
  credentials: true, // Allow cookies and credentials
}));
// app.use(cors());
app.use("/user", router);

mongoose
  .connect(process.env.URL)
  .then(() => console.log("Connected Successfully!"));

app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running at ${process.env.PORT}`);
});

