import { auth } from "@/auth";
import NavComponent from "@/components/layout/nav";
import { UserApplicationDataService } from "@/lib/prisma/data/application/application-data.service";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  const isLoggedIn = !!session?.user;
  const app = await UserApplicationDataService.instance.getActiveApplication();

  if (!isLoggedIn || !app) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex flex-row h-full">
      <NavComponent appId={app.id} />
      <div className="container pt-10 flex-grow">{children}</div>
    </div>
  );
}
