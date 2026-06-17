'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, ChevronRight, Mail, Github, Linkedin, Camera, Share2, Compass } from 'lucide-react';

// Faint math symbols watermark background
const MathWatermark = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
    <div className="math-watermark" style={{ top: '12%', left: '4%', transform: 'rotate(-15deg)', fontSize: '64px' }}>∫</div>
    <div className="math-watermark" style={{ top: '25%', right: '6%', transform: 'rotate(18deg)', fontSize: '50px' }}>P(A|B)</div>
    <div className="math-watermark" style={{ top: '48%', left: '8%', transform: 'rotate(10deg)', fontSize: '72px' }}>∑</div>
    <div className="math-watermark" style={{ top: '65%', right: '12%', transform: 'rotate(-25deg)', fontSize: '54px' }}>∇</div>
    <div className="math-watermark" style={{ top: '78%', left: '6%', transform: 'rotate(12deg)', fontSize: '60px' }}>E[X]</div>
    <div className="math-watermark" style={{ top: '88%', right: '5%', transform: 'rotate(-12deg)', fontSize: '48px' }}>σ²</div>
  </div>
);

// Organic hand-drawn SVG dividers
const WobblyDivider = ({ variant = 1 }: { variant?: number }) => {
  let path = "M0 10 Q150 4, 300 10 T600 10";
  if (variant === 2) path = "M0 10 Q120 14, 280 8 T600 12";
  if (variant === 3) path = "M0 8 C150 14, 250 2, 400 10 T600 8";
  return (
    <div className="py-8 md:py-12 pointer-events-none select-none z-10 relative">
      <svg className="hand-drawn-divider" viewBox="0 0 600 20" style={{ height: '20px', width: '100%' }}>
        <path d={path} />
      </svg>
    </div>
  );
};

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 150,
      },
    },
  };

  const floatingBadges = [
    { text: 'MARL', x: '12%', y: '16%' },
    { text: 'Computer Vision', x: '65%', y: '14%' },
    { text: 'Robotics', x: '10%', y: '72%' },
    { text: 'Big Data', x: '72%', y: '70%' },
    { text: 'Probability & Stats', x: '38%', y: '46%' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col relative hero-glow"
    >
      {/* Background Math Texture */}
      <MathWatermark />

      {/* Hero / Profile Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6 relative z-10">
        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
              Maitrayee Keskar
            </h1>
            <p className="font-sans text-base md:text-lg font-semibold text-accent mt-3">
              Ph.D. Student in EECS
            </p>
            <p className="font-sans text-[11px] text-accent mt-1.5 font-bold tracking-wider uppercase">
              University of California, Merced (Starting August 2026)
            </p>
          </div>

          <div className="font-sans text-base md:text-lg leading-relaxed max-w-2xl flex flex-col gap-4">
            <p>
              Hi! I&apos;m <strong>Mai</strong>, a probability-and-statistics major turned autonomous driving researcher.
            </p>
            <p>
              I&apos;m starting my PhD at UC Merced with <strong>Prof. Ross Greer</strong>, working on trajectory prediction, motion planning, V2X communication, and safety-critical autonomous systems. I hold an M.S. and B.S. from UC San Diego, where I worked with <strong>Prof. Mohan Trivedi</strong>, <strong>Prof. Parinaz Naghizadeh</strong>, and <strong>Prof. Nikolay Atanasov</strong>. A highlight: our two-person team&apos;s <strong>top-15 finish</strong> in the Waymo Open End-to-End Driving Challenge.
            </p>
            <p>
              I&apos;m drawn to problems where mathematics meets real-world decision-making under uncertainty, which is basically all of driving.
            </p>
            <p>
              When I&apos;m not writing proofs or training models, you&apos;ll find me reading, painting, or doing nail art.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-2 font-sans">
            <Link
              href="/research"
              className="btn-primary flex items-center gap-2 font-semibold"
            >
              Explore Research <ChevronRight size={16} />
            </Link>
            <Link
              href="/publications"
              className="btn-primary flex items-center gap-2 font-semibold"
            >
              Publications
            </Link>
          </div>
        </motion.div>

        {/* Abstract Coordinate Trajectory Grid Illustration */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 relative h-[380px] w-full flex items-center justify-center"
        >
          {/* Main Visual Card - Styled as a sketchbook page coordinate grid */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 bg-white border border-border-color rounded-2xl shadow-md p-4 flex items-center justify-center overflow-hidden">
            {/* Geometric SVG Drawing Grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
              {/* Back grid lines */}
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(28, 27, 26, 0.04)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Math watermarks in grid */}
              <text x="35" y="70" className="fill-current text-primary opacity-5 font-mono text-[10px]" style={{ fontFamily: 'monospace' }}>
                ẋ = f(x, u)
              </text>
              <text x="210" y="145" className="fill-current text-primary opacity-5 font-mono text-[10px]" style={{ fontFamily: 'monospace' }}>
                P(A|B)
              </text>
              <text x="180" y="60" className="fill-current text-primary opacity-5 font-mono text-[10px]" style={{ fontFamily: 'monospace' }}>
                J = min ∑ ||e_t||²
              </text>

              {/* Axes */}
              {/* Longitudinal Axis Y */}
              <path d="M 60,280 L 60,30" fill="none" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 56,40 L 60,30 L 64,40" fill="none" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="70" y="45" className="fill-current text-text-muted font-sans text-[9px] font-bold tracking-wider uppercase">
                Y (Longitudinal)
              </text>

              {/* Lateral Axis X */}
              <path d="M 40,260 L 270,260" fill="none" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 260,256 L 270,260 L 260,264" fill="none" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="200" y="275" className="fill-current text-text-muted font-sans text-[9px] font-bold tracking-wider uppercase">
                X (Lateral)
              </text>

              {/* Multi-modal predicted trajectories */}
              {/* Green cooperative prediction path */}
              <path d="M 60,260 C 90,260 180,240 250,210" fill="none" stroke="#2EC4B6" strokeWidth="1.5" strokeDasharray="4 4" />
              
              {/* Coral/Orange prediction path */}
              <path d="M 60,260 C 80,200 130,150 170,110" fill="none" stroke="#FF6F61" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Planned Trajectory (Main Purple path) */}
              <path d="M 60,260 C 100,260 140,180 230,120" fill="none" stroke="#7C5CFC" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Heading vector dots along the planned trajectory */}
              <circle cx="95" cy="250" r="3" fill="#7C5CFC" />
              <circle cx="130" cy="225" r="3" fill="#7C5CFC" />
              <circle cx="165" cy="190" r="3" fill="#7C5CFC" />
              <circle cx="198" cy="155" r="3" fill="#7C5CFC" />

              {/* Coordinate Origin Vehicle marker */}
              <rect x="52" y="252" width="16" height="16" rx="3" fill="var(--card-bg)" stroke="#7C5CFC" strokeWidth="2" transform="rotate(-15 60 260)" />
              <line x1="60" y1="260" x2="65" y2="245" stroke="#7C5CFC" strokeWidth="2" />
            </svg>

            {/* Active Nodes positioned absolutely */}
            {/* Vision Node */}
            <motion.div
              style={{ left: '42%', top: '50%' }}
              className="absolute flex items-center gap-2 bg-white border border-border-color rounded-xl px-2.5 py-1.5 shadow-sm group hover:border-[#7C5CFC] transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-6 h-6 rounded-lg bg-[#7C5CFC]/10 border border-[#7C5CFC]/25 flex items-center justify-center text-[#7C5CFC]">
                <Camera size={12} />
              </div>
              <span className="font-sans text-[10px] font-bold text-primary">Vision</span>
            </motion.div>

            {/* MARL Node */}
            <motion.div
              style={{ left: '55%', top: '74%' }}
              className="absolute flex items-center gap-2 bg-white border border-border-color rounded-xl px-2.5 py-1.5 shadow-sm group hover:border-[#2EC4B6] transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-6 h-6 rounded-lg bg-[#2EC4B6]/10 border border-[#2EC4B6]/25 flex items-center justify-center text-[#2EC4B6]">
                <Share2 size={12} />
              </div>
              <span className="font-sans text-[10px] font-bold text-primary">MARL</span>
            </motion.div>

            {/* Planning Node */}
            <motion.div
              style={{ left: '68%', top: '28%' }}
              className="absolute flex items-center gap-2 bg-white border border-border-color rounded-xl px-2.5 py-1.5 shadow-sm group hover:border-[#FF6F61] transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-6 h-6 rounded-lg bg-[#FF6F61]/10 border border-[#FF6F61]/25 flex items-center justify-center text-[#FF6F61]">
                <Compass size={12} />
              </div>
              <span className="font-sans text-[10px] font-bold text-primary">Planning</span>
            </motion.div>
          </div>

          {/* Floating Text Badges - Positioned cleanly in corners to prevent overlap */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-2 left-2 px-3 py-1 rounded-xl text-[10px] font-bold border border-border-color bg-white shadow-sm text-text-muted font-sans cursor-default"
          >
            #ProbabilityStats
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-4 right-2 px-3 py-1 rounded-xl text-[10px] font-bold border border-border-color bg-white shadow-sm text-text-muted font-sans cursor-default"
          >
            #ComputerVision
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-4 left-4 px-3 py-1 rounded-xl text-[10px] font-bold border border-border-color bg-white shadow-sm text-text-muted font-sans cursor-default"
          >
            #Robotics
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -4.5, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-6 right-4 px-3 py-1 rounded-xl text-[10px] font-bold border border-border-color bg-white shadow-sm text-text-muted font-sans cursor-default"
          >
            #MARL
          </motion.div>
        </motion.div>
      </section>

      {/* Hand-drawn Divider 1 */}
      <WobblyDivider variant={1} />

      {/* Education & Qualifications */}
      <section className="flex flex-col gap-8 relative z-10">
        <motion.h2 variants={itemVariants} className="section-title">
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              degree: 'Ph.D. in EECS',
              school: 'University of California, Merced',
              timeline: 'Starting August 2026',
              details: 'Advisor: Prof. Ross Greer. Focusing on multi-agent reinforcement learning, collaborative perception, and intent forecasting.',
              icon: <GraduationCap size={24} />,
              status: 'starting',
              statusLabel: 'Starting August 2026',
            },
            {
              degree: 'M.S. in ECE',
              school: 'University of California, San Diego',
              timeline: 'Completed',
              details: 'Intelligent Systems, Robotics, & Control. Developed Vision Transformer layouts and anchor-free object detectors.',
              icon: <GraduationCap size={24} />,
              status: 'completed',
              statusLabel: 'Completed',
            },
            {
              degree: 'B.S. in Probability & Stats',
              school: 'University of California, San Diego',
              timeline: 'Completed | Cum Laude',
              details: 'Minor in Computer Science. Rigorous foundations in statistical inference, modeling proofs, and algorithmic complexity.',
              icon: <GraduationCap size={24} />,
              status: 'cum_laude',
              statusLabel: 'Cum Laude',
            },
          ].map((edu) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="card flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl border flex items-center justify-center"
                  style={{
                    backgroundColor:
                      edu.status === 'starting'
                        ? 'rgba(124, 92, 252, 0.08)'
                        : edu.status === 'cum_laude'
                        ? 'rgba(244, 169, 64, 0.08)'
                        : 'rgba(46, 196, 182, 0.08)',
                    borderColor:
                      edu.status === 'starting'
                        ? 'rgba(124, 92, 252, 0.15)'
                        : edu.status === 'cum_laude'
                        ? 'rgba(244, 169, 64, 0.15)'
                        : 'rgba(46, 196, 182, 0.15)',
                    color:
                      edu.status === 'starting'
                        ? '#5a3edb'
                        : edu.status === 'cum_laude'
                        ? '#c47c0e'
                        : '#1e9e92',
                  }}
                >
                  {edu.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">{edu.degree}</h3>
                  <span className="font-sans text-xs text-text-muted font-medium">{edu.school}</span>
                </div>
              </div>
              
              <span
                className="text-[9px] font-sans font-bold uppercase px-2.5 py-1 rounded-full self-start"
                style={{
                  backgroundColor:
                    edu.status === 'starting'
                      ? 'rgba(124, 92, 252, 0.08)'
                      : edu.status === 'cum_laude'
                      ? 'rgba(244, 169, 64, 0.08)'
                      : 'rgba(46, 196, 182, 0.08)',
                  color:
                    edu.status === 'starting'
                      ? '#5a3edb'
                      : edu.status === 'cum_laude'
                      ? '#c47c0e'
                      : '#1e9e92',
                  borderColor:
                    edu.status === 'starting'
                      ? 'rgba(124, 92, 252, 0.15)'
                      : edu.status === 'cum_laude'
                      ? 'rgba(244, 169, 64, 0.15)'
                      : 'rgba(46, 196, 182, 0.15)',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                }}
              >
                {edu.statusLabel}
              </span>
              <p className="font-sans text-sm text-text-muted leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hand-drawn Divider 2 */}
      <WobblyDivider variant={2} />

      {/* Core Achievements & Quick Facts */}
      <section className="flex flex-col gap-10 bg-white p-8 md:p-10 rounded-2xl border border-border-color glass relative z-10">
        <motion.h2 variants={itemVariants} className="font-serif text-2xl md:text-3xl font-bold text-primary">
          Key Milestones
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            {
              label: 'WAYMO CHALLENGE',
              title: 'Top-15 Internationally',
              desc: 'Placed in the elite global tier in the Waymo End-to-End Trajectory prediction challenge using ViT models.',
              icon: <Award className="mx-auto md:mx-0" size={26} />,
              color: '#7C5CFC',
            },
            {
              label: 'PUBLICATIONS',
              title: 'IEEE RA-L First Author',
              desc: 'Published anchor-free keypoint detection models yielding 78.2% AP score on the ApolloCar3D dataset.',
              icon: <BookOpen className="mx-auto md:mx-0" size={26} />,
              color: '#FF6F61',
            },
            {
              label: 'ENTERPRISE AI',
              title: 'Scale Infrastructure',
              desc: 'Designed event processing engines and Cassandra state structures parsing 500k+ pipelines at Balbix.',
              icon: <Briefcase className="mx-auto md:mx-0" size={26} />,
              color: '#F4A940',
            },
          ].map((milestone) => (
            <motion.div key={milestone.title} variants={itemVariants} className="flex flex-col gap-2 font-sans">
              <div
                className="w-11 h-11 rounded-xl border flex items-center justify-center mx-auto md:mx-0 shadow-sm"
                style={{
                  backgroundColor: '#f5f3ef',
                  borderColor: 'var(--border-color)',
                  color: milestone.color,
                }}
              >
                {milestone.icon}
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-wider mt-2"
                style={{ color: milestone.color }}
              >
                {milestone.label}
              </span>
              <h3 className="font-serif text-lg font-bold text-primary">{milestone.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {milestone.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hand-drawn Divider 3 */}
      <WobblyDivider variant={3} />

      {/* Connect & Collaborate Grid */}
      <section className="flex flex-col gap-6 relative z-10">
        <motion.h2 variants={itemVariants} className="section-title">
          Connect &amp; Collaborate
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/maitrayee-keskar-0a426a19a/"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="card border border-border-color p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/20 text-[#0077B5] group-hover:bg-[#0077B5]/20 transition-colors">
                <Linkedin size={20} />
              </div>
              <ChevronRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">LinkedIn</h3>
              <p className="text-xs text-text-muted mt-1 font-semibold">maitrayee-keskar-0a426a19a</p>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                Connect for research collaborations, academic networking, or professional opportunities.
              </p>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href="https://github.com/mmkeskar"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="card border border-border-color p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent/20 transition-colors">
                <Github size={20} />
              </div>
              <ChevronRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">GitHub</h3>
              <p className="text-xs text-text-muted mt-1 font-semibold">@mmkeskar</p>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                Browse codebase repositories, deep learning implementations, and MARL experiments.
              </p>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:mkeskar@ucmerced.edu"
            variants={itemVariants}
            className="card border border-border-color p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-[#FF6F61]/10 border border-[#FF6F61]/20 text-[#FF6F61] group-hover:bg-[#FF6F61]/20 transition-colors">
                <Mail size={20} />
              </div>
              <ChevronRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">Direct Email</h3>
              <p className="text-xs text-text-muted mt-1 font-semibold">mkeskar@ucmerced.edu</p>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                Inquire about research collaborations, lab operations, or request papers.
              </p>
            </div>
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
}
