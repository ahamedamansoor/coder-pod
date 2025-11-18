'use client';
import { MainHeader } from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import { Bot, BrainCircuit, Mic, Send, User } from 'lucide-react';

export function NotebookPageContent() {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen bg-muted/40">
        {/* An empty sidebar is needed to satisfy the layout structure, but it won't be visible. */}
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <MainHeader
            onToggleEditor={() => {}}
            isEditorOpen={false}
            showCodeEditorButton={false}
            showWebPlaygroundButton={false}
          />
          <main className="flex-1 flex flex-col items-center p-4">
            <div className="w-full max-w-3xl flex flex-col h-full">
              <div className="flex-1 overflow-y-auto p-4 space-y-8">
                {/* Initial Welcome Message */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-sm flex-1">
                    <p className="font-semibold text-foreground">AI Assistant</p>
                    <p className="text-muted-foreground">
                      Hello! How can I help you today? You can ask me about any
                      programming topic, ask for code examples, or practice for an
                      interview.
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="mt-auto p-4 bg-background border-t">
                <div className="relative">
                  <Textarea
                    placeholder="Ask the AI anything..."
                    className="w-full pr-20"
                    rows={2}
                  />
                  <div className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Mic className="w-5 h-5" />
                    </Button>
                    <Button size="icon">
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
