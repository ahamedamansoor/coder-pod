#!/bin/bash

echo "🧹 Clearing Next.js and build caches..."

# Remove Next.js cache
rm -rf .next

# Remove node_modules/.cache
rm -rf node_modules/.cache

# Remove Tailwind CSS cache (if exists)
rm -rf .cache

# Remove TypeScript cache
rm -rf .tsbuildinfo

echo "✅ Cache cleared successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Run: npm run dev"
echo "2. Hard refresh browser: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)"
echo "3. Or clear browser cache: Ctrl+Shift+Delete (Windows/Linux) or Cmd+Shift+Delete (Mac)"
