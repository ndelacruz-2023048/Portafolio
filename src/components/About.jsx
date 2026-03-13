import React from "react";
import { Icon } from "@iconify/react";

const About = () => (
  <div className="w-full min-h-screen bg-white flex flex-col gap-24 py-16 px-10">
    {/* ========================================
        SECCIÓN 1: ACERCA DE MÍ (Personal)
        ======================================== */}
    <section className="max-w-5xl mx-auto w-full">
      <h1 className="text-5xl font-extrabold text-black mb-2">Acerca de mí</h1>
      <div className="h-1 w-32 bg-black mb-12" />
      
      {/* Información personal */}
      <div className="mb-12">
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
            <p className="mb-2"><span className="font-semibold">Correo:</span> nerydelacruzh@gmail.com</p>
            <p className="mb-2"><span className="font-semibold">Telefono:</span> +502 35904919</p>
          </div>
        </div>
      </div>

      {/* Estudios universitarios */}
      <div className="mt-12 p-6 bg-gray-50 border-l-4 border-black rounded-r-lg">
        <h3 className="text-2xl font-bold text-black mb-4">Estudiante Universitario</h3>
        <p className="text-lg text-gray-700 mb-4">
          Actualmente estoy estudiando en la <span className="font-semibold text-black">Universidad del Valle de Guatemala (UVG)</span>, cursando la carrera de <span className="font-semibold text-black">Ingeniería en Ciencias de la Computación</span>.
        </p>
        
        <h4 className="text-xl font-bold text-black mt-6 mb-3">¿Por qué elegí esta carrera?</h4>
        <p className="text-lg text-gray-700 mb-4">
          Elegí la carrera de Ingeniería en Ciencias de la Computación porque me fascina cómo con solo escribir unas líneas de código, hay una reacción inmediata en la pantalla de una computadora. Todo este mundo de la programación me llamó mucho la atención en primero básico, cuando un profesor nos explicó paso a paso cómo crear una página web. Cada línea de código que íbamos escribiendo, íbamos viendo los resultados en la pantalla del computador. Fue en ese momento cuando quedé fascinado con querer aprender a programar y poder seguir creando cosas cada vez más avanzadas.
        </p>
        
        <h4 className="text-xl font-bold text-black mt-6 mb-3">¿Qué persigo con esta carrera?</h4>
        <p className="text-lg text-gray-700">
          Mi objetivo es conocer cómo crear un lenguaje de programación, cómo se construye un sistema operativo. Es decir, conocer todo el entorno completo: desde la comunicación del código con el hardware hasta las aplicaciones web corriendo en la nube. Quiero dominar cada capa de la tecnología, desde los fundamentos más básicos hasta las implementaciones más complejas.
        </p>
      </div>

      {/* Intereses */}
      <div className="mt-12">
        <div className="flex items-center mb-8">
          <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Intereses</h2>
          <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
          <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
        </div>
        <InterestsCarousel />
      </div>
    </section>

    {/* ========================================
        SECCIÓN 2: MI PRIMER MES EN LA UNIVERSIDAD
        ======================================== */}
    <section className="max-w-5xl mx-auto w-full">
      <h1 className="text-5xl font-extrabold text-black mb-2">Mi primer mes en la universidad</h1>
      <div className="h-1 w-32 bg-black mb-12" />

      <div className="space-y-8">
        {/* ¿Qué te ha parecido interesante? */}
        <div className="border border-gray-300 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
            <Icon icon="mdi:lightbulb-on" className="text-2xl text-black" />
            ¿Qué me ha parecido interesante?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Me llama mucho la atención la forma en cómo se dan las clases, el ambiente de estudio y los compañeros de clase que me rodean. Aparte, que un profesor tuviera una ayuda que son los auxiliares, me llama muchísima la atención, debido a que son los mismos estudiantes que califican a otros estudiantes. Lo cual me parece increíble.
          </p>
        </div>

        {/* ¿Qué te ha gustado? */}
        <div className="border border-gray-300 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
            <Icon icon="mdi:heart" className="text-2xl text-black" />
            ¿Qué me ha gustado?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Las

 personas y los compañeros de clases son muy buenos, y sobre todo que todos los maestros nos van guiando en cada tema que nos dan, de una manera muy amigable de entender.
          </p>
        </div>

        {/* ¿Qué te ha motivado? */}
        <div className="border border-gray-300 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
            <Icon icon="mdi:rocket-launch" className="text-2xl text-black" />
            ¿Qué me ha motivado?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Me han motivado los mismos maestros que me están dando clases, debido a que cada uno de ellos cuenta diferentes experiencias que han vivido para poder lograr ser un profesional. Y yo quiero llegar a ser algún día como ellos, de poder contar todo ese tipo de historias y poder ayudar a cualquier persona.
          </p>
        </div>

        {/* ¿Qué dificultades has enfrentado? */}
        <div className="border border-gray-300 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
            <Icon icon="mdi:alert-circle" className="text-2xl text-black" />
            ¿Qué dificultades he enfrentado?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            El tener que estar cumpliendo lo mejor que pueda en la universidad y el trabajo a la vez. Ya que en ciertos puntos es muy agotador.
          </p>
        </div>

        {/* ¿Qué no te ha gustado o te ha resultado difícil? */}
        <div className="border border-gray-300 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
            <Icon icon="mdi:book-alert" className="text-2xl text-black" />
            ¿Qué me ha resultado difícil?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Me ha costado la parte de la realización de informes para las clases de química y ciencias de la vida. Más específicamente la materia de ciencias de la vida, porque son más estrictos para calificar.
          </p>
        </div>
      </div>
    </section>

    {/* ========================================
        SECCIÓN 3: MIS APRENDIZAJES EN UVG
        ======================================== */}
    <section className="max-w-5xl mx-auto w-full">
      <h1 className="text-5xl font-extrabold text-black mb-2">Mis aprendizajes en UVG</h1>
      <div className="h-1 w-32 bg-black mb-12" />

      <div className="space-y-12">
        {/* Aprendizaje 1: Algoritmos y Programación Básica */}
        <div className="border border-gray-300 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
            <Icon icon="mdi:code-braces" className="text-3xl" />
            Algoritmos y Programación Básica
          </h3>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Crear figuras en python con la libreria de turtle, y practicasr los fundamentes de python.
          </p>

          <h4 className="text-lg font-bold text-black mb-3">Evidencia del aprendizaje:</h4>
          <div className="mb-6">
            <img 
              src="https://res.cloudinary.com/dtmwybty7/image/upload/v1773398672/Captura_de_pantalla_2026-03-13_a_la_s_4.43.50_a._m._hd7o8c.png" 
              alt="Figuras con turtle en Python"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          <h4 className="text-lg font-bold text-black mb-3">Metacognición:</h4>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div>
              <p className="font-semibold text-black mb-1">Estado actual de mis habilidades:</p>
              <p className="text-gray-700">Intermedio avanzado</p>
            </div>
            <div>
              <p className="font-semibold text-black mb-1">Cómo puedo mejorar:</p>
              <p className="text-gray-700">Dedicarme mas tiempo a entender las bases de cada uno de los temas que vamos viendo.</p>
            </div>
            <div>
              <p className="font-semibold text-black mb-1">Qué necesito para mejorar:</p>
              <p className="text-gray-700">Un pagina web donde me muestre ejercicios de cada uno de los temas que voy aprendiendo y que a la par de cada ejercicio aparezca la forma en como se resuelve el ejercicio</p>
            </div>
          </div>
        </div>

        {/* Aprendizaje 2: Ciencias de la Vida */}
        <div className="border border-gray-300 bg-gray-50 p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
            <Icon icon="mdi:flask" className="text-3xl" />
            Ciencias de la Vida
          </h3>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            He aprendido como funcionan diferentes sustancias y funcionamiento del cuerpo, pero a traves de practicas de laboratorio.
          </p>

          <h4 className="text-lg font-bold text-black mb-3">Evidencia del aprendizaje:</h4>
          <div className="mb-6">
            <img 
              src="https://res.cloudinary.com/dtmwybty7/image/upload/v1773398985/20260225_091646_q4s3sf.jpg" 
              alt="Prácticas de laboratorio en Ciencias de la Vida"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          <h4 className="text-lg font-bold text-black mb-3">Metacognición:</h4>
          <div className="bg-white p-6 rounded-lg space-y-4">
            <div>
              <p className="font-semibold text-black mb-1">Estado actual de mis habilidades:</p>
              <p className="text-gray-700">Principiante</p>
            </div>
            <div>
              <p className="font-semibold text-black mb-1">Cómo puedo mejorar:</p>
              <p className="text-gray-700">Preguntar mas a mi instructor y auxiliares. Y dedicarme a estudiar diaramente o regularmente esta materia</p>
            </div>
            <div>
              <p className="font-semibold text-black mb-1">Qué necesito para mejorar:</p>
              <p className="text-gray-700">Libros relacionados con los temas que vamos viendo y clases personalizadas</p>
            </div>
          </div>
        </div>

        {/* Aprendizaje 3: Matemática para Computación */}
        <div className="border border-gray-300 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
            <Icon icon="mdi:chart-line" className="text-3xl" />
            Matemática para Computación
          </h3>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Saber que existen mas 20 tipos de graficas matematicas y conocer para que sirven en la vida real.
          </p>

          <h4 className="text-lg font-bold text-black mb-3">Evidencia del aprendizaje:</h4>
          <div className="mb-6">
            <img 
              src="https://res.cloudinary.com/dtmwybty7/image/upload/v1773399329/graficas_l2d3rg.jpg" 
              alt="Tipos de gráficas matemáticas"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          <h4 className="text-lg font-bold text-black mb-3">Metacognición:</h4>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div>
              <p className="font-semibold text-black mb-1">Estado actual de mis habilidades:</p>
              <p className="text-gray-700">Principiante</p>
            </div>
            <div>
              <p className="font-semibold text-black mb-1">Cómo puedo mejorar:</p>
              <p className="text-gray-700">Practicar los ejercicios de los temas aprendidos regularmente por lo menos 1 hora al dia</p>
            </div>
            <div>
              <p className="font-semibold text-black mb-1">Qué necesito para mejorar:</p>
              <p className="text-gray-700">Ejericios de los temas aprendidos con sus respectivas soluciones y mejor si muestra el procedimiento que se utilizo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ========================================
        SECCIÓN 4: SOBRE MÍ COMO DESARROLLADOR
        ======================================== */}
    <section className="max-w-5xl mx-auto w-full">
      <h1 className="text-5xl font-extrabold text-black mb-2">Sobre mí como desarrollador</h1>
      <div className="h-1 w-32 bg-black mb-12" />

      {/* Introducción profesional */}
      <p className="text-lg text-gray-800 mb-12 leading-relaxed">
        Soy un desarrollador web freelance de Guatemala, especializado en crear experiencias digitales únicas y funcionales. Actualmente trabajo en aplicaciones web full stack con React y Express, desarrollando soluciones tecnológicamente avanzadas, responsivas y multi-funcionales. Mi pasión es convertir ideas en productos digitales significativos que no solo se vean bien, sino que también funcionen perfectamente. Con experiencia en desarrollo web, aplicaciones móviles y animaciones 2D.
      </p>

      {/* Skills y Frameworks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
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
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-black rounded" style={{width: '85%'}}></div></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>HTML & CSS</span><span>80%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-black rounded" style={{width: '80%'}}></div></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>JavaScript</span><span>60%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-black rounded" style={{width: '60%'}}></div></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>Java</span><span>40%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-black rounded" style={{width:'40%'}}></div></div>
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
                <circle cx="60" cy="60" r="52" stroke="#000" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="65.344" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">80%</text>
              </svg>
              <span className="mt-2 font-medium">React</span>
            </div>
            {/* Express */}
            <div className="flex flex-col items-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="52" stroke="#000" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="130.688" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">75%</text>
              </svg>
              <span className="mt-2 font-medium">Express</span>
            </div>
            {/* React Native */}
            <div className="flex flex-col items-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="52" stroke="#000" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffs et="283.36" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">20%</text>
              </svg>
              <span className="mt-2 font-medium">React Native</span>
            </div>
          </div>
        </div>
      </div>

      {/* Base de Datos y Otros */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
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
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-black rounded" style={{width: '45%'}}></div></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>MySQL</span><span>50%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-black rounded" style={{width: '50%'}}></div></div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-1"><span>MongoDB</span><span>50%</span></div>
            <div className="w-full h-1.5 bg-gray-200 rounded"><div className="h-1.5 bg-black rounded" style={{width: '50%'}}></div></div>
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
                <circle cx="60" cy="60" r="52" stroke="#000" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="32.672" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">90%</text>
              </svg>
              <span className="mt-2 font-medium">Sass</span>
            </div>
            {/* Supabase */}
            <div className="flex flex-col items-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="52" stroke="#000" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="179.696" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">45%</text>
              </svg>
              <span className="mt-2 font-medium">Supabase</span>
            </div>
            {/* TypeScript */}
            <div className="flex flex-col items-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="52" stroke="#000" strokeWidth="3" fill="none" strokeDasharray="326.72" strokeDashoffset="130.688" style={{transition: 'stroke-dashoffset 1s'}} />
                <text x="50%" y="54%" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#222">60%</text>
              </svg>
              <span className="mt-2 font-medium">TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      {/* Educación y Experiencia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Columna izquierda: Education */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-xl font-bold tracking-wide mr-2 uppercase whitespace-nowrap">Educación</h2>
            <span className="inline-block h-[1.25em] w-0.5 bg-black align-middle" style={{verticalAlign: 'middle'}}></span>
            <div className="flex-1 border-t border-black ml-px" style={{verticalAlign: 'middle'}} />
          </div>
          <div className="border border-gray-300 p-6 bg-white mb-4">
            <div className="inline-block bg-black text-white px-4 py-2 text-lg font-medium mb-4">2023</div>
            <div className="font-bold text-lg mb-2">CCNA: Introduction to Networks</div>
            <div className="text-gray-600">Conocimiento de redes, incluido el direccionamiento IP, cómo los protocolos físicos de enlace de datos admiten Ethernet, puede configurar la conectividad entre conmutadores, enrutadores y dispositivos finales para proporcionar acceso a recursos locales y remotos.</div>
          </div>
          <div className="border border-gray-300 p-6 bg-white">
            <div className="inline-block bg-gray-700 text-white px-4 py-2 text-lg font-medium mb-4">2023 - 2025</div>
            <div className="font-bold text-lg mb-2">Perito en Computación</div>
            <div className="text-gray-800 mb-2 font-semibold">Centro Educativo Técnico Laboral Kinal</div>
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
            <div className="inline-block bg-gray-700 text-white px-4 py-2 text-lg font-medium mb-4">2024-2025</div>
            <div className="font-bold text-lg mb-2">Desarrollador web - (Vidata Services)</div>
            <div className="text-gray-600">Desarrollo de páginas web de empresas de mexico y crear una aplicacion web para sistema POS Ventas</div>
          </div>
        </div>
      </div>

      {/* Servicios */}
      <div className="mb-12">
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
      </div>

      {/* Clientes */}
      <div>
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
      </div>
    </section>
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

export default About;
