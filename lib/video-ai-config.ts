export function estimateCost(duration: number, resolution: string, provider: string): number {
  const baseRate = resolution === '4K' ? 0.05 : resolution === '1080p' ? 0.03 : 0.02
  return duration * baseRate
}

export const VIDEO_PROVIDERS = {
  RUNWAY: { name: 'Runway ML', maxDuration: 60 },
  PIKA: { name: 'Pika Labs', maxDuration: 30 },
}
