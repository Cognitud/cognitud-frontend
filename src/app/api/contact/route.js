import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { sendEmail } from "@/utils/nodemailer"; // Adjust the path as per your project structure

// Ensure database connection is reused
connectDB();

export async function POST(req) {
  try {
    // Destructure and validate incoming JSON data
    const { fullname, email, companyName, phoneNumber, comments } = await req.json();
    
    // Validate if required fields are present (optional step based on frontend validation)
    if (!fullname || !email || !comments) {
      throw new Error("Required fields are missing.");
    }

    // Create a new Contact document using Mongoose model
    const newContact = new Contact({
      fullname,
      email,
      companyName,
      phoneNumber,
      comments,
    });

    // Send email notification
    const emailPromise = sendEmail({
      to: 'sandeeps@cognitud.com',  // Replace with recipient email address
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Comments:</strong> ${comments}</p>
      `,
    });

    // Run database save and email sending in parallel
    await Promise.all([newContact.save(), emailPromise]);

    // Return success response
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    // Handle specific validation errors from Mongoose
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = Object.values(error.errors).map(err => err.message);
      console.log("Validation errors:", errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      // Handle other errors (database connection, unexpected errors)
      console.error("Error in creating contact:", error);
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
