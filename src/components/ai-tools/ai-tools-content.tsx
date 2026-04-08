'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Brain, PenTool, FileText, Palette, Video, Mic, Code, Briefcase, TrendingUp, GraduationCap, Zap, ChevronRight, Layers, BookOpen, Cpu, Star, Crown, Sparkles, Search, Grid3x3, List } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AiTool {
  name: string;
  url: string;
  description: string;
  tag?: string;
}

interface AiCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  tools: AiTool[];
}

interface TopAiTool extends AiTool {
  rank: number;
  category: string;
  useCase: string;
}

// Filter categories for AI tools
const aiToolCategories = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'assistants', label: 'AI Assistants', icon: Brain },
  { id: 'writing', label: 'Writing', icon: PenTool },
  { id: 'productivity', label: 'Productivity', icon: Briefcase },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'audio', label: 'Audio', icon: Mic },
  { id: 'coding', label: 'Coding', icon: Code },
  { id: 'learning', label: 'Learning', icon: GraduationCap },
  { id: 'business', label: 'Business', icon: TrendingUp },
  { id: 'platforms', label: 'AI Platforms', icon: BookOpen },
  { id: 'utilities', label: 'Utilities', icon: Zap },
];

// Map categories to their corresponding data
const categoryMap: Record<string, string[]> = {
  assistants: ['AI Assistants & Chat'],
  writing: ['Writing & Copy'],
  productivity: ['Productivity & Work'],
  design: ['Image & Graphic AI'],
  video: ['Video AI Tools'],
  audio: ['Voice & Audio AI'],
  coding: ['Coding & Dev Productivity'],
  learning: ['Learning & Research'],
  business: ['Business, Marketing & SEO'],
  platforms: ['AI Notebooks & LLM Platforms'],
  utilities: ['Daily Utilities'],
};

// Color mapping for AI tool categories
const categoryColors: Record<string, { border: string; accent: string; bg: string; icon: string }> = {
  'AI Assistants & Chat': {
    border: 'border-blue-500',
    accent: 'bg-gradient-to-b from-blue-500 to-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/50',
    icon: 'text-blue-600 dark:text-blue-400'
  },
  'Writing & Copy': {
    border: 'border-emerald-500',
    accent: 'bg-gradient-to-b from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/50',
    icon: 'text-emerald-600 dark:text-emerald-400'
  },
  'Productivity & Work': {
    border: 'border-purple-500',
    accent: 'bg-gradient-to-b from-purple-500 to-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-950/50',
    icon: 'text-purple-600 dark:text-purple-400'
  },
  'Image & Graphic AI': {
    border: 'border-pink-500',
    accent: 'bg-gradient-to-b from-pink-500 to-pink-600',
    bg: 'bg-pink-50 dark:bg-pink-950/50',
    icon: 'text-pink-600 dark:text-pink-400'
  },
  'Video AI Tools': {
    border: 'border-orange-500',
    accent: 'bg-gradient-to-b from-orange-500 to-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/50',
    icon: 'text-orange-600 dark:text-orange-400'
  },
  'Voice & Audio AI': {
    border: 'border-indigo-500',
    accent: 'bg-gradient-to-b from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/50',
    icon: 'text-indigo-600 dark:text-indigo-400'
  },
  'Coding & Dev Productivity': {
    border: 'border-cyan-500',
    accent: 'bg-gradient-to-b from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/50',
    icon: 'text-cyan-600 dark:text-cyan-400'
  },
  'Learning & Research': {
    border: 'border-violet-500',
    accent: 'bg-gradient-to-b from-violet-500 to-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/50',
    icon: 'text-violet-600 dark:text-violet-400'
  },
  'Business, Marketing & SEO': {
    border: 'border-amber-500',
    accent: 'bg-gradient-to-b from-amber-500 to-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/50',
    icon: 'text-amber-600 dark:text-amber-400'
  },
  'AI Notebooks & LLM Platforms': {
    border: 'border-teal-500',
    accent: 'bg-gradient-to-b from-teal-500 to-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/50',
    icon: 'text-teal-600 dark:text-teal-400'
  },
  'Daily Utilities': {
    border: 'border-slate-500',
    accent: 'bg-gradient-to-b from-slate-500 to-slate-600',
    bg: 'bg-slate-50 dark:bg-slate-950/50',
    icon: 'text-slate-600 dark:text-slate-400'
  },
};

// Color mapping for top AI tools by category
const topToolCategoryColors: Record<string, { border: string; badge: string }> = {
  'ML Platform': {
    border: 'border-violet-500',
    badge: 'from-violet-500 to-purple-600'
  },
  'AI Assistant': {
    border: 'border-blue-500',
    badge: 'from-blue-500 to-blue-600'
  },
  'Coding': {
    border: 'border-cyan-500',
    badge: 'from-cyan-500 to-cyan-600'
  },
  'Productivity': {
    border: 'border-emerald-500',
    badge: 'from-emerald-500 to-emerald-600'
  },
  'Productivity & Creativity': {
    border: 'border-purple-500',
    badge: 'from-purple-500 to-purple-600'
  },
};

const topAiTools: TopAiTool[] = [
  {
    rank: 1,
    name: 'Hugging Face Spaces',
    url: 'https://huggingface.co/spaces',
    description: 'Access all LLM models and AI applications - Your gateway to thousands of open-source models',
    category: 'ML Platform',
    useCase: 'Productivity & Creativity'
  },
  {
    rank: 2,
    name: 'ChatGPT',
    url: 'https://chat.openai.com',
    description: 'Advanced conversational AI for answering questions, writing, and problem-solving',
    category: 'AI Assistant',
    useCase: 'Productivity & Creativity'
  },
  {
    rank: 3,
    name: 'Google Gemini',
    url: 'https://gemini.google.com',
    description: 'Google\'s multimodal AI assistant for text, images, and code generation',
    category: 'AI Assistant',
    useCase: 'Productivity & Creativity'
  },
  {
    rank: 4,
    name: 'Claude',
    url: 'https://claude.ai',
    description: 'Constitutional AI assistant focused on helpful, harmless, and honest responses',
    category: 'AI Assistant',
    useCase: 'Productivity & Creativity'
  },
  {
    rank: 5,
    name: 'GitHub Copilot',
    url: 'https://github.com/features/copilot',
    description: 'AI pair programmer that suggests code completions and entire functions',
    category: 'Coding',
    useCase: 'Productivity'
  },
  {
    rank: 6,
    name: 'Canva',
    url: 'https://canva.com',
    description: 'Online design platform for posters, resumes, social media posts and more',
    category: 'Design',
    useCase: 'Creativity'
  },
  {
    rank: 7,
    name: 'Grammarly',
    url: 'https://grammarly.com',
    description: 'AI-powered writing assistant for grammar, spelling, and style improvements',
    category: 'Writing',
    useCase: 'Productivity'
  },
  {
    rank: 8,
    name: 'Midjourney',
    url: 'https://midjourney.com',
    description: 'AI art generator for creating high-quality artistic images',
    category: 'Design',
    useCase: 'Creativity'
  },
  {
    rank: 9,
    name: 'Jasper',
    url: 'https://jasper.ai',
    description: 'AI content generation platform for marketing copy and creative writing',
    category: 'Writing',
    useCase: 'Productivity & Creativity'
  },
  {
    rank: 10,
    name: 'Perplexity AI',
    url: 'https://perplexity.ai',
    description: 'AI-powered search engine with real-time information and citations',
    category: 'Research',
    useCase: 'Productivity'
  }
];

