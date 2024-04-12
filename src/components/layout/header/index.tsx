import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="w-full p-3 flex shadow-sm">
      <Link href="/" className=" text-green-600 font-bold text-lg">
        Flixel
      </Link>
    </header>
  );
}
