'use client'

import { useState } from 'react'
import { Target, DollarSign, Shield, Plus, Check, X } from 'lucide-react'

interface Goal {
  id: number
  text: string
  completed: boolean
}

const initialGoals = {
  shortTerm: [
    { id: 1, text: 'Completar 3 proyectos con Cursor', completed: false },
    { id: 2, text: 'Obtener certificación básica de ciberseguridad', completed: false },
    { id: 3, text: 'Crear portfolio con proyectos de IA', completed: false },
  ],
  income: [
    { id: 4, text: 'Configurar cuenta en Hotmart', completed: false },
    { id: 5, text: 'Crear primer digital product', completed: false },
    { id: 6, text: 'Setup sistema de dropshipping básico', completed: false },
  ],
  security: [
    { id: 7, text: 'Estudiar análisis de smart contracts', completed: false },
    { id: 8, text: 'Setup wallet hardware', completed: false },
    { id: 9, text: 'Diversificar 10% en crypto', completed: false },
  ]
}

const columns = [
  { 
    key: 'shortTerm' as const, 
    title: 'Metas a Corto Plazo', 
    icon: <Target className="w-5 h-5" />,
    color: 'text-[#007AFF]',
    bg: 'bg-[#007AFF]/10'
  },
  { 
    key: 'income' as const, 
    title: 'Sistemas de Ingreso', 
    icon: <DollarSign className="w-5 h-5" />,
    color: 'text-green-600',
    bg: 'bg-green-500/10'
  },
  { 
    key: 'security' as const, 
    title: 'Seguridad / Crypto', 
    icon: <Shield className="w-5 h-5" />,
    color: 'text-purple-600',
    bg: 'bg-purple-500/10'
  },
]

function GoalColumn({ 
  title, 
  icon, 
  color, 
  bg,
  goals,
  onToggle,
  onAdd,
  onDelete
}: { 
  title: string
  icon: React.ReactNode
  color: string
  bg: string
  goals: Goal[]
  onToggle: (id: number) => void
  onAdd: (key: 'shortTerm' | 'income' | 'security', text: string) => void
  onDelete: (id: number) => void
}) {
  const [isAdding, setIsAdding] = useState(false)
  const [newGoal, setNewGoal] = useState('')

  const handleAdd = () => {
    if (newGoal.trim()) {
      onAdd(goals[0] ? 'shortTerm' : 'shortTerm', newGoal.trim())
      setNewGoal('')
      setIsAdding(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col">
      {/* Header */}
      <div className={`flex items-center gap-2 mb-4 ${color}`}>
        {icon}
        <h3 className="text-base font-medium text-[#1D1D1F]">{title}</h3>
      </div>

      {/* Goals list */}
      <div className="space-y-2 flex-1">
        {goals.map((goal) => (
          <div 
            key={goal.id}
            className={`group flex items-start gap-2 p-2 rounded-lg transition-all hover:bg-gray-50 ${
              goal.completed ? 'opacity-50' : ''
            }`}
          >
            <button
              onClick={() => onToggle(goal.id)}
              className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                goal.completed 
                  ? 'bg-[#007AFF] border-[#007AFF]' 
                  : 'border-gray-300 hover:border-[#007AFF]'
              }`}
            >
              {goal.completed && <Check className="w-3 h-3 text-white" />}
            </button>
            
            <span className={`text-sm flex-1 ${
              goal.completed 
                ? 'text-gray-400 line-through' 
                : 'text-[#1D1D1F]'
            }`}>
              {goal.text}
            </span>

            <button
              onClick={() => onDelete(goal.id)}
              className="opacity-0 group-hover:opacity-100 p-0.5 text-gray-400 hover:text-red-500 transition-all"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      {/* Add new */}
      {isAdding ? (
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="Nueva meta..."
            className="flex-1 px-3 py-1.5 text-sm bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-[#007AFF]/20"
            autoFocus
          />
          <button
            onClick={handleAdd}
            className="px-3 py-1.5 bg-[#007AFF] text-white text-sm rounded-lg"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="mt-3 flex items-center gap-1 text-xs text-gray-400 hover:text-[#007AFF]"
        >
          <Plus className="w-3 h-3" />
          Agregar
        </button>
      )}
    </div>
  )
}

export function StrategyGoals() {
  const [goals, setGoals] = useState(initialGoals)

  const toggleGoal = (id: number) => {
    const newGoals = { ...goals }
    ;(Object.keys(newGoals) as Array<keyof typeof goals>).forEach(key => {
      newGoals[key] = newGoals[key].map(g => 
        g.id === id ? { ...g, completed: !g.completed } : g
      )
    })
    setGoals(newGoals)
  }

  const addGoal = (key: 'shortTerm' | 'income' | 'security', text: string) => {
    const id = Date.now()
    setGoals({
      ...goals,
      [key]: [...goals[key], { id, text, completed: false }]
    })
  }

  const deleteGoal = (id: number) => {
    const newGoals = { ...goals }
    ;(Object.keys(newGoals) as Array<keyof typeof goals>).forEach(key => {
      newGoals[key] = newGoals[key].filter(g => g.id !== id)
    })
    setGoals(newGoals)
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-[#1D1D1F] tracking-tight">
        Strategy
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((column) => (
          <GoalColumn
            key={column.key}
            title={column.title}
            icon={column.icon}
            color={column.color}
            bg={column.bg}
            goals={goals[column.key]}
            onToggle={toggleGoal}
            onAdd={addGoal}
            onDelete={deleteGoal}
          />
        ))}
      </div>
    </section>
  )
}