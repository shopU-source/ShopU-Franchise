import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const {
      Name,
      EmailAddress,
      PhoneNumber,
      PreferredFranchise,
      PreferredLocation,
      AdditionalInformation,
    } = await request.json();


    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "liveshopu@gmail.com",
        pass: "ofui ypyh hofh mwsz",
      },
    });

    const mailOption = {
      from:`${EmailAddress}`,
      to: "liveshopu@gmail.com",
      subject: "Send Email Tutorial",
      html: `
        <h2>ShopU</h2>
        <li> Name: ${Name}</li>
        <li> Email Address: ${EmailAddress}</li>
        <li> Phone Number: ${PhoneNumber}</li>
        <li> PreferredFranchise: ${PreferredFranchise}</li>
        <li> Preferred Location: ${PreferredLocation}</li>
        <li> Additional Information: ${AdditionalInformation}</li>
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Email Sent Failed",
      },
      { status: 500 }
    );
  }
}
