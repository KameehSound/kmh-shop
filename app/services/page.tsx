export default function Services() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-black px-8 py-12">

      <h1 className="text-4xl font-bold mb-10">SERVICIOS</h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* MIX & MASTER */}
        <div className="border border-black/10 p-6 rounded-xl">

          <h2 className="text-2xl font-semibold">Mix & Master</h2>

          <p className="text-black/60 mt-2">
            Mezcla profesional lista para plataformas (Spotify, YouTube, etc).
          </p>

          <ul className="mt-4 text-sm text-black/70 space-y-1">
            <li>✔ Balance profesional</li>
            <li>✔ EQ + compresión + efectos</li>
            <li>✔ Master listo para streaming</li>
          </ul>

          <p className="mt-4 font-bold">$50 - $150</p>

        </div>

        {/* BEAT CUSTOM */}
        <div className="border border-black/10 p-6 rounded-xl">

          <h2 className="text-2xl font-semibold">Beat Personalizado</h2>

          <p className="text-black/60 mt-2">
            Beat hecho a medida según tu estilo artístico.
          </p>

          <ul className="mt-4 text-sm text-black/70 space-y-1">
            <li>✔ Exclusivo para ti</li>
            <li>✔ Revisiones incluidas</li>
            <li>✔ Uso comercial completo</li>
          </ul>

          <p className="mt-4 font-bold">Desde $80</p>

        </div>

      </div>

    </main>
  );
}