const aiCategories: AiCategory[] = [
  {
    title: 'AI Assistants & Chat',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    tools: [
      { name: 'You.com', url: 'https://you.com', description: 'AI-powered search engine combining web search with conversational AI, providing accurate answers with citations and real-time information', tag: 'AI Search' },
      { name: 'Bard', url: 'https://bard.google.com', description: 'Google\'s conversational AI leveraging Gemini for creative collaboration, coding help, and information retrieval with Google integration', tag: 'Google AI' },
      { name: 'YouChat', url: 'https://you.com', description: 'Advanced conversational AI with real-time web search capabilities, providing up-to-date information and contextual responses', tag: 'Conversational Search' },
      { name: 'Poe', url: 'https://poe.com', description: 'Platform aggregating multiple AI models including ChatGPT, Claude, and others in one unified interface with custom bot creation', tag: 'Multi-Model Platform' },
      { name: 'Microsoft Copilot Chat', url: 'https://copilot.microsoft.com', description: 'Microsoft\'s AI assistant integrated with Bing search, Office apps, and Windows for comprehensive productivity support', tag: 'Microsoft Integration' },
      { name: 'Replika', url: 'https://replika.ai', description: 'AI companion designed for emotional support, personal growth, and meaningful conversations with memory and personality development', tag: 'AI Companion' },
      { name: 'Ask AI', url: 'https://askai.app', description: 'Fast AI question-answering platform supporting multiple models with quick responses and conversational interface', tag: 'Quick Answers' },
      { name: 'Character.AI', url: 'https://character.ai', description: 'Platform for creating and interacting with AI characters for entertainment, roleplay, and creative storytelling with personality customization', tag: 'AI Characters' },
      { name: 'Pi AI', url: 'https://pi.ai', description: 'Personal AI assistant focused on supportive, empathetic conversations designed for emotional well-being and personal guidance', tag: 'Empathetic AI' },
      { name: 'Hugging Face Chat', url: 'https://huggingface.co/chat', description: 'Open-source AI models interface providing access to thousands of community-trained models for various specialized tasks', tag: 'Open Source Models' },
      { name: 'Claude', url: 'https://claude.ai', description: 'Anthropic\'s constitutional AI assistant providing helpful, harmless, and honest responses with advanced reasoning capabilities', tag: 'Constitutional AI' },
      { name: 'Perplexity', url: 'https://perplexity.ai', description: 'AI-powered search engine with real-time information access, citations, and conversational interface for accurate answers', tag: 'AI Search Engine' },
      { name: 'Groq', url: 'https://groq.com', description: 'Ultra-fast AI inference platform providing lightning-quick responses with advanced language model capabilities', tag: 'Fast Inference' },
      { name: 'Mistral Chat', url: 'https://chat.mistral.ai', description: 'Conversational AI interface for Mistral\'s powerful language models with multilingual capabilities and reasoning', tag: 'European AI' },
      { name: 'Gemini', url: 'https://gemini.google.com', description: 'Google\'s multimodal AI assistant capable of understanding text, images, audio, and video with advanced reasoning', tag: 'Multimodal AI' },
    ]
  },
  {
    title: 'Writing & Copy',
    icon: PenTool,
    color: 'from-purple-500 to-pink-500',
    tools: [
      { name: 'QuillBot', url: 'https://quillbot.com', description: 'AI paraphrasing tool with multiple modes, grammar checking, citation generation, and co-writer features for academic and professional writing', tag: 'Paraphrasing' },
      { name: 'Wordtune', url: 'https://wordtune.com', description: 'AI writing companion that rephrases sentences, expands ideas, and improves clarity while maintaining your original meaning and tone', tag: 'Sentence Rewriting' },
      { name: 'Hemingway Editor', url: 'https://hemingwayapp.com', description: 'Writing editor that highlights complex sentences, passive voice, and adverbs to make your writing bold, clear, and concise', tag: 'Clarity Editor' },
      { name: 'Copy.ai', url: 'https://copy.ai', description: 'AI copywriting tool specializing in marketing materials, social media captions, product descriptions, and email campaigns with tone customization', tag: 'Marketing Copy' },
      { name: 'Writesonic', url: 'https://writesonic.com', description: 'AI writing platform with real-time data integration, SEO optimization, and templates for landing pages, ads, and long-form content', tag: 'SEO Content' },
      { name: 'Rytr', url: 'https://rytr.me', description: 'Fast AI writing assistant with 40+ use cases including blog outlines, email drafts, and social media content with built-in plagiarism checker', tag: 'Fast Writing' },
      { name: 'Anyword', url: 'https://anyword.com', description: 'AI copywriting platform that predicts performance and optimizes content for conversions, engagement, and marketing ROI', tag: 'Conversion AI' },
      { name: 'Sudowrite', url: 'https://www.sudowrite.com', description: 'Creative writing AI designed for fiction authors with features for plot development, character creation, and vivid scene descriptions', tag: 'Fiction Writing' },
      { name: 'HyperWrite', url: 'https://hyperwriteai.com', description: 'AI writing assistant with research capabilities, auto-completion, and flexible writing tools for academic, business, and creative content', tag: 'Research Writing' },
      { name: 'Writer.com', url: 'https://writer.com', description: 'Enterprise AI writing platform ensuring brand consistency, compliance, and style across all company communications with team collaboration', tag: 'Brand Consistency' },
      { name: 'Jasper', url: 'https://jasper.ai', description: 'Enterprise AI content platform with brand voice customization, SEO optimization, and templates for marketing copy and long-form content', tag: 'Enterprise Content' },
      { name: 'CopySmith', url: 'https://copysmith.ai', description: 'AI copywriting platform for e-commerce, social media, and marketing content with product description generation', tag: 'E-commerce Copy' },
      { name: 'Frase.io', url: 'https://frase.io', description: 'AI content optimization platform for SEO, research, and content brief generation with competitor analysis', tag: 'SEO Research' },
      { name: 'LongShot AI', url: 'https://longshot.ai', description: 'AI writing assistant specializing in long-form content, fact-checking, and semantic SEO optimization', tag: 'Long-form Content' },
      { name: 'Scalenut', url: 'https://scalenut.com', description: 'AI content intelligence platform for SEO optimization, content planning, and automated content generation', tag: 'Content Intelligence' },
    ]
  },
  {
    title: 'Productivity & Work',
    icon: Briefcase,
    color: 'from-teal-500 to-cyan-500',
    tools: [
      { name: 'Notion AI', url: 'https://www.notion.so', description: 'AI-powered writing assistant that helps you write faster, brainstorm ideas, summarize content, and autofill tables directly within your Notion workspace', tag: 'AI Writing Assistant' },
      { name: 'Notion', url: 'https://notion.so', description: 'All-in-one workspace combining notes, tasks, databases, and wikis with real-time collaboration, templates, and powerful organization features', tag: 'All-in-One Workspace' },
      { name: 'Google Docs', url: 'https://docs.google.com', description: 'Cloud-based document editor with real-time collaboration, version history, smart compose, and seamless integration with Google Workspace', tag: 'Real-time Collaboration' },
      { name: 'Trello', url: 'https://trello.com', description: 'Visual project management using Kanban boards with drag-and-drop cards, checklists, due dates, and power-ups for workflow automation', tag: 'Kanban Boards' },
      { name: 'ClickUp', url: 'https://clickup.com', description: 'Comprehensive productivity platform with AI writing, task management, docs, whiteboards, goals, and time tracking in one unified workspace', tag: 'Everything Management' },
      { name: 'Zapier', url: 'https://zapier.com', description: 'Connect 5000+ apps to automate workflows without coding - create "Zaps" that trigger actions between your favorite tools', tag: 'App Automation' },
      { name: 'Motion AI', url: 'https://usemotion.com', description: 'AI calendar that automatically schedules tasks, meetings, and projects based on priorities and deadlines, optimizing your time management', tag: 'AI Scheduling' },
      { name: 'Superhuman AI', url: 'https://superhuman.com', description: 'Blazing-fast email client with AI-powered features like auto-summarization, write assist, and smart scheduling to save hours weekly', tag: 'Speed Email' },
      { name: 'Reclaim AI', url: 'https://reclaim.ai', description: 'Smart scheduling assistant that automatically finds time for habits, tasks, and meetings while protecting your focus time', tag: 'Time Blocking' },
      { name: 'Make (Integromat)', url: 'https://make.com', description: 'Visual automation builder with drag-and-drop scenarios to connect apps and data without writing code, featuring advanced logic and integrations', tag: 'Visual Automation' },
      { name: 'Bardeen.ai', url: 'https://bardeen.ai', description: 'AI automation platform that handles repetitive tasks like data entry, web scraping, and workflow automation with natural language commands', tag: 'No-Code Automation' },
      { name: 'Monday.com AI', url: 'https://monday.com', description: 'Work OS with AI-powered project management, team collaboration, automation recipes, and customizable workflows for any business process', tag: 'Work OS' },
      { name: 'Asana AI', url: 'https://asana.com', description: 'Smart work management platform with AI features for goal setting, resource management, workflow automation, and team coordination', tag: 'Team Coordination' },
      { name: 'Todoist AI', url: 'https://todoist.com', description: 'Intelligent task manager with natural language input, smart scheduling, productivity tracking, and cross-platform synchronization', tag: 'Smart Tasks' },
      { name: 'Slack', url: 'https://slack.com', description: 'Team communication platform with AI-powered search, automation, and integrations for seamless collaboration', tag: 'Team Communication' },
      { name: 'Microsoft Teams', url: 'https://teams.microsoft.com', description: 'Collaboration platform with chat, video, AI meeting features, and Office 365 integration for modern workplaces', tag: 'Enterprise Collaboration' },
      { name: 'Jira', url: 'https://www.atlassian.com/software/jira', description: 'Advanced issue tracking and project management for software teams with agile workflows and automation', tag: 'Software Development' },
      { name: 'Linear', url: 'https://linear.app', description: 'Modern issue tracking and project management with streamlined workflow, keyboard shortcuts, and real-time collaboration', tag: 'Modern Project Mgmt' },
      { name: 'Obsidian', url: 'https://obsidian.md', description: 'Knowledge management app with linking, graph view, and AI-powered search for personal knowledge bases', tag: 'Knowledge Management' },
      { name: 'Roam Research', url: 'https://roamresearch.com', description: 'Note-taking tool for networked thought and research organization with bi-directional linking and AI features', tag: 'Networked Thinking' },
      { name: 'Airtable', url: 'https://airtable.com', description: 'Spreadsheet-database hybrid with customizable workflows, AI features, and powerful automation capabilities', tag: 'Flexible Database' },
      { name: 'Calendly', url: 'https://calendly.com', description: 'Scheduling automation tool with AI-powered meeting insights, team scheduling, and integration capabilities', tag: 'Meeting Scheduling' },
      { name: 'Miro', url: 'https://miro.com', description: 'Online whiteboard platform for team collaboration, brainstorming, and visual project management with AI features', tag: 'Digital Whiteboard' },
      { name: 'Figma', url: 'https://www.figma.com', description: 'Collaborative design tool with AI-powered features, prototyping, and real-time collaboration for teams', tag: 'Design Collaboration' },
      { name: 'Grammarly', url: 'https://www.grammarly.com', description: 'AI-powered writing assistant checking grammar, spelling, tone, and style across all platforms and applications', tag: 'Writing Assistant' },
    ]
  },
  {
    title: 'Image & Graphic AI',
    icon: Palette,
    color: 'from-rose-500 to-red-500',
    tools: [
      { name: 'Remove.bg', url: 'https://remove.bg', description: 'AI-powered background removal tool that instantly removes backgrounds from images with precision, perfect for product photos and profile pictures', tag: 'Background Removal' },
      { name: 'DALL·E', url: 'https://openai.com/dall-e', description: 'OpenAI\'s advanced AI image generator creating high-quality, detailed images from text descriptions with various artistic styles and photorealism', tag: 'Text to Image' },
      { name: 'Leonardo AI', url: 'https://leonardo.ai', description: 'AI image generation platform specializing in game assets, concept art, and fantasy illustrations with fine-tuned models and community features', tag: 'Game Assets' },
      { name: 'Unsplash', url: 'https://unsplash.com', description: 'Massive library of free, high-resolution stock photographs contributed by a global community of photographers with AI-powered search', tag: 'Stock Photos' },
      { name: 'Stable Diffusion', url: 'https://stability.ai', description: 'Open-source AI model for generating and editing images with unlimited customization, local deployment options, and extensive community support', tag: 'Open Source AI' },
      { name: 'Adobe Firefly', url: 'https://firefly.adobe.com', description: 'Adobe\'s ethical AI image generator trained on licensed Adobe Stock content, ensuring commercial-safe results with Creative Cloud integration', tag: 'Commercial Safe' },
      { name: 'Playground AI', url: 'https://playgroundai.com', description: 'AI image generator with advanced controls, filters, and style options allowing precise artistic control and high-quality output for creators', tag: 'Advanced Controls' },
      { name: 'NightCafe Studio', url: 'https://nightcafe.studio', description: 'AI art creator offering multiple algorithms including neural style transfer, VQGAN+CLIP, and DALL-E 2 with community challenges and features', tag: 'Multiple Algorithms' },
      { name: 'Ideogram AI', url: 'https://ideogram.ai', description: 'AI image generator excelling at accurate text rendering within images, perfect for logos, posters, and typography-based designs', tag: 'Text Rendering' },
      { name: 'Kandinsky AI', url: 'https://kandinsky.ai', description: 'Russian-developed AI image generation model with unique artistic capabilities and cultural understanding, offering diverse creative styles', tag: 'Artistic AI' },
      { name: 'DreamStudio', url: 'https://dreamstudio.ai', description: 'Official Stable Diffusion web interface providing advanced controls, API access, and professional-grade image generation capabilities', tag: 'Stable Diffusion UI' },
      { name: 'Midjourney', url: 'https://midjourney.com', description: 'Advanced AI image generator known for artistic, photorealistic, and creative outputs with Discord-based interface and community features', tag: 'Artistic Generation' },
      { name: 'Canva AI', url: 'https://canva.com', description: 'Design platform with AI-powered features for creating social media graphics, presentations, posters, and marketing materials', tag: 'Design Platform' },
      { name: 'Picsart AI', url: 'https://picsart.com', description: 'Creative platform with AI photo editing, background removal, object removal, and artistic effects for social media content', tag: 'Photo Editing' },
      { name: 'Craiyon', url: 'https://craiyon.com', description: 'Free AI image generator creating artwork from text descriptions with simple interface and unlimited generations', tag: 'Free Generation' },
      { name: 'Artbreeder', url: 'https://artbreeder.com', description: 'AI platform for creating and evolving images through breeding and collaboration, perfect for character and landscape design', tag: 'Image Evolution' },
      { name: 'Deep Dream Generator', url: 'https://deepdreamgenerator.com', description: 'Google\'s AI tool creating psychedelic, dream-like images by enhancing patterns in existing photos', tag: 'Psychedelic Art' },
      { name: 'Starry AI', url: 'https://starryai.com', description: 'AI art generator creating unique artwork with customizable styles, high-resolution outputs, and NFT creation capabilities', tag: 'NFT Art' },
    ]
  },
  {
    title: 'Video AI Tools',
    icon: Video,
    color: 'from-green-500 to-emerald-500',
    tools: [
      { name: 'CapCut', url: 'https://capcut.com', description: 'Comprehensive video editing app with AI-powered auto-captions, background removal, effects, and trending templates for social media content', tag: 'Mobile Video Editor' },
      { name: 'Descript', url: 'https://descript.com', description: 'Revolutionary video editing platform using text-based editing where you edit video by editing the transcript, with AI voice cloning and overdub features', tag: 'Text-based Editing' },
      { name: 'VEED', url: 'https://veed.io', description: 'Online video editor with AI-powered subtitles, eye-tracking corrections, background noise removal, and automatic transcription for professional content creation', tag: 'Online Video Editor' },
      { name: 'Opus Clip', url: 'https://opusclip.com', description: 'AI tool that intelligently repurposes long videos into viral short clips with automatic highlighting, captions, and social media optimization', tag: 'Video Repurposing' },
      { name: 'Pictory', url: 'https://pictory.ai', description: 'AI video creation platform that transforms long-form content like blog posts and scripts into engaging videos with stock footage and voiceovers', tag: 'Text to Video' },
      { name: 'Runway', url: 'https://runwayml.com', description: 'Advanced AI video generation and editing suite featuring text-to-video, image-to-video, and professional-grade magic tools for creators', tag: 'AI Video Generation' },
      { name: 'Synthesia', url: 'https://synthesia.io', description: 'Leading AI video generation platform creating realistic avatar videos from text with 120+ languages and extensive customization options', tag: 'AI Avatars' },
      { name: 'InVideo', url: 'https://invideo.io', description: 'AI-powered video creation platform with thousands of templates, stock media, and intelligent features for marketing and social media content', tag: 'Marketing Videos' },
      { name: 'Lumen5', url: 'https://lumen5.com', description: 'AI video platform that converts blog posts and articles into engaging social media videos with automatic scene selection and branding', tag: 'Content Marketing' },
      { name: 'Filmora', url: 'https://filmora.wondershare.com', description: 'User-friendly video editing software enhanced with AI features like auto-captioning, motion tracking, and intelligent effects', tag: 'User-friendly Editor' },
      { name: 'HeyGen', url: 'https://heygen.com', description: 'AI video generation platform creating realistic talking avatars with multilingual support and lip-sync technology for training and marketing', tag: 'Talking Avatars' },
      { name: 'D-ID', url: 'https://d-id.com', description: 'Creative AI platform generating talking avatars from photos or text with advanced facial animation and multilingual capabilities', tag: 'Face Animation' },
      { name: 'Pika Labs', url: 'https://pika.art', description: 'AI video generation platform creating animated content and short videos from text prompts with various artistic styles and effects', tag: 'Animation AI' },
    ]
  },
  {
    title: 'Voice & Audio AI',
    icon: Mic,
    color: 'from-indigo-500 to-violet-500',
    tools: [
      { name: 'Otter.ai', url: 'https://otter.ai', description: 'AI-powered transcription service providing real-time meeting notes, speaker identification, and keyword extraction for business and educational use', tag: 'Meeting Transcription' },
      { name: 'ElevenLabs', url: 'https://elevenlabs.io', description: 'Advanced AI voice synthesis platform offering ultra-realistic text-to-speech, voice cloning, and emotion control for content creators', tag: 'Realistic Voices' },
      { name: 'Speechify', url: 'https://speechify.com', description: 'AI text-to-speech converter turning documents, articles, and books into natural-sounding audio with adjustable reading speeds', tag: 'Document to Audio' },
      { name: 'Adobe Podcast AI', url: 'https://podcast.adobe.com', description: 'Professional podcast enhancement suite with AI-powered noise reduction, voice enhancement, and automatic audio leveling', tag: 'Podcast Enhancement' },
      { name: 'Cleanvoice AI', url: 'https://cleanvoice.ai', description: 'Intelligent audio cleaning tool automatically removing filler words, mouth sounds, and background noise from podcasts and recordings', tag: 'Audio Cleaning' },
      { name: 'Murf AI', url: 'https://murf.ai', description: 'Comprehensive AI voice generator creating professional voiceovers with multiple voices, languages, and emotional expressions for various content types', tag: 'Voiceover Studio' },
      { name: 'Play.ht', url: 'https://play.ht', description: 'AI voice generation platform with ultra-realistic voices, podcast tools, and voice cloning for content creators and businesses', tag: 'Podcast Voices' },
      { name: 'Resemble AI', url: 'https://resemble.ai', description: 'Enterprise-grade voice cloning platform creating custom AI voices with emotional intelligence and real-time synthesis capabilities', tag: 'Voice Cloning' },
      { name: 'Soundraw', url: 'https://soundraw.io', description: 'AI music generation platform creating unlimited royalty-free music customized for videos, content, and creative projects', tag: 'AI Music Generation' },
      { name: 'AIVA', url: 'https://aiva.ai', description: 'AI music composer specializing in emotional soundtracks, classical music, and cinematic scores for films, games, and media', tag: 'Classical AI Music' },
    ]
  },
  {
    title: 'Coding & Dev Productivity',
    icon: Code,
    color: 'from-slate-500 to-gray-500',
    tools: [
      { name: 'Replit', url: 'https://replit.com', description: 'Cloud-based IDE with AI coding assistance, collaborative coding, and instant deployment for 50+ programming languages', tag: 'Cloud IDE' },
      { name: 'CodePen', url: 'https://codepen.io', description: 'Social development environment for frontend developers to test, showcase, and discover HTML, CSS, and JavaScript code', tag: 'Frontend Playground' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'World\'s largest developer community platform for Q&A, knowledge sharing, and problem-solving with AI-powered search', tag: 'Developer Community' },
      { name: 'Cursor', url: 'https://cursor.sh', description: 'AI-powered code editor with advanced code generation, debugging, and refactoring capabilities for modern development workflows', tag: 'AI Code Editor' },
      { name: 'Tabnine', url: 'https://tabnine.com', description: 'AI code completion tool supporting multiple languages with context-aware suggestions and team-wide code consistency', tag: 'Code Completion' },
      { name: 'Codeium', url: 'https://codeium.com', description: 'Free AI code completion and chat assistant offering unlimited autocomplete, search, and chat for enhanced productivity', tag: 'Free AI Coding' },
      { name: 'AskCodi', url: 'https://askcodi.com', description: 'Comprehensive AI coding assistant for code generation, testing, documentation, and database queries across multiple languages', tag: 'Multi-purpose Coding' },
      { name: 'Mutable AI', url: 'https://mutable.ai', description: 'AI accelerator for software development improving code quality, test generation, and documentation with advanced refactoring', tag: 'Code Quality' },
      { name: 'Sourcegraph Cody', url: 'https://sourcegraph.com', description: 'AI coding assistant that understands your entire codebase, providing context-aware answers and code suggestions', tag: 'Codebase Intelligence' },
      { name: 'Amazon CodeWhisperer', url: 'https://aws.amazon.com/codewhisperer', description: 'Amazon\'s AI coding companion providing real-time code suggestions optimized for AWS services and cloud development', tag: 'AWS Development' },
      { name: 'Blackbox AI', url: 'https://blackbox.ai', description: 'AI coding assistant with code generation, debugging capabilities, and extensive language support for rapid development', tag: 'Rapid Development' },
      { name: 'WhatTheDiff', url: 'https://whatthediff.ai', description: 'AI tool explaining code differences and pull requests in plain English, improving code review efficiency and understanding', tag: 'Code Review Helper' },
      { name: 'CodeT5', url: 'https://huggingface.co/Salesforce/codet5-base', description: 'Salesforce\'s AI model for code understanding, generation, summarization, and translation across programming languages', tag: 'Code Understanding' },
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'AI pair programmer suggesting code completions, entire functions, and explanations directly in your editor', tag: 'AI Pair Programming' },
      { name: 'GitLab Duo', url: 'https://about.gitlab.com/gitlab-duo', description: 'AI-powered DevSecOps platform offering code suggestions, vulnerability explanations, and workflow automation', tag: 'DevSecOps AI' },
      { name: 'JetBrains AI', url: 'https://www.jetbrains.com/ai/', description: 'AI assistant integrated into JetBrains IDEs providing code completion, explanation, and generation features', tag: 'IDE Integration' },
      { name: 'DeepCode', url: 'https://www.deepcode.ai', description: 'AI-powered code review tool finding bugs, security vulnerabilities, and performance issues in real-time', tag: 'AI Code Review' },
      { name: 'CodiumAI', url: 'https://codium.ai', description: 'AI test generation platform creating meaningful unit tests and ensuring code coverage with intelligent analysis', tag: 'Test Generation' },
      { name: 'Bugasura', url: 'https://bugasura.io', description: 'AI-powered bug tracking and management platform helping teams identify, prioritize, and resolve issues efficiently', tag: 'Bug Management' },
      { name: 'Snyk Code', url: 'https://snyk.io/product/snyk-code', description: 'AI-powered security scanning finding vulnerabilities in your code with real-time analysis and fix suggestions', tag: 'Security Scanning' },
      { name: 'CodeTriage', url: 'https://www.codetriage.com', description: 'AI-powered code review assistant providing automated feedback and improvement suggestions for pull requests', tag: 'Automated Review' },
    ]
  },
  {
    title: 'Learning & Research',
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-500',
    tools: [
      { name: 'Khan Academy', url: 'https://khanacademy.org', description: 'Comprehensive free learning platform offering lessons, exercises, and personalized learning paths for math, science, and humanities', tag: 'Free Education' },
      { name: 'Coursera', url: 'https://coursera.org', description: 'Online learning platform with courses, certificates, and degrees from top universities and companies with AI-powered recommendations', tag: 'University Courses' },
      { name: 'Wolfram Alpha', url: 'https://wolframalpha.com', description: 'Computational knowledge engine providing step-by-step solutions for mathematics, science, engineering, and factual queries', tag: 'Computational Engine' },
      { name: 'Elicit', url: 'https://elicit.org', description: 'AI research assistant using language models to find relevant papers, extract key information, and answer research questions', tag: 'Research Assistant' },
      { name: 'Quizlet', url: 'https://quizlet.com', description: 'AI-powered study platform with flashcards, practice tests, and learning modes using spaced repetition and adaptive learning', tag: 'Study Tools' },
      { name: 'Khanmigo (Khan Academy)', url: 'https://khanacademy.org', description: 'AI-powered tutor providing personalized guidance, Socratic questioning, and real-time feedback for enhanced learning', tag: 'AI Tutor' },
      { name: 'Duolingo MAX', url: 'https://duolingo.com', description: 'AI-enhanced language learning with personalized lessons, realistic conversations, and detailed explanations for language mastery', tag: 'AI Language Learning' },
      { name: 'Brainly AI', url: 'https://brainly.com', description: 'AI-powered homework help platform providing step-by-step solutions, explanations, and expert-verified answers', tag: 'Homework Help' },
      { name: 'Socratic by Google', url: 'https://socratic.org', description: 'AI learning assistant using visual recognition to provide explanations for homework problems across all subjects', tag: 'Visual Learning' },
      { name: 'Wisdolia', url: 'https://wisdolia.com', description: 'AI flashcard generator creating study cards from any content including videos, articles, and documents with spaced repetition', tag: 'Smart Flashcards' },
      { name: 'Scholarcy', url: 'https://scholarcy.com', description: 'AI research tool summarizing academic papers, extracting references, and creating comprehensive literature reviews automatically', tag: 'Paper Summarizer' },
      { name: 'Consensus', url: 'https://consensus.app', description: 'AI search engine finding evidence-based answers from scientific papers with citation analysis and research synthesis', tag: 'Evidence Search' },
      { name: 'ResearchRabbit', url: 'https://researchrabbit.ai', description: 'AI-powered research discovery platform recommending relevant papers and tracking research trends in your field', tag: 'Research Discovery' },
    ]
  },
  {
    title: 'Business, Marketing & SEO',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    tools: [
      { name: 'Google Analytics', url: 'https://analytics.google.com', description: 'Comprehensive web analytics platform providing insights into website traffic, user behavior, conversion tracking, and marketing performance', tag: 'Web Analytics' },
      { name: 'Canva Docs', url: 'https://canva.com/docs', description: 'AI-powered document creation platform combining beautiful design with collaboration features for professional documents and presentations', tag: 'Document Design' },
      { name: 'Surfer SEO', url: 'https://surferseo.com', description: 'AI-driven SEO optimization platform analyzing top-ranking content, providing keyword research, and optimizing content for search engines', tag: 'SEO Optimization' },
      { name: 'HubSpot', url: 'https://hubspot.com', description: 'All-in-one marketing, sales, and service platform with AI-powered CRM, automation, and analytics for business growth', tag: 'Marketing CRM' },
      { name: 'AdCreative.ai', url: 'https://adcreative.ai', description: 'AI platform generating conversion-focused ad creatives, banners, and social media posts with performance predictions and A/B testing', tag: 'Ad Creative Generation' },
      { name: 'MarketMuse', url: 'https://marketmuse.com', description: 'AI content intelligence platform for content strategy, topic research, competitive analysis, and SEO optimization', tag: 'Content Strategy' },
      { name: 'Ocoya', url: 'https://ocoya.com', description: 'AI-powered social media management platform creating, scheduling, and analyzing content across multiple social networks', tag: 'Social Media AI' },
      { name: 'Lately AI', url: 'https://lately.ai', description: 'AI social media content generator transforming long-form content into dozens of social media posts with optimal engagement timing', tag: 'Content Repurposing' },
      { name: 'VidIQ AI', url: 'https://vidiq.com', description: 'AI-powered YouTube optimization tools providing keyword research, competitor analysis, and growth strategies for content creators', tag: 'YouTube Growth' },
      { name: 'TubeBuddy AI', url: 'https://tubebuddy.com', description: 'YouTube optimization and analytics platform with AI-powered tools for SEO, A/B testing, and channel management', tag: 'YouTube Tools' },
    ]
  },
  {
    title: 'AI Notebooks & LLM Platforms',
    icon: BookOpen,
    color: 'from-violet-500 to-purple-500',
    tools: [
      { name: 'Google Colab', url: 'https://colab.research.google.com', description: 'Free cloud-based Jupyter notebook environment with GPU/TPU support, pre-installed AI libraries, and seamless Google Drive integration', tag: 'Free GPU Notebooks' },
      { name: 'Jupyter Notebook', url: 'https://jupyter.org', description: 'Open-source web application for creating and sharing documents with live code, equations, visualizations, and rich text output', tag: 'Open Source Notebooks' },
      { name: 'Kaggle Notebooks', url: 'https://kaggle.com/notebooks', description: 'Cloud-based data science platform with free GPU/TPU access, massive datasets, and community collaboration features', tag: 'Data Science Platform' },
      { name: 'DeepNote', url: 'https://deepnote.com', description: 'Real-time collaborative data science notebook platform with AI-powered code completion and integrated development tools', tag: 'Collaborative Notebooks' },
      { name: 'Observable', url: 'https://observablehq.com', description: 'Interactive data visualization platform using JavaScript notebooks for creating dynamic, shareable data explorations', tag: 'Data Visualization' },
      { name: 'Databricks Notebooks', url: 'https://databricks.com', description: 'Enterprise-grade collaborative notebooks optimized for big data analytics, machine learning, and Apache Spark integration', tag: 'Big Data Analytics' },
      { name: 'Azure ML Studio', url: 'https://azure.microsoft.com/en-us/services/machine-learning-studio', description: 'Microsoft\'s cloud-based machine learning environment with drag-and-drop interface, automated ML, and MLOps capabilities', tag: 'Azure ML Platform' },
      { name: 'SageMaker Studio', url: 'https://aws.amazon.com/sagemaker', description: 'AWS integrated development environment for machine learning with notebooks, experiment tracking, and one-click deployment', tag: 'AWS ML Studio' },
      { name: 'Paperspace Gradient', url: 'https://gradient.paperspace.com', description: 'Cloud GPU platform offering high-performance computing for deep learning with Jupyter notebooks and easy deployment', tag: 'Cloud GPU Platform' },
      { name: 'OpenAI Playground', url: 'https://platform.openai.com/playground', description: 'Interactive web interface for testing, fine-tuning, and experimenting with OpenAI\'s language models and APIs', tag: 'OpenAI Testing' },
      { name: 'Anthropic Console', url: 'https://console.anthropic.com', description: 'Development platform for building applications with Claude AI models, featuring API access and usage analytics', tag: 'Claude Development' },
      { name: 'Cohere Playground', url: 'https://cohere.com/playground', description: 'Interactive testing environment for Cohere\'s language models, embeddings, and generation APIs with real-time results', tag: 'Cohere Testing' },
      { name: 'Replicate', url: 'https://replicate.com', description: 'Platform for running and sharing machine learning models with simple API access, automatic scaling, and pay-per-use pricing', tag: 'Model Hosting' },
      { name: 'Together AI', url: 'https://together.ai', description: 'Cloud platform optimized for open-source AI models with fast inference, custom model hosting, and enterprise-grade security', tag: 'Open Source AI Cloud' },
      { name: 'Perplexity Labs', url: 'https://labs.perplexity.ai', description: 'Experimental AI research platform offering cutting-edge models and tools for developers and researchers', tag: 'AI Research Lab' },
      { name: 'LM Studio', url: 'https://lmstudio.ai', description: 'Desktop application for downloading and running local LLMs with offline inference, model management, and chat interfaces', tag: 'Local LLM Desktop' },
      { name: 'Ollama', url: 'https://ollama.ai', description: 'Local LLM runner for downloading, managing, and running AI models on your machine with command-line simplicity', tag: 'Local LLM Runner' },
      { name: 'Jan AI', url: 'https://jan.ai', description: 'Open-source desktop platform for running local AI models with chat interfaces, model management, and privacy-focused design', tag: 'Open Source AI Desktop' },
      { name: 'GPT4All', url: 'https://gpt4all.io', description: 'Open-source ecosystem for running large language models locally on consumer hardware with privacy and offline capabilities', tag: 'Local LLM Ecosystem' },
    ]
  },
  {
    title: 'Daily Utilities',
    icon: Zap,
    color: 'from-yellow-500 to-amber-500',
    tools: [
      { name: 'MyPocketPDF', url: 'https://mypocketpdf.com/', description: 'Comprehensive free PDF toolkit offering conversion, merging, organization, repair, editing, and image extraction with AI optimization', tag: 'PDF Toolkit' },
      { name: 'TinyWow', url: 'https://tinywow.com', description: 'Free online platform providing AI-powered tools for PDF conversion, image editing, writing assistance, and file manipulation', tag: 'Free File Tools' },
      { name: 'ILovePDF', url: 'https://ilovepdf.com', description: 'Popular online PDF service offering merging, splitting, compressing, converting, and organizing with AI-powered optimization', tag: 'PDF Processing' },
      { name: 'PDF24 Tools', url: 'https://tools.pdf24.org', description: 'Free desktop and online PDF tools with AI-enhanced features for editing, converting, securing, and managing PDF documents', tag: 'PDF Suite' },
      { name: 'Speedtest', url: 'https://speedtest.net', description: 'AI-enhanced internet speed test tool measuring connection performance, latency, and stability with detailed analytics', tag: 'Speed Testing' },
      { name: 'TimeAndDate', url: 'https://timeanddate.com', description: 'Comprehensive time platform with world clocks, calendars, time zones, and AI-powered scheduling assistance', tag: 'Time Management' },
      { name: 'Tome', url: 'https://tome.app', description: 'AI-powered presentation and storytelling platform creating compelling narratives with intelligent layout and design suggestions', tag: 'AI Presentations' },
      { name: 'Simplified', url: 'https://simplified.com', description: 'All-in-one AI design platform for creating graphics, videos, written content, and social media posts with brand consistency', tag: 'Design Platform' },
      { name: 'Typewise AI Keyboard', url: 'https://typewise.app', description: 'AI-powered keyboard app with intelligent text prediction, autocorrection, and customizable typing experience', tag: 'Smart Keyboard' },
      { name: 'SpeechTexter', url: 'https://speechtexter.com', description: 'AI speech-to-text converter offering real-time dictation, voice typing, and transcription for multiple languages', tag: 'Voice Typing' },
      { name: 'Smallpdf', url: 'https://smallpdf.com', description: 'AI-powered PDF platform providing compression, conversion, editing, and e-signature tools with cloud integration', tag: 'PDF Cloud Platform' },
      { name: 'PDF2Go', url: 'https://pdf2go.com', description: 'Online PDF converter with AI-powered optimization, editing features, and batch processing for efficient document management', tag: 'PDF Converter' },
      { name: 'OnlineOCR', url: 'https://onlineocr.net', description: 'AI OCR service extracting text from images, scanned documents, and PDFs with high accuracy and multiple language support', tag: 'Text Recognition' },
    ]
  },
];

