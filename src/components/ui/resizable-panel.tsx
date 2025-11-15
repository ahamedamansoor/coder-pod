'use client';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ResizablePanelProps {
  children: React.ReactNode;
  initialWidth?: number;
  minWidth?: number;
  maxWidthPercentage?: number;
  isOpen: boolean;
}

export function ResizablePanel({
  children,
  initialWidth = 400,
  minWidth = 300,
  maxWidthPercentage = 50,
  isOpen,
}: ResizablePanelProps) {
  const [width, setWidth] = useState(initialWidth);
  const isResizing = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    isResizing.current = true;
    document.body.style.cursor = 'col-resize';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing.current || !panelRef.current) return;
      
      const parentWidth = panelRef.current.parentElement?.clientWidth ?? window.innerWidth;
      const maxWidth = parentWidth * (maxWidthPercentage / 100);

      const newWidth = parentWidth - e.clientX;
      
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth);
      } else if (newWidth < minWidth) {
        setWidth(minWidth);
      } else if (newWidth > maxWidth) {
        setWidth(maxWidth);
      }
    },
    [minWidth, maxWidthPercentage]
  );

  const handleMouseUp = useCallback(() => {
    isResizing.current = false;
    document.body.style.cursor = 'default';
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={panelRef}
      className={cn(
        'relative flex-shrink-0 transition-all duration-300 ease-in-out',
        isOpen ? 'w-auto' : 'w-0'
      )}
      style={{ width: isOpen ? `${width}px` : '0px' }}
    >
      {isOpen && (
        <>
          <div
            onMouseDown={handleMouseDown}
            className="absolute top-0 left-0 -translate-x-1/2 h-full w-2 cursor-col-resize z-10 flex items-center justify-center group"
          >
            <div className="w-1 h-12 bg-border rounded-full transition-colors group-hover:bg-primary" />
          </div>
          <div className="h-full w-full overflow-hidden">{children}</div>
        </>
      )}
    </div>
  );
}
