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

  callbacks: {
    authorized: async ({ auth }) => {
      console.log("auth is", auth);
      // On every user request first this method will executed for middleware to protect routes
      return !!auth;
    },

    // Optional: We give it becasue we want a custom logic for our github and google signin
    signIn: async ({ user, account }) => {
      if (account?.provider == "google") {
        const { email, name, id } = user;
        console.log("google auth id is", id);
        await connectDB();
        const isUserExist = await User.findOne({ email });
        if (!isUserExist) {
          await User.create({
            email,
            name,
            authProviderId: id,
            password: "xyz",
          });
          return true;
        } else {
          return true;
        }
      }
      if (account?.provider == "github") {
        const { email, name, id } = user;
        console.log("github auth id is", id);
        await connectDB();
        const isUserExist = await User.findOne({ email });
        if (!isUserExist) {
          await User.create({
            email,
            name,
            authProviderId: id,
            password: "xyz",
          });
          return true;
        } else {
          return true;
        }
      } else if (account?.provider == "credentials") {
        return true;
      }
    },
  },
});
