'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Brain, BookOpen, Target, TrendingUp, Play } from 'lucide-react';
import { marked } from 'marked';
import InterviewHeader from '@/components/shared/interview-header';
import { AlertDescription } from '@/components/ui/alert';

// Easy Questions (25 questions)
const easyQuestions = [
  {
    question: "What is Vue.js and its main features?",
    idealAnswer: `**Vue.js** is a progressive JavaScript framework for building user interfaces. It's designed to be incrementally adoptable and focuses on the view layer.

**Main Features:**
- **Reactive Data Binding**: Automatic updates when data changes
- **Component System**: Reusable components with props and events
- **Template Syntax**: Declarative HTML-based templates
- **Directives**: Special attributes like v-if, v-for, v-model
- **Computed Properties**: Derived values that cache automatically
- **Watchers**: React to data changes with custom logic
- **Lifecycle Hooks**: Methods to hook into component lifecycle
- **Vue Router**: Official routing solution
- **Vuex/Pinia**: State management libraries

**Basic Example:**
\`\`\`vue
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
const count = ref(0)

function increment() {
  count.value++
}
</script>
\`\`\`

- **Progressive Framework**: Can be used as a library or full framework
- **Performance**: Fast virtual DOM and optimized reactivity`
  },
  {
    question: "What is the difference between Vue 2 and Vue 3?",
    idealAnswer: `**Vue 3** introduces significant improvements over Vue 2:

**Key Differences:**

**1. Composition API:**
- Vue 2: Options API only
- Vue 3: Composition API + Options API

**2. Performance:**
- Vue 2: Good performance
- Vue 3: Faster, smaller bundle size

**3. TypeScript Support:**
- Vue 2: Limited TypeScript support
- Vue 3: First-class TypeScript support

**4. Multiple Root Nodes:**
- Vue 2: Single root element required
- Vue 3: Multiple root elements allowed

**5. Reactivity System:**
- Vue 2: Object.defineProperty-based
- Vue 3: Proxy-based reactivity

**Vue 3 Example:**
\`\`\`vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>
\`\`\`

**Benefits of Vue 3:**
- Better performance
- Improved TypeScript support
- Composition API for better logic organization
- Tree-shaking support
- Better async component handling`
  },
  {
    question: "What are Vue components and how do you create them?",
    idealAnswer: `**Components** are reusable Vue instances with a name. They are the building blocks of Vue applications.

**Creating a Component:**

**Single File Component (.vue):**
\`\`\`vue
<template>
  <div class="counter">
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  initialCount: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['count-changed'])

const count = ref(props.initialCount)

function increment() {
  count.value++
  emit('count-changed', count.value)
}
</script>

<style scoped>
.counter {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
\`\`\`

**Using Components:**
\`\`\`vue
<template>
  <div>
    <Counter 
      title="My Counter" 
      :initial-count="5"
      @count-changed="handleCountChange"
    />
  </div>
</template>

<script setup>
import Counter from './Counter.vue'

function handleCountChange(newCount) {
  console.log('Count changed to:', newCount)
}
</script>
\`\`\`

**Component Features:**
- **Props**: Receive data from parent
- **Events**: Emit events to parent
- **Slots**: Distribute content from parent
- **Scoped Styles**: CSS scoped to component`
  },
  {
    question: "What is Vue template syntax?",
    idealAnswer: `**Vue Template Syntax** is HTML-based with special Vue features for reactive data binding.

**Text Interpolation:**
\`\`\`vue
<template>
  <span>Message: {{ message }}</span>
</template>
\`\`\`

**Raw HTML:**
\`\`\`vue
<template>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</template>
\`\`\`

**Attribute Binding:**
\`\`\`vue
<template>
  <div v-bind:id="dynamicId"></div>
  <!-- Shorthand -->
  <div :id="dynamicId"></div>
  
  <button :disabled="isDisabled">Click me</button>
</template>
\`\`\`

**Conditional Rendering:**
\`\`\`vue
<template>
  <p v-if="seen">Now you see me</p>
  <p v-else>Now you don't</p>
  
  <h1 v-show="ok">Hello!</h1>
</template>
\`\`\`

**List Rendering:**
\`\`\`vue
<template>
  <ul>
    <li v-for="item in items" :key="item.message">
      {{ item.message }}
    </li>
  </ul>
  
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
  </ul>
</template>
\`\`\`

**Event Handling:**
\`\`\`vue
<template>
  <button @click="doSomething">Click me</button>
  <button @click="doThis('hello', $event)">Submit</button>
  
  <!-- Event modifiers -->
  <form @submit.prevent="onSubmit">
    <button @click.stop="doThis">Click</button>
  </form>
</template>
\`\`\`

**Key Features:**
- **Declarative**: Describe what should be shown
- **Reactive**: Automatically updates when data changes
- **Expressive**: Full JavaScript support in templates`
  },
  {
    question: "What are Vue directives?",
    idealAnswer: `**Directives** are special attributes with the \`v-\` prefix that apply reactive behavior to the DOM.

**Common Directives:**

**v-bind:** Binds HTML attributes
\`\`\`vue
<template>
  <img v-bind:src="imageSrc" />
  <!-- Shorthand -->
  <img :src="imageSrc" />
</template>
\`\`\`

**v-on:** Attaches event listeners
\`\`\`vue
<template>
  <button v-on:click="doSomething">Click</button>
  <!-- Shorthand -->
  <button @click="doSomething">Click</button>
</template>
\`\`\`

**v-if:** Conditional rendering
\`\`\`vue
<template>
  <p v-if="seen">Now you see me</p>
  <p v-else-if="otherSeen">Now you see me too</p>
  <p v-else>Now you don't</p>
</template>
\`\`\`

**v-show:** Toggle visibility
\`\`\`vue
<template>
  <h1 v-show="ok">Hello!</h1>
</template>
\`\`\`

**v-for:** List rendering
\`\`\`vue
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
</template>
\`\`\`

**v-model:** Two-way data binding
\`\`\`vue
<template>
  <input v-model="message" />
  <textarea v-model="message"></textarea>
  <select v-model="selected">
    <option>A</option>
    <option>B</option>
  </select>
</template>
\`\`\`

**Custom Directives:**
\`\`\`javascript
// Global directive
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

// Local directive
const vFocus = {
  mounted(el) {
    el.focus()
  }
}
\`\`\`

**Modifiers:**
- **Event modifiers**: .stop, .prevent, .capture, .self, .once
- **Key modifiers**: .enter, .tab, .delete, .esc
- **Mouse modifiers**: .left, .right, .middle`
  },
  {
    question: "What is the difference between v-if and v-show?",
    idealAnswer: `**v-if** and **v-show** both conditionally render elements, but work differently:

**v-if:**
- **Real conditional rendering**: Element is added/removed from DOM
- **Lazy**: Element is only rendered if condition is true
- **Higher toggle cost**: Creates/destroys elements
- **Better for initial render**: Doesn't render false conditions

**v-show:**
- **CSS-based toggling**: Element always remains in DOM
- **Initial render**: Always rendered, hidden with display: none
- **Lower toggle cost**: Just changes CSS
- **Better for frequent toggling**: No DOM manipulation

**v-if Example:**
\`\`\`vue
<template>
  <div>
    <button @click="showDetails = !showDetails">Toggle</button>
    <div v-if="showDetails">
      <h2>Details</h2>
      <p>This content is conditionally rendered</p>
    </div>
  </div>
</template>

<script setup>
const showDetails = ref(false)
</script>
\`\`\`

**v-show Example:**
\`\`\`vue
<template>
  <div>
    <button @click="showDetails = !showDetails">Toggle</button>
    <div v-show="showDetails">
      <h2>Details</h2>
      <p>This content is always in DOM</p>
    </div>
  </div>
</template>

<script setup>
const showDetails = ref(false)
</script>
\`\`\`

**When to Use:**
- **v-if**: Rarely changed content, initial load performance matters
- **v-show**: Frequently toggled content, user interactions

**Key Differences:**
- **v-if**: True conditional rendering, better for infrequent changes
- **v-show**: CSS-based visibility toggle, better for frequent changes`
  },
  {
    question: "What are props in Vue?",
    idealAnswer: `**Props** are custom attributes you can register on a component to pass data from parent to child components.

**Defining Props:**
\`\`\`vue
<script setup>
const props = defineProps({
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise,
  
  // With validation
  propB: {
    type: String,
    required: true
  },
  
  // With default value
  propC: {
    type: Number,
    default: 100
  },
  
  // Object/array defaults
  propE: {
    type: Object,
    default() {
      return { message: 'hello' }
    }
  }
})
</script>
\`\`\`

**Using Props:**
\`\`\`vue
<!-- Parent Component -->
<template>
  <div>
    <BlogPost 
      title="My Journey with Vue"
      :likes="42"
      :is-published="true"
      @update-like="handleUpdate"
    />
  </div>
</template>

<!-- Child Component -->
<script setup>
const props = defineProps({
  title: String,
  likes: Number,
  isPublished: Boolean
})

console.log(props.title) // "My Journey with Vue"
</script>

<template>
  <h3>{{ title }}</h3>
  <p>Likes: {{ likes }}</p>
  <p v-if="isPublished">Published</p>
</template>
\`\`\`

**Props Validation:**
\`\`\`vue
<script setup>
const props = defineProps({
  // Basic type check
  propA: Number,
  
  // Multiple possible types
  propB: [String, Number],
  
  // Required string
  propC: {
    type: String,
    required: true
  },
  
  // Number with default
  propD: {
    type: Number,
    default: 100
  },
  
  // Object with default
  propE: {
    type: Object,
    default() {
      return { message: 'hello' }
    }
  },
  
  // Custom validator
  propF: {
    validator(value) {
      return ['success', 'warning', 'danger'].includes(value)
    }
  }
})
</script>
\`\`\`

**One-Way Data Flow:**
- Props flow from parent to child
- Child should not mutate props directly
- Use events to communicate back to parent

**Benefits:**
- **Type safety**: Automatic type checking
- **Documentation**: Props serve as component API
- **Validation**: Runtime validation of prop values`
  },
  {
    question: "What are events in Vue?",
    idealAnswer: `**Events** allow child components to communicate with parent components by emitting custom events.

**Emitting Events:**
\`\`\`vue
<!-- Child Component -->
<script setup>
const emit = defineEmits(['enlarge-text'])

function emitEvent() {
  emit('enlarge-text')
}
</script>

<template>
  <div>
    <p>{{ text }}</p>
    <button @click="emitEvent">Enlarge text</button>
  </div>
</template>
\`\`\`

**Events with Payload:**
\`\`\`vue
<script setup>
const emit = defineEmits(['enlarge-text'])

function emitEvent() {
  emit('enlarge-text', 0.1) // Pass payload
}
</script>
\`\`\`

**Event Validation:**
\`\`\`vue
<script setup>
const emit = defineEmits({
  // No validation
  click: null,
  
  // With validation
  submit: payload => {
    if (!payload.email) {
      console.warn('Invalid submit event payload!')
      return false
    }
    return true
  }
})
</script>
\`\`\`

**Listening to Events:**
\`\`\`vue
<!-- Parent Component -->
<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      :content="post.content"
      @enlarge-text="postFontSize += $event"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const postFontSize = ref(1)
const post = ref({
  content: 'This is a blog post'
})
</script>
\`\`\`

**Event Modifiers:**
\`\`\`vue
<template>
  <!-- Stop event propagation -->
  <button @click.stop="doThis"></button>
  
  <!-- Prevent default behavior -->
  <form @submit.prevent="onSubmit"></form>
  
  <!-- Capture mode -->
  <div @click.capture="doThis">...</div>
  
  <!-- Only trigger once -->
  <button @click.once="doThis"></button>
  
  <!-- Only trigger if event.target is the element itself -->
  <div @click.self="doThat">...</div>
</template>
\`\`\`

**Key Modifiers:**
\`\`\`vue
<template>
  <input @keyup.enter="submit" />
  <input @keyup.page-down="onPageDown" />
  <input @keyup.ctrl.enter="clear" />
</template>
\`\`\`

**Benefits:**
- **Decoupled**: Parent and child remain independent
- **Flexible**: Can pass any data as payload
- **Validated**: Can validate event payloads
- **Case-insensitive** (auto converted to camelCase)`
  },
  {
    question: "What is v-model in Vue?",
    idealAnswer: `**v-model** creates a two-way data binding on form input, textarea, and select elements.

**Basic Usage:**
\`\`\`vue
<template>
  <input v-model="message" />
  <p>Message is: {{ message }}</p>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
</script>
\`\`\`

**v-model on Different Elements:**
\`\`\`vue
<template>
  <!-- Text input -->
  <input v-model="text" />
  
  <!-- Textarea -->
  <textarea v-model="message"></textarea>
  
  <!-- Checkbox -->
  <input type="checkbox" v-model="checked" />
  
  <!-- Multiple checkboxes -->
  <input type="checkbox" value="Jack" v-model="checkedNames" />
  <input type="checkbox" value="John" v-model="checkedNames" />
  
  <!-- Radio buttons -->
  <input type="radio" value="One" v-model="picked" />
  <input type="radio" value="Two" v-model="picked" />
  
  <!-- Select -->
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  
  <!-- Multiple select -->
  <select v-model="selectedMultiple" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>
\`\`\`

**v-model Modifiers:**
\`\`\`vue
<template>
  <!-- .lazy: sync after change events -->
  <input v-model.lazy="msg" />
  
  <!-- .number: automatically convert to number -->
  <input v-model.number="age" type="number" />
  
  <!-- .trim: automatically trim whitespace -->
  <input v-model.trim="msg" />
</template>
\`\`\`

**Custom v-model:**
\`\`\`vue
<!-- Custom Component -->
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function updateValue(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <input 
    :value="modelValue" 
    @input="updateValue"
  />
</template>

<!-- Usage -->
<CustomInput v-model="searchText" />
\`\`\`

**Multiple v-model:**
\`\`\`vue
<script setup>
const title = ref('')
const content = ref('')
</script>

<template>
  <MyComponent 
    v-model:title="title"
    v-model:content="content"
  />
</template>
\`\`\`

**Benefits:**
- **Simplified syntax**: Easier than manual binding
- **Reactive**: Automatic two-way synchronization
- **Flexible**: Works with various form elements
- **Modifiers**: Built-in input processing`
  },
  {
    question: "What are computed properties in Vue?",
    idealAnswer: `**Computed properties** are derived values that are automatically updated when their dependencies change.

**Basic Computed Property:**
\`\`\`vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

console.log(doubled.value) // 0
count.value = 5
console.log(doubled.value) // 10
</script>
\`\`\`

**Writable Computed:**
\`\`\`vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    const names = newValue.split(' ')
    firstName.value = names[0]
    lastName.value = names[names.length - 1]
  }
})

// Using the setter
fullName.value = 'John Smith'
</script>
\`\`\`

**Computed vs Methods:**
\`\`\`vue
<script setup>
import { ref, computed } from 'vue'

const numbers = ref([1, 2, 3, 4, 5])

// Computed (cached)
const evenNumbers = computed(() => {
  console.log('Computed recalculated')
  return numbers.value.filter(n => n % 2 === 0)
})

// Method (re-executed every time)
function getEvenNumbers() {
  console.log('Method executed')
  return numbers.value.filter(n => n % 2 === 0)
}
</script>

<template>
  <div>
    <p>Even (computed): {{ evenNumbers }}</p>
    <p>Even (method): {{ getEvenNumbers() }}</p>
  </div>
</template>
\`\`\`

**Complex Computed:**
\`\`\`vue
<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, name: 'Item 1', price: 100, quantity: 2 },
  { id: 2, name: 'Item 2', price: 200, quantity: 1 },
  { id: 3, name: 'Item 3', price: 50, quantity: 3 }
])

const searchTerm = ref('')

const filteredItems = computed(() => {
  return items.value.filter(item => 
    item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

const total = computed(() => {
  return filteredItems.value.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)
})

const totalItems = computed(() => {
  return filteredItems.value.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)
})
</script>
\`\`\`

**Benefits:**
- **Cached**: Only recalculated when dependencies change
- **Reactive**: Automatically updates when dependencies change
- **Readable**: Declarative syntax for derived values
- **Performance optimization**: Better than methods for expensive operations`
  },
  {
    question: "What are watchers in Vue?",
    idealAnswer: `**Watchers** observe and react to data changes, useful for performing side effects.

**Basic Watcher:**
\`\`\`vue
<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// Watch for changes
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    
    try {
      const res = await fetch('https://api.example.com/answer', {
        method: 'POST',
        body: JSON.stringify({ question: newQuestion })
      })
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API.'
    } finally {
      loading.value = false
    }
  }
})
</script>
\`\`\`

**Watch Multiple Sources:**
\`\`\`vue
<script setup>
import { ref, watch } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')
const fullName = ref('')

watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
  fullName.value = newFirst + ' ' + newLast
})
</script>
\`\`\`

**Watch with Options:**
\`\`\`vue
<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

// Watch with immediate execution
watch(count, (newValue, oldValue) => {
  console.log(\`Count changed: \${oldValue} → \${newValue}\`)
}, { immediate: true })

// Watch with deep observation
const user = ref({
  name: 'John',
  profile: {
    email: 'john@example.com'
  }
})

watch(user, (newValue, oldValue) => {
  console.log('User changed')
}, { deep: true })

// Watch with flush timing
watch(count, (newValue, oldValue) => {
  // Runs after DOM updates
}, { flush: 'post' })
</script>
\`\`\`

**WatchEffect:**
\`\`\`vue
<script setup>
import { ref, watchEffect } from 'vue'

const count = ref(0)
const message = ref('')

// Automatically tracks dependencies
watchEffect(() => {
  console.log(\`Count is: \${count.value}\`)
  message.value = \`Count: \${count.value}\`
})

// No need to specify dependencies
// Automatically re-runs when count changes
</script>
\`\`\`

**WatchPostEffect:**
\`\`\`vue
<script setup>
import { ref, watchPostEffect } from 'vue'

const count = ref(0)

// Runs after DOM updates
watchPostEffect(() => {
  // Can access updated DOM
  console.log('DOM updated with count:', count.value)
})
</script>
\`\`\`

**Stopping Watchers:**
\`\`\`vue
<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

const stopWatcher = watch(count, (newValue, oldValue) => {
  console.log('Count changed:', newValue)
  
  // Stop watching after count reaches 10
  if (newValue >= 10) {
    stopWatcher()
  }
})
</script>
\`\`\`

**Use Cases:**
- **API calls**: Fetch data when dependencies change
- **Validation**: Validate input as user types
- **Logging**: Track state changes
- **Async operations**: Perfect for async data fetching

**Benefits:**
- **Reactive**: Automatically responds to data changes
- **Flexible**: Can watch single or multiple sources
- **Controlled**: Options for timing and depth
- **Cleanup**: Can stop watching when needed`
  },
  {
    question: "What are lifecycle hooks in Vue?",
    idealAnswer: `**Lifecycle hooks** allow you to run code at specific stages of a component's life.

**Composition API Lifecycle Hooks:**
\`\`\`vue
<script setup>
import { 
  onMounted, 
  onUnmounted, 
  onBeforeMount,
  onBeforeUnmount,
  onUpdated,
  onBeforeUpdate,
  onErrorCaptured
} from 'vue'

// Called before component is mounted
onBeforeMount(() => {
  console.log('Component is about to be mounted')
})

// Called after component is mounted
onMounted(() => {
  console.log('Component is mounted')
  // DOM is available here
  document.getElementById('my-element').focus()
})

// Called before component is updated
onBeforeUpdate(() => {
  console.log('Component is about to update')
})

// Called after component is updated
onUpdated(() => {
  console.log('Component is updated')
})

// Called before component is unmounted
onBeforeUnmount(() => {
  console.log('Component is about to be unmounted')
})

// Called after component is unmounted
onUnmounted(() => {
  console.log('Component is unmounted')
  // Cleanup timers, event listeners, etc.
})

// Called when an error from any descendant component is captured
onErrorCaptured((error, component, info) => {
  console.error('Error captured:', error)
  console.error('Component:', component)
  console.error('Info:', info)
  return false // Prevent error from propagating further
})
</script>
\`\`\`

**Options API Lifecycle Hooks:**
\`\`\`vue
<script>
export default {
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  errorCaptured(err, component, info) {
    console.error('Error captured:', err)
    return false
  }
}
</script>
\`\`\`

**Common Use Cases:**
\`\`\`vue
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const timer = ref(null)
const position = ref({ x: 0, y: 0 })

onMounted(() => {
  // Start timer
  timer.value = setInterval(() => {
    console.log('Timer tick')
  }, 1000)
  
  // Add event listener
  document.addEventListener('mousemove', handleMouseMove)
  
  // Fetch initial data
  fetchData()
})

onUnmounted(() => {
  // Cleanup timer
  if (timer.value) {
    clearInterval(timer.value)
  }
  
  // Remove event listener
  document.removeEventListener('mousemove', handleMouseMove)
})

function handleMouseMove(event) {
  position.value = { x: event.clientX, y: event.clientY }
}

async function fetchData() {
  // Fetch data from API
}
</script>
\`\`\`

**Lifecycle Diagram:**
1. **beforeCreate** → Instance initialization
2. **created** → Instance created, reactive data setup
3. **beforeMount** → Template compiled, about to render
4. **mounted** → Component rendered to DOM
5. **beforeUpdate** → Data changed, about to re-render
6. **updated** → Component re-rendered
7. **beforeUnmount** → Component about to be removed
8. **unmounted** → Component removed from DOM

**Benefits:**
- **Timing control**: Run code at specific moments
- **DOM access**: Safe DOM manipulation
- **Resource management**: Setup and cleanup
- **Error handling**: Capture and handle errors`
  },
  {
    question: "What are slots in Vue?",
    idealAnswer: `**Slots** allow you to distribute content from parent to child components, enabling component composition.

**Basic Slot:**
\`\`\`vue
<!-- Child Component -->
<template>
  <div class="alert-box">
    <strong>Error!</strong>
    <slot></slot>
  </div>
</template>

<!-- Parent Component -->
<template>
  <AlertBox>
    Something bad happened.
  </AlertBox>
</template>

<!-- Renders as -->
<div class="alert-box">
  <strong>Error!</strong>
  Something bad happened.
</div>
\`\`\`

**Named Slots:**
\`\`\`vue
<!-- Child Component -->
<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<!-- Parent Component -->
<template>
  <BaseLayout>
    <template #header>
      <h1>Here might be a page title</h1>
    </template>
    
    <template #default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>
    
    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </BaseLayout>
</template>
\`\`\`

**Scoped Slots:**
\`\`\`vue
<!-- Child Component -->
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: Array
})
</script>

<!-- Parent Component -->
<template>
  <TodoList :items="todos">
    <template #default="{ item, index }">
      <span :class="{ done: item.done }">
        {{ item.text }}
      </span>
      <button @click="removeTodo(index)">Remove</button>
    </template>
  </TodoList>
</template>
\`\`\`

**Dynamic Slots:**
\`\`\`vue
<template>
  <base-layout>
    <template #[dynamicSlotName]>
      ...
    </template>
  </base-layout>
</template>

<script setup>
const dynamicSlotName = ref('header')
</script>
\`\`\`

**Slot Fallbacks:**
\`\`\`vue
<!-- Child Component -->
<template>
  <div class="button">
    <slot>
      <!-- Default content if no slot provided -->
      Click me
    </slot>
  </div>
</template>

<!-- Parent Component -->
<template>
  <!-- Will show default content -->
  <MyButton />
  
  <!-- Will show custom content -->
  <MyButton>Save</MyButton>
</template>
\`\`\`

**Advanced Slot Usage:**
\`\`\`vue
<!-- Child Component -->
<template>
  <div class="card">
    <div class="card-header">
      <slot name="header" :title="title" :subtitle="subtitle">
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
      </slot>
    </div>
    <div class="card-body">
      <slot :data="data" :loading="loading">
        <div v-if="loading">Loading...</div>
        <div v-else>{{ data }}</div>
      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  data: [String, Object],
  loading: Boolean
})
</script>
\`\`\`

**Benefits:**
- **Composition**: Build flexible, reusable components
- **Content distribution**: Pass any content to components
- **Data passing**: Scoped slots for data access
- **Fallbacks**: Default content when no slot provided`
  },
  {
    question: "What is Vue CLI?",
    idealAnswer: `**Vue CLI** is the standard build toolchain for Vue.js applications (Note: Vue CLI is in maintenance mode, Vite is now recommended).

**Installation:**
\`\`\`bash
npm install -g @vue/cli
# or
yarn global add @vue/cli
\`\`\`

**Creating a Project:**
\`\`\`bash
vue create my-project

# Manual selection of features
vue create my-project --manual

# Use preset
vue create my-project --preset my-preset
\`\`\`

**Project Structure:**
\`\`\`
my-project/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── App.vue
│   └── main.js
├── package.json
├── vue.config.js
└── README.md
\`\`\`

**Vue CLI Commands:**
\`\`\`bash
# Serve development server
npm run serve

# Build for production
npm run build

# Run tests
npm run test:unit

# Lint and fix files
npm run lint

# Start GUI
vue ui
\`\`\`

**Configuration (vue.config.js):**
\`\`\`javascript
module.exports = {
  // Public path
  publicPath: process.env.NODE_ENV === 'production' ? '/production/' : '/',
  
  // Output directory
  outputDir: 'dist',
  
  // Static assets directory
  assetsDir: 'static',
  
  // Development server
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  
  // CSS configuration
  css: {
    loaderOptions: {
      sass: {
        additionalData: \`@import "@/styles/variables.scss";\`
      }
    }
  },
  
  // Plugin configuration
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales'
    }
  }
}
\`\`\`

**Plugins:**
\`\`\`bash
# Add plugin
vue add router
vue add vuex
vue add @vue/eslint-config-prettier

# View installed plugins
vue invoke --help
\`\`\`

**Environment Variables:**
\`\`\`bash
# .env.local
VUE_APP_API_URL=http://localhost:3000
VUE_APP_SECRET_KEY=your-secret-key
\`\`\`

**Build Configuration:**
\`\`\`javascript
// vue.config.js
module.exports = {
  // Production source map
  productionSourceMap: false,
  
  // Configure webpack
  configureWebpack: {
    plugins: [
      new MyWebpackPlugin()
    ]
  },
  
  // Chain webpack configuration
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'My Vue App'
      return args
    })
  }
}
\`\`\`

**Modern Mode:**
\`\`\`bash
# Build with modern browsers support
npm run build -- --modern
\`\`\`

**Migration to Vite:**
\`\`\`bash
# New recommended way
npm create vue@latest my-project
\`\`\`

**Vue CLI vs Vite:**
- **Vue CLI**: Webpack-based, more configuration, maintenance mode
- **Vite**: Faster development, simpler setup, recommended for new projects`
  },
  {
    question: "What are filters in Vue.js?",
    idealAnswer: `**Filters** are a feature in Vue.js used for text formatting. They were available in Vue 2 but removed in Vue 3.

**Vue 2 Filters:**
\`\`\`vue
<template>
  <div>
    <!-- Global filter -->
    <p>{{ message | capitalize }}</p>
    
    <!-- Local filter -->
    <p>{{ price | currency('USD') }}</p>
  </div>
</template>

<script>
export default {
  filters: {
    capitalize(value) {
      if (!value) return ''
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    currency(value, symbol = '$') {
      return symbol + value.toFixed(2)
    }
  }
}
</script>
\`\`\`

**Vue 3 Alternative:**
\`\`\`vue
<script setup>
import { computed } from 'vue'

const props = defineProps(['message', 'price'])

const capitalizedMessage = computed(() => {
  return props.message.charAt(0).toUpperCase() + props.message.slice(1)
})

const formattedPrice = computed(() => {
  return '$' + props.price.toFixed(2)
})
</script>

<template>
  <div>
    <p>{{ capitalizedMessage }}</p>
    <p>{{ formattedPrice }}</p>
  </div>
</template>
\`\`\`

**Why Removed in Vue 3:**
- Better performance with computed properties
- More explicit and easier to understand
- Better TypeScript support
- Filters are mainly for text formatting, computed properties are more flexible`
  },
  {
    question: "What are mixins in Vue.js?",
    idealAnswer: `**Mixins** are a way to distribute reusable functionalities for Vue components. They were primarily used in Vue 2's Options API.

**Vue 2 Mixins:**
\`\`\`javascript
// mixin.js
export const myMixin = {
  data() {
    return {
      mixinData: 'Hello from mixin'
    }
  },
  methods: {
    mixinMethod() {
      console.log('Mixin method called')
    }
  },
  created() {
    console.log('Mixin hook called')
  }
}

// component.js
import { myMixin } from './mixin'

export default {
  mixins: [myMixin],
  data() {
    return {
      componentData: 'Hello from component'
    }
  },
  created() {
    console.log(this.mixinData) // 'Hello from mixin'
    this.mixinMethod() // 'Mixin method called'
  }
}
\`\`\`

**Vue 3 Alternative - Composables:**
\`\`\`javascript
// useMixin.js
import { ref, onMounted } from 'vue'

export function useMixin() {
  const mixinData = ref('Hello from composable')
  
  const mixinMethod = () => {
    console.log('Composable method called')
  }
  
  onMounted(() => {
    console.log('Composable hook called')
  })
  
  return {
    mixinData,
    mixinMethod
  }
}

// component.vue
<script setup>
import { useMixin } from './useMixin'

const { mixinData, mixinMethod } = useMixin()

const componentData = ref('Hello from component')

onMounted(() => {
  console.log(mixinData.value) // 'Hello from composable'
  mixinMethod() // 'Composable method called'
})
</script>
\`\`\`

**Mixins vs Composables:**
- **Mixins**: Implicit merging, potential naming conflicts
- **Composables**: Explicit imports, better TypeScript support
- **Mixins**: Harder to trace source of methods
- **Composables**: Clear dependency relationships`
  },
  {
    question: "What is the Vue instance?",
    idealAnswer: `**Vue Instance** is the root of every Vue application. In Vue 2, you create a Vue instance, while in Vue 3, you create an app instance.

**Vue 2 Instance:**
\`\`\`javascript
import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    greet() {
      alert(this.message)
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  created() {
    console.log('Vue instance created')
  }
})
\`\`\`

**Vue 3 App Instance:**
\`\`\`javascript
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      message: 'Hello Vue 3!'
    }
  },
  methods: {
    greet() {
      alert(this.message)
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  created() {
    console.log('App instance created')
  }
})

app.mount('#app')
\`\`\`

**Vue 3 with Composition API:**
\`\`\`javascript
import { createApp, ref, computed } from 'vue'

const app = createApp({
  setup() {
    const message = ref('Hello Vue 3!')
    
    const greet = () => {
      alert(message.value)
    }
    
    const reversedMessage = computed(() => {
      return message.value.split('').reverse().join('')
    })
    
    return {
      message,
      greet,
      reversedMessage
    }
  }
})

app.mount('#app')
\`\`\`

**Key Differences:**
- **Vue 2**: Single Vue instance per application
- **Vue 3**: App instance with plugin system
- **Vue 3**: Better TypeScript support
- **Vue 3**: Composition API available`
  },
  {
    question: "What are conditional classes in Vue?",
    idealAnswer: `**Conditional classes** allow you to dynamically apply CSS classes based on component state or conditions.

**Object Syntax:**
\`\`\`vue
<template>
  <div :class="{ active: isActive, 'text-danger': hasError }">
    Dynamic classes
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(true)
const hasError = ref(false)
</script>
\`\`\`

**Array Syntax:**
\`\`\`vue
<template>
  <div :class="[baseClass, { active: isActive }]">
    Mixed syntax
  </div>
</template>

<script setup>
import { ref } from 'vue'

const baseClass = ref('container')
const isActive = ref(true)
</script>
\`\`\`

**Computed Classes:**
\`\`\`vue
<script setup>
import { ref, computed } from 'vue'

const isActive = ref(true)
const hasError = ref(false)

const classObject = computed(() => ({
  active: isActive.value && !hasError.value,
  'text-danger': hasError.value && isActive.value
}))
</script>

<template>
  <div :class="classObject">
    Computed classes
  </div>
</template>
\`\`\`

**With Components:**
\`\`\`vue
<!-- Parent Component -->
<template>
  <MyComponent class="base-class" :class="{ active: isActive }" />
</template>

<!-- Child Component -->
<template>
  <div class="child-class" :class="$attrs.class">
    Child content
  </div>
</template>
\`\`\`

**Best Practices:**
- Keep class logic simple and readable
- Use computed properties for complex conditions
- Combine with CSS modules for better maintainability
- Consider CSS-in-JS for dynamic styling`
  },
  {
    question: "What is the difference between v-bind and :?",
    idealAnswer: `**v-bind** and **:** are the same directive - **:** is just a shorthand for **v-bind**.

**Full Syntax (v-bind):**
\`\`\`vue
<template>
  <div v-bind:id="dynamicId"></div>
  <div v-bind:class="dynamicClass"></div>
  <div v-bind:style="dynamicStyle"></div>
  <div v-bind:disabled="isDisabled"></div>
</template>
\`\`\`

**Shorthand Syntax (:):**
\`\`\`vue
<template>
  <div :id="dynamicId"></div>
  <div :class="dynamicClass"></div>
  <div :style="dynamicStyle"></div>
  <div :disabled="isDisabled"></div>
</template>
\`\`\`

**Both Work Identically:**
\`\`\`vue
<script setup>
import { ref } from 'vue'

const dynamicId = ref('my-element')
const dynamicClass = ref('container active')
const dynamicStyle = ref({ color: 'red', fontSize: '16px' })
const isDisabled = ref(false)
</script>

<template>
  <!-- These are exactly the same -->
  <div v-bind:id="dynamicId" :class="dynamicClass"></div>
  <div :id="dynamicId" v-bind:class="dynamicClass"></div>
</template>
\`\`\`

**When to Use Each:**
- **:** (shorthand): Most common, cleaner code
- **v-bind**: When you want to be explicit or for consistency

**Advanced Usage:**
\`\`\`vue
<!-- Object binding -->
<div :class="{ active: isActive, disabled: isDisabled }"></div>

<!-- Array binding -->
<div :class="[baseClass, additionalClass]"></div>

<!-- Style binding -->
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

<!-- Multiple attributes -->
<div v-bind="{ id: dynamicId, class: dynamicClass, style: dynamicStyle }"></div>
\`\`\`

**Performance:** No difference - both compile to the same render function`
  },
  {
    question: "What are inline templates in Vue?",
    idealAnswer: `**Inline templates** allow you to define component templates directly in the parent component instead of in a separate .vue file.

**Basic Inline Template:**
\`\`\`vue
<!-- Parent Component -->
<template>
  <div>
    <my-component inline-template>
      <div>
        <h3>Inline Template Content</h3>
        <p>{{ message }}</p>
        <button @click="clickHandler">Click me</button>
      </div>
    </my-component>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello from inline template')
const clickHandler = () => {
  console.log('Button clicked!')
}
</script>
\`\`\`

**Component Definition:**
\`\`\`javascript
// my-component.js
export default {
  // No template needed - it's inline
  data() {
    return {
      // Component data
    }
  }
}
\`\`\`

**Vue 3 Alternative:**
\`\`\`vue
<!-- Use slots instead -->
<template>
  <div>
    <my-component>
      <template #default>
        <div>
          <h3>Slot Content</h3>
          <p>{{ message }}</p>
          <button @click="clickHandler">Click me</button>
        </div>
      </template>
    </my-component>
  </div>
</template>
\`\`\`

**Pros and Cons:**

**Pros:**
- Template and logic in same place
- No need for separate component files
- Good for simple, reusable components

**Cons:**
- Harder to maintain for complex components
- No syntax highlighting for inline templates
- Can't use scoped styles
- Removed in Vue 3 (use slots instead)

**Modern Approach:**
- Use slots for template distribution
- Keep components in separate .vue files
- Use scoped styles for better maintainability`
  },
  {
    question: "What is functional template in Vue?",
    idealAnswer: `**Functional templates** in Vue refer to functional components (now called functional components in Vue 3) that are stateless and instanceless.

**Vue 2 Functional Component:**
\`\`\`javascript
// functional-component.js
export default {
  functional: true,
  props: ['level'],
  render(h, { props, children }) {
    return h('h' + props.level, children)
  }
}
\`\`\`

**Vue 3 Functional Component:**
\`\`\`vue
<template>
  <component :is="\`h\${level}\`">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  level: {
    type: Number,
    required: true
  }
})
</script>
\`\`\`

**Simple Functional Component:**
\`\`\`vue
<template>
  <div class="functional-component">
    <slot />
  </div>
</template>

<script setup>
// No script setup needed for pure functional components
// Just template and slots
</script>
\`\`\`

**Advanced Functional Component:**
\`\`\`vue
<script setup>
import { h } from 'vue'

const props = defineProps(['tag', 'content'])

// Render function approach
const render = () => {
  return h(props.tag || 'div', props.content)
}
</script>

<template>
  <component :is="tag || 'div'">
    {{ content }}
  </component>
</template>
\`\`\`

**Benefits:**
- **Performance**: No instance creation overhead
- **Lightweight**: Perfect for presentational components
- **Simple**: No state, no lifecycle, no this context

**Use Cases:**
- Wrapper components
- Presentational components
- Higher-order components
- Dynamic tag components

**When to Use:**
- Component only displays data
- No internal state needed
- No lifecycle hooks required
- Performance is critical`
  }
];

