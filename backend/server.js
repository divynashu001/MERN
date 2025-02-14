const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/userRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// ✅ Allow Specific Origins
const allowedOrigins = ["http://localhost:5173", "https://mern-one-amber.vercel.app"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use("/user", router);

// ✅ Handle Preflight Requests Manually (Optional)
app.options("*", cors());

mongoose.connect(process.env.URL)
  .then(() => console.log("Connected Successfully!"))
  .catch((err) => console.log("DB Connection Error:", err));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running at ${process.env.PORT || 5000}`);
});
