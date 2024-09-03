"use server";
import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { signIn, signOut } from "@/auth";
export const signupUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  let password = formData.get("password");
  password = await hash(password, 10);
  await connectDB();
  await User.create({ name, email, password });
  redirect("/login");
};

export const loginUser = async (formData) => {
  const email = formData.get("email");
  let password = formData.get("password");
  await signIn("credentials", {
    redirect: false,
    callbackUrl: "/",
    email,
    password,
  });
  redirect("/");
};

export const githubLogin = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const googleLogin = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const signoutUser = async () => {
  await signOut({ redirectTo: "/login" });
};
