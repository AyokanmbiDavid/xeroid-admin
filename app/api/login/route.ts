import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { temp_users } from "@/lib/db"; // Use the array we created earlier

export async function POST(req: Request) {
  const { email, password, step } = await req.json();

  if (step === "check-email") {
    const user = temp_users.find((u) => u.email === email);
    if (!user) return NextResponse.json({ error: "Couldn't find your Account" }, { status: 404 });
    return NextResponse.json({ exists: true });
  }

  if (step === "verify-password") {
    const user = temp_users.find((u) => u.email === email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return NextResponse.json({ error: "Wrong password. Try again." }, { status: 401 });
    return NextResponse.json({ message: "Success" });
  }
}
