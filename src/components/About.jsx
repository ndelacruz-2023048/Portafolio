import React from "react";
import { Icon } from "@iconify/react";

const About = () => (
  <div className="w-full min-h-screen bg-white flex flex-col gap-16 py-16 px-10">
    {/* Sección 1: Introducción */}
    <section className="mx-auto w-full">
      <h1 className="text-5xl font-extrabold text-black mb-2">Acerca de</h1>
      <div className="h-1 w-32 bg-black mb-8" />
      <p className="text-lg text-gray-500 mb-4">
        Soy un desarrollador web freelance de Guatemala, especializado en crear experiencias digitales únicas y funcionales. Actualmente trabajo en aplicaciones web full stack con React y Express, desarrollando soluciones tecnológicamente avanzadas, responsivas y multi-funcionales. Mi pasión es convertir ideas en productos digitales significativos que no solo se vean bien, sino que también funcionen perfectamente. Con experiencia en desarrollo web, aplicaciones móviles y animaciones 2D.
      </p>
    </section>

    {/* Sección 2: Información personal */}
    <section className="max-w-5xl mx-auto w-full">
      <div className="flex items-center mb-8">
        <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Información personal</h2>
        <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
        <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 text-lg">
        <div>
          <p className="mb-2"><span className="font-semibold">Nombres:</span> Nery Javier</p>
          <p className="mb-2"><span className="font-semibold">Apellidos:</span> de la Cruz Huinil</p>
          <p className="mb-2"><span className="font-semibold">Address:</span> San Lucas Sac.</p>
          <p className="mb-2"><span className="font-semibold">Edad:</span> 18 años</p>
        </div>
        <div>
          <p className="mb-2"><span className="font-semibold">Estudios:</span> Centro Educativo Técnico Laboral Kinal</p>
          <p className="mb-2"><span className="font-semibold">Titulo:</span> Perito en Computación</p>
          <p className="mb-2"><span className="font-semibold">Correo:</span> nerydelacruzh@gmail.com</p>
          <p className="mb-2"><span className="font-semibold">Telefono:</span> +502 35904919</p>
        </div>
      </div>
    </section>

    {/* Sección 3: Skills y Frameworks */}
    <section className="max-w-5xl mx-auto w-full mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna izquierda: Programming */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Programación</h2>
            <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
            <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
          </div>
          {/* Barras de progreso */}
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>React</span><span>85%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-blue-600 rounded" style={{width: '85%'}}></div></div>
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
            <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Frameworks - Librerías - Plugins</h2>
            <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
            <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
          </div>
          <div className="flex gap-8 justify-center md:justify-start">
            {/* React */}
            <div className="flex flex-col items-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="52" stroke="#2563eb" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="65.344" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">80%</text>
              </svg>
              <span className="mt-2 font-medium">React</span>
            </div>
            {/* Express */}
            <div className="flex flex-col items-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="52" stroke="#22c55e" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="130.688" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">75%</text>
              </svg>
              <span className="mt-2 font-medium">Express</span>
            </div>
            {/* Tailwind CSS */}
            <div className="flex flex-col items-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="52" stroke="#22d3ee" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="283.36" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">20%</text>
              </svg>
              <span className="mt-2 font-medium">React Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Sección extra: Gráficas de Base de Datos y Otros */}
    <section className="max-w-6xl mx-auto w-full mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna izquierda: Base de Datos */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Base de Datos</h2>
            <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
            <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
          </div>
          {/* Barras de progreso */}
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>PostgreSQL</span><span>45%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-blue-800 rounded" style={{width: '45%'}}></div></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>MySQL</span><span>50%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-yellow-700 rounded" style={{width: '50%'}}></div></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>MongoDB</span><span>50%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-green-700 rounded" style={{width: '50%'}}></div></div>
          </div>
        </div>
        {/* Columna derecha: Otros (círculos de progreso) */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Otros</h2>
            <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
            <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
          </div>
          <div className="flex gap-8 justify-center md:justify-start">
            {/* Sass */}
            <div className="flex flex-col items-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="52" stroke="#d946ef" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="32.672" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">90%</text>
              </svg>
              <span className="mt-2 font-medium">Sass</span>
            </div>
            {/* Supabase */}
            <div className="flex flex-col items-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="52" stroke="#38bdf8" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="179.696" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">45%</text>
              </svg>
              <span className="mt-2 font-medium">Supabase</span>
            </div>
            {/* TypeScript */}
            <div className="flex flex-col items-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="52" stroke="#2563eb" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="130.688" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">60%</text>
              </svg>
              <span className="mt-2 font-medium">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Sección 4: Educación y Experiencia */}
    <section className="max-w-5xl mx-auto w-full mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna izquierda: Education */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Educación</h2>
            <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
            <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
          </div>
          <div className="border border-gray-300 p-6 bg-white">
            <div className="inline-block bg-gray-200 px-4 py-2 text-lg font-medium mb-4">2023</div>
            <div className="font-bold text-lg mb-2">CCNA: Introduction to Networks</div>
            <div className="text-gray-600">Conocimiento de redes, incluido el direccionamiento IP, cómo los protocolos físicos de enlace de datos admiten Ethernet, puede configurar la conectividad entre conmutadores, enrutadores y dispositivos finales para proporcionar acceso a recursos locales y remotos.</div>
          </div>
          <div className="border border-gray-300 p-6 bg-white">
            <div className="inline-block bg-gray-200 px-4 py-2 text-lg font-medium mb-4">2023 - 2025</div>
            <div className="font-bold text-lg mb-2">Perito en Computación</div>
            <div className="text-gray-600">Desarrollo de aplicaciones web y móviles con Javascript, diseño de redes informáticas con Cisco System, aplicaciones de escritorio y web con Java. Manejo de base de datos relacionales y no relacionales</div>
          </div>
        </div>
        {/* Columna derecha: Experience */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Experiencia</h2>
            <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
            <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
          </div>
          <div className="border border-gray-300 p-6 bg-white">
            <div className="inline-block bg-gray-200 px-4 py-2 text-lg font-medium mb-4">2024-2025</div>
            <div className="font-bold text-lg mb-2">Desarrollador web - (Vidata Services)</div>
            <div className="text-gray-600">Desarrollo de páginas web de empresas de mexico y crear una aplicacion web para sistema POS Ventas</div>
          </div>
        </div>
      </div>
    </section>

    {/* Sección 5: Servicios */}
    <section className="max-w-5xl mx-auto w-full mt-12">
      <div className="flex items-center mb-8">
        <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Servicios</h2>
        <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
        <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Desarrollo Web', icon: 'mdi:laptop', desc: 'Crear paginas y aplicaciones web escalables, seguras y rapidas. Siempre manteniendo un diseño intuitivo y una buena experiencia de usuario.' },
          { title: 'Desarrollo Movil', icon: 'mdi:cellphone', desc: 'Crear aplicaciones multiplaforma seguras, escalables y buena experiencia de usuario. ' },
          { title: 'Animación', icon: 'mdi:cube', desc: 'Crear animaciones 2d de ultima generacion para anuncios publicitarios, paginas web, videos, etc ...' },
        ].map((srv, i) => (
          <div key={i} className="service-card-wrap relative border border-gray-300 bg-white p-8 flex flex-col items-center text-center min-h-[260px] overflow-hidden group transition-colors duration-300">
            {/* Esquina decorativa */}
            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
              <div className="w-8 h-8 bg-black rotate-45 translate-x-4 -translate-y-4"></div>
            </div>
            <Icon icon={srv.icon} className="text-5xl mb-4 text-black group-hover:text-white transition-colors duration-300 z-10 relative" />
            <div className="font-bold text-lg mb-2 group-hover:text-white transition-colors duration-300 z-10 relative">{srv.title}</div>
            <div className="text-gray-600 group-hover:text-white transition-colors duration-300 z-10 relative">{srv.desc}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Sección 5: Interests - Carrusel automático */}
    <section className="max-w-5xl mx-auto w-full mt-12">
      <div className="flex items-center mb-8">
        <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Intereses</h2>
        <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
        <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
      </div>
      <InterestsCarousel />
    </section>

    {/* Sección 6: Clientes */}
    <section className="max-w-6xl mx-auto w-full mt-16 mb-8">
      <div className="flex items-center mb-8">
        <h2 className="text-xl font-extrabold tracking-widest mr-4 uppercase">Clientes</h2>
        <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
        <div className="flex-1 border-t-2 border-black ml-2" style={{verticalAlign: 'middle'}} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo 1 */}
        <div className="client-box flex items-center justify-center border border-gray-200 bg-white p-8 min-h-[80px] transition-all duration-200 cursor-pointer">
          <span className="client-logo text-3xl font-bold text-gray-400 transition-all duration-200">Dalton</span>
        </div>
        {/* Logo 2 */}
        <div className="client-box flex items-center justify-center border border-gray-200 bg-white p-8 min-h-[80px] transition-all duration-200 cursor-pointer">
          <span className="client-logo text-3xl font-bold text-gray-400 transition-all duration-200">Breezee</span>
        </div>
      </div>
      <style>{`
        .client-box:hover {
          border-color: #000;
          background: #fff;
        }
        .client-box:hover .client-logo {
          color: #000;
          font-weight: 900;
        }
        .client-box {
          box-sizing: border-box;
        }
      `}</style>
    </section>

    {/* Aquí puedes agregar más secciones en el futuro */}
  </div>
);

