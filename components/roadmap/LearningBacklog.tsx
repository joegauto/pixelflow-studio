'use client'

import { useState } from 'react'
import { BookOpen, Check, Plus, X } from 'lucide-react'

interface LearningItem {
  id: number
  text: string
  completed: boolean
}

const initialItems: LearningItem[] = [
  { id: 1, text: 'Completar curso de LangChain y agentes', completed: false },
  { id: 2, text: 'Practicar con Cursor y proyectos reales', completed: false },
  { id: 3, text: 'Aprender PostgreSQL avanzado', completed: false },
  { id: 4, text: 'Estudiar principios OWASP Top 10', completed: false },
  { id: 5, text: 'Configurar entorno de pentesting', completed: false },
  { id: 6, text: 'Profundizar en DeFi y smart contracts', completed: false },
]

export function LearningBacklog() {
  const [items, setItems] = useState<LearningItem[]>(initialItems)
  const [newItem, setNewItem] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), text: newItem.trim(), completed: false }])
      setNewItem('')
      setIsAdding(false)
    }
  }

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const completedCount = items.filter(i => i.completed).length

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#1D1D1F] tracking-tight">
          Learning Backlog
        </h2>
        <span className="text-sm text-gray-400">
          {completedCount}/{items.length} completado
        </span>
      </div>

      {/* Apple Health-style cards */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        {/* Progress ring placeholder - minimal visual */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
          <div className="w-12 h-12 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#007AFF]" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500">Progreso de aprendizaje</p>
            <p className="text-2xl font-semibold text-[#1D1D1F]">
              {Math.round((completedCount / items.length) * 100)}%
            </p>
          </div>
        </div>

        {/* Items list */}
        <div className="space-y-3">
          {items.map((item) => (
            <div 
              key={item.id}
              className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-gray-50 ${
                item.completed ? 'opacity-50' : ''
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  item.completed 
                    ? 'bg-[#007AFF] border-[#007AFF]' 
                    : 'border-gray-300 hover:border-[#007AFF]'
                }`}
              >
                {item.completed && <Check className="w-3.5 h-3.5 text-white" />}
              </button>
              
              <span className={`flex-1 text-sm ${
                item.completed 
                  ? 'text-gray-400 line-through' 
                  : 'text-[#1D1D1F]'
              }`}>
                {item.text}
              </span>

              <button
                onClick={() => deleteItem(item.id)}
                className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Add new item */}
        {isAdding ? (
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addItem()}
              placeholder="Nuevo item..."
              className="flex-1 px-4 py-2 text-sm bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#007AFF]/20 focus:bg-white transition-all"
              autoFocus
            />
            <button
              onClick={addItem}
              className="px-4 py-2 bg-[#007AFF] text-white text-sm font-medium rounded-xl hover:bg-[#007AFF]/90 transition-colors"
            >
              Agregar
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="mt-4 flex items-center gap-2 text-sm text-[#007AFF] hover:text-[#007AFF]/80 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Agregar nuevo tema
          </button>
        )}
      </div>
    </section>
  )
}