'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, ChevronRight, Mail, Github, Linkedin } from 'lucide-react';


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
                Hi, I&apos;m <strong>Maitrayee</strong>!
              </p>
              <p>
                I fell in love with probability and statistics before I ever touched a line of code. There&apos;s something deeply satisfying about finding structure in uncertainty, about proving that randomness has rules. I studied it as my undergraduate major at UC San Diego, and that way of thinking followed me everywhere: into machine learning, into robotics, and eventually into the question that drives my research now: how do you make a car that can drive itself safely through an unpredictable world?
              </p>
              <p>
                I&apos;m an incoming PhD student in EECS at UC Merced, working with <strong>Prof. Ross Greer</strong> on autonomous driving. My research spans trajectory prediction, motion planning, vehicle-to-everything (V2X) communication, and safety-critical decision-making. Recently, as a two-person team, we placed <strong>top-15 globally</strong> in the Waymo Open End-to-End Driving Challenge, which was one of the most rewarding experiences of my graduate career.
              </p>
              <p>
                Before all of this, I spent two years as a software engineer building production-scale AI systems for cybersecurity. That time taught me what it means to write code that has to work at scale, every day, with real consequences.
              </p>
              <p>
                Outside the lab, I paint, do nail art, and read as much as I can. I think the best researchers are the ones who stay curious about everything, not just their own field.
              </p>
              <p>
                I&apos;m always happy to chat. Feel free to reach out.
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
                  cardClass: 'card-manila rotate-[-1deg]',
                  tape: <div className="absolute top-2.5 left-1/2 -translate-x-1/2 pushpin-accent" />
                },
                {
                  degree: 'M.S. in ECE',
                  school: 'University of California, San Diego',
                  timeline: 'Completed',
                  details: 'Intelligent Systems, Robotics, & Control. Developed Vision Transformer layouts and anchor-free object detectors.',
                  icon: <GraduationCap size={24} />,
                  status: 'completed',
                  statusLabel: 'Completed',
                  cardClass: 'card-graph rotate-[1.5deg]',
                  tape: <div className="absolute -top-2 left-6 w-16 washi-tape transform -rotate-12" />
                },
                {
                  degree: 'B.S. in Probability & Stats',
                  school: 'University of California, San Diego',
                  timeline: 'Completed | Cum Laude',
                  details: 'Minor in Computer Science. Rigorous foundations in statistical inference, modeling proofs, and algorithmic complexity.',
                  icon: <GraduationCap size={24} />,
                  status: 'cum_laude',
                  statusLabel: 'Cum Laude',
                  cardClass: 'card-ruled rotate-[-1.5deg]',
                  tape: <div className="absolute -top-2 right-6 w-16 washi-tape transform rotate-12" />
                },
              ].map((edu) => (
                <div
                  key={edu.degree}
                  className={`card ${edu.cardClass} hover:rotate-0 hover:scale-[1.02] hover:shadow-md transition-all duration-200 flex flex-col gap-4 relative pt-8 p-5`}
                >
                  {edu.tape}
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
                      <h3 className="font-serif text-base font-bold text-primary leading-tight">{edu.degree}</h3>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: 'WAYMO CHALLENGE',
                  title: 'Top-15 Internationally',
                  desc: 'Placed in the elite global tier in the Waymo End-to-End Trajectory prediction challenge using ViT models.',
                  icon: <Award className="mx-auto md:mx-0" size={26} />,
                  color: '#0f9f90',
                  cardClass: 'card-manila rotate-[1deg]',
                  tape: <div className="absolute -top-2 left-6 w-16 washi-tape transform -rotate-6" />
                },
                {
                  label: 'PUBLICATIONS',
                  title: 'IEEE RA-L First Author',
                  desc: 'Published anchor-free keypoint detection models yielding 78.2% AP score on the ApolloCar3D dataset.',
                  icon: <BookOpen className="mx-auto md:mx-0" size={26} />,
                  color: '#FF6F61',
                  cardClass: 'card-ruled rotate-[-1.2deg]',
                  tape: <div className="absolute top-2.5 left-1/2 -translate-x-1/2 pushpin-accent" />
                },
                {
                  label: 'ENTERPRISE AI',
                  title: 'Scale Infrastructure',
                  desc: 'Designed event processing engines and Cassandra state structures parsing 500k+ pipelines at Balbix.',
                  icon: <Briefcase className="mx-auto md:mx-0" size={26} />,
                  color: '#c47c0e',
                  cardClass: 'card-graph rotate-[1deg]',
                  tape: <div className="absolute -top-2 right-6 w-16 washi-tape transform rotate-6" />
                },
              ].map((milestone) => (
                <div 
                  key={milestone.title} 
                  className={`card ${milestone.cardClass} hover:rotate-0 hover:scale-[1.02] hover:shadow-md transition-all duration-200 flex flex-col gap-2 font-sans pt-8 p-5 relative`}
                >
                  {milestone.tape}
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans mt-2">
              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/maitrayee-keskar-0a426a19a/"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-ruled rotate-[1.5deg] hover:rotate-0 hover:scale-[1.02] hover:shadow-md transition-all duration-200 p-6 pt-8 flex flex-col justify-between gap-6 cursor-pointer relative"
              >
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 pushpin-accent" />
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
                className="card card-graph rotate-[-1.5deg] hover:rotate-0 hover:scale-[1.02] hover:shadow-md transition-all duration-200 p-6 pt-8 flex flex-col justify-between gap-6 cursor-pointer relative"
              >
                <div className="absolute -top-2 left-6 w-16 washi-tape transform -rotate-12" />
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
                className="card card-postit rotate-[1.2deg] hover:rotate-0 hover:scale-[1.02] hover:shadow-md transition-all duration-200 p-6 pt-8 flex flex-col justify-between gap-6 cursor-pointer relative"
              >
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 pushpin-accent" />
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
