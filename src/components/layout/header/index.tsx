import { auth } from "@/auth";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default async function HeaderComponent() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <header className="w-full p-2 px-3 pl-4 shadow-sm flex justify-between items-center">
      <span className="flex gap-2 justify-center items-center text-slate-600">
        <Link href="/" className=" text-primary font-bold text-lg">
          Flixel
        </Link>
      </span>
      {isLoggedIn ? (
        <div className="flex gap-2 justify-center items-center text-slate-600">
          <span>{session.user?.name}</span>
          <Avatar className="h-8 w-8">
            <AvatarImage src={session.user?.image ?? ""} />
          </Avatar>
        </div>
      ) : (
        <span>Not LoggedIn</span>
      )}
    </header>
  );
}
