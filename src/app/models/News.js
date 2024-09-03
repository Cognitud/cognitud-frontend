import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
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
    enum: ['Latest News', 'Regular News'],
    required: true,
  },
  pdf: {
    type: String,
    required: true // Store the URL of the PDF file
  },
});

export default mongoose.models.News || mongoose.model('News', NewsSchema);
