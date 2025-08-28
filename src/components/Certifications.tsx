import { certifications } from "./data"

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 md:px-20 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue mb-12">
        Certifications
      </h2>
      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {certifications.map((certificate, index) => (
          <div
            key={index}
            className="p-6 md:p-8 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            <h4 className="font-bold text-purple text-xl md:text-2xl mb-1">{certificate.title}</h4>
            <p className="text-gray-400 text-sm mb-2">{certificate.year}</p>
            <p className="text-gray-500 text-sm mb-1">{certificate.university}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications