# Progress Persistence Pattern for Context Files

## ✅ Updated with Supabase Persistence
1. JavaScript ✅
2. React ✅
3. HTML ✅
4. CSS ✅
5. TypeScript ✅
6. Angular ✅

## ⏳ Need Update (10 files)
7. Java - `/src/app/languages/java/java-context.tsx`
8. Vue - `/src/app/languages/vue/vue-context.tsx`
9. Next.js - `/src/app/languages/nextjs/nextjs-context.tsx`
10. RxJS - `/src/app/languages/rxjs/rxjs-context.tsx`
11. DSA - `/src/app/languages/dsa/dsa-context.tsx`
12. Spring - `/src/app/languages/spring/spring-context.tsx`
13. Spring Boot - `/src/app/languages/spring-boot/spring-boot-context.tsx`
14. Playwright - `/src/app/languages/playwright/playwright-context.tsx`
15. Tailwind - `/src/app/languages/tailwind/tailwind-context.tsx`
16. SCSS - `/src/app/languages/scss/scss-context.tsx`

---

## Pattern to Apply

### 1. Update Imports
```typescript
// Add these imports
import { useEffect } from 'react';
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/supabase';
```

### 2. Get userProfile
```typescript
const { userProfile } = useSupabaseAuth();
```

### 3. Load completed topics on mount
```typescript
useEffect(() => {
  if (userProfile?.completed_topics?.LANGUAGE_NAME) {
    setCompletedTopics(new Set(userProfile.completed_topics.LANGUAGE_NAME));
  }
}, [userProfile]);
```

### 4. Save to Supabase on toggle
```typescript
const handleToggleComplete = React.useCallback(async (topicSlug: string) => {
  if (!user) return;

  setCompletedTopics(prev => {
    const newCompleted = new Set(prev);
    if (newCompleted.has(topicSlug)) {
      newCompleted.delete(topicSlug);
    } else {
      newCompleted.add(topicSlug);
    }

    // Save to Supabase
    const completedArray = Array.from(newCompleted);
    supabase
      .from('users')
      .update({ 
        completed_topics: { 
          ...userProfile?.completed_topics,
          LANGUAGE_NAME: completedArray 
        } 
      })
      .eq('id', user.uid)
      .then(({ error }) => {
        if (error) console.error('Error saving progress:', error);
      });

    return newCompleted;
  });
}, [user, userProfile]);
```

---

## Testing
1. Mark a topic as complete
2. Refresh the page
3. Topic should still be marked complete ✅

---

## Database Field
Progress is stored in `users.completed_topics` as JSONB:
```json
{
  "javascript": ["intro", "variables"],
  "react": ["components", "hooks"],
  "html": ["tags", "forms"]
}
```
