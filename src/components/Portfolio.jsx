function Portfolio() {
  const projects = [
    {
      title: 'Elegant Dashboard',
      desc: 'A sleek, responsive admin UI with charts and dark mode.',
      link: 'https://example.com',
    },
    {
      title: 'AI Notes',
      desc: 'A smart note-taking PWA with offline support.',
      link: 'https://example.com',
    },
    {
      title: 'Motion Landing',
      desc: 'Framer-motion powered marketing page with 3D visuals.',
      link: 'https://example.com',
    },
  ];

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900">Featured Work</h3>
        <p className="mt-2 text-gray-600">A few projects that showcase craft and versatility.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-lg shadow-purple-100 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-36 w-full rounded-xl bg-gradient-to-br from-[#6A0DAD]/10 to-[#9B59B6]/20" />
            <h4 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-[#6A0DAD]">
              {p.title}
            </h4>
            <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
            <span className="mt-3 inline-block text-sm font-medium text-[#6A0DAD]">Visit →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
