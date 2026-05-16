'use client'

import { Brain, Code, Shield } from 'lucide-react'

interface Skill {
  name: string
  progress: number
  description: string
}

const skillsData: { category: string; icon: React.ReactNode; skills: Skill[] }[] = [
  {
    category: 'Inteligencia Artificial',
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: 'Agentes de IA', progress: 45, description: 'LangChain, AutoGPT, CrewAI' },
      { name: 'Cursor / v0', progress: 60, description: 'AI-first development' },
    ]
  },
  {
    category: 'Desarrollo Web',
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: 'APIs REST & GraphQL', progress: 75, description: 'Node.js, Express, Apollo' },
      { name: 'Bases de Datos', progress: 65, description: 'PostgreSQL, MongoDB, Prisma' },
    ]
  },
  {
    category: 'Ciberseguridad & Crypto',
    icon: <Shield className="w-5 h-5" />,
    skills: [
      { name: 'Hacking Ético', progress: 30, description: 'OWASP, Pentesting básico' },
      { name: 'Blockchain & DeFi', progress: 40, description: 'Smart contracts, análisis' },
    ]
  },
]

function ProgressBar({ progress, label }: { progress: number; label: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-[#1D1D1F]">{label}</span>
        <span className="text-sm text-gray-400">{progress}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#007AFF] rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsProgress() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold text-[#1D1D1F] tracking-tight">
        Skills & Progress
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((category) => (
          <div 
            key={category.category}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-5 text-[#007AFF]">
              {category.icon}
              <h3 className="text-base font-medium text-[#1D1D1F]">{category.category}</h3>
            </div>
            
            {/* Skills List */}
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <ProgressBar 
                  key={skill.name}
                  progress={skill.progress}
                  label={skill.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}