import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const DesktopMenuOverlay = ({ isOpen, onClose }) => {
  return (
    <div
      className={`salv-menu-design-two${isOpen ? ' open' : ''}`}
      style={{
        background: '#fff',
        height: '100vh',
        left: 'auto',
        maxWidth: '400px',
        overflow: 'hidden',
        position: 'fixed',
        right: isOpen ? 0 : '-100%',
        top: 0,
        transition: 'all .6s ease-in-out',
        width: '100%',
        zIndex: 50,
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
      }}
    >
      {/* Botón de cerrar */}
      <button onClick={onClose} style={{position: 'absolute', top: 32, right: 32}} className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
        <Icon icon="mdi:close" className="w-6 h-6 text-white" />
      </button>
      <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', minHeight: '70vh'}}>
        <img src="https://res.cloudinary.com/dtmwybty7/image/upload/v1752900108/Blanco_y_negro_mdkxug.png" alt="profile" className="w-40 h-40 rounded-xl object-cover mb-2" />
        <div className="flex gap-6 mb-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:facebook" className="w-6 h-6 text-black" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:twitter" className="w-6 h-6 text-black" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:instagram" className="w-6 h-6 text-black" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:linkedin" className="w-6 h-6 text-black" /></a>
        </div>
        <nav className="flex flex-col items-center gap-4">
          <Link to="/" className="text-3xl font-bold text-black">Home</Link>
          <Link to="/about" className="text-3xl font-bold text-gray-400">About</Link>
          <Link to="/portfolio" className="text-3xl font-bold text-gray-400">Portfolio</Link>
          <Link to="/news" className="text-3xl font-bold text-gray-400">News</Link>
          <Link to="/contact" className="text-3xl font-bold text-gray-400">Contact</Link>
        </nav>
      </div>
      <style>{`
        @media (max-width: 991px) {
          .salv-menu-design-two {
            display: block !important;
            right: ${isOpen ? '0' : '-100%'} !important;
          }
        }
        @media (max-width: 640px) {
          .salv-menu-design-two {
            font-size: 26px;
            font-weight: 600;
            line-height: 34px;
            max-width: 100%;
            text-transform: capitalize;
          }
        }
        .salv-menu-design-two {
          display: none;
          overflow: hidden !important;
        }
        .salv-menu-design-two {
          background: #fff;
          height: 100%;
          left: auto;
          max-width: 400px;
          overflow: hidden !important;
          padding: 75px 0 50px;
          position: fixed;
          right: -100%;
          top: 0;
          transition: all .6s ease-in-out;
          width: 100%;
          z-index: 1;
        }
        *, :after, :before {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default DesktopMenuOverlay;
