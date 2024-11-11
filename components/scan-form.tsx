'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { toast } from 'react-hot-toast'

export default function ScanForm() {
  const [target, setTarget] = useState('')
  const [scanType, setScanType] = useState('normal')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Scan submitted:', { target, scanType })
    toast.success(`Started ${scanType} scan for ${target}`)
    // toast({
    //   title: "Scan Initiated",
    //   description: `Started ${scanType} scan for ${target}`,
    // })
    setTarget('')
    setScanType('normal')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="target">Subdomain/Host</Label>
        <Input
          id="target"
          placeholder="Enter subdomain or host"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Scan Type</Label>
        <RadioGroup value={scanType} onValueChange={setScanType}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="normal" id="normal" />
            <Label htmlFor="normal">Normal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="heavy" id="heavy" />
            <Label htmlFor="heavy">Heavy</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="full" id="full" />
            <Label htmlFor="full">Full Scan with Mitigation</Label>
          </div>
        </RadioGroup>
      </div>
      <Button type="submit">Start Scan</Button>
    </form>
  )
}