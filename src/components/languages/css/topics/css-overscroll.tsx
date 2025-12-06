'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Hand, CheckCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssOverscrollProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssOverscroll({ onOpenWebPlayground }: CssOverscrollProps) {
  const [selectedExample, setSelectedExample] = useState('contain');

  const containExample = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Overscroll Behavior - Contain</title><style>
*{margin:0;padding:0;box-sizing:border-box;}body{font-family:-apple-system,sans-serif;background:linear-gradient(135deg,#f97316 0%,#ea580c 100%);padding:40px 20px;min-height:100vh;}@media(prefers-color-scheme:dark){body{background:linear-gradient(135deg,#c2410c 0%,#9a3412 100%);}}
.container{max-width:800px;margin:0 auto;background:white;padding:40px;border-radius:16px;}@media(prefers-color-scheme:dark){.container{background:#1e293b;color:#e2e8f0;}}
h1{color:#f97316;text-align:center;margin-bottom:10px;font-size:2.5rem;}@media(prefers-color-scheme:dark){h1{color:#fdba74;}}
.subtitle{text-align:center;color:#64748b;margin-bottom:30px;}
.scroll-box{height:300px;overflow-y:auto;overscroll-behavior:contain;background:linear-gradient(135deg,#fed7aa 0%,#fdba74 100%);padding:20px;border-radius:12px;border:3px solid #f97316;}@media(prefers-color-scheme:dark){.scroll-box{background:linear-gradient(135deg,#c2410c 0%,#9a3412 100%);border-color:#fdba74;}}
.content{height:800px;padding:20px;background:white;border-radius:8px;}@media(prefers-color-scheme:dark){.content{background:#0f172a;color:#e2e8f0;}}
.info-box{background:linear-gradient(135deg,#fef3c7 0%,#fde68a 100%);border-left:4px solid #f59e0b;padding:20px;border-radius:8px;margin-top:20px;}@media(prefers-color-scheme:dark){.info-box{background:linear-gradient(135deg,#78350f 0%,#92400e 100%);border-left-color:#fbbf24;}}
.info-text{color:#78350f;line-height:1.6;}@media(prefers-color-scheme:dark){.info-text{color:#fef3c7;}}
</style></head><body><div class="container"><h1>🖐️ Overscroll Behavior</h1><p class="subtitle">Prevent scroll chaining</p><div class="scroll-box"><div class="content"><h3 style="color:#f97316;margin-bottom:15px;">Scrollable Content</h3><p style="margin-bottom:15px;">Scroll within this box - the parent page won't scroll!</p><p>This demonstrates <strong>overscroll-behavior: contain</strong> which prevents scroll chaining. When you reach the bottom of this container, scrolling stops instead of continuing to the parent element.</p></div></div><div class="info-box"><p class="info-text"><strong>👆 Try scrolling!</strong> Notice how when you reach the end of the scrollable area, the background doesn't scroll. This is overscroll-behavior: contain in action!</p></div></div></body></html>`;

  const autoExample = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Overscroll Behavior - Auto</title><style>
*{margin:0;padding:0;box-sizing:border-box;}body{font-family:sans-serif;background:linear-gradient(135deg,#f97316 0%,#ea580c 100%);padding:40px 20px;min-height:150vh;}@media(prefers-color-scheme:dark){body{background:linear-gradient(135deg,#c2410c 0%,#9a3412 100%);}}
.container{max-width:800px;margin:0 auto;background:white;padding:40px;border-radius:16px;margin-bottom:50px;}@media(prefers-color-scheme:dark){.container{background:#1e293b;color:#e2e8f0;}}
h1{color:#f97316;text-align:center;margin-bottom:30px;}@media(prefers-color-scheme:dark){h1{color:#fdba74;}}
.scroll-box{height:200px;overflow-y:auto;overscroll-behavior:auto;background:linear-gradient(135deg,#fed7aa 0%,#fdba74 100%);padding:20px;border-radius:12px;border:3px solid #f97316;}@media(prefers-color-scheme:dark){.scroll-box{background:linear-gradient(135deg,#c2410c 0%,#9a3412 100%);border-color:#fdba74;}}
.content{height:400px;background:white;padding:20px;border-radius:8px;}@media(prefers-color-scheme:dark){.content{background:#0f172a;color:#e2e8f0;}}
</style></head><body><div class="container"><h1>🖐️ Auto Behavior (Default)</h1><div class="scroll-box"><div class="content"><p>With <strong>overscroll-behavior: auto</strong>, scroll continues to parent element</p></div></div></div></body></html>`;

  return (
    <div className="space-y-8">
      <PageHeader icon={Hand} category="CSS · Modern Features" title="Overscroll Behavior" description="Control scroll boundaries and prevent scroll chaining" colorTheme="orange" />
      <Card><CardHeader className="relative"><CardTitle className="flex items-center gap-3 text-2xl text-orange-700 dark:text-orange-300"><div className="relative"><Hand className="w-8 h-8" /><div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div></div>Overscroll Behavior</CardTitle><CardDescription className="text-lg text-orange-600 dark:text-orange-400">🖐️ Control what happens when users scroll past boundaries!</CardDescription></CardHeader><CardContent><div className="grid lg:grid-cols-3 gap-6"><div className="lg:col-span-2 space-y-6"><div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-orange-200/50 shadow-lg"><h4 className="font-bold mb-4 text-orange-700 dark:text-orange-300">What is Overscroll Behavior?</h4><p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Controls what happens when a user scrolls past the boundary of a scrolling area. Prevents unwanted scroll chaining and bounce effects.</p><div className="space-y-3"><div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg"><CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" /><div><div className="font-semibold text-orange-700 dark:text-orange-300">Contain Scrolling</div><div className="text-sm text-orange-600 dark:text-orange-400">Prevent parent element from scrolling</div></div></div></div></div></div><div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 p-6 rounded-xl border border-orange-200/50 shadow-lg"><div className="text-center space-y-4"><div className="text-4xl mb-2">🖐️</div><div className="font-bold text-lg text-orange-700 dark:text-orange-300">Values</div><div className="space-y-2 text-sm"><div className="bg-white dark:bg-gray-800 p-2 rounded"><code className="text-orange-600 dark:text-orange-400">contain</code></div><div className="bg-white dark:bg-gray-800 p-2 rounded"><code className="text-orange-600 dark:text-orange-400">auto</code></div><div className="bg-white dark:bg-gray-800 p-2 rounded"><code className="text-orange-600 dark:text-orange-400">none</code></div></div></div></div></div></CardContent></Card>
      <Card><CardHeader><CardTitle>Live Examples</CardTitle></CardHeader><CardContent><div className="flex gap-4 mb-6"><button onClick={() => setSelectedExample('contain')} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedExample === 'contain' ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-800'}`}>Contain</button><button onClick={() => setSelectedExample('auto')} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedExample === 'auto' ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-800'}`}>Auto</button></div>{selectedExample === 'contain' && <FrontendCodePreview html={containExample} title="Overscroll: Contain" colorTheme="orange" onOpenPlayground={onOpenWebPlayground} />}{selectedExample === 'auto' && <FrontendCodePreview html={autoExample} title="Overscroll: Auto" colorTheme="orange" onOpenPlayground={onOpenWebPlayground} />}</CardContent></Card>
      <Alert><CheckCircle className="h-4 w-4" /><AlertTitle>Use Cases</AlertTitle><AlertDescription><ul className="list-disc list-inside space-y-1 mt-2"><li><strong>Modal dialogs</strong> - Prevent body scroll when modal is open</li><li><strong>Mobile navigation</strong> - Contain scroll within drawers</li><li><strong>Chat interfaces</strong> - Keep chat scroll independent</li></ul></AlertDescription></Alert>
      <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20"><Info className="h-4 w-4 text-orange-600" /><AlertTitle className="text-orange-900 dark:text-orange-100">Browser Support</AlertTitle><AlertDescription className="text-orange-800 dark:text-orange-200">Widely supported in modern browsers (Chrome 63+, Firefox 59+, Safari 16+)</AlertDescription></Alert>
    </div>
  );
}
