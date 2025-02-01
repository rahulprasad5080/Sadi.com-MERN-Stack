const HandlingNotFound = (err, req, res, next) => {
  const statusCode = err.statusCode || 404;
  res.status(statusCode).json({
    error: err.name || "Not Found",
    statusCode: statusCode,
    success: false,
    message: err.message || `Route not found: ${req.originalUrl}`,
  });
};

export default HandlingNotFound;
