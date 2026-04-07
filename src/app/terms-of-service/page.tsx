'use client';

import { Shield, Users, FileText, AlertTriangle, Mail, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TermsOfService() {
  const router = useRouter();
  
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            By using Coder POD, you agree to these terms that govern your use of our learning platform and services.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden w-screen">
          <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center" style={{'--sidebar-width': '352px', '--sidebar-width-icon': '3rem'} as React.CSSProperties}>
            
            {/* Acceptance of Terms */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  1. Acceptance of Terms
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    By accessing and using Coder POD, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use the service.
                  </p>
                </div>
              </div>
            </section>

            {/* Use License */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  2. Use License
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Permission is granted to temporarily access the materials (courses, tutorials, and content) on Coder POD for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                  </p>
                </div>
              </div>
            </section>

            {/* User Accounts */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  3. User Accounts
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password. You must notify us immediately of any unauthorized use.
                  </p>
                </div>
              </div>
            </section>

            {/* Course Content */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg">
                  <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  4. Course Content
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    All content provided on Coder POD is for educational purposes. While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, reliability, or accuracy of the content.
                  </p>
                </div>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  5. Prohibited Activities
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    You may not use our service for any illegal or unauthorized purpose. You may not attempt to gain unauthorized access to our systems, interfere with our service, or reproduce our content without permission.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  6. Intellectual Property
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    All content, materials, and intellectual property on Coder POD are owned by us or our content partners and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  7. Limitation of Liability
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    In no event shall Coder POD or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Coder POD.
                  </p>
                </div>
              </div>
            </section>

            {/* Modifications */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  8. Modifications
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Coder POD may revise these terms of service at any time without notice. By using this web site, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-3 justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg">
                  <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  9. Contact Information
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 max-w-4xl mx-auto">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Questions about the Terms of Service should be sent to us at{' '}
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
