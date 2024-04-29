import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { UserApplicationDataService } from "@/lib/prisma/data/application/application-data.service";
import { redirect } from "next/navigation";

const signInAction = async () => {
  "use server";
  await signIn("github", { redirectTo: "/dashboard" });
};

export default async function Home() {
  const session = await auth();

  const isLoggedIn = !!session?.user;
  const app = await UserApplicationDataService.instance.getActiveApplication();

  if (isLoggedIn) {
    redirect("/dashboard");
  }

  return (
    <div className="flex m-auto flex-col p-5 bg-white rounded-2xl w-1/3 items-center">
      <h1 className="text-primary font-bold text-xl mb-2">
        Welcome to <span>Flixel</span>
      </h1>
      <p className="text-gray-500">
        <span className="font-bold">Dynamic feature flags </span> enables{" "}
        <span className="text-primary">personalized experiences</span> and
        ensures <span className="text-primary">seamless deployments</span>.
        <span className="font-bold"> Flixel</span> allows you to{" "}
        <span className="text-primary"> control feature rollouts </span> based
        on dynamic rules.
      </p>
      <form className="align-center items-center pt-4" action={signInAction}>
        <Button type="submit">Login with GITHUB</Button>
      </form>
    </div>
  );
}