// Medium Questions (15 questions)
const mediumQuestions = [
  {
    question: "What is the Composition API and how does it differ from the Options API?",
    idealAnswer: `**Composition API** is a new way to organize component logic in Vue 3, providing better flexibility and TypeScript support.

**Composition API:**
\`\`\`vue
<script setup>
import { ref, computed, onMounted } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

function increment() {
  count.value++
}

onMounted(() => {
  console.log('Component mounted')
})
</script>
\`\`\`

**Options API:**
\`\`\`vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    doubled() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log('Component mounted')
  }
}
</script>
\`\`\`

**Key Differences:**

**1. Organization:**
- **Options API**: Grouped by option type (data, methods, computed)
- **Composition API**: Grouped by logical concern

**2. Reusability:**
- **Options API**: Mixins (has issues like name conflicts)
- **Composition API**: Composables (better reusability)

**3. TypeScript:**
- **Options API**: Limited TypeScript support
- **Composition API**: Excellent TypeScript support

**4. This Context:**
- **Options API**: Uses \`this\`
- **Composition API**: No \`this\` needed

**Composable Example:**
\`\`\`vue
// useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubled = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  return {
    count,
    doubled,
    increment,
    decrement
  }
}

// Component usage
<script setup>
import { useCounter } from './useCounter'

const { count, doubled, increment, decrement } = useCounter(10)
</script>
\`\`\`

**When to Use:**
- **Composition API**: Complex components, better organization, TypeScript
- **Options API**: Simple components, team familiarity, migration from Vue 2`
  },
  {
    question: "What are composables in Vue 3?",
    idealAnswer: `**Composables** are functions that encapsulate and reuse stateful logic using the Composition API.

**Creating a Composable:**
\`\`\`vue
// useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}
\`\`\`

**Using Composables:**
\`\`\`vue
<script setup>
import { useMouse } from './useMouse'

const { x, y } = useMouse()
</script>

<template>
  <div>Mouse position: {{ x }}, {{ y }}</div>
</template>
\`\`\`

**Advanced Composable Example:**
\`\`\`vue
// useFetch.js
import { ref, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  async function doFetch() {
    data.value = null
    error.value = null
    loading.value = true
    
    try {
      const response = await fetch(url)
      data.value = await response.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  watchEffect(doFetch)

  return { data, error, loading }
}
\`\`\`

**Composable Benefits:**
- **Logic reuse**: Share stateful logic between components
- **Clean organization**: Group related logic together
- **Testability**: Easy to test in isolation
- **TypeScript**: Excellent type inference
- **Flexibility**: Accept parameters and return reactive values`
  },
  {
    question: "What is the Vue reactivity system and how does it work?",
    idealAnswer: `**Vue's reactivity system** automatically tracks dependencies and updates the DOM when data changes.

**How Reactivity Works:**

**Vue 3 (Proxy-based):**
\`\`\`javascript
import { reactive, ref } from 'vue'

// Reactive object
const state = reactive({
  count: 0,
  name: 'Vue'
})

// Reactive reference
const count = ref(0)

// When you access reactive data, Vue tracks it
console.log(state.count) // Vue tracks this dependency

// When you modify reactive data, Vue triggers updates
state.count++ // Vue knows this affects the template
\`\`\`

**Reactive vs Ref:**
\`\`\`javascript
import { reactive, ref } from 'vue'

// reactive() - for objects
const user = reactive({
  name: 'John',
  age: 30
})

// ref() - for primitives or objects
const count = ref(0)
const userRef = ref({ name: 'John', age: 30 })

// Accessing values
console.log(user.name)      // Direct access
console.log(count.value)    // Need .value
console.log(userRef.value.name) // Need .value for objects
\`\`\`

**Reactivity System Benefits:**
- **Automatic updates**: No manual DOM manipulation
- **Efficient**: Only updates what changed
- **Predictable**: Data flow is clear
- **Debuggable**: Vue DevTools shows reactivity`
  },
  {
    question: "What is provide/inject in Vue?",
    idealAnswer: `**provide/inject** allows ancestor components to provide data to all descendant components, regardless of component depth.

**Basic Usage:**
\`\`\`vue
<!-- Ancestor Component -->
<script setup>
import { provide, ref } from 'vue'

const theme = ref('dark')
const user = ref({ name: 'John' })

provide('theme', theme)
provide('user', user)
</script>

<!-- Descendant Component -->
<script setup>
import { inject } from 'vue'

const theme = inject('theme') // 'dark'
const user = inject('user')  // { name: 'John' }
</script>
\`\`\`

**Reactive Provide/Inject:**
\`\`\`vue
<!-- Parent Component -->
<script setup>
import { provide, ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

provide('count', count)
provide('doubled', doubled)

function increment() {
  count.value++
}

provide('increment', increment)
</script>

<!-- Child Component -->
<script setup>
import { inject } from 'vue'

const count = inject('count')
const doubled = inject('doubled')
const increment = inject('increment')
</script>

<template>
  <div>Count: {{ count }}</div>
  <div>Doubled: {{ doubled }}</div>
  <button @click="increment">Increment</button>
</template>
\`\`\`

**Benefits:**
- **Avoid prop drilling**: No need to pass through intermediate components
- **Flexible**: Any descendant can inject
- **Reactive**: Changes propagate automatically`
  },
  {
    question: "What are dynamic components in Vue?",
    idealAnswer: `**Dynamic components** allow you to switch between components dynamically using the \`<component>\` element and \`is\` attribute.

**Basic Dynamic Component:**
\`\`\`vue
<script setup>
import { ref } from 'vue'
import Home from './Home.vue'
import About from './About.vue'

const currentComponent = ref('Home')

const components = {
  Home,
  About
}
</script>

<template>
  <div>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    
    <component :is="components[currentComponent]" />
  </div>
</template>
\`\`\`

**Keep Alive with Dynamic Components:**
\`\`\`vue
<template>
  <!-- Preserve component state -->
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>
\`\`\`

**Use Cases:**
- **Tab systems**: Switch between different views
- **Wizard flows**: Multi-step forms
- **Conditional rendering**: Show different components based on state`
  },
  {
    question: "What are custom directives in Vue?",
    idealAnswer: `**Custom directives** allow you to create reusable behavior that can be applied to DOM elements.

**Creating Custom Directives:**
\`\`\`vue
<script setup>
// Local directive
const vFocus = {
  mounted(el) {
    el.focus()
  }
}
</script>

<template>
  <input v-focus />
</template>
\`\`\`

**Directive with Arguments and Modifiers:**
\`\`\`vue
<script setup>
const vColor = {
  mounted(el, binding) {
    el.style.color = binding.value
    
    if (binding.modifiers.important) {
      el.style.setProperty('color', binding.value, 'important')
    }
    
    if (binding.arg === 'background') {
      el.style.backgroundColor = binding.value
    }
  }
}
</script>

<template>
  <p v-color="'red'">Red text</p>
  <p v-color.important="'blue'">Important blue text</p>
  <p v-color:background="'yellow'">Yellow background</p>
</template>
\`\`\`

**Use Cases:**
- **Focus management**: Auto-focus inputs
- **Lazy loading**: Load images when visible
- **Tooltips**: Show tooltips on hover
- **Validation**: Real-time form validation`
  },
  {
    question: "What is Vue Router and how does it work?",
    idealAnswer: `**Vue Router** is the official routing library for Vue.js, enabling single-page applications with multiple views.

**Basic Setup:**
\`\`\`javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
\`\`\`

**Navigation:**
\`\`\`vue
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goToAbout = () => {
  router.push('/about')
}

const userId = route.params.id
</script>
\`\`\`

**Key Features:**
- **Dynamic routing**: Parameterized routes
- **Route guards**: Navigation control
- **Lazy loading**: Code splitting
- **Nested routes**: Hierarchical navigation`
  },
  {
    question: "What is Pinia and how does it compare to Vuex?",
    idealAnswer: `**Pinia** is the official state management library for Vue.js, designed as the successor to Vuex.

**Pinia Store Setup:**
\`\`\`javascript
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Eduardo'
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
\`\`\`

**Pinia vs Vuex:**
- **Better TypeScript support**: Full type inference
- **No mutations**: Direct state mutations
- **No modules**: Flat store structure
- **Lightweight**: Smaller bundle size
- **DevTools support**: Excellent debugging

**Usage:**
\`\`\`vue
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
counter.increment()
</script>
\`\`\``
  },
  {
    question: "What are Teleports in Vue 3?",
    idealAnswer: `**Teleports** allow you to render a component's content in a different part of the DOM, outside the component's hierarchy.

**Basic Usage:**
\`\`\`vue
<template>
  <div class="modal-container">
    <Teleport to="body">
      <div class="modal-overlay">
        <div class="modal-content">
          <h4>Modal Title</h4>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>
\`\`\`

**Use Cases:**
- **Modals**: Render modals at the document root
- **Tooltips**: Position tooltips outside scroll containers
- **Notifications**: Render notifications at fixed positions
- **Dropdowns**: Handle z-index issues

**Benefits:**
- **Clean DOM structure**: Avoids z-index issues
- **Better accessibility**: Proper focus management
- **Flexible positioning**: Render anywhere in DOM`
  },
  {
    question: "What is Suspense in Vue 3?",
    idealAnswer: `**Suspense** coordinates async dependencies in a component tree, providing loading states while waiting for async content.

**Basic Usage:**
\`\`\`vue
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
\`\`\`

**Async Component:**
\`\`\`vue
<script setup>
const data = ref(null)

const fetchData = async () => {
  const response = await fetch('/api/data')
  data.value = await response.json()
}

await fetchData()
</script>
\`\`\`

**Use Cases:**
- **Data fetching**: Loading states for API calls
- **Code splitting**: Loading async components
- **Complex layouts**: Coordinate multiple async dependencies`
  },
  {
    question: "What are Fragments in Vue 3?",
    idealAnswer: `**Fragments** in Vue 3 allow components to have multiple root nodes, eliminating the need for wrapper elements.

**Vue 2 vs Vue 3:**
\`\`\`vue
<!-- Vue 2 - ❌ Needs wrapper -->
<template>
  <div>
    <h1>Title</h1>
    <p>Description</p>
  </div>
</template>

<!-- Vue 3 - ✅ Multiple roots -->
<template>
  <h1>Title</h1>
  <p>Description</p>
</template>
\`\`\`

**Benefits:**
- **Cleaner HTML**: No unnecessary wrapper elements
- **Better CSS**: Direct styling without wrapper interference
- **Accessibility**: Proper semantic HTML structure
- **Performance**: Fewer DOM nodes

**Limitations:**
- **Attributes**: Can only be applied to single root element
- **Transitions**: Need explicit transition groups for multiple elements`
  },
  {
    question: "What is the difference between ref and reactive?",
    idealAnswer: `**ref** and **reactive** are both ways to create reactive data in Vue 3, but they have different use cases.

**ref - For Primitive Values:**
\`\`\`vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

// Access with .value
console.log(count.value) // 0
count.value = 1
</script>

<template>
  <div>{{ count }}</div> <!-- No .value needed -->
</template>
\`\`\`

**reactive - For Objects:**
\`\`\`vue
<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: 'John',
  age: 30
})

// Direct access
console.log(user.name) // 'John'
user.age = 31
</script>
\`\`\`

**Key Differences:**
- **ref**: Needs .value in JavaScript, not in templates
- **reactive**: Direct access everywhere
- **ref**: Can be reassigned
- **reactive**: Cannot be reassigned (loses reactivity)
- **ref**: Better for primitives
- **reactive**: Better for objects`
  },
  {
    question: "What are async components in Vue?",
    idealAnswer: `**Async components** allow you to load components on demand, improving initial load performance through code splitting.

**Basic Usage:**
\`\`\`vue
<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() =>
  import('./AsyncComponent.vue')
)
</script>

<template>
  <AsyncComponent />
</template>
\`\`\`

**With Loading States:**
\`\`\`vue
<script setup>
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./AsyncComponent.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorMessage,
  delay: 200,
  timeout: 3000
})
</script>
\`\`\`

**Benefits:**
- **Performance**: Smaller initial bundle size
- **User Experience**: Faster initial load
- **Resource Management**: Load only what's needed

**Use Cases:**
- **Large applications**: Split into manageable chunks
- **Conditional features**: Load only when needed
- **Admin panels**: Load admin components separately`
  }
];

