import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to <span>Flexel</span>
      </h1>
      <Link href="/dashboard" className=" text-primary font-bold text-lg">
        Go to the admin page
      </Link>
    </div>
  );
}
