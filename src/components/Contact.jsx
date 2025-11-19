import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, FileText, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_100%,rgba(56,189,248,0.06),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-800/40 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-semibold text-white tracking-tight">Let’s build something</h2>
          <p className="text-slate-400 mt-2">Open to collaborations, consulting, and speaking.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 hover:border-cyan-400/30 text-slate-300">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 hover:border-cyan-400/30 text-slate-300">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 hover:border-cyan-400/30 text-slate-300">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 hover:border-cyan-400/30 text-slate-300">
              <FileText className="w-4 h-4" /> Download CV
            </a>
          </div>

          <div className="mt-6 text-center">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white">
              <Twitter className="w-4 h-4" /> Follow on X
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">© {new Date().getFullYear()} AI Engineer — All rights reserved.</p>
      </div>
    </section>
  )
}
