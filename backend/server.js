const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/userRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors({
  origin: ["http://localhost:5173", "https://mern-six-tan.vercel.app"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
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

