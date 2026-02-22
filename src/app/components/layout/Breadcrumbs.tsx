import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatLabel = (str: string) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="flex items-center gap-2 text-gray-700 mb-6" style={{ fontSize: 'var(--text-body)' }}>
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-primary-blue transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={to} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-500" />
            {isLast ? (
              <span className="text-primary-blue font-medium">{formatLabel(value)}</span>
            ) : (
              <Link to={to} className="hover:text-primary-blue transition-colors">
                {formatLabel(value)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
