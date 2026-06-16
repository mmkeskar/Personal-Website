'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, ChevronRight, Mail } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 120,
      },
    },
  };

  const floatingBadges = [
    { text: 'MARL', x: '12%', y: '18%' },
    { text: 'Computer Vision', x: '70%', y: '12%' },
    { text: 'Robotics', x: '8%', y: '72%' },
    { text: 'Big Data', x: '76%', y: '68%' },
    { text: 'Probability & Stats', x: '42%', y: '48%' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-16 md:gap-28"
    >
      {/* Hero / Profile Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8">
        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-gradient">Maitrayee Keskar</span>
            </h1>
            <p className="font-sans text-lg md:text-xl font-semibold text-accent-light mt-4 flex items-center gap-2">
              Ph.D. Student in EECS
            </p>
            <p className="font-sans text-sm md:text-base text-text-muted mt-1 font-semibold tracking-wide uppercase">
              University of California, Merced
            </p>
          </div>

          <div className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl flex flex-col gap-4">
            <p>
              I am a doctoral researcher exploring the intersection of **foundational mathematics** and **decentralized autonomy**. Under the mentorship of <strong className="text-white">Prof. Ross Greer</strong>, my doctoral research at UC Merced starting August 2026 centers on Multi-Agent Reinforcement Learning (MARL), trajectory planning, and intent recognition.
            </p>
            <p>
              By bridging a rigorous academic background in **Probability and Statistics** from UC San Diego with enterprise experience deploying high-performance distributed architectures at **Balbix**, I design resilient, self-organizing systems capable of joint perception and cooperative decision-making.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/research"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary-light transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
            >
              Explore Research <ChevronRight size={16} />
            </Link>
            <Link
              href="/publications"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-border-color rounded-xl hover:bg-white/5 hover:text-white transition-all bg-card-bg"
            >
              Publications
            </Link>
          </div>
        </motion.div>

        {/* Abstract High-Tech Interactive Graphic */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 relative h-[360px] md:h-[400px] flex items-center justify-center"
        >
          {/* Main Visual Node */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full glass border border-primary/20 shadow-lg flex items-center justify-center p-6 bg-gradient-to-tr from-primary/5 to-accent/5">
            <div className="text-center z-10">
              <span className="font-serif text-3xl md:text-4xl font-extrabold text-white tracking-wider">MK</span>
              <p className="font-sans text-[9px] text-accent font-bold tracking-widest mt-2 uppercase">
                Autonomy Lab
              </p>
            </div>

            {/* Glowing inner rings */}
            <div className="absolute inset-[10px] rounded-full border border-primary/10 animate-[pulse_3s_infinite]" />

            {/* Orbiting Lines */}
            <svg className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] pointer-events-none opacity-40">
              <circle cx="50%" cy="50%" r="48%" fill="none" stroke="url(#indigo-cyan)" strokeWidth="1" strokeDasharray="4 6" className="animate-[spin_40s_linear_infinite]" />
              <circle cx="50%" cy="50%" r="42%" fill="none" stroke="url(#indigo-cyan)" strokeWidth="1" strokeDasharray="40 120" className="animate-[spin_20s_linear_infinite_reverse]" />
              <circle cx="50%" cy="50%" r="35%" fill="none" stroke="url(#indigo-cyan)" strokeWidth="1.5" className="opacity-10" />
              <defs>
                <linearGradient id="indigo-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
            </svg>

            {/* Orbiting Small Nodes */}
            <div className="absolute top-[8%] right-[20%] w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_#06B6D4] animate-pulse" />
            <div className="absolute bottom-[20%] left-[12%] w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#818CF8]" />
            <div className="absolute bottom-[10%] right-[32%] w-2 h-2 bg-accent-purple rounded-full shadow-[0_0_8px_#C084FC] animate-ping" />
          </div>

          {/* Floating Text Badges */}
          {floatingBadges.map((badge, idx) => (
            <motion.div
              key={badge.text}
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5 + idx,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ left: badge.x, top: badge.y }}
              className="absolute px-3 py-1.5 rounded-xl text-xs font-semibold glass border border-white/5 shadow-md text-foreground/90 font-sans cursor-default hover:border-primary/40 transition-colors bg-slate-900/60"
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
              icon: <GraduationCap className="text-primary" size={24} />,
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
              icon: <GraduationCap className="text-accent-purple" size={24} />,
            },
          ].map((edu, idx) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="card border border-white/5 glass flex flex-col gap-4 bg-slate-900/30"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">{edu.degree}</h3>
                  <span className="font-sans text-xs text-text-muted font-medium">{edu.school}</span>
                </div>
              </div>
              <p className="font-sans text-xs font-bold text-primary-light uppercase tracking-wider">{edu.timeline}</p>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Achievements & Quick Facts */}
      <section className="flex flex-col gap-10 bg-slate-900/20 p-8 md:p-10 rounded-3xl border border-white/5 glass">
        <motion.h2 variants={itemVariants} className="font-serif text-2xl md:text-3xl font-bold text-white relative">
          Key Milestones
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            {
              label: 'Waymo Challenge',
              title: 'Top-15 Internationally',
              desc: 'Placed in the elite global tier in the Waymo End-to-End Trajectory prediction competition using ViT models.',
              icon: <Award className="text-primary mx-auto md:mx-0" size={28} />,
            },
            {
              label: 'Publications',
              title: 'IEEE RA-L First Author',
              desc: 'Published anchor-free keypoint detection models yielding 78.2% AP score on the ApolloCar3D dataset.',
              icon: <BookOpen className="text-accent mx-auto md:mx-0" size={28} />,
            },
            {
              label: 'Enterprise AI',
              title: 'Scale Infrastructure',
              desc: 'Designed event processing engines and Cassandra state structures parsing 500k+ pipelines at Balbix.',
              icon: <Briefcase className="text-accent-purple mx-auto md:mx-0" size={28} />,
            },
          ].map((milestone) => (
            <motion.div key={milestone.title} variants={itemVariants} className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mx-auto md:mx-0">
                {milestone.icon}
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-text-muted mt-2">
                {milestone.label}
              </span>
              <h3 className="font-serif text-lg font-bold text-white">{milestone.title}</h3>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                {milestone.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Panel */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 border border-white/10 rounded-3xl bg-gradient-to-r from-primary/5 to-accent/5 glass">
        <div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-white">Let&apos;s Collaborate</h2>
          <p className="font-sans text-sm md:text-base text-text-muted mt-1">
            Interested in multi-agent reinforcement learning, computer vision, or dynamic robot systems?
          </p>
        </div>
        <a
          href="mailto:mkeskar@ucmerced.edu"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-accent text-slate-900 rounded-xl hover:bg-accent-light hover:-translate-y-0.5 transition-all shadow-md shadow-accent/10 hover:shadow-accent/25 shrink-0"
        >
          <Mail size={16} /> Contact Email
        </a>
      </section>
    </motion.div>
  );
}
