'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, User, Search, Filter, BookOpen, ExternalLink, RotateCcw } from 'lucide-react';
import DocumentPreview, { Publication } from '@/components/DocumentPreview';

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

// Publications data
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
    venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    year: 2026,
    abstract: 'This paper presents a distributed model-free policy gradient algorithm leveraging self-attention to solve nonlinear multi-agent games. We bound sample-complexity scaling and demonstrate convergence limits across cooperative scenarios. Accepted for publication.',
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
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      className="flex flex-col relative glow-research-header animate-fade"
    >
      {/* Header */}
      <section className="relative z-10">
        <motion.span
          variants={itemVariants}
          className="text-[11px] font-sans font-bold tracking-wider text-accent uppercase block mb-2"
        >
          Academic Inquiry &amp; Output
        </motion.span>
        <motion.h1 variants={itemVariants} className="title-xl font-serif text-primary">
          Research &amp; Publications
        </motion.h1>
        <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          My academic work spans computer vision layers, deep visual representations, statistical reinforcement learning bounds, and decentralized multi-agent coordination. Below is a record of my active lab research projects followed by my publication registry.
        </motion.p>
      </section>

      {/* Wobbly Divider */}
      <WobblyDivider variant={1} />

      {/* Projects Section */}
      <section className="flex flex-col gap-4 relative z-10 mb-8">
        <div className="flex items-center gap-3">
          <Microscope className="text-accent shrink-0" size={24} />
          <h2 className="font-serif text-2xl text-primary">Research Projects</h2>
        </div>
        
        <div className="timeline-track pl-8 md:pl-12 flex flex-col gap-10 py-4 mt-2">
          {[
            {
              ...projectsData[0],
              cardStyle: 'card-manila rotate-[-1deg]',
              tape: <div className="absolute -top-2 left-6 w-16 washi-tape transform -rotate-6" />
            },
            {
              ...projectsData[1],
              cardStyle: 'card-graph rotate-[1.2deg]',
              tape: <div className="absolute top-2 left-1/2 -translate-x-1/2 pushpin-accent" />
            },
            {
              ...projectsData[2],
              cardStyle: 'card-ruled rotate-[-1.5deg]',
              tape: <div className="absolute -top-2 right-6 w-16 washi-tape transform rotate-6" />
            },
            {
              ...projectsData[3],
              cardStyle: 'card-postit rotate-[1deg]',
              tape: <div className="absolute top-2 left-1/2 -translate-x-1/2 pushpin-accent" />
            }
          ].map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`relative card ${project.cardStyle} p-6 md:p-8 hover:rotate-0 hover:scale-[1.01] hover:shadow-md transition-all duration-200 flex flex-col gap-4 pt-10`}
            >
              {project.tape}
              {/* Timeline Node Icon */}
              <div className="timeline-node -left-[48px] md:-left-[61px]">
                <Microscope size={14} />
              </div>

              {/* Content Header */}
              <div className="flex flex-col gap-1 font-sans">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary">
                  {project.title}
                </h3>
                
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
        </div>
      </section>

      {/* Wobbly Divider */}
      <WobblyDivider variant={2} />

      {/* Publications Registry Section */}
      <section className="flex flex-col gap-6 relative z-10">
        <div className="flex items-center gap-3">
          <BookOpen className="text-accent shrink-0" size={24} />
          <h2 className="font-serif text-2xl text-primary">Publications Registry</h2>
        </div>

        {/* Search & Filtering Controls */}
        <div className="flex flex-col gap-5 bg-white p-6 rounded-2xl border border-border-color shadow-sm mt-2">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input
              type="text"
              placeholder="Search by title, venue, or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border-color rounded-xl bg-white focus:bg-[#f5f3ef] focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all font-sans text-primary placeholder:text-text-muted"
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
                        : 'border-border-color bg-white text-text-muted hover:text-primary hover:border-accent'
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
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between font-sans text-xs font-bold text-text-muted px-1 mt-2">
          <span>Found {filteredPublications.length} Publication(s)</span>
        </div>

        {/* Publications List Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 mt-2">
          <AnimatePresence mode="popLayout">
            {filteredPublications.map((pub) => (
              <motion.div
                key={pub.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.98 }}
                className="card border border-border-color p-6 md:p-8 flex flex-col justify-between gap-6 hover:shadow-md"
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
                  <p className="font-sans text-sm text-text-muted font-medium">
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
                    {pub.tags.map((tag) => {
                      const t = tag.toLowerCase();
                      let tagClass = 'tag-industry';
                      if (t.includes('vision') || t.includes('perception')) tagClass = 'tag-perception';
                      if (t.includes('marl') || t.includes('reinforcement')) tagClass = 'tag-marl';
                      if (t.includes('robot') || t.includes('planning') || t.includes('control')) tagClass = 'tag-planning';
                      return (
                        <span key={tag} className={`tag text-[10px] ${tagClass}`}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-3 shrink-0 font-sans">
                    <button
                      onClick={() => setActivePreviewPub(pub)}
                      className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border border-border-color rounded-xl hover:bg-accent/15 hover:text-accent transition-colors bg-white text-text-muted"
                    >
                      <BookOpen size={14} /> Preview Abstract
                    </button>
                    {pub.pdfUrl ? (
                      <a
                        href={pub.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border border-accent/40 text-accent rounded-xl hover:bg-accent/5 transition-all bg-white"
                      >
                        {pub.pdfUrl.includes('drive.google.com') ? 'Presentation' : 'PDF Paper'} <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-xs font-bold text-text-muted px-4 py-2.5 bg-[#f5f3ef] border border-border-color rounded-xl cursor-default">
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
              className="card border border-dashed border-border-color text-center py-16 text-text-muted bg-[#f5f3ef]/50"
            >
              <BookOpen size={36} className="mx-auto text-text-muted/40 mb-3" />
              <p className="font-serif text-lg font-bold text-primary">No Publications Found</p>
              <p className="font-sans text-sm text-text-muted mt-1 max-w-sm mx-auto">
                We couldn&apos;t find any publications matching your current search queries or tag filters. Try modifying your settings.
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Asynchronous Preview Overlaid Panel */}
      <DocumentPreview
        publication={activePreviewPub}
        onClose={() => setActivePreviewPub(null)}
      />
    </motion.div>
  );
}
