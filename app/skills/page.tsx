'use client';

import { motion } from 'framer-motion';
import SkillsMatrix from '@/components/SkillsMatrix';

export default function SkillsPage() {
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
      className="flex flex-col gap-8"
    >
      {/* Header */}
      <section>
        <motion.span variants={itemVariants} className="text-xs font-sans font-bold tracking-wider text-accent uppercase block mb-2">
          Technical Inventory
        </motion.span>
        <motion.h1 variants={itemVariants} className="title-xl font-serif text-primary">
          Skills &amp; Frameworks
        </motion.h1>
        <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          An interactive visualization mapping programming languages, machine learning frameworks, and infrastructure tools. Click on any individual skill to trace its connections and integrations across my projects.
        </motion.p>
      </section>

      {/* Skills Matrix Component */}
      <section className="mt-2">
        <SkillsMatrix />
      </section>
    </motion.div>
  );
}
