import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="w-full p-2 px-3 pl-4 shadow-sm flex justify-between items-center">
      <span className="flex gap-2 justify-center items-center text-slate-600">
        <Link href="/" className=" text-primary font-bold text-lg">
          Flixel
        </Link>
      </span>
      <div className="flex gap-2 justify-center items-center text-slate-600">
        <span>Abanoub Sameh</span>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://avatars.githubusercontent.com/u/38143846?v=4" />
          <AvatarFallback>ASH</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
