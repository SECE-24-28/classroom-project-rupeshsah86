const express = require("express");
const cors = require("cors");
const database = require("./db-connect/db");
const BasicRoutes = require("./routes/basic-routes");
let port = 21000;
const app = express();
database.connect();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
console.log("Setting up routes...");
try {
  console.log("BasicRoutes:", BasicRoutes);
  app.use("/api/v1/User", BasicRoutes);
  console.log("Routes loaded successfully");
} catch (error) {
  console.log("Error loading routes:", error.message);
}
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Port is running",
  });
});

app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});