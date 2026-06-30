"use client";

import { useRef, useState } from "react";

export default function Beats() {
  const beats = [
    { title: "Aura", bpm: 121, type: "Trap", price: 24, file: "/beats/aura 121.mp3", cover: "/covers/kmh.png" },
    { title: "Drake State Mind", bpm: 141, type: "Trap", price: 24, file: "/beats/Drake 141.mp3", cover: "/covers/kmh.png" },
    { title: "Juno", bpm: 130, type: "Drill", price: 24, file: "/beats/Juno 130Bpm.mp3", cover: "/covers/kmh.png" },
    { title: "London", bpm: 114, type: "Emotional", price: 24, file: "/beats/london 114.mp3", cover: "/covers/kmh.png" },
    { title: "Marte", bpm: 140, type: "Trap", price: 24, file: "/beats/Marte 140.mp3", cover: "/covers/kmh.png" },
    { title: "Nico", bpm: 126, type: "R&B", price: 24, file: "/beats/Nico 126.mp3", cover: "/covers/kmh.png" },
    { title: "Oscure", bpm: 114, type: "Drill", price: 24, file: "/beats/oscure 114.mp3", cover: "/covers/kmh.png" },
    { title: "Rhodes", bpm: 95, type: "RnB", price: 24, file: "/beats/Rhodes 95.mp3", cover: "/covers/kmh.png" },
    { title: "San Martin", bpm: 206, type: "Emotional", price: 24, file: "/beats/san martin 206.mp3", cover: "/covers/kmh.png" },
    { title: "Slatt", bpm: 140, type: "Exclusive", price: 24, file: "/beats/Slatt 140.mp3", cover: "/covers/kmh.png" },
  ];

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [playing, setPlaying] = useState<number | null>(null);
  const [progress, setProgress] = useState<number[]>(beats.map(() => 0));
  const [duration, setDuration] = useState<number[]>(beats.map(() => 0));
  const [volume, setVolume] = useState<number[]>(beats.map(() => 0.8));
  const [buyIndex, setBuyIndex] = useState<number | null>(null);

  const formatTime = (t: number) => {
    if (!t) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const togglePlay = (i: number) => {
    const audio = audioRefs.current[i];
    if (!audio) return;

    if (playing === i) {
      audio.pause();
      setPlaying(null);
    } else {
      audioRefs.current.forEach((a, idx) => {
        if (a && idx !== i) a.pause();
      });

      audio.volume = volume[i];
      audio.play();
      setPlaying(i);
    }
  };

  const update = (i: number) => {
    const audio = audioRefs.current[i];
    if (!audio) return;

    const p = [...progress];
    const d = [...duration];

    p[i] = audio.currentTime;
    d[i] = audio.duration;

    setProgress(p);
    setDuration(d);
  };

  const seek = (i: number, percent: number) => {
    const audio = audioRefs.current[i];
    if (!audio) return;

    const time = (percent / 100) * (audio.duration || 0);
    audio.currentTime = time;

    const p = [...progress];
    p[i] = time;
    setProgress(p);
  };

  const changeVolume = (i: number, value: number) => {
    const audio = audioRefs.current[i];
    if (!audio) return;

    audio.volume = value;

    const v = [...volume];
    v[i] = value;
    setVolume(v);
  };

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-black">

      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-5 border-b border-black/10 bg-[#f5f1e8]/80 backdrop-blur">
        <h1 className="text-lg font-bold tracking-widest">KAMEEH</h1>

        <nav className="flex gap-3 text-sm">
          <a href="/portfolio" className="px-4 py-2 bg-white/70 shadow-sm rounded-full">Portfolio</a>
          <a href="/beats" className="px-4 py-2 bg-white/70 shadow-sm rounded-full">Beats</a>
          <a href="/services" className="px-4 py-2 bg-white/70 shadow-sm rounded-full">Servicios</a>
          <a href="/contacto" className="px-4 py-2 bg-black text-white shadow-lg rounded-full">Contacto</a>
        </nav>
      </header>

      {/* BACK */}
      <button
        onClick={() => history.back()}
        className="fixed top-24 left-6 z-40 bg-black text-white px-4 py-2 rounded-full shadow-lg
                   hover:scale-105 active:scale-95 transition"
      >
        ← Back
      </button>

      {/* HEADER */}
      <div className="text-center mb-10 mt-28">
        <h1 className="text-4xl font-bold">Catalogo de Beats</h1>
        <p className="text-black/60">Escuchá, navegá y comprá tus beats</p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        {beats.map((b, i) => (
          <div key={i} className="bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border">

            <img src={b.cover} className="h-40 w-full object-cover" />

            <div className="p-5">

              <h2 className="text-lg font-semibold">{b.title}</h2>
              <p className="text-sm text-black/60">{b.type} • {b.bpm} BPM</p>

              <audio
                ref={(el) => {
                  audioRefs.current[i] = el;
                }}
                src={b.file}
                onTimeUpdate={() => update(i)}
                onLoadedMetadata={() => update(i)}
              />

              {/* BUTTONS */}
              <div className="flex gap-2 mt-4">

                <button
                  onClick={() => togglePlay(i)}
                  className="bg-black text-white px-4 py-2 rounded-full shadow-md
                             hover:-translate-y-0.5 hover:shadow-xl
                             active:translate-y-0 active:shadow-sm
                             transition"
                >
                  {playing === i ? "Pause" : "Play"}
                </button>

                <button
                  onClick={() => setBuyIndex(i)}
                  className="bg-black text-white px-4 py-2 rounded-full shadow-md
                             hover:-translate-y-0.5 hover:shadow-xl
                             active:translate-y-0 active:shadow-sm
                             transition"
                >
                  Buy ${b.price}
                </button>
              </div>

              {/* SEEK BAR */}
              <div
                className="mt-4 h-2 w-full bg-black/10 rounded-full cursor-pointer overflow-hidden"
                onClick={(e) => {
                  const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                  const percent = ((e.clientX - rect.left) / rect.width) * 100;
                  seek(i, percent);
                }}
              >
                <div
                  className="h-full bg-black"
                  style={{
                    width: `${(progress[i] / (duration[i] || 1)) * 100}%`,
                  }}
                />
              </div>

              {/* TIME */}
              <div className="flex justify-between text-xs text-black/60 mt-2">
                <span>{formatTime(progress[i] || 0)}</span>
                <span>{formatTime(duration[i] || 0)}</span>
              </div>

              {/* VOLUME */}
              <div className="mt-3">
                <div className="flex justify-between text-[10px] text-black/50 mb-1">
                  <span>Vol</span>
                  <span>{Math.round(volume[i] * 100)}%</span>
                </div>

                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume[i]}
                  onChange={(e) => changeVolume(i, Number(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                />
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* BUY MODAL */}
      {buyIndex !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-xl w-80 text-center">

            <h2 className="text-xl font-bold mb-4">Choose payment</h2>

            <a
              href="https://link.mercadopago.com.ar/kameehsound"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-yellow-400 py-2 rounded-full mb-3 hover:scale-105 transition"
            >
              Mercado Pago
            </a>

            <a
              href="https://paypal.me/kameeh"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-500 text-white py-2 rounded-full hover:scale-105 transition"
            >
              PayPal
            </a>

            <button
              onClick={() => setBuyIndex(null)}
              className="mt-4 text-sm text-black/60"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

    </main>
  );
}