import { motion } from 'framer-motion'
import { Github, Link2 } from 'lucide-react'

const projects = [
  {
    title: 'LLM-Powered Retrieval QA Platform',
    description: 'Domain-tuned RAG with hybrid search, structured retrieval, and observability. Reduced hallucinations by 42% and latency by 35%.',
    tech: ['Python', 'PyTorch', 'HuggingFace', 'FAISS', 'LangChain', 'OpenAI'],
    metrics: ['-42% hallucination', '-35% latency', '99.9% uptime'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'Real-time Vision Anomaly Detection',
    description: 'Edge-deployed CNN with quantization-aware training. Deployed on Jetson; 60 FPS with 92.3% F1 on imbalanced data.',
    tech: ['TensorRT', 'PyTorch', 'ONNX', 'Jetson', 'Weights & Biases'],
    metrics: ['92.3% F1', '60 FPS', '6W power'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'MLOps Pipeline & Feature Store',
    description: 'End-to-end CI/CD for ML with experiment tracking, model registry, and feature store. Cut iteration cycle by 50%.',
    tech: ['MLflow', 'Prefect', 'Docker', 'Kubernetes', 'AWS'],
    metrics: ['-50% cycle time', '+30% reproducibility'],
    links: { github: '#', demo: '#' },
  },
]

function Badge({ children }) {
  return (
    <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10 text-xs">{children}</span>
  )
}

function Metric({ children }) {
  return (
    <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 text-xs">{children}</span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(236,72,153,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl font-semibold text-white tracking-tight">Featured Projects</h2>
            <p className="text-slate-400 mt-2">Selected work with measurable outcomes.</p>
          </div>
          <a href="#" className="text-cyan-300 hover:text-white text-sm">View all</a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-slate-800/40 backdrop-blur-sm overflow-hidden hover:border-cyan-400/30"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white tracking-tight">{p.title}</h3>
                <p className="text-slate-400 mt-2 text-sm">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map(t => <Badge key={t}>{t}</Badge>)}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.metrics.map(m => <Metric key={m}>{m}</Metric>)}
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <a href={p.links.github} className="text-slate-300 hover:text-white flex items-center gap-1 text-sm"><Github className="w-4 h-4" /> Code</a>
                  <a href={p.links.demo} className="text-slate-300 hover:text-white flex items-center gap-1 text-sm"><Link2 className="w-4 h-4" /> Demo</a>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-fuchsia-500/80 via-cyan-400/80 to-blue-500/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
