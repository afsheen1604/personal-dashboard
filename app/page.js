import './globals.css'

// Static data - replace with your information
const profileData = {
  name: "Nida Afsheen",
  title: "Full Stack Developer",
  email: "nida.afsheen@email.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  bio: "Passionate full-stack developer with experience in building scalable web applications. I love creating user-friendly interfaces and solving complex problems with modern technologies.",
  
  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      year: "2020-2024",
      gpa: "3.8/4.0"
    },
    {
      degree: "Web Development Bootcamp",
      school: "Tech Academy",
      year: "2023",
      gpa: "Certificate"
    }
  ],
  
  experience: [
    {
      position: "Frontend Developer Intern",
      company: "TechStart Inc.",
      duration: "Jun 2023 - Aug 2023",
      description: "Developed responsive web components using React and Tailwind CSS"
    },
    {
      position: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "2022 - Present",
      description: "Built websites for small businesses using modern web technologies"
    }
  ],
  
  skills: {
    frontend: ["React", "Next.js", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL"],
    tools: ["Git", "VS Code", "Figma", "Postman", "Docker"]
  },
  
  goals: [
    "Master advanced React patterns and performance optimization",
    "Learn cloud computing with AWS",
    "Contribute to open-source projects",
    "Start a tech blog to share knowledge"
  ],
  
  hobbies: ["Photography", "Hiking", "Chess", "Reading Tech Books"],
  
  certifications: [
    "AWS Cloud Practitioner (2024)",
    "Google Analytics Certified (2023)",
    "FreeCodeCamp Full Stack Certificate (2023)"
  ]
};

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Personal Dashboard</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#profile" className="text-white hover:text-gray-200 transition duration-300">Profile</a>
              <a href="#education" className="text-white hover:text-gray-200 transition duration-300">Education</a>
              <a href="#skills" className="text-white hover:text-gray-200 transition duration-300">Skills</a>
              <a href="#goals" className="text-white hover:text-gray-200 transition duration-300">Goals</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Profile Section */}
        <section id="profile" className="py-12">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{profileData.name}</h2>
                  <p className="text-xl text-blue-600 mb-4">{profileData.title}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{profileData.bio}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div className="flex items-center justify-center md:justify-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span>{profileData.email}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span>{profileData.phone}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span>{profileData.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience Section */}
        <section id="education" className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education & Experience</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
                {profileData.education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-lg font-semibold text-blue-600">{edu.degree}</h4>
                    <p className="text-gray-700 font-medium">{edu.school}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-500 text-sm">{edu.year}</span>
                      <span className="text-green-600 font-semibold">{edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experience</h3>
                {profileData.experience.map((exp, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
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

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills & Technologies</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.frontend.map((skill, index) => (
                    <span key={index} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Backend Skills */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.backend.map((skill, index) => (
                    <span key={index} className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Tools */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.tools.map((skill, index) => (
                    <span key={index} className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Goals, Hobbies & Certifications Section */}
        <section id="goals" className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Goals, Hobbies & Certifications</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Goals */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Goals</h3>
                <ul className="space-y-3">
                  {profileData.goals.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hobbies */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.hobbies.map((hobby, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Certifications */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Certifications</h3>
                <ul className="space-y-3">
                  {profileData.certifications.map((cert, index) => (
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
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white">&copy; 2024 {profileData.name}. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
