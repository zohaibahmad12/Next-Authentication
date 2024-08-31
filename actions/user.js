"use server";
import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
export const signupUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  await connectDB();
  await User.create({ name, email, password });
  redirect("/login");
};
