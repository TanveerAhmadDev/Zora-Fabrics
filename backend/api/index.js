import app from "../app.js";
import dbConnect from "../config/dbConnect.js";

export default async function handler(req, res) {
  try {
    await dbConnect();
    return app(req, res);
  } catch (err) {
    console.error("Serverless function error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
