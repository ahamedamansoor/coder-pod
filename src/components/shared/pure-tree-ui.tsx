'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TopicTitle } from '@/components/shared/topic-title';
import { ThemeAwareSnippet } from '@/components/shared/theme-aware-snippet';
import {
  ChevronRight,
  ChevronDown,
  File,
  Folder,
  FolderOpen,
  Code,
  Braces,
  Box
} from 'lucide-react';

interface TreeNode {
  id: string;
  name: string;
  type: 'file' | 'folder' | 'component';
  children?: TreeNode[];
  content?: string;
  language?: string;
}

interface PureTreeUIProps {
  data: TreeNode[];
  title?: string;
  description?: string;
  className?: string;
}

const TreeNodeComponent = React.memo(function TreeNodeComponent({ 
  node, 
  level = 0 
}: { 
  node: TreeNode; 
  level?: number;
}) {
  const [isExpanded, setIsExpanded] = React.useState(level < 2);

  const toggleExpand = React.useCallback(() => {
    if (node.type === 'folder' || node.type === 'component') {
      setIsExpanded(prev => !prev);
    }
  }, [node.type]);

  const getIcon = () => {
    switch (node.type) {
      case 'folder':
        return isExpanded ? (
          <FolderOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
        ) : (
          <Folder className="w-4 h-4 text-amber-600 dark:text-amber-400" />
        );
      case 'component':
        return isExpanded ? (
          <Box className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
        ) : (
          <Box className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
        );
      case 'file':
        return <File className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
      default:
        return <Braces className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="w-full">
      <div 
        className={`
          flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer
          hover:bg-gray-100 dark:hover:bg-gray-800 
          transition-colors duration-200
          ${level > 0 ? 'ml-' + (level * 4) : ''}
        `}
        onClick={toggleExpand}
        style={{ marginLeft: level > 0 ? `${level * 16}px` : '0' }}
      >
        {(hasChildren) && (
          isExpanded ? (
            <ChevronDown className="w-3 h-3 text-gray-500" />
          ) : (
            <ChevronRight className="w-3 h-3 text-gray-500" />
          )
        )}
        {getIcon()}
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {node.name}
        </span>
      </div>

      {isExpanded && hasChildren && (
        <div className="w-full">
          {node.children?.map((child) => (
            <TreeNodeComponent key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}

      {isExpanded && node.content && (
        <div className="w-full mt-2" style={{ marginLeft: `${(level + 1) * 16}px` }}>
          <ThemeAwareSnippet language={node.language}>
            {node.content}
          </ThemeAwareSnippet>
        </div>
      )}
    </div>
  );
});

export const PureTreeUI = React.memo(function PureTreeUI({ 
  data, 
  title = "Component Tree", 
  description = "Interactive tree structure with theme-aware code snippets",
  className = ""
}: PureTreeUIProps) {
  return (
    <div className={`w-screen max-w-full min-h-screen ${className}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="w-full">
          <TopicTitle
            icon={<Code className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
            title={title}
            description={description}
            size="lg"
          />
        </div>

        {/* Tree Container */}
        <Card className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
          <CardContent className="p-6">
            <div className="w-full space-y-1">
              {data.map((node) => (
                <TreeNodeComponent key={node.id} node={node} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Info Section */}
        <div className="w-full">
          <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-4">
                🌳 Tree Structure Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Pure Component Benefits</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Memoized for performance</li>
                    <li>• No side effects</li>
                    <li>• Deterministic rendering</li>
                    <li>• Optimized re-renders</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">UI Tree Features</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Expandable nodes</li>
                    <li>• Theme-aware snippets</li>
                    <li>• Viewport width stretching</li>
                    <li>• Smooth transitions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
});
