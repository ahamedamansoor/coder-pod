import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { YouTubeVideosButton } from '@/components/shared/youtube-videos-modal';

/**
 * IMPORTANT: All colors are fixed to logo branding and cannot be overridden:
 * - Icon background/border: Solid #4A7BF5 (vibrant logo blue)
 * - Icon: White (#FFFFFF) on blue background
 * - Title: #5B7FFF (logo blue)
 * This ensures consistent, vibrant branding across all pages.
 */
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  iconClassName?: string;
  iconBgClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  headerClassName?: string;
  action?: React.ReactNode;
  centered?: boolean;
  showYouTubeVideos?: boolean;
  topic?: string;
}

export function PageHeader({
  title,
  subtitle,
  icon: Icon,
  iconClassName = "w-8 h-8",
  iconBgClassName = "w-14 h-14 rounded-2xl flex items-center justify-center",
  titleClassName = "text-3xl font-bold",
  subtitleClassName = "text-sm text-muted-foreground",
  headerClassName,
  action,
  centered = true,
  showYouTubeVideos = true,
  topic,
}: PageHeaderProps) {
  return (
    <div className={cn(
      "relative px-4 sm:px-6 lg:px-8 py-8 border-b",
      headerClassName
    )}>
      <div className="w-full">
        <div className={cn(
          "flex flex-col gap-4 mb-6",
          centered ? "items-center justify-center" : "sm:flex-row items-start sm:items-center justify-between"
        )}>
          <div className={cn(
            "flex items-center gap-4",
            centered && "flex-col sm:flex-row"
          )}>
            {Icon && (
              <div 
                className={cn(iconBgClassName, "hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 relative overflow-hidden group")}
                style={{ 
                  backgroundColor: '#4A7BF5',
                  border: '2px solid #4A7BF5',
                  animation: 'icon-pulse 3s ease-in-out infinite'
                }}
              >
                {/* Shimmer effect */}
                <div 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                  }}
                />
                <Icon className={cn(iconClassName, "relative z-10 group-hover:rotate-6 transition-transform duration-300")} style={{ color: '#FFFFFF' }} />
              </div>
            )}
            <div className={cn(
              centered ? "text-center sm:text-left" : ""
            )}>
              <h1 className={titleClassName} style={{ color: '#5B7FFF' }}>
                {title}
              </h1>
              {subtitle && (
                <p className={subtitleClassName}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {(action || showYouTubeVideos) && (
            <div className="flex items-center gap-2">
              {action}
              {showYouTubeVideos && topic && (
                <YouTubeVideosButton topic={topic} />
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Keyframe animation for icon pulse */}
      <style jsx>{`
        @keyframes icon-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(74, 123, 245, 0.4);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(74, 123, 245, 0);
          }
        }
      `}</style>
    </div>
  );
}
