'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, BookOpen, ExternalLink, RotateCcw } from 'lucide-react';
import DocumentPreview, { Publication } from '@/components/DocumentPreview';

// Detailed mock publications database
const publicationsData: (Publication & { id: string })[] = [
  {
    id: 'itsc-2026',
    title: 'Work Zone Intelligence: Speed Regulation and Modeling in Autonomous Transit',
    authors: 'Maitrayee Keskar, Ross Greer, Mohan Trivedi',
    venue: 'IEEE Intelligent Transportation Systems Conference (ITSC)',
    year: 2026,
    abstract: 'This paper presents a model-based speed regulation approach for autonomous vehicles navigating active work zones. By combining local vision features with a custom regulatory control framework, we model driver intent and coordinate optimal deceleration schedules under high-complexity construction environments.',
    tags: ['Robotics', 'Computer Vision'],
  },
  {
    id: 'nhtsa-vlm-2026',
    title: 'Driving Scene Assessment: Vision/Language Asset Representation Frameworks',
    authors: 'Maitrayee Keskar, Ross Greer, Mohan Trivedi',
    venue: 'NHTSA International Technical Conference on the Enhanced Safety of Vehicles (ESV)',
    year: 2026,
    abstract: 'An investigation into joint Vision-Language Models (VLMs) to encode asset states (such as construction signs, barriers, and dynamic traffic components) in complex road layouts. We demonstrate high-fidelity multimodal representations mapping directly to automated safety assessments.',
    tags: ['Computer Vision', 'Big Data'],
  },
  {
    id: 'nhtsa-driver-2026',
    title: 'Multimodal Intelligent Vehicles: Inside/Outside Driver Attention Coordination Systems',
    authors: 'Maitrayee Keskar, Ross Greer, Mohan Trivedi',
    venue: 'NHTSA International Technical Conference on the Enhanced Safety of Vehicles (ESV)',
    year: 2026,
    abstract: 'This study introduces a coordinated system tracking inside-vehicle driver distraction alongside outside-vehicle environmental hazards. We use temporal multi-modal networks to model eye-gaze distribution and link occupant state directly to local trajectory paths.',
    tags: ['Robotics', 'Computer Vision'],
  },
  {
    id: 'nhtsa-cnn-2026',
    title: 'Cascaded CNN Vehicle Lighting: Localization and Context Association Suites',
    authors: 'Maitrayee Keskar, Mohan Trivedi',
    venue: 'NHTSA International Technical Conference on the Enhanced Safety of Vehicles (ESV)',
    year: 2026,
    abstract: 'A cascaded Convolutional Neural Network pipeline engineered for the rapid detection, localization, and classification of vehicle lighting states (brake lights, indicators) in low-light, high-contrast urban environments.',
    tags: ['Computer Vision'],
  },
  {
    id: 'iros-2026',
    title: 'Self-Attention Policy Gradients for Distributed Non-linear Game Spaces in Multi-Agent Environments',
    authors: 'Maitrayee Keskar, Parinaz Naghizadeh, Nikolay Atanasov',
    venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    year: 2026,
    abstract: 'We present a decentralized policy gradient formulation utilizing self-attention layers to represent multi-agent interactions. The approach bounds sample complexity and ensures convergent actions in non-linear distributed control scenarios without global parameter syncing.',
    tags: ['MARL', 'Robotics'],
  },
  {
    id: 'ral-2025',
    title: 'Lights as Points: Anchor-Free Keypoint Detection for Joint Vehicle State Estimation',
    authors: 'Maitrayee Keskar, Mohan Trivedi',
    venue: 'IEEE Robotics and Automation Letters (RA-L)',
    year: 2025,
    abstract: 'Our first-author paper detailing an anchor-free keypoint detection framework. We treat vehicle lights as dynamic points and design customized keypoint loss topologies in PyTorch to achieve a 78.2% AP score on the ApolloCar3D dataset without requiring bounding boxes.',
    tags: ['Computer Vision', 'Robotics'],
  },
  {
    id: 'pr-letters-2024',
    title: 'Vehicle Light Dataset Complexities: Camera Metric Evaluation Pipelines',
    authors: 'Maitrayee Keskar, Mohan Trivedi',
    venue: 'Pattern Recognition Letters',
    year: 2024,
    abstract: 'We evaluate the challenges of camera metric variability in automated vehicles. This paper establishes key performance baselines under diverse focal lengths, noise distributions, and lighting thresholds across public traffic datasets.',
    tags: ['Computer Vision', 'Big Data'],
  },
  {
    id: 'iv-2022',
    title: 'Integrated Vehicle Internal Occupant Detection and Spatial Landmark Analysis',
    authors: 'Maitrayee Keskar, Mohan Trivedi',
    venue: 'IEEE Intelligent Vehicles Symposium (IV) Workshop',
    year: 2022,
    abstract: 'A workshop oral presentation mapping interior occupant configurations using lightweight spatial convolutional networks, ensuring passive safety tracking in passenger cabins.',
    tags: ['Robotics', 'Computer Vision'],
  },
];

