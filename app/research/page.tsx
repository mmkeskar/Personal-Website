'use client';

import { motion } from 'framer-motion';
import { Microscope, User, Calendar, GraduationCap, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Lab {
  name: string;
  role: string;
  period: string;
  advisor: string;
  description: string;
  tracks?: {
    title: string;
    highlights: string;
  }[];
  highlights?: string;
  tags: string[];
}

const labsData: Lab[] = [
  {
    name: 'LISA Lab, UC San Diego',
    role: 'Graduate & Undergraduate Student Researcher',
    period: 'April 2021 – Present',
    advisor: 'Prof. Ross Greer (Mi3 Lab, UC Merced) & Prof. Mohan Trivedi (UCSD)',
    description: 'Investigating vision-first perception, camera metrics, and trajectory models for automated vehicles and intelligent transit.',
    tracks: [
      {
        title: 'Graduate Track (Joint with Mi3 Lab, UC Merced)',
        highlights:
          "Most autonomous driving systems depend on expensive, pre-built HD maps to plan safe trajectories. But maps go stale, they're costly to maintain, and they don't exist for every road. MTR-VP asks a different question: what if the car could plan entirely from what it sees? I designed a vision-first trajectory planning architecture that replaces HD-map inputs with learned visual representations from a Vision Transformer, fused through a cross-attention decoder that combines what the vehicle intends to do with what the camera observes. As a two-person team with Prof. Ross Greer, this work placed top-15 globally in the Waymo Open End-to-End Driving Challenge. A first-authored paper has been submitted to IEEE Robotics and Automation Letters.",
      },
      {
        title: 'Undergraduate Track',
        highlights:
          "Detecting a vehicle as a single bounding box discards a lot of useful information: which lights are on, where the wheels are, how the body is oriented. I adapted the anchor-free CenterNet architecture to jointly detect vehicles and their substructures (lights, wheels, windshields) as keypoints, building a custom detection head and loss function in PyTorch. The model achieved 78.2% AP on the ApolloCar3D dataset and was published as a first-author paper in IEEE Robotics and Automation Letters.",
      },
    ],
    tags: ['Computer Vision', 'Vision Transformers', 'Keypoint Detection', 'Trajectory Planning', 'PyTorch'],
  },
  {
    name: 'MINDS Lab, UC San Diego',
    role: 'Graduate Student Researcher',
    period: 'Jan. 2025 – Jan. 2026',
    advisor: 'Prof. Parinaz Naghizadeh',
    description: 'Formulating communication proofs and information boundaries for cooperative Multi-Agent Reinforcement Learning (MARL).',
    highlights:
      "When multiple agents need to learn together in a decentralized setting, how much do they need to communicate, and how does that communication affect how quickly they learn? I worked on building a theoretical framework that formally connects the structure of communication protocols to the sample complexity of multi-agent reinforcement learning algorithms. Using adapted Optimized Maximum Likelihood Estimation (OMLE) methods, I established bounds on how well an agent can observe its environment under limited bandwidth, with formal guarantees on how specific communication schemes affect training efficiency and convergence.",
    tags: ['MARL', 'Probability & Stats', 'Optimization', 'Sample Complexity'],
  },
  {
    name: 'Existential Robotics Lab (ERL), UC San Diego',
    role: 'Graduate Student Researcher',
    period: 'Nov. 2024 – Sep. 2025',
    advisor: 'Prof. Nikolay Atanasov',
    description: 'Benchmarking spatial coordination and communication structures in multi-robot environments.',
    highlights:
      "How should we evaluate whether lightweight, attention-based policies actually work for multi-robot coordination? I built the experimental validation framework for a self-attention-based MARL policy, implementing a Graph Attention Network baseline within the BenchMARL framework and designing a head-to-head evaluation suite with metrics like capture rate and inter-agent distance. This contributed to a co-authored submission to ICRA on model-free policy gradient methods for distributed multi-agent games.",
    tags: ['Graph Neural Networks', 'MARL', 'BenchMARL', 'TorchRL', 'Robotics'],
  },
];

export default function Research() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, damping: 25, stiffness: 120 },
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
          Academic Inquiry
        </motion.span>
        <motion.h1 variants={itemVariants} className="title-xl font-serif text-primary">
          Research Engagements
        </motion.h1>
        <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          My academic work spans perception layers, deep visual representations, statistical bounds, and decentralized multi-agent coordination. Below is a detailed record of my lab affiliations and contributions.
        </motion.p>
      </section>

      {/* Timeline Section */}
      <section className="timeline-track pl-8 md:pl-12 flex flex-col gap-12 py-4">
        {labsData.map((lab) => (
          <motion.div
            key={lab.name}
            variants={itemVariants}
            className="relative card border border-border-color bg-white p-6 md:p-8 flex flex-col gap-6"
          >
            {/* Timeline Node Icon */}
            <div className="timeline-node -left-[48px] md:-left-[61px]">
              <Microscope size={14} />
            </div>

            {/* Content Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 font-sans">
              <div>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">
                  {lab.name}
                </h2>
                <p className="text-sm md:text-base font-semibold text-accent mt-1">
                  {lab.role}
                </p>
              </div>
              <div className="flex flex-col md:items-end gap-1 shrink-0 text-xs text-text-muted font-medium">
                <span className="flex items-center gap-1.5 text-accent font-semibold">
                  <Calendar size={12} /> {lab.period}
                </span>
                <span className="flex items-center gap-1.5 md:justify-end mt-0.5">
                  <User size={12} /> Advisor: {lab.advisor}
                </span>
              </div>
            </div>

            {/* Lab Overview */}
            <p className="font-sans text-sm md:text-base text-foreground/80 border-l-2 border-border-color pl-4 py-1 italic bg-slate-50/50">
              {lab.description}
            </p>

            {/* Tracks (For LISA Lab) */}
            {lab.tracks && (
              <div className="flex flex-col gap-6">
                {lab.tracks.map((track) => (
                  <div key={track.title} className="flex flex-col gap-2">
                    <h3 className="font-serif text-base font-bold text-primary flex items-center gap-2">
                      <GraduationCap size={16} className="text-accent" /> {track.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                      {track.highlights}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Flat Highlights (For ERL & MINDS Labs) */}
            {lab.highlights && (
              <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                {lab.highlights}
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 border-t border-border-color pt-4">
              {lab.tags.map((tag) => (
                <span key={tag} className="tag text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Publications CTA */}
      <section className="mt-6">
        <motion.div
          variants={itemVariants}
          className="card border border-border-color bg-slate-50/50 glass p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">Publications Registry</h3>
            <p className="font-sans text-sm text-text-muted mt-1">
              Read my published conference proceedings and workshop papers in autonomous transit and vision systems.
            </p>
          </div>
          <Link
            href="/publications"
            className="flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-accent text-white rounded-xl hover:bg-accent-light transition-all shadow-md shrink-0 font-sans"
          >
            Go to Publications <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
