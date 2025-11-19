
'use client';
import React, { useState, useMemo } from 'react';
import { ChevronDown, ExternalLink, Zap, GitBranch, Code2, Sparkles, Search, Code, Layers, Anchor, History, FileUp, Component, Pointer, Cpu, VenetianMask, Share2, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ReactVersionPage = () => {
  const [expandedVersion, setExpandedVersion] = useState<string | null>('v19');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState('all');

  const versions = [
    {
      id: 'v19',
      version: 'React 19',
      date: 'Dec 2024',
      icon: '⚡',
      features: [
        {
          name: 'Actions',
          description: 'Async functions in transitions for streamlined data submission and form handling.',
          tags: ['Server', 'Forms', 'Async']
        },
        {
          name: 'React Server Components',
          description: 'Stable release for server-side rendering with components to reduce client-side JavaScript.',
          tags: ['Server', 'Performance']
        },
        {
          name: 'use() API',
          description: 'New hook to read promises and context in render, enabling conditional context access.',
          tags: ['Hooks', 'Async']
        },
        {
          name: 'ref as Prop',
          description: 'Function components now receive the ref prop directly, removing the need for forwardRef.',
          tags: ['API', 'Simplification']
        },
        {
          name: 'DocumentHead Component',
          description: 'Built-in component to manage document head tags like title and meta for better SEO.',
          tags: ['SEO', 'Features']
        },
        {
          name: 'Web Components Integration',
          description: 'Improved support for using Web Components within React applications.',
          tags: ['Integration']
        }
      ],
      links: {
        github: 'https://github.com/facebook/react/releases/tag/v19.0.0',
        npm: 'https://www.npmjs.com/package/react/v/19.0.0',
        blog: 'https://react.dev/blog/2024/12/05/react-19'
      }
    },
    {
      id: 'v18',
      version: 'React 18',
      date: 'Mar 2022',
      icon: '🎯',
      features: [
        {
          name: 'Automatic Batching',
          description: 'Automatically groups multiple state updates into single re-render for better performance.',
          tags: ['Performance', 'Batching']
        },
        {
          name: 'Concurrent Features',
          description: 'Introduced interruptible rendering, laying foundation for all new features.',
          tags: ['Rendering', 'Advanced']
        },
        {
          name: 'Transitions (useTransition)',
          description: 'Mark state updates as non-urgent to prevent blocking user input.',
          tags: ['Hooks', 'UX']
        },
        {
          name: 'Deferred Values (useDeferredValue)',
          description: 'Defer re-rendering of part of the UI while keeping rest responsive.',
          tags: ['Hooks', 'Performance']
        },
        {
          name: 'New Root APIs',
          description: 'createRoot() and hydrateRoot() replace legacy render() method.',
          tags: ['API', 'SSR']
        },
        {
          name: 'useId Hook',
          description: 'Generate unique, stable IDs for accessibility and server rendering.',
          tags: ['Hooks', 'A11y']
        }
      ],
      links: {
        github: 'https://github.com/facebook/react/releases/tag/v18.0.0',
        npm: 'https://www.npmjs.com/package/react/v/18.0.0',
        blog: 'https://react.dev/blog/2022/03/29/react-v18'
      }
    },
    {
      id: 'v17',
      version: 'React 17',
      date: 'Oct 2020',
      icon: '🌱',
      features: [
        {
          name: 'New JSX Transform',
          description: 'No need to import React for JSX files. Direct compilation without React.createElement.',
          tags: ['DX', 'JSX']
        },
        {
          name: 'Gradual Upgrades',
          description: 'Large applications can upgrade incrementally with mixed React versions.',
          tags: ['Upgrade', 'Compatibility']
        },
        {
          name: 'Event Delegation Changes',
          description: 'Improved event system for better compatibility and performance.',
          tags: ['Events', 'Performance']
        },
        {
          name: 'Better Error Messages',
          description: 'More helpful error information and improved debugging experience.',
          tags: ['DX', 'Errors']
        }
      ],
      links: {
        github: 'https://github.com/facebook/react/releases/tag/v17.0.0',
        npm: 'https://www.npmjs.com/package/react/v/17.0.0',
        blog: 'https://react.dev/blog/2020/10/20/react-v17'
      }
    },
    {
      id: 'v16.8',
      version: 'React 16.8 - Hooks',
      date: 'Feb 2019',
      icon: '🎣',
      features: [
        { name: 'useState & useEffect', description: 'Introduced the most fundamental hooks for state management and side effects.', tags: ['Hooks', 'State', 'Effects'] },
        { name: 'Custom Hooks', description: 'Extract component logic into reusable functions following Hooks rules.', tags: ['Hooks', 'Reusability'] },
      ],
      links: {
        github: 'https://github.com/facebook/react/releases/tag/v16.8.0',
        npm: 'https://www.npmjs.com/package/react/v/16.8.0',
        blog: 'https://react.dev/blog/2019/02/06/react-v16.8.0'
      }
    },
    {
      id: 'v16',
      version: 'React 16 - Fiber',
      date: 'Sep 2017',
      icon: '🔧',
      features: [
        {
          name: 'Fiber Reconciler',
          description: 'Complete rewrite of rendering engine enabling incremental rendering and prioritization.',
          tags: ['Architecture', 'Performance']
        },
        {
          name: 'Error Boundaries',
          description: 'Catch JavaScript errors in component tree and render fallback UI.',
          tags: ['Error Handling']
        },
        {
          name: 'Portals',
          description: 'Render components outside parent DOM hierarchy for modals and tooltips.',
          tags: ['Features', 'DOM']
        },
      ],
      links: {
        github: 'https://github.com/facebook/react/releases/tag/v16.0.0',
        npm: 'https://www.npmjs.com/package/react/v/16.0.0',
        blog: 'https://react.dev/blog/2017/09/26/react-v16'
      }
    },
    {
      id: 'v15',
      version: 'React 15',
      date: 'Apr 2016',
      icon: '✨',
      features: [
        { name: 'SVG Support', description: 'Full support for all SVG tags and attributes.', tags: ['Features', 'SVG'] },
        { name: 'Null Returns', description: 'Functional components can now return null without wrapper elements.', tags: ['API', 'Simplification'] },
      ],
      links: {
        github: 'https://github.com/facebook/react/releases/tag/v15.0.0',
        npm: 'https://www.npmjs.com/package/react/v/15.0.0',
        blog: 'https://react.dev/blog/2016/04/07/react-v15'
      }
    },
    {
      id: 'v0.14',
      version: 'React 0.14',
      date: 'Oct 2014',
      icon: '🌟',
      features: [
        { name: 'React/ReactDOM Split', description: 'Core React library separated from DOM-specific rendering logic.', tags: ['Architecture', 'Modular'] },
        { name: 'Stateless Components', description: 'Functional components introduced as first-class citizen.', tags: ['Components', 'API'] },
      ],
      links: {
        github: 'https://github.com/facebook/react/releases/tag/v0.14.0',
        npm: 'https://www.npmjs.com/package/react/v/0.14.0',
        blog: 'https://react.dev/blog/2014/10/16/react-v0.14'
      }
    }
  ];

  const filteredVersions = useMemo(() => {
    if (!searchQuery && filterTag === 'all') return versions;
    return versions.filter(v => {
      const matchesSearch = v.version.toLowerCase().includes(searchQuery.toLowerCase()) || v.features.some(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTag = filterTag === 'all' || v.features.some(f => f.tags.includes(filterTag));
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, filterTag, versions]);

  const allTags = [...new Set(versions.flatMap(v => v.features.flatMap(f => f.tags)))].sort();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative overflow-hidden border-b px-6 py-20">
        <div className="text-center space-y-6">
            <Badge variant="outline" className="text-sm">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              React Evolution
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              React Version History
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A deep dive into React's major releases and the architectural innovations that shaped modern web development.
            </p>
          </div>
      </div>

      {/* Search & Filter */}
      <div className="px-6 py-8 space-y-6 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search versions or features..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-xl text-base"
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setFilterTag('all')}
            variant={filterTag === 'all' ? 'default' : 'outline'}
          >
            All
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              onClick={() => setFilterTag(tag)}
              variant={filterTag === tag ? 'default' : 'outline'}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Versions Grid */}
      <div className="px-6 pb-20 space-y-6">
        {filteredVersions.map((versionData, idx) => (
          <div key={versionData.id} className="group relative">
            {/* Timeline Connector */}
            {idx < filteredVersions.length - 1 && (
              <div className="absolute -bottom-6 left-8 w-px h-6 bg-border"></div>
            )}

            {/* Timeline Dot */}
            <div className="absolute left-0 top-8 w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:bg-primary/20 transition"></div>
              <div className="text-3xl">{versionData.icon}</div>
            </div>

            <Card
              className="ml-8 md:ml-32 overflow-hidden hover:border-primary/50 transition"
              onClick={() => setExpandedVersion(expandedVersion === versionData.id ? null : versionData.id)}
            >
              <CardHeader className="cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{versionData.version}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{versionData.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={versionData.links.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 rounded-lg bg-muted hover:bg-accent transition" title="GitHub Release">
                      <GitBranch className="w-4 h-4 text-foreground" />
                    </a>
                    <a href={versionData.links.blog} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 rounded-lg bg-muted hover:bg-accent transition" title="Blog Post">
                      <ExternalLink className="w-4 h-4 text-foreground" />
                    </a>
                  </div>
                </div>
              </CardHeader>
              
              <div className={`overflow-hidden transition-all duration-300 ${expandedVersion === versionData.id ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <CardContent className="pt-0 space-y-4">
                  {versionData.features.map((feature, idx) => (
                    <div key={idx} className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                         <Zap className="w-4 h-4 text-yellow-500"/>
                        {feature.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {feature.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </div>

              <div className="px-6 py-4 border-t flex items-center justify-between bg-muted/30 cursor-pointer">
                <span className="text-sm text-muted-foreground">{versionData.features.length} features</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expandedVersion === versionData.id ? 'rotate-180' : ''}`} />
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t">
        <div className="px-6 py-12 text-center">
          <p className="text-muted-foreground">
            React has evolved from a simple view library to a complete full-stack framework.
          </p>
          <p className="text-sm text-muted-foreground/80 mt-4">
            Explore the journey and see how each version shaped modern web development 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReactVersionPage;
