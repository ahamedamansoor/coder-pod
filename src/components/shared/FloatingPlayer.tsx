'use client';

import React, { useState, useEffect } from 'react';
import { usePlayer } from '@/contexts/PlayerContext';
import { X, Maximize2, Minimize2, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingPlayer() {
  const { content, isMinimized, isPlaying, minimize, maximize, close, togglePlayPause } = usePlayer();
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 560, height: 315 }); // 16:9 aspect ratio
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

  // Handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  // Handle dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || typeof window === 'undefined') return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Keep within viewport bounds using dynamic size
    const maxX = window.innerWidth - size.width - 20;
    const maxY = window.innerHeight - size.height - 72; // 52px header + 20px margin
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
  };

  // Handle drag end
  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  // Handle resize start
  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    });
  };

  // Handle resizing
  const handleResize = (e: MouseEvent) => {
    if (!isResizing || typeof window === 'undefined') return;
    
    const deltaX = e.clientX - resizeStart.x;
    const deltaY = e.clientY - resizeStart.y;
    
    const newWidth = Math.max(400, Math.min(resizeStart.width + deltaX, window.innerWidth - position.x - 20));
    const newHeight = Math.max(225, Math.min(resizeStart.height + deltaY, window.innerHeight - position.y - 20));
    
    setSize({
      width: newWidth,
      height: newHeight,
    });
  };

  // Set initial position after component mounts (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({
        x: window.innerWidth - 580,
        y: window.innerHeight - 380,
      });
    }
  }, []);

  // Add/remove event listeners for dragging and resizing
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, position, size]);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResize);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleResize);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing, resizeStart, size, position]);

  // Early return after all hooks
  if (!content) return null;

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(content.url);

  // Render YouTube video iframe
  const renderContent = () => {
    if (!videoId) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground">Unable to load video</p>
        </div>
      );
    }

    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&rel=0`}
        title={content.title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  };

  return (
    <>
      {/* Full-screen player (maximized) */}
      {!isMinimized && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-background rounded-xl shadow-2xl w-full max-w-7xl h-[85vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-card">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{content.title}</h3>
                {content.author && (
                  <p className="text-sm text-muted-foreground truncate">{content.author}</p>
                )}
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={minimize}
                  className="gap-2"
                >
                  <Minimize2 className="w-4 h-4" />
                  Minimize
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={close}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 relative bg-black min-h-[600px]">
              {renderContent()}
            </div>
          </div>
        </div>
      )}

      {/* Mini player (minimized) - bottom right corner */}
      {isMinimized && (
        <div
          className="fixed z-[9999] group"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${size.width}px`,
            height: `${size.height + 52}px`, // +52px for header
            maxWidth: 'calc(100vw - 40px)',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          <div className="bg-background rounded-lg shadow-2xl border-2 border-primary/20 overflow-hidden relative h-full flex flex-col">
            {/* Mini Header */}
            <div 
              className="flex items-center justify-between p-3 bg-card border-b hover:bg-muted/50 transition-colors select-none"
              onMouseDown={handleMouseDown}
              style={{ 
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none',
              }}
            >
              <div className="flex-1 min-w-0 flex items-center gap-2">
                {content.coverImage && (
                  <img
                    src={content.coverImage}
                    alt=""
                    className="w-8 h-8 rounded object-cover"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate">{content.title}</p>
                  {content.author && (
                    <p className="text-xs text-muted-foreground truncate">{content.author}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 ml-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={togglePlayPause}
                  className="h-8 w-8 p-0"
                >
                  {isPlaying ? (
                    <Pause className="w-3 h-3" />
                  ) : (
                    <Play className="w-3 h-3" />
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={maximize}
                  className="h-8 w-8 p-0"
                >
                  <Maximize2 className="w-3 h-3" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={close}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Mini Content */}
            <div className="relative flex-1 bg-black" style={{ height: `${size.height}px` }}>
              {renderContent()}
            </div>

            {/* Resize Handles */}
            {/* Bottom-right corner */}
            <div
              onMouseDown={handleResizeStart}
              className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize opacity-0 hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, transparent 50%, rgb(59 130 246) 50%)',
              }}
            />
            {/* Bottom edge */}
            <div
              onMouseDown={handleResizeStart}
              className="absolute bottom-0 left-0 right-0 h-1 cursor-ns-resize hover:bg-primary/50 transition-colors"
            />
            {/* Right edge */}
            <div
              onMouseDown={handleResizeStart}
              className="absolute top-0 right-0 bottom-0 w-1 cursor-ew-resize hover:bg-primary/50 transition-colors"
            />
          </div>
        </div>
      )}
    </>
  );
}
