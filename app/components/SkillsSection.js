export default function SkillsSection({ data }) {
  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.frontend.map((skill, index) => (
                <span key={index} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.backend.map((skill, index) => (
                <span key={index} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.tools.map((skill, index) => (
                <span key={index} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}