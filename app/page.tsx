"use client";

import { useRef, useState } from "react";



/* =========================
   BEAT PLAYER
========================= */

function BeatCard({
  title,
  file,
  bpm,
}: {
  title: string;
  file: string;
  bpm: string;
}) {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);



  const togglePlay = () => {

    if (!audioRef.current) return;


    if (playing) {

      audioRef.current.pause();
      setPlaying(false);

    } else {

      audioRef.current.play();
      setPlaying(true);

    }

  };



  const onTimeUpdate = () => {

    if (!audioRef.current) return;


    const percent =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;


    setProgress(percent || 0);

  };



  return (

    <div className="bg-white p-5 shadow-lg rounded-2xl hover:shadow-2xl transition">


      <img
        src="/covers/kmh.png"
        alt={title}
        className="h-44 w-full object-cover rounded-xl mb-4"
      />



      <p className="font-semibold text-lg">
        {title}
      </p>



      <p className="text-sm text-black/60 mb-4">
        {bpm}
      </p>



      <div className="flex items-center gap-3">


        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition"
        >

          {playing ? "❚❚" : "▶"}

        </button>



        <div className="flex-1 h-2 bg-black/10 rounded-full overflow-hidden">


          <div
            className="h-full bg-black transition-all"
            style={{
              width:`${progress}%`
            }}
          />

        </div>


      </div>




      <audio
        ref={audioRef}
        src={file}
        onTimeUpdate={onTimeUpdate}
        onEnded={() => setPlaying(false)}
      />


    </div>

  );

}





/* =========================
   PORTFOLIO CARD
========================= */


