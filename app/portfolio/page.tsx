export default function Portfolio() {
  const projects = [
    {
      title: "Spotify Release",
      role: "Beat + Mix",
      views: "500K",
      type: "spotify",
      embed:
        "https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT",
    },
    {
      title: "YouTube Project",
      role: "Mix & Master",
      views: "1.2M",
      type: "youtube",
      embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-black px-8 py-12">

      <h1 className="text-4xl font-bold mb-10">PORTFOLIO</h1>

      <p className="text-black/60 mb-10">
        Selección de trabajos realizados por Kameeh
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((p, i) => (
          <div key={i} className="border border-black/10 p-4 rounded-xl">

            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">{p.title}</h2>
              <span className="text-sm text-black/50">{p.views}</span>
            </div>

            <p className="text-sm text-black/60 mb-4">
              {p.role}
            </p>

            {p.type === "spotify" ? (
              <iframe
                style={{ borderRadius: "12px" }}
                src={p.embed}
                width="100%"
                height="152"
              />
            ) : (
              <iframe
                width="100%"
                height="200"
                src={p.embed}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            )}

          </div>
        ))}

      </div>

    </main>
  );
}