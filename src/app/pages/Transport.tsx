import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Plus, Bus, MapPin, Users } from 'lucide-react';

const routes = [
  { id: 'RT001', name: 'Route A - Downtown', bus: 'BUS-101', driver: 'John Doe', students: 42, stops: 8, status: 'active' },
  { id: 'RT002', name: 'Route B - Suburbs', bus: 'BUS-102', driver: 'Jane Smith', students: 38, stops: 6, status: 'active' },
  { id: 'RT003', name: 'Route C - North', bus: 'BUS-103', driver: 'Mike Wilson', students: 35, stops: 7, status: 'active' },
  { id: 'RT004', name: 'Route D - East', bus: 'BUS-104', driver: 'Sarah Brown', students: 40, stops: 9, status: 'maintenance' },
];

export default function Transport() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Transport Management</h1>
          <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
            Manage school buses and routes
          </p>
        </div>
        <Button className="bg-primary-blue hover:bg-primary-dark text-white flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Route
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Total Buses</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>28</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Active Routes</div>
          <div className="text-success-green mt-1" style={{ fontSize: 'var(--text-h3)' }}>24</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Students Using</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>1,842</div>
        </Card>
        <Card className="p-4">
          <div className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>Drivers</div>
          <div className="text-gray-900 mt-1" style={{ fontSize: 'var(--text-h3)' }}>32</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {routes.map((route) => (
          <Card key={route.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                  <Bus className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h4>{route.name}</h4>
                  <p className="text-gray-500 mt-1" style={{ fontSize: 'var(--text-small)' }}>
                    {route.id} • {route.bus}
                  </p>
                </div>
              </div>
              <Badge
                className={
                  route.status === 'active'
                    ? 'bg-success-green/10 text-success-green border-success-green/20'
                    : 'bg-warning-orange/10 text-warning-orange border-warning-orange/20'
                }
              >
                {route.status.charAt(0).toUpperCase() + route.status.slice(1)}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4" />
                <span style={{ fontSize: 'var(--text-body)' }}>{route.students} Students</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4" />
                <span style={{ fontSize: 'var(--text-body)' }}>{route.stops} Stops</span>
              </div>
              <div className="text-gray-700" style={{ fontSize: 'var(--text-body)' }}>
                Driver: {route.driver}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1">Track Bus</Button>
              <Button className="flex-1 bg-primary-blue hover:bg-primary-dark text-white">View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
