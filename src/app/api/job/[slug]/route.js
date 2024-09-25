import { NextResponse } from "next/server";
import connectdb from "@/app/lib/mongodb"; // Adjust the path according to your project structure
import JobApplication from "@/app/models/JobApplication";

export async function POST(request) {
  try {
    await connectdb();

    const body = await request.json();
    console.log("Request Body:", body);

    const { fullName, email, phone, pdf } = body;

    if (!fullName || !email || !phone || !pdf) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newJobApplication = new News({
      fullName,
      email,
      phone,
      pdf,
    });

    await newJobApplication.save();

    return NextResponse.json(
      { message: "News created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating news:", error);
    return NextResponse.json(
      { message: `Failed to create news: ${error.message}` },
      { status: 500 }
    );
  }
}
