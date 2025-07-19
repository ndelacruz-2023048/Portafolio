import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const portfolioItems = [
  { 
    id: 1, 
    type: "clientes", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752880554/Captura_de_pantalla_2025-07-18_171516_ytp0hd.png", 
    alt: "POS Ventas", 
    title: "POS Ventas",
    description: "Sistema de punto de venta completo con gestión de inventario y reportes",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://pos-ventas.com",
    githubUrl: "https://github.com/tu-usuario/pos-ventas"
  },
  { 
    id: 2, 
    type: "clientes", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752880653/Captura_de_pantalla_2025-07-18_171700_ymyyfm.png", 
    alt: "Faro", 
    title: "Dalton QJMotor",
    description: "Sitio web corporativo para empresa de motocicletas",
    technologies: ["WordPress", "PHP", "MySQL"],
    liveUrl: "https://daltonqjmotor.com"
  },
  { 
    id: 3, 
    type: "clientes", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752880894/Captura_de_pantalla_2025-07-18_172111_rovkgg.png", 
    alt: "Ciudad", 
    title: "Breezee",
    description: "Aplicación de gestión de citas y reservas",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://breezee-app.com",
    githubUrl: "https://github.com/tu-usuario/breezee"
  },
  { 
    id: 4, 
    type: "typescript", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752881275/Captura_de_pantalla_2025-07-18_172717_qjhsij.png", 
    alt: "Detalle", 
    title: "Planificador de gastos",
    description: "App para controlar gastos personales con gráficos interactivos",
    technologies: ["TypeScript", "React", "Chart.js"],
    liveUrl: "https://planificador-gastos.com",
    githubUrl: "https://github.com/tu-usuario/planificador-gastos"
  },
  { 
    id: 5, 
    type: "typescript", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752881690/Captura_de_pantalla_2025-07-18_173425_hr0p0o.png", 
    title: "Cotizador Criptomonedas",
    description: "Cotizador en tiempo real de criptomonedas con API",
    technologies: ["TypeScript", "React", "CoinGecko API"],
    liveUrl: "https://cotizador-crypto.com",
    githubUrl: "https://github.com/tu-usuario/cotizador-crypto"
  },
  { 
    id: 6, 
    type: "javascript", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752881894/Captura_de_pantalla_2025-07-18_173658_lzknpf.png", 
    alt: "Vimeo", 
    title: "Agua Comun",
    description: "Sistema de gestión para cooperativa de agua",
    technologies: ["JavaScript", "React", "Node.js"],
    liveUrl: "https://aguacomun.org",
    githubUrl: "https://github.com/tu-usuario/agua-comun"
  },
  { 
    id: 7, 
    type: "vanilla", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752882137/Captura_de_pantalla_2025-07-18_174149_tpdywc.png", 
    alt: "Youtube", 
    title: "Letras animadas",
    description: "Efectos de animación de texto con JavaScript vanilla",
    technologies: ["JavaScript", "CSS3", "HTML5"],
    liveUrl: "https://letras-animadas.com",
    githubUrl: "https://github.com/tu-usuario/letras-animadas"
  },
  { 
    id: 8, 
    type: "javascript", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752882739/Captura_de_pantalla_2025-07-18_175154_fqivaw.png", 
    alt: "Paisaje", 
    title: "Limae - Prevención violencia",
    description: "Plataforma educativa para prevención de violencia",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://limae.org",
    githubUrl: "https://github.com/tu-usuario/limae"
  },
  { 
    id: 9, 
    type: "typescript", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752881490/Captura_de_pantalla_2025-07-18_173052_cne0ih.png", 
    alt: "Detalle 2", 
    title: "Veterinaria Pacientes",
    description: "Sistema de gestión de pacientes veterinarios",
    technologies: ["TypeScript", "React", "Express"],
    liveUrl: "https://veterinaria-app.com",
    githubUrl: "https://github.com/tu-usuario/veterinaria"
  },
  { 
    id: 10, 
    type: "vanilla", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752882288/Captura_de_pantalla_2025-07-18_174414_ctepvo.png", 
    alt: "Soundcloud 2", 
    title: "Evento al presionar tecla",
    description: "Juego interactivo con eventos de teclado",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://juego-teclas.com",
    githubUrl: "https://github.com/tu-usuario/juego-teclas"
  },
  { 
    id: 11, 
    type: "vanilla", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752882477/Captura_de_pantalla_2025-07-18_174737_mjt8r9.png", 
    alt: "Vimeo 2", 
    title: "Api Pokedex",
    description: "Consumidor de API de Pokémon con búsqueda",
    technologies: ["JavaScript", "Fetch API", "CSS3"],
    liveUrl: "https://pokedex-app.com",
    githubUrl: "https://github.com/tu-usuario/pokedex"
  },
  { 
    id: 12, 
    type: "animacion", 
    src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752888519/Ciclo_de_Correr_02_-_Huyendo_-_GIF_Estatico_d0j7yq.gif", 
    alt: "Youtube 2", 
    title: "Animación de personajes",
    description: "Animaciones 2D para videojuegos y aplicaciones",
    technologies: ["Adobe Animate", "Spine", "Unity"],
    liveUrl: "https://animaciones-2d.com",
    githubUrl: "https://github.com/tu-usuario/animaciones"
  },
];

