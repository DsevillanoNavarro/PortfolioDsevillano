import { motion } from "framer-motion"
function App() {

  return (
    <>
    
      <div className="fixed z-10 flex flex-col justify-end items-center text-center bottom-0 left-0 right-0 px-4 py-4">
        <motion.div 
        initial={{ opacity:0, y:-30}}
        animate={{ opacity:1, y:0}}
        transition={{ duration:0.8, ease: "easeOut"}}
        className="bg-blue-800 rounded shadow-lg flex gap-6">
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
        </motion.div>
        
      </div>
    </>
  )
}

export default App
