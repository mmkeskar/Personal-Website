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
    location: 'San Jose, CA (Remote)',
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
    tags: ['Reinforcement Learning', 'Q-learning', 'Actor-Critic', 'Python', 'OpenAI Gym'],
  },
];

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
      className="flex flex-col gap-12"
    >
      {/* Header */}
      <section>
        <motion.span variants={itemVariants} className="text-xs font-sans font-bold tracking-wider text-accent uppercase block mb-2">
          Industry Impact
        </motion.span>
        <motion.h1 variants={itemVariants} className="title-xl font-serif text-primary">
          Professional Experience
        </motion.h1>
        <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          My time in the cybersecurity industry focused on scale, robustness, and applying machine learning to parse millions of signals. This engineering rigor directly informs my approach to research in decentralized autonomy and multi-agent operations.
        </motion.p>
      </section>

      {/* Experience Cards (Timeline layout) */}
      <section className="timeline-track pl-8 md:pl-12 flex flex-col gap-12 py-4">
        {experienceData.map((job) => (
          <motion.div
            key={job.role}
            variants={itemVariants}
            className="relative card border border-border-color bg-white p-6 md:p-8 flex flex-col gap-6"
          >
            {/* Timeline Node Icon */}
            <div className="timeline-node -left-[48px] md:-left-[61px]">
              <Briefcase size={14} />
            </div>

            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border-color pb-5 font-sans">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-border-color text-accent">
                  <Building size={20} />
                </div>
                <div>
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">
                    {job.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted mt-1 font-medium">
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
              <span className="text-xs md:text-sm font-bold text-accent px-3 py-1.5 rounded-xl bg-accent/5 border border-accent/10 self-start flex items-center gap-1.5">
                <Calendar size={14} /> {job.period}
              </span>
            </div>

            {/* Accomplishments */}
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-sm font-bold tracking-wider text-text-muted uppercase mb-1">
                Role &amp; Impact
              </h3>
              <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                {job.highlights}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 border-t border-border-color pt-4">
              {job.tags.map((tag) => (
                <span key={tag} className="tag text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Skills Page CTA */}
      <section>
        <motion.div
          variants={itemVariants}
          className="card border border-border-color bg-slate-50/50 glass p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">Interactive Skill Matrix</h3>
            <p className="font-sans text-sm text-text-muted mt-1">
              Explore how these industry languages and tools connect directly with my academic research frameworks.
            </p>
          </div>
          <Link
            href="/skills"
            className="flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-accent text-white rounded-xl hover:bg-accent-light transition-all shadow-md shrink-0 font-sans"
          >
            Open Skills Graph <ChevronRight size={16} />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
