
'use client';

import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { useTheme } from 'next-themes';
import { Skeleton } from './ui/skeleton';

interface MermaidDiagramProps {
  diagram: string;
}

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
});

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ diagram }) => {
  const [svg, setSvg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const renderDiagram = async () => {
      setIsLoading(true);
      try {
        // Set theme based on the current application theme
        mermaid.initialize({
            startOnLoad: false,
            theme: resolvedTheme === 'dark' ? 'dark' : 'default',
            securityLevel: 'loose',
        });
        const { svg: renderedSvg } = await mermaid.render('mermaid-graph', diagram);
        setSvg(renderedSvg);
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        setSvg('<p class="text-destructive">Error rendering diagram.</p>');
      } finally {
        setIsLoading(false);
      }
    };

    renderDiagram();
  }, [diagram, resolvedTheme]);

  if (isLoading) {
    return <Skeleton className="h-48 w-full" />;
  }

  return <div dangerouslySetInnerHTML={{ __html: svg || '' }} />;
};
