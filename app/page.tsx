import { reasons } from "./list";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-between py-8 px-4 sm:py-32 sm:px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            My 100 Reasons...
          </h1>
          <div>
            {reasons.map((sentence, index) => (
              <p
                key={sentence}
                className="text-lg leading-8 text-zinc-600 dark:text-zinc-400"
              >
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {index + 1}.
                </span>{" "}
                {sentence}
              </p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
