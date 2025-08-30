const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-center md:justify-between gap-4 text-center items-center p-6 shadow-md sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <h1 className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue via-purple to-pink bg-clip-text text-transparent">
        Maria.dev
      </h1>
      <div className="md:space-x-6 space-x-3 text-base md:text-lg">
        <a href="#about" className="hover:text-purple hover:scale-105 transition inline-block active:text-purple active:scale-125">
          About
        </a>
        <a href="#skills" className="hover:text-blue-light hover:scale-105 transition inline-block active:text-blue-light active:scale-125">
          Skills
        </a>
        <a href="#projects" className="hover:text-purple hover:scale-105 transition inline-block active:text-purple active:scale-125">
          Projects
        </a>
        <a href="#experience" className="hover:text-blue-light hover:scale-105 transition inline-block active:text-blue-light active:scale-125">
          Experience
        </a>
        <a href="#education" className="hover:text-purple hover:scale-105 transition inline-block active:text-purple active:scale-125">
          Education
        </a>
        <a href="#certifications" className="hover:text-blue-light hover:scale-105 transition inline-block active:text-blue-light active:scale-125">
          Certifications
        </a>
        <a href="#contact" className="hover:text-purple hover:scale-105 transition inline-block active:text-purple active:scale-125">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar