import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Admin",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    LoginOTP: {
      type: Number,
      maxlength: 5,
      minlength: 5,
      match: [/^\d{5}$/, "OTP must be exactly 5 digits"],
    },
  },
  { timestamps: true }
);
const AdminModel = mongoose.model("Admin", adminSchema);

export default AdminModel;
