import { icons } from "./data";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {icons.map(skill => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.label} className="p-6 rounded-2xl shadow bg-white flex flex-col items-center 
                hover:shadow-xl transition">
                <IconComponent size={40} className={`${skill.color} mb-2`} />
                <p className="font-semibold">{skill.label}</p>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Skills