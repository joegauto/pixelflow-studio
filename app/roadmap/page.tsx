'use client';

import { useState, useEffect } from 'react';
import { 
  Brain, 
  Code2, 
  Shield, 
  CheckCircle2, 
  Circle, 
  TrendingUp, 
  TrendingDown,
  Target,
  DollarSign,
  Lock,
  Plus,
  X,
  Coins
} from 'lucide-react';

// Types
interface LearningItem {
  id: number;
  title: string;
  category: 'AI' | 'Web' | 'Security' | 'Crypto';
  completed: boolean;
}

interface Goal {
  id: number;
  title: string;
  completed: boolean;
}

interface CryptoPrice {
  symbol: string;
  price: number;
  change24h: number;
}

// Initial data
const initialLearningItems: LearningItem[] = [
  { id: 1, title: 'Cursor AI - Proyectos completos', category: 'AI', completed: false },
  { id: 2, title: 'LangChain / LangGraph', category: 'AI', completed: false },
  { id: 3, title: 'RAG Systems', category: 'AI', completed: false },
  { id: 4, title: 'API REST con Next.js', category: 'Web', completed: false },
  { id: 5, title: 'PostgreSQL + Prisma', category: 'Web', completed: false },
  { id: 6, title: 'Pentesting con Kali Linux', category: 'Security', completed: false },
  { id: 7, title: 'OSINT Fundamentals', category: 'Security', completed: false },
  { id: 8, title: 'Smart Contracts Básicos', category: 'Crypto', completed: false },
];

const initialGoals: { shortTerm: Goal[]; income: Goal[]; security: Goal[] } = {
  shortTerm: [
    { id: 1, title: 'Completar curso de Agentes AI', completed: false },
    { id: 2, title: 'Crear 3 proyectos con Cursor', completed: false },
    { id: 3, title: 'Dominar APIs de LLMs', completed: false },
  ],
  income: [
    { id: 1, title: 'Publicar curso en Hotmart', completed: false },
    { id: 2, title: 'Setup tienda digital (Dropshipping)', completed: false },
    { id: 3, title: 'Freelance proyectos IA', completed: false },
  ],
  security: [
    { id: 1, title: 'Certificación Security+', completed: false },
    { id: 2, title: 'Portfolio de write-ups', completed: false },
    { id: 3, title: 'Invertir en BTC/ETH mensualmente', completed: false },
  ],
};

const skills = [
  { 
    name: 'Inteligencia Artificial', 
    progress: 45, 
    icon: Brain, 
    description: 'Agentes y Cursor'
  },
  { 
    name: 'Desarrollo Web', 
    progress: 65, 
    icon: Code2, 
    description: 'APIs y Bases de Datos'
  },
  { 
    name: 'Hacking Ético y Crypto', 
    progress: 30, 
    icon: Shield, 
    description: 'Pentesting y Blockchain'
  },
];

