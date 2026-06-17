'use client';

import { motion } from 'framer-motion';
import { Microscope, User, Calendar, GraduationCap, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Project {
  title: string;
  subtitle: string;
  advisor: string;
  description: string;
  tags: string[];
  area: 'perception' | 'marl' | 'planning' | 'industry';
}

const projectsData: Project[] = [
  {
    title: 'MTR-VP',
    subtitle: 'LISA LAB · MI3 LAB · WAYMO CHALLENGE TOP-15',
    advisor: 'Prof. Ross Greer (UC Merced) & Prof. Mohan Trivedi (UCSD) · April 2021 – Present',
    description:
      "Most autonomous driving systems depend on expensive, pre-built HD maps to plan safe trajectories. But maps go stale, they're costly to maintain, and they don't exist for every road. MTR-VP asks a different question: what if the car could plan entirely from what it sees? I designed a vision-first trajectory planning architecture that replaces HD-map inputs with learned visual representations from a Vision Transformer, fused through a cross-attention decoder that combines what the vehicle intends to do with what the camera observes. As a two-person team with Prof. Ross Greer, this work placed top-15 globally in the Waymo Open End-to-End Driving Challenge. A first-authored paper has been submitted to IEEE Robotics and Automation Letters.",
    tags: ['Trajectory Planning', 'Vision Transformers', 'PyTorch'],
    area: 'planning',
  },
  {
    title: 'Lights as points',
    subtitle: 'LISA LAB · IEEE RA-L FIRST AUTHOR',
    advisor: 'Prof. Mohan Trivedi · April 2021 – 2024',
    description:
      "Detecting a vehicle as a single bounding box discards a lot of useful information: which lights are on, where the wheels are, how the body is oriented. I adapted the anchor-free CenterNet architecture to jointly detect vehicles and their substructures (lights, wheels, windshields) as keypoints, building a custom detection head and loss function in PyTorch. The model achieved 78.2% AP on the ApolloCar3D dataset and was published as a first-author paper in IEEE Robotics and Automation Letters.",
    tags: ['Computer Vision', 'Keypoint Detection', 'PyTorch'],
    area: 'perception',
  },
  {
    title: 'Communication bounds for multi-agent learning',
    subtitle: 'MINDS LAB',
    advisor: 'Prof. Parinaz Naghizadeh · Jan 2025 – Jan 2026',
    description:
      "When multiple agents need to learn together in a decentralized setting, how much do they need to communicate, and how does that communication affect how quickly they learn? I worked on building a theoretical framework that formally connects the structure of communication protocols to the sample complexity of multi-agent reinforcement learning algorithms. Using adapted Optimized Maximum Likelihood Estimation methods, I established bounds on how well an agent can observe its environment under limited bandwidth, with formal guarantees on how specific communication schemes affect training efficiency and convergence.",
    tags: ['MARL', 'Probability & Stats', 'Optimization', 'Sample Complexity'],
    area: 'marl',
  },
  {
    title: 'Self-attention policies for multi-robot games',
    subtitle: 'EXISTENTIAL ROBOTICS LAB · IROS 2026 SUBMISSION',
    advisor: 'Prof. Nikolay Atanasov · Nov 2024 – Sep 2025',
    description:
      "How should we evaluate whether lightweight, attention-based policies actually work for multi-robot coordination? I built the experimental validation framework for a self-attention-based MARL policy, implementing a Graph Attention Network baseline within the BenchMARL framework and designing a head-to-head evaluation suite with metrics like capture rate and inter-agent distance. This contributed to a co-authored submission to IROS on model-free policy gradient methods for distributed multi-agent games.",
    tags: ['Graph Neural Networks', 'MARL', 'BenchMARL', 'TorchRL'],
    area: 'marl',
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
      className="flex flex-col relative glow-research-header"
    >
      {/* Header */}
      <section className="relative z-10">
        <motion.span
          variants={itemVariants}
          className="text-[11px] font-sans font-bold tracking-wider text-accent uppercase block mb-2"
        >
          Academic Inquiry
        </motion.span>
        <motion.h1 variants={itemVariants} className="title-xl font-serif text-primary">
          Research Engagements
        </motion.h1>
        <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          My academic work spans perception layers, deep visual representations, statistical bounds, and decentralized multi-agent coordination. Below is a detailed record of my lab affiliations and contributions.
        </motion.p>
      </section>

      {/* Wobbly Divider */}
      <WobblyDivider variant={1} />

      {/* Projects Timeline/Grid Layout */}
      <section className="timeline-track pl-8 md:pl-12 flex flex-col gap-10 py-4 relative z-10">
        {projectsData.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className={`relative card card-${project.area} p-6 md:p-8 flex flex-col gap-4`}
          >
            {/* Timeline Node Icon */}
            <div className="timeline-node -left-[48px] md:-left-[61px]">
              <Microscope size={14} />
            </div>

            {/* Content Header */}
            <div className="flex flex-col gap-1 font-sans">
              <h2 className="font-serif text-2xl font-bold text-primary">
                {project.title}
              </h2>
              
              <span className="text-[10px] font-sans font-bold tracking-wider text-accent uppercase mt-0.5">
                {project.subtitle}
              </span>
              
              <div className="flex items-center gap-1.5 text-xs text-text-muted mt-1">
                <User size={12} className="text-text-muted" /> {project.advisor}
              </div>
            </div>

            {/* Project Overview */}
            <p className="font-sans text-sm md:text-base text-foreground leading-relaxed border-l-2 border-border-color pl-4 py-1 italic bg-[#f5f3ef]/50">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 border-t border-border-color pt-4">
              {project.tags.map((tag) => (
                <span key={tag} className={`tag tag-${project.area} text-xs`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Publications CTA */}
      <section className="mt-8 relative z-10">
        <motion.div
          variants={itemVariants}
          className="card border border-border-color bg-white glass p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">Publications Registry</h3>
            <p className="font-sans text-sm text-text-muted mt-1">
              Read my published conference proceedings and workshop papers in autonomous transit and vision systems.
            </p>
          </div>
          <Link
            href="/publications"
            className="btn-primary flex items-center gap-2 font-semibold shrink-0"
          >
            Go to Publications <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
