import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Plus, BookOpen, Users, TrendingUp } from 'lucide-react';

export default function Library() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Library Management</h1>
          <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
            Manage books and library resources
          </p>
        </div>
        <Button className="bg-primary-blue hover:bg-primary-dark text-white flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Book
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-blue" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Total Books</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>12,456</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-success-green/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-success-green" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Borrowed</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>3,241</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-warning-orange/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-warning-orange" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Available</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>9,215</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-error-red/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-error-red" />
            </div>
            <div>
              <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Overdue</div>
              <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>156</div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-8 text-center">
        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="mb-2">Library Catalog</h3>
        <p className="text-gray-500 mb-6" style={{ fontSize: 'var(--text-body)' }}>
          Full library catalog management coming soon
        </p>
        <Button className="bg-primary-blue hover:bg-primary-dark text-white">
          Browse Catalog
        </Button>
      </Card>
    </div>
  );
}
