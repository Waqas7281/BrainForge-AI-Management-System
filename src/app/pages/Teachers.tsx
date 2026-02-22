import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { Plus, Search, Filter, Download, Mail, Phone } from 'lucide-react';

const teachers = [
  { id: 'TCH001', name: 'Dr. Sarah Mitchell', subject: 'Mathematics', email: 'sarah.m@school.edu', phone: '(555) 111-2222', experience: '12 years', status: 'Active' },
  { id: 'TCH002', name: 'Prof. James Anderson', subject: 'Physics', email: 'james.a@school.edu', phone: '(555) 222-3333', experience: '8 years', status: 'Active' },
  { id: 'TCH003', name: 'Ms. Emily Parker', subject: 'English', email: 'emily.p@school.edu', phone: '(555) 333-4444', experience: '6 years', status: 'Active' },
  { id: 'TCH004', name: 'Mr. David Chen', subject: 'Chemistry', email: 'david.c@school.edu', phone: '(555) 444-5555', experience: '10 years', status: 'Active' },
  { id: 'TCH005', name: 'Mrs. Lisa Brown', subject: 'History', email: 'lisa.b@school.edu', phone: '(555) 555-6666', experience: '15 years', status: 'On Leave' },
  { id: 'TCH006', name: 'Dr. Robert Taylor', subject: 'Biology', email: 'robert.t@school.edu', phone: '(555) 666-7777', experience: '9 years', status: 'Active' },
];

export default function Teachers() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Teachers</h1>
          <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
            Manage teacher information and assignments
          </p>
        </div>
        <Button className="bg-primary-blue hover:bg-primary-dark text-white flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Teacher
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Total Teachers</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>142</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Active</div>
          <div className="text-success-green mt-1" style={{ fontSize: 'var(--text-h3)' }}>138</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>On Leave</div>
          <div className="text-warning-orange mt-1" style={{ fontSize: 'var(--text-h3)' }}>4</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Avg Experience</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>9.5 yrs</div>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <Input
              type="search"
              placeholder="Search teachers by name, ID, or subject..."
              className="pl-10 bg-gray-50 border-gray-300"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </Card>

      {/* Teachers Table */}
      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Teacher ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell>
                    <span className="font-mono text-gray-900" style={{ fontSize: 'var(--text-small)' }}>
                      {teacher.id}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-success-green/10 flex items-center justify-center">
                        <span className="text-success-green font-medium">
                          {teacher.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-gray-900 font-medium" style={{ fontSize: 'var(--text-body)' }}>
                          {teacher.name}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-indigo/10 text-indigo border-indigo/20">
                      {teacher.subject}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-gray-700" style={{ fontSize: 'var(--text-small)' }}>
                        <Mail className="w-3 h-3" />
                        {teacher.email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700" style={{ fontSize: 'var(--text-small)' }}>
                        <Phone className="w-3 h-3" />
                        {teacher.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-gray-900" style={{ fontSize: 'var(--text-body)' }}>
                      {teacher.experience}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        teacher.status === 'Active'
                          ? 'bg-success-green/10 text-success-green border-success-green/20'
                          : 'bg-warning-orange/10 text-warning-orange border-warning-orange/20'
                      }
                    >
                      {teacher.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-primary-blue hover:text-primary-dark">
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
                        Edit
                      </Button>
                    </div>
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
