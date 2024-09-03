import { NextResponse } from 'next/server';
import connectDB from "@/app/lib/mongodb";
import News from '@/app/models/News';

connectDB();

export async function GET(request) {
  try {
    const newsItems = await News.find().populate('category'); // Make sure 'category' is a valid reference
    return NextResponse.json(newsItems);
  } catch (error) {
    console.error('Failed to fetch news items:', error);
    return NextResponse.json({ message: 'Failed to fetch news items', error: error.message }, { status: 500 });
  }
}
