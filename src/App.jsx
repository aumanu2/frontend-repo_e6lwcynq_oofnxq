import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold text-[#6A0DAD]">Your Brand</a>
          <div className="hidden gap-6 sm:flex">
            <a href="#work" className="text-sm font-medium text-gray-700 hover:text-[#6A0DAD]">Work</a>
            <a href="#blog" className="text-sm font-medium text-gray-700 hover:text-[#6A0DAD]">Blog</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-[#6A0DAD]">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[#6A0DAD] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-300 transition hover:bg-[#5a0b95]"
          >
            Let’s talk
          </a>
        </nav>
      </header>

      <main>
        <Hero />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}

export default App
