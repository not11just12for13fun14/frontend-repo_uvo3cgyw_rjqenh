import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-800/40 backdrop-blur-sm p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 mx-auto shadow-lg shadow-cyan-500/20" />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-white text-xl font-semibold">About Me</h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-slate-300 mt-3"
              >
                I’m an AI engineer focused on building production-ready intelligent systems. My work blends rigorous research with pragmatic engineering — from training deep neural networks to deploying low-latency inference services at scale. I care about robust evaluation, tight feedback loops, and shipping user-centric features.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
