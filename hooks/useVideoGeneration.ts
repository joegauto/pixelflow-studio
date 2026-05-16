'use client'
import { useState } from 'react'

interface VideoParams {
  prompt: string
  style: string
  duration: number
  resolution: string
}

interface VideoResult {
  videoUrl?: string
  thumbnailUrl?: string
  metadata?: {
    resolution: string
    fps: number
    format: string
    size: number
  }
}

export function useVideoGeneration() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<VideoResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const generateVideo = async (params: VideoParams) => {
    setIsGenerating(true)
    setProgress(0)
    setError(null)
    setResult(null)

    try {
      const response = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Error generando video')
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setIsGenerating(false)
      setProgress(0)
    }
  }

  const reset = () => {
    setResult(null)
    setError(null)
    setProgress(0)
  }

  return { generateVideo, isGenerating, progress, result, error, reset }
}
