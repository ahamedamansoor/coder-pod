'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Info, Zap, Check, Copy } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlLinksEmailTelProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlLinksEmailTel({ onOpenWebPlayground }: HtmlLinksEmailTelProps) {
  const openPlayground = (html: string, css: string, js: string) => {
    onOpenWebPlayground?.(html, css, js);
  };

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Mail}
        category="HTML · Links"
        title="Email & Tel Links"
        description="Create links for emails and phone calls with mailto: and tel: protocols"
        colorTheme="blue"
      />

      {/* Section 1: Understanding Special Links */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Info className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Special Link Types
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Links for emails and phone calls
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white/70 dark:bg-slate-900/50 p-5 rounded-lg border border-blue-100 dark:border-blue-900">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Email and telephone links trigger actions instead of navigating to a URL.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              These special links use protocols like <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400 font-mono">mailto:</code> for emails and <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400 font-mono">tel:</code> for phone numbers. When clicked, they open the user's default email client or phone app.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-5">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">📧 Email Links</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Open user's email client to compose a message
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">☎️ Phone Links</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Initiate a phone call on mobile devices
              </p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">📲 Mobile-Friendly</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Perfect for contact forms and support pages
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Email Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Mail className="w-7 h-7" />
            Email Links (mailto:)
          </CardTitle>
          <CardDescription className="text-base">
            Creating links that send emails
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Basic mailto */}
          <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
            <p className="font-mono font-bold text-blue-600 dark:text-blue-400 mb-2">Basic Email Link</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Opens the default email client with the recipient address
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-blue-200 dark:border-blue-800">
              &lt;a href="mailto:contact@example.com"&gt;Send us an email&lt;/a&gt;
            </code>
          </div>

          {/* with subject */}
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border-l-4 border-emerald-500">
            <p className="font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-2">With Subject Line</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Pre-fills the email subject line
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-emerald-200 dark:border-emerald-800">
              &lt;a href="mailto:info@example.com?subject=Hello"&gt;Contact&lt;/a&gt;
            </code>
          </div>

          {/* with cc and bcc */}
          <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-l-4 border-purple-500">
            <p className="font-mono font-bold text-purple-600 dark:text-purple-400 mb-2">With CC, BCC & Body</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Include multiple recipients, body text, and formatting
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-purple-200 dark:border-purple-800">
              &lt;a href="mailto:info@example.com?cc=other@example.com&bcc=hidden@example.com&subject=Topic&body=Hello"&gt;Send Email&lt;/a&gt;
            </code>
          </div>

          {/* multiple recipients */}
          <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
            <p className="font-mono font-bold text-orange-600 dark:text-orange-400 mb-2">Multiple Recipients</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Separate multiple emails with commas
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-orange-200 dark:border-orange-800">
              &lt;a href="mailto:email1@example.com,email2@example.com"&gt;Email Team&lt;/a&gt;
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Phone Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Phone className="w-7 h-7" />
            Phone Links (tel:)
          </CardTitle>
          <CardDescription className="text-base">
            Creating links for phone calls
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Basic tel */}
          <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
            <p className="font-mono font-bold text-blue-600 dark:text-blue-400 mb-2">Basic Phone Link</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              On mobile devices, starts a phone call. On desktop, may trigger VoIP apps
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-blue-200 dark:border-blue-800">
              &lt;a href="tel:+1-555-123-4567"&gt;Call Us&lt;/a&gt;
            </code>
          </div>

          {/* Format recommendations */}
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border-l-4 border-emerald-500">
            <p className="font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-2">Format: International</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Use international format with + sign and country code
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-emerald-200 dark:border-emerald-800">
              &lt;a href="tel:+1-555-0123"&gt;+1 (555) 0123&lt;/a&gt;
            </code>
          </div>

          {/* Display vs href */}
          <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-l-4 border-purple-500">
            <p className="font-mono font-bold text-purple-600 dark:text-purple-400 mb-2">Display Format Different from Link</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              href uses digits only, display shows formatted number
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-purple-200 dark:border-purple-800">
              &lt;a href="tel:5551234567"&gt;(555) 123-4567&lt;/a&gt;
            </code>
          </div>

          {/* Extension */}
          <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
            <p className="font-mono font-bold text-orange-600 dark:text-orange-400 mb-2">With Extension</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Add extension using comma pause or special codes
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-orange-200 dark:border-orange-800">
              &lt;a href="tel:+1-555-0123,123"&gt;Call (ext. 123)&lt;/a&gt;
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Practical Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            See It in Action
          </CardTitle>
          <CardDescription className="text-base">
            Real examples of email and phone links
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Example 1: Contact Card */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              1️⃣ Contact Card
            </h4>
            <FrontendCodePreview
              title="Business Contact Information"
              description="Display contact details with clickable email and phone links"
              html={`<div class="contact-card">
  <h2>📞 Get in Touch</h2>
  
  <div class="contact-item">
    <strong>Email:</strong>
    <a href="mailto:hello@example.com" class="contact-link">
      hello@example.com
    </a>
  </div>
  
  <div class="contact-item">
    <strong>Phone:</strong>
    <a href="tel:+1-555-0123" class="contact-link">
      (555) 0123
    </a>
  </div>
  
  <div class="contact-item">
    <strong>Support:</strong>
    <a href="mailto:support@example.com?subject=Support%20Request" class="contact-link">
      support@example.com
    </a>
  </div>
</div>`}
              css={`body {
  font-family: system-ui;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
}

/* Dark mode */
html.dark body {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
}

.contact-card {
  max-width: 400px;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

html.dark .contact-card {
  background: #1e293b;
}

.contact-card h2 {
  color: #1e40af;
  margin-bottom: 1.5rem;
}

html.dark .contact-card h2 {
  color: #60a5fa;
}

.contact-item {
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

html.dark .contact-item {
  background: #334155;
}

.contact-item strong {
  color: #1e40af;
  display: block;
  margin-bottom: 0.5rem;
}

html.dark .contact-item strong {
  color: #60a5fa;
}

.contact-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  display: inline-block;
}

.contact-link:hover {
  color: #2563eb;
  text-decoration: underline;
}

html.dark .contact-link {
  color: #60a5fa;
}

html.dark .contact-link:hover {
  color: #93c5fd;
}`}
              colorTheme="blue"
              previewHeight="560px"
              onOpenPlayground={() => openPlayground(
                `<div class="contact-card"><h2>📞 Get in Touch</h2><div class="contact-item"><strong>Email:</strong><a href="mailto:hello@example.com">hello@example.com</a></div><div class="contact-item"><strong>Phone:</strong><a href="tel:+1-555-0123">(555) 0123</a></div></div>`,
                `.contact-card { max-width: 400px; background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); } .contact-item { margin: 1.5rem 0; padding: 1rem; background: #f3f4f6; border-radius: 8px; border-left: 4px solid #3b82f6; } .contact-link { color: #3b82f6; text-decoration: none; font-weight: 500; transition: all 0.3s; } .contact-link:hover { color: #2563eb; text-decoration: underline; } /* Dark mode */ html.dark body { background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); } html.dark .contact-card { background: #1e293b; } html.dark .contact-item { background: #334155; } html.dark .contact-link { color: #60a5fa; } html.dark .contact-link:hover { color: #93c5fd; }`,
                ``
              )}
            />
          </div>

          {/* Example 2: Contact Form */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              2️⃣ Multiple Contact Options
            </h4>
            <FrontendCodePreview
              title="Contact Methods Grid"
              description="Various ways to contact with email and phone options"
              html={`<div class="contact-grid">
  <div class="contact-method">
    <h3>📧 Email Sales</h3>
    <a href="mailto:sales@example.com?subject=Sales%20Inquiry" class="btn">
      sales@example.com
    </a>
  </div>
  
  <div class="contact-method">
    <h3>🛠️ Technical Support</h3>
    <a href="mailto:support@example.com?subject=Technical%20Support" class="btn">
      support@example.com
    </a>
  </div>
  
  <div class="contact-method">
    <h3>☎️ Call Support</h3>
    <a href="tel:+1-555-9999" class="btn">
      1-555-9999
    </a>
  </div>
  
  <div class="contact-method">
    <h3>📱 SMS</h3>
    <a href="sms:+1-555-9999?body=Hello" class="btn">
      Text: 1-555-9999
    </a>
  </div>
</div>`}
              css={`body {
  font-family: system-ui;
  padding: 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.contact-method {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid #e5e7eb;
  transition: all 0.3s;
  text-align: center;
}

html.dark .contact-method {
  background: #1e293b;
  border-color: #334155;
}

.contact-method:hover {
  border-color: #3b82f6;
  box-shadow: 0 8px 12px rgba(59, 130, 246, 0.1);
}

.contact-method h3 {
  color: #1e40af;
  margin-bottom: 1rem;
}

html.dark .contact-method h3 {
  color: #60a5fa;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

html.dark .btn {
  background: #60a5fa;
  color: #0f172a;
}

html.dark .btn:hover {
  background: #93c5fd;
}`}
              colorTheme="blue"
              previewHeight="560px"
              onOpenPlayground={() => openPlayground(
                `<div class="contact-grid"><div class="contact-method"><h3>📧 Email</h3><a href="mailto:sales@example.com" class="btn">sales@example.com</a></div><div class="contact-method"><h3>☎️ Call</h3><a href="tel:+1-555-9999" class="btn">1-555-9999</a></div></div>`,
                `.contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; } .contact-method { background: white; border-radius: 12px; padding: 1.5rem; border: 2px solid #e5e7eb; text-align: center; } .btn { display: inline-block; padding: 0.75rem 1.5rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: all 0.3s; } /* Dark mode */ html.dark .contact-method { background: #1e293b; border-color: #334155; } html.dark .btn { background: #60a5fa; color: #0f172a; } html.dark .btn:hover { background: #93c5fd; }`,
                ``
              )}
            />
          </div>

          {/* Example 3: Contact Form with All Options */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              3️⃣ Comprehensive Contact Section
            </h4>
            <FrontendCodePreview
              title="Complete Contact Information"
              description="Email, phone, and special linking options"
              html={`<section class="contact-section">
  <h2>How to Reach Us</h2>
  
  <div class="contact-options">
    <div class="option">
      <h3>📧 Send Email</h3>
      <p>Get a response within 24 hours</p>
      <a href="mailto:hello@example.com?subject=Hello&body=I have a question..." class="link">
        Send Message
      </a>
    </div>
    
    <div class="option">
      <h3>☎️ Call Directly</h3>
      <p>Mon-Fri, 9am-5pm EST</p>
      <a href="tel:+1-800-555-0123" class="link">
        1-800-555-0123
      </a>
    </div>
    
    <div class="option">
      <h3>💬 Live Chat</h3>
      <p>Instant support available</p>
      <a href="javascript:void(0)" class="link">
        Start Chat
      </a>
    </div>
  </div>
</section>`}
              css={`body {
  font-family: system-ui;
  padding: 2rem;
  background: #f9fafb;
}

html.dark body {
  background: #0f172a;
}

.contact-section {
  max-width: 900px;
  margin: 0 auto;
}

.contact-section h2 {
  color: #1e40af;
  text-align: center;
  margin-bottom: 2rem;
}

html.dark .contact-section h2 {
  color: #60a5fa;
}

.contact-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.option {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

html.dark .option {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.option:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

.option h3 {
  color: #1e40af;
  margin-bottom: 0.5rem;
}

html.dark .option h3 {
  color: #60a5fa;
}

.option p {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

html.dark .option p {
  color: #cbd5e1;
}

.link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
}

html.dark .link {
  background: linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%);
  color: #0f172a;
}`}
              colorTheme="blue"
              previewHeight="560px"
              onOpenPlayground={() => openPlayground(
                `<section class="contact-section"><h2>How to Reach Us</h2><div class="contact-options"><div class="option"><h3>📧 Email</h3><p>24hr response</p><a href="mailto:hello@example.com">Send Message</a></div><div class="option"><h3>☎️ Call</h3><p>Mon-Fri 9-5</p><a href="tel:+1-800-555-0123">1-800-555-0123</a></div></div></section>`,
                `.contact-section { max-width: 900px; margin: 0 auto; } .contact-options { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; } .option { background: white; border-radius: 12px; padding: 2rem; text-align: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); transition: all 0.3s; } /* Dark mode */ html.dark body { background: #0f172a; } html.dark .option { background: #1e293b; } html.dark .link { background: linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%); color: #0f172a; }`,
                ``
              )}
            />
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Check className="w-7 h-7" />
            Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Tips for email and tel links
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          {/* Do's */}
          <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-400 mb-3">✅ Do This</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Use + and country code for tel: links (e.g., +1)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Display phone numbers in readable format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Use URL encoding for special characters in mailto:</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Provide clear subject lines in email links</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Test on mobile devices</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg text-rose-700 dark:text-rose-400 mb-3">❌ Avoid This</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Displaying email/phone without clickable links</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Using spaces in tel: links (remove all spaces)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Pre-filling sensitive body text</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Hiding email/phone addresses from spam crawlers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Forgetting href format differences</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Copy className="w-7 h-7" />
            Quick Reference
          </CardTitle>
          <CardDescription className="text-base">
            Copy-paste examples for common use cases
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <p className="font-bold text-blue-700 dark:text-blue-400 mb-2">Simple Email</p>
              <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-blue-200 dark:border-blue-800">
                &lt;a href="mailto:info@example.com"&gt;Email Us&lt;/a&gt;
              </code>
            </div>

            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
              <p className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Email with Subject</p>
              <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-emerald-200 dark:border-emerald-800">
                &lt;a href="mailto:info@example.com?subject=Hello"&gt;Email&lt;/a&gt;
              </code>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <p className="font-bold text-purple-700 dark:text-purple-400 mb-2">Simple Phone</p>
              <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-purple-200 dark:border-purple-800">
                &lt;a href="tel:+1-555-0123"&gt;Call Us&lt;/a&gt;
              </code>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
              <p className="font-bold text-orange-700 dark:text-orange-400 mb-2">SMS Message</p>
              <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-orange-200 dark:border-orange-800">
                &lt;a href="sms:+1-555-0123"&gt;Text Us&lt;/a&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
