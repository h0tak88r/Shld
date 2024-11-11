'use client'

import { useState, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'

const initialScans = [
  { id: 1, target: 'example.com', type: 'Normal', progress: 0 },
  { id: 2, target: 'test.org', type: 'Heavy', progress: 0 },
]

export default function RunningScansList() {
  const [runningScans, setRunningScans] = useState(initialScans)

  useEffect(() => {
    const interval = setInterval(() => {
      setRunningScans(scans =>
        scans.map(scan => ({
          ...scan,
          progress: Math.min(scan.progress + Math.random() * 10, 100)
        }))
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Running Scans</h2>
      <div className="space-y-4">
        {runningScans.map(scan => (
          <div key={scan.id} className="p-4 border rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-medium">{scan.target}</span>
              <span className="text-sm text-gray-500">{scan.type}</span>
            </div>
            <Progress value={scan.progress} className="w-full" />
            <div className="text-right text-sm mt-1">{Math.round(scan.progress)}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}