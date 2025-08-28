import { schools } from "./data"

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-20 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple mb-12">
        Education 
      </h2>
      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {schools.map((school, index) => (
          <div
            key={index}
            className="p-6 md:p-8 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            <h4 className="font-bold text-blue text-xl md:text-2xl mb-1">{school.title}</h4>
            <p className="text-gray-400 text-sm mb-2">{school.year}</p>
            <p className="text-gray-500 text-sm mb-1">{school.university}</p>
            <p className="text-gray-600 text-sm">{school.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education