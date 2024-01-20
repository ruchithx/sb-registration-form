// import EmailVerification from "@/app/register/EmailVerification";
import EmailVerification from "@/app/components/EmailVerification";
import { NextResponse } from "next/server";
import { Resend } from "resend";
// import { mailOptions, transporter } from "./../../../config/nodemailer";
import { any } from "zod";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();

    const resend = new Resend("re_7yuYjHXa_DoVRfj4tNpcjnhYGHe9kK4bT");

    resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Registraion of IEEE student branch",
      react: EmailVerification({ code }),
    });

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD,
    //   },
    // });

    // const mailOptions = {
    //   from: process.env.EMAIL,
    //   to: process.env.EMAIL,
    //   subject: "Registraion of IEEE student branch",
    //   text: "register your branch",
    //   html: "<h1>Registe</h1>",
    // };

    // await transporter.sendMail(mailOptions);

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
