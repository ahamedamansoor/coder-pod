'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, AlertTriangle, CheckCircle2, Radio, Zap, Phone, Mail, MessageCircle } from 'lucide-react';

export default function JavaScriptWebSockets() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Radio}
        category="APIs & Browser"
        title="WebSockets"
        description="Real-time bidirectional communication - explained simply!"
        colorTheme="green"
      />

      <Card className="border-2 border-green-300 dark:border-green-700 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
              <Radio className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is WebSocket? Think of it Like a Phone Call! 📞
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Imagine you want to talk to your friend. You have two choices:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                    <span className="font-bold text-red-900 dark:text-red-100">Regular HTTP (Emails)</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You write an email → Wait for reply → Write again → Wait again...<br/>
                    <strong>Slow and one-way at a time!</strong>
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <span className="font-bold text-green-900 dark:text-green-100">WebSocket (Phone Call)</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You call once → Both can talk anytime → Instant back and forth!<br/>
                    <strong>Fast and two-way communication!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-300 dark:border-green-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Why WebSocket is Amazing? 🎯</CardTitle>
          <CardDescription>See the difference yourself!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border border-blue-200 dark:border-blue-700 text-center">
              <div className="text-5xl mb-3">⚡</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Super Fast</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Messages arrive in milliseconds!</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border border-green-200 dark:border-green-700 text-center">
              <div className="text-5xl mb-3">↔️</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Two-Way</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Both sides can send anytime!</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10 border border-purple-200 dark:border-purple-700 text-center">
              <div className="text-5xl mb-3">🔌</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Always Connected</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">No need to reconnect!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">🎮 Live Example: See It Work!</CardTitle>
          <CardDescription>Interactive demonstration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4">Imagine: Real-Time Chat App</h4>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">A</div>
                  <div className="flex-1">
                    <div className="font-bold text-blue-900 dark:text-blue-100">Alice</div>
                    <div className="text-sm bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mt-1">
                      "Hey everyone! 👋"
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">12:01 PM</div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-bold">WebSocket sends instantly</span>
                  <Zap className="w-4 h-4" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-green-200 dark:border-green-700">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">B</div>
                    <div className="flex-1">
                      <div className="font-bold text-sm">Bob</div>
                      <div className="text-xs bg-green-50 dark:bg-green-900/20 p-1 rounded">Received! ✅</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-green-200 dark:border-green-700">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm">C</div>
                    <div className="flex-1">
                      <div className="font-bold text-sm">Carol</div>
                      <div className="text-xs bg-purple-50 dark:bg-purple-900/20 p-1 rounded">Received! ✅</div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700">
                <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <AlertTitle className="text-green-900 dark:text-green-100">Real-Time Magic! ✨</AlertTitle>
                <AlertDescription className="text-gray-700 dark:text-gray-300">
                  All users see the message <strong>instantly</strong> - no refresh needed! This is WebSocket power!
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>


      <Card className="border-2 border-purple-300 dark:border-purple-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Complete Working Example 🎯</CardTitle>
          <CardDescription>All 4 steps together!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// 1. Connect
const socket = new WebSocket('ws://localhost:8080');

// 2. When connected
socket.addEventListener('open', () => {
  console.log('Connected! 🎉');
  socket.send('Hello from client!');
});

// 3. Receive messages
socket.addEventListener('message', (event) => {
  console.log('Got message:', event.data);
});

// 4. Handle errors
socket.addEventListener('error', (error) => {
  console.error('Error:', error);
});

// 5. Handle disconnection
socket.addEventListener('close', () => {
  console.log('Disconnected');
});`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-300 dark:border-green-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Real-World Uses 🌍</CardTitle>
          <CardDescription>Where you see WebSocket every day!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border-2 border-blue-200 dark:border-blue-700">
              <div className="text-4xl mb-3 text-center">💬</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 text-center">Chat Apps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                WhatsApp, Slack, Discord<br/>
                Instant messaging!
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-700">
              <div className="text-4xl mb-3 text-center">📊</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 text-center">Live Data</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Stock prices, sports scores<br/>
                Updates every second!
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10 border-2 border-purple-200 dark:border-purple-700">
              <div className="text-4xl mb-3 text-center">🎮</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 text-center">Online Games</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Multiplayer games<br/>
                Real-time player moves!
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/10 border-2 border-orange-200 dark:border-orange-700">
              <div className="text-4xl mb-3 text-center">🔔</div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2 text-center">Notifications</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Push notifications<br/>
                Instant alerts!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Important Tips for Beginners 💡</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Always check if connected</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Use the 'open' event before sending messages!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Use wss:// in production</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Like HTTPS, use secure WebSocket (wss://) for real websites!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Handle disconnections</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Always listen for 'close' event and try to reconnect!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">You need a WebSocket server</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You can't connect to regular websites! Need a special WebSocket server.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">What is it?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    A way to have a "phone call" with a server - both can talk anytime!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Why use it?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Instant messages, real-time updates, no delays!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">📝</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">How to use?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    1) Connect 2) Listen for 'open' 3) Send/receive messages!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">💬</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">When to use?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Chat apps, live data, gaming, notifications!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700 text-center">
            <p className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
              🎉 You now understand WebSocket basics! 🎉
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Start small, experiment, and build amazing real-time apps! 🚀
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
