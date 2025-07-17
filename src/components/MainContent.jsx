import React, { useState } from "react";
import { Icon } from "@iconify/react";

const MenuOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Fondo negro semi-transparente */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <ul className="sal-menu-list" style={{
        transform: 'translateX(0)',
        position: 'fixed',
        right: 0,
        top: 0,
        height: '100vh',
        width: 'auto',
        minWidth: '438px',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        listStyleType: 'none',
        padding: 0,
        zIndex: 2,
        willChange: 'transform',
        transition: 'transform .5s cubic-bezier(.19,1,.22,1)'
      }}>
        {/* Botón de cerrar */}
        <div className="absolute top-8 right-8">
          <button onClick={onClose} className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <Icon icon="mdi:close" className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Enlaces de navegación */}
        <li className="mb-8">
          <a href="/" className="text-4xl font-bold text-black border-b-2 border-black pb-2 block">Home</a>
        </li>
        <li className="mb-8">
          <a href="/about" className="text-4xl font-bold text-gray-500 block hover:text-black transition duration-300">About</a>
        </li>
        <li className="mb-8">
          <a href="/portfolio" className="text-4xl font-bold text-gray-500 block hover:text-black transition duration-300">Portfolio</a>
        </li>
        <li className="mb-8">
          <a href="/news" className="text-4xl font-bold text-gray-500 block hover:text-black transition duration-300">News</a>
        </li>
        <li className="mb-8">
          <a href="/contact" className="text-4xl font-bold text-gray-500 block hover:text-black transition duration-300">Contact</a>
        </li>
      </ul>
      
      <style jsx>{`
        .sal-menu-list::before {
          background: #fff;
          bottom: 0;
          content: "";
          left: 0;
          position: absolute;
          top: 0;
          transform: skewX(15deg) translateX(0);
          transform-origin: bottom left;
          transition: transform .5s cubic-bezier(.19,1,.22,1);
          width: 25em;
          will-change: transform;
          z-index: -1;
        }
        
        @media (max-width: 1070px) {
          .sal-menu-list::before {
            transform: skewX(-23deg) translateX(-40%);
          }
        }
        
        @media (max-width: 1199px) {
          .sal-menu-list::before {
            transform: skewX(-27deg) translateX(-40%);
            width: 54rem;
          }
        }
        
        @media (max-width: 1440px) {
          .sal-menu-list::before {
            transform: skewX(-32deg) translateX(-47%);
            width: 52rem;
          }
        }
        
        @media (max-width: 1500px) {
          .sal-menu-list::before {
            transform: skewX(-27deg) translateX(-37%);
            width: 47rem;
          }
        }
        
        .sal-menu-list::before {
          transform: skewX(-30deg) translateX(-42%);
          width: 64rem;
        }
      `}</style>
    </div>
  );
};

const SocialSidebar = ({ onMenuClick }) => {
  return (
    <div className="flex-[0.1] flex flex-col border-l-2 border-black bg-white">
      {/* Sección superior - coincide exactamente con header */}
      <div className="flex items-center justify-center h-24 border-b-2 border-black">
        <button onClick={onMenuClick} className="w-8 h-8 flex items-center justify-center">
          <Icon icon="mdi:menu" className="w-8 h-8 text-black" />
        </button>
      </div>
      
      {/* Sección central - coincide con children */}
      <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
          <Icon icon="mdi:facebook" className="w-6 h-6 text-black" />
        </div>
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
          <Icon icon="mdi:twitter" className="w-6 h-6 text-black" />
        </div>
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
          <Icon icon="mdi:instagram" className="w-6 h-6 text-black" />
        </div>
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
          <Icon icon="mdi:linkedin" className="w-6 h-6 text-black" />
        </div>
        
        {/* Línea vertical y texto FOLLOW ME */}
        <div className="flex flex-col items-center mt-4">
          <div className="w-0.5 h-12 bg-gray-300 mb-4"></div>
          <span className="text-xs text-black rotate-90 tracking-widest font-medium">FOLLOW ME</span>
        </div>
      </div>
      
      {/* Sección inferior - coincide exactamente con footer */}
      <div className="flex items-center justify-center h-16 border-t border-black">
        {/* Misma altura que el footer principal */}
      </div>
    </div>
  );
};

const MainContent = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex-1 flex bg-white border-l border-black">
      {/* Contenido principal (90%) */}
      <div className="flex-[0.9] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-10 py-8 border-b-2 border-black h-24">
          <div className="text-4xl font-extrabold tracking-widest">SALVA</div>
        </div>
        
        {/* Contenido dinámico */}
        <div className="flex-1 flex flex-col justify-center items-start px-10">
          {children}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between px-10 py-4 border-t border-black text-xs bg-white h-16">
          <span>Copyright © 2024 Salva ♥ the_krishna</span>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full text-black border-black hover:bg-gray-100 transition focus:outline-none">
            <span>Weekend Mode</span>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </button>
        </div>
      </div>
      
      {/* Sidebar (10%) */}
      <SocialSidebar onMenuClick={handleMenuClick} />
      
      {/* Menú overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </div>
  );
};

export default MainContent; 