// /app/api/insightList/route.js
import { NextResponse } from 'next/server';
import connectDB from "@/app/lib/mongodb";
import Insight from '@/app/models/Insight';
import Category from '@/app/models/Category';  // Import Category model

connectDB();

export async function GET(request) {
  try {
    const insights = await Insight.find().populate('category'); // Ensure 'category' is a valid reference
    return NextResponse.json(insights);
  } catch (error) {
    console.error('Failed to fetch insights:', error);
    return NextResponse.json({ message: 'Failed to fetch insights', error: error.message }, { status: 500 });
  }
}
