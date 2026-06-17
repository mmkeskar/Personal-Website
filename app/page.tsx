'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, ChevronRight, Mail, Github, Linkedin } from 'lucide-react';

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
      className="flex flex-col gap-16 md:gap-24"
    >
      {/* Hero / Profile Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6">
        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
              Maitrayee Keskar
            </h1>
            <p className="font-sans text-lg md:text-xl font-semibold text-accent mt-3">
              Ph.D. Student in EECS
            </p>
            <p className="font-sans text-xs md:text-sm text-text-muted mt-1.5 font-bold tracking-wider uppercase">
              University of California, Merced (Starting August 2026)
            </p>
          </div>

          <div className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl flex flex-col gap-4">
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
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-accent text-white rounded-xl hover:bg-accent-light transition-all shadow-sm shadow-accent/10 hover:-translate-y-0.5"
            >
              Explore Research <ChevronRight size={16} />
            </Link>
            <Link
              href="/publications"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-border-color rounded-xl hover:bg-slate-50 transition-all bg-card-bg text-primary-light"
            >
              Publications
            </Link>
          </div>
        </motion.div>

        {/* Abstract Minimalist Geometric Graphic */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 relative h-[340px] md:h-[380px] flex items-center justify-center"
        >
          {/* Main Visual Node */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl glass border border-border-color shadow-md flex items-center justify-center p-6 bg-white">
            <div className="text-center z-10">
              <span className="font-serif text-3xl md:text-4xl font-bold text-primary tracking-tight">MK</span>
              <p className="font-sans text-[10px] text-text-muted font-bold tracking-widest mt-1 uppercase">
                Autonomy Lab
              </p>
            </div>

            {/* Geometric SVG Drawing Grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              {/* Circular grids */}
              <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="3 4" />
              <circle cx="50%" cy="50%" r="30%" fill="none" stroke="#64748B" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="10 5" />
              
              {/* Dynamic trajectory lines */}
              <path d="M 30,30 Q 120,60 150,150" fill="none" stroke="#2563EB" strokeWidth="1.5" />
              <path d="M 220,220 Q 150,200 90,90" fill="none" stroke="#64748B" strokeWidth="1" />
            </svg>

            {/* Orbiting Small Nodes */}
            <div className="absolute top-[10%] right-[25%] w-3 h-3 bg-accent rounded-full border-2 border-white shadow-sm" />
            <div className="absolute bottom-[22%] left-[15%] w-2 h-2 bg-[#64748B] rounded-full" />
            <div className="absolute bottom-[12%] right-[35%] w-2 h-2 bg-accent rounded-full border border-white" />
          </div>

          {/* Floating Text Badges */}
          {floatingBadges.map((badge, idx) => (
            <motion.div
              key={badge.text}
              initial={{ y: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 6 + idx,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ left: badge.x, top: badge.y }}
              className="absolute px-3 py-1.5 rounded-xl text-xs font-semibold glass border border-border-color shadow-sm text-foreground/80 font-sans cursor-default hover:border-accent/30 transition-colors bg-white/95"
            >
              {badge.text}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Education & Qualifications */}
      <section className="flex flex-col gap-8">
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
              icon: <GraduationCap className="text-accent" size={24} />,
            },
            {
              degree: 'M.S. in ECE',
              school: 'University of California, San Diego',
              timeline: 'Completed',
              details: 'Intelligent Systems, Robotics, & Control. Developed Vision Transformer layouts and anchor-free object detectors.',
              icon: <GraduationCap className="text-accent" size={24} />,
            },
            {
              degree: 'B.S. in Probability & Stats',
              school: 'University of California, San Diego',
              timeline: 'Completed | Cum Laude',
              details: 'Minor in Computer Science. Rigorous foundations in statistical inference, modeling proofs, and algorithmic complexity.',
              icon: <GraduationCap className="text-accent" size={24} />,
            },
          ].map((edu) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="card flex flex-col gap-4 bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-border-color">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">{edu.degree}</h3>
                  <span className="font-sans text-xs text-text-muted font-medium">{edu.school}</span>
                </div>
              </div>
              <p className="font-sans text-xs font-bold text-accent uppercase tracking-wider">{edu.timeline}</p>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Achievements & Quick Facts */}
      <section className="flex flex-col gap-10 bg-slate-50/50 p-8 md:p-10 rounded-2xl border border-border-color glass">
        <motion.h2 variants={itemVariants} className="font-serif text-2xl md:text-3xl font-bold text-primary">
          Key Milestones
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            {
              label: 'Waymo Challenge',
              title: 'Top-15 Internationally',
              desc: 'Placed in the elite global tier in the Waymo End-to-End Trajectory prediction challenge using ViT models.',
              icon: <Award className="text-accent mx-auto md:mx-0" size={26} />,
            },
            {
              label: 'Publications',
              title: 'IEEE RA-L First Author',
              desc: 'Published anchor-free keypoint detection models yielding 78.2% AP score on the ApolloCar3D dataset.',
              icon: <BookOpen className="text-accent mx-auto md:mx-0" size={26} />,
            },
            {
              label: 'Enterprise AI',
              title: 'Scale Infrastructure',
              desc: 'Designed event processing engines and Cassandra state structures parsing 500k+ pipelines at Balbix.',
              icon: <Briefcase className="text-accent mx-auto md:mx-0" size={26} />,
            },
          ].map((milestone) => (
            <motion.div key={milestone.title} variants={itemVariants} className="flex flex-col gap-2 font-sans">
              <div className="w-11 h-11 rounded-xl bg-white border border-border-color flex items-center justify-center mx-auto md:mx-0 shadow-sm">
                {milestone.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted mt-2">
                {milestone.label}
              </span>
              <h3 className="font-serif text-lg font-bold text-primary">{milestone.title}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {milestone.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connect & Collaborate Grid */}
      <section className="flex flex-col gap-6">
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
            className="card border border-border-color bg-white hover:border-accent/30 p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-[#0077B5]/5 border border-[#0077B5]/15 text-[#0077B5] group-hover:bg-[#0077B5]/10 transition-colors">
                <Linkedin size={20} />
              </div>
              <ChevronRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">LinkedIn</h3>
              <p className="text-xs text-text-muted mt-1 font-semibold">maitrayee-keskar-0a426a19a</p>
              <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
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
            className="card border border-border-color bg-white hover:border-accent/30 p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-slate-900/5 border border-slate-900/15 text-slate-900 group-hover:bg-slate-900/10 transition-colors">
                <Github size={20} />
              </div>
              <ChevronRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">GitHub</h3>
              <p className="text-xs text-text-muted mt-1 font-semibold">@mmkeskar</p>
              <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                Browse codebase repositories, deep learning implementations, and MARL experiments.
              </p>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:mkeskar@ucmerced.edu"
            variants={itemVariants}
            className="card border border-border-color bg-white hover:border-accent/30 p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-accent/5 border border-accent/15 text-accent group-hover:bg-accent/10 transition-colors">
                <Mail size={20} />
              </div>
              <ChevronRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">Direct Email</h3>
              <p className="text-xs text-text-muted mt-1 font-semibold">mkeskar@ucmerced.edu</p>
              <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                Inquire about research collaborations, lab operations, or request papers.
              </p>
            </div>
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
}
