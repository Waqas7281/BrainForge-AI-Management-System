import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Bot, Send, Sparkles, TrendingUp, Users, BookOpen } from 'lucide-react';

const suggestions = [
  { icon: TrendingUp, label: 'Analyze student performance trends', color: 'bg-primary-blue' },
  { icon: Users, label: 'Generate attendance report for this week', color: 'bg-success-green' },
  { icon: BookOpen, label: 'Suggest lesson plans for Grade 10 Math', color: 'bg-info-purple' },
];

const chatMessages = [
  { type: 'assistant', message: 'Hello! I\'m your AI assistant. How can I help you manage your school today?' },
  { type: 'user', message: 'Show me attendance statistics for this month' },
  { type: 'assistant', message: 'Here\'s the attendance summary for February 2026:\n\n• Overall attendance rate: 93.7%\n• Total present: 2,341 students\n• Total absent: 156 students\n• Late arrivals: 82 students\n\nThe attendance rate is 2.3% higher than last month. Grade 10-A has the best attendance at 97.2%.' },
];

export default function AIAssistant() {
  return (
    <div className="space-y-6">
      <div>
        <h1>AI Assistant</h1>
        <p className="text-gray-500 mt-2" style={{ fontSize: 'var(--text-body)' }}>
          Get intelligent insights and automation powered by AI
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Suggestions Sidebar */}
        <Card className="p-6 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary-blue" />
            <h4>Quick Actions</h4>
          </div>
          <div className="space-y-3">
            {suggestions.map((suggestion, index) => {
              const Icon = suggestion.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors text-left"
                >
                  <div className={`w-8 h-8 rounded-lg ${suggestion.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-900" style={{ fontSize: 'var(--text-small)' }}>
                    {suggestion.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Chat Interface */}
        <Card className="p-6 lg:col-span-3 flex flex-col" style={{ height: '600px' }}>
          {/* Chat Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-gray-300">
            <div className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4>EduManage AI</h4>
              <p className="text-gray-500" style={{ fontSize: 'var(--text-small)' }}>
                Online • Powered by Advanced AI
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto py-6 space-y-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    msg.type === 'user'
                      ? 'bg-primary-blue text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p style={{ fontSize: 'var(--text-body)', whiteSpace: 'pre-line' }}>
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="pt-4 border-t border-gray-300">
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Ask me anything about your school management..."
                className="bg-gray-50 border-gray-300"
              />
              <Button className="bg-primary-blue hover:bg-primary-dark text-white">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
