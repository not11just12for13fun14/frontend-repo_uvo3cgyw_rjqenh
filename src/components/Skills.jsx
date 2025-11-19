import { motion } from 'framer-motion'
import { Brain, CircuitBoard, Workflow, Cog, Cpu, Boxes, Bot, LineChart, Database } from 'lucide-react'

const skills = [
  { icon: Brain, label: 'Machine Learning' },
  { icon: Cpu, label: 'Deep Learning' },
  { icon: CircuitBoard, label: 'Neural Networks' },
  { icon: Bot, label: 'NLP & LLMs' },
  { icon: Boxes, label: 'Computer Vision' },
  { icon: Workflow, label: 'MLOps' },
  { icon: Cog, label: 'Model Deployment' },
  { icon: Database, label: 'Data Engineering' },
  { icon: LineChart, label: 'Experimentation' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(56,189,248,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white tracking-tight">Core Competencies</h2>
          <p className="text-slate-400 mt-2">Breadth across the AI stack, depth in production-grade systems.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-800/40 backdrop-blur-sm p-6 hover:border-cyan-400/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-200 font-medium">{label}</p>
                  <p className="text-slate-400 text-sm">Production-focused, measurable results</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
