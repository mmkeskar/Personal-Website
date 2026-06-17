'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string;
  tags: string[];
}

const experienceData: Job[] = [
  {
    company: 'Balbix',
    role: 'AI Software Engineer',
    period: 'July 2022 – August 2024',
    location: 'San Jose, CA',
    highlights:
      "Balbix is a cybersecurity platform that helps enterprises understand and reduce their breach risk. As a software engineer on the AI team, I built the data infrastructure that made this possible at scale: PySpark pipelines processing 500k+ real-time vulnerability feeds, Airflow-orchestrated workflows cataloging risk attributes across 2M+ end-of-life software packages, and high-throughput Cassandra event architectures tracking state changes across 5M+ customer endpoints. I also built the statistical models underneath the product's risk predictions, mapping CVSS scores and CWE classifications to organizational breach likelihood, and presented these frameworks directly to the CTO and VP of Engineering. Working at production scale for two years gave me an engineering discipline that directly shapes how I approach research systems today.",
    tags: ['PySpark', 'Cassandra', 'Kubernetes', 'Airflow', 'Python', 'AWS', 'Statistical Modeling'],
  },
  {
    company: 'Balbix',
    role: 'Engineering Intern',
    period: 'June 2021 – September 2021',
    location: 'San Jose, CA',
    highlights:
      "During my internship, I built reinforcement learning models (Q-learning and Actor-Critic) in custom OpenAI Gym environments to simulate how attackers move laterally through corporate networks, and used those simulations to model optimal defense strategies. This was my first exposure to RL in a practical setting, and it planted the seed for the multi-agent RL work I would later pursue in graduate school.",
    tags: ['Reinforcement Learning', 'Q-Learning', 'Actor-Critic', 'Python', 'OpenAI Gym'],
  },
];

// Wobbly SVG dividers
const WobblyDivider = ({ variant = 1 }: { variant?: number }) => {
  let path = "M0 10 Q150 4, 300 10 T600 10";
  if (variant === 2) path = "M0 10 Q120 14, 280 8 T600 12";
  if (variant === 3) path = "M0 8 C150 14, 250 2, 400 10 T600 8";
  return (
    <div className="py-8 pointer-events-none select-none z-10 relative">
      <svg className="hand-drawn-divider" viewBox="0 0 600 20" style={{ height: '20px', width: '100%' }}>
        <path d={path} />
      </svg>
    </div>
  );
};

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, damping: 25, stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col relative glow-experience-header"
    >
      {/* Header */}
      <section className="relative z-10">
        <motion.span
          variants={itemVariants}
          className="text-[11px] font-sans font-bold tracking-wider text-accent uppercase block mb-2"
          style={{ color: '#F4A940' }}
        >
          INDUSTRY IMPACT
        </motion.span>
        <motion.h1 variants={itemVariants} className="title-xl font-serif text-primary">
          Professional Experience
        </motion.h1>
        <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          My time in the cybersecurity industry focused on scale, robustness, and applying machine learning to parse millions of signals. This engineering rigor directly informs my approach to research in decentralized autonomy and multi-agent operations.
        </motion.p>
      </section>

      {/* Wobbly Divider */}
      <WobblyDivider variant={2} />

      {/* Experience Cards (Timeline layout) */}
      <section className="timeline-track pl-8 md:pl-12 flex flex-col gap-10 py-4 relative z-10">
        {[
          {
            ...experienceData[0],
            cardStyle: 'card-graph rotate-[1.2deg]',
            tape: <div className="absolute -top-2 left-6 w-16 washi-tape transform -rotate-6" />
          },
          {
            ...experienceData[1],
            cardStyle: 'card-postit rotate-[-1.5deg]',
            tape: <div className="absolute top-2 left-1/2 -translate-x-1/2 pushpin-accent" />
          }
        ].map((job) => (
          <motion.div
            key={job.role}
            variants={itemVariants}
            className={`relative card ${job.cardStyle} p-6 md:p-8 hover:rotate-0 hover:scale-[1.01] hover:shadow-md transition-all duration-200 flex flex-col gap-4 pt-10`}
          >
            {job.tape}
            {/* Timeline Node Icon */}
            <div className="timeline-node -left-[48px] md:-left-[61px]">
              <Briefcase size={14} />
            </div>

            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border-color pb-4 font-sans">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent animate-pulse" style={{ color: '#F4A940', borderColor: 'rgba(244, 169, 64, 0.2)', backgroundColor: 'rgba(244, 169, 64, 0.15)' }}>
                  <Building size={20} />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-primary">
                    {job.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted mt-1 font-medium">
                    <span className="text-primary font-semibold">
                      {job.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {job.location}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1.5 rounded-xl self-start flex items-center gap-1.5 border" style={{ color: '#F4A940', borderColor: 'rgba(244, 169, 64, 0.2)', backgroundColor: 'rgba(244, 169, 64, 0.12)' }}>
                <Calendar size={14} /> {job.period}
              </span>
            </div>

            {/* Accomplishments */}
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-sm font-bold tracking-wider text-text-muted uppercase mb-1">
                Role &amp; Impact
              </h3>
              <p className="font-sans text-sm md:text-base text-foreground leading-relaxed border-l-2 border-border-color pl-4 py-1 italic bg-[#f5f3ef]/30">
                {job.highlights}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 border-t border-border-color pt-4">
              {job.tags.map((tag) => (
                <span key={tag} className="tag tag-industry text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Skills Page CTA */}
      <section className="mt-8 relative z-10">
        <motion.div
          variants={itemVariants}
          className="card card-manila rotate-[-0.5deg] hover:rotate-0 hover:scale-[1.01] hover:shadow-md transition-all duration-200 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative pt-10"
        >
          <div className="absolute -top-2 left-6 w-16 washi-tape transform -rotate-3" />
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">Interactive Skill Matrix</h3>
            <p className="font-sans text-sm text-text-muted mt-1">
              Explore how these industry languages and tools connect directly with my academic research frameworks.
            </p>
          </div>
          <Link
            href="/skills"
            className="btn-primary flex items-center gap-2 font-semibold shrink-0"
          >
            Open Skills Graph <ChevronRight size={16} />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
