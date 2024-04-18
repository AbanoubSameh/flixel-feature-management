import { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/GitHub";
import prisma from "./lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

const { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET } = process.env;
if (!AUTH_GITHUB_ID || !AUTH_GITHUB_SECRET) {
  throw new Error("Auth provider not configured correctly");
}

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: AUTH_GITHUB_ID,
      clientSecret: AUTH_GITHUB_SECRET,
    }),
  ],
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
