import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FileText, Download, TrendingUp, Users, BookOpen } from 'lucide-react';

export default function Reports() {
  const reportTypes = [
    { title: 'Student Performance Report', description: 'Comprehensive academic performance analysis', icon: TrendingUp, color: 'bg-primary-blue' },
    { title: 'Attendance Report', description: 'Monthly attendance records and statistics', icon: Users, color: 'bg-success-green' },
    { title: 'Fee Collection Report', description: 'Financial collection and pending fees', icon: FileText, color: 'bg-warning-orange' },
    { title: 'Academic Progress Report', description: 'Subject-wise performance tracking', icon: BookOpen, color: 'bg-info-purple' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1>Reports & Analytics</h1>
        <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
          Generate and download various reports
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report, index) => {
          const Icon = report.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${report.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4>{report.title}</h4>
                  <p className="text-gray-500 mt-1" style={{ fontSize: 'var(--text-body)' }}>
                    {report.description}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Preview
                    </Button>
                    <Button className="bg-primary-blue hover:bg-primary-dark text-white flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-8 text-center">
        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="mb-2">Custom Reports</h3>
        <p className="text-gray-500 mb-6" style={{ fontSize: 'var(--text-body)' }}>
          Create custom reports with advanced filtering options
        </p>
        <Button className="bg-primary-blue hover:bg-primary-dark text-white">
          Create Custom Report
        </Button>
      </Card>
    </div>
  );
}
