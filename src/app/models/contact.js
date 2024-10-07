import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be less than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  companyName: {
    type: String,
    trim: true,
    maxLength: [50, "Company name must be less than 50 characters"],
  },

  phoneNumber: {
    type: String,
    trim: true,
    match: [/^[0-9]{6,14}$/
, "Invalid phone number format"],
  },

  comments: {
    type: String,
    required: [true, "Comments are required."],
    trim: true, // Trim whitespace from beginning and end
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
