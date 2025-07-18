import React, { useEffect, useState } from "react";

const TITLE = "Sergio Marquina";

const HomePage = () => {
  const [visibleLetters, setVisibleLetters] = useState(Array(TITLE.length).fill(false));

  useEffect(() => {
    let timeouts = [];
    let loopActive = true;

    function animate() {
      setVisibleLetters(Array(TITLE.length).fill(false));
      TITLE.split("").forEach((_, i) => {
        timeouts.push(setTimeout(() => {
          setVisibleLetters(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 120));
      });
      // Cuando termina la animación de entrada, opacar todo y reiniciar
      timeouts.push(setTimeout(() => {
        setVisibleLetters(Array(TITLE.length).fill(false));
        if (loopActive) {
          timeouts.push(setTimeout(animate, 500)); // Espera antes de reiniciar
        }
      }, TITLE.length * 120 + 1800)); // 1800ms de espera tras la última letra
    }
    animate();
    return () => {
      loopActive = false;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-start text-left px-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-black transition-opacity duration-1000 flex flex-wrap">
        {TITLE.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              transition: 'opacity 0.4s',
              opacity: visibleLetters[i] ? 1 : 0,
            }}
          >
            {char === " " ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      <div className="h-1 w-32 bg-black mt-6 mb-6" />
      <p className="text-lg text-black mb-10 max-w-xl">
        Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.
      </p>
      <div className="flex gap-6 mb-12">
        <button className="px-8 py-4 bg-black text-white font-bold text-lg hover:bg-gray-900 transition shadow focus:outline-none">GET IN TOUCH</button>
        <button className="px-8 py-4 border-2 border-black text-black font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2 focus:outline-none">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
          DOWNLOAD CV
        </button>
      </div>
    </div>
  );
};

export default HomePage; 