export default function RoadmapPage() {
  const [learningItems, setLearningItems] = useState<LearningItem[]>(initialLearningItems);
  const [goals, setGoals] = useState(initialGoals);
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([
    { symbol: 'BTC', price: 0, change24h: 0 },
    { symbol: 'ETH', price: 0, change24h: 0 },
  ]);
  const [loading, setLoading] = useState(true);
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<'AI' | 'Web' | 'Security' | 'Crypto'>('AI');
  const [showAddForm, setShowAddForm] = useState(false);

  // Fetch crypto prices
  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true'
        );
        const data = await response.json();
        setCryptoPrices([
          { symbol: 'BTC', price: data.bitcoin.usd, change24h: data.bitcoin.usd_24h_change },
          { symbol: 'ETH', price: data.ethereum.usd, change24h: data.ethereum.usd_24h_change },
        ]);
      } catch (error) {
        setCryptoPrices([
          { symbol: 'BTC', price: 67432, change24h: 2.34 },
          { symbol: 'ETH', price: 3456, change24h: 1.87 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
    const interval = setInterval(fetchCrypto, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleLearningItem = (id: number) => {
    setLearningItems(items => 
      items.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const toggleGoal = (category: 'shortTerm' | 'income' | 'security', id: number) => {
    setGoals(prev => ({
      ...prev,
      [category]: prev[category].map(goal => 
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    }));
  };

  const addLearningItem = () => {
    if (!newItemTitle.trim()) return;
    const newItem: LearningItem = {
      id: Date.now(),
      title: newItemTitle,
      category: newItemCategory,
      completed: false,
    };
    setLearningItems([...learningItems, newItem]);
    setNewItemTitle('');
    setShowAddForm(false);
  };

  const deleteLearningItem = (id: number) => {
    setLearningItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* HEADER */}
        <header className="text-center mb-20">
          <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] to-[#5856D6] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-semibold">
            MJ
          </div>
          <h1 className="text-5xl font-bold text-[#1D1D1F] mb-3 tracking-tight">
            María Joel
          </h1>
          <p className="text-xl text-[#6E6E73] mb-6">
            Consultora tecnológica en transición hacia IA & Desarrollo
          </p>
          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#007AFF] text-white text-sm font-medium">
            En proceso de transición tecnológica
          </span>
        </header>

        {/* SKILLS & PROGRESS */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-[#1D1D1F] mb-8">Skills & Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="bg-white rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#E5E5EA] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <skill.icon className="w-6 h-6 text-[#007AFF] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1">{skill.name}</h3>
                <p className="text-sm text-[#86868B] mb-5">{skill.description}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-[#F5F5F7] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] rounded-full transition-all duration-700"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-[#6E6E73] w-12">{skill.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CRYPTO LIVE WIDGET */}
        <section className="mb-20">
          <h2 className="text-sm font-medium text-[#86868B] mb-4">Crypto Live</h2>
          <div className="bg-[#F5F5F7] rounded-2xl p-6 flex items-center justify-center gap-12">
            {cryptoPrices.map((crypto) => (
              <div key={crypto.symbol} className="flex items-center gap-3">
                <Coins className="w-6 h-6 text-[#F7931A]" strokeWidth={1.5} />
                <span className="text-lg font-semibold text-[#1D1D1F]">{crypto.symbol}</span>
                <span className="text-lg text-[#1D1D1F]">
                  {loading ? '...' : `$${crypto.price.toLocaleString()}`}
                </span>
                {!loading && (
                  <>
                    <span className={`text-sm font-medium ${crypto.change24h >= 0 ? 'text-[#34C759]' : 'text-[#FF3B30]'}`}>
                      {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                    </span>
                    {crypto.change24h >= 0 ? (
                      <TrendingUp className="w-4 h-4 text-[#34C759]" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-[#FF3B30]" />
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* LEARNING BACKLOG */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-[#1D1D1F]">Learning Backlog</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F5F5F7] text-[#1D1D1F] text-sm font-medium hover:bg-[#E5E5EA] transition-colors"
            >
              {showAddForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {showAddForm ? 'Cancelar' : 'Añadir'}
            </button>
          </div>

          {showAddForm && (
            <div className="bg-[#F5F5F7] rounded-2xl p-6 mb-6">
              <input
                type="text"
                placeholder="¿Qué necesitas aprender?"
                value={newItemTitle}
                onChange={(e) => setNewItemTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E5EA] text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#007AFF] mb-4"
                onKeyDown={(e) => e.key === 'Enter' && addLearningItem()}
              />
              <div className="flex gap-2">
                {(['AI', 'Web', 'Security', 'Crypto'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setNewItemCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      newItemCategory === cat
                        ? 'bg-[#007AFF] text-white'
                        : 'bg-white text-[#6E6E73] border border-[#E5E5EA]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningItems.map((item) => (
              <div 
                key={item.id}
                className={`bg-white rounded-2xl p-5 border transition-all duration-200 group ${
                  item.completed 
                    ? 'border-[#34C759] bg-[#F5F5F7]' 
                    : 'border-[#E5E5EA] hover:border-[#007AFF]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleLearningItem(item.id)}
                    className="mt-0.5 flex-shrink-0"
                  >
                    {item.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#34C759]" />
                    ) : (
                      <Circle className="w-5 h-5 text-[#86868B] group-hover:text-[#007AFF] transition-colors" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${
                      item.completed ? 'text-[#86868B] line-through' : 'text-[#1D1D1F]'
                    }`}>
                      {item.title}
                    </p>
                    <span className={`inline-block mt-2 px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.category === 'AI' ? 'bg-[#007AFF]/10 text-[#007AFF]' :
                      item.category === 'Web' ? 'bg-[#34C759]/10 text-[#34C759]' :
                      item.category === 'Security' ? 'bg-[#FF9500]/10 text-[#FF9500]' :
                      'bg-[#5856D6]/10 text-[#5856D6]'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteLearningItem(item.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-[#86868B] hover:text-[#FF3B30]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STRATEGY - GOALS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#1D1D1F] mb-8">Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#E5E5EA]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#007AFF]/10 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-[#1D1D1F]">Metas a Corto Plazo</h3>
              </div>
              <div className="space-y-3">
                {goals.shortTerm.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal('shortTerm', goal.id)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#F5F5F7] transition-colors text-left"
                  >
                    {goal.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#34C759] flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-[#86868B] flex-shrink-0" />
                    )}
                    <span className={`text-sm ${goal.completed ? 'text-[#86868B] line-through' : 'text-[#1D1D1F]'}`}>
                      {goal.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#E5E5EA]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#34C759]/10 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#34C759]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-[#1D1D1F]">Sistemas de Ingreso</h3>
              </div>
              <div className="space-y-3">
                {goals.income.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal('income', goal.id)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#F5F5F7] transition-colors text-left"
                  >
                    {goal.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#34C759] flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-[#86868B] flex-shrink-0" />
                    )}
                    <span className={`text-sm ${goal.completed ? 'text-[#86868B] line-through' : 'text-[#1D1D1F]'}`}>
                      {goal.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#E5E5EA]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#5856D6]/10 rounded-xl flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#5856D6]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-[#1D1D1F]">Seguridad / Crypto</h3>
              </div>
              <div className="space-y-3">
                {goals.security.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal('security', goal.id)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#F5F5F7] transition-colors text-left"
                  >
                    {goal.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#34C759] flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-[#86868B] flex-shrink-0" />
                    )}
                    <span className={`text-sm ${goal.completed ? 'text-[#86868B] line-through' : 'text-[#1D1D1F]'}`}>
                      {goal.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
