// This whole code is followed by Auth.js documentation
import NextAuth from "next-auth";
import connectDB from "./lib/db";
import { User } from "./models/User";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { compare } from "bcryptjs";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.Github_Client_ID,
      clientSecret: process.env.Github_Client_SECRET,
    }),

    Google({
      clientId: process.env.Google_Client_ID,
      clientSecret: process.env.Google_Client_SECRET,
    }),

    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        await connectDB();
        user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("User not found.");
        }
        let passwordMatch = await compare(credentials.password, user.password);
        if (!passwordMatch) {
          throw new Error("Invalid Password");
        }
        return user;
      },
    }),
  ],

  //for login auth it redirect to our own custom login page instead of next-auth built in page
  pages: {
    signIn: "/login",
  },
});
