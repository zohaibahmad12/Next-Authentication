import React from "react";
import { Label } from "@/components/ui/label";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <Label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <Label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-800 mb-4"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-between my-4">
          <hr className="w-full border-gray-300" />
          <span className="text-gray-500 px-2">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <form>
          <button
            type="submit"
            className="flex items-center justify-center w-full bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-200 mb-4 border border-gray-300"
          >
            <FaGithub className="mr-2" />
            Login with GitHub
          </button>
        </form>
        <form>
          <button
            type="submit"
            className="flex items-center justify-center w-full bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-200 border border-gray-300"
          >
            <FaGoogle className="mr-2" />
            Login with Google
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-500 hover:text-indigo-700 font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
