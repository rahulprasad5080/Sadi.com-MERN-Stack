import express from "express";
import HandlingNotFound from "./Middleware/Handle404.js";
import Routes from "./routes/index.js";
import ApiError from "./utils/ApiError.js";

const app = express();

// Routes
app.use("/api/v1", Routes);

// 404 Error Handling for undefined routes
app.all("*", (req, res, next) => {
  next(ApiError.notFound(`Route not found: ${req.originalUrl}`));
});

// Middleware 404
app.use(HandlingNotFound);

export default app;
