'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Link as LinkIcon, RotateCcw } from 'lucide-react';

interface Skill {
  id: string;
  label: string;
  category: 'languages' | 'ai' | 'infra';
  description: string;
  relatedIds: string[];
}

const skillsData: Skill[] = [
  // Languages
  {
    id: 'python',
    label: 'Python',
    category: 'languages',
    description: 'Primary language for research and AI models. Developed custom deep learning pipelines, MARL communication proofs, and Balbix analytics.',
    relatedIds: ['pytorch', 'torchrl', 'scikitlearn', 'opencv', 'pandas', 'benchmarl', 'airflow', 'pyspark', 'git', 'redis', 'postgresql'],
  },
  {
    id: 'sql',
    label: 'SQL',
    category: 'languages',
    description: 'Designed high-performance database queries and analytical schemas for enterprise analytics.',
    relatedIds: ['postgresql', 'pyspark', 'cassandra', 'redis'],
  },
  {
    id: 'java',
    label: 'Java',
    category: 'languages',
    description: 'Integrated backend enterprise microservices and Cassandra pipeline APIs.',
    relatedIds: ['cassandra', 'git'],
  },
  {
    id: 'cpp',
    label: 'C++',
    category: 'languages',
    description: 'Programmed low-level visual tracking architectures and real-time computer vision structures.',
    relatedIds: ['opencv', 'git'],
  },
  {
    id: 'r',
    label: 'R',
    category: 'languages',
    description: 'Utilized for mathematical modeling, probability computation, and statistical hypothesis testing.',
    relatedIds: ['python'],
  },
  {
    id: 'c',
    label: 'C',
    category: 'languages',
    description: 'Acquired during foundational computer science and robotics system control modules.',
    relatedIds: ['cpp'],
  },
  {
    id: 'shell',
    label: 'Shell Scripting',
    category: 'languages',
    description: 'Automated developer setup environments, Kubernetes cluster operations, and Airflow job triggers.',
    relatedIds: ['git', 'docker', 'kubernetes', 'airflow'],
  },

  // AI & Frameworks
  {
    id: 'pytorch',
    label: 'PyTorch',
    category: 'ai',
    description: 'Core deep learning framework. Implemented Vision Transformers (ViT), CenterNet architectures, and Graph Attention Networks (GAT).',
    relatedIds: ['python', 'torchrl', 'benchmarl', 'opencv', 'scikitlearn'],
  },
  {
    id: 'torchrl',
    label: 'TorchRL',
    category: 'ai',
    description: 'Used for structuring reinforcement learning pipelines, building replay buffers, and establishing policy gradients.',
    relatedIds: ['pytorch', 'python', 'benchmarl'],
  },
  {
    id: 'tensorflow',
    label: 'TensorFlow',
    category: 'ai',
    description: 'Employed for testing localization algorithms and comparing performance metrics.',
    relatedIds: ['python', 'scikitlearn'],
  },
  {
    id: 'scikitlearn',
    label: 'Scikit-Learn',
    category: 'ai',
    description: 'Used for baseline regression tasks, statistical modeling, and data formatting.',
    relatedIds: ['python', 'pandas'],
  },
  {
    id: 'opencv',
    label: 'OpenCV',
    category: 'ai',
    description: 'Processed cameras metrics, keypoint localization bounding boxes, and ApolloCar3D datasets.',
    relatedIds: ['python', 'cpp', 'pytorch'],
  },
  {
    id: 'pandas',
    label: 'Pandas',
    category: 'ai',
    description: 'Analyzed CSV datasets, parsed logs, and preprocessed tabular metrics.',
    relatedIds: ['python', 'scikitlearn', 'pyspark'],
  },
  {
    id: 'benchmarl',
    label: 'BenchMARL',
    category: 'ai',
    description: 'Benchmarked multi-agent reinforcement learning layers with Graph Attention networks for cooperative tasks.',
    relatedIds: ['pytorch', 'torchrl', 'python'],
  },

  // Cloud Infra
  {
    id: 'kubernetes',
    label: 'Kubernetes',
    category: 'infra',
    description: 'Deployed and scaled containerized workloads for security analysis microservices at Balbix.',
    relatedIds: ['docker', 'airflow', 'aws'],
  },
  {
    id: 'docker',
    label: 'Docker',
    category: 'infra',
    description: 'Configured robust container runtimes packaging PyTorch, CUDA libraries, and enterprise code.',
    relatedIds: ['kubernetes', 'git', 'airflow'],
  },
  {
    id: 'airflow',
    label: 'Airflow',
    category: 'infra',
    description: 'Orchestrated automated data pipelines parsing package vulnerabilities across system nodes.',
    relatedIds: ['kubernetes', 'python', 'pyspark'],
  },
  {
    id: 'pyspark',
    label: 'PySpark',
    category: 'infra',
    description: 'Handled batch processing pipelines ingestion on 500k+ package vulnerability signals.',
    relatedIds: ['python', 'airflow', 'cassandra', 'postgresql'],
  },
  {
    id: 'git',
    label: 'Git',
    category: 'infra',
    description: 'Managed code collaboration, git workflows, and coordinated deployment configurations.',
    relatedIds: ['python', 'cpp', 'java'],
  },
  {
    id: 'aws',
    label: 'AWS',
    category: 'infra',
    description: 'Utilized cloud instances, S3 storage buckets, and server monitoring systems.',
    relatedIds: ['kubernetes', 'docker'],
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL',
    category: 'infra',
    description: 'Stored structured relational tables mapping system assets and security vulnerability attributes.',
    relatedIds: ['sql', 'pyspark'],
  },
  {
    id: 'redis',
    label: 'Redis',
    category: 'infra',
    description: 'Configured lightning-fast caching layers to capture immediate event snapshots.',
    relatedIds: ['python', 'sql'],
  },
  {
    id: 'cassandra',
    label: 'Cassandra',
    category: 'infra',
    description: 'Maintained write-heavy event databases capturing records for 5M+ computing nodes.',
    relatedIds: ['sql', 'pyspark', 'java'],
  },
];

