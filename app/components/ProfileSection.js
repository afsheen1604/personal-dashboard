export default function ProfileSection({ data }) {
  return (
    <section id="profile" className="py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {data.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{data.name}</h2>
              <p className="text-xl text-blue-600 mb-4">{data.title}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{data.bio}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>{data.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span>{data.phone}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span>{data.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}