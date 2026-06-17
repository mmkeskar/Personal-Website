'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, ChevronRight, Mail, Github, Linkedin } from 'lucide-react';

// Floating dynamic translucent stickers
const Sticker = ({ children, style, delay = 0 }: { children: React.ReactNode; style: React.CSSProperties; delay?: number }) => (
  <motion.div
    style={style}
    className="absolute pointer-events-none select-none z-0 opacity-15 hidden md:block"
    animate={{
      y: [0, -12, 0],
      rotate: [0, 4, -4, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const FloatingStickers = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
    {/* Bayes Theorem Sticker */}
    <Sticker style={{ top: '12%', left: '4%' }} delay={0}>
      <div className="bg-[#0f9f90]/5 border border-[#0f9f90]/15 rounded-xl px-3 py-2 font-mono text-[10px] text-[#0f9f90] shadow-sm transform rotate-3">
        P(A|B) = P(B|A)P(A)/P(B)
      </div>
    </Sticker>

    {/* Trajectory Planning Sticker */}
    <Sticker style={{ top: '22%', right: '5%' }} delay={2}>
      <div className="bg-[#0f9f90]/5 border border-[#0f9f90]/15 rounded-xl p-2.5 shadow-sm transform -rotate-6">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="#0f9f90" strokeWidth="1.5">
          <circle cx="10" cy="35" r="3" fill="#0f9f90" />
          <circle cx="30" cy="20" r="3" fill="#0f9f90" />
          <circle cx="50" cy="8" r="3" fill="#0f9f90" />
          <path d="M 10,35 C 20,35 20,20 30,20 C 40,20 40,8 50,8" strokeWidth="1.8" />
        </svg>
      </div>
    </Sticker>

    {/* Hand-drawn Star Sticker */}
    <Sticker style={{ top: '48%', left: '8%' }} delay={1.5}>
      <div className="text-[#0f9f90] p-1">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </Sticker>

    {/* Matrix System Sticker */}
    <Sticker style={{ top: '65%', right: '8%' }} delay={3}>
      <div className="bg-[#0f9f90]/5 border border-[#0f9f90]/15 rounded-xl px-2.5 py-1.5 font-mono text-[9px] text-[#0f9f90] shadow-sm transform rotate-6">
        {"[ A | b ] = [ẋ = Ax + Bu]"}
      </div>
    </Sticker>

    {/* Art Palette Sticker */}
    <Sticker style={{ top: '82%', left: '5%' }} delay={4}>
      <div className="bg-[#0f9f90]/5 border border-[#0f9f90]/15 rounded-xl p-2 text-[#0f9f90] shadow-sm transform -rotate-3">
        <svg width="35" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.34458 19.4968 5.48512 20.2479 5.2104 20.887C5.06822 21.218 5.16386 21.6033 5.44976 21.8219C5.73566 22.0405 6.1368 22.0354 6.41728 21.8097C7.54637 20.8993 8.78457 20.25 10.125 20.0625C10.7423 19.9761 11.3789 20 12 22Z" />
          <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
          <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
        </svg>
      </div>
    </Sticker>
  </div>
);

// Organic hand-drawn SVG dividers
const WobblyDivider = ({ variant = 1 }: { variant?: number }) => {
  let path = "M0 10 Q150 4, 300 10 T600 10";
  if (variant === 2) path = "M0 10 Q120 14, 280 8 T600 12";
  if (variant === 3) path = "M0 8 C150 14, 250 2, 400 10 T600 8";
  return (
    <div className="py-8 md:py-10 pointer-events-none select-none z-10 relative">
      <svg className="hand-drawn-divider" viewBox="0 0 600 20" style={{ height: '20px', width: '100%' }}>
        <path d={path} />
      </svg>
    </div>
  );
};

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col relative hero-glow"
    >
      {/* Background Translucent Stickers */}
      <FloatingStickers />

      {/* Main Split Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10 py-4">
        
        {/* Left Column - Sticky Profile Sidebar */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6 items-center lg:items-stretch"
        >
          {/* Polaroid Picture Frame Container */}
          <div className="relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-none bg-white border border-border-color rounded-2xl shadow-md p-4 pb-6 transform rotate-[-2.5deg] hover:rotate-0 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
            {/* Translucent Washi Tape Overlay */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0f9f90]/20 border border-[#0f9f90]/15 backdrop-blur-[1px] shadow-sm transform -rotate-1 z-20" />
            
            {/* Image Frame */}
            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg relative bg-[#e5f2f0] border border-border-color">
              <img
                src="/my_photo.JPG"
                alt="Maitrayee Keskar"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Polaroid Handwriting Style Caption */}
            <div className="text-center mt-4 font-sans">
              <span className="text-[10px] font-bold text-accent tracking-widest uppercase">
                Mai @ Autonomy Lab
              </span>
            </div>
          </div>

          {/* User Name and Summary Details */}
          <div className="flex flex-col gap-2 text-center lg:text-left mt-2 font-sans">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-primary leading-tight">
              Maitrayee Keskar
            </h1>
            <p className="text-sm font-semibold text-accent">
              Ph.D. Student in EECS
            </p>
            <span className="text-[9px] font-bold px-3 py-1 rounded-full border border-accent/25 bg-[#0f9f90]/8 text-accent self-center lg:self-start">
              UC Merced (Starting Aug 2026)
            </span>
          </div>

          <hr className="border-border-color" />

          {/* Social Contact Details */}
          <div className="flex flex-col gap-3 font-sans text-xs">
            <a
              href="https://github.com/mmkeskar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-text-muted hover:text-accent transition-colors"
            >
              <Github size={16} /> github.com/mmkeskar
            </a>
            <a
              href="https://www.linkedin.com/in/maitrayee-keskar-0a426a19a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={16} /> linkedin.com/in/maitrayee-keskar
            </a>
            <a
              href="mailto:mkeskar@ucmerced.edu"
              className="flex items-center gap-2.5 text-text-muted hover:text-accent transition-colors"
            >
              <Mail size={16} /> mkeskar@ucmerced.edu
            </a>
          </div>
        </motion.div>

        {/* Right Column - Scrolling Content Timeline */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* About Me narrative block */}
          <section className="flex flex-col gap-4">
            <h2 className="section-title">About Me</h2>
            <div className="font-sans text-base md:text-lg leading-relaxed text-foreground flex flex-col gap-4 mt-2">
              <p>
                Hi! I&apos;m <strong>Mai</strong>, a probability-and-statistics major turned autonomous driving researcher.
              </p>
              <p>
                I&apos;m starting my PhD at UC Merced with <strong>Prof. Ross Greer</strong>, working on trajectory prediction, motion planning, V2X communication, and safety-critical autonomous systems. I hold an M.S. and B.S. from UC San Diego, where I worked with <strong>Prof. Mohan Trivedi</strong>, <strong>Prof. Parinaz Naghizadeh</strong>, and <strong>Prof. Nikolay Atanasov</strong>. A highlight: our two-person team&apos;s <strong>top-15 finish</strong> in the Waymo Open End-to-End Driving Challenge.
              </p>
              <p>
                I&apos;m drawn to problems where mathematics meets real-world decision-making under uncertainty, which is basically all of driving.
              </p>
              <p>
                When I&apos;m not writing proofs or training models, you&apos;ll find me reading, painting, or doing nail art.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-2 font-sans">
              <Link
                href="/research"
                className="btn-primary flex items-center gap-2 font-semibold"
              >
                Explore Research <ChevronRight size={16} />
              </Link>
              <Link
                href="/publications"
                className="btn-primary flex items-center gap-2 font-semibold"
              >
                Publications Registry
              </Link>
            </div>
          </section>

          <WobblyDivider variant={1} />

          {/* Education qualifications */}
          <section className="flex flex-col gap-6">
            <h2 className="section-title">Education</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  degree: 'Ph.D. in EECS',
                  school: 'University of California, Merced',
                  timeline: 'Starting August 2026',
                  details: 'Advisor: Prof. Ross Greer. Focusing on multi-agent reinforcement learning, collaborative perception, and intent forecasting.',
                  icon: <GraduationCap size={24} />,
                  status: 'starting',
                  statusLabel: 'Starting August 2026',
                },
                {
                  degree: 'M.S. in ECE',
                  school: 'University of California, San Diego',
                  timeline: 'Completed',
                  details: 'Intelligent Systems, Robotics, & Control. Developed Vision Transformer layouts and anchor-free object detectors.',
                  icon: <GraduationCap size={24} />,
                  status: 'completed',
                  statusLabel: 'Completed',
                },
                {
                  degree: 'B.S. in Probability & Stats',
                  school: 'University of California, San Diego',
                  timeline: 'Completed | Cum Laude',
                  details: 'Minor in Computer Science. Rigorous foundations in statistical inference, modeling proofs, and algorithmic complexity.',
                  icon: <GraduationCap size={24} />,
                  status: 'cum_laude',
                  statusLabel: 'Cum Laude',
                },
              ].map((edu) => (
                <div
                  key={edu.degree}
                  className="card flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2.5 rounded-xl border flex items-center justify-center"
                      style={{
                        backgroundColor:
                          edu.status === 'starting'
                            ? 'rgba(15, 159, 144, 0.08)'
                            : edu.status === 'cum_laude'
                            ? 'rgba(244, 169, 64, 0.08)'
                            : 'rgba(46, 196, 182, 0.08)',
                        borderColor:
                          edu.status === 'starting'
                            ? 'rgba(15, 159, 144, 0.15)'
                            : edu.status === 'cum_laude'
                            ? 'rgba(244, 169, 64, 0.15)'
                            : 'rgba(46, 196, 182, 0.15)',
                        color:
                          edu.status === 'starting'
                            ? '#0f9f90'
                            : edu.status === 'cum_laude'
                            ? '#c47c0e'
                            : '#1e9e92',
                      }}
                    >
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-primary">{edu.degree}</h3>
                      <span className="font-sans text-xs text-text-muted font-medium">{edu.school}</span>
                    </div>
                  </div>
                  
                  <span
                    className="text-[9px] font-sans font-bold uppercase px-2.5 py-1 rounded-full self-start"
                    style={{
                      backgroundColor:
                        edu.status === 'starting'
                          ? 'rgba(15, 159, 144, 0.08)'
                          : edu.status === 'cum_laude'
                          ? 'rgba(244, 169, 64, 0.08)'
                          : 'rgba(46, 196, 182, 0.08)',
                      color:
                        edu.status === 'starting'
                          ? '#0f9f90'
                          : edu.status === 'cum_laude'
                          ? '#c47c0e'
                          : '#1e9e92',
                      borderColor:
                        edu.status === 'starting'
                          ? 'rgba(15, 159, 144, 0.15)'
                          : edu.status === 'cum_laude'
                          ? 'rgba(244, 169, 64, 0.15)'
                          : 'rgba(46, 196, 182, 0.15)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                    }}
                  >
                    {edu.statusLabel}
                  </span>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </section>

          <WobblyDivider variant={2} />

          {/* Core Achievements & Quick Facts */}
          <section className="flex flex-col gap-8 bg-white p-8 rounded-2xl border border-border-color glass">
            <h2 className="font-serif text-2xl font-bold text-primary">
              Key Milestones
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {[
                {
                  label: 'WAYMO CHALLENGE',
                  title: 'Top-15 Internationally',
                  desc: 'Placed in the elite global tier in the Waymo End-to-End Trajectory prediction challenge using ViT models.',
                  icon: <Award className="mx-auto md:mx-0" size={26} />,
                  color: '#0f9f90',
                },
                {
                  label: 'PUBLICATIONS',
                  title: 'IEEE RA-L First Author',
                  desc: 'Published anchor-free keypoint detection models yielding 78.2% AP score on the ApolloCar3D dataset.',
                  icon: <BookOpen className="mx-auto md:mx-0" size={26} />,
                  color: '#FF6F61',
                },
                {
                  label: 'ENTERPRISE AI',
                  title: 'Scale Infrastructure',
                  desc: 'Designed event processing engines and Cassandra state structures parsing 500k+ pipelines at Balbix.',
                  icon: <Briefcase className="mx-auto md:mx-0" size={26} />,
                  color: '#c47c0e',
                },
              ].map((milestone) => (
                <div key={milestone.title} className="flex flex-col gap-2 font-sans">
                  <div
                    className="w-11 h-11 rounded-xl border flex items-center justify-center mx-auto md:mx-0 shadow-sm"
                    style={{
                      backgroundColor: '#f5f3ef',
                      borderColor: 'var(--border-color)',
                      color: milestone.color,
                    }}
                  >
                    {milestone.icon}
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider mt-2"
                    style={{ color: milestone.color }}
                  >
                    {milestone.label}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-primary">{milestone.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <WobblyDivider variant={3} />

          {/* Quick Connect Grid */}
          <section className="flex flex-col gap-6">
            <h2 className="section-title">
              Connect &amp; Collaborate
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/maitrayee-keskar-0a426a19a/"
                target="_blank"
                rel="noopener noreferrer"
                className="card border border-border-color p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/20 text-[#0077B5] group-hover:bg-[#0077B5]/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <ChevronRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">LinkedIn</h3>
                  <p className="text-xs text-text-muted mt-1 font-semibold">maitrayee-keskar</p>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed">
                    Connect for research collaborations, academic networking, or professional opportunities.
                  </p>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/mmkeskar"
                target="_blank"
                rel="noopener noreferrer"
                className="card border border-border-color p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent/20 transition-colors">
                    <Github size={20} />
                  </div>
                  <ChevronRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">GitHub</h3>
                  <p className="text-xs text-text-muted mt-1 font-semibold">@mmkeskar</p>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed">
                    Browse codebase repositories, deep learning implementations, and MARL experiments.
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:mkeskar@ucmerced.edu"
                className="card border border-border-color p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#FF6F61]/10 border border-[#FF6F61]/20 text-[#FF6F61] group-hover:bg-[#FF6F61]/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <ChevronRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">Direct Email</h3>
                  <p className="text-xs text-text-muted mt-1 font-semibold">mkeskar@ucmerced.edu</p>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed">
                    Inquire about research collaborations, lab operations, or request papers.
                  </p>
                </div>
              </a>
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  );
}
