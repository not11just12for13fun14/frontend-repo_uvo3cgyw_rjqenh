import { motion } from 'framer-motion'
import { SiPytorch, SiTensorflow, SiPython, SiDocker, SiKubernetes, SiAmazonaws, SiNvidia, SiOpenai, SiHuggingface, SiLangchain } from 'react-icons/si'

const items = [
  { label: 'PyTorch', icon: SiPytorch },
  { label: 'TensorFlow', icon: SiTensorflow },
  { label: 'Python', icon: SiPython },
  { label: 'Docker', icon: SiDocker },
  { label: 'Kubernetes', icon: SiKubernetes },
  { label: 'AWS', icon: SiAmazonaws },
  { label: 'NVIDIA', icon: SiNvidia },
  { label: 'OpenAI', icon: SiOpenai },
  { label: 'HuggingFace', icon: SiHuggingface },
  { label: 'LangChain', icon: SiLangchain },
]

export default function TechStack() {
  return (
    <section id="tech" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_80%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {items.map(({ label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-800/40 backdrop-blur-sm px-4 py-3 hover:border-cyan-400/30"
            >
              <Icon className="w-6 h-6 text-slate-200" />
              <span className="text-slate-300 text-sm">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
