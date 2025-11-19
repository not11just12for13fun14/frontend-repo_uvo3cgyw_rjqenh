import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 flex flex-col items-start justify-center py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            AI Engineer Building Intelligent Systems for the Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg text-slate-300 max-w-2xl"
          >
            Specializing in Machine Learning, Deep Learning, LLMs, and AI-driven product innovation. Crafting high-impact systems with a focus on reliability, scalability, and human-centered design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#projects" className="px-5 py-3 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition-colors">Contact</a>
          </motion.div>
        </div>

        <div className="md:col-span-5" />
      </div>
    </section>
  )
}
