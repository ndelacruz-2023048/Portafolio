import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import DesktopMenuOverlay from "./DesktopMenuOverlay";

const MenuOverlay = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  // Lista de enlaces para animación escalonada
  const menuItems = [
    { label: "Home", href: "/", className: "block" },
    { label: "Acerca", href: "/about", className: "block" },
    { label: "Portafolio", href: "/portfolio", className: "block" },
    { label: "Contacto", href: "/contact", className: "block" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300${isOpen ? ' opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none'}`}
    >
      {/* Fondo negro semi-transparente */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      ></div>
      <ul className={`sal-menu-list${isOpen ? ' open' : ''}`}
        style={{
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
          // El transform ahora se controla por CSS
        }}>
        {/* Botón de cerrar */}
        <div className="absolute top-8 right-8">
          <button onClick={onClose} className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <Icon icon="mdi:close" className="w-6 h-6 text-white" />
          </button>
        </div>
        {/* Enlaces de navegación con animación */}
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.href;
          const activeClass = isActive 
            ? "text-black border-b-2 border-black pb-2" 
            : "text-gray-500 hover:text-black transition duration-300";
          
          return (
            <li
              key={item.label}
              className={`mb-12 sal-menu-item${isOpen ? ' show' : ''}`}
              style={{
                transitionDelay: `${idx * 0.08 + 0.1}s`,
              }}
            >
              <Link 
                to={item.href} 
                className={`text-6xl font-bold ${item.className} ${activeClass}`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .sal-menu-list {
          align-items: center;
          bottom: 0;
          display: flex;
          flex-flow: column nowrap;
          height: 100vh;
          justify-content: center;
          left: auto;
          list-style-type: none;
          min-width: 438px;
          padding: 0;
          position: fixed;
          right: 0;
          top: 0;
          transform: translateX(200%);
          transition: transform .5s cubic-bezier(.19,1,.22,1);
          width: auto;
          will-change: transform;
          z-index: 2;
        }
        .sal-menu-list.open {
          transform: translateX(0);
        }
        .sal-menu-item {
          color: #000;
          font-weight: 500;
          text-decoration: none;
          margin: 30px 0;
          transform: translateX(-100%);
          opacity: 0;
          transition: color .15s, transform .5s, opacity .5s;
          transition-timing-function: cubic-bezier(.19,1,.22,1);
        }
        .sal-menu-list.open .sal-menu-item.show {
          transform: translateX(0);
          opacity: 1;
        }
        .sal-menu-list::before {
          background: #fff;
          bottom: 0;
          content: "";
          left: 0;
          position: absolute;
          top: 0;
          transform: skewX(15deg) translateX(50%);
          transform-origin: bottom left;
          transition: transform .5s cubic-bezier(.19,1,.22,1), width .5s cubic-bezier(.19,1,.22,1);
          width: 25em;
          will-change: transform;
          z-index: -1;
        }
        .sal-menu-list.open::before {
          transform: skewX(15deg) translateX(0);
          width: 25em;
        }
        @media (max-width: 1199px) {
          .sal-menu-list.open::before {
            transform: skewX(-27deg) translateX(-40%);
            width: 54rem;
          }
        }
        @media (max-width: 1440px) {
          .sal-menu-list.open::before {
            transform: skewX(-32deg) translateX(-47%);
            width: 52rem;
          }
        }
        @media (max-width: 1500px) {
          .sal-menu-list.open::before {
            transform: skewX(-27deg) translateX(-37%);
            width: 47rem;
          }
        }
        .sal-menu-list.open::before {
          transform: skewX(-30deg) translateX(-42%);
          width: 64rem;
        }
      `}</style>
    </div>
  );
};

const SocialSidebar = ({ onMenuClick }) => {
  return (
    <div className="w-[10%] hidden lg:flex flex-col border-l-2 border-black bg-white">
      {/* Sección superior - coincide exactamente con header */}
      <div className="flex items-center justify-center h-24 border-b-2 border-black">
        <button onClick={onMenuClick} className="w-8 h-8 flex items-center justify-center">
          <Icon icon="mdi:menu" className="w-8 h-8 text-black" />
        </button>
      </div>
      
      {/* Sección central - coincide con children */}
      <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <div onClick={()=> window.open("https://github.com/nerydelacruz")} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
          <Icon icon="mdi:github" className="w-6 h-6 text-black" />
        </div>
        <div onClick={()=>window.open("https://www.facebook.com/neryjavier.delacruzhuinil")} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
          <Icon icon="mdi:facebook" className="w-6 h-6 text-black" />
        </div>
        <div onClick={()=>window.open("https://www.instagram.com/nerydelacruzh/")} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
          <Icon icon="mdi:instagram" className="w-6 h-6 text-black" />
        </div>
        <div onClick={()=>window.open("https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BInuFtxXlRbuu7NPXXdRvhQ%3D%3D")} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
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
  const [isMovilMenuOpen, setIsMovilMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMovilMenuClose = ()=>{
    setIsMovilMenuOpen(false);
  }

  const handleMovilMenuOpen = () => {
    setIsMovilMenuOpen(true);
  }

  return (
    <div className="lg:w-[60%] w-full flex bg-white border-l border-black">
      {/* Contenido principal (90%) */}
      <div className=" lg:w-[90%] w-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-10 py-8 border-b-2 border-black h-24">
          <div className="text-4xl font-extrabold tracking-widest">Nery</div>
          <button onClick={handleMovilMenuOpen} className="w-8 h-8 lg:hidden flex items-center justify-center">
            <Icon icon="mdi:menu" className="w-8 h-8 text-black" />
          </button>
        </div>
        
        {/* Contenido dinámico */}
        <div className="flex-1 flex flex-col justify-start items-start px-10 scroll-invisible">
          {children}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between px-10 py-4 border-t border-black text-xs bg-white h-16">
          <span>Copyright © 2025 Nery ♥ @nerydelacruzh</span>
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

      {/* Imagen de perfil en overlay */}
      <DesktopMenuOverlay isOpen={isMovilMenuOpen} onClose={handleMovilMenuClose}/>
    </div>
  );
};

export default MainContent; 