import { auth } from "@/auth";
import { UserApplicationDataService } from "@/lib/prisma/data/application/application-data.service";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  const isLoggedIn = !!session?.user;
  const app = await UserApplicationDataService.instance.getActiveApplication();

  if (isLoggedIn) {
    redirect("/dashboard");
  }
  return (
    <div className="flex m-auto flex-col p-5 bg-white rounded-2xl w-1/3 items-center">
      <h1 className=" text-primary font-bold text-xl mb-2">
        Welcome to <span>Flixel</span>
      </h1>
      <p className="text-gray-500">
        <span className="font-bold">Flixel</span> allows you to{" "}
        <span className="text-primary"> control feature rollouts </span> based
        on dynamic rules.{" "}
        <span className="font-bold">Dynamic feature flags </span> enables{" "}
        <span className="text-primary">personalized experiences</span> and
        ensures <span className="text-primary">seamless deployments</span>.
      </p>
      <p className="text-gray-500"></p>
      <Link href="/dashboard" className="text-primary font-bold text-lg mt-5">
        LOGIN
      </Link>
    </div>
  );
}
