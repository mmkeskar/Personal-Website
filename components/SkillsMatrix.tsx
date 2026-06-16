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
        <div className="flex gap-2 bg-border-color/10 p-1.5 rounded-xl glass">
          {(['all', 'languages', 'ai', 'infra'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedSkill(null);
              }}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all capitalize focus:outline-none ${
                activeTab === tab
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-text-muted hover:text-accent hover:bg-accent/5'
              }`}
            >
              {tab === 'all' ? 'All Skills' : tab === 'ai' ? 'AI & Frameworks' : tab === 'infra' ? 'Cloud Infrastructure' : tab}
            </button>
          ))}
        </div>

        {selectedSkill && (
          <button
            onClick={resetSelection}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-border-color text-text-muted hover:text-accent hover:border-accent transition-all bg-background"
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
            
            const baseStyles = "card flex flex-col justify-between cursor-pointer border glass h-[110px] p-4";
            let stateStyles = "border-border-color hover:border-accent/30";
            
            if (status === 'selected') {
              stateStyles = "border-accent bg-accent/5 ring-2 ring-accent/20 scale-[1.02] shadow-md z-10";
            } else if (status === 'related') {
              stateStyles = "border-accent/40 bg-accent/2 scale-[1.01] shadow-sm";
            } else if (status === 'dimmed') {
              stateStyles = "opacity-45 scale-[0.98] blur-[0.5px] border-border-color/30";
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
                  <div>
                    {skill.category === 'languages' && <Terminal size={14} className="text-text-muted" />}
                    {skill.category === 'ai' && <Cpu size={14} className="text-text-muted" />}
                    {skill.category === 'infra' && <Database size={14} className="text-text-muted" />}
                  </div>
                </div>

                {status === 'selected' && (
                  <span className="text-[10px] font-sans font-bold text-accent uppercase tracking-wider">
                    Selected Node
                  </span>
                )}
                {status === 'related' && (
                  <span className="text-[10px] font-sans font-medium text-accent/80 uppercase tracking-wider flex items-center gap-1">
                    <LinkIcon size={8} /> Connected
                  </span>
                )}
                {status === 'normal' && (
                  <span className="text-[10px] font-sans text-text-muted uppercase tracking-wider">
                    {skill.category === 'languages' ? 'Lang' : skill.category === 'ai' ? 'Framework' : 'Infra'}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Selected Skill Detail Panel */}
        <div className="lg:col-span-1 h-full">
          <div className="card border border-border-color glass p-6 sticky top-24 min-h-[300px] flex flex-col justify-between gap-6">
            {selectedSkill ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={selectedSkill.id}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-xs font-sans font-semibold tracking-wider text-accent uppercase">
                    {selectedSkill.category === 'languages'
                      ? 'Programming Language'
                      : selectedSkill.category === 'ai'
                      ? 'AI Framework'
                      : 'Infrastructure'}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-primary mt-1">
                    {selectedSkill.label}
                  </h3>
                </div>

                <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed bg-accent/5 p-4 rounded-xl border border-accent/10">
                  {selectedSkill.description}
                </p>

                <div>
                  <h4 className="text-xs font-sans font-bold tracking-wider text-text-muted uppercase mb-2">
                    Direct Connections ({selectedSkill.relatedIds.length})
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
                          className="px-2.5 py-1 rounded-lg bg-border-color/30 text-foreground hover:bg-accent/15 hover:text-accent font-semibold transition-colors text-xs cursor-pointer flex items-center gap-1"
                        >
                          <LinkIcon size={10} /> {relSkill.label}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12 text-text-muted gap-4 flex-1">
                <div className="p-4 rounded-full bg-accent/5 border border-accent/10 text-accent">
                  <LinkIcon size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-primary">Interconnected Skill Graph</h4>
                  <p className="font-sans text-sm text-text-muted mt-2 max-w-xs">
                    Click any skill card in the grid to display details and visualize its relationships and integrations.
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
