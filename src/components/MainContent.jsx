import React from "react";

const SocialSidebar = () => (
  <div className="flex-[0.1] flex flex-col border-l-2 border-black bg-white">
    {/* Sección superior - coincide exactamente con header */}
    <div className="flex items-center justify-center h-24 border-b-2 border-black">
      {/* Misma altura que el header principal */}
    </div>
    
    {/* Sección central - coincide con children */}
    <div className="flex-1 flex flex-col justify-center items-center gap-4">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      
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

const MainContent = ({ children }) => (
  <div className="flex-1 flex bg-white border-l border-black">
    {/* Contenido principal (90%) */}
    <div className="flex-[0.9] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-10 py-8 border-b-2 border-black h-24">
        <div className="text-4xl font-extrabold tracking-widest">SALVA</div>
        <button className="w-12 h-12 flex flex-col justify-center items-center gap-1">
          <span className="block w-8 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
        </button>
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
    <SocialSidebar />
  </div>
);

export default MainContent; 