'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, BookOpen, Mountain, Film, X, ZoomIn, ShoppingBag, Eye } from 'lucide-react';

interface Artwork {
  id: string;
  title: string;
  type: string;
  src: string;
  description: string;
  cardStyle: string;
  tape: React.ReactNode;
}

const artworkData: Artwork[] = [
  {
    id: 'tulips',
    title: 'Three Tulips',
    type: 'Pencil Sketch on Paper',
    src: '/artwork/tulips.jpeg',
    description: 'A study in graphite gradients and shading, focusing on the soft reflections and curves of opening petals.',
    cardStyle: 'rotate-[-1.5deg]',
    tape: <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 washi-tape transform -rotate-1" />
  },
  {
    id: 'bird',
    title: 'The Long-Tailed Bird',
    type: 'Graphite on Paper',
    src: '/artwork/bird.jpeg',
    description: 'Detailed sketch of a long-tailed bird on a branch, signed Maitrayee Keskar. Captures natural feathers and weight distribution.',
    cardStyle: 'rotate-[2deg]',
    tape: <div className="absolute top-2.5 left-1/2 -translate-x-1/2 pushpin-accent" />
  },
  {
    id: 'lantern_flowers',
    title: 'Hanging Lantern Flowers',
    type: 'Pencil Sketch on Paper',
    src: '/artwork/lantern_flowers.jpeg',
    description: 'Graphite study of hanging bell-like blossoms and leaves, rendered with high-contrast shadows and dark atmospheric background.',
    cardStyle: 'rotate-[-2deg]',
    tape: <div className="absolute -top-3 right-6 w-16 h-5 washi-tape transform rotate-6" />
  },
  {
    id: 'sunflower',
    title: 'The Vibrant Sunflower',
    type: 'Acrylic on Canvas',
    src: '/artwork/sunflower.jpeg',
    description: 'Bright, high-contrast yellow sunflower head painted on a solid electric blue canvas background, signed MMK.',
    cardStyle: 'rotate-[1.2deg]',
    tape: <div className="absolute top-2.5 left-1/2 -translate-x-1/2 pushpin-accent" />
  },
  {
    id: 'winding_road',
    title: 'Winding Path to the Peak',
    type: 'Acrylic on Canvas',
    src: '/artwork/winding_road.jpeg',
    description: 'Landscape painting of a serpentine path climbing green hills toward pink mountain peaks. Features a self-portrait silhouette looking out, signed Maitrayee.',
    cardStyle: 'rotate-[-1deg]',
    tape: <div className="absolute -top-3 left-6 w-16 h-5 washi-tape transform -rotate-6" />
  }
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

export default function Hobbies() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

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
      className="flex flex-col relative"
    >
      {/* Header */}
      <section className="relative z-10">
        <motion.span
          variants={itemVariants}
          className="text-[11px] font-sans font-bold tracking-wider text-accent uppercase block mb-2"
        >
          Creative &amp; Outdoor Pursuits
        </motion.span>
        <motion.h1 variants={itemVariants} className="title-xl font-serif text-primary">
          Personal Pursuits &amp; Hobbies
        </motion.h1>
        <motion.p variants={itemVariants} className="font-sans text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          Outside the laboratory and proof equations, I find my balance in arts, exploring California&apos;s natural landscapes, and winding down with movies and literature. These pastimes represent my continuous curiosity for aesthetics, narratives, and creative expression.
        </motion.p>
      </section>

      {/* Wobbly Divider */}
      <WobblyDivider variant={1} />

      {/* Art Gallery Section */}
      <section className="flex flex-col gap-6 relative z-10">
        <div className="flex items-center gap-3">
          <Palette className="text-accent shrink-0" size={24} />
          <h2 className="font-serif text-2xl text-primary">Artwork Showcase</h2>
        </div>
        <p className="font-sans text-sm md:text-base text-text-muted max-w-2xl leading-relaxed">
          Here is a selection of my sketches and acrylic paintings. Click any Polaroid frame to zoom in, read full details, and view the high-resolution artwork close-up.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {artworkData.map((art) => (
            <motion.div
              key={art.id}
              variants={itemVariants}
              onClick={() => setSelectedArtwork(art)}
              className={`relative bg-white border border-border-color p-4 pb-8 rounded-xl shadow-sm cursor-pointer transform ${art.cardStyle} hover:rotate-0 hover:scale-[1.03] hover:shadow-md transition-all duration-300 group`}
            >
              {art.tape}
              
              {/* Image box */}
              <div className="aspect-[3/4] w-full overflow-hidden rounded relative bg-[#f5f3ef] border border-border-color">
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/95 px-3.5 py-2 rounded-xl border flex items-center gap-1.5 text-xs font-bold text-primary shadow-sm font-sans">
                    <ZoomIn size={14} className="text-accent" /> Inspect Details
                  </div>
                </div>
              </div>

              {/* Polaroid Handwriting label */}
              <div className="mt-4 text-center font-sans">
                <h3 className="font-serif text-base font-bold text-primary">{art.title}</h3>
                <span className="text-[10px] text-accent font-bold tracking-widest uppercase mt-1 block">
                  {art.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wobbly Divider */}
      <WobblyDivider variant={2} />

      {/* Daily Inspirations & Details */}
      <section className="flex flex-col gap-6 relative z-10">
        <div className="flex items-center gap-3">
          <BookOpen className="text-accent shrink-0" size={24} />
          <h2 className="font-serif text-2xl text-primary">Daily Inspirations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* 1. Hiking & Outdoors (Graph) */}
          <motion.div
            variants={itemVariants}
            className="card card-graph p-6 md:p-8 flex flex-col justify-between gap-4 relative pt-10 rotate-[1deg] hover:rotate-0 hover:scale-[1.01] hover:shadow-md transition-all"
          >
            <div className="absolute -top-2 left-6 w-16 washi-tape transform -rotate-6" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent" style={{ color: '#0f9f90', borderColor: 'rgba(15, 159, 144, 0.2)', backgroundColor: 'rgba(15, 159, 144, 0.08)' }}>
                  <Mountain size={20} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">Hiking &amp; Outdoors</h3>
              </div>
              <p className="font-sans text-sm md:text-base text-foreground leading-relaxed">
                Hiking is my favorite way to disconnect and reset. Being outdoors in California&apos;s national parks and mountain ranges provides a vast sense of scale that balances the focused, mathematical abstractions of my research. The winding road landscape painting in the gallery is directly inspired by trails I&apos;ve traveled.
              </p>
            </div>
            <span className="text-[10px] font-sans font-bold text-accent uppercase tracking-widest block mt-2">
              Trail Treks &bull; California Parks
            </span>
          </motion.div>

          {/* 2. Reading Corner (Ruled) */}
          <motion.div
            variants={itemVariants}
            className="card card-ruled p-6 md:p-8 flex flex-col justify-between gap-4 relative pt-10 rotate-[-1.2deg] hover:rotate-0 hover:scale-[1.01] hover:shadow-md transition-all"
          >
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 pushpin-accent" />
            <div className="flex flex-col gap-3 font-sans">
              <div className="flex items-center gap-3 font-sans">
                <div className="p-2.5 rounded-xl border flex items-center justify-center bg-accent/10 border-accent/20 text-accent" style={{ color: '#0f9f90', borderColor: 'rgba(15, 159, 144, 0.2)', backgroundColor: 'rgba(15, 159, 144, 0.08)' }}>
                  <BookOpen size={20} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">The Reading Corner</h3>
              </div>
              <p className="font-sans text-sm md:text-base text-foreground leading-relaxed mb-2">
                My library stretches from dense textbooks in probability and statistics to classic literature, fantasy, and philosophy. A few favorite reads and references currently on my stack:
              </p>
              
              {/* Reading List */}
              <div className="flex flex-col gap-1.5 text-xs text-text-muted pl-2 font-medium">
                <span className="flex items-center gap-2 text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> <em>The Book of Disquiet</em> &mdash; Fernando Pessoa
                </span>
                <span className="flex items-center gap-2 text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> <em>Gödel, Escher, Bach</em> &mdash; Douglas Hofstadter
                </span>
                <span className="flex items-center gap-2 text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> <em>Dune</em> &mdash; Frank Herbert
                </span>
                <span className="flex items-center gap-2 text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> <em>Probability and Random Processes</em> &mdash; Grimmett
                </span>
              </div>
            </div>
            <span className="text-[10px] font-sans font-bold text-accent uppercase tracking-widest block mt-2">
              Literature &bull; Probability Theory
            </span>
          </motion.div>

          {/* 3. Nail Art & Design (Post-It) */}
          <motion.div
            variants={itemVariants}
            className="card card-postit p-6 md:p-8 flex flex-col justify-between gap-4 relative pt-10 rotate-[1.5deg] hover:rotate-0 hover:scale-[1.01] hover:shadow-md transition-all"
          >
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 pushpin-accent" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800">
                  <Palette size={20} />
                </div>
                <h3 className="font-serif text-xl font-bold text-amber-950">Nail Art &amp; Design</h3>
              </div>
              <p className="font-sans text-sm md:text-base text-amber-900 leading-relaxed">
                I do detailed nail art as a way to combine precise styling with bright, hand-drawn graphics. It&apos;s a miniature canvas where rules are completely custom-made. When I&apos;m taking a break from training models, I also love to go shopping, looking for modern patterns and vibrant palettes that inspire my art.
              </p>
            </div>
            <span className="text-[10px] font-sans font-bold text-amber-800 uppercase tracking-widest block mt-2">
              Miniature Canvas &bull; Fashion palettes
            </span>
          </motion.div>

          {/* 4. Film & Cinema (Manila) */}
          <motion.div
            variants={itemVariants}
            className="card card-manila p-6 md:p-8 flex flex-col justify-between gap-4 relative pt-10 rotate-[-1deg] hover:rotate-0 hover:scale-[1.01] hover:shadow-md transition-all"
          >
            <div className="absolute -top-2 right-6 w-16 washi-tape transform rotate-3" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-700" style={{ color: '#c47c0e', borderColor: 'rgba(244, 169, 64, 0.2)', backgroundColor: 'rgba(244, 169, 64, 0.08)' }}>
                  <Film size={20} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">Film &amp; Cinema</h3>
              </div>
              <p className="font-sans text-sm md:text-base text-foreground leading-relaxed">
                Watching movies is one of my favorite weekend rituals. I am drawn to films with striking cinematography, complex timelines, and deep visual storytelling. I appreciate cinematic design because it mimics a different kind of trajectory planning, seeing how a director guides narratives and characters through space and time.
              </p>
            </div>
            <span className="text-[10px] font-sans font-bold text-accent uppercase tracking-widest block mt-2">
              Cinematic Design &bull; Story Arcs
            </span>
          </motion.div>
        </div>
      </section>

      {/* Lightbox / Art Zoom Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedArtwork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="bg-white border border-border-color rounded-2xl max-w-4xl w-full p-4 md:p-6 shadow-2xl relative font-sans flex flex-col md:flex-row gap-6 items-center max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-text-muted hover:text-primary transition-colors border border-border-color bg-white z-10"
              >
                <X size={18} />
              </button>

              {/* Large Image Frame */}
              <div className="w-full md:w-3/5 aspect-[3/4] max-h-[70vh] rounded-lg overflow-hidden border border-border-color bg-slate-50 relative flex items-center justify-center shadow-inner shrink-0">
                <img
                  src={selectedArtwork.src}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Artwork Description Details */}
              <div className="flex flex-col justify-between h-full gap-4 w-full md:w-2/5 p-2 align-top">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">
                    {selectedArtwork.type}
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    {selectedArtwork.title}
                  </h2>
                  <div className="h-[1.5px] w-12 bg-accent/30 my-1" />
                  <p className="text-sm md:text-base text-foreground leading-relaxed font-sans mt-2">
                    {selectedArtwork.description}
                  </p>
                </div>

                <div className="mt-4 border-t border-border-color pt-4 text-[10px] font-sans font-bold text-text-muted uppercase tracking-wider">
                  Maitrayee Keskar Portfolio &bull; 2026
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
