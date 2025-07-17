import React from "react";

const services = [
  {
    title: "Asesoría Legal",
    desc: "Expertos en derecho para proteger tus intereses y brindarte tranquilidad.",
    icon: "📑",
  },
  {
    title: "Consultoría Empresarial",
    desc: "Impulsa tu negocio con estrategias personalizadas y soluciones efectivas.",
    icon: "💼",
  },
  {
    title: "Atención Personalizada",
    desc: "Nos enfocamos en tus necesidades para ofrecerte el mejor servicio.",
    icon: "🤝",
  },
];

const Services = () => (
  <section id="servicios" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((srv, idx) => (
          <div key={idx} className="bg-blue-50 rounded-lg shadow p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">{srv.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{srv.title}</h3>
            <p className="text-gray-600">{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 