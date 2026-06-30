export default function Services() {

  const whatsapp = "https://wa.me/5493813527066?text=Hola%20Kameeh,%20quiero%20consultar%20por%20un%20servicio";


  return (
    <main className="min-h-screen bg-[#f5f1e8] text-black">


      {/* NAVBAR */}

      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-5 border-b border-black/10 bg-[#f5f1e8]/80 backdrop-blur">


        <h1 className="text-lg font-bold tracking-widest">
          KAMEEH
        </h1>



        <nav className="flex gap-3 text-sm">


          <a
            href="/portfolio"
            className="px-4 py-2 bg-white/70 shadow-sm rounded-full hover:-translate-y-1 transition"
          >
            Portfolio
          </a>


          <a
            href="/beats"
            className="px-4 py-2 bg-white/70 shadow-sm rounded-full hover:-translate-y-1 transition"
          >
            Beats
          </a>


          <a
            href="/services"
            className="px-4 py-2 bg-black text-white rounded-full shadow-lg"
          >
            Servicios
          </a>


          <a
            href="/contacto"
            className="px-4 py-2 bg-white/70 shadow-sm rounded-full hover:-translate-y-1 transition"
          >
            Contacto
          </a>


        </nav>


      </header>




      {/* BACK HOME BUTTON */}

      <a
        href="/"
        className="fixed top-24 left-6 z-50 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        ←
      </a>





      <section className="pt-32 px-8 pb-20">


        <h1 className="text-4xl font-bold mb-10">
          SERVICIOS
        </h1>



        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">





          {/* MIX MASTER */}

          <div className="bg-white shadow-lg hover:shadow-xl transition p-6 rounded-2xl flex flex-col">


            <h2 className="text-2xl font-semibold">
              Mix & Master
            </h2>


            <p className="text-black/60 mt-2">
              Mezcla profesional lista para plataformas (Spotify, YouTube, etc).
            </p>



            <ul className="mt-4 text-sm text-black/70 space-y-1">

              <li>✔ Balance profesional</li>
              <li>✔ EQ + compresión + efectos</li>
              <li>✔ Master listo para streaming</li>

            </ul>



            <p className="mt-5 font-bold">
              $40 - $80
            </p>



            <a
              href={whatsapp}
              target="_blank"
              className="mt-auto w-full flex items-center justify-center gap-3 px-6 py-3 bg-green-500 text-white rounded-full font-medium shadow-lg hover:scale-105 transition"
            >

              <svg
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-white"
              >
                <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.45 1.65 6.32L3 29l6.85-1.78A12.9 12.9 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-2.05 0-3.96-.6-5.57-1.63l-.4-.25-4.06 1.05 1.08-3.95-.26-.42A10.5 10.5 0 015.5 16c0-5.8 4.7-10.5 10.5-10.5S26.5 10.2 26.5 16 21.8 26.5 16 26.5z"/>
              </svg>

              Contactar

            </a>



          </div>







          {/* BEAT CUSTOM */}

          <div className="bg-white shadow-lg hover:shadow-xl transition p-6 rounded-2xl flex flex-col">


            <h2 className="text-2xl font-semibold">
              Beat Personalizado
            </h2>



            <p className="text-black/60 mt-2">
              Beat hecho a medida para potenciar tu sonido.
            </p>




            <ul className="mt-4 text-sm text-black/70 space-y-1">

              <li>✔ Exclusivo para ti</li>
              <li>✔ Revisiones incluidas</li>
              <li>✔ Uso comercial completo</li>

            </ul>



            <p className="mt-5 font-bold">
              Desde $80
            </p>




            <a
              href={whatsapp}
              target="_blank"
              className="mt-auto w-full flex items-center justify-center gap-3 px-6 py-3 bg-green-500 text-white rounded-full font-medium shadow-lg hover:scale-105 transition"
            >

              <svg
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-white"
              >
                <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.45 1.65 6.32L3 29l6.85-1.78A12.9 12.9 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-2.05 0-3.96-.6-5.57-1.63l-.4-.25-4.06 1.05 1.08-3.95-.26-.42A10.5 10.5 0 015.5 16c0-5.8 4.7-10.5 10.5-10.5S26.5 10.2 26.5 16 21.8 26.5 16 26.5z"/>
              </svg>


              Contactar

            </a>



          </div>




        </div>



      </section>

  {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/5493813527066"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-9 h-9 fill-white"
        >
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.45 1.65 6.32L3 29l6.85-1.78A12.9 12.9 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5c-2.05 0-3.96-.6-5.57-1.63l-.4-.25-4.06 1.05 1.08-3.95-.26-.42A10.5 10.5 0 015.5 16c0-5.8 4.7-10.5 10.5-10.5S26.5 10.2 26.5 16 21.8 26.5 16 26.5zm5.76-7.85c-.32-.16-1.9-.94-2.2-1.04-.3-.1-.52-.16-.74.16-.22.32-.85 1.04-1.04 1.25-.19.22-.38.24-.7.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.88-1.76-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.22-.32.32-.54.1-.22.05-.4-.02-.57-.08-.16-.74-1.78-1.02-2.44-.27-.65-.55-.56-.74-.57h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.12-1.14 2.72s1.17 3.16 1.33 3.38c.16.22 2.3 3.5 5.58 4.9.78.34 1.39.54 1.86.7.78.25 1.5.21 2.06.13.63-.1 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.55-.08-.13-.3-.21-.62-.37z"/>
        </svg>
      </a>

    </main>
  );
}