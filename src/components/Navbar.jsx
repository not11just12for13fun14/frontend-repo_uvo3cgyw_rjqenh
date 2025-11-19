import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const links = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NavLink = ({ id, label }) => (
    <a
      href={`#${id}`}
      onClick={() => setOpen(false)}
      className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
    >
      {label}
    </a>
  )

  return (
    <header className={classNames(
      'fixed top-0 left-0 right-0 z-50 transition-all',
      scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 border-b border-white/5' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-fuchsia-500 shadow-lg shadow-cyan-500/20" />
            <span className="text-slate-200 font-semibold tracking-tight flex items-center gap-2">
              AI Engineer <Sparkles className="w-4 h-4 text-cyan-400" />
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.id} {...l} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-3 py-1.5 rounded-md text-sm font-medium bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors">Contact</a>
            <a href="#projects" className="px-3 py-1.5 rounded-md text-sm font-medium bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 text-slate-100 border border-white/10 hover:from-fuchsia-500/30 hover:to-cyan-500/30 transition-colors">View Work</a>
          </div>

          <button className="md:hidden p-2 text-slate-200" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 border-t border-white/5">
            <div className="flex flex-col gap-4 pt-4">
              {links.map((l) => (
                <NavLink key={l.id} {...l} />
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#contact" className="text-slate-300 hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-300 hover:text-white">
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
