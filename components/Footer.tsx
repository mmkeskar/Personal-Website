import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-auto border-t border-border-color glass">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Affiliation Info */}
        <div className="text-center md:text-left">
          <p className="font-sans text-sm font-bold text-primary">Maitrayee Keskar</p>
          <p className="font-sans text-xs text-text-muted mt-1">
            Ph.D. Student in EECS @ University of California, Merced
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-sans text-xs text-text-muted">
            &copy; {currentYear} Maitrayee Keskar. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mmkeskar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent/10 text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/maitrayee-keskar-0a426a19a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent/10 text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://scholar.google.com/citations?hl=en&authuser=1&user=q3UdMrQAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent/10 text-text-muted hover:text-accent transition-colors"
            aria-label="Google Scholar"
          >
            <GraduationCap size={18} />
          </a>
          <a
            href="mailto:mkeskar@ucmerced.edu"
            className="p-2 rounded-full hover:bg-accent/10 text-text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
