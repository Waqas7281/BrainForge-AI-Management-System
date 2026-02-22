import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { Breadcrumbs } from './Breadcrumbs';
import { MobileSidebarProvider } from './MobileSidebarContext';

export function RootLayout() {
  return (
    <MobileSidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNavbar />
          <main className="flex-1 p-6">
            <Breadcrumbs />
            <Outlet />
          </main>
        </div>
      </div>
    </MobileSidebarProvider>
  );
}