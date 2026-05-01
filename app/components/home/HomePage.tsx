import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Gallery Page</h1>
        <nav>
          <Link href="/upload">Go to Upload</Link>
        </nav>
      </main>
    </div>
  );
}
