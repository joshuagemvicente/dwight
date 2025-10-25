import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./db";

const {
  NEXT_PUBLIC_ORIGIN,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  APPLE_CLIENT_ID,
  APPLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
} = process.env;

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  socialProviders: {
    facebook: {
      clientId: FACEBOOK_CLIENT_ID || "",
      clientSecret: FACEBOOK_CLIENT_SECRET || "",
    },
    google: {
      clientId: GOOGLE_CLIENT_ID || "",
      clientSecret: GOOGLE_CLIENT_SECRET || "",
    },
    apple: {
      clientSecret: APPLE_CLIENT_SECRET || "",
      clientId: APPLE_CLIENT_ID || "",
    },
    github: {
      clientSecret: GITHUB_CLIENT_SECRET || "",
      clientId: GITHUB_CLIENT_ID || "",
    },
  },
});

export const getUserSession = async (request: Request) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  return session;
};
