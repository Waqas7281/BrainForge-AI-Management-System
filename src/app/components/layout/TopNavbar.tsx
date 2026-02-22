import { Search, Bell, User, Menu } from 'lucide-react';
import { Input } from '../ui/input';
import { useMobileSidebar } from './MobileSidebarContext';

export function TopNavbar() {
  const { toggle } = useMobileSidebar();

  return (
    <header className="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-6">
      {/* Mobile Menu Button */}
      <button
        onClick={toggle}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg mr-4"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 bg-gray-50 border-gray-300"
          />
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error-red rounded-full"></span>
        </button>

        {/* User Avatar */}
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary-blue flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="text-left hidden md:block">
            <div className="text-gray-900" style={{ fontSize: 'var(--text-body)' }}>Admin User</div>
            <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Administrator</div>
          </div>
        </button>
      </div>
    </header>
  );
}