const tabs = [
  { label: "Todos", value: "all" },
  { label: "Clientes", value: "clientes" },
  { label: "React - Typescript", value: "typescript" },
  { label: "React - Javascript", value: "javascript" },
  { label: "Javascript - Vanilla", value: "vanilla" },
  { label: "Animacion 2D", value: "animacion" },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();
  
  const manejadorCards = (value) => {
    setActiveTab(value)
  }

  // Función para manejar enlaces externos
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Filtrado según el tab activo
  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeTab);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col gap-10 py-16 px-10">
      {/* Título y línea */}
      <h1 className="text-5xl font-extrabold text-black mb-2">Portafolio</h1>
      <div className="h-1 w-32 bg-black mb-8" />
      {/* Descripción */}
      <p className="text-lg text-gray-700 max-w-3xl mb-6">
        Actualmente, estoy trabajando en temas profesionales de WordPress visualmente sofisticados y tecnológicamente avanzados, responsivos y multi-funcionales. Si estás interesado en trabajar conmigo, haz clic en el botón de abajo y contáctame ahora mismo para que podamos hablar sobre tu proyecto.
      </p>
      {/* Botón de contacto */}
      <a href="mailto:nerydelacruzh@gmail.com" className="inline-block w-full max-w-md">
        <button className="w-full bg-black text-white font-extrabold text-lg py-4 px-6 mb-10 hover:bg-gray-900 transition">
          SI ESTÁS INTERESADO, CONTÁCTAME
        </button>
      </a>
      {/* Tabs de filtro */}
      <div className="flex gap-8 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => manejadorCards(tab.value)}
            className={`uppercase font-bold tracking-widest text-base pb-2 border-b-2 transition-all duration-200 ${
              activeTab === tab.value ? "border-black text-black" : "border-transparent text-gray-500 hover:text-black"
            }`}
            style={{ letterSpacing: "0.15em" }}
            
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Grilla de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-100 cursor-pointer">
            {/* Imagen */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Overlay con información */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100">
              {/* Título */}
              <h3 className="text-white text-2xl font-bold mb-3 text-center">
                {item.title}
              </h3>
              
              {/* Descripción */}
              <p className="text-gray-200 text-sm text-center mb-4 leading-relaxed">
                {item.description}
              </p>
              
              {/* Tecnologías */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {item.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Botones de acción */}
              <div className="flex gap-3">
                {item.liveUrl && (
                  <button
                    onClick={() => handleExternalLink(item.liveUrl)}
                    className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Demo
                  </button>
                )}
                
                {item.githubUrl && (
                  <button
                    onClick={() => handleExternalLink(item.githubUrl)}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Código
                  </button>
                )}
              </div>
            </div>
            
            {/* Título debajo de la imagen */}
            <div className="p-4 text-center font-semibold text-black">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio; 