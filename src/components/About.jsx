import React from "react";

const About = () => (
  <div className="w-full min-h-screen bg-white flex flex-col gap-16 py-16 px-4">
    {/* Sección 1: Introducción */}
    <section className="max-w-4xl mx-auto w-full">
      <h1 className="text-5xl font-extrabold text-black mb-2">About</h1>
      <div className="h-1 w-32 bg-black mb-8" />
      <p className="text-lg text-gray-500 mb-4">
        I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast.
      </p>
    </section>

    {/* Sección 2: Información personal */}
    <section className="max-w-5xl mx-auto w-full">
      <div className="flex items-center mb-8">
        <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">PERSONAL INFORMATIONS</h2>
        <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
        <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 text-lg">
        <div>
          <p className="mb-2"><span className="font-semibold">First Name:</span> Sergio</p>
          <p className="mb-2"><span className="font-semibold">Last Name:</span> Marquina</p>
          <p className="mb-2"><span className="font-semibold">Address:</span> 121 Victoria St. London</p>
          <p className="mb-2"><span className="font-semibold">Age:</span> 26 Years</p>
        </div>
        <div>
          <p className="mb-2"><span className="font-semibold">Study:</span> Univercity of Oxford</p>
          <p className="mb-2"><span className="font-semibold">Degree:</span> Master of Science</p>
          <p className="mb-2"><span className="font-semibold">E-Mail:</span> hello@salva.com</p>
          <p className="mb-2"><span className="font-semibold">Phone:</span> +20 234 567 8899</p>
        </div>
      </div>
    </section>

    {/* Sección 3: Skills y Frameworks */}
    <section className="max-w-5xl mx-auto w-full mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna izquierda: Programming */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Programming</h2>
            <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
            <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
          </div>
          {/* Barras de progreso */}
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>WordPress</span><span>20%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-blue-600 rounded" style={{width: '20%'}}></div></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>HTML & CSS</span><span>80%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-red-500 rounded" style={{width: '80%'}}></div></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>JavaScript</span><span>60%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-yellow-400 rounded" style={{width: '60%'}}></div></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>Java</span><span>40%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-green-500 rounded" style={{width: '40%'}}></div></div>
          </div>
        </div>
        {/* Columna derecha: Frameworks, Librerías, Plugins */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Frameworks, Librerías, Plugins</h2>
            <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
            <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
          </div>
          <div className="flex gap-8 justify-center md:justify-start">
            {/* React */}
            <div className="flex flex-col items-center">
              <svg width="90" height="90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="#2563eb" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="50.24" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#222">80%</text>
              </svg>
              <span className="mt-2 font-medium">React</span>
            </div>
            {/* Elementor */}
            <div className="flex flex-col items-center">
              <svg width="90" height="90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="#ef4444" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="100.48" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#222">60%</text>
              </svg>
              <span className="mt-2 font-medium">Elementor</span>
            </div>
            {/* Tailwind CSS */}
            <div className="flex flex-col items-center">
              <svg width="90" height="90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="#22d3ee" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="125.6" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#222">50%</text>
              </svg>
              <span className="mt-2 font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Aquí puedes agregar más secciones en el futuro */}
  </div>
);

export default About; 