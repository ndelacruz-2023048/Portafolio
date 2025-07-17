import React from "react";

const SocialSidebar = () => (
  <div className="relative h-full w-8 flex flex-col z-20 border-l-2 border-black bg-white">
    {/* Íconos de redes sociales centrados */}
    <div className="flex-1 flex flex-col justify-center items-center gap-4">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
    </div>
    
    {/* Línea vertical y texto FOLLOW ME en la parte inferior */}
    <div className="flex flex-col items-center pb-8">
      <div className="w-0.5 h-12 bg-gray-300 mb-4"></div>
      <span className="text-xs text-black rotate-90 tracking-widest font-medium">FOLLOW ME</span>
    </div>
  </div>
);

export default SocialSidebar; 