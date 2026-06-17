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
            className="absolute inset-0 bg-[#1c1b1a]/20 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-white border border-border-color rounded-2xl shadow-xl z-10 overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-border-color bg-[#f5f3ef]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <FileText size={20} />
                </div>
                <div>
                  <span className="text-xs font-sans font-bold tracking-wider text-accent uppercase">
                    {publication.venue} ({publication.year})
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-primary mt-1 leading-snug">
                    {publication.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-text-muted hover:text-primary p-2 rounded-xl hover:bg-accent/15 transition-colors focus:outline-none"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-6 font-sans">
              {/* Authors */}
              <div>
                <h4 className="text-xs font-bold tracking-wider text-text-muted uppercase mb-1">
                  Authors
                </h4>
                <p className="text-sm md:text-base text-primary font-semibold">
                  {publication.authors}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag) => {
                  const t = tag.toLowerCase();
                  let tagClass = 'tag-industry';
                  if (t.includes('vision') || t.includes('perception')) tagClass = 'tag-perception';
                  if (t.includes('marl') || t.includes('reinforcement')) tagClass = 'tag-marl';
                  if (t.includes('robot') || t.includes('planning') || t.includes('control')) tagClass = 'tag-planning';
                  return (
                    <span key={tag} className={`tag text-xs py-1 px-3 ${tagClass}`}>
                      {tag}
                    </span>
                  );
                })}
              </div>

              {/* Abstract */}
              <div>
                <h4 className="text-xs font-bold tracking-wider text-text-muted uppercase mb-2">
                  Abstract
                </h4>
                <p className="text-sm md:text-base text-foreground leading-relaxed bg-[#f5f3ef] p-5 rounded-xl border border-border-color italic">
                  {publication.abstract}
                </p>
              </div>

              {/* Citation Mock */}
              <div className="bg-[#f5f3ef] p-5 rounded-xl border border-border-color">
                <div className="flex items-center gap-2 text-text-muted mb-2.5">
                  <Quote size={14} className="text-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider">BibTeX Citation</span>
                </div>
                <pre className="font-mono text-[11px] md:text-xs text-foreground overflow-x-auto whitespace-pre-wrap select-all bg-white p-2 rounded-lg border border-border-color">
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
            <div className="p-6 border-t border-border-color bg-[#f5f3ef] flex flex-wrap items-center justify-end gap-3 font-sans">
              {publication.pdfUrl && (
                <a
                  href={publication.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-border-color rounded-xl hover:bg-accent/15 hover:text-accent transition-colors bg-white text-text-muted"
                >
                  <Download size={16} />{' '}
                  {publication.pdfUrl.includes('drive.google.com') ? 'View Presentation' : 'Download Paper'}
                </a>
              )}
              {publication.codeUrl && (
                <a
                  href={publication.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-xl hover:bg-accent-light transition-colors shadow-sm shadow-accent/10"
                >
                  <ExternalLink size={16} /> Code Repository
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
