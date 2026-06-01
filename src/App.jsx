import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Cpu,
  Mail,
  Play,
  Radar,
  Terminal,
  Workflow,
} from 'lucide-react'

const accent = '#b6ff00'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    title: 'AI-Assisted Motion Capture Prototype',
    description:
      'Exploring markerless body tracking as a foundation for animation tools, movement analysis, and gameplay-driven AI behavior in Unity.',
    tags: ['C#', 'Unity', 'MediaPipe', 'Computer Vision'],
    icon: Radar,
  },
  {
    title: 'Entity AI State Machine Prototype',
    description:
      'A gameplay AI architecture study focused on entity states, decision flows, navigation, and reusable behavior patterns for Unity games.',
    tags: ['C#', 'Unity', 'NavMesh', 'State Machine'],
    icon: Workflow,
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <a
          href="#top"
          className="font-mono text-xs font-black uppercase tracking-[0.32em] text-white transition-colors hover:text-[#b6ff00]"
        >
          mdonegas.dev
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-[#b6ff00]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-start border-b border-zinc-800 px-5 pb-16 pt-28 md:min-h-[82vh] md:px-10 md:pb-20 md:pt-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_70%_20%,rgba(182,255,0,0.16),transparent_34%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-400"
        >
          <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-[#b6ff00]">
            Unity AI Development
          </span>
          <span>Unity / C# / Automation</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="max-w-6xl text-[clamp(3.7rem,12vw,11rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]"
        >
          AI Systems for Unity Games.
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-6 border-l border-zinc-700 pl-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl font-mono text-sm uppercase leading-7 tracking-[0.18em] text-zinc-400">
            Software developer focused on building artificial intelligence features, gameplay systems, and automation tools for Unity games.
          </p>

          <a
            href="#projects"
            className="group inline-flex w-fit items-center gap-3 border border-white px-6 py-4 font-mono text-xs font-black uppercase tracking-[0.24em] text-white transition-colors hover:border-[#b6ff00] hover:bg-[#b6ff00] hover:text-zinc-950"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="AI Gameplay Prototypes"
          copy="A portfolio of experiments and systems built around Unity AI, NPC behavior, navigation, state machines, and practical tools for game development."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{
        scale: 1.02,
        borderColor: accent,
        transition: { duration: 0.2 },
      }}
      className="group border border-zinc-800 bg-zinc-900 p-4 md:p-6"
    >
      <div className="relative aspect-video overflow-hidden border border-zinc-800 bg-zinc-950">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(182,255,0,0.12),transparent_38%),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_100%,28px_28px]" />
        <div className="absolute inset-6 border border-zinc-800" />
        <div className="absolute left-6 top-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          <Icon className="h-5 w-5 text-[#b6ff00]" />
          Video / GIF Slot
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-zinc-800 pt-5">
          <span className="font-mono text-xs uppercase tracking-[0.26em] text-zinc-500">
            Prototype 0{index + 1}
          </span>
          <Play className="h-7 w-7 text-white transition-colors group-hover:text-[#b6ff00]" />
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.04em] text-white md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-zinc-700 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-zinc-300 transition-colors group-hover:border-[#b6ff00] group-hover:text-[#b6ff00]"
            >
              [{tag}]
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function Footer() {
  return (
    <footer id="contact" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
            Available for Unity AI prototypes, gameplay systems, and automation tools
          </p>
          <h2 className="mt-6 text-[clamp(4rem,15vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-white">
            Let's Build.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 border border-zinc-800 md:grid-cols-3">
          <FooterLink icon={Terminal} label="GitHub" href="https://github.com/mdonegas" />
          <FooterLink
            icon={Cpu}
            label="LinkedIn"
            href="https://www.linkedin.com/in/marcelo-donega-306b3934/"
          />
          <FooterLink icon={Mail} label="E-mail" href="mailto:mdonegas@gmail.com" />
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group flex items-center justify-between border-b border-zinc-800 px-6 py-6 font-mono text-xs font-black uppercase tracking-[0.24em] text-zinc-300 transition-colors hover:bg-[#b6ff00] hover:text-zinc-950 md:border-b-0 md:border-r last:md:border-r-0"
    >
      <span className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        {label}
      </span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
    </a>
  )
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-120px' }}
      className="mb-16 max-w-4xl md:mb-24"
    >
      <motion.p
        variants={fadeUp}
        className="font-mono text-xs font-black uppercase tracking-[0.32em] text-[#b6ff00]"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-5 text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-white md:text-8xl"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="mt-8 max-w-2xl text-base leading-8 text-zinc-400"
      >
        {copy}
      </motion.p>
    </motion.div>
  )
}

export default App
