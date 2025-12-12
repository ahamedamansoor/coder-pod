'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { 
  BookOpen, 
  CheckCircle2,
  ExternalLink,
  Info,
  Users,
  FileText,
  Video,
  Code,
  Lightbulb
} from 'lucide-react';

interface SassResourcesNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassResourcesNew({ onOpenWebPlayground }: SassResourcesNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={BookOpen}
        category="Sass/SCSS · Best Practices"
        title="Resources & Community"
        description="Official documentation, learning materials, community resources, and where to get help with Sass/SCSS."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<BookOpen className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Sass Resources & Community"
            description="Everything you need to learn"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            The Sass community is vibrant and helpful! Here are the best resources for learning, staying updated, and getting help when you need it.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Documentation</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Official guides</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-2">
                <Video className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Tutorials</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Video & written</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-700 dark:text-green-300">Community</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Get help</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Official Documentation"
            description="Start here"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Sass Documentation</h4>
                <button
                  onClick={() => window.open('https://sass-lang.com/documentation/', '_blank')}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit
                </button>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Official Sass documentation - comprehensive guide to all features
              </p>
              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Primary Resource</Badge>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Sass Blog</h4>
                <button
                  onClick={() => window.open('https://sass-lang.com/blog/', '_blank')}
                  className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit
                </button>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Updates, new features, and announcements
              </p>
              <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">Stay Updated</Badge>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-green-700 dark:text-green-300">Dart Sass Repository</h4>
                <button
                  onClick={() => window.open('https://github.com/sass/dart-sass', '_blank')}
                  className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  GitHub
                </button>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Source code, issues, and development
              </p>
              <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">Open Source</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Video className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Learning Resources"
            description="Tutorials and courses"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">📚 Written Tutorials</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>MDN Web Docs</strong> - CSS preprocessors overview</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>CSS-Tricks</strong> - Sass guides and articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>freeCodeCamp</strong> - Sass tutorials</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">🎥 Video Courses</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>YouTube</strong> - Free Sass crash courses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Udemy</strong> - Comprehensive Sass courses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Frontend Masters</strong> - Advanced CSS & Sass</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">📖 Books</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>Sass for Web Designers</strong> by Dan Cederholm</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>Jump Start Sass</strong> by Hugo Giraudel & Miriam Suzanne</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Users className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Community & Support"
            description="Get help and connect"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">💬 Discussion Forums</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Stack Overflow</strong> - Tagged questions (sass, scss)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Reddit</strong> - r/webdev, r/css</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <span><strong>Dev.to</strong> - Sass articles and discussions</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">🐦 Social Media</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Twitter</strong> - @SassCSS for updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Discord</strong> - Frontend development servers</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">🔧 Tools & Libraries</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>SassMeister</strong> - Online Sass playground</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>CodePen</strong> - Sass support built-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span><strong>Stylelint</strong> - Sass linting rules</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Popular Libraries"
            description="Sass frameworks and tools"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Bootstrap</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Popular CSS framework built with Sass
              </p>
              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Framework</Badge>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Foundation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Responsive front-end framework
              </p>
              <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">Framework</Badge>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Bourbon</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Lightweight Sass mixin library
              </p>
              <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">Mixins</Badge>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Compass</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                CSS authoring framework (legacy)
              </p>
              <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">Legacy</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Getting Help"
            description="Where to ask questions"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Before Asking</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Check official documentation first</li>
                <li>• Search Stack Overflow for similar questions</li>
                <li>• Read error messages carefully</li>
                <li>• Create minimal reproducible example</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">✅ When Asking</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Provide code snippets (SCSS and compiled CSS)</li>
                <li>• Describe expected vs actual behavior</li>
                <li>• Mention Sass version (Dart Sass vs LibSass)</li>
                <li>• Include build tool configuration if relevant</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">✅ Good Question Example</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                "I'm using Dart Sass 1.60 and trying to use math.div() but getting an error. Here's my code..."
              </p>
              <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">Clear & Specific</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Official Docs First</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                sass-lang.com is your primary resource
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Active Community</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Stack Overflow, Reddit, Discord
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Stay Updated</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Follow @SassCSS and read the blog
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Practice & Share</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use CodePen, share your learnings
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">You've Completed the Sass Journey!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Congratulations! You now have all the knowledge to write <strong>professional, maintainable Sass code</strong>. Keep practicing and stay connected with the community!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

    </div>
  );
}
