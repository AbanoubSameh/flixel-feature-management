import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="w-full p-3 flex shadow-sm">
      <Link href="/" className=" text-primary font-bold text-lg">
        Flixel
      </Link>
    </header>
  );
}
