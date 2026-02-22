import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { DollarSign, TrendingUp, Users, AlertCircle } from 'lucide-react';

const feeRecords = [
  { id: 'FEE001', student: 'Alice Johnson', class: 'Grade 10-A', amount: '$1,200', paid: '$1,200', status: 'paid', date: 'Feb 15, 2026' },
  { id: 'FEE002', student: 'Bob Smith', class: 'Grade 9-B', amount: '$1,100', paid: '$550', status: 'partial', date: 'Feb 10, 2026' },
  { id: 'FEE003', student: 'Charlie Davis', class: 'Grade 11-A', amount: '$1,300', paid: '$0', status: 'pending', date: '-' },
  { id: 'FEE004', student: 'Diana Prince', class: 'Grade 10-B', amount: '$1,200', paid: '$1,200', status: 'paid', date: 'Feb 18, 2026' },
];

export default function Fees() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Fee Management</h1>
        <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
          Track and manage student fee payments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-success-green/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-success-green" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Total Collected</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>$2.4M</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-warning-orange/10 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-warning-orange" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Pending</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>$450K</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-blue" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Paid Students</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>2,156</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-teal" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Collection Rate</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>84.2%</div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fee ID</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>
                    <span className="font-mono text-gray-900" style={{ fontSize: 'var(--text-small)' }}>
                      {record.id}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-900">{record.student}</TableCell>
                  <TableCell className="text-gray-700">{record.class}</TableCell>
                  <TableCell className="text-gray-900 font-medium">{record.amount}</TableCell>
                  <TableCell className="text-gray-900 font-medium">{record.paid}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        record.status === 'paid'
                          ? 'bg-success-green/10 text-success-green border-success-green/20'
                          : record.status === 'partial'
                          ? 'bg-warning-orange/10 text-warning-orange border-warning-orange/20'
                          : 'bg-error-red/10 text-error-red border-error-red/20'
                      }
                    >
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-700">{record.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-primary-blue hover:text-primary-dark">
                      Collect
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
