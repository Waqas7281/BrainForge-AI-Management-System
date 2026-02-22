import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar } from '../components/ui/calendar';
import { Badge } from '../components/ui/badge';
import { CheckCircle, XCircle, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';

const attendanceData = [
  { id: 1, student: 'Alice Johnson', class: 'Grade 10-A', status: 'present', time: '8:45 AM' },
  { id: 2, student: 'Bob Smith', class: 'Grade 9-B', status: 'present', time: '8:50 AM' },
  { id: 3, student: 'Charlie Davis', class: 'Grade 11-A', status: 'absent', time: '-' },
  { id: 4, student: 'Diana Prince', class: 'Grade 10-B', status: 'present', time: '8:40 AM' },
  { id: 5, student: 'Ethan Hunt', class: 'Grade 12-A', status: 'late', time: '9:15 AM' },
  { id: 6, student: 'Fiona Green', class: 'Grade 9-A', status: 'present', time: '8:55 AM' },
];

export default function Attendance() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1>Attendance</h1>
        <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
          Track and manage student attendance records
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-success-green/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-success-green" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Present</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>2,341</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-error-red/10 flex items-center justify-center">
              <XCircle className="w-6 h-6 text-error-red" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Absent</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>156</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-warning-orange/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-warning-orange" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Late</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>82</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center">
              <CalendarIcon className="w-6 h-6 text-primary-blue" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Avg Rate</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>93.7%</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="p-6">
          <h3 className="mb-4">Select Date</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-gray-300"
          />
        </Card>

        {/* Today's Attendance */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3>Today's Attendance</h3>
            <Button className="bg-primary-blue hover:bg-primary-dark text-white">
              Mark Attendance
            </Button>
          </div>
          <div className="space-y-3">
            {attendanceData.map((record) => (
              <div key={record.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                    <span className="text-primary-blue font-medium" style={{ fontSize: 'var(--text-small)' }}>
                      {record.student.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium" style={{ fontSize: 'var(--text-body)' }}>
                      {record.student}
                    </div>
                    <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>
                      {record.class} • {record.time}
                    </div>
                  </div>
                </div>
                <Badge
                  className={
                    record.status === 'present'
                      ? 'bg-success-green/10 text-success-green border-success-green/20'
                      : record.status === 'absent'
                      ? 'bg-error-red/10 text-error-red border-error-red/20'
                      : 'bg-warning-orange/10 text-warning-orange border-warning-orange/20'
                  }
                >
                  {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
