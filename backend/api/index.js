import app from "../app.js";
import dbConnect from "../config/dbConnect.js";

export default async function handler(req, res) {
  try {
    await dbConnect(); // ensure DB is connected
    return app(req, res); // pass request to Express app
  } catch (error) {
    console.error("Serverless function error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
