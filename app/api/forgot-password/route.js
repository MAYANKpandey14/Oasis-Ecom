import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.redirect("/login");
    }
    console.log("user: ", existingUser);
    return new NextResponse("Email doesn't exists", { status: 400 });
  } catch (error) {
    console.log(error);
  }

  const resetToken = crypto.randomBytes(20).toString("hex");
  const passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const passwordResetExpires = Date.now() + 600000;

  existingUser.resetToken = passwordResetToken;
  existingUser.resetTokenExpiry = passwordResetExpires;
  const resetURL = `localhost:3000/reset-password/${resetToken}`;

  console.log(resetURL);

  const body = "Reset Password by using this link :" + resetURL;

  const msg = {
    to: email,
    from: "mayankpandeyofficial404@gmail.com",
    subject: "Reset Password",
    text: body,
  };

  sgMail.setApiKey(prrocess.env.SENDGRID_API_KEY || "");

  sgMail
    .send(msg)
    .then(() => {
      return new NextResponse("Reset password email is sent.", { status: 200 });
    })
    .catch(async (error) => {
      console.log(error);
      existingUser.resetToken = undefined;
      existingUser.resetTokenExpiry = undefined;
      await existingUser.save();
      return new NextResponse("Error sending email.", { status: 400 });
    });
}
