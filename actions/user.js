"use server";
import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
export const signupUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  let password = formData.get("password");
  password = await hash(password, 10);
  await connectDB();
  await User.create({ name, email, password });
  redirect("/login");
};
