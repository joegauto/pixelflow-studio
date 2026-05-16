import { User, MapPin } from 'lucide-react'

export function Header() {
  return (
    <header className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-[#1D1D1F] tracking-tight">
            Tu Nombre
          </h1>
          <p className="text-base text-gray-500">
            Full Stack Developer en transición
          </p>
        </div>
        
        {/* Status Badge - Apple style */}
        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#007AFF]/10 text-[#007AFF] text-sm font-medium rounded-full">
          <span className="w-2 h-2 bg-[#007AFF] rounded-full animate-pulse"></span>
          En proceso de transición tecnológica
        </span>
      </div>

      {/* Subtitle with location */}
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <MapPin className="w-4 h-4" />
        <span>Asunción, Paraguay</span>
      </div>
    </header>
  )
}