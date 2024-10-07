import connectDB from "@/app/lib/mongodb";
import Newsletter from "@/app/models/newsletter";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Validate if email is present
    if (!email) {
      throw new Error("Email is required.");
    }

    // Connect to MongoDB
    await connectDB();

    // Check if the email already exists in the database
    const existingSubscription = await Newsletter.findOne({ email });

    if (existingSubscription) {
      console.log('Email already subscribed:', email);
      return NextResponse.json({ msg: ["Email already subscribed."] });
    }

    // Create a new subscription record
    const newSubscription = await Newsletter.create({ email });

    console.log('Subscription successful:', newSubscription);
    return NextResponse.json({
      msg: ["Subscription successful."],
      success: true,
      subscription: newSubscription,
    });
  } catch (error) {
    // Handle specific validation errors from Mongoose
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = Object.values(error.errors).map(err => err.message);
      console.log("Validation errors:", errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      // Handle other errors (database connection, unexpected errors)
      console.error("Error subscribing:", error);
      return NextResponse.json({ msg: ["Unable to subscribe. Please try again later."] });
    }
  }
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    return POST(req, res);
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