export default function SkillsMatrix() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'ai' | 'infra'>('all');

  const filteredSkills = skillsData.filter(
    (skill) => activeTab === 'all' || skill.category === activeTab
  );

  const handleSkillClick = (skill: Skill) => {
    if (selectedSkill?.id === skill.id) {
      setSelectedSkill(null); // Deselect
    } else {
      setSelectedSkill(skill);
    }
  };

  const resetSelection = () => {
    setSelectedSkill(null);
  };

  // Determine styling for each card based on interactive state
  const getCardStatus = (skillId: string, relatedIds: string[]) => {
    if (!selectedSkill) return 'normal';
    if (selectedSkill.id === skillId) return 'selected';
    if (selectedSkill.relatedIds.includes(skillId)) return 'related';
    return 'dimmed';
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Category Tabs & Reset */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-color pb-4">
        <div className="flex gap-2 bg-[#1a1a2e] p-1.5 rounded-2xl glass">
          {(['all', 'languages', 'ai', 'infra'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedSkill(null);
              }}
              className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl transition-all capitalize focus:outline-none font-sans ${
                activeTab === tab
                  ? 'bg-accent text-primary shadow-sm'
                  : 'text-[#b8b0a8] hover:text-[#f0eae4] hover:bg-[#2a2844]'
              }`}
            >
              {tab === 'all' ? 'All Skills' : tab === 'ai' ? 'AI & Frameworks' : tab === 'infra' ? 'Infrastructure' : tab}
            </button>
          ))}
        </div>

        {selectedSkill && (
          <button
            onClick={resetSelection}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-xl border border-border-color text-[#b8b0a8] hover:text-[#f0eae4] hover:border-accent transition-all bg-[#232136] font-sans"
          >
            <RotateCcw size={12} /> Reset Links
          </button>
        )}
      </div>

      {/* Main Graph Grid / Details View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Skills Cards Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const status = getCardStatus(skill.id, skill.relatedIds);
            
            const baseStyles = "card flex flex-col justify-between cursor-pointer border h-[115px] p-5 bg-[#232136]";
            let stateStyles = "border-border-color hover:border-accent/30";
            
            if (status === 'selected') {
              stateStyles = "border-accent bg-[#2a2844] ring-2 ring-accent/20 scale-[1.01] shadow-md z-10";
            } else if (status === 'related') {
              stateStyles = "border-accent/40 bg-[#2a2844]/50 scale-[1.005] shadow-sm";
            } else if (status === 'dimmed') {
              stateStyles = "opacity-30 scale-[0.98] blur-[0.2px] border-border-color/30";
            }

            return (
              <motion.div
                key={skill.id}
                layout
                onClick={() => handleSkillClick(skill)}
                className={`${baseStyles} ${stateStyles}`}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-sm md:text-base font-bold text-primary">
                    {skill.label}
                  </span>
                  <div className="text-[#8a8279]">
                    {skill.category === 'languages' && <Terminal size={14} />}
                    {skill.category === 'ai' && <Cpu size={14} />}
                    {skill.category === 'infra' && <Database size={14} />}
                  </div>
                </div>

                {status === 'selected' && (
                  <span className="text-[9px] font-sans font-bold text-accent uppercase tracking-wider">
                    Active Node
                  </span>
                )}
                {status === 'related' && (
                  <span className="text-[9px] font-sans font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                    <LinkIcon size={8} /> Connected
                  </span>
                )}
                {status === 'normal' && (
                  <span
                    className="text-[9px] font-sans uppercase tracking-wider font-bold"
                    style={{
                      color:
                        skill.category === 'languages'
                          ? '#b8b0a8'
                          : skill.category === 'ai'
                          ? '#7C5CFC'
                          : '#F4A940',
                    }}
                  >
                    {skill.category === 'languages' ? 'Language' : skill.category === 'ai' ? 'Framework' : 'Infra'}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Selected Skill Detail Panel */}
        <div className="lg:col-span-1 h-full font-sans">
          <div className="card border border-border-color bg-[#232136] p-6 sticky top-28 min-h-[320px] flex flex-col justify-between gap-6">
            {selectedSkill ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={selectedSkill.id}
                className="flex flex-col gap-4"
              >
                <div>
                  <span
                    className="text-xs font-bold tracking-wider uppercase"
                    style={{
                      color:
                        selectedSkill.category === 'languages'
                          ? '#b8b0a8'
                          : selectedSkill.category === 'ai'
                          ? '#7C5CFC'
                          : '#F4A940',
                    }}
                  >
                    {selectedSkill.category === 'languages'
                      ? 'Programming Language'
                      : selectedSkill.category === 'ai'
                      ? 'AI / Machine Learning Framework'
                      : 'Infrastructure & DB'}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-primary mt-1">
                    {selectedSkill.label}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-[#b8b0a8] leading-relaxed bg-[#1a1a2e] p-4 rounded-2xl border border-border-color italic">
                  {selectedSkill.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold tracking-wider text-[#8a8279] uppercase mb-2">
                    Direct Node Links ({selectedSkill.relatedIds.length})
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.relatedIds.map((relId) => {
                      const relSkill = skillsData.find((s) => s.id === relId);
                      return relSkill ? (
                        <span
                          key={relId}
                          onClick={() => {
                            const found = skillsData.find((s) => s.id === relId);
                            if (found) setSelectedSkill(found);
                          }}
                          className="px-2.5 py-1 rounded-xl bg-[#1a1a2e] text-[#b8b0a8] hover:bg-accent/15 hover:text-primary border border-border-color font-bold transition-all text-xs cursor-pointer flex items-center gap-1"
                        >
                          <LinkIcon size={10} className="text-accent" /> {relSkill.label}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12 text-[#8a8279] gap-4 flex-1">
                <div className="p-4 rounded-full bg-[#1a1a2e] border border-border-color text-[#8a8279]">
                  <LinkIcon size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-primary">Interactive Skill Graph</h4>
                  <p className="text-sm text-[#8a8279] mt-2 max-w-xs leading-relaxed">
                    Click any skill card in the grid to display detailed project connections and trace relationships.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
