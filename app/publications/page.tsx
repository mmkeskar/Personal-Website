'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, BookOpen, ExternalLink, RotateCcw } from 'lucide-react';
import DocumentPreview, { Publication } from '@/components/DocumentPreview';

// Real academic publications database
const publicationsData: (Publication & { id: string })[] = [
  {
    id: 'itsc-2026',
    title: 'Vision-Language Work Zone Intelligence for Safety-Critical Speed Regulation of Mixed-Autonomy Vehicles in Dynamic Environments',
    authors: 'Martinez-Sanchez, A., Ng, K., Maia, W., Fleig, L., Keskar, M., Maquiling, E., Tandon, Y., Roy, P., Trivedi, M., Greer, R.',
    venue: 'IEEE International Conference on Intelligent Transportation Systems (ITSC)',
    year: 2026,
    abstract: 'This paper presents a vision-language framework for mixed-autonomy speed regulation in safety-critical dynamic work zone environments. We coordinate behavioral intent models with real-time warning interpretation to compute optimal speed limits under active construction events. Accepted for publication.',
    tags: ['Robotics', 'Computer Vision'],
  },
  {
    id: 'esv-vlm-2026',
    title: 'Vision and Language: Novel Representations and Artificial intelligence for Driving Scene Safety Assessment and Autonomous Vehicle Planning',
    authors: 'Greer, R., Keskar, M., Martinez-Sanchez, A., Roy, P., Shriram, S., Trivedi, M.',
    venue: 'Proceedings of the 28th International Technical Conference on the Enhanced Safety of Vehicles (ESV), National Highway Traffic Safety Administration (NHTSA)',
    year: 2026,
    abstract: 'This paper explores visual-language modeling approaches for driving scene safety assessment. We combine geometric representations of traffic assets with semantic scene context to enhance autonomous planning pipelines.',
    tags: ['Computer Vision', 'Big Data'],
    pdfUrl: 'https://arxiv.org/pdf/2602.07680',
  },
  {
    id: 'esv-multimodal-2026',
    title: 'Looking and Listening Inside and Outside: Multimodal Artificial Intelligence Systems for Driver Safety Assessment and Intelligent Vehicle Decision-Making',
    authors: 'Greer, R., Fleig, L., Keskar, M., Maquiling, E., Tapia Lopez, G., Martinez-Sanchez, A., Roy, P., Rattigan, J., Sur, M., Vidrio, M., Marcotte, T., Trivedi, M.',
    venue: 'Proceedings of the 28th ESV Conference (NHTSA)',
    year: 2026,
    abstract: 'We introduce a multi-modal perception framework coordinating cabin occupant gaze tracking with external scene metrics. The system links inside driver attention maps directly to trajectory safety computations.',
    tags: ['Robotics', 'Computer Vision'],
    pdfUrl: 'https://arxiv.org/pdf/2602.07668',
  },
  {
    id: 'esv-cnn-2026',
    title: 'Robust Detection, Association, and Localization of Vehicle Lights: A Context-Based Cascaded CNN Approach and Evaluations',
    authors: 'Gopalkrishnan, A., Greer, R., Keskar, M., Trivedi, M.',
    venue: 'Proceedings of the 28th ESV Conference (NHTSA)',
    year: 2026,
    abstract: 'We present a context-based cascaded CNN framework designed to robustly detect, associate, and localize vehicle lighting patterns (such as braking or signaling) under dynamic atmospheric conditions.',
    tags: ['Computer Vision'],
    pdfUrl: 'https://arxiv.org/pdf/2307.14571',
  },
  {
    id: 'iros-2026',
    title: 'Policy Gradient with Self-Attention for Model-Free Distributed Nonlinear Multi-Agent Games',
    authors: 'Sebastián, E., Keskar, M., Iqbal, E., Montijano, E., Sagüés, C., & Atanasov, N.',
    venue: 'arXiv preprint arXiv:2509.18371 (Submitted to IROS 2026)',
    year: 2025,
    abstract: 'This paper presents a distributed model-free policy gradient algorithm leveraging self-attention to solve nonlinear multi-agent games. We bound sample-complexity scaling and demonstrate convergence limits across cooperative scenarios.',
    tags: ['MARL', 'Robotics'],
    pdfUrl: 'https://arxiv.org/pdf/2509.18371',
  },
  {
    id: 'ral-2025',
    title: 'Lights as points: Learning to look at vehicle substructures with anchor-free object detection',
    authors: 'Keskar, M., Greer, R., Gopalkrishnan, A., Deo, N., & Trivedi, M.',
    venue: 'IEEE Robotics and Automation Letters (Presented at IEEE CASE 2025)',
    year: 2025,
    abstract: 'We present an anchor-free keypoint detection architecture that localizes vehicle light sources as points. We design custom loss functions in PyTorch, yielding a 78.2% AP score on the ApolloCar3D dataset.',
    tags: ['Computer Vision', 'Robotics'],
    pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/10910165',
  },
  {
    id: 'pr-letters-2024',
    title: 'Patterns of vehicle lights: Addressing complexities of camera-based vehicle light datasets and metrics',
    authors: 'Greer, R., Gopalkrishnan, A., Keskar, M., & Trivedi, M. M.',
    venue: 'Pattern Recognition Letters, 178, 209-215',
    year: 2024,
    abstract: 'We evaluate camera metric complexity and sensor limitations in vehicle lighting datasets. This study establishes robust baselines for classification performance under variable environments.',
    tags: ['Computer Vision', 'Big Data'],
    pdfUrl: 'https://www.sciencedirect.com/science/article/pii/S0167865524000047',
  },
  {
    id: 'iv-2022',
    title: 'A Center-Based Integrated Vehicle Internal and Landmarks Detector',
    authors: 'Maitrayee Keskar, Nachiket Deo, Ross Greer, and Mohan M. Trivedi',
    venue: 'Presentation at IEEE IV ITSIVUE Workshop',
    year: 2022,
    abstract: 'A workshop oral presentation proposing a unified center-based network for passenger cabin occupant detection and keypoint tracking, improving passive safety systems.',
    tags: ['Robotics', 'Computer Vision'],
    pdfUrl: 'https://drive.google.com/file/d/15xwM-FQClW42u6YsHrX7-43sE-r6J4YU/view?usp=sharing',
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
      <section className="flex flex-col gap-5 bg-white p-6 rounded-2xl border border-border-color shadow-sm">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <input
            type="text"
            placeholder="Search by title, venue, or authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-border-color rounded-xl bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all font-sans text-foreground placeholder:text-text-muted"
          />
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-1 font-sans">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-text-muted flex items-center gap-1.5 mr-2">
              <Filter size={14} className="text-accent" /> Filter tags:
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
                      : 'border-border-color bg-white text-text-muted hover:text-accent hover:border-accent'
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
              className="flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-light focus:outline-none transition-colors"
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
              className="card border border-border-color bg-white p-6 md:p-8 flex flex-col justify-between gap-6 hover:shadow-md"
            >
              <div className="flex flex-col gap-4">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-color pb-3 font-sans">
                  <span className="text-xs font-bold tracking-wider text-accent uppercase">
                    {pub.venue}
                  </span>
                  <span className="text-xs font-bold text-text-muted">
                    {pub.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg md:text-xl font-bold text-primary leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="font-sans text-sm text-foreground/80 font-medium">
                  {/* Highlight Keskar name in author list */}
                  {pub.authors.split(/(Keskar, M\.|Maitrayee Keskar)/).map((part, index) => 
                    part === 'Keskar, M.' || part === 'Maitrayee Keskar' ? (
                      <strong key={index} className="text-accent">{part}</strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              </div>

              {/* Actions & Tags */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-border-color">
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 shrink-0 font-sans">
                  <button
                    onClick={() => setActivePreviewPub(pub)}
                    className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border border-border-color rounded-xl hover:bg-slate-50 hover:text-accent transition-colors bg-white"
                  >
                    <BookOpen size={14} /> Preview Abstract
                  </button>
                  {pub.pdfUrl ? (
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold bg-accent text-white rounded-xl hover:bg-accent-light transition-all shadow-sm shadow-accent/10"
                    >
                      {pub.pdfUrl.includes('drive.google.com') ? 'Presentation' : 'PDF Paper'} <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-xs font-bold text-text-muted px-4 py-2.5 bg-slate-50 border border-border-color rounded-xl cursor-default">
                      PDF Accepted
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card border border-dashed border-border-color text-center py-16 text-text-muted bg-white/50"
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
