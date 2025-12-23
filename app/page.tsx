import Link from "next/link";

interface Concept {
  id: string;
  title: string;
  description: string;
  path: string;
}

const concepts: Concept[] = [
  // Add your concepts here
  // Example:
  // {
  //   id: "1",
  //   title: "Basic Scene",
  //   description: "A simple Three.js scene with a rotating cube",
  //   path: "/concepts/basic-scene",
  // },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-black dark:text-zinc-50">
            Three.js Concepts
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            This site displays concepts built with{" "}
            <a
              href="https://threejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-950 dark:text-zinc-50 hover:underline"
            >
              three.js
            </a>{" "}
            — a JavaScript 3D Library and{" "}
            <a
              href="https://docs.pmnd.rs/react-three-fiber"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-950 dark:text-zinc-50 hover:underline"
            >
              react three fiber
            </a>{" "}
            — a React renderer for three.js
          </p>
        </div>

        {concepts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concepts.map((concept) => (
              <div
                key={concept.id}
                className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
                  {concept.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 grow">
                  {concept.description}
                </p>
                <Link
                  href={concept.path}
                  className="inline-block text-center px-4 py-2 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 rounded-md font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  View Concept
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-zinc-500 dark:text-zinc-400">
            <p>No concepts yet. Add your first concept to get started!</p>
          </div>
        )}
      </main>
    </div>
  );
}
