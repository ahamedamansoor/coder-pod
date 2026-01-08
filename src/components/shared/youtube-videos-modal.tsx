import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Youtube } from 'lucide-react';

interface YouTubeVideosButtonProps {
  topic: string;
  className?: string;
}

export function YouTubeVideosButton({ topic, className }: YouTubeVideosButtonProps) {
  // Open YouTube with topic search
  const handleYouTubeSearch = () => {
    const searchQuery = encodeURIComponent(topic);
    const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex justify-center my-8">
      <div className="relative group">
        <Button
          variant="outline"
          size="lg"
          onClick={handleYouTubeSearch}
          className={`group flex items-center gap-3 px-6 py-3 text-base font-medium bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-md hover:shadow-slate-200/50 dark:hover:shadow-slate-700/50 transition-all duration-200 hover:-translate-y-0.5 ${className}`}
        >
          <Youtube className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-200">
            Related Videos
          </span>
          <ExternalLink className="w-4 h-4 text-slate-600 dark:text-slate-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
        </Button>
        
        {/* Tooltip */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
          <div className="relative">
            {/* Main tooltip content */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white text-xs px-3 py-2 rounded-lg shadow-md w-64">
              {/* Content */}
              <div className="relative flex items-center gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-slate-100 dark:bg-slate-700 rounded-md flex items-center justify-center">
                  <Youtube className="w-3 h-3 text-slate-600 dark:text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 dark:text-white text-xs mb-0.5">Find videos you like?</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-tight">
                    Save to resource drawer for future reference!
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-slate-300 dark:bg-slate-500 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute bottom-0.5 left-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full opacity-30 animate-pulse animation-delay-200"></div>
            </div>
            
            {/* Arrow pointing up */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-6 border-b-white dark:border-b-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
