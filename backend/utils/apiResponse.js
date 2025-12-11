class ApiResponse {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode || 200;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
