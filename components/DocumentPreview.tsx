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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-background border border-border-color rounded-2xl shadow-lg z-10 overflow-hidden flex flex-col max-h-[85vh] glass"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-border-color">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <FileText size={24} />
                </div>
                <div>
                  <span className="text-xs font-sans font-semibold tracking-wider text-accent uppercase">
                    {publication.venue} ({publication.year})
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-primary mt-1">
                    {publication.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-text-muted hover:text-accent p-1.5 rounded-full hover:bg-accent/5 transition-colors focus:outline-none"
                aria-label="Close Preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
              {/* Authors */}
              <div>
                <h4 className="text-xs font-sans font-bold tracking-wider text-text-muted uppercase mb-1">
                  Authors
                </h4>
                <p className="font-sans text-sm text-foreground/90 font-medium">
                  {publication.authors}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Abstract */}
              <div>
                <h4 className="text-xs font-sans font-bold tracking-wider text-text-muted uppercase mb-2">
                  Abstract
                </h4>
                <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed bg-accent/5 p-4 rounded-xl border border-accent/10 italic">
                  {publication.abstract}
                </p>
              </div>

              {/* Citation Mock */}
              <div className="bg-border-color/20 p-4 rounded-xl border border-border-color">
                <div className="flex items-center gap-2 text-text-muted mb-2">
                  <Quote size={14} />
                  <span className="text-xs font-sans font-bold uppercase tracking-wider">BibTeX Citation</span>
                </div>
                <pre className="font-mono text-xs text-text-muted overflow-x-auto whitespace-pre-wrap select-all">
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
            <div className="p-6 border-t border-border-color bg-border-color/10 flex flex-wrap items-center justify-end gap-3">
              <a
                href={publication.pdfUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-border-color rounded-xl hover:bg-accent/5 hover:text-accent transition-colors bg-background"
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
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-accent text-white rounded-xl hover:bg-accent-light transition-colors"
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
