import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { User, Bell, Lock, Globe, Palette, Database } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Settings</h1>
        <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
          Manage application preferences and configurations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <Card className="p-4 lg:col-span-1">
          <nav className="space-y-1">
            {[
              { icon: User, label: 'Profile' },
              { icon: Bell, label: 'Notifications' },
              { icon: Lock, label: 'Security' },
              { icon: Globe, label: 'Language' },
              { icon: Palette, label: 'Appearance' },
              { icon: Database, label: 'Data & Privacy' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <Icon className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-900" style={{ fontSize: 'var(--text-body)' }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </Card>

        {/* Settings Content */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="mb-6">Profile Settings</h3>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input defaultValue="Admin User" className="bg-gray-50 border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input type="email" defaultValue="admin@school.edu" className="bg-gray-50 border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input type="tel" defaultValue="+1 (555) 000-0000" className="bg-gray-50 border-gray-300" />
            </div>

            <div className="border-t border-gray-300 pt-6">
              <h4 className="mb-4">Notification Preferences</h4>
              <div className="space-y-4">
                {[
                  { label: 'Email Notifications', description: 'Receive email updates about important events' },
                  { label: 'Push Notifications', description: 'Get push notifications on your device' },
                  { label: 'SMS Alerts', description: 'Receive SMS for critical updates' },
                ].map((pref) => (
                  <div key={pref.label} className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-900" style={{ fontSize: 'var(--text-body)' }}>
                        {pref.label}
                      </div>
                      <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>
                        {pref.description}
                      </div>
                    </div>
                    <Switch />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-6">
              <Button className="bg-primary-blue hover:bg-primary-dark text-white">
                Save Changes
              </Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
