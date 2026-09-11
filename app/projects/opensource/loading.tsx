export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Header Skeleton */}
      <section className="mb-8">
        <div className="h-4 w-48 bg-zinc-800 rounded mb-3" />
        <div className="h-10 md:h-12 w-64 bg-zinc-800 rounded mb-4" />
        <div className="space-y-2 max-w-2xl">
          <div className="h-4 bg-zinc-800 rounded w-full" />
          <div className="h-4 bg-zinc-800 rounded w-3/4" />
        </div>
      </section>

      <hr className="border-zinc-800 mb-10" />

      {/* Projects Grid Skeleton */}
      <section className="mb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-64 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="h-6 w-1/3 bg-zinc-800 rounded mb-4" />
              <div className="h-4 w-full bg-zinc-800 rounded mb-2" />
              <div className="h-4 w-2/3 bg-zinc-800 rounded mb-6" />
              <div className="flex gap-2 mt-auto">
                <div className="h-6 w-16 bg-zinc-800 rounded-full" />
                <div className="h-6 w-16 bg-zinc-800 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}