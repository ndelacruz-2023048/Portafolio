import React from "react";

const Hero = () => (
  <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-20">
    <div className="max-w-4xl mx-auto text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-6">Bienvenido a Salva</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-8">Tu solución confiable para servicios profesionales y atención personalizada.</p>
      <a href="#servicios" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition">Ver Servicios</a>
    </div>
  </section>
);

export default Hero; 