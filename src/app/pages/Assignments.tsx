import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Plus, Calendar, Users } from 'lucide-react';

const assignments = [
  { id: 1, title: 'Algebra Chapter 5 Problems', subject: 'Mathematics', class: 'Grade 10-A', due: 'March 25, 2026', submitted: 38, total: 42, status: 'active' },
  { id: 2, title: 'Physics Lab Report', subject: 'Physics', class: 'Grade 11-A', due: 'March 22, 2026', submitted: 25, total: 35, status: 'active' },
  { id: 3, title: 'Essay on Shakespeare', subject: 'English', class: 'Grade 9-B', due: 'March 28, 2026', submitted: 12, total: 38, status: 'active' },
  { id: 4, title: 'Chemical Reactions Worksheet', subject: 'Chemistry', class: 'Grade 12-A', due: 'February 20, 2026', submitted: 32, total: 32, status: 'closed' },
];

export default function Assignments() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Assignments</h1>
          <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
            Create and track student assignments
          </p>
        </div>
        <Button className="bg-primary-blue hover:bg-primary-dark text-white flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Assignment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Total Assignments</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>248</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Active</div>
          <div className="text-primary-blue mt-1" style={{ fontSize: 'var(--text-h3)' }}>52</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Pending Review</div>
          <div className="text-warning-orange mt-1" style={{ fontSize: 'var(--text-h3)' }}>18</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Avg Completion</div>
          <div className="text-success-green mt-1" style={{ fontSize: 'var(--text-h3)' }}>87%</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4>{assignment.title}</h4>
                <p className="text-gray-500 mt-1" style={{ fontSize: 'var(--text-small)' }}>
                  {assignment.subject} • {assignment.class}
                </p>
              </div>
              <Badge
                className={
                  assignment.status === 'active'
                    ? 'bg-primary-blue/10 text-primary-blue border-primary-blue/20'
                    : 'bg-gray-100 text-gray-700 border-gray-300'
                }
              >
                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-4 h-4" />
                <span style={{ fontSize: 'var(--text-body)' }}>Due: {assignment.due}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4" />
                <span style={{ fontSize: 'var(--text-body)' }}>
                  {assignment.submitted}/{assignment.total} submitted
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-success-green h-2 rounded-full"
                  style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1">View Submissions</Button>
              <Button className="flex-1 bg-primary-blue hover:bg-primary-dark text-white">Grade</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
