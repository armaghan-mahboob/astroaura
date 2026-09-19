const posts = [
  {
    category: "Kundli Matching",
    title: "Kundli Matching: How Gun Milan Actually Works",
    image: "/public/blogstrips/kundli.webp",
  },
  {
    category: "Compatibility",
    title: "Love Calculator: What the Score Actually Means",
    image: "/public/blogstrips/love.webp",
  },
  {
    category: "AI Astrology",
    title:
      "Is AI Capable of Predicting Your Future? AI Astrology vs Human Astrology",
    image: "/public/blogstrips/future.webp",
  },
  {
    category: "Zodiac Signs",
    title: "The Fire Signs: Aries, Leo, and Sagittarius Personality Traits",
    image: "/public/blogstrips/zodiac.webp",
  },
  {
    category: "Moon Phases",
    title: "Harnessing Full Moon Energy for Manifestation and Release",
    image: "/public/blogstrips/moon.webp",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ViewAllButton({ className = "" }) {
  return (
    <a
      href="#"
      className={`flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 ${className}`}
    >
      View all blogs
      <ArrowIcon />
    </a>
  );
}

function BlogCard({ post }) {
  return (
    <div className="flex h-70 w-72 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-pink-400/50 sm:w-[calc((100%-60px)/4)]">
      <div className="aspect-16/10 w-full overflow-hidden bg-black/40">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-bold uppercase tracking-wide text-orange-400">
          {post.category}
        </span>
        <h3 className="text-sm font-bold leading-snug text-white">
          {post.title}
        </h3>
      </div>
    </div>
  );
}

function BlogStrip() {
  return (
    <section className="relative z-10 py-16 sm:p-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-bold tracking-widest text-orange-400">
              ASTROLOGY, EXPLAINED
            </p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Read from our blog
            </h2>
          </div>

          <ViewAllButton className="hidden sm:flex" />
        </div>

        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto py-5">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>

        <ViewAllButton className="mx-auto mt-6 sm:hidden" />
      </div>
    </section>
  );
}

export default BlogStrip;
