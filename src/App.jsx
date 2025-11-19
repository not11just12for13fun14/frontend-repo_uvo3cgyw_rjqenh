import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(56,189,248,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_90%_20%,rgba(236,72,153,0.06),transparent)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <TechStack />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
