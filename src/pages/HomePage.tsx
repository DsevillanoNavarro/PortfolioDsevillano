import { motion } from "framer-motion"
import marVideo from "../assets/mar.mp4"
import Navbar from "../components/Navbar.tsx"

function HomePage() {
  return (
    <>
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="fixed z-0 object-cover w-full h-full"
      >
        <source src={marVideo} type="video/mp4" />
        Tu navegador no soporta el vídeo.
      </video>

      {/* Overlay con blur */}
      <div className="fixed inset-0 bg-sky-800/50 backdrop-blur-sm z-5"></div>

      {/* Contenido centrado */}
      <div className="fixed inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl tracking-wide"
        >
          Daniel Sevillano Navarro
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-white text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md leading-relaxed"
        >
          Desarrollador Web Junior con una base sólida en Django y React. 
          Listo para aportar y crecer en mi primera oportunidad profesional.
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Descubre mi potencial
        </motion.button>
      </div>

      <Navbar />
    </>
  )
}

export default HomePage
