import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Plus, Calendar, Clock, FileText } from 'lucide-react';

const exams = [
  { id: 1, subject: 'Mathematics', class: 'Grade 10-A', date: 'March 15, 2026', time: '9:00 AM - 12:00 PM', status: 'upcoming' },
  { id: 2, subject: 'Physics', class: 'Grade 11-A', date: 'March 18, 2026', time: '10:00 AM - 1:00 PM', status: 'upcoming' },
  { id: 3, subject: 'English', class: 'Grade 9-B', date: 'March 20, 2026', time: '9:00 AM - 11:00 AM', status: 'upcoming' },
  { id: 4, subject: 'Chemistry', class: 'Grade 12-A', date: 'February 18, 2026', time: '2:00 PM - 5:00 PM', status: 'completed' },
  { id: 5, subject: 'Biology', class: 'Grade 10-B', date: 'February 20, 2026', time: '9:00 AM - 12:00 PM', status: 'completed' },
];

export default function Examinations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Examinations</h1>
          <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
            Schedule and manage examinations
          </p>
        </div>
        <Button className="bg-primary-blue hover:bg-primary-dark text-white flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Schedule Exam
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Total Exams</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>156</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Upcoming</div>
          <div className="text-primary-blue mt-1" style={{ fontSize: 'var(--text-h3)' }}>24</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>In Progress</div>
          <div className="text-warning-orange mt-1" style={{ fontSize: 'var(--text-h3)' }}>3</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Completed</div>
          <div className="text-success-green mt-1" style={{ fontSize: 'var(--text-h3)' }}>129</div>
        </Card>
      </div>

      <div className="space-y-4">
        {exams.map((exam) => (
          <Card key={exam.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h4>{exam.subject}</h4>
                  <p className="text-gray-500 mt-1" style={{ fontSize: 'var(--text-body)' }}>
                    {exam.class}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-4 h-4" />
                  <span style={{ fontSize: 'var(--text-body)' }}>{exam.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-4 h-4" />
                  <span style={{ fontSize: 'var(--text-body)' }}>{exam.time}</span>
                </div>
                <Badge
                  className={
                    exam.status === 'upcoming'
                      ? 'bg-primary-blue/10 text-primary-blue border-primary-blue/20'
                      : 'bg-success-green/10 text-success-green border-success-green/20'
                  }
                >
                  {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                </Badge>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
