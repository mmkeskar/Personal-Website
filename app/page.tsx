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
    { text: 'MARL', x: '10%', y: '15%' },
    { text: 'Computer Vision', x: '75%', y: '25%' },
    { text: 'Robotics', x: '15%', y: '70%' },
    { text: 'Big Data', x: '70%', y: '75%' },
    { text: 'Probability & Stats', x: '45%', y: '48%' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-16 md:gap-24"
    >
      {/* Hero / Profile Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8">
        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
              Maitrayee Keskar
            </h1>
            <p className="font-sans text-lg md:text-xl font-medium text-accent mt-3">
              Ph.D. Student in Electrical Engineering and Computer Science (EECS)
            </p>
            <p className="font-sans text-sm md:text-base text-text-muted font-medium mt-1">
              University of California, Merced (Starting August 2026)
            </p>
          </div>

          <div className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl">
            <p className="mb-4">
              I am a doctoral researcher driven by the intersection of foundational mathematics and autonomy. Under the mentorship of <strong>Prof. Ross Greer</strong>, my work at UC Merced targets coordination and intent recognition inside complex multi-agent frameworks.
            </p>
            <p>
              By bridging a mathematical background in <strong>Probability and Statistics</strong> with engineering experience developing large-scale distributed analytics at <strong>Balbix</strong>, I design resilient systems capable of joint perception and decision-making—advancing multi-agent reinforcement learning, computer vision, and dynamic robot control.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/research"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-accent text-white rounded-xl hover:bg-accent-light transition-all shadow-md hover:shadow-lg"
            >
              Explore Research <ChevronRight size={16} />
            </Link>
            <Link
              href="/publications"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-border-color rounded-xl hover:bg-accent/5 hover:text-accent transition-all bg-background"
            >
              Publications
            </Link>
          </div>
        </motion.div>

        {/* Abstract Interactive / CSS Visual Graphic */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 relative h-[360px] md:h-[400px] flex items-center justify-center"
        >
          {/* Main Visual Node */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full glass border border-accent/20 shadow-lg flex items-center justify-center p-6 bg-gradient-to-tr from-accent/5 to-primary/5">
            <div className="text-center">
              <span className="font-serif text-3xl md:text-4xl font-extrabold text-primary">MK</span>
              <p className="font-sans text-[10px] text-text-muted uppercase tracking-widest mt-2 font-bold">
                EECS Research
              </p>
            </div>

            {/* Orbiting Lines */}
            <div className="absolute inset-[-15px] border border-dashed border-border-color rounded-full animate-[spin_50s_linear_infinite]" />
            <div className="absolute inset-[-35px] border border-dashed border-accent/15 rounded-full animate-[spin_80s_linear_infinite_reverse]" />

            {/* Orbiting Small Nodes */}
            <div className="absolute top-[12%] right-[12%] w-4 h-4 bg-accent/20 rounded-full blur-[2px]" />
            <div className="absolute bottom-[20%] left-[8%] w-3 h-3 bg-primary/20 rounded-full blur-[1px]" />
          </div>

          {/* Floating Text Badges */}
          {floatingBadges.map((badge, idx) => (
            <motion.div
              key={badge.text}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + idx,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ left: badge.x, top: badge.y }}
              className="absolute px-3 py-1.5 rounded-xl text-xs font-semibold glass border border-border-color shadow-sm text-primary font-sans cursor-default hover:border-accent/30"
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
              timeline: 'August 2026 – Present',
              details: 'Advisor: Prof. Ross Greer. Research focusing on MARL, trajectory intent recognition, and multi-robot coordination.',
              icon: <GraduationCap className="text-accent" size={24} />,
            },
            {
              degree: 'M.S. in ECE',
              school: 'University of California, San Diego',
              timeline: 'Completed',
              details: 'Intelligent Systems, Robotics, and Control. Developed vision-first trajectory forecasting networks and keypoint models.',
              icon: <GraduationCap className="text-accent" size={24} />,
            },
            {
              degree: 'B.S. in Probability & Stats',
              school: 'University of California, San Diego',
              timeline: 'Completed | Cum Laude',
              details: 'Minor in Computer Science. Grounded in statistical inference, modeling proofs, and algorithmic foundations.',
              icon: <GraduationCap className="text-accent" size={24} />,
            },
          ].map((edu, idx) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="card border border-border-color glass flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-accent/10">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">{edu.degree}</h3>
                  <span className="font-sans text-xs text-text-muted font-medium">{edu.school}</span>
                </div>
              </div>
              <p className="font-sans text-xs font-semibold text-accent uppercase tracking-wider">{edu.timeline}</p>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Achievements & Quick Facts */}
      <section className="flex flex-col gap-8 bg-accent/[0.02] p-8 rounded-3xl border border-border-color glass">
        <motion.h2 variants={itemVariants} className="font-serif text-2xl md:text-3xl font-bold text-primary">
          Key Milestones
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            {
              label: 'Waymo Challenge',
              title: 'Top-15 Internationally',
              desc: 'Placed in the elite tier in the Waymo End-to-End Trajectory challenge with MTR-VP visual network.',
              icon: <Award className="text-accent mx-auto md:mx-0" size={28} />,
            },
            {
              label: 'Publications',
              title: 'IEEE RA-L First Author',
              desc: 'Published anchor-free multi-target keypoint localization models yielding 78.2% AP scores.',
              icon: <BookOpen className="text-accent mx-auto md:mx-0" size={28} />,
            },
            {
              label: 'Enterprise AI',
              title: 'Scale Infrastructure',
              desc: 'Designed Cassandra database pipelines and PySpark ETL systems parsing 500k+ assets at Balbix.',
              icon: <Briefcase className="text-accent mx-auto md:mx-0" size={28} />,
            },
          ].map((milestone) => (
            <motion.div key={milestone.title} variants={itemVariants} className="flex flex-col gap-2">
              {milestone.icon}
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-text-muted mt-2">
                {milestone.label}
              </span>
              <h3 className="font-serif text-lg font-bold text-primary">{milestone.title}</h3>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                {milestone.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Panel */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 border border-accent/20 rounded-2xl bg-gradient-to-r from-accent/[0.03] to-primary/[0.03] glass">
        <div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Let&apos;s Connect</h2>
          <p className="font-sans text-sm md:text-base text-text-muted mt-1">
            Interested in collaboration, multi-agent frameworks, or robotics research?
          </p>
        </div>
        <a
          href="mailto:mkeskar@ucmerced.edu"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-accent text-white rounded-xl hover:bg-accent-light transition-all shadow-md hover:shadow-lg shrink-0"
        >
          <Mail size={16} /> Send Email
        </a>
      </section>
    </motion.div>
  );
}
