import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Plus, Bell, Calendar, Users } from 'lucide-react';

const notices = [
  { id: 1, title: 'Annual Day Celebration', date: 'March 30, 2026', category: 'Event', priority: 'high', audience: 'All Students' },
  { id: 2, title: 'Mid-Term Exam Schedule Released', date: 'March 15, 2026', category: 'Academic', priority: 'high', audience: 'Grade 9-12' },
  { id: 3, title: 'Parent-Teacher Meeting', date: 'March 20, 2026', category: 'Meeting', priority: 'medium', audience: 'Parents' },
  { id: 4, title: 'School Closed - Public Holiday', date: 'March 25, 2026', category: 'Holiday', priority: 'low', audience: 'All' },
  { id: 5, title: 'Sports Day Registration', date: 'April 5, 2026', category: 'Sports', priority: 'medium', audience: 'All Students' },
];

export default function Notices() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Notices & Announcements</h1>
          <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
            Create and manage school notices
          </p>
        </div>
        <Button className="bg-primary-blue hover:bg-primary-dark text-white flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Notice
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Total Notices</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>284</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>This Month</div>
          <div className="text-primary-blue mt-1" style={{ fontSize: 'var(--text-h3)' }}>42</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>High Priority</div>
          <div className="text-error-red mt-1" style={{ fontSize: 'var(--text-h3)' }}>8</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Upcoming Events</div>
          <div className="text-success-green mt-1" style={{ fontSize: 'var(--text-h3)' }}>15</div>
        </Card>
      </div>

      <div className="space-y-4">
        {notices.map((notice) => (
          <Card key={notice.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  notice.priority === 'high' ? 'bg-error-red/10' :
                  notice.priority === 'medium' ? 'bg-warning-orange/10' :
                  'bg-gray-100'
                }`}>
                  <Bell className={`w-6 h-6 ${
                    notice.priority === 'high' ? 'text-error-red' :
                    notice.priority === 'medium' ? 'text-warning-orange' :
                    'text-gray-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4>{notice.title}</h4>
                    <Badge
                      className={
                        notice.priority === 'high'
                          ? 'bg-error-red/10 text-error-red border-error-red/20'
                          : notice.priority === 'medium'
                          ? 'bg-warning-orange/10 text-warning-orange border-warning-orange/20'
                          : 'bg-gray-100 text-gray-700 border-gray-300'
                      }
                    >
                      {notice.priority.charAt(0).toUpperCase() + notice.priority.slice(1)}
                    </Badge>
                    <Badge className="bg-primary-light text-primary-blue border-primary-blue/20">
                      {notice.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-6 mt-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span style={{ fontSize: 'var(--text-body)' }}>{notice.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span style={{ fontSize: 'var(--text-body)' }}>{notice.audience}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
