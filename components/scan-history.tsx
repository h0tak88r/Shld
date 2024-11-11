import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table'
  
  const scanHistory = [
    { id: 1, target: 'example.com', type: 'Normal', status: 'Completed', date: '2023-07-01' },
    { id: 2, target: 'test.org', type: 'Heavy', status: 'Completed', date: '2023-07-02' },
    { id: 3, target: 'demo.net', type: 'Full', status: 'Completed', date: '2023-07-03' },
  ]
  
  export default function ScanHistory() {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Scan History</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Target</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scanHistory.map((scan) => (
              <TableRow key={scan.id}>
                <TableCell>{scan.target}</TableCell>
                <TableCell>{scan.type}</TableCell>
                <TableCell>{scan.status}</TableCell>
                <TableCell>{scan.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }