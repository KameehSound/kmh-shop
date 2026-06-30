export default function Contacto() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-black px-8 py-16">

      <h1 className="text-4xl font-bold mb-6">Contacto</h1>

      <p className="text-black/60 mb-10 max-w-xl">
        ¿Querés trabajar conmigo? Mandame tu idea, tu proyecto o tu referencia y te respondo lo antes posible.
      </p>

      <div className="max-w-xl space-y-4">

        <input
          className="w-full p-4 border border-black/20 rounded-xl"
          placeholder="Tu nombre"
        />

        <input
          className="w-full p-4 border border-black/20 rounded-xl"
          placeholder="Tu email"
        />

        <textarea
          className="w-full p-4 border border-black/20 rounded-xl h-40"
          placeholder="Tu mensaje / proyecto"
        />

        <button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:scale-105 transition">
          Enviar mensaje
        </button>

      </div>

    </main>
  );
}