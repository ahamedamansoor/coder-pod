#!/bin/bash
# Script to add Supabase environment variables to Vercel

echo "Adding Supabase environment variables to Vercel..."

vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development << EOF
https://abgopwlbdmwfwhotnoue.supabase.co
EOF

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production preview development << EOF
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZ29wd2xiZG13Zndob3Rub3VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NDUzNTQsImV4cCI6MjA4MTQyMTM1NH0.0pjznAzBp04Lm3aqt11SnEzE0lwqdZE0ca-WEv7zKBg
EOF

echo "✅ Environment variables added!"
echo "Now deploy with: git push"
