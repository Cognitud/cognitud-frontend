// src/app/api/newsdetail/[id]/route.js
import { NextResponse } from 'next/server';
import connectDB from "@/app/lib/mongodb";
import News from '@/app/models/News';

// Connect to the database
connectDB();

// Handle GET request to fetch a single news item by its ID
export async function GET(request, { params }) {
    const { slug } = params;
  
    try {
      const newsItem = await News.findOne({ slug }).populate('category'); // Use slug to find the insight
      if (!newsItem) {
        return NextResponse.json({ message: 'News not found' }, { status: 404 });
      }
      return NextResponse.json(newsItem);
    } catch (error) {
      console.error('Failed to fetch insight item:', error);
      return NextResponse.json({ message: 'Failed to fetch insight item', error: error.message }, { status: 500 });
    }
  }