import React from "react";

const HomePage = () => (
  <>
    <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-2">Sergio Marquina</h1>
    <div className="h-1 w-32 bg-gray-300 mb-6" />
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
  </>
);

export default HomePage; 