const availableTags = ['MARL', 'Computer Vision', 'Robotics', 'Big Data'];

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activePreviewPub, setActivePreviewPub] = useState<Publication | null>(null);

  // Toggle tag filters
  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
  };

  // Filter and Search logic
  const filteredPublications = useMemo(() => {
    return publicationsData.filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => pub.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
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
        <motion.span variants={cardVariants} className="text-xs font-sans font-bold tracking-wider text-accent uppercase block mb-2">
          Scholarly Output
        </motion.span>
        <motion.h1 variants={cardVariants} className="title-xl font-serif text-primary">
          Publication Registry
        </motion.h1>
        <motion.p variants={cardVariants} className="font-sans text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          A list of peer-reviewed journal papers, conference proceedings, and preprints. Use the search bar and tag filters below to interact with the catalog.
        </motion.p>
      </section>

      {/* Search & Filtering Controls */}
      <section className="flex flex-col gap-4 bg-border-color/10 p-6 rounded-2xl glass border border-border-color">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <input
            type="text"
            placeholder="Search by title, venue, or authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-sm md:text-base border border-border-color rounded-xl bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-sans text-foreground"
          />
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-xs font-bold text-text-muted flex items-center gap-1.5 mr-2">
              <Filter size={14} /> Filter tags:
            </span>
            {availableTags.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all focus:outline-none ${
                    isSelected
                      ? 'bg-accent border-accent text-white shadow-sm'
                      : 'border-border-color bg-background text-text-muted hover:text-accent hover:border-accent'
                  }`}
                >
                  #{tag.replace(/\s+/g, '')}
                </button>
              );
            })}
          </div>

          {(searchQuery || selectedTags.length > 0) && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-accent focus:outline-none transition-colors"
            >
              <RotateCcw size={12} /> Clear Filters
            </button>
          )}
        </div>
      </section>

      {/* Results Info */}
      <div className="flex items-center justify-between font-sans text-xs font-bold text-text-muted px-1">
        <span>Found {filteredPublications.length} Publication(s)</span>
      </div>

      {/* Publications Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPublications.map((pub) => (
            <motion.div
              key={pub.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.98 }}
              className="card border border-border-color glass p-6 flex flex-col justify-between gap-6 hover:shadow-md"
            >
              <div className="flex flex-col gap-3">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-color pb-2">
                  <span className="text-xs font-sans font-bold tracking-wider text-accent uppercase">
                    {pub.venue}
                  </span>
                  <span className="text-xs font-sans font-semibold text-text-muted">
                    {pub.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg md:text-xl font-bold text-primary leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="font-sans text-sm text-foreground/80 font-medium">
                  {pub.authors}
                </p>
              </div>

              {/* Actions & Tags */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setActivePreviewPub(pub)}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold border border-border-color rounded-xl hover:bg-accent/5 hover:text-accent transition-colors bg-background"
                  >
                    <BookOpen size={14} /> Preview Abstract
                  </button>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("In production, this button redirects to the publisher link (e.g. IEEE Xplore, arXiv, ACM).");
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-accent text-white rounded-xl hover:bg-accent-light transition-colors"
                  >
                    Publisher <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card border border-dashed border-border-color text-center py-16 text-text-muted glass"
          >
            <BookOpen size={36} className="mx-auto text-text-muted/40 mb-3" />
            <p className="font-serif text-lg font-bold text-primary">No Publications Found</p>
            <p className="font-sans text-sm text-text-muted mt-1 max-w-sm mx-auto">
              We couldn&apos;t find any publications matching your current search queries or tag filters. Try modifying your settings.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Asynchronous Preview Overlaid Panel */}
      <DocumentPreview
        publication={activePreviewPub}
        onClose={() => setActivePreviewPub(null)}
      />
    </motion.div>
  );
}
