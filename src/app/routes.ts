import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/layout/RootLayout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Classes from './pages/Classes';
import Attendance from './pages/Attendance';
import Examinations from './pages/Examinations';
import Assignments from './pages/Assignments';
import Fees from './pages/Fees';
import Library from './pages/Library';
import Transport from './pages/Transport';
import Notices from './pages/Notices';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import AIAssistant from './pages/AIAssistant';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'students', Component: Students },
      { path: 'teachers', Component: Teachers },
      { path: 'classes', Component: Classes },
      { path: 'attendance', Component: Attendance },
      { path: 'examinations', Component: Examinations },
      { path: 'assignments', Component: Assignments },
      { path: 'fees', Component: Fees },
      { path: 'library', Component: Library },
      { path: 'transport', Component: Transport },
      { path: 'notices', Component: Notices },
      { path: 'reports', Component: Reports },
      { path: 'settings', Component: Settings },
      { path: 'ai-assistant', Component: AIAssistant },
    ],
  },
  { path: '*', Component: NotFound },
]);
