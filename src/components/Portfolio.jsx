import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const portfolioItems = [
  { id: 1, type: "clientes", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752880554/Captura_de_pantalla_2025-07-18_171516_ytp0hd.png", alt: "POS Ventas", title: "POS Ventas" },
  { id: 2, type: "clientes", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752880653/Captura_de_pantalla_2025-07-18_171700_ymyyfm.png", alt: "Faro", title: "Dalton QJMotor" },
  { id: 3, type: "clientes", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752880894/Captura_de_pantalla_2025-07-18_172111_rovkgg.png", alt: "Ciudad", title: "Breezee" },
  { id: 4, type: "typescript", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752881275/Captura_de_pantalla_2025-07-18_172717_qjhsij.png", alt: "Detalle", title: "Planificador de gastos" },
  { id: 5, type: "typescript", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752881690/Captura_de_pantalla_2025-07-18_173425_hr0p0o.png", title: "Cotizador Criptomonedas" },
  { id: 6, type: "javascript", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752881894/Captura_de_pantalla_2025-07-18_173658_lzknpf.png", alt: "Vimeo", title: "Agua Comun" },
  { id: 7, type: "vanilla", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752882137/Captura_de_pantalla_2025-07-18_174149_tpdywc.png", alt: "Youtube", title: "Letras animadas" },
  { id: 8, type: "javascript", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752882739/Captura_de_pantalla_2025-07-18_175154_fqivaw.png", alt: "Paisaje", title: "Limae - Prevención violencia" },
  { id: 9, type: "typescript", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752881490/Captura_de_pantalla_2025-07-18_173052_cne0ih.png", alt: "Detalle 2", title: "Veterinaria Pacientes" },
  { id: 10, type: "vanilla", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752882288/Captura_de_pantalla_2025-07-18_174414_ctepvo.png", alt: "Soundcloud 2", title: "Evento al presionar tecla" },
  { id: 11, type: "vanilla", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752882477/Captura_de_pantalla_2025-07-18_174737_mjt8r9.png", alt: "Vimeo 2", title: "Api Pokedex" },
  { id: 12, type: "animacion", src: "https://res.cloudinary.com/dtmwybty7/image/upload/v1752888519/Ciclo_de_Correr_02_-_Huyendo_-_GIF_Estatico_d0j7yq.gif", alt: "Youtube 2", title: "Animación de personajes" },
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
          <div key={item.id} className="overflow-hidden rounded shadow bg-gray-100">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-72 object-cover grayscale hover:grayscale-0 transition duration-300"
            />
            <div className="p-4 text-center font-semibold text-black">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio; 