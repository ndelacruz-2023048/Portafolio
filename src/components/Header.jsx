import React from "react";

const Header = () => (
  <header className="w-full bg-white shadow-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">Salva</div>
      {/* Navigation */}
      <nav className="hidden md:flex gap-8">
        <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
        <a href="#about" className="text-gray-700 hover:text-blue-600 transition">Sobre Nosotros</a>
        <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
      </nav>
      {/* Botón */}
      <a href="#contacto" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition hidden md:inline-block">Contáctanos</a>
      {/* Menú móvil (placeholder) */}
      <button className="md:hidden text-blue-600 focus:outline-none">
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </header>
);

export default Header; 