'use client';

import { useState, useEffect } from 'react';
import { Check, ChevronRight, TrendingUp, Shield, Database, Brain, Code, Lock, Bitcoin, Wallet, Target, Zap, BookOpen, Layers } from 'lucide-react';

// Types
interface Skill {
  name: string;
  progress: number;
  icon: React.ReactNode;
  color: string;
}

interface LearningItem {
  id: number;
  title: string;
  category: string;
  completed: boolean;
}

interface Goal {
  id: number;
  title: string;
  description: string;
}

interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}

export default function Dashboard() {
  const [learningItems, setLearningItems] = useState<LearningItem[]>([
    { id: 1, title: 'Cursor AI / v0', category: 'AI', completed: false },
    { id: 2, title: 'Agentes de IA con LangChain', category: 'AI', completed: false },
    { id: 3, title: 'APIs REST con FastAPI', category: 'Development', completed: false },
    { id: 4, title: 'PostgreSQL y Prisma', category: 'Database', completed: false },
    { id: 5, title: 'Metasploit Framework', category: 'Security', completed: false },
    { id: 6, title: 'Smart Contracts Solidity', category: 'Crypto', completed: false },
  ]);

  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch crypto prices
  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true'
        );
        const data = await res.json();
        
        const prices: CryptoPrice[] = [
          {
            symbol: 'BTC',
            name: 'Bitcoin',
            price: data.bitcoin?.usd || 0,
            change24h: data.bitcoin?.usd_24h_change || 0,
          },
          {
            symbol: 'ETH',
            name: 'Ethereum',
            price: data.ethereum?.usd || 0,
            change24h: data.ethereum?.usd_24h_change || 0,
          },
        ];
        
        setCryptoPrices(prices);
      } catch (error) {
        console.error('Error fetching crypto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
    // Refresh every 60 seconds
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

  const skills: Skill[] = [
    { name: 'Inteligencia Artificial', progress: 45, icon: <Brain className="w-5 h-5" />, color: 'bg-blue-500' },
    { name: 'Desarrollo Web', progress: 70, icon: <Code className="w-5 h-5" />, color: 'bg-emerald-500' },
    { name: 'Bases de Datos', progress: 55, icon: <Database className="w-5 h-5" />, color: 'bg-purple-500' },
    { name: 'Hacking Ético', progress: 30, icon: <Lock className="w-5 h-5" />, color: 'bg-red-500' },
    { name: 'Criptomonedas', progress: 40, icon: <Bitcoin className="w-5 h-5" />, color: 'bg-orange-500' },
  ];

  const shortTermGoals: Goal[] = [
    { id: 1, title: 'Dominar Cursor AI', description: 'Completar proyectos con IA' },
    { id: 2, title: 'Certificación AWS', description: 'Obtener Cloud Practitioner' },
    { id: 3, title: 'Portfolio IA', description: '3 proyectos con agentes' },
  ];

  const incomeSystems: Goal[] = [
    { id: 1, title: 'Hotmart', description: 'Crear curso de IA' },
    { id: 2, title: 'Dropshipping', description: 'Tienda automatizada' },
    { id: 3, title: 'Freelance', description: 'Clientes devs & IA' },
  ];

  const securityCrypto: Goal[] = [
    { id: 1, title: 'Hardware Wallet', description: 'Adquirir Ledger' },
    { id: 2, title: 'Yield Farming', description: 'DeFi seguro' },
    { id: 3, title: 'Ciberseguridad', description: 'Hack The Box' },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] to-[#5856D6] rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">FM</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Francisco Miguel</h1>
              <p className="text-gray-500 text-sm">Desarrollador Full Stack en Transición</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#007AFF]/10 rounded-full">
            <span className="w-2 h-2 bg-[#007AFF] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#007AFF]">En proceso de transición tecnológica</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* Skills & Progress */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-semibold">Skills & Progress</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${skill.color}/10 rounded-xl flex items-center justify-center ${skill.color}`}>
                      <span className="text-white">{skill.icon}</span>
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-2xl font-semibold text-gray-400">{skill.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-500`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Crypto Live Widget */}
        <section className="bg-gradient-to-r from-[#1D1D1F] to-[#2D2D2F] rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#007AFF]" />
              <h2 className="text-lg font-semibold">Crypto Live</h2>
            </div>
            <span className="text-xs text-gray-400">CoinGecko</span>
          </div>
          <div className="flex gap-8 mt-6">
            {loading ? (
              <div className="text-gray-400">Cargando...</div>
            ) : (
              cryptoPrices.map((crypto) => (
                <div key={crypto.symbol} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    {crypto.symbol === 'BTC' ? <Bitcoin className="w-5 h-5" /> : <Wallet className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{crypto.name}</div>
                    <div className="text-xl font-semibold">
                      ${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </div>
                    <div className={`text-xs ${crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}% 24h
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Learning Backlog */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-semibold">Learning Backlog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningItems.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleLearningItem(item.id)}
                className={`group bg-white rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-[#007AFF]/20 ${
                  item.completed ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    item.completed ? 'bg-[#007AFF] border-[#007AFF]' : 'border-gray-300 group-hover:border-[#007AFF]'
                  }`}>
                    {item.completed && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium transition-all ${item.completed ? 'line-through text-gray-400' : ''}`}>
                      {item.title}
                    </h3>
                    <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-500">
                      {item.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Goals / Strategy */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-semibold">Strategy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Short Term */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-[#007AFF]" />
                <h3 className="font-semibold">Corto Plazo</h3>
              </div>
              <div className="space-y-4">
                {shortTermGoals.map((goal) => (
                  <div key={goal.id} className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-medium text-sm">{goal.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{goal.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Income Systems */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Wallet className="w-5 h-5 text-emerald-500" />
                <h3 className="font-semibold">Ingresos</h3>
              </div>
              <div className="space-y-4">
                {incomeSystems.map((goal) => (
                  <div key={goal.id} className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-medium text-sm">{goal.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{goal.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security & Crypto */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-orange-500" />
                <h3 className="font-semibold">Seguridad & Crypto</h3>
              </div>
              <div className="space-y-4">
                {securityCrypto.map((goal) => (
                  <div key={goal.id} className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-medium text-sm">{goal.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{goal.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}