export default function AiToolsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'grouped'>('grouped');

  const handleToolClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Filter categories based on search query
  const filteredCategories = aiCategories.filter(category => {
    const matchesCategory = activeCategory === 'all' || categoryMap[activeCategory]?.includes(category.title);
    
    const matchesSearch = !searchQuery || 
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.tools.some(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  // Filter top tools based on search query
  const filteredTopTools = topAiTools.filter(tool => {
    const matchesSearch = !searchQuery ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  // Get count for each category
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') {
      return aiCategories.reduce((acc, cat) => acc + cat.tools.length, 0);
    }
    const categoryTitles = categoryMap[categoryId] || [];
    return aiCategories
      .filter(cat => categoryTitles.includes(cat.title))
      .reduce((acc, cat) => acc + cat.tools.length, 0);
  };

  return (
    <main className="flex-1 overflow-y-auto bg-transparent w-full">
      {/* Filter Section - Sticky */}
      <div className="sticky top-0 z-40 -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12 px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 pb-4 mb-6 bg-background/95 backdrop-blur-md border-b border-border/40 transition-all duration-200">
        <div className="flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto w-full">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide p-1 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 max-w-full w-auto mx-auto lg:mx-0 snap-x">
            {aiToolCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap',
                    'transition-all duration-300 ease-out',
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  )}
                >
                  {/* Active indicator glow */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20" />
                  )}
                  <Icon className={cn(
                    'w-4 h-4 relative z-10 transition-transform duration-300',
                    isActive && 'scale-110'
                  )} />
                  <span className="relative z-10">{cat.label}</span>
                  <span className={cn(
                    'relative z-10 px-2 py-0.5 rounded-full text-xs font-semibold transition-colors duration-300',
                    isActive
                      ? 'bg-slate-900/10 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                      : 'bg-slate-200/80 dark:bg-slate-700/80 text-slate-500 dark:text-slate-400'
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full max-w-lg flex-shrink-0">
            <input
              type="text"
              placeholder="Search AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/60 focus:border-blue-400 dark:focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-all duration-200 text-sm shadow-sm hover:shadow-md"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
            <button
              onClick={() => setViewMode('grouped')}
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200',
                viewMode === 'grouped'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              )}
            >
              <List className="w-4 h-4" />
              <span>Grouped</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200',
                viewMode === 'grid'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              )}
            >
              <Grid3x3 className="w-4 h-4" />
              <span>Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top 10 AI Tools Section */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 bg-gradient-to-br from-violet-50/50 to-purple-50/30 dark:from-violet-950/20 dark:to-purple-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              <h2 className="text-3xl font-bold text-violet-700 dark:text-violet-300">
                Top 10 AI Tools for Productivity & Creativity
              </h2>
              <Sparkles className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              The most powerful and popular AI tools that will transform your workflow and boost your creative potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {topAiTools.map((tool) => {
              const categoryColors = topToolCategoryColors[tool.category] || topToolCategoryColors['Productivity & Creativity'];
              
              return (
              <div
                key={tool.name}
                onClick={() => handleToolClick(tool.url)}
                className={cn(
                  "group relative bg-white dark:bg-slate-800 rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer",
                  categoryColors.border
                )}
              >
                {/* Rank Badge */}
                <div className={cn(
                  "absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg",
                  categoryColors.badge
                )}>
                  {tool.name === 'Hugging Face Spaces' ? (
                    <div className="relative">
                      <Crown className="w-4 h-4 text-yellow-300 fill-yellow-300 animate-pulse drop-shadow-lg" />
                      <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur-sm animate-pulse opacity-60" />
                      <div className="absolute -inset-1 w-6 h-6 bg-gradient-to-r from-yellow-200/40 to-orange-200/40 rounded-full blur-md animate-ping" />
                    </div>
                  ) : (
                    tool.rank
                  )}
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 line-clamp-3">
                    {tool.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="secondary" className="text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700">
                      {tool.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-violet-200 dark:border-violet-700 text-violet-600 dark:text-violet-400">
                      {tool.useCase}
                    </Badge>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
        <div className="w-full">
          {/* Categories Display */}
          {searchQuery ? (
            /* Search Results - Grid View */
            <div className="space-y-8">
              {/* Top 10 Tools Section */}
              {filteredTopTools.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <Crown className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Top AI Tools
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {filteredTopTools.length} tool{filteredTopTools.length !== 1 ? 's' : ''} found
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {filteredTopTools.map((tool) => {
                      const categoryColors = topToolCategoryColors[tool.category] || topToolCategoryColors['Productivity & Creativity'];
                      
                      return (
                      <div
                        key={tool.name}
                        onClick={() => handleToolClick(tool.url)}
                        className={cn(
                          "group relative bg-white dark:bg-slate-800 rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer",
                          categoryColors.border
                        )}
                      >
                        {/* Rank Badge */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {tool.name === 'Hugging Face Spaces' ? (
                            <div className="relative">
                              <Crown className="w-4 h-4 text-yellow-300 fill-yellow-300 animate-pulse drop-shadow-lg" />
                              <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur-sm animate-pulse opacity-60" />
                              <div className="absolute -inset-1 w-6 h-6 bg-gradient-to-r from-yellow-200/40 to-orange-200/40 rounded-full blur-md animate-ping" />
                            </div>
                          ) : (
                            tool.rank
                          )}
                        </div>

                        {/* Content */}
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Star className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                          </div>
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                            {tool.name}
                          </h3>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 line-clamp-3">
                            {tool.description}
                          </p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            <Badge variant="secondary" className="text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700">
                              {tool.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs border-violet-200 dark:border-violet-700 text-violet-600 dark:text-violet-400">
                              {tool.useCase}
                            </Badge>
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* All Categories Section */}
              <div className="space-y-6">
                {filteredCategories.map((category) => {
                  const CategoryIcon = category.icon;
                  return (
                    <div key={category.title} className="space-y-4">
                      <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                          <CategoryIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {category.title}
                          </h2>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {category.tools.length} tool{category.tools.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {category.tools.map((tool) => (
                          <div
                            key={tool.name}
                            onClick={() => handleToolClick(tool.url)}
                            className="group cursor-pointer"
                          >
                            <div className={cn(
                              'relative h-full rounded-xl overflow-hidden',
                              'bg-white dark:bg-slate-900',
                              `border ${categoryColors[category.title]?.border || 'border-slate-200'} dark:${categoryColors[category.title]?.border || 'dark:border-slate-800'}`,
                              'shadow-sm hover:shadow-md',
                              'transition-all duration-200',
                              'hover:-translate-y-0.5'
                            )}>
                              <div className={cn(
                                'absolute left-0 top-0 bottom-0 w-1',
                                categoryColors[category.title]?.accent || 'bg-gradient-to-b from-blue-500 to-blue-600'
                              )} />
                              <div className="p-5 pl-6 flex flex-col h-full">
                                <div className="flex items-start gap-3 mb-3">
                                  <div className={cn(
                                    'p-2 rounded-lg flex-shrink-0',
                                    categoryColors[category.title]?.bg || 'bg-blue-50 dark:bg-blue-950/50'
                                  )}>
                                    <CategoryIcon className={cn('h-5 w-5', categoryColors[category.title]?.icon || 'text-blue-600 dark:text-blue-400')} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {tool.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                      {tool.tag && (
                                        <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                                          {tool.tag}
                                        </Badge>
                                      )}
                                      <span className="text-xs text-slate-500 dark:text-slate-400">
                                        AI Tool
                                      </span>
                                    </div>
                                  </div>
                                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 min-h-[3.75rem] flex-1">
                                  {tool.description}
                                </p>
                                                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : viewMode === 'grouped' ? (
            /* Grouped View by Category */
            <div className="space-y-8">
              {filteredCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <Card key={category.title} className="bg-white/5 dark:bg-black/5 backdrop-blur-sm border-white/20 dark:border-white/10">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                          <CategoryIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{category.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {category.tools.length} tool{category.tools.length !== 1 ? 's' : ''}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {category.tools.map((tool) => (
                          <div
                            key={tool.name}
                            onClick={() => handleToolClick(tool.url)}
                            className="group cursor-pointer"
                          >
                            <div className={cn(
                              'relative h-full rounded-xl overflow-hidden',
                              'bg-white dark:bg-slate-900',
                              `border ${categoryColors[category.title]?.border || 'border-slate-200'} dark:${categoryColors[category.title]?.border || 'dark:border-slate-800'}`,
                              'shadow-sm hover:shadow-md',
                              'transition-all duration-200',
                              'hover:-translate-y-0.5'
                            )}>
                              <div className={cn(
                                'absolute left-0 top-0 bottom-0 w-1',
                                categoryColors[category.title]?.accent || 'bg-gradient-to-b from-blue-500 to-blue-600'
                              )} />
                              <div className="p-5 pl-6 flex flex-col h-full">
                                <div className="flex items-start gap-3 mb-3">
                                  <div className={cn(
                                    'p-2 rounded-lg flex-shrink-0',
                                    categoryColors[category.title]?.bg || 'bg-blue-50 dark:bg-blue-950/50'
                                  )}>
                                    <CategoryIcon className={cn('h-5 w-5', categoryColors[category.title]?.icon || 'text-blue-600 dark:text-blue-400')} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {tool.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                      {tool.tag && (
                                        <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                                          {tool.tag}
                                        </Badge>
                                      )}
                                      <span className="text-xs text-slate-500 dark:text-slate-400">
                                        AI Tool
                                      </span>
                                    </div>
                                  </div>
                                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 min-h-[3.75rem] flex-1">
                                  {tool.description}
                                </p>
                                                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            /* Grid View (All tools in one grid) */
            <div className="space-y-8">
              {filteredCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <div key={category.title} className="space-y-4">
                    <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <CategoryIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {category.title}
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {category.tools.length} tool{category.tools.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {category.tools.map((tool) => (
                        <div
                          key={tool.name}
                          onClick={() => handleToolClick(tool.url)}
                          className="group cursor-pointer"
                        >
                          <div className={cn(
                            'relative h-full rounded-xl overflow-hidden',
                            'bg-white dark:bg-slate-900',
                            `border ${categoryColors[category.title]?.border || 'border-slate-200'} dark:${categoryColors[category.title]?.border || 'dark:border-slate-800'}`,
                            'shadow-sm hover:shadow-md',
                            'transition-all duration-200',
                            'hover:-translate-y-0.5'
                          )}>
                            <div className={cn(
                              'absolute left-0 top-0 bottom-0 w-1',
                              categoryColors[category.title]?.accent || 'bg-gradient-to-b from-blue-500 to-blue-600'
                            )} />
                            <div className="p-5 pl-6 flex flex-col h-full">
                              <div className="flex items-start gap-3 mb-3">
                                <div className={cn(
                                  'p-2 rounded-lg flex-shrink-0',
                                  categoryColors[category.title]?.bg || 'bg-blue-50 dark:bg-blue-950/50'
                                )}>
                                  <CategoryIcon className={cn('h-5 w-5', categoryColors[category.title]?.icon || 'text-blue-600 dark:text-blue-400')} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {tool.name}
                                  </h3>
                                  <span className="text-xs text-slate-500 dark:text-slate-400">
                                    AI Tool
                                  </span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
                              </div>
                              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 min-h-[3.75rem] flex-1">
                                {tool.description}
                              </p>
                              <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                                  <ExternalLink className="w-4 h-4" />
                                  <span>Visit Tool</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Empty State */}
          {filteredCategories.length === 0 && filteredTopTools.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-slate-500 dark:text-slate-400 mb-4">
                No AI tools found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View All Tools
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