// Carrusel de intereses
function InterestsCarousel() {
  const interests = [
    { name: "Senderismo", icon: "mdi:hiking" },
    { name: "Videojuegos", icon: "mdi:controller" },
    { name: "Viajar", icon: "mdi:earth" },
    { name: "Lectura", icon: "mdi:book-open-page-variant" },
    { name: "Viajar", icon: "mdi:earth" },
    { name: "Fotografía", icon: "mdi:camera" },
    { name: "Ciclismo", icon: "mdi:bike" },
    { name: "Música", icon: "mdi:music" },
    { name: "Cine", icon: "mdi:movie" },
    { name: "Arte", icon: "mdi:palette" },
    { name: "Correr", icon: "mdi:run" },
    { name: "Nadar", icon: "mdi:swim" },
    { name: "Programar", icon: "mdi:code-tags" },
    { name: "Aprender", icon: "mdi:book-open-variant" },
  ];
  // Duplicar la lista para loop infinito visual
  const items = [...interests, ...interests];
  const [offset, setOffset] = React.useState(0);
  const itemWidth = 120; // px (w-24 + gap)
  const totalWidth = itemWidth * interests.length;

  React.useEffect(() => {
    let raf;
    let last = Date.now();
    function animate() {
      const now = Date.now();
      const delta = now - last;
      last = now;
      setOffset(prev => {
        let next = prev + (delta * 0.03); // velocidad: px/ms
        if (next >= totalWidth) return 0;
        return next;
      });
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [totalWidth]);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-8"
        style={{
          width: items.length * itemWidth,
          transform: `translateX(-${offset}px)`,
          transition: 'none',
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center" style={{width: 140}}>
            <div className="w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center mb-2 bg-white text-6xl">
              <Icon icon={item.icon} />
            </div>
            <span className="font-medium text-lg">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export  default About; 