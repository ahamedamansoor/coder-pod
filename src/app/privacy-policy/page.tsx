'use client';

import { Shield, Database, Lock, Cookie, Trash2, User, Calendar, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();
  
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
            <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information on Coder POD.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden w-screen">
          <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center" style={{'--sidebar-width': '352px', '--sidebar-width-icon': '3rem'} as React.CSSProperties}>
            
            {/* Information We Collect */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  1. Information We Collect
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us for support. This may include your name, email address, and learning progress.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg">
                  <User className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  2. How We Use Your Information
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    We use the information we collect to provide, maintain, and improve our services, process your enrollments, communicate with you, and personalize your learning experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  3. Information Sharing
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy or as required by law.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg">
                  <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  4. Data Security
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg">
                  <Cookie className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  5. Cookies and Tracking
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    We use cookies and similar tracking technologies to track activity on our service and hold certain information to improve your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  6. Data Retention
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg">
                  <User className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  7. Your Rights
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us at any time.
                  </p>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                  <Shield className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  8. Children's Privacy
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to This Policy */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  9. Changes to This Policy
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  10. Contact Us
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    If you have any questions about this privacy policy, please contact us at{' '}
                    <a 
                      href="mailto:coderpod.org@gmail.com" 
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      coderpod.org@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Footer */}
          <div className="bg-slate-50 dark:bg-slate-900 px-8 md:px-12 py-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                © 2026 Coder POD. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
