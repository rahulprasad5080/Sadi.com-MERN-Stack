class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }

  static notFound(msg = "Resource not found") {
    return new ApiError(404, msg);
  }
}

export default ApiError;
