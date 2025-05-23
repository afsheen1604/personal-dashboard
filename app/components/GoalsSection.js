export default function GoalsSection({ data }) {
  return (
    <section id="goals" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Goals, Hobbies & Certifications</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Goals</h3>
            <ul className="space-y-3">
              {data.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              {data.hobbies.map((hobby, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Certifications</h3>
            <ul className="space-y-3">
              {data.certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}