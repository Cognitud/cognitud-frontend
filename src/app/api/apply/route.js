import { NextResponse } from "next/server";
import connectdb from "@/app/lib/mongodb"; // Adjust the path according to your project structure
import JobApplication from "@/app/models/JobApplication";

export async function POST(request) {
  try {
    await connectdb();
    console.log("Connected to database");

    const body = await request.json();
    console.log("Request Body:", body);

    const { fullName, email, phone, pdf } = body;

    if (!fullName || !email || !phone || !pdf) {
      console.log("Validation failed: All fields are required");
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newJobApplication = new JobApplication({
      fullName,
      email,
      phone,
      pdf,
    });

    await newJobApplication.save();
    console.log("Application saved:", newJobApplication);

    return NextResponse.json(
      { message: "Application submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating application:", error);
    return NextResponse.json(
      { message: `Failed to create application: ${error.message}` },
      { status: 500 }
    );
  }
}
