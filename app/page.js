import ProfileData from '../data/profile.json'
import Header from './components/Header'
import ProfileSection from './components/ProfileSection'
import AcademicsSection from './components/AcademicsSection'
import SkillsSection from './components/SkillsSection'
import GoalsSection from './components/GoalsSection'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <ProfileSection data={ProfileData} />
        <AcademicsSection data={ProfileData} />
        <SkillsSection data={ProfileData} />
        <GoalsSection data={ProfileData} />
      </main>
      <footer className="gradient-bg py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white">&copy; 2024 Personal Dashboard. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}