import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

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
              <div className={iconBgClassName}>
                <Icon className={iconClassName} />
              </div>
            )}
            <div className={cn(
              centered ? "text-center sm:text-left" : ""
            )}>
              <h1 className={titleClassName}>
                {title}
              </h1>
              {subtitle && (
                <p className={subtitleClassName}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {action && (
            <div>
              {action}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
