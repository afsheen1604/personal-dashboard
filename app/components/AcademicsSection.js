export default function AcademicsSection({ data }) {
  return (
    <section id="education" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education & Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
            {data.education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4 card-hover">
                <h4 className="text-lg font-semibold text-blue-600">{edu.degree}</h4>
                <p className="text-gray-700 font-medium">{edu.school}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-500 text-sm">{edu.year}</span>
                  <span className="text-green-600 font-semibold">{edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experience</h3>
            {data.experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4 card-hover">
                <h4 className="text-lg font-semibold text-blue-600">{exp.position}</h4>
                <p className="text-gray-700 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-2">{exp.duration}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}