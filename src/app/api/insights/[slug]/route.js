import { NextResponse } from 'next/server';
import connectDB from "@/app/lib/mongodb";
import Insight from '@/app/models/Insight';

connectDB();

export async function GET(request, { params }) {
  const { slug } = params;

  try {
    const insightItem = await Insight.findOne({ slug }).populate('category'); // Use slug to find the insight
    if (!insightItem) {
      return NextResponse.json({ message: 'Insight not found' }, { status: 404 });
    }
    return NextResponse.json(insightItem);
  } catch (error) {
    console.error('Failed to fetch insight item:', error);
    return NextResponse.json({ message: 'Failed to fetch insight item', error: error.message }, { status: 500 });
  }
}
