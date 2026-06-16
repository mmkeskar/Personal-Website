'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, ExternalLink, Quote } from 'lucide-react';

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract: string;
  tags: string[];
  pdfUrl?: string;
  codeUrl?: string;
}

interface DocumentPreviewProps {
  publication: Publication | null;
  onClose: () => void;
}

export default function DocumentPreview({ publication, onClose }: DocumentPreviewProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (publication) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [publication]);

  return (
    <AnimatePresence>
      {publication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#090D1A]/90 border border-white/10 rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[85vh] glass"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-white/5 bg-slate-950/30">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary-light">
                  <FileText size={22} />
                </div>
                <div>
                  <span className="text-xs font-sans font-bold tracking-wider text-accent-light uppercase">
                    {publication.venue} ({publication.year})
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-white mt-1.5 leading-snug">
                    {publication.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-text-muted hover:text-white p-2 rounded-xl hover:bg-white/5 transition-colors focus:outline-none border border-transparent hover:border-white/5"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-6 font-sans">
              {/* Authors */}
              <div>
                <h4 className="text-xs font-bold tracking-wider text-text-muted uppercase mb-1.5">
                  Authors
                </h4>
                <p className="text-sm md:text-base text-foreground/90 font-semibold">
                  {publication.authors}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <span key={tag} className="tag text-xs py-1 px-3">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Abstract */}
              <div>
                <h4 className="text-xs font-bold tracking-wider text-text-muted uppercase mb-2">
                  Abstract
                </h4>
                <p className="text-sm md:text-base text-foreground/85 leading-relaxed bg-white/[0.02] p-5 rounded-2xl border border-white/5 italic">
                  {publication.abstract}
                </p>
              </div>

              {/* Citation Mock */}
              <div className="bg-slate-950/50 p-5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 text-text-muted mb-3">
                  <Quote size={14} className="text-primary-light" />
                  <span className="text-xs font-bold uppercase tracking-wider">BibTeX Citation</span>
                </div>
                <pre className="font-mono text-[11px] md:text-xs text-text-muted overflow-x-auto whitespace-pre-wrap select-all bg-slate-950/20 p-2 rounded-xl border border-white/2">
{`@inproceedings{keskar${publication.year}${publication.title.split(' ')[0].toLowerCase()},
  author    = {Keskar, Maitrayee and others},
  title     = {${publication.title}},
  booktitle = {Proceedings of ${publication.venue}},
  year      = {${publication.year}}
}`}
                </pre>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-white/5 bg-slate-950/50 flex flex-wrap items-center justify-end gap-3">
              <a
                href={publication.pdfUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-colors bg-[#090D1A] font-sans"
                onClick={(e) => {
                  if (!publication.pdfUrl) {
                    e.preventDefault();
                    alert("This is a demo preview. In production, this links to the actual paper PDF.");
                  }
                }}
              >
                <Download size={16} /> Download Paper
              </a>
              <a
                href={publication.codeUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary-light transition-colors font-sans shadow-md shadow-primary/10"
                onClick={(e) => {
                  if (!publication.codeUrl) {
                    e.preventDefault();
                    alert("This is a demo preview. In production, this links to the repository code.");
                  }
                }}
              >
                <ExternalLink size={16} /> Code Repository
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
