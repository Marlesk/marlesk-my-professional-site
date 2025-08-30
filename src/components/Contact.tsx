import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="py-14 px-6 md:px-20 rounded-2xl shadow-lg scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple mb-12">
        Contact
      </h2>
      <p className="text-center mb-6 text-gray-700">
        Let’s work together! Feel free to reach out via email or LinkedIn.
      </p>
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-center md:space-x-6 md:gap-6">
        <a href="mailto:mariales.leska@gmail.com" 
          className="w-40 justify-center px-6 py-3 bg-[#D14836] text-white rounded-xl shadow-lg hover:bg-[#C53727] transition flex items-center gap-2 mx-auto md:mx-0">
          <FaGoogle size={18}/>Email
        </a>
        <a href="https://www.linkedin.com/in/maria-leska-17071418b/" target="_blank" 
          className="w-40 justify-center px-6 py-3 bg-[#0A66C2] text-white rounded-xl shadow-lg hover:bg-[#004182] transition flex items-center gap-2 mx-auto md:mx-0">
          <FaLinkedin size={18}/>LinkedIn
        </a>
        <a href="https://github.com/Marlesk" target="_blank" 
          className="w-40 justify-center px-6 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:bg-black transition flex gap-2 items-center space-x-2 mx-auto md:mx-0">
          <FaGithub size={18}/> GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact