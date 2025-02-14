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
  origin: true,
  credentials: true
}));

mongoose.connect(process.env.URL)
  .then(() => console.log("Connected Successfully!"))
  .catch((err) => console.log("DB Connection Error:", err));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running at ${process.env.PORT || 5000}`);
});
