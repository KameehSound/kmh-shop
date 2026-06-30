export default function Contacto() {

  const whatsapp =
    "https://wa.me/5493813527066?text=Hola%20Kameeh,%20quiero%20trabajar%20en%20un%20proyecto";


  const instagram =
    "https://instagram.com/kameeh_";


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
            className="px-4 py-2 bg-white/70 shadow-sm rounded-full hover:-translate-y-1 transition"
          >
            Servicios
          </a>


          <a
            href="/contacto"
            className="px-4 py-2 bg-black text-white rounded-full shadow-lg"
          >
            Contacto
          </a>


        </nav>


      </header>





      {/* VOLVER HOME */}

      <a
        href="/"
        className="fixed top-24 left-6 z-50 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        ←
      </a>







      <section className="pt-32 px-8 pb-20">


        <div className="grid lg:grid-cols-5 gap-10 max-w-7xl mx-auto">






          {/* FORMULARIO */}


          <div className="lg:col-span-3">


            <h1 className="text-4xl font-bold mb-6">
              Contacto
            </h1>



            <p className="text-black/60 mb-10 max-w-xl">

              ¿Querés trabajar conmigo?
              Mandame tu idea, tu proyecto o tu referencia y te respondo lo antes posible.

            </p>






            {/* BOTONES */}

            <div className="flex flex-col md:flex-row gap-4 mb-10">



              {/* WHATSAPP */}

              <a
                href={whatsapp}
                target="_blank"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:scale-105 transition"
              >


                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6 fill-white"
                >

                  <path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8A13 13 0 0016 29c7.2 0 13-5.8 13-13S23.2 3 16 3z"/>

                </svg>


                WhatsApp


              </a>







              {/* INSTAGRAM */}

              <a
                href={instagram}
                target="_blank"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-full shadow-lg hover:scale-105 transition"
              >


                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white"
                >

                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1012 16.5 4.5 4.5 0 0012 7.5zm0 7.5a3 3 0 110-6 3 3 0 010 6z"/>

                </svg>



                Instagram


              </a>



            </div>







            {/* FORM */}

            <div className="max-w-xl space-y-4">


              <input
                className="w-full p-4 border border-black/20 rounded-xl bg-white"
                placeholder="Tu nombre"
              />



              <input
                className="w-full p-4 border border-black/20 rounded-xl bg-white"
                placeholder="Tu email"
              />



              <textarea
                className="w-full p-4 border border-black/20 rounded-xl h-40 bg-white"
                placeholder="Tu mensaje / proyecto"
              />



              <button
                className="w-full px-6 py-4 bg-black text-white rounded-full shadow-lg hover:scale-105 transition"
              >

                Enviar mensaje

              </button>



            </div>



          </div>









          {/* HERO IMAGEN */}

          <div className="lg:col-span-2">


            <div
              className="h-full min-h-[650px] rounded-3xl overflow-hidden shadow-xl bg-cover bg-center"
              style={{
                backgroundImage:
                "url('/covers/kmh.png')"
              }}
            >


              <div className="h-full bg-black/40 flex items-end p-10">


                <h2 className="text-white text-5xl font-bold leading-tight">

                  Tu sonido.
                  <br/>
                  Mi producción.

                </h2>


              </div>


            </div>


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