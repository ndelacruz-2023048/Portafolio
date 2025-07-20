import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col gap-10 py-16 px-10">
      {/* Título y línea */}
      <h1 className="text-5xl font-extrabold text-black mb-2">Contacto</h1>
      <div className="h-1 w-32 bg-black mb-8" />
      
      {/* Descripción */}
      <p className="text-lg text-gray-700 max-w-3xl mb-12">
        ¿Tienes alguna idea? ¿Necesitas ayuda con desarrollo web, diseño o animaciones? 
        Sera un honor poder trabajar contigo, ayudandote a dar tus primeros pasos o continuar en este gran camino de la tecnologia, solo contactame y vere la forma de ayudarte.
      </p>

      {/* GET IN TOUCH Section */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-bold text-black uppercase">Contactame</h2>
        <div className="flex-1 flex items-center">
          <div className="w-8 h-0.5 bg-black"></div>
          <div className="w-0.5 h-8 bg-black ml-2"></div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email Card */}
        <div className="relative bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          {/* Folded corner */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-black"></div>
          
          {/* Email Icon */}
          <div className="flex justify-center mb-6">
            <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          
          {/* Email Address */}
          <div className="text-center">
            <p className="text-lg font-medium text-black">nerydelacruzh@gmail.com</p>
          </div>
        </div>

        {/* Phone Card */}
        <div className="relative bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          {/* Folded corner */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-black"></div>
          
          {/* Phone Icon */}
          <div className="flex justify-center mb-6">
            <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          
          {/* Phone Number */}
          <div className="text-center">
            <p className="text-lg font-medium text-black">WhatsApp disponible</p>
            <button 
              onClick={() => window.open('https://wa.link/7qw6fk', '_blank')}
              className="text-sm text-blue-600 hover:underline mt-2"
            >
              Abrir WhatsApp
            </button>
          </div>
        </div>

        {/* Address Card */}
        <div className="relative bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          {/* Folded corner */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-black"></div>
          
          {/* Location Icon */}
          <div className="flex justify-center mb-6">
            <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          
          {/* Address */}
          <div className="text-center">
            <p className="text-lg font-medium text-black">Guatemala</p>
            <p className="text-sm text-gray-600 mt-1">Trabajo remoto disponible</p>
          </div>
        </div>
      </div>

      {/* Additional Contact Form Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-black mb-8">Envíame un mensaje</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Tu nombre completo"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
              <textarea 
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>
            
            <button className="w-full bg-black text-white font-bold py-4 px-6 rounded-lg hover:bg-gray-900 transition duration-200">
              ENVIAR MENSAJE
            </button>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-black mb-4">Información adicional</h4>
              <p className="text-gray-600 leading-relaxed">
                Estoy disponible para proyectos freelance y colaboraciones. 
                Si tienes una idea en mente o necesitas ayuda con tu proyecto, 
                no dudes en contactarme.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-black mb-4">Horarios de disponibilidad</h4>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Lunes - Viernes:</span> 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-black mb-4">Redes sociales</h4>
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open('https://github.com/nerydelacruz', '_blank')}
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
                
                <button 
                  onClick={() => window.open('https://wa.link/7qw6fk', '_blank')}
                  className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 