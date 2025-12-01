'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export default function DiagnosticPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            DSA Content System is Working!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>If you can see this page, it means:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>✅ The DSA topic components are loading correctly</li>
              <li>✅ The lazy loading system is functional</li>
              <li>✅ The content display pipeline is working</li>
            </ul>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">Current slug:</h4>
              <Badge variant="outline" className="font-mono">
                {typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : 'Loading...'}
              </Badge>
            </div>
            
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">
                Success! Custom topic content is rendering. 🎉
              </h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                You can now create more topic components following the same pattern.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
