import { experiences } from "./data"

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-gray-50 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue mb-12">
        Experience
      </h2>

      <div className="grid gap-8 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 md:p-8 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            <h4 className="font-bold text-purple text-xl md:text-2xl mb-2">
              {exp.title}
            </h4>
            <p className="text-gray-500 text-sm mb-1">
              {exp.company} | {exp.period}
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-3">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience