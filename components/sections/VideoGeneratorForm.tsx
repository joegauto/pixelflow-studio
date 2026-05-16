'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wand2, Upload, Settings, Download, Loader2, AlertCircle } from 'lucide-react'
import { useVideoGeneration } from '@/hooks/useVideoGeneration'
import { estimateCost } from '@/lib/video-ai-config'

export function VideoGeneratorForm() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('realistic')
  const [duration, setDuration] = useState('30')
  const [resolution, setResolution] = useState('1080p')
  
  const { generateVideo, isGenerating, progress, result, error, reset } = useVideoGeneration()

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    await generateVideo({
      prompt: prompt.trim(),
      style,
      duration: parseInt(duration),
      resolution
    })
  }

  const estimatedCost = estimateCost(parseInt(duration), resolution, 'RUNWAY')

  const videoStyles = [
    { id: 'realistic', name: 'Realista', description: 'Videos fotorrealistas' },
    { id: 'animated', name: 'Animado', description: 'Estilo de animación' },
    { id: 'cinematic', name: 'Cinematográfico', description: 'Calidad de película' },
    { id: 'artistic', name: 'Artístico', description: 'Estilo creativo único' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Generador de Videos IA
            </h2>
            <p className="text-xl text-gray-600">
              Describe tu video y deja que la inteligencia artificial lo cree por ti
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formulario */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe tu video
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ej: Un gato naranja caminando por un jardín lleno de flores coloridas en un día soleado..."
                    className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estilo de video
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {videoStyles.map((styleOption) => (
                      <button
                        key={styleOption.id}
                        onClick={() => setStyle(styleOption.id)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          style === styleOption.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-900">
                          {styleOption.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {styleOption.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duración
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="15">15 segundos</option>
                      <option value="30">30 segundos</option>
                      <option value="60">1 minuto</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resolución
                    </label>
                    <select
                      value={resolution}
                      onChange={(e) => setResolution(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="720p">HD (720p)</option>
                      <option value="1080p">Full HD (1080p)</option>
                      <option value="4K">4K Ultra HD</option>
                    </select>
                  </div>
                </div>

                {/* Estimación de costo */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-blue-800 text-sm">
                    <Settings className="w-4 h-4" />
                    <span className="font-medium">Estimación:</span>
                  </div>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>Costo estimado: <span className="font-semibold">${estimatedCost.toFixed(2)} USD</span></p>
                    <p>Tiempo estimado: <span className="font-semibold">2-5 minutos</span></p>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-red-800">
                      <AlertCircle className="w-4 h-4" />
                      <span className="font-medium">Error:</span>
                    </div>
                    <p className="mt-1 text-sm text-red-700">{error}</p>
                    <button
                      onClick={reset}
                      className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
                    >
                      Intentar de nuevo
                    </button>
                  </div>
                )}

                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generando video... {progress > 0 && `${progress}%`}
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      Generar Video
                    </>
                  )}
                </button>
              </div>

              {/* Preview */}
              <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center min-h-[400px]">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Generando tu video...</p>
                    <p className="text-sm text-gray-500 mt-2">Esto puede tomar unos minutos</p>
                    {progress > 0 && (
                      <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ) : result?.videoUrl ? (
                  <div className="w-full">
                    <video
                      controls
                      className="w-full rounded-lg shadow-lg"
                      poster={result.thumbnailUrl}
                    >
                      <source src={result.videoUrl} type="video/mp4" />
                      Tu navegador no soporta el elemento video.
                    </video>
                    <div className="mt-4 space-y-2">
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Descargar Video
                      </button>
                      {result.metadata && (
                        <div className="text-xs text-gray-500 text-center">
                          {result.metadata.resolution} • {result.metadata.fps}fps • {result.metadata.format.toUpperCase()} • {result.metadata.size}MB
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <Upload className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Tu video aparecerá aquí</p>
                    <p className="text-sm mt-2">Completa el formulario y haz clic en "Generar Video"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}