// Hard Questions (10 questions)
const hardQuestions = [
  {
    question: "How does Vue's virtual DOM work and what are the performance implications?",
    idealAnswer: `**Vue's Virtual DOM** is a JavaScript representation of the real DOM that enables efficient updates through diffing algorithms.

**How Virtual DOM Works:**

**1. Initial Render:**
\`\`\`javascript
// Template
<template>
  <div :class="containerClass">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

// Virtual DOM nodes (VNodes)
{
  tag: 'div',
  props: { class: 'container' },
  children: [
    { tag: 'h1', children: ['Hello'] },
    { tag: 'p', children: ['Content'] }
  ]
}
\`\`\`

**2. Re-render Process:**
\`\`\`javascript
// 1. Data changes
state.title = 'New Title'

// 2. New VNode tree created
const newVNode = createVNode(...)

// 3. Diff with old VNode
const patches = diff(oldVNode, newVNode)

// 4. Apply minimal patches to real DOM
patch(oldVNode, patches)
\`\`\`

**Performance Optimizations:**

**1. Keyed Lists:**
\`\`\`vue
<!-- Bad - inefficient reordering -->
<li v-for="item in items">{{ item.name }}</li>

<!-- Good - efficient reordering -->
<li v-for="item in items" :key="item.id">{{ item.name }}</li>
\`\`\`

**2. Static Hoisting:**
\`\`\`vue
<!-- Static content is hoisted out of render function -->
<template>
  <div>
    <h1>Static Title</h1> <!-- Hoisted -->
    <p>{{ dynamicContent }}</p> <!-- Not hoisted -->
  </div>
</template>
\`\`\`

**3. Patch Flags:**
\`\`\`vue
<!-- Vue 3 tracks what changed -->
<div :class="dynamicClass" :id="staticId">
  <!-- Only class needs patching, id is static -->
</div>
\`\`\`

**Performance Implications:**

**Advantages:**
- **Batch updates**: Multiple changes applied together
- **Minimal DOM manipulation**: Only changed nodes updated
- **Cross-platform**: Can render to non-DOM targets
- **Declarative**: Focus on state, not DOM operations

**Disadvantages:**
- **Memory overhead**: VNode trees consume memory
- **Initial render cost**: VNode creation takes time
- **Complexity**: Additional abstraction layer

**When Virtual DOM Matters:**
- **Large lists**: Efficient diffing with keys
- **Frequent updates**: Batching prevents layout thrashing
- **Complex components**: Granular updates reduce work
- **Mobile performance**: Reduced DOM operations matter`
  },
  {
    question: "What are Vue's reactivity caveats and how do you work around them?",
    idealAnswer: `**Vue's reactivity system** has some limitations and caveats that developers need to understand.

**Common Reactivity Caveats:**

**1. Array Index Changes:**
\`\`\`javascript
const state = reactive({ items: ['a', 'b', 'c'] })

// ❌ Won't trigger reactivity
state.items[1] = 'x'
state.items.length = 0

// ✅ Use Vue.set or array methods
state.items.splice(1, 1, 'x')
state.items.splice(0) // Clear array
\`\`\`

**2. Adding Properties to Objects:**
\`\`\`javascript
const state = reactive({ user: { name: 'John' } })

// ❌ Won't trigger reactivity
state.user.age = 30

// ✅ Use Object.assign or reactive assignment
Object.assign(state.user, { age: 30 })
state.user = { ...state.user, age: 30 }
\`\`\`

**3. Destructuring Loss:**
\`\`\`javascript
const state = reactive({ count: 0, name: 'Vue' })

// ❌ Loses reactivity
const { count, name } = state

// ✅ Use toRefs
import { toRefs } from 'vue'
const { count, name } = toRefs(state)
console.log(count.value) // Reactive
\`\`\`

**4. Direct Replacement:**
\`\`\`javascript
const state = reactive({ count: 0 })

// ❌ Loses reactivity
state = { count: 1 }

// ✅ Modify properties
state.count = 1
Object.assign(state, { count: 1 })
\`\`\`

**Workarounds and Solutions:**

**1. For Arrays:**
\`\`\`javascript
import { reactive, ref } from 'vue'

const state = reactive({
  items: []
})

// Use array methods that trigger reactivity
function addItem(item) {
  state.items.push(item) // ✅ Triggers update
  state.items.splice(0, 1, item) // ✅ Triggers update
  state.items = [...state.items, item] // ✅ Triggers update
}

// For index-based updates
function updateItem(index, newItem) {
  state.items.splice(index, 1, newItem) // ✅ Triggers update
}
\`\`\`

**2. For Objects:**
\`\`\`javascript
// Method 1: Object.assign
function addUserProperty(userId, property, value) {
  const user = state.users.find(u => u.id === userId)
  Object.assign(user, { [property]: value })
}

// Method 2: Spread operator
function addUserProperty(userId, property, value) {
  const user = state.users.find(u => u.id === userId)
  state.users = state.users.map(u => 
    u.id === userId ? { ...u, [property]: value } : u
  )
}

// Method 3: Vue.set (Vue 2) / reactive assignment (Vue 3)
function addUserProperty(userId, property, value) {
  const user = state.users.find(u => u.id === userId)
  user[property] = value // Works in Vue 3
}
\`\`\`

**3. Using ref for Complex Objects:**
\`\`\`javascript
// Instead of reactive, use ref for objects you need to replace
const user = ref({ name: 'John' })

// ✅ Can replace entire object
user.value = { name: 'Jane', age: 30 }

// ✅ Can modify properties
user.value.name = 'Bob'
\`\`\`

**Best Practices:**
- **Use ref for values that need replacement**
- **Use reactive for objects with stable structure**
- **Avoid destructuring reactive objects**
- **Use array methods instead of direct index assignment**
- **Consider shallow reactivity for performance**
- **Use markRaw for large static data`
  },
  {
    question: "How do you implement advanced state management patterns in Vue?",
    idealAnswer: `**Advanced state management** in Vue involves patterns beyond simple component state, including shared state, persistence, and complex data flows.

**1. Store Pattern with Composables:**
\`\`\`vue
// stores/useAuthStore.js
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

export function useAuthStore() {
  const router = useRouter()
  
  // State
  const user = ref(null)
  const token = ref(localStorage.getItem('token'))
  const loading = ref(false)
  const error = ref(null)
  
  // Computed
  const isAuthenticated = computed(() => !!token.value)
  const userRole = computed(() => user.value?.role)
  
  // Actions
  async function login(credentials) {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })
      
      const data = await response.json()
      
      if (response.ok) {
        token.value = data.token
        user.value = data.user
        localStorage.setItem('token', data.token)
        router.push('/dashboard')
      } else {
        throw new Error(data.message)
      }
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  
  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
    router.push('/login')
  }
  
  // Persistence
  watch(token, (newToken) => {
    if (newToken) {
      localStorage.setItem('token', newToken)
    } else {
      localStorage.removeItem('token')
    }
  })
  
  return {
    // State
    user: readonly(user),
    token: readonly(token),
    loading: readonly(loading),
    error: readonly(error),
    
    // Computed
    isAuthenticated,
    userRole,
    
    // Actions
    login,
    logout
  }
}
\`\`\`

**2. Multi-Store Architecture:**
\`\`\`vue
// stores/index.js
import { useAuthStore } from './useAuthStore'
import { useCartStore } from './useCartStore'
import { useNotificationStore } from './useNotificationStore'

// Store registry
const stores = {
  auth: useAuthStore(),
  cart: useCartStore(),
  notifications: useNotificationStore()
}

// Cross-store communication
export function useStores() {
  const auth = useAuthStore()
  const cart = useCartStore()
  const notifications = useNotificationStore()
  
  // Example: Clear cart on logout
  watch(() => auth.isAuthenticated, (isAuth) => {
    if (!isAuth) {
      cart.clearCart()
      notifications.addNotification('Cart cleared on logout')
    }
  })
  
  return {
    auth,
    cart,
    notifications
  }
}
\`\`\`

**3. Entity Management Pattern:**
\`\`\`vue
// stores/useEntityStore.js
import { ref, computed } from 'vue'

export function useEntityStore(entityName) {
  // Generic entity state
  const entities = ref({})
  const loading = ref(false)
  const error = ref(null)
  
  // Computed properties
  const list = computed(() => Object.values(entities.value))
  const byId = computed(() => (id) => entities.value[id])
  const count = computed(() => list.value.length)
  
  // CRUD operations
  async function fetchAll() {
    loading.value = true
    try {
      const response = await fetch(\`/api/\${entityName}\`)
      const data = await response.json()
      
      entities.value = data.reduce((acc, item) => {
        acc[item.id] = item
        return acc
      }, {})
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  
  async function create(entityData) {
    try {
      const response = await fetch(\`/api/\${entityName}\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entityData)
      })
      
      const newEntity = await response.json()
      entities.value[newEntity.id] = newEntity
      
      return newEntity
    } catch (err) {
      error.value = err.message
      throw err
    }
  }
  
  function update(id, updates) {
    if (entities.value[id]) {
      entities.value[id] = { ...entities.value[id], ...updates }
    }
  }
  
  function remove(id) {
    delete entities.value[id]
  }
  
  return {
    // State
    entities: readonly(entities),
    loading: readonly(loading),
    error: readonly(error),
    
    // Computed
    list,
    byId,
    count,
    
    // Actions
    fetchAll,
    create,
    update,
    remove
  }
}

// Usage
const usersStore = useEntityStore('users')
const postsStore = useEntityStore('posts')
\`\`\`

**Benefits of Advanced Patterns:**
- **Scalability**: Handles complex application state
- **Performance**: Caching and optimistic updates
- **Maintainability**: Clear separation of concerns
- **Testability**: Isolated business logic
- **Type Safety**: Excellent TypeScript support`
  },
  {
    question: "How do you optimize Vue.js performance for large-scale applications?",
    idealAnswer: `**Performance optimization** in Vue.js involves multiple strategies to ensure smooth user experience in large applications.

**Component Optimization:**
\`\`\`vue
<!-- Use v-once for static content -->
<div v-once>
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
</div>

<!-- Use functional components for presentational components -->
<script setup>
// No state, just props and slots
defineProps(['title', 'content'])
</script>
\`\`\`

**Lazy Loading:**
\`\`\`javascript
// Route-level code splitting
const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue')
  }
]

// Component-level lazy loading
const HeavyComponent = defineAsyncComponent(() => 
  import('./HeavyComponent.vue')
)
\`\`\`

**Virtual Scrolling:**
\`\`\`vue
<template>
  <div class="virtual-list" :style="{ height: containerHeight + 'px' }">
    <div 
      v-for="item in visibleItems" 
      :key="item.id"
      :style="{ transform: \`translateY(\${item.offset}px)\` }"
    >
      {{ item.content }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'

const props = defineProps(['items'])
const containerHeight = ref(400)
const scrollTop = ref(0)

const visibleItems = computed(() => {
  const start = Math.floor(scrollTop.value / 50)
  const end = start + Math.ceil(containerHeight.value / 50)
  return props.items.slice(start, end).map((item, index) => ({
    ...item,
    offset: (start + index) * 50
  }))
})
</script>
\`\`\`

**Memory Management:**
\`\`\`vue
<script setup>
import { onUnmounted } from 'vue'

// Clean up timers and event listeners
const timer = ref(null)
const resizeObserver = ref(null)

onMounted(() => {
  timer.value = setInterval(() => {
    // Some periodic task
  }, 1000)
  
  resizeObserver.value = new ResizeObserver(callback)
  resizeObserver.value.observe(element)
})

onUnmounted(() => {
  if (timer.value) clearInterval(timer.value)
  if (resizeObserver.value) resizeObserver.value.disconnect()
})
</script>
\`\`\`

**State Optimization:**
- **Shallow ref/reactive**: For large objects where deep reactivity isn't needed
- **Computed properties**: Cache expensive calculations
- **Debouncing**: Limit frequent updates
- **Pagination**: Load data in chunks

**Build Optimization:**
- **Tree shaking**: Remove unused code
- **Code splitting**: Split bundles by routes
- **Asset optimization**: Compress images and fonts
- **CDN**: Serve static assets from CDN`
  },
  {
    question: "What are the best practices for Vue.js security?",
    idealAnswer: `**Security** in Vue.js applications requires attention to both frontend and backend vulnerabilities.

**XSS Prevention:**
\`\`\`vue
<!-- ✅ Safe - Vue automatically escapes -->
<div>{{ userInput }}</div>

<!-- ❌ Dangerous - never use v-html with user input -->
<div v-html="userInput"></div>

<!-- ✅ Use DOMPurify if absolutely necessary -->
<script setup>
import DOMPurify from 'dompurify'

const sanitizedHtml = computed(() => 
  DOMPurify.sanitize(userInput.value)
)
</script>

<template>
  <div v-html="sanitizedHtml"></div>
</template>
\`\`\`

**CSRF Protection:**
\`\`\`javascript
// Include CSRF token in API calls
import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
  }
})
\`\`\`

**Authentication & Authorization:**
\`\`\`vue
<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const canEdit = computed(() => 
  auth.user && auth.user.permissions.includes('edit')
)
</script>

<template>
  <button v-if="canEdit" @click="editPost">Edit</button>
</template>
\`\`\`

**Secure API Communication:**
\`\`\`javascript
// Use HTTPS and secure headers
const secureApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// Request interceptor for auth tokens
secureApi.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`
  }
  return config
})
\`\`\`

**Environment Variables:**
\`\`\`bash
# .env.production
VUE_APP_API_URL=https://api.example.com
VUE_APP_PUBLIC_KEY=pk_live_xxx
# Never expose private keys or secrets
\`\`\`

**Best Practices:**
- **Validate all inputs**: Both client and server-side
- **Use HTTPS**: Encrypt all data transmission
- **Implement CSP**: Content Security Policy headers
- **Regular updates**: Keep dependencies updated
- **Security audits**: Regular security testing
- **Principle of least privilege**: Minimal permissions`
  },
  {
    question: "How do you implement server-side rendering (SSR) with Vue.js?",
    idealAnswer: `**Server-Side Rendering** with Vue.js improves SEO and initial load performance by rendering components on the server.

**Nuxt.js Setup:**
\`\`\`bash
# Create Nuxt.js project
npx nuxi@latest init my-ssr-app
cd my-ssr-app
npm install
\`\`\`

**Basic Nuxt.js Structure:**
\`\`\`
pages/
├── index.vue          # Home page
├── about.vue          # About page
└── posts/
    ├── [id].vue       # Dynamic post page
    └── index.vue      # Posts list

components/
├── Header.vue         # Shared header
└── Footer.vue         # Shared footer

layouts/
├── default.vue        # Default layout
└── error.vue          # Error layout
\`\`\`

**Dynamic Routes with SSR:**
\`\`\`vue
<!-- pages/posts/[id].vue -->
<script setup>
import { useFetch } from '#app'

const route = useRoute()
const { data: post, error } = await useFetch(\`/api/posts/\${route.params.id}\`)

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

// SEO meta tags
useHead({
  title: post.value.title,
  meta: [
    { name: 'description', content: post.value.excerpt },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.excerpt }
  ]
})
</script>

<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </article>
</template>
\`\`\`

**Custom SSR with Vue 3:**
\`\`\`javascript
// server.js
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import express from 'express'

const server = express()

server.get('*', async (req, res) => {
  const app = createSSRApp({
    data: () => ({ message: 'Hello SSR' }),
    template: \`<div>{{ message }}</div>\`
  })
  
  const appContent = await renderToString(app)
  
  res.send(\`
    <!DOCTYPE html>
    <html>
      <head><title>SSR App</title></head>
      <body>
        <div id="app">\${appContent}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  \`)
})

server.listen(3000)
\`\`\`

**Client Hydration:**
\`\`\`javascript
// client.js
import { createApp } from 'vue'

const app = createApp({
  data: () => ({ message: 'Hello SSR' })
})

app.mount('#app')
\`\`\`

**SSR Benefits:**
- **SEO**: Better search engine indexing
- **Performance**: Faster initial content paint
- **Accessibility**: Content available without JavaScript
- **Social sharing**: Rich previews for social media

**Considerations:**
- **Server resources**: Increased server load
- **Complexity**: More complex deployment
- **State management**: Need to handle server/client state
- **Development**: Hot reload complexity`
  },
  {
    question: "What are the advanced patterns for Vue.js state management?",
    idealAnswer: `**Advanced state management** in Vue.js goes beyond basic Pinia stores, implementing complex patterns for scalable applications.

**Multi-Store Architecture:**
\`\`\`javascript
// stores/index.js
import { createPinia } from 'pinia'

const pinia = createPinia()

// Store modules
export { useUserStore } from './user'
export { usePostsStore } from './posts'
export { useUIStore } from './ui'
export { useSettingsStore } from './settings'

// Store composition
export function useStores() {
  return {
    user: useUserStore(),
    posts: usePostsStore(),
    ui: useUIStore(),
    settings: useSettingsStore()
  }
}
\`\`\`

**Entity Management Pattern:**
\`\`\`javascript
// stores/entities.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useEntitiesStore = defineStore('entities', () => {
  // Normalized state
  const entities = ref({})
  const loading = ref(false)
  const errors = ref({})
  
  // Generic CRUD operations
  const setEntity = (type, id, data) => {
    if (!entities.value[type]) {
      entities.value[type] = {}
    }
    entities.value[type][id] = data
  }
  
  const getEntity = (type, id) => {
    return entities.value[type]?.[id]
  }
  
  const getEntitiesByType = (type) => {
    return Object.values(entities.value[type] || {})
  }
  
  // Async actions
  const fetchEntity = async (type, id) => {
    loading.value = true
    try {
      const response = await fetch(\`/api/\${type}/\${id}\`)
      const data = await response.json()
      setEntity(type, id, data)
      return data
    } catch (error) {
      errors.value[\`\${type}-\${id}\`] = error.message
      throw error
    } finally {
      loading.value = false
    }
  }
  
  return {
    entities: readonly(entities),
    loading: readonly(loading),
    setEntity,
    getEntity,
    getEntitiesByType,
    fetchEntity
  }
})
\`\`\`

**Optimistic Updates:**
\`\`\`javascript
// stores/posts.js
export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  
  const updatePostOptimistic = async (postId, updates) => {
    // Find original post
    const originalPost = posts.value.find(p => p.id === postId)
    
    // Apply optimistic update
    const updatedPost = { ...originalPost, ...updates }
    const index = posts.value.findIndex(p => p.id === postId)
    posts.value[index] = updatedPost
    
    try {
      // Make API call
      const response = await fetch(\`/api/posts/\${postId}\`, {
        method: 'PATCH',
        body: JSON.stringify(updates)
      })
      
      if (!response.ok) throw new Error('Update failed')
      
      const serverPost = await response.json()
      posts.value[index] = serverPost
    } catch (error) {
      // Revert on failure
      posts.value[index] = originalPost
      throw error
    }
  }
  
  return { posts, updatePostOptimistic }
})
\`\`\`

**State Persistence:**
\`\`\`javascript
// plugins/persistence.js
import { createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'

export function createPersistedPinia() {
  const pinia = createPinia()
  
  // Hydrate state from localStorage
  if (typeof window !== 'undefined') {
    const savedState = localStorage.getItem('pinia-state')
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState)
        const userStore = useUserStore(pinia)
        if (parsed.user) {
          userStore.$patch(parsed.user)
        }
      } catch (error) {
        console.warn('Failed to restore state:', error)
      }
    }
    
    // Save state on changes
    userStore.$subscribe((mutation, state) => {
      localStorage.setItem('pinia-state', JSON.stringify({
        user: state
      }))
    })
  }
  
  return pinia
}
\`\`\`

**Advanced Patterns:**
- **Event sourcing**: Store events instead of state
- **CQRS**: Separate read/write models
- **Saga pattern**: Complex async workflows
- **State machines**: Predictable state transitions
- **Time travel debugging**: Undo/redo functionality`
  },
  {
    question: "How do you implement real-time features in Vue.js applications?",
    idealAnswer: `**Real-time features** in Vue.js require WebSockets or similar technologies for live data updates.

**WebSocket Integration:**
\`\`\`javascript
// composables/useWebSocket.js
import { ref, onUnmounted } from 'vue'

export function useWebSocket(url) {
  const data = ref(null)
  const error = ref(null)
  const isConnected = ref(false)
  
  let socket = null
  
  const connect = () => {
    socket = new WebSocket(url)
    
    socket.onopen = () => {
      isConnected.value = true
      error.value = null
    }
    
    socket.onmessage = (event) => {
      data.value = JSON.parse(event.data)
    }
    
    socket.onerror = (err) => {
      error.value = err
      isConnected.value = false
    }
    
    socket.onclose = () => {
      isConnected.value = false
      // Auto-reconnect
      setTimeout(connect, 3000)
    }
  }
  
  const send = (message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message))
    }
  }
  
  onUnmounted(() => {
    if (socket) {
      socket.close()
    }
  })
  
  return {
    data: readonly(data),
    error: readonly(error),
    isConnected: readonly(isConnected),
    connect,
    send
  }
}
\`\`\`

**Real-time Chat Component:**
\`\`\`vue
<script setup>
import { ref, onMounted } from 'vue'
import { useWebSocket } from '@/composables/useWebSocket'

const { data, isConnected, send } = useWebSocket('ws://localhost:8080/chat')
const message = ref('')
const messages = ref([])

onMounted(() => {
  // Listen for incoming messages
  watch(data, (newData) => {
    if (newData && newData.type === 'message') {
      messages.value.push(newData)
    }
  })
})

const sendMessage = () => {
  if (message.value.trim()) {
    send({
      type: 'message',
      content: message.value,
      timestamp: Date.now()
    })
    message.value = ''
  }
}
</script>

<template>
  <div class="chat-container">
    <div class="connection-status" :class="{ connected: isConnected }">
      {{ isConnected ? 'Connected' : 'Disconnected' }}
    </div>
    
    <div class="messages">
      <div v-for="msg in messages" :key="msg.timestamp" class="message">
        {{ msg.content }}
      </div>
    </div>
    
    <div class="input-area">
      <input 
        v-model="message" 
        @keyup.enter="sendMessage"
        placeholder="Type a message..."
        :disabled="!isConnected"
      />
      <button @click="sendMessage" :disabled="!isConnected">Send</button>
    </div>
  </div>
</template>
\`\`\`

**Server-Sent Events (SSE):**
\`\`\`javascript
// composables/useSSE.js
export function useSSE(url) {
  const data = ref(null)
  const error = ref(null)
  
  const eventSource = new EventSource(url)
  
  eventSource.onmessage = (event) => {
    data.value = JSON.parse(event.data)
  }
  
  eventSource.onerror = (err) => {
    error.value = err
    eventSource.close()
  }
  
  onUnmounted(() => {
    eventSource.close()
  })
  
  return { data, error }
}
\`\`\`

**Real-time Notifications:**
\`\`\`vue
<script setup>
import { ref } from 'vue'
import { useWebSocket } from '@/composables/useWebSocket'

const { data } = useWebSocket('ws://localhost:8080/notifications')
const notifications = ref([])

watch(data, (newData) => {
  if (newData && newData.type === 'notification') {
    notifications.value.unshift(newData)
    
    // Show browser notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(newData.title, {
        body: newData.message,
        icon: '/icon.png'
      })
    }
  }
})

const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    await Notification.requestPermission()
  }
}
</script>
\`\`\`

**Use Cases:**
- **Chat applications**: Real-time messaging
- **Live notifications**: System alerts
- **Collaborative editing**: Google Docs style
- **Live dashboards**: Real-time analytics
- **Gaming**: Multiplayer games
- **Trading platforms**: Stock prices`
  },
  {
    question: "What are the best practices for testing Vue.js applications?",
    idealAnswer: `**Testing Vue.js applications** requires a comprehensive approach covering unit, integration, and end-to-end tests.

**Unit Testing with Vitest:**
\`\`\`javascript
// tests/unit/Counter.spec.js
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('renders initial count', () => {
    const wrapper = mount(Counter, {
      props: { initialCount: 5 }
    })
    
    expect(wrapper.text()).toContain('Count: 5')
  })
  
  it('increments count when button clicked', async () => {
    const wrapper = mount(Counter)
    
    await wrapper.find('button').trigger('click')
    
    expect(wrapper.text()).toContain('Count: 1')
  })
  
  it('emits increment event', async () => {
    const wrapper = mount(Counter)
    
    await wrapper.find('button').trigger('click')
    
    expect(wrapper.emitted()).toHaveProperty('increment')
    expect(wrapper.emitted().increment[0]).toEqual([1])
  })
})
\`\`\`

**Testing Composables:**
\`\`\`javascript
// tests/unit/useCounter.spec.js
import { describe, it, expect } from 'vitest'
import { useCounter } from '@/composables/useCounter'

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { count } = useCounter()
    
    expect(count.value).toBe(0)
  })
  
  it('increments count', () => {
    const { count, increment } = useCounter()
    
    increment()
    
    expect(count.value).toBe(1)
  })
  
  it('computes doubled value', () => {
    const { count, doubled } = useCounter(5)
    
    expect(doubled.value).toBe(10)
  })
})
\`\`\`

**Integration Testing:**
\`\`\`javascript
// tests/integration/UserProfile.spec.js
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import UserProfile from '@/components/UserProfile.vue'
import { useUserStore } from '@/stores/user'

describe('UserProfile.vue', () => {
  let wrapper
  let userStore
  
  beforeEach(() => {
    const pinia = createPinia()
    wrapper = mount(UserProfile, {
      global: { plugins: [pinia] }
    })
    userStore = useUserStore()
  })
  
  it('displays user information', async () => {
    await userStore.fetchUser(1)
    
    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('john@example.com')
  })
  
  it('updates user profile', async () => {
    await userStore.fetchUser(1)
    
    await wrapper.find('input[name="name"]').setValue('Jane Doe')
    await wrapper.find('form').trigger('submit')
    
    expect(userStore.currentUser.name).toBe('Jane Doe')
  })
})
\`\`\`

**Component Testing with Mocks:**
\`\`\`javascript
// tests/unit/ApiComponent.spec.js
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ApiComponent from '@/components/ApiComponent.vue'

// Mock API
vi.mock('@/api/users', () => ({
  fetchUsers: vi.fn(() => Promise.resolve([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]))
}))

describe('ApiComponent.vue', () => {
  it('loads and displays users', async () => {
    const wrapper = mount(ApiComponent)
    
    await wrapper.vm.$nextTick()
    
    expect(wrapper.findAll('.user')).toHaveLength(2)
    expect(wrapper.text()).toContain('John')
    expect(wrapper.text()).toContain('Jane')
  })
})
\`\`\`

**E2E Testing with Playwright:**
\`\`\`javascript
// tests/e2e/user-journey.spec.js
import { test, expect } from '@playwright/test'

test('user can register and login', async ({ page }) => {
  // Register
  await page.goto('/register')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('input[name="password"]', 'password123')
  await page.click('button[type="submit"]')
  
  await expect(page).toHaveURL('/dashboard')
  
  // Login
  await page.goto('/login')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('input[name="password"]', 'password123')
  await page.click('button[type="submit"]')
  
  await expect(page).toHaveURL('/dashboard')
  await expect(page.locator('h1')).toContainText('Welcome')
})
\`\`\`

**Testing Best Practices:**
- **Test pyramid**: More unit tests, fewer E2E tests
- **Arrange-Act-Assert**: Clear test structure
- **Descriptive names**: Test should explain what they test
- **Independent tests**: No dependencies between tests
- **Mock external dependencies**: Isolate code under test
- **Test coverage**: Aim for 80%+ coverage
- **CI/CD integration**: Automated testing in pipeline`
  },
  {
    question: "How do you implement micro-frontend architecture with Vue.js?",
    idealAnswer: `**Micro-frontend architecture** with Vue.js allows multiple independent teams to work on different parts of a large application.

**Module Federation Setup:**
\`\`\`javascript
// vue.config.js (shell application)
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'shell',
        remotes: {
          userApp: 'userApp@http://localhost:8081/remoteEntry.js',
          productApp: 'productApp@http://localhost:8082/remoteEntry.js'
        },
        shared: {
          vue: { singleton: true, requiredVersion: '^3.0.0' },
          'vue-router': { singleton: true, requiredVersion: '^4.0.0' },
          pinia: { singleton: true, requiredVersion: '^2.0.0' }
        }
      })
    ]
  }
}
\`\`\`

**Shell Application (Container):**
\`\`\`vue
<!-- Shell App - Main Container -->
<template>
  <div id="app">
    <AppHeader />
    
    <main>
      <router-view />
      
      <!-- Dynamic micro-frontend loading -->
      <component 
        :is="currentMicroApp" 
        v-if="currentMicroApp"
      />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Dynamic micro-frontend components
const UserApp = defineAsyncComponent(() => 
  import('userApp/UserApp')
)

const ProductApp = defineAsyncComponent(() => 
  import('productApp/ProductApp')
)

const currentMicroApp = computed(() => {
  if (route.path.startsWith('/user')) return UserApp
  if (route.path.startsWith('/product')) return ProductApp
  return null
})
</script>
\`\`\`

**Micro-frontend (User App):**
\`\`\`javascript
// vue.config.js (user micro-frontend)
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'userApp',
        filename: 'remoteEntry.js',
        exposes: {
          './UserApp': './src/App.vue',
          './UserList': './src/components/UserList.vue',
          './UserProfile': './src/components/UserProfile.vue'
        },
        shared: {
          vue: { singleton: true },
          'vue-router': { singleton: true },
          pinia: { singleton: true }
        }
      })
    ]
  }
}
\`\`\`

**Shared State Management:**
\`\`\`javascript
// shared/store.js
import { createPinia } from 'pinia'

// Create shared pinia instance
export const sharedPinia = createPinia()

// Shared user store
export const useSharedUserStore = defineStore('sharedUser', {
  state: () => ({
    currentUser: null,
    permissions: []
  }),
  
  actions: {
    async login(credentials) {
      // Shared authentication logic
    }
  }
})
\`\`\`

**Event Bus for Communication:**
\`\`\`javascript
// shared/eventBus.js
import { ref } from 'vue'

const eventBus = ref(new EventTarget())

export const useEventBus = () => {
  const emit = (eventName, data) => {
    eventBus.value.dispatchEvent(new CustomEvent(eventName, { detail: data }))
  }
  
  const on = (eventName, callback) => {
    eventBus.value.addEventListener(eventName, callback)
  }
  
  const off = (eventName, callback) => {
    eventBus.value.removeEventListener(eventName, callback)
  }
  
  return { emit, on, off }
}

// Usage in micro-frontends
const { emit, on } = useEventBus()

// Emit event
emit('user:updated', userData)

// Listen to event
on('user:updated', (userData) => {
  // Handle user update
})
\`\`\`

**Routing Configuration:**
\`\`\`javascript
// shell router
const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/user/*',
    component: () => import('./views/MicroAppContainer.vue'),
    props: { appName: 'userApp' }
  },
  {
    path: '/product/*',
    component: () => import('./views/MicroAppContainer.vue'),
    props: { appName: 'productApp' }
  }
]
\`\`\`

**Benefits of Micro-frontends:**
- **Independent deployment**: Each team can deploy independently
- **Technology diversity**: Different teams can use different frameworks
- **Scalability**: Teams can scale independently
- **Faster development**: Smaller codebases, faster builds
- **Autonomous teams**: Teams have full ownership

**Challenges:**
- **Shared dependencies**: Version conflicts and duplication
- **Routing complexity**: Managing routes across applications
- **State sharing**: Cross-app state management
- **Performance**: Multiple bundle loading
- **Testing**: Integration testing complexity
- **DevOps**: Complex deployment pipelines`
  }
];

