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
      { name: 'You.com', url: 'https://you.com', description: 'AI-powered search assistant combining web search with conversational AI' },
      { name: 'Bard', url: 'https://bard.google.com', description: 'Google\'s conversational AI for creative collaboration and information' },
      { name: 'YouChat', url: 'https://you.com', description: 'AI search assistant combining web search with conversational AI' },
      { name: 'Poe', url: 'https://poe.com', description: 'Platform to access multiple AI models in one interface' },
      { name: 'Microsoft Copilot Chat', url: 'https://copilot.microsoft.com', description: 'Microsoft\'s AI assistant integrated with Bing search and Microsoft services' },
      { name: 'Replika', url: 'https://replika.ai', description: 'AI companion for emotional support and conversation' },
      { name: 'Ask AI', url: 'https://askai.app', description: 'Quick AI question answering with multiple model support' },
      { name: 'Character.AI', url: 'https://character.ai', description: 'Create and interact with AI characters for entertainment and roleplay' },
      { name: 'Pi AI', url: 'https://pi.ai', description: 'Personal AI assistant designed for supportive and empathetic conversations' },
      { name: 'Hugging Face Chat', url: 'https://huggingface.co/chat', description: 'Open-source AI models chat interface with various model options' },
    ]
  },
  {
    title: 'Writing & Copy',
    icon: PenTool,
    color: 'from-purple-500 to-pink-500',
    tools: [
      { name: 'QuillBot', url: 'https://quillbot.com', description: 'AI-powered paraphrasing and writing enhancement tool' },
      { name: 'Wordtune', url: 'https://wordtune.com', description: 'AI writing companion for rewriting and improving text' },
      { name: 'Hemingway Editor', url: 'https://hemingwayapp.com', description: 'AI-powered editor for making writing bold and clear' },
      { name: 'Copy.ai', url: 'https://copy.ai', description: 'AI copywriting tool for marketing content, social media, and sales copy' },
      { name: 'Writesonic', url: 'https://writesonic.com', description: 'AI writing assistant for articles, ads, and product descriptions' },
      { name: 'Rytr', url: 'https://rytr.me', description: 'AI writing assistant for creating high-quality content quickly' },
      { name: 'Anyword', url: 'https://anyword.com', description: 'AI copywriting platform optimized for conversion and marketing' },
      { name: 'Sudowrite', url: 'https://www.sudowrite.com', description: 'AI writing assistant specifically for fiction and creative writing' },
      { name: 'HyperWrite', url: 'https://hyperwriteai.com', description: 'AI writing assistant for research, brainstorming, and content creation' },
      { name: 'Writer.com', url: 'https://writer.com', description: 'AI writing platform for enterprise content and brand consistency' },
    ]
  },
  {
    title: 'Productivity & Work',
    icon: Briefcase,
    color: 'from-teal-500 to-cyan-500',
    tools: [
      { name: 'Notion AI', url: 'https://www.notion.so', description: 'AI writing assistant integrated into Notion workspace' },
      { name: 'Notion', url: 'https://notion.so', description: 'All-in-one workspace for notes, tasks, docs, and collaboration' },
      { name: 'Google Docs', url: 'https://docs.google.com', description: 'Cloud-based writing and collaboration platform' },
      { name: 'Trello', url: 'https://trello.com', description: 'Visual task management with boards, lists, and cards' },
      { name: 'ClickUp', url: 'https://clickup.com', description: 'AI productivity tools for project management and collaboration' },
      { name: 'Zapier', url: 'https://zapier.com', description: 'AI-powered automation platform for connecting apps and workflows' },
      { name: 'Motion AI', url: 'https://usemotion.com', description: 'AI calendar and task management with intelligent scheduling' },
      { name: 'Superhuman AI', url: 'https://superhuman.com', description: 'AI-powered email client with enhanced productivity features' },
      { name: 'Reclaim AI', url: 'https://reclaim.ai', description: 'AI scheduling assistant for time management and calendar optimization' },
      { name: 'Make (Integromat)', url: 'https://make.com', description: 'Visual automation platform with AI-powered workflow creation' },
      { name: 'Bardeen.ai', url: 'https://bardeen.ai', description: 'AI automation platform for manual workflows and data entry' },
      { name: 'Monday.com AI', url: 'https://monday.com', description: 'AI-powered work management platform for team collaboration and project tracking' },
      { name: 'Asana AI', url: 'https://asana.com', description: 'AI project management tool with smart task automation and team coordination' },
      { name: 'Todoist AI', url: 'https://todoist.com', description: 'AI task management with intelligent scheduling and productivity insights' },
    ]
  },
  {
    title: 'Image & Graphic AI',
    icon: Palette,
    color: 'from-rose-500 to-red-500',
    tools: [
      { name: 'Remove.bg', url: 'https://remove.bg', description: 'AI-powered background removal tool for images' },
      { name: 'DALL·E', url: 'https://openai.com/dall-e', description: 'AI image generation from text descriptions by OpenAI' },
      { name: 'Leonardo AI', url: 'https://leonardo.ai', description: 'AI image generation platform for game assets and art' },
      { name: 'Unsplash', url: 'https://unsplash.com', description: 'Free high-quality stock photography platform' },
      { name: 'Stable Diffusion', url: 'https://stability.ai', description: 'Open-source AI model for image generation and editing' },
      { name: 'Adobe Firefly', url: 'https://firefly.adobe.com', description: 'Adobe\'s AI image generator trained on licensed content' },
      { name: 'Playground AI', url: 'https://playgroundai.com', description: 'AI image generator with advanced controls and styles' },
      { name: 'NightCafe Studio', url: 'https://nightcafe.studio', description: 'AI art creator with multiple algorithms and styles' },
      { name: 'Ideogram AI', url: 'https://ideogram.ai', description: 'AI image generator with excellent text rendering and creative capabilities' },
      { name: 'Kandinsky AI', url: 'https://kandinsky.ai', description: 'Russian AI image generation model with artistic capabilities' },
      { name: 'DreamStudio', url: 'https://dreamstudio.ai', description: 'Official Stable Diffusion web interface with advanced controls' },
    ]
  },
  {
    title: 'Video AI Tools',
    icon: Video,
    color: 'from-green-500 to-emerald-500',
    tools: [
      { name: 'CapCut', url: 'https://capcut.com', description: 'Video editing app with AI-powered features and effects' },
      { name: 'Descript', url: 'https://descript.com', description: 'AI video editing platform with text-based editing and transcription' },
      { name: 'VEED', url: 'https://veed.io', description: 'Online video editor with AI subtitles and transcription' },
      { name: 'Opus Clip', url: 'https://opusclip.com', description: 'AI tool for repurposing long videos into short clips' },
      { name: 'Pictory', url: 'https://pictory.ai', description: 'AI video creation from text and long-form content' },
      { name: 'Runway', url: 'https://runwayml.com', description: 'AI video generation and editing suite for creators' },
      { name: 'Veed.io', url: 'https://veed.io', description: 'Online video editor with AI subtitles and transcription' },
      { name: 'Synthesia', url: 'https://synthesia.io', description: 'AI video generation using avatars and text-to-speech' },
      { name: 'InVideo', url: 'https://invideo.io', description: 'AI-powered video creation platform for marketing and social media' },
      { name: 'Lumen5', url: 'https://lumen5.com', description: 'AI video creation from blog posts and text content' },
      { name: 'Filmora', url: 'https://filmora.wondershare.com', description: 'Video editing software with AI-powered features and effects' },
      { name: 'HeyGen', url: 'https://heygen.com', description: 'AI video generation with realistic avatars and multilingual support' },
      { name: 'D-ID', url: 'https://d-id.com', description: 'AI video platform for creating talking avatars from text or audio' },
      { name: 'Pika Labs', url: 'https://pika.art', description: 'AI video generation platform for creating animated content from text' },
    ]
  },
  {
    title: 'Voice & Audio AI',
    icon: Mic,
    color: 'from-indigo-500 to-violet-500',
    tools: [
      { name: 'Otter.ai', url: 'https://otter.ai', description: 'AI transcription service for meetings and voice notes' },
      { name: 'ElevenLabs', url: 'https://elevenlabs.io', description: 'AI voice synthesis with realistic text-to-speech and voice cloning' },
      { name: 'Speechify', url: 'https://speechify.com', description: 'AI text-to-speech converter for listening to documents' },
      { name: 'Adobe Podcast AI', url: 'https://podcast.adobe.com', description: 'AI tools for podcast recording and enhancement' },
      { name: 'Cleanvoice AI', url: 'https://cleanvoice.ai', description: 'AI audio cleaning for removing filler words and noise' },
      { name: 'Murf AI', url: 'https://murf.ai', description: 'AI voice generator for creating voiceovers and audio content' },
      { name: 'Play.ht', url: 'https://play.ht', description: 'AI voice generation with ultra-realistic voices and podcast tools' },
      { name: 'Resemble AI', url: 'https://resemble.ai', description: 'AI voice cloning and custom voice creation platform' },
      { name: 'Soundraw', url: 'https://soundraw.io', description: 'AI music generation for content creators and videos' },
      { name: 'AIVA', url: 'https://aiva.ai', description: 'AI music composition for emotional soundtracks and classical music' },
    ]
  },
  {
    title: 'Coding & Dev Productivity',
    icon: Code,
    color: 'from-slate-500 to-gray-500',
    tools: [
      { name: 'Replit', url: 'https://replit.com', description: 'Online IDE environment with AI coding assistance' },
      { name: 'CodePen', url: 'https://codepen.io', description: 'Online code editor for frontend development and testing' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Community platform for developer help and Q&A' },
      { name: 'Cursor', url: 'https://cursor.sh', description: 'AI-powered code editor with advanced code generation' },
      { name: 'Tabnine', url: 'https://tabnine.com', description: 'AI code completion tool for multiple programming languages' },
      { name: 'Codeium', url: 'https://codeium.com', description: 'Free AI code completion and chat assistant for developers' },
      { name: 'AskCodi', url: 'https://askcodi.com', description: 'AI coding assistant for code generation, testing, and documentation' },
      { name: 'Mutable AI', url: 'https://mutable.ai', description: 'AI accelerator for software development and code quality' },
      { name: 'Sourcegraph Cody', url: 'https://sourcegraph.com', description: 'AI coding assistant that understands your entire codebase' },
      { name: 'Amazon CodeWhisperer', url: 'https://aws.amazon.com/codewhisperer', description: 'AI coding companion for Amazon Web Services development' },
      { name: 'Blackbox AI', url: 'https://blackbox.ai', description: 'AI coding assistant with code generation and debugging capabilities' },
      { name: 'WhatTheDiff', url: 'https://whatthediff.ai', description: 'AI tool for explaining code differences and pull requests' },
      { name: 'CodeT5', url: 'https://huggingface.co/Salesforce/codet5-base', description: 'AI model for code understanding and generation tasks' },
    ]
  },
  {
    title: 'Learning & Research',
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-500',
    tools: [
      { name: 'Khan Academy', url: 'https://khanacademy.org', description: 'Free online learning platform for students of all ages' },
      { name: 'Coursera', url: 'https://coursera.org', description: 'Online courses from top universities and companies' },
      { name: 'Wolfram Alpha', url: 'https://wolframalpha.com', description: 'Computational knowledge engine for scientific and mathematical queries' },
      { name: 'Elicit', url: 'https://elicit.org', description: 'AI research assistant for finding and analyzing academic papers' },
      { name: 'Quizlet', url: 'https://quizlet.com', description: 'AI-powered study tools and flashcard generation' },
      { name: 'Khanmigo (Khan Academy)', url: 'https://khanacademy.org', description: 'AI tutor for personalized learning and homework help' },
      { name: 'Duolingo MAX', url: 'https://duolingo.com', description: 'AI language learning with personalized lessons and feedback' },
      { name: 'Brainly AI', url: 'https://brainly.com', description: 'AI homework help and study assistance platform' },
      { name: 'Socratic by Google', url: 'https://socratic.org', description: 'AI learning assistant for homework and concept explanations' },
      { name: 'Wisdolia', url: 'https://wisdolia.com', description: 'AI flashcard generation from any content or document' },
      { name: 'Scholarcy', url: 'https://scholarcy.com', description: 'AI research tool for summarizing academic papers and extracting key information' },
      { name: 'Consensus', url: 'https://consensus.app', description: 'AI search engine for finding evidence-based answers from research papers' },
      { name: 'ResearchRabbit', url: 'https://researchrabbit.ai', description: 'AI-powered research paper discovery and recommendation platform' },
    ]
  },
  {
    title: 'Business, Marketing & SEO',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    tools: [
      { name: 'Google Analytics', url: 'https://analytics.google.com', description: 'Web analytics platform for tracking website traffic and user behavior' },
      { name: 'Canva Docs', url: 'https://canva.com/docs', description: 'AI-powered document creation and collaboration platform' },
      { name: 'Surfer SEO', url: 'https://surferseo.com', description: 'AI-powered SEO optimization platform for content strategy' },
      { name: 'HubSpot', url: 'https://hubspot.com', description: 'AI tools for marketing, sales, and customer service automation' },
      { name: 'AdCreative.ai', url: 'https://adcreative.ai', description: 'AI ad creative generation for marketing campaigns' },
      { name: 'MarketMuse', url: 'https://marketmuse.com', description: 'AI content intelligence platform for SEO and content planning' },
      { name: 'Ocoya', url: 'https://ocoya.com', description: 'AI platform for social media content creation and scheduling' },
      { name: 'Lately AI', url: 'https://lately.ai', description: 'AI social media content generation from long-form content' },
      { name: 'VidIQ AI', url: 'https://vidiq.com', description: 'AI tools for YouTube optimization and channel growth' },
      { name: 'TubeBuddy AI', url: 'https://tubebuddy.com', description: 'AI YouTube optimization and analytics tools' },
    ]
  },
  {
    title: 'AI Notebooks & LLM Platforms',
    icon: BookOpen,
    color: 'from-violet-500 to-purple-500',
    tools: [
      { name: 'Google Colab', url: 'https://colab.research.google.com', description: 'Free cloud-based Jupyter notebook environment with GPU support and AI libraries' },
      { name: 'Jupyter Notebook', url: 'https://jupyter.org', description: 'Open-source web application for creating and sharing documents with live code, equations, and visualizations' },
      { name: 'Kaggle Notebooks', url: 'https://kaggle.com/notebooks', description: 'Cloud-based data science notebooks with free GPU/TPU access and datasets' },
      { name: 'DeepNote', url: 'https://deepnote.com', description: 'Collaborative data science notebook platform with real-time collaboration and AI features' },
      { name: 'Observable', url: 'https://observablehq.com', description: 'Platform for data visualization and exploration with JavaScript notebooks' },
      { name: 'Databricks Notebooks', url: 'https://databricks.com', description: 'Collaborative notebooks for big data analytics and machine learning' },
      { name: 'Azure ML Studio', url: 'https://azure.microsoft.com/en-us/services/machine-learning-studio', description: 'Cloud-based environment for building, training, and deploying machine learning models' },
      { name: 'SageMaker Studio', url: 'https://aws.amazon.com/sagemaker', description: 'Amazon SageMaker integrated development environment for machine learning' },
      { name: 'Paperspace Gradient', url: 'https://gradient.paperspace.com', description: 'Cloud GPU platform for deep learning with Jupyter notebooks' },
      { name: 'OpenAI Playground', url: 'https://platform.openai.com/playground', description: 'Interactive interface for testing and fine-tuning OpenAI language models' },
      { name: 'Anthropic Console', url: 'https://console.anthropic.com', description: 'Development platform for building with Claude AI models and APIs' },
      { name: 'Cohere Playground', url: 'https://cohere.com/playground', description: 'Interactive environment for testing Cohere\'s language models and embeddings' },
      { name: 'Replicate', url: 'https://replicate.com', description: 'Platform for running and sharing machine learning models with API access' },
      { name: 'Together AI', url: 'https://together.ai', description: 'Cloud platform for open-source AI models with optimized inference' },
      { name: 'Perplexity Labs', url: 'https://labs.perplexity.ai', description: 'Experimental AI tools and models for research and development' },
      { name: 'LM Studio', url: 'https://lmstudio.ai', description: 'Desktop application for running local LLMs on your computer' },
      { name: 'Ollama', url: 'https://ollama.ai', description: 'Local LLM runner for running and managing AI models on your machine' },
      { name: 'Jan AI', url: 'https://jan.ai', description: 'Open-source platform for running local AI models and chat interfaces' },
      { name: 'GPT4All', url: 'https://gpt4all.io', description: 'Open-source ecosystem for running large language models locally' },
    ]
  },
  {
    title: 'Daily Utilities',
    icon: Zap,
    color: 'from-yellow-500 to-amber-500',
    tools: [
      { name: 'MyPocketPDF', url: 'https://mypocketpdf.com/', description: 'Free online tools for PDF conversion, merge, oraganize, repair, editing, and pdf to jpg' },
      { name: 'TinyWow', url: 'https://tinywow.com', description: 'Free online tools for PDF conversion, editing, and file manipulation' },
      { name: 'ILovePDF', url: 'https://ilovepdf.com', description: 'Online PDF tools for merging, splitting, compressing, and converting PDFs' },
      { name: 'PDF24 Tools', url: 'https://tools.pdf24.org', description: 'Free PDF tools for editing, converting, and managing PDF files' },
      { name: 'Speedtest', url: 'https://speedtest.net', description: 'Internet speed test tool for measuring connection performance' },
      { name: 'TimeAndDate', url: 'https://timeanddate.com', description: 'World clock, calendar, and time zone information platform' },
      { name: 'Tome', url: 'https://tome.app', description: 'AI presentation and storytelling platform' },
      { name: 'Simplified', url: 'https://simplified.com', description: 'AI design and content creation platform' },
      { name: 'Typewise AI Keyboard', url: 'https://typewise.app', description: 'AI-powered keyboard with intelligent text prediction' },
      { name: 'SpeechTexter', url: 'https://speechtexter.com', description: 'AI speech-to-text converter for dictation and transcription' },
      { name: 'Smallpdf', url: 'https://smallpdf.com', description: 'AI-powered PDF tools for compression, conversion, and editing' },
      { name: 'PDF2Go', url: 'https://pdf2go.com', description: 'Online PDF converter with AI-powered optimization and editing features' },
      { name: 'OnlineOCR', url: 'https://onlineocr.net', description: 'AI OCR tool for extracting text from images and PDF documents' },
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
