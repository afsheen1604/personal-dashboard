export default function Header() {
  return (
    <header className="gradient-bg shadow-lg">
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
  )
}