import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  pdf: { type: String },
});

export default mongoose.models.JobApplication ||
  mongoose.model("JobApplication", JobApplicationSchema);
