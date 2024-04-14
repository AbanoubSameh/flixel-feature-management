import { auth } from "@/auth";
import { UserApplicationDataService } from "@/lib/prisma/data/application/application-data.service";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  const isLoggedIn = !!session?.user;
  if (!isLoggedIn) {
    redirect("/api/auth/signin");
  }
  return <>{children}</>;
}
