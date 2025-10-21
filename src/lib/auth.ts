import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./db";

const { NEXT_PUBLIC_ORIGIN, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } =
  process.env;

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  // socialProviders: {
  //   google: {
  //     clientId: GOOGLE_CLIENT_ID || "",
  //     clientSecret: GOOGLE_CLIENT_SECRET || "",
  //   },
  //   clientId: APPLE_CLIENT_ID || "",
  //   apple: {
  //     clientSecret: APPLE_CLIENT_SECRET || "",
  //   },
  // },
});

export const getUserSession = async (request: Request) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  return session;
};
