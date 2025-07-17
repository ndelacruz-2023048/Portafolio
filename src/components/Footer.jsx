import React from "react";

const Footer = () => (
  <footer className="w-full bg-blue-700 text-white py-8 mt-12">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 font-bold text-lg">Salva &copy; {new Date().getFullYear()}</div>
      <div className="flex gap-6 mb-4 md:mb-0">
        <a href="#servicios" className="hover:underline">Servicios</a>
        <a href="#about" className="hover:underline">Sobre Nosotros</a>
        <a href="#contacto" className="hover:underline">Contacto</a>
      </div>
      <div>
        <span className="mr-2">📧</span>
        <a href="mailto:info@salva.com" className="hover:underline">info@salva.com</a>
      </div>
    </div>
  </footer>
);

export default Footer; 