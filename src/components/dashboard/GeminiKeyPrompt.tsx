
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, FileText } from 'lucide-react';

const GeminiKeyPrompt = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 border-blue-200 dark:border-blue-700">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="text-blue-500 mr-2" />
          Unlock AI-Powered Learning
        </CardTitle>
        <CardDescription>
          To enable AI-driven features like content generation and interactive examples, you'll need a Google Gemini API key.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">It's free and easy to get started. Just follow these steps:</p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>
            Visit the{' '}
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Google AI Studio
            </a>{' '}
            to create your API key.
          </li>
          <li>In the root of your project, create a new file named <code>.env</code>.</li>
          <li>Add the following line to your new <code>.env</code> file, pasting the key you just created:</li>
        </ol>
        <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 text-sm">
          <code>GOOGLE_API_KEY=YOUR_API_KEY_HERE</code>
        </pre>
        <p className="mt-4 text-sm text-muted-foreground">
          After adding the key, restart your application to access all the AI-powered features.
        </p>
      </CardContent>
    </Card>
  );
};

export default GeminiKeyPrompt;
