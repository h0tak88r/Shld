"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { date: '2023-01-01', scans: 65 },
  { date: '2023-02-01', scans: 59 },
  { date: '2023-03-01', scans: 80 },
  { date: '2023-04-01', scans: 81 },
  { date: '2023-05-01', scans: 56 },
  { date: '2023-06-01', scans: 55 },
  { date: '2023-07-01', scans: 40 },
]

export default function ScanHistoryChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="scans" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}