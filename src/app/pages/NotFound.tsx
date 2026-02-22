import { Button } from '../components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-primary-blue mb-4" style={{ fontSize: '120px', lineHeight: '1' }}>404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8" style={{ fontSize: 'var(--text-body-large)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/">
            <Button className="bg-primary-blue hover:bg-primary-dark text-white flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
