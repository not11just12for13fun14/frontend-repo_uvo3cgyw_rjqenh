import { motion } from 'framer-motion'

const timeline = [
  {
    date: '2023 — Present',
    role: 'Senior AI Engineer',
    company: 'Stealth AI Startup',
    bullets: [
      'Led LLM platform initiatives and production deployments',
      'Architected scalable inference and evaluation pipelines',
      'Mentored engineers on prompt engineering and retrieval systems',
    ],
  },
  {
    date: '2021 — 2023',
    role: 'Machine Learning Engineer',
    company: 'Tech Co.',
    bullets: [
      'Shipped CV models to edge devices with robust MLOps',
      'Established experiment tracking & model registry',
      'Reduced infra cost by 28% via optimization & autoscaling',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_80%_20%,rgba(56,189,248,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white tracking-tight mb-10">Experience & Achievements</h2>
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={t.date}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[9px] top-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)]" />
                <p className="text-sm text-slate-400">{t.date}</p>
                <h3 className="text-white font-medium mt-1">{t.role} · <span className="text-slate-300">{t.company}</span></h3>
                <ul className="mt-3 space-y-1 text-slate-300 text-sm list-disc list-inside">
                  {t.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
