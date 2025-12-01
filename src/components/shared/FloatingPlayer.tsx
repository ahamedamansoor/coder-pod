'use client';

import { usePlayer } from '@/contexts/PlayerContext';
import { X, Maximize2, Minimize2, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function FloatingPlayer() {
  const { content, isMinimized, isPlaying, minimize, maximize, close, togglePlayPause } = usePlayer();
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ bottom: 20, right: 20 });

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
            bottom: `${position.bottom}px`,
            right: `${position.right}px`,
            width: '480px',
            maxWidth: 'calc(100vw - 40px)',
          }}
        >
          <div className="bg-background rounded-lg shadow-2xl border-2 border-primary/20 overflow-hidden">
            {/* Mini Header */}
            <div className="flex items-center justify-between p-2 bg-card border-b cursor-move hover:bg-muted/50 transition-colors">
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
            <div className="relative aspect-video bg-black">
              {renderContent()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
