import mongoose from 'mongoose';

const InsightSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['In-Depth Analysis', 'Opinion'],
    required: true,
  },
  pdf: {
    type: String,
    required: true // Store the URL of the PDF file
  },
  weekday: {
    type: String,
    required: true, // Store the weekday name
  },
});

export default mongoose.models.Insight || mongoose.model('Insight', InsightSchema);
