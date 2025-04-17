const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes will go here
// Example: app.use("/api/auth", require("./routes/auth.routes"));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB connected");
  app.listen(process.env.PORT || 5000, () =>
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
  );
}).catch(err => console.error("❌ Mongo error:", err));