function PortfolioCard({
  title,
  subtitle,
  videoId,
  views,
}: {
  title:string;
  subtitle:string;
  videoId:string;
  views:string;
}) {


  const [playing,setPlaying] = useState(false);



  return (

    <div className="bg-white p-4 shadow-lg hover:scale-105 transition rounded-2xl">


      <div className="relative h-48 mb-3 bg-black rounded-xl overflow-hidden">


        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1`}
          allow="autoplay; fullscreen"
          allowFullScreen
        />



        {!playing && (

          <div className="absolute inset-0">


            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover"
            />



            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >


              <div className="w-14 h-14 rounded-full bg-black/80 text-white flex items-center justify-center hover:scale-110 transition">

                ▶

              </div>


            </button>



          </div>

        )}


      </div>





      <p className="font-semibold">
        {title}
      </p>


      <p className="text-sm text-black/60">
        {subtitle}
      </p>


      <p className="text-xs text-black/50 mt-1">
        {views} views
      </p>


    </div>

  );

}







export default function Home() {


return (

<main className="bg-[#f5f1e8] text-black">



<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-5 border-b border-black/10 bg-[#f5f1e8]/80 backdrop-blur">


<h1 className="text-lg font-bold tracking-widest">
KAMEEH
</h1>



<nav className="flex gap-3 text-sm">


<a href="/portfolio" className="px-4 py-2 bg-white/70 shadow-sm rounded-full hover:-translate-y-1 transition">
Portfolio
</a>


<a href="/beats" className="px-4 py-2 bg-white/70 shadow-sm rounded-full hover:-translate-y-1 transition">
Beats
</a>


<a href="/services" className="px-4 py-2 bg-white/70 shadow-sm rounded-full hover:-translate-y-1 transition">
Servicios
</a>


<a href="/contacto" className="px-4 py-2 bg-black text-white shadow-lg rounded-full hover:-translate-y-1 transition">
Contacto
</a>


</nav>


</header>



<section className="h-[90vh] flex items-center justify-center text-center relative mt-16 overflow-hidden">


<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:"url('/covers/kmh 2.png')"
}}
/>


<div className="absolute inset-0 bg-black/60"/>



<div className="relative z-10 px-6 max-w-3xl text-white">


<h2 className="text-4xl md:text-6xl font-bold leading-tight">
Transformando ideas en sonido
</h2>


<p className="mt-6 text-white/80 text-lg">
Mezcla, mastering y producción musical profesional.
Más de 100 proyectos realizados. Más de 600.000 reproducciones en plataformas digitales.
</p>



<div className="flex flex-col md:flex-row gap-4 justify-center mt-10">


<a href="/contacto"
className="px-6 py-3 bg-white text-black rounded-full font-medium shadow-xl hover:scale-105 transition">
Contáctame
</a>


<a href="/portfolio"
className="px-6 py-3 bg-black text-white rounded-full font-medium shadow-xl hover:scale-105 transition border border-white/20">
Portfolio
</a>


</div>


</div>


</section>



<section id="portfolio" className="py-24 px-8">


<h3 className="text-3xl font-bold mb-10 text-center">
Portfolio
</h3>



<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">


<PortfolioCard
title="Mi Cadenon"
subtitle="Beat"
videoId="39_v5OlmkPw"
views="+150K"
/>


<PortfolioCard
title="Reina de Pills"
subtitle="Mix & Master"
videoId="yUr6D1GPtHs"
views="+20K"
/>


<PortfolioCard
title="Eleven"
subtitle="Beat"
videoId="TmrS2Ivhn6I"
views="+55K"
/>


</div>



<div className="flex justify-center mt-10">

<a
href="/portfolio"
className="px-8 py-3 bg-black text-white rounded-full shadow-lg hover:scale-105 transition"
>
Ver más Portfolio
</a>

</div>


</section>



<section className="py-24 px-8 bg-[#f3ecdf]">


<h3 className="text-3xl font-bold mb-10 text-center">
Catálogo
</h3>



<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">


<BeatCard 
title="Rhodes"
bpm="95 BPM • RnB"
file="/beats/Rhodes 95.mp3"
/>


<BeatCard 
title="Juno"
bpm="130 BPM • Trap"
file="/beats/Juno 130Bpm.mp3"
/>


<BeatCard 
title="Slatt"
bpm="140 BPM • Trap"
file="/beats/Slatt 140.mp3"
/>



</div>




<div className="flex justify-center mt-10">

<a
href="/beats"
className="px-8 py-3 bg-black text-white rounded-full shadow-lg hover:scale-105 transition"
>
Ver más Beats
</a>

</div>



</section>








{/* =========================
   SERVICIOS
========================= */}



<section className="py-24 px-8">


<h3 className="text-3xl font-bold mb-10 text-center">
Servicios
</h3>




<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">





{/* MIX & MASTER */}


<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col">


<h4 className="text-2xl font-semibold">
Mix & Master
</h4>



<p className="text-black/60 mt-2">
Mezcla profesional lista para plataformas digitales.
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
href="https://wa.me/5493813527066"
target="_blank"
className="mt-auto mt-6 w-full flex justify-center items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:scale-105 transition"
>

💬

Contactar

</a>



</div>







{/* BEAT PERSONALIZADO */}



<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col">


<h4 className="text-2xl font-semibold">
Beat Personalizado
</h4>



<p className="text-black/60 mt-2">
Producción hecha a medida para potenciar tu sonido.
</p>



<ul className="mt-4 text-sm text-black/70 space-y-1">


<li>✔ Beat exclusivo</li>
<li>✔ Revisiones incluidas</li>
<li>✔ Uso comercial completo</li>


</ul>



<p className="mt-5 font-bold">
Desde $80
</p>



<a
href="https://wa.me/5493813527066"
target="_blank"
className="mt-auto mt-6 w-full flex justify-center items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:scale-105 transition"
>

💬

Contactar

</a>



</div>





</div>






<div className="flex justify-center mt-10">

<a
href="/services"
className="px-8 py-3 bg-black text-white rounded-full shadow-lg hover:scale-105 transition"
>
Ver más Servicios
</a>

</div>




</section>











{/* CONTACTO FINAL */}



<section className="py-24 px-8 bg-[#f3ecdf] text-center">


<h3 className="text-4xl font-bold">
¿Listo para trabajar tu sonido?
</h3>



<p className="mt-4 text-black/60 max-w-xl mx-auto">

Contame tu idea, tu proyecto o la referencia que tenés en mente.

</p>




<a
href="/contacto"
className="inline-block mt-8 px-10 py-4 bg-black text-white rounded-full shadow-xl hover:scale-105 transition"
>

Ir a contacto

</a>



</section>








{/* WHATSAPP */}



<a
href="https://wa.me/5493813527066"
target="_blank"
rel="noopener noreferrer"
className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition"
>

💬

</a>





</main>

);

}