function QnA({ questions }: { questions: Array<{ question: string; idealAnswer: string }> }) {
  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <Card key={index}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline p-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex-shrink-0 w-6 h-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                    <span className="text-slate-600 dark:text-slate-300 font-semibold text-xs">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-tight">
                      {q.question}
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      const searchQuery = encodeURIComponent(`${q.question} Vue`);
                      window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
                    }}
                    className="w-8 h-8 p-0 bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center mr-2"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <div 
                    className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-slate-700 dark:prose-headings:text-slate-300 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:bg-slate-200 dark:prose-code:bg-slate-800 prose-code:text-green-700 dark:prose-code:text-green-300 prose-code:font-medium prose-pre:bg-slate-100 dark:prose-pre:bg-slate-950 prose-pre:border dark:prose-pre:border-slate-600 prose-p:mb-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:leading-relaxed prose-pre:my-3 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:text-slate-700 dark:prose-pre:text-slate-300 prose-code:font-mono prose-pre:font-mono prose-pre:text-xs prose-pre:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: String(marked.parse(q.idealAnswer)) }} 
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}
    </div>
  );
}

export default function VueInterviewQuestions() {
  const [activeTab, setActiveTab] = useState('easy');

  const questions = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions
  };

  const difficultyStats = {
    easy: { count: easyQuestions.length, icon: BookOpen, color: 'green', time: '5-10 min' },
    medium: { count: mediumQuestions.length, icon: Target, color: 'yellow', time: '10-15 min' },
    hard: { count: hardQuestions.length, icon: TrendingUp, color: 'red', time: '15-20 min' }
  };

  return (
    <div className="w-screen px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pb-8 sm:pb-12">
      {/* Interview Header */}
      <InterviewHeader 
        showBackButton={true} 
        currentLanguage="Vue.js" 
      />
        
      {/* Questions Tabs */}
      <div className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 sticky top-16 z-10 bg-background/95 backdrop-blur-sm border-b">
            <TabsTrigger value="easy" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-green-100 dark:data-[state=active]:bg-green-900/60 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200 data-[state=active]:shadow-sm hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200">Easy</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-300">{easyQuestions.length} questions • 5-10 min</span>
            </TabsTrigger>
            <TabsTrigger value="medium" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-yellow-100 dark:data-[state=active]:bg-yellow-900/60 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200 data-[state=active]:shadow-sm hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <Target className="w-4 h-4 text-yellow-600 dark:text-yellow-400 data-[state=active]:text-yellow-700 dark:data-[state=active]:text-yellow-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200">Medium</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-300">{mediumQuestions.length} questions • 10-15 min</span>
            </TabsTrigger>
            <TabsTrigger value="hard" className="flex flex-col items-center gap-1 py-3 px-4 rounded-lg data-[state=active]:bg-red-100 dark:data-[state=active]:bg-red-900/60 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200 data-[state=active]:shadow-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <TrendingUp className="w-4 h-4 text-red-600 dark:text-red-400 data-[state=active]:text-red-700 dark:data-[state=active]:text-red-300" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200">Hard</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-300">{hardQuestions.length} questions • 15-20 min</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="easy" className="space-y-4">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                  <BookOpen className="w-5 h-5" />
                  Easy Level
                </CardTitle>
                <CardDescription>
                  Fundamental Vue.js concepts and basic interview questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <QnA questions={questions.easy} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medium" className="space-y-4">
            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                  <Target className="w-5 h-5" />
                  Medium Level
                </CardTitle>
                <CardDescription>
                  Intermediate Vue.js concepts and practical scenarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <QnA questions={questions.medium} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hard" className="space-y-4">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
                  <TrendingUp className="w-5 h-5" />
                  Hard Level
                </CardTitle>
                <CardDescription>
                  Advanced Vue.js concepts and complex problem-solving
                </CardDescription>
              </CardHeader>
              <CardContent>
                <QnA questions={questions.hard} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
