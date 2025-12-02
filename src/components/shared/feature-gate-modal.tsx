'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Lock, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface FeatureGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName: string;
}

export function FeatureGateModal({ isOpen, onClose, featureName }: FeatureGateModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center text-center space-y-6 py-6">
          {/* Animated lock icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <Lock className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Sign In Required
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-blue-600 dark:text-blue-400">{featureName}</span> is available only for signed-in users
            </p>
          </div>

          {/* Feature benefits */}
          <div className="w-full space-y-3 text-left">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-slate-900 dark:text-white">Track your progress</p>
                <p className="text-slate-600 dark:text-slate-400">Save and sync across devices</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-slate-900 dark:text-white">Access premium features</p>
                <p className="text-slate-600 dark:text-slate-400">Unlock full potential</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col w-full gap-3 pt-2">
            <Link href="/login" className="w-full">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Sign In to Continue
              </Button>
            </Link>
            <Button variant="ghost" onClick={onClose} className="w-full">
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
