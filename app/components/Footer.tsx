import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-6">
      <div className="container mx-auto px-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Built by{" "}
        <Link
          href="https://www.duncanmccall.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-950 dark:text-zinc-50 hover:underline"
        >
          Duncan McCall
        </Link>
      </div>
    </footer>
  );
}

