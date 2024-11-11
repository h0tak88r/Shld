import ScanForm from '@/components/scan-form'
import ScanHistory from '@/components/scan-history'
import RunningScansList from '@/components/running-scans-list'

export default function ScansPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Scans</h1>
      <ScanForm />
      <div className="grid gap-8 md:grid-cols-2">
        <RunningScansList />
        <ScanHistory />
      </div>
    </div>
  )
}