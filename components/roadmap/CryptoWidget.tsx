'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, RefreshCw } from 'lucide-react'

interface CryptoPrice {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
}

export function CryptoWidget() {
  const [prices, setPrices] = useState<CryptoPrice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const fetchPrices = async () => {
    setLoading(true)
    setError(false)
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true'
      )
      
      if (!response.ok) throw new Error('API error')
      
      const data = await response.json()
      
      const formatted: CryptoPrice[] = [
        {
          id: 'bitcoin',
          symbol: 'BTC',
          name: 'Bitcoin',
          current_price: data.bitcoin?.usd || 0,
          price_change_percentage_24h: data.bitcoin?.usd_24h_change || 0
        },
        {
          id: 'ethereum',
          symbol: 'ETH',
          name: 'Ethereum',
          current_price: data.ethereum?.usd || 0,
          price_change_percentage_24h: data.ethereum?.usd_24h_change || 0
        }
      ]
      
      setPrices(formatted)
      setLastUpdate(new Date())
    } catch (err) {
      console.error('Crypto fetch error:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    // Auto-refresh every 60 seconds
    const interval = setInterval(fetchPrices, 60000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : ''
    return `${sign}${change.toFixed(2)}%`
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-500 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Crypto Live
        </h2>
        <button
          onClick={fetchPrices}
          disabled={loading}
          className="text-xs text-gray-400 hover:text-[#007AFF] transition-colors flex items-center gap-1"
        >
          <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
          {lastUpdate ? lastUpdate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }) : ''}
        </button>
      </div>

      {/* Simple elegant line with prices */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        {error ? (
          <p className="text-sm text-gray-400">Unable to load prices</p>
        ) : loading && prices.length === 0 ? (
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <RefreshCw className="w-4 h-4 animate-spin" />
            Loading...
          </div>
        ) : (
          <div className="flex items-center gap-8">
            {prices.map((crypto) => (
              <div key={crypto.id} className="flex items-center gap-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{crypto.symbol}</p>
                  <p className="text-xl font-semibold text-[#1D1D1F]">
                    {formatPrice(crypto.current_price)}
                  </p>
                </div>
                <span className={`text-sm font-medium ${
                  crypto.price_change_percentage_24h >= 0 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {formatChange(crypto.price_change_percentage_24h)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}