# SCSS Topic Page Structure - Design System

## 🎨 Consistent Design Pattern

All SCSS topic pages should follow this exact structure for visual consistency:

### 1. **Page Container**
```tsx
<div className="w-full space-y-8 min-h-screen pb-16">
```
- `w-full`: Full viewport width
- `space-y-8`: 8-unit vertical spacing between sections
- `min-h-screen`: Minimum full viewport height
- `pb-16`: Bottom padding

### 2. **Header Section**
```tsx
<div className="text-center space-y-4 py-8">
  {/* Badge */}
  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[COLOR]-500/10 via-[COLOR]-500/10 to-[COLOR]-500/10 px-6 py-3 rounded-full border border-[COLOR]-200 dark:border-[COLOR]-800">
    <Icon className="h-6 w-6 text-[COLOR]-600 dark:text-[COLOR]-400" />
    <span className="text-sm font-semibold text-[COLOR]-700 dark:text-[COLOR]-300">CATEGORY NAME</span>
  </div>
  
  {/* Title */}
  <h1 className="text-5xl font-bold bg-gradient-to-r from-[COLOR]-600 via-[COLOR]-600 to-[COLOR]-600 bg-clip-text text-transparent">
    Main Heading
  </h1>
  
  {/* Description */}
  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
    Brief description of the topic
  </p>
</div>
```

### 3. **Color Themes by Topic**
- **Variables/Basic**: Blue (`blue-500`, `blue-600`)
- **Functions**: Purple (`purple-500`, `purple-600`)
- **Mixins**: Green (`green-500`, `green-600`)
- **Control Flow**: Indigo (`indigo-500`, `indigo-600`)
- **Architecture**: Violet (`violet-500`, `violet-600`)
- **Performance**: Orange-Red (`orange-500`, `red-600`, `yellow-600`)
- **Debugging**: Red (`red-500`, `red-600`)
- **Advanced**: Teal (`teal-500`, `teal-600`)

### 4. **Section Cards**
```tsx
<div className="bg-gradient-to-br from-[COLOR]-50 to-[COLOR]-50 dark:from-[COLOR]-950/20 dark:to-[COLOR]-950/20 rounded-2xl p-8 border border-[COLOR]-200 dark:border-[COLOR]-800">
  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
    <Icon className="h-6 w-6 text-[COLOR]-600" />
    Section Title
  </h2>
  {/* Content */}
</div>
```

### 5. **Interactive Examples**
```tsx
<div className="space-y-6">
  <h2 className="text-3xl font-bold flex items-center gap-2">
    <Code className="h-8 w-8 text-[COLOR]-600" />
    Examples Title
  </h2>

  {/* Example Selector Tabs */}
  <div className="flex flex-wrap gap-2">
    {examples.map((example, index) => (
      <button
        key={index}
        onClick={() => setSelected(index)}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          selected === index
            ? 'bg-gradient-to-r from-[COLOR]-600 to-[COLOR]-600 text-white shadow-lg scale-105'
            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        {example.title}
      </button>
    ))}
  </div>

  {/* Example Content */}
  <div className="bg-gradient-to-br from-[COLOR]-50 to-[COLOR]-50 dark:from-[COLOR]-950/20 dark:to-[COLOR]-950/20 rounded-2xl p-8 border border-[COLOR]-200 dark:border-[COLOR]-800 space-y-6">
    {/* Code blocks with copy buttons */}
  </div>
</div>
```

### 6. **Code Blocks**
```tsx
<div className="relative">
  <button
    onClick={() => copyToClipboard(code, index)}
    className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors z-10"
  >
    {copied === index ? (
      <CheckCircle className="h-4 w-4 text-green-600" />
    ) : (
      <Copy className="h-4 w-4" />
    )}
  </button>
  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
    <pre className="text-gray-800 dark:text-white font-mono text-sm whitespace-pre-wrap overflow-x-auto">
      {code}
    </pre>
  </div>
</div>
```

### 7. **Feature Grids**
```tsx
<div className="grid md:grid-cols-3 gap-6">
  {features.map((feature, index) => (
    <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-card to-[COLOR]-50 dark:to-[COLOR]-950/20 rounded-xl p-6 border border-[COLOR]-200 dark:border-[COLOR]-800 hover:shadow-lg transition-all duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[COLOR]-500/10 to-[COLOR]-500/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500" />
      <feature.icon className="h-10 w-10 text-[COLOR]-600 dark:text-[COLOR]-400 mb-4" />
      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.desc}</p>
    </div>
  ))}
</div>
```

### 8. **Quick Reference Section**
```tsx
<div className="bg-gradient-to-br from-card to-[COLOR]-50 dark:to-[COLOR]-950/20 rounded-2xl p-8 border border-[COLOR]-200 dark:border-[COLOR]-800">
  <h2 className="text-2xl font-bold mb-6">⚡ Quick Reference</h2>
  <div className="grid md:grid-cols-2 gap-4">
    {/* Do's and Don'ts */}
  </div>
</div>
```

### 9. **Typography Standards**
- **Main Heading**: `text-5xl font-bold` with gradient
- **Section Headings**: `text-3xl font-bold`
- **Subsection Headings**: `text-2xl font-bold`
- **Card Titles**: `text-lg font-bold`
- **Body Text**: `text-sm` or base
- **Description Text**: `text-xl text-muted-foreground`
- **Code**: `font-mono text-sm`

### 10. **Spacing Standards**
- **Page Container**: `space-y-8`
- **Section Internal**: `space-y-6`
- **Card Internal**: `space-y-4`
- **Grid Gaps**: `gap-6` for large items, `gap-4` for small items
- **Padding**: `p-8` for large cards, `p-6` for medium, `p-4` for small

### 11. **Icon Standards**
- **Header Icons**: `h-6 w-6`
- **Section Icons**: `h-8 w-8`
- **Feature Card Icons**: `h-10 w-10`
- **Button Icons**: `h-4 w-4`

### 12. **Interactive Elements**
- **Copy Button**: Always top-right with backdrop-blur
- **Toggle Buttons**: Color-coded with smooth transitions
- **Show/Hide Buttons**: Consistent styling with selected state
- **Web Playground Button**: When applicable

## ✅ Checklist for New Pages

- [ ] Container with `w-full space-y-8 min-h-screen pb-16`
- [ ] Header with badge, gradient title, and description
- [ ] Consistent color theme throughout
- [ ] Section cards with gradient backgrounds
- [ ] Interactive examples with tabs
- [ ] Code blocks with copy buttons
- [ ] Feature grids with hover effects
- [ ] Quick reference section
- [ ] Dark mode support for all elements
- [ ] Proper icon sizes and spacing
- [ ] Consistent typography scales

## 🎨 Example Color Mappings

```typescript
const topicColors = {
  variables: 'blue',
  functions: 'purple',
  mixins: 'green',
  control: 'indigo',
  architecture: 'violet',
  performance: 'orange',
  debugging: 'red',
  advanced: 'teal',
};
```

This structure ensures all SCSS topic pages have a consistent, professional appearance while maintaining visual interest through appropriate color theming.
