"use client"

import DashboardStats from '@/components/dashboard-stats-char'
import ScanHistoryChartComponent from '@/components/scan-history-chart'
import FindingsSeverityChart from '@/components/findings-severity-chart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <DashboardStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Scan History</CardTitle>
          </CardHeader>
          <CardContent>
            <ScanHistoryChartComponent />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Findings by Severity</CardTitle>
          </CardHeader>
          <CardContent>
            <FindingsSeverityChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}