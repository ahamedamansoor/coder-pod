'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, RefreshCw, Code, Heart, MessageCircle, Share2, Users, TrendingUp, Camera, Settings, Home, Search, Bell, User, Hash, AtSign, MoreHorizontal, Activity, Lock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Post {
  id: string;
  author: string;
  username: string;
  avatar: string;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isFollowing: boolean;
}

interface SocialMediaState {
  posts: Post[];
  currentView: 'login' | 'feed' | 'profile' | 'create-post' | 'explore';
  loginUsername: string;
  loginPassword: string;
  currentUser: string;
  isLoggedIn: boolean;
  newPostContent: string;
  selectedPost: Post | null;
  searchQuery: string;
}

export default function SocialMediaTesting() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [liveVariables, setLiveVariables] = useState<Record<string, any>>({});
  const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [selectedPlatform, setSelectedPlatform] = useState<'instagram' | 'twitter' | 'facebook' | 'linkedin' | 'general'>('instagram');
  const [selectedLanguage, setSelectedLanguage] = useState<'playwright' | 'python' | 'java' | 'javascript'>('playwright');

  const [socialMediaState, setSocialMediaState] = useState<SocialMediaState>({
    posts: [],
    currentView: 'login',
    loginUsername: '',
    loginPassword: '',
    currentUser: '',
    isLoggedIn: false,
    newPostContent: '',
    selectedPost: null,
    searchQuery: ''
  });

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.5;
      default: return 1;
    }
  };

  const getPosts = (): Post[] => [
    {
      id: 'post1',
      author: 'Sarah Johnson',
      username: '@sarahj',
      avatar: '👩‍💼',
      content: 'Just launched my new automation testing course! 🚀 Check it out and let me know what you think. #Testing #Automation #Selenium',
      timestamp: '2 hours ago',
      likes: 245,
      comments: 32,
      shares: 18,
      isLiked: false,
      isFollowing: true
    },
    {
      id: 'post2',
      author: 'Mike Chen',
      username: '@mikechen',
      avatar: '👨‍💻',
      content: 'Working on some amazing Playwright scripts today. The new features are incredible! Who else is loving the latest updates? 🎯',
      timestamp: '4 hours ago',
      likes: 189,
      comments: 24,
      shares: 12,
      isLiked: true,
      isFollowing: false
    },
    {
      id: 'post3',
      author: 'Emily Davis',
      username: '@emilydavis',
      avatar: '👩‍🎨',
      content: 'Beautiful sunset from my office window today. Sometimes you need to take a break and appreciate the little things! 🌅',
      image: '🏞️',
      timestamp: '6 hours ago',
      likes: 423,
      comments: 67,
      shares: 34,
      isLiked: false,
      isFollowing: true
    },
    {
      id: 'post4',
      author: 'Tech News Daily',
      username: '@technews',
      avatar: '📰',
      content: 'BREAKING: Major social media platform announces new automation testing tools for developers. This could change how we test social apps! 📱💻',
      timestamp: '8 hours ago',
      likes: 892,
      comments: 156,
      shares: 267,
      isLiked: true,
      isFollowing: true
    },
    {
      id: 'post5',
      author: 'John Smith',
      username: '@johnsmith',
      avatar: '👨‍🔬',
      content: 'Finally got my Selenium WebDriver certification! 🎉 Thanks to everyone who helped me along the journey. Now accepting new projects!',
      timestamp: '12 hours ago',
      likes: 567,
      comments: 89,
      shares: 45,
      isLiked: false,
      isFollowing: false
    }
  ];

  const login = (username: string, password: string) => {
    const sessionToken = 'SOCIAL_TOKEN_' + Math.random().toString(36).substr(2, 9);
    setSocialMediaState(prev => ({
      ...prev,
      isLoggedIn: true,
      currentUser: username,
      posts: getPosts(),
      currentView: 'feed'
    }));
    toast.success('Successfully logged in to social media');
  };

  const logout = () => {
    setSocialMediaState(prev => ({
      ...prev,
      isLoggedIn: false,
      currentUser: '',
      posts: [],
      currentView: 'login',
      loginUsername: '',
      loginPassword: ''
    }));
    toast.success('Successfully logged out');
  };

  const likePost = (postId: string) => {
    setSocialMediaState(prev => ({
      ...prev,
      posts: prev.posts.map(post => 
        post.id === postId 
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    }));
  };

  const commentOnPost = (postId: string, comment: string) => {
    setSocialMediaState(prev => ({
      ...prev,
      posts: prev.posts.map(post => 
        post.id === postId 
          ? { ...post, comments: post.comments + 1 }
          : post
      )
    }));
    toast.success('Comment added successfully');
  };

  const sharePost = (postId: string) => {
    setSocialMediaState(prev => ({
      ...prev,
      posts: prev.posts.map(post => 
        post.id === postId 
          ? { ...post, shares: post.shares + 1 }
          : post
      )
    }));
    toast.success('Post shared successfully');
  };

  const createPost = (content: string) => {
    const newPost: Post = {
      id: 'post_new_' + Date.now(),
      author: socialMediaState.currentUser,
      username: '@' + socialMediaState.currentUser.toLowerCase().replace(' ', ''),
      avatar: '👤',
      content: content,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      isFollowing: false
    };

    setSocialMediaState(prev => ({
      ...prev,
      posts: [newPost, ...prev.posts],
      newPostContent: '',
      currentView: 'feed'
    }));
    toast.success('Post created successfully');
  };

  const followUser = (username: string) => {
    setSocialMediaState(prev => ({
      ...prev,
      posts: prev.posts.map(post => 
        post.username === username 
          ? { ...post, isFollowing: true }
          : post
      )
    }));
    toast.success(`You are now following ${username}`);
  };

  const getSocialMediaCode = (language: 'python' | 'java' | 'javascript' | 'playwright' = selectedLanguage) => {
    if (selectedPlatform === 'instagram') {
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("Instagram Testing", () => {',
          '  test("Complete Instagram workflow", async ({ page }) => {',
          '    // Navigate to Instagram',
          '    await page.goto("https://www.instagram.com");',
          '',
          '    // Click on Sign In',
          '    await page.click("[data-testid=\'login-form\'] input[name=\'username\']");',
          '',
          '    // Enter credentials',
          '    await page.fill("[name=\'username\']", "testuser@example.com");',
          '    await page.fill("[name=\'password\']", "SecurePassword123");',
          '    await page.click("[type=\'submit\']");',
          '',
          '    // Wait for feed to load',
          '    await page.waitForSelector("[role=\'feed\']");',
          '',
          '    // Like first post',
          '    await page.click("svg[aria-label=\'Like\']");',
          '',
          '    // Comment on post',
          '    await page.click("svg[aria-label=\'Comment\']");',
          '    await page.fill("textarea", "Great post! 👍");',
          '    await page.click("[type=\'submit\']");',
          '',
          '    // Share post',
          '    await page.click("svg[aria-label=\'Share\']");',
          '',
          '    console.log("Instagram test completed successfully!");',
          '  });',
          '});'
        ];
      } else if (language === 'python') {
        return [
          'from selenium import webdriver',
          'from selenium.webdriver.common.by import By',
          'from selenium.webdriver.support.ui import WebDriverWait',
          'from selenium.webdriver.support import expected_conditions as EC',
          '',
          '# Instagram Testing',
          'driver = webdriver.Chrome()',
          '',
          '# Navigate to Instagram',
          'driver.get("https://www.instagram.com")',
          '',
          '# Click on Sign In',
          'username_field = driver.find_element(By.NAME, "username")',
          'password_field = driver.find_element(By.NAME, "password")',
          '',
          '# Enter credentials',
          'username_field.send_keys("testuser@example.com")',
          'password_field.send_keys("SecurePassword123")',
          'login_button = driver.find_element(By.XPATH, "//button[@type=\'submit\']")',
          'login_button.click()',
          '',
          '# Wait for feed to load',
          'WebDriverWait(driver, 10).until(',
          '    EC.presence_of_element_located((By.ROLE, "feed"))',
          ')',
          '',
          '# Like first post',
          'like_button = driver.find_element(By.XPATH, "//svg[@aria-label=\'Like\']")',
          'like_button.click()',
          '',
          'print("Instagram test completed successfully!")',
          'driver.quit()'
        ];
      } else if (language === 'java') {
        return [
          'import org.openqa.selenium.By;',
          'import org.openqa.selenium.WebDriver;',
          'import org.openqa.selenium.WebElement;',
          'import org.openqa.selenium.chrome.ChromeDriver;',
          'import org.openqa.selenium.support.ui.WebDriverWait;',
          'import org.openqa.selenium.support.ui.ExpectedConditions;',
          'import java.time.Duration;',
          '',
          'public class InstagramTest {',
          '    public static void main(String[] args) {',
          '        WebDriver driver = new ChromeDriver();',
          '        ',
          '        try {',
          '            // Navigate to Instagram',
          '            driver.get("https://www.instagram.com");',
          '            ',
          '            // Enter credentials',
          '            WebElement usernameField = driver.findElement(By.name("username"));',
          '            WebElement passwordField = driver.findElement(By.name("password"));',
          '            usernameField.sendKeys("testuser@example.com");',
          '            passwordField.sendKeys("SecurePassword123");',
          '            ',
          '            // Submit login',
          '            WebElement loginButton = driver.findElement(By.xpath("//button[@type=\'submit\']"));',
          '            loginButton.click();',
          '            ',
          '            System.out.println("Instagram test completed successfully!");',
          '        } finally {',
          '            driver.quit();',
          '        }',
          '    }',
          '}'
        ];
      } else if (language === 'javascript') {
        return [
          'const { Builder, By, Key, until } = require("selenium-webdriver");',
          '',
          'async function instagramTest() {',
          '  let driver = await new Builder().forBrowser("chrome").build();',
          '  ',
          '  try {',
          '    // Navigate to Instagram',
          '    await driver.get("https://www.instagram.com");',
          '    ',
          '    // Enter credentials',
          '    await driver.findElement(By.name("username")).sendKeys("testuser@example.com");',
          '    await driver.findElement(By.name("password")).sendKeys("SecurePassword123");',
          '    ',
          '    // Submit login',
          '    await driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
          '    ',
          '    console.log("Instagram test completed successfully!");',
          '  } finally {',
          '    await driver.quit();',
          '  }',
          '}',
          '',
          'instagramTest();'
        ];
      }
    } else if (selectedPlatform === 'twitter') {
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("Twitter Testing", () => {',
          '  test("Complete Twitter workflow", async ({ page }) => {',
          '    // Navigate to Twitter',
          '    await page.goto("https://twitter.com");',
          '',
          '    // Click on Sign In',
          '    await page.click("a[href=\'/login\']");',
          '',
          '    // Enter credentials',
          '    await page.fill("input[name=\'text\']", "testuser@example.com");',
          '    await page.click("[role=\'button\'] span:has-text(\'Next\')");',
          '    await page.fill("input[name=\'password\']", "SecurePassword123");',
          '    await page.click("[data-testid=\'LoginForm_Login_Button\']");',
          '',
          '    // Wait for timeline to load',
          '    await page.waitForSelector("[data-testid=\'primaryColumn\']");',
          '',
          '    // Like first tweet',
          '    await page.click("[data-testid=\'like\']");',
          '',
          '    // Retweet',
          '    await page.click("[data-testid=\'retweet\']");',
          '    await page.click("[data-testid=\'retweetConfirm\']");',
          '',
          '    console.log("Twitter test completed successfully!");',
          '  });',
          '});'
        ];
      }
    } else if (selectedPlatform === 'facebook') {
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("Facebook Testing", () => {',
          '  test("Complete Facebook workflow", async ({ page }) => {',
          '    // Navigate to Facebook',
          '    await page.goto("https://www.facebook.com");',
          '',
          '    // Enter credentials',
          '    await page.fill("#email", "testuser@example.com");',
          '    await page.fill("#pass", "SecurePassword123");',
          '    await page.click("button[name=\'login\']");',
          '',
          '    // Wait for news feed',
          '    await page.waitForSelector("[role=\'feed\']");',
          '',
          '    // Like first post',
          '    await page.click("[aria-label=\'Like\']");',
          '',
          '    // Comment on post',
          '    await page.click("[aria-label=\'Comment\']");',
          '    await page.fill("div[contenteditable=\'true\']", "Great post!");',
          '    await page.press("div[contenteditable=\'true\']", "Enter");',
          '',
          '    console.log("Facebook test completed successfully!");',
          '  });',
          '});'
        ];
      }
    } else if (selectedPlatform === 'linkedin') {
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("LinkedIn Testing", () => {',
          '  test("Complete LinkedIn workflow", async ({ page }) => {',
          '    // Navigate to LinkedIn',
          '    await page.goto("https://www.linkedin.com");',
          '',
          '    // Enter credentials',
          '    await page.fill("#username", "testuser@example.com");',
          '    await page.fill("#password", "SecurePassword123");',
          '    await page.click("button[type=\'submit\']");',
          '',
          '    // Wait for feed',
          '    await page.waitForSelector(".feed-shared-update-v2");',
          '',
          '    // Like post',
          '    await page.click(".feed-shared-social-action-bar__action-button");',
          '',
          '    // Add comment',
          '    await page.click(".feed-shared-social-action-bar__comment-button");',
          '    await page.fill(".ql-editor", "Insightful post!");',
          '    await page.click(".feed-shared-comment-submit-button");',
          '',
          '    console.log("LinkedIn test completed successfully!");',
          '  });',
          '});'
        ];
      }
    } else {
      // General social media testing
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("General Social Media Testing", () => {',
          '  test("Complete social media workflow", async ({ page }) => {',
          '    // Navigate to social media application',
          '    await page.goto("https://social-media-app.com");',
          '',
          '    // Login process',
          '    await page.fill("#username", "testuser@example.com");',
          '    await page.fill("#password", "SecurePassword123");',
          '    await page.click("#login-button");',
          '',
          '    // Wait for feed to load',
          '    await page.waitForSelector(".social-feed");',
          '',
          '    // Like post',
          '    await page.click(".like-button");',
          '',
          '    // Comment on post',
          '    await page.click(".comment-button");',
          '    await page.fill(".comment-input", "Great content!");',
          '    await page.click(".submit-comment");',
          '',
          '    // Share post',
          '    await page.click(".share-button");',
          '',
          '    // Create new post',
          '    await page.click(".create-post-button");',
          '    await page.fill(".post-content", "My new post!");',
          '    await page.click(".publish-post");',
          '',
          '    console.log("General social media test completed!");',
          '  });',
          '});'
        ];
      }
    }
    return ['// Select a platform and language to see code examples'];
  };

  const socialMediaExample = {
    title: `${selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)} Social Media Test`,
    description: `Complete automation testing for ${selectedPlatform} social media platform`,
    code: Array.isArray(getSocialMediaCode()) ? getSocialMediaCode().join('\n') : String(getSocialMediaCode())
  };

  const simulateSocialMediaTest = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setLiveVariables({});
    
    // Clear social media state and ensure posts are visible
    setSocialMediaState({ 
      posts: [], 
      currentView: 'login',
      loginUsername: '',
      loginPassword: '',
      currentUser: '',
      isLoggedIn: false,
      newPostContent: '',
      selectedPost: null,
      searchQuery: ''
    });

    const multiplier = getSpeedMultiplier();
    const firstPost = getPosts()[0]; // Sarah Johnson's post
    
    const steps = [
      { step: 0, log: '🚀 Starting Social Media Application Test...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '📱 Social Media Dashboard loaded - showing login screen', delay: 800 * multiplier, codeLine: 0 },
      { step: 2, log: '🔐 Entering username: john.doe@example.com', delay: 1000 * multiplier, codeLine: 0, 
        action: () => {
          setSocialMediaState(prev => ({ ...prev, loginUsername: 'john.doe@example.com' }));
          setLiveVariables({ username: 'john.doe@example.com', step: 'entering_credentials' });
        }
      },
      { step: 3, log: '🔑 Entering password: ••••••••', delay: 1000 * multiplier, codeLine: 0, 
        action: () => {
          setSocialMediaState(prev => ({ ...prev, loginPassword: 'SecurePassword123' }));
          setLiveVariables({ password: 'entered', step: 'credentials_ready' });
        }
      },
      { step: 4, log: '🔐 Logging in with user credentials...', delay: 800 * multiplier, codeLine: 0, 
        action: () => {
          login('john.doe@example.com', 'SecurePassword123');
          setLiveVariables({ user: 'john.doe@example.com', status: 'authenticated' });
        }
      },
      { step: 5, log: '✅ Successfully logged into social media system!', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSocialMediaState(prev => ({ ...prev, currentView: 'feed' }));
          setLiveVariables({ user: 'john.doe@example.com', status: 'authenticated', session: 'active' });
        }
      },
      { step: 6, log: '📱 Social Media Feed showing (5 posts)', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ user: 'john.doe@example.com', posts: '5', totalLikes: '2,316' });
        }
      },
      { step: 7, log: '❤️ Liking Sarah Johnson\'s post...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          likePost(firstPost.id);
          setLiveVariables({ action: 'liked', post: 'Sarah Johnson', likes: firstPost.likes + 1 });
        }
      },
      { step: 8, log: '✅ Post liked successfully!', delay: 600 * multiplier, codeLine: 0 },
      { step: 9, log: '💬 Commenting on Mike Chen\'s post...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          commentOnPost('post2', 'Great work on Playwright! 🎯');
          setLiveVariables({ action: 'commented', post: 'Mike Chen', comment: 'Great work on Playwright!' });
        }
      },
      { step: 10, log: '✅ Comment added successfully!', delay: 600 * multiplier, codeLine: 0 },
      { step: 11, log: '🔄 Sharing Emily Davis\'s post...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          sharePost('post3');
          setLiveVariables({ action: 'shared', post: 'Emily Davis', shares: 35 });
        }
      },
      { step: 12, log: '✅ Post shared successfully!', delay: 600 * multiplier, codeLine: 0 },
      { step: 13, log: '👥 Following Tech News Daily...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          followUser('@technews');
          setLiveVariables({ action: 'following', user: 'Tech News Daily', following: 'true' });
        }
      },
      { step: 14, log: '✅ Now following Tech News Daily!', delay: 600 * multiplier, codeLine: 0 },
      { step: 15, log: '📝 Creating new post...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSocialMediaState(prev => ({ ...prev, currentView: 'create-post', newPostContent: 'Just completed my social media automation testing! 🚀 #Testing #Automation' }));
          setLiveVariables({ action: 'creating_post', content: 'Just completed my social media automation testing!' });
        }
      },
      { step: 16, log: '✅ New post created successfully!', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          createPost('Just completed my social media automation testing! 🚀 #Testing #Automation');
          setSocialMediaState(prev => ({ ...prev, currentView: 'feed' }));
          setLiveVariables({ action: 'post_created', posts_count: '6' });
        }
      },
      { step: 17, log: '🔍 Exploring trending hashtags...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSocialMediaState(prev => ({ ...prev, searchQuery: '#Testing #Automation' }));
          setLiveVariables({ action: 'exploring', hashtags: '#Testing #Automation' });
        }
      },
      { step: 18, log: '📊 Viewing profile statistics...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSocialMediaState(prev => ({ ...prev, currentView: 'profile' }));
          setLiveVariables({ action: 'viewing_profile', followers: '1,234', following: '567', posts: '42' });
        }
      },
      { step: 19, log: '🏠 Returning to main feed...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setSocialMediaState(prev => ({ ...prev, currentView: 'feed' }));
          setLiveVariables({ status: 'returned_to_feed', posts_tested: '6', interactions: '5' });
        }
      },
      { step: 20, log: '🎉 Social media test completed successfully - Feed active!', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ status: 'test_completed', posts_tested: '6', interactions: '5', final_view: 'feed' });
        }
      }
    ];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      setCurrentStep(i);
      setExecutionLogs(prev => [...prev, step.log]);
      
      if (step.action) {
        step.action();
      }
      
      if (step.codeLine !== undefined) {
        // setCurrentCodeLine(step.codeLine);
      }
      
      await new Promise(resolve => setTimeout(resolve, step.delay));
    }

    setIsRunning(false);
    // setCurrentCodeLine(-1);
  };

  const copyToClipboard = (text: string, description: string = 'Code') => {
    navigator.clipboard.writeText(text);
    toast.success(`${description} copied to clipboard`);
  };

  return (
    <div className="space-y-6">
      {/* Social Media Testing Features Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="w-5 h-5" />
            Social Media Testing Features
          </CardTitle>
          <CardDescription>
            Core capabilities for automated social media application testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-blue-100 dark:bg-blue-900">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">User Authentication</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Login/logout testing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-red-100 dark:bg-red-900">
                <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Post Interactions</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Likes, comments, shares</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-green-100 dark:bg-green-900">
                <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Content Creation</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Post creation testing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-purple-100 dark:bg-purple-900">
                <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Social Interactions</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Follow/unfollow testing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-orange-100 dark:bg-orange-900">
                <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Feed Management</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Timeline and explore testing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-cyan-100 dark:bg-cyan-900">
                <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Search & Discovery</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Hashtag and user search</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Multi-language implementations of social media testing workflows. 
            <span className="text-green-600 dark:text-green-400 font-medium"> Practice on real social media platforms like Instagram, Twitter, Facebook, or LinkedIn to master these skills!</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Platform Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select Social Media Platform:</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(['instagram', 'twitter', 'facebook', 'linkedin', 'general'] as const).map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                      selectedPlatform === platform
                        ? 'bg-pink-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    {platform === 'instagram' ? 'Instagram' : platform === 'twitter' ? 'Twitter' : platform === 'facebook' ? 'Facebook' : platform === 'linkedin' ? 'LinkedIn' : 'General'}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select Programming Language:</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(['playwright', 'python', 'java', 'javascript'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                      selectedLanguage === lang
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    {lang === 'playwright' ? 'Playwright' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Display */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {socialMediaExample.title}
                </h4>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(socialMediaExample.code)}
                >
                  Copy Code
                </Button>
              </div>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{socialMediaExample.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Social Media Demo */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Interactive Social Media Demo
              </CardTitle>
              {/* Speed Control */}
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-slate-500" />
                <div className="flex gap-1">
                  {(['slow', 'medium', 'fast'] as const).map((speedOption) => (
                    <button
                      key={speedOption}
                      onClick={() => setSpeed(speedOption)}
                      disabled={isRunning}
                      className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                        speed === speedOption
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }`}
                    >
                      {speedOption.charAt(0).toUpperCase() + speedOption.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Button
              onClick={simulateSocialMediaTest}
              disabled={isRunning}
              className="flex items-center gap-2"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Start Demo
                </>
              )}
            </Button>
          </div>
          <CardDescription>
            Experience a complete social media workflow simulation with login, feed interactions, and content creation. 
            <span className="text-amber-600 dark:text-amber-400 font-medium"> (This is a dummy social media environment for educational purposes only)</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Progress Bar */}
            {isRunning && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Progress</span>
                  <span className="text-slate-900 dark:text-slate-100 font-medium">
                    Step {currentStep + 1} of 21
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / 21) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Dummy Social Media Application UI */}
            {isRunning && (
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-4 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-4">
                  <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Dummy Social Media Application</h4>
                  <Badge variant="outline" className="text-xs">Simulation</Badge>
                </div>

              {/* Login Screen */}
              {socialMediaState.currentView === 'login' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-md mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">SocialConnect</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Connect with friends and share your moments</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Username</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={socialMediaState.loginUsername}
                          onChange={(e) => setSocialMediaState(prev => ({ ...prev, loginUsername: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                          placeholder="Enter username"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="password"
                          value={socialMediaState.loginPassword}
                          onChange={(e) => setSocialMediaState(prev => ({ ...prev, loginPassword: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                      Sign In
                    </Button>
                  </div>
                </div>
              )}

              {/* Feed Screen */}
              {socialMediaState.currentView === 'feed' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <Camera className="w-6 h-6 text-pink-500" />
                      <span className="font-bold text-lg">SocialConnect</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm">
                        <Home className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Search className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bell className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <User className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Create Post */}
                  <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">JD</span>
                      </div>
                      <input
                        type="text"
                        value={socialMediaState.newPostContent}
                        onChange={(e) => setSocialMediaState(prev => ({ ...prev, newPostContent: e.target.value }))}
                        placeholder="What's on your mind?"
                        className="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-900 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  {/* Posts */}
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                    {socialMediaState.posts.map((post) => (
                      <div key={post.id} className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center text-lg">
                            {post.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-slate-900 dark:text-slate-100">{post.author}</h4>
                                <p className="text-sm text-slate-500">{post.username}</p>
                              </div>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                            <p className="mt-2 text-slate-900 dark:text-slate-100">{post.content}</p>
                            {post.image && (
                              <div className="mt-2 text-4xl text-center">{post.image}</div>
                            )}
                            <p className="mt-2 text-sm text-slate-500">{post.timestamp}</p>
                            <div className="flex items-center gap-4 mt-3">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => likePost(post.id)}
                                className={post.isLiked ? 'text-red-500' : 'text-slate-500'}
                              >
                                <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                                <span className="ml-1">{post.likes}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="text-slate-500">
                                <MessageCircle className="w-4 h-4" />
                                <span className="ml-1">{post.comments}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="text-slate-500">
                                <Share2 className="w-4 h-4" />
                                <span className="ml-1">{post.shares}</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Create Post Screen */}
              {socialMediaState.currentView === 'create-post' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Create New Post</h3>
                  <textarea
                    value={socialMediaState.newPostContent}
                    onChange={(e) => setSocialMediaState(prev => ({ ...prev, newPostContent: e.target.value }))}
                    placeholder="What's on your mind?"
                    className="w-full h-32 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 resize-none"
                  />
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                      Post
                    </Button>
                  </div>
                </div>
              )}

              {/* Profile Screen */}
              {socialMediaState.currentView === 'profile' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">JD</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">John Doe</h3>
                        <p className="text-slate-500">@johndoe</p>
                        <div className="flex gap-4 mt-2 text-sm">
                          <span><strong>1,234</strong> followers</span>
                          <span><strong>567</strong> following</span>
                          <span><strong>42</strong> posts</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                      Follow
                    </Button>
                  </div>
                </div>
              )}
              </div>
            )}

            {/* Execution Logs */}
            {executionLogs.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Execution Logs</h4>
                </div>
                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm font-mono max-h-48 overflow-y-auto">
                  {executionLogs.map((log, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-slate-500">[{String(index + 1).padStart(2, '0')}]</span>
                      <span className={index === executionLogs.length - 1 ? 'text-green-400' : 'text-slate-300'}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
