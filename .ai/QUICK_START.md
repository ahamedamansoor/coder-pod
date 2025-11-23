# Quick Start: Using Gemini AI for Content Generation

## 🚀 Overview

This guide shows you how to use Gemini AI to generate high-quality educational content for CoderPod.

## 📁 What's Included

```
.ai/
├── README.md                          # Detailed documentation
├── gemini-instructions.md             # Complete AI instructions (20+ rules)
└── QUICK_START.md                     # This file

src/ai/
├── genkit.ts                          # Base Genkit config
├── genkit-enhanced.ts                 # Enhanced config with instructions
└── flows/
    └── generate-learning-content.ts   # Content generation flow
```

## 🎯 Quick Examples

### Example 1: Generate JavaScript Content

```typescript
import { generateTopicContent } from '@/ai/flows/generate-learning-content';

const result = await generateTopicContent({
  language: 'javascript',
  topic: 'What is JavaScript',
  level: 'all',
  includePlayground: true
});

console.log('File:', result.fileName);
// Output: javascript-what-is-javascript.tsx

console.log('Sections:', result.sections);
// Output: ['overview', 'syntax', 'examples', 'best-practices', ...]
```

### Example 2: Generate React Content

```typescript
const result = await generateTopicContent({
  language: 'react',
  topic: 'React Hooks',
  level: 'all',
  existingTopics: ['useState', 'useEffect'] // Avoid duplication
});

// Save the generated component
import fs from 'fs';
const outputPath = `src/components/react/topics/${result.fileName}`;
fs.writeFileSync(outputPath, result.componentCode);
```

### Example 3: Generate Beginner Java Content

```typescript
const result = await generateTopicContent({
  language: 'java',
  topic: 'Object Oriented Programming',
  level: 'beginner',
  includePlayground: false // No playground for Java
});
```

## 📋 What You Get

Every generated component includes:

✅ **PageHeader** with language-specific theme  
✅ **Click-to-open navigation** (no page reloads)  
✅ **Visual diagrams** for every concept  
✅ **Code examples** (beginner → expert)  
✅ **Light/Dark theme** support  
✅ **Live playgrounds** (if requested)  
✅ **Best practices** section  
✅ **Common pitfalls** section  
✅ **Real-world examples**  

## 🎨 Language Themes

| Language   | Theme Color   | Example     |
|------------|---------------|-------------|
| JavaScript | amber/yellow  | 🟡          |
| React      | blue/cyan     | 🔵          |
| Java       | orange/red    | 🟠          |
| Spring     | green/emerald | 🟢          |
| HTML       | blue          | 🔵          |
| CSS        | purple/indigo | 🟣          |
| SCSS       | pink/purple   | 🟣          |

## 🛠️ Manual Usage (Copy-Paste)

If you prefer to use Gemini AI manually:

1. **Open** `.ai/gemini-instructions.md`
2. **Copy** the entire content
3. **Paste** into Gemini AI chat
4. **Add** your specific request:
   ```
   Create content for:
   - Language: JavaScript
   - Topic: Closures
   - Level: All (beginner to expert)
   ```
5. **Copy** the generated TSX code
6. **Save** as `src/components/javascript/topics/javascript-closures.tsx`

## ✅ Quality Checklist

Before using generated content:

- [ ] File name starts with language prefix
- [ ] Imports are correct
- [ ] Theme colors match language
- [ ] All sections are present
- [ ] Visual diagrams included
- [ ] Code examples have light/dark themes
- [ ] Playground integration works
- [ ] No third-party links (only official docs)
- [ ] TypeScript types are correct
- [ ] No console errors

## 🔧 Customization

### Change Default Settings

Edit `src/ai/flows/generate-learning-content.ts`:

```typescript
// Change default level
level: z.enum([...]).optional().default('all'), // Change 'all' to 'beginner'

// Change playground default
includePlayground: z.boolean().optional().default(true), // Change to false
```

### Modify Instructions

Edit `.ai/gemini-instructions.md` to:
- Add new requirements
- Change styling preferences
- Update component patterns
- Modify content structure

## 📚 Common Use Cases

### 1. New Topic Page
```typescript
await generateTopicContent({
  language: 'javascript',
  topic: 'Async/Await',
  level: 'all'
});
```

### 2. Beginner Tutorial
```typescript
await generateTopicContent({
  language: 'html',
  topic: 'HTML Basics',
  level: 'beginner'
});
```

### 3. Advanced Deep Dive
```typescript
await generateTopicContent({
  language: 'react',
  topic: 'Performance Optimization',
  level: 'advanced'
});
```

### 4. Quick Reference
```typescript
await generateTopicContent({
  language: 'css',
  topic: 'Flexbox Cheat Sheet',
  level: 'intermediate'
});
```

## 🚨 Common Issues

### Issue: Generated code has import errors
**Solution**: Check that all imported components exist in your project

### Issue: Theme colors don't match
**Solution**: Verify language name matches theme mapping in instructions

### Issue: Content duplicates existing topic
**Solution**: Pass `existingTopics` array to avoid duplication

### Issue: No playground integration
**Solution**: Set `includePlayground: true` in request

## 🎓 Best Practices

1. **Check Existing Content First**
   - Review `src/app/data/{language}.ts`
   - Avoid creating duplicate topics

2. **Use Appropriate Level**
   - Beginners: Simple explanations, basic examples
   - All: Full progression from beginner to expert
   - Advanced: Skip basics, focus on complex scenarios

3. **Test Generated Content**
   - Run TypeScript check: `npm run typecheck`
   - Test in browser
   - Verify light/dark themes
   - Check responsive design

4. **Customize After Generation**
   - Add specific examples relevant to your audience
   - Adjust difficulty based on feedback
   - Enhance diagrams for clarity

## 📖 Further Reading

- **Full Instructions**: `.ai/gemini-instructions.md`
- **Detailed Docs**: `.ai/README.md`
- **GitHub Copilot Rules**: `.github/copilot-instructions.md`
- **Project Guidelines**: Main README.md

## 💡 Tips

- Start with `level: 'all'` to get comprehensive content
- Review generated code before committing
- Customize examples to match your teaching style
- Add additional sections if needed
- Keep instructions updated as standards evolve

## 🤝 Contributing

To improve content generation:

1. Update `.ai/gemini-instructions.md` with new patterns
2. Test generation with updated instructions
3. Document new features in `.ai/README.md`
4. Share successful prompts with team

---

**Need Help?**
- Check `.ai/README.md` for detailed documentation
- Review `.ai/gemini-instructions.md` for all rules
- See `src/ai/flows/generate-learning-content.ts` for implementation

**Last Updated**: November 23, 2025

