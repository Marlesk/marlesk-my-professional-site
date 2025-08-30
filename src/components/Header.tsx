import { motion } from "framer-motion"
import { FaFilePdf } from "react-icons/fa"

const Header = () => {
  return (
    <header id='about' className="flex flex-col items-center justify-center text-center py-28 px-6 scroll-mt-24">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Maria, 
        <span className="text-purple"> a Web Developer</span>
      </motion.h2>
      <p className="mt-4 text-lg text-gray-700 max-w-xl">
        I create modern, responsive websites with clean code and sleek designs. Passionate about building intuitive user experiences that make an impact..
      </p>
      <motion.a
        href="https://www.dropbox.com/scl/fi/mou6jzzmv1dtrmtqp4o0j/Maria_Leska_CV.pdf?rlkey=oogjzj6hro6u6lx18il0h9eck&dl=1"
        target="_blank"
        rel="noopener noreferrer"
        download ="Maria_Leska_CV.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-light to-pink text-white rounded-xl shadow-lg hover:from-blue hover:to-purple transition flex items-center gap-2 "
      >
        <FaFilePdf size={18} /> Download CV
      </motion.a>
    </header>
    
  )
}

export default Header