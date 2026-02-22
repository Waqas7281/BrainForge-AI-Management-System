import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Plus, Users, Clock, BookOpen } from 'lucide-react';

const classes = [
  { id: 'CLS001', name: 'Grade 10-A', students: 42, teacher: 'Dr. Sarah Mitchell', subject: 'Mathematics', schedule: 'Mon, Wed, Fri - 9:00 AM' },
  { id: 'CLS002', name: 'Grade 9-B', students: 38, teacher: 'Prof. James Anderson', subject: 'Physics', schedule: 'Tue, Thu - 10:00 AM' },
  { id: 'CLS003', name: 'Grade 11-A', students: 35, teacher: 'Ms. Emily Parker', subject: 'English', schedule: 'Mon, Wed, Fri - 11:00 AM' },
  { id: 'CLS004', name: 'Grade 10-B', students: 40, teacher: 'Mr. David Chen', subject: 'Chemistry', schedule: 'Tue, Thu - 2:00 PM' },
  { id: 'CLS005', name: 'Grade 12-A', students: 32, teacher: 'Dr. Robert Taylor', subject: 'Biology', schedule: 'Mon, Wed - 1:00 PM' },
  { id: 'CLS006', name: 'Grade 9-A', students: 44, teacher: 'Mrs. Lisa Brown', subject: 'History', schedule: 'Tue, Thu, Fri - 9:00 AM' },
];

export default function Classes() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Classes</h1>
          <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
            Manage class schedules and assignments
          </p>
        </div>
        <Button className="bg-primary-blue hover:bg-primary-dark text-white flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Class
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Total Classes</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>68</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Active Today</div>
          <div className="text-success-green mt-1" style={{ fontSize: 'var(--text-h3)' }}>42</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Avg Students</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>39</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Subjects</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>24</div>
        </Card>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <Card key={classItem.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3>{classItem.name}</h3>
                <p className="text-gray-500 mt-1" style={{ fontSize: 'var(--text-small)' }}>
                  {classItem.id}
                </p>
              </div>
              <Badge className="bg-primary-light text-primary-blue border-primary-blue/20">
                {classItem.subject}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700" style={{ fontSize: 'var(--text-body)' }}>
                <Users className="w-4 h-4 text-gray-500" />
                <span>{classItem.students} Students</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700" style={{ fontSize: 'var(--text-body)' }}>
                <BookOpen className="w-4 h-4 text-gray-500" />
                <span>{classItem.teacher}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700" style={{ fontSize: 'var(--text-body)' }}>
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{classItem.schedule}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button variant="outline" className="flex-1">View Details</Button>
              <Button className="flex-1 bg-primary-blue hover:bg-primary-dark text-white">Edit</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
