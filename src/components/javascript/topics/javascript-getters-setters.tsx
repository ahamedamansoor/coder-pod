'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  ClipboardCheck,
  Sparkles,
  Layers,
  Columns,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
} from 'lucide-react';

interface JavaScriptGettersSettersProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/20 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Getters & Setters Demo</title>
  <style>
    body { font-family: 'Inter', system-ui; background: #f8fafc; color: #0f172a; padding: 24px; }
    .panel { max-width: 720px; margin: 0 auto; border-radius: 16px; border: 1px solid #e2e8f0; background: #fff; padding: 28px; }
    pre { background: #0f172a; color: #e2e8f0; padding: 12px; border-radius: 10px; overflow-x: auto; }
  </style>
</head>
<body>
  <div class="panel">
    <h1>Getters & Setters</h1>
    <p>Open DevTools console to follow the property access.</p>
    <pre id="summary"></pre>
  </div>
  <script src="./getters-setters-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

class Account {
  #balance = 0;
  constructor(owner) {
    this.owner = owner;
  }
  get balance() {
    console.log('getter called');
    return this.#balance;
  }
  set balance(amount) {
    console.log('setter called with', amount);
    if (amount < 0) throw new Error('Balance cannot go negative');
    this.#balance = amount;
  }
}

const acct = new Account('Ada');
acct.balance = 100;
console.log('Balance:', acct.balance);

const summary = ['setter -> balance=100', 'getter -> Balance: 100'].join('\\n');
document.getElementById('summary').textContent = summary;
`;

export default function JavaScriptGettersSetters({ onOpenWebPlayground }: JavaScriptGettersSettersProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ClipboardCheck}
        category="JavaScript · Object-Oriented"
        title="Getters & Setters"
        description="Protect internal state, compute values lazily, and validate assignments with accessor properties."
        colorTheme="blue"
      />

      <Card className="bg-gradient-to-br from-blue-50/70 via-sky-50/60 to-emerald-50/60 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-emerald-950/10 border border-blue-200/40 dark:border-blue-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Accessor Properties?
          </CardTitle>
          <CardDescription className="text-base">
            Getters provide computed reads; setters gate writes and validate input. They let you expose simple properties while keeping logic and state protected.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Validation', text: 'Guard what goes into your objects by intercepting assignments.' },
            { title: 'Derived data', text: 'Surface calculated values (like totals or formatted strings) as read-only properties.' },
            { title: 'Compatibility', text: 'Migrate from public fields to private state without breaking callers.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">{item.title}</Badge>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Columns className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Accessor Anatomy
          </CardTitle>
          <CardDescription className="text-base">See how getter/setter syntax works on objects and classes.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4">
            <h4 className="font-semibold mb-2">Object literal accessors</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const user = {
  _name: 'Ada',
  get name() {
    return this._name.toUpperCase();
  },
  set name(value) {
    if (!value) throw new Error('Name required');
    this._name = value;
  },
};

user.name = 'Lin';
console.log(user.name);`}</pre>
            <SnippetOutput lines={["user.name -> 'LIN'"]} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4">
            <h4 className="font-semibold mb-2">Class-based accessors</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`class Thermometer {
  #celsius = 0;
  get fahrenheit() {
    return this.#celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.#celsius = (value - 32) / 1.8;
  }
}

const thermo = new Thermometer();
thermo.fahrenheit = 86;
console.log(thermo.fahrenheit);`}</pre>
            <SnippetOutput lines={['thermo.fahrenheit = 86', 'internal °C -> 30', 'thermo.fahrenheit -> 86']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Encapsulation patterns
          </CardTitle>
          <CardDescription className="text-base">
            Common ways teams hide state and expose a safe API using accessors.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <Badge variant="secondary" className="mb-2 bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-200">
              Private data + view
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border">{`class Profile {
  #email = 'ada@example.dev';
  get maskedEmail() {
    const parts = this.#email.split('@');
    return parts[0].slice(0, 2) + '***@' + parts[1];
  }
}`}</pre>
            <SnippetOutput lines={['profile.maskedEmail -> "ad***@example.dev"']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <Badge variant="secondary" className="mb-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
              Normalized writes
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border">{`const cart = {
  _items: [],
  set addItem(value) {
    const item = typeof value === 'string' ? { name: value, qty: 1 } : value;
    this._items.push(item);
  },
  get totalItems() {
    return this._items.reduce((sum, item) => sum + item.qty, 0);
  },
};

cart.addItem = 'Pen';
cart.addItem = { name: 'Notebook', qty: 3 };
console.log(cart.totalItems);`}</pre>
            <SnippetOutput lines={['cart.totalItems -> 4']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <Badge variant="secondary" className="mb-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
              Virtual properties
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border">{`const invoice = {
  lineItems: [
    { desc: 'Hosting', amount: 12.5 },
    { desc: 'Support', amount: 7.5 },
  ],
  get total() {
    return this.lineItems.reduce((sum, item) => sum + item.amount, 0);
  },
  get summary() {
    return 'Invoice: $' + this.total.toFixed(2);
  },
};

console.log(invoice.summary);`}</pre>
            <SnippetOutput lines={['invoice.summary -> "Invoice: $20.00"']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Modern workflow tips
          </CardTitle>
          <CardDescription className="text-base">
            Latest platform features that complement accessors for large apps.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
              <h4 className="font-semibold mb-1">Private fields + accessors</h4>
              <p className="text-sm text-muted-foreground">
                Combine ES2022 private fields with getters/setters to expose a single source of truth while ensuring no one can bypass validation.
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border mt-3">{`class PasswordManager {
  #hash = '';
  set password(value) {
    if (value.length < 8) throw new Error('Weak password');
    this.#hash = btoa(value).split('').reverse().join('');
  }
  get password() {
    return this.#hash ? '*** encrypted ***' : 'not set';
  }
}`}</pre>
              <SnippetOutput lines={['pm.password -> "*** encrypted ***"']} />
            </div>
            <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
              <h4 className="font-semibold mb-1">Proxy-backed fallbacks</h4>
              <p className="text-sm text-muted-foreground">
                Accessors pair nicely with Proxy traps to provide defaults, caching, or telemetry.
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border mt-3">{`const settings = {
  _theme: 'light',
  get theme() {
    return this._theme;
  },
  set theme(value) {
    this._theme = value ?? 'light';
  },
};

const loggedSettings = new Proxy(settings, {
  set(target, prop, value) {
    console.log('[tracking]', prop, value);
    target[prop] = value;
    return true;
  },
});`}</pre>
            </div>
          </div>
          <Alert className="bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100 border-blue-200 dark:border-blue-900/40">
            <AlertTitle className="flex items-center gap-2 text-base">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Best practices
            </AlertTitle>
            <AlertDescription className="text-sm space-y-1">
              <p>• Keep getters cheap—no network calls. Memoize expensive work behind caches.</p>
              <p>• Throw descriptive errors inside setters; your future self will thank you.</p>
              <p>• Document read-only properties. Consumers should not rely on implementation details.</p>
            </AlertDescription>
          </Alert>
          <Alert variant="destructive" className="border-red-200 dark:border-red-900/40">
            <AlertTitle className="flex items-center gap-2 text-base">
              <XCircle className="w-4 h-4" />
              When not to use them
            </AlertTitle>
            <AlertDescription className="text-sm space-y-1">
              <p>• Avoid accessors when operations are clearly side effects—prefer explicit methods (`load()`, `save()`).</p>
              <p>• Never surprise consumers: getters should not mutate; setters should not fetch data.</p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border border-blue-200/60 dark:border-blue-900/30 bg-white/95 dark:bg-slate-950/70">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-base">
            Launch the same minimal playground layout used across our JavaScript topics and experiment with accessors.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row md:items-center md:gap-6 gap-4">
          <Button
            onClick={() => onOpenWebPlayground?.(playgroundHtml, '', playgroundJs)}
            className="bg-blue-600 text-white hover:bg-blue-500 w-full md:w-auto"
          >
            Run in playground
          </Button>
          <p className="text-sm text-muted-foreground">
            The demo logs getter/setter activity, private fields, and derived summaries—perfect for tweaking and observing results in real time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
