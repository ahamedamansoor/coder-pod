# Vue.js Cheatsheet

This comprehensive Vue.js cheatsheet covers everything from beginner to expert level, including the latest Vue 3 features and best practices.

## 📚 Table of Contents

- [Beginner](#beginner)
  - [Setup & Installation](#setup--installation)
  - [Basic Concepts](#basic-concepts)
  - [Templates & Directives](#templates--directives)
  - [Components Basics](#components-basics)
  - [Event Handling](#event-handling)
  - [Forms & Input](#forms--input)

- [Intermediate](#intermediate)
  - [Composition API](#composition-api)
  - [Vue Router](#vue-router)
  - [State Management](#state-management)
  - [Component Communication](#component-communication)
  - [Lifecycle Hooks](#lifecycle-hooks)
  - [Computed & Watch](#computed--watch)

- [Advanced](#advanced)
  - [Performance Optimization](#performance-optimization)
  - [Custom Directives](#custom-directives)
  - [Plugins & Ecosystem](#plugins--ecosystem)
  - [Testing](#testing)
  - [TypeScript Integration](#typescript-integration)
  - [SSR & Nuxt.js](#ssr--nuxtjs)

- [Expert](#expert)
  - [Advanced Patterns](#advanced-patterns)
  - [Performance Monitoring](#performance-monitoring)
  - [Micro-frontends](#micro-frontends)
  - [Vue 3 Advanced Features](#vue-3-advanced-features)
  - [Deployment & Production](#deployment--production)

---

## Beginner

### Setup & Installation

#### Create a Vue Project
```bash
# Using Vite (Recommended)
npm create vue@latest my-vue-app
cd my-vue-app
npm install
npm run dev

# Using Vue CLI
npm install -g @vue/cli
vue create my-vue-app
cd my-vue-app
npm run serve
```

#### CDN Installation
```html
<!-- Vue 3 -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!-- Vue 2 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
```

### Basic Concepts

#### Vue Instance
```javascript
// Vue 3 - createApp
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}).mount('#app')

// Vue 2 - new Vue
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

#### Data Binding
```html
<div id="app">
  <!-- Text interpolation -->
  <h1>{{ message }}</h1>
  
  <!-- Attribute binding -->
  <img v-bind:src="imageSrc" :alt="imageAlt">
  
  <!-- HTML binding -->
  <div v-html="rawHtml"></div>
  
  <!-- Class binding -->
  <div :class="{ active: isActive, 'text-danger': hasError }"></div>
  
  <!-- Style binding -->
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
</div>
```

### Templates & Directives

#### Essential Directives
```html
<!-- Conditional rendering -->
<div v-if="show">Visible when show is true</div>
<div v-else-if="type === 'A'">Type A</div>
<div v-else>Default</div>

<!-- Show/Hide (CSS display) -->
<div v-show="isVisible">Toggle visibility</div>

<!-- List rendering -->
<ul>
  <li v-for="(item, index) in items" :key="item.id">
    {{ index }}: {{ item.name }}
  </li>
</ul>

<!-- Event handling -->
<button v-on:click="doSomething" @click="doSomething">
  Click me
</button>

<!-- Two-way data binding -->
<input v-model="message" placeholder="Edit me">

<!-- Once (no reactivity) -->
<span v-once>{{ message }}</span>
```

#### Shorthand Syntax
```html
<!-- Full syntax vs Shorthand -->
v-bind:href="url"    →    :href="url"
v-on:click="doThis"  →    @click="doThis"
v-slot:header        →    #header
```

### Components Basics

#### Creating Components
```javascript
// Vue 3 Single File Component
<template>
  <div class="counter">
    <h2>{{ title }}</h2>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    title: {
      type: String,
      default: 'Counter'
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<style scoped>
.counter {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
```

#### Using Components
```html
<template>
  <div>
    <Counter title="My Counter" />
    <Counter />
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  components: {
    Counter
  }
}
</script>
```

### Event Handling

#### Event Modifiers
```html
<!-- Prevent default behavior -->
<form @submit.prevent="onSubmit">

<!-- Stop propagation -->
<button @click.stop="doThis">

<!-- Capture mode -->
<div @click.capture="doThis">

<!-- Self only -->
<div @click.self="doThat">

<!-- Once only -->
<button @click.once="doThis">

<!-- Key modifiers -->
<input @keyup.enter="submit">
<input @keyup.ctrl.enter="submit">

<!-- Mouse modifiers -->
<button @click.left="doLeftClick">
<button @click.middle="doMiddleClick">
```

#### Custom Events
```javascript
// Child component
this.$emit('custom-event', payload)
this.$emit('increment', { count: this.count })

// Parent component
<ChildComponent @custom-event="handleCustom" />
```

### Forms & Input

#### Form Input Bindings
```html
<!-- Text input -->
<input v-model="message" placeholder="Edit me">

<!-- Textarea -->
<textarea v-model="message" placeholder="Add multiple lines"></textarea>

<!-- Checkbox -->
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>

<!-- Multiple checkboxes -->
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<input type="checkbox" id="john" value="John" v-model="checkedNames">

<!-- Radio -->
<input type="radio" id="one" value="One" v-model="picked">
<input type="radio" id="two" value="Two" v-model="picked">

<!-- Select -->
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>

<!-- Multiple select -->
<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

#### Modifiers
```html
<!-- Lazy: sync after change events -->
<input v-model.lazy="msg">

<!-- Number: automatically cast to number -->
<input v-model.number="age" type="number">

<!-- Trim: automatically trim whitespace -->
<input v-model.trim="msg">
```

---

## Intermediate

### Composition API

#### Setup Function
```javascript
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, onMounted } from 'vue'

export default {
  props: {
    title: String
  },
  setup(props) {
    // Reactive state
    const count = ref(0)
    const state = reactive({
      name: 'Vue',
      version: '3.0'
    })

    // Computed properties
    const doubled = computed(() => count.value * 2)

    // Methods
    const increment = () => {
      count.value++
    }

    // Watchers
    watch(count, (newValue, oldValue) => {
      console.log(`Count changed: ${oldValue} → ${newValue}`)
    })

    // Lifecycle hooks
    onMounted(() => {
      console.log('Component mounted!')
    })

    return {
      count,
      state,
      doubled,
      increment
    }
  }
}
</script>
```

#### Composition API with `<script setup>`
```vue
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'

// Props
const props = defineProps({
  title: String
})

// Emits
const emit = defineEmits(['increment'])

// Reactive state
const count = ref(0)
const state = reactive({
  name: 'Vue',
  version: '3.0'
})

// Computed properties
const doubled = computed(() => count.value * 2)

// Methods
const increment = () => {
  count.value++
  emit('increment', count.value)
}

// Watchers
watch(count, (newValue, oldValue) => {
  console.log(`Count changed: ${oldValue} → ${newValue}`)
})

// Lifecycle hooks
onMounted(() => {
  console.log('Component mounted!')
})
</script>
```

#### Composables
```javascript
// useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue

  const doubled = computed(() => count.value * 2)

  return {
    count,
    increment,
    decrement,
    reset,
    doubled
  }
}

// Using the composable
<script setup>
import { useCounter } from './useCounter'

const { count, increment, decrement, reset, doubled } = useCounter(10)
</script>
```

### Vue Router

#### Installation & Setup
```bash
npm install vue-router@4
```

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../views/User.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

#### Navigation
```html
<!-- Router links -->
<router-link to="/">Home</router-link>
<router-link :to="{ name: 'User', params: { id: 123 }}">User 123</router-link>

<!-- Named routes -->
<router-link :to="{ name: 'About' }">About</router-link>

<!-- Query parameters -->
<router-link :to="{ path: '/search', query: { q: 'vue' }}">Search</router-link>

<!-- Active class styling -->
<router-link to="/" active-class="active" exact-active-class="exact-active">
  Home
</router-link>
```

#### Programmatic Navigation
```javascript
// Navigate to a route
router.push('/home')
router.push({ name: 'Home' })
router.push({ path: '/user', query: { id: 123 } })

// Replace current route
router.replace('/home')

// Go back/forward
router.go(-1)
router.go(1)

// In component
this.$router.push('/home')
```

#### Route Guards
```javascript
// Global guards
router.beforeEach((to, from, next) => {
  // Check authentication
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})

// Per-route guard
const routes = [
  {
    path: '/admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      // Route-specific logic
      next()
    }
  }
]

// Component guards
export default {
  beforeRouteEnter(to, from, next) {
    // Called before the component is rendered
    next(vm => {
      // Access to component instance via `vm`
    })
  },
  beforeRouteUpdate(to, from, next) {
    // Called when the route changes but the component is reused
    next()
  },
  beforeRouteLeave(to, from, next) {
    // Called when the component is about to be left
    const answer = window.confirm('Do you really want to leave?')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
```

### State Management

#### Pinia (Recommended)
```bash
npm install pinia
```

```javascript
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Eduardo'
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    doublePlusOne() {
      return this.doubleCount + 1
    }
  },
  actions: {
    increment() {
      this.count++
    },
    async fetchUserData() {
      try {
        const data = await api.fetchUser()
        this.name = data.name
      } catch (error) {
        console.error(error)
      }
    }
  }
})
```

#### Composition API Store
```javascript
// stores/counter.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  async function fetchUserData() {
    try {
      const data = await api.fetchUser()
      name.value = data.name
    } catch (error) {
      console.error(error)
    }
  }
  
  return { count, name, doubleCount, increment, fetchUserData }
})
```

#### Using Stores in Components
```vue
<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()

// Extract reactive properties
const { count, doubleCount } = storeToRefs(counterStore)

// Actions can be directly destructured
const { increment } = counterStore
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

### Component Communication

#### Props and Events
```vue
<!-- Parent.vue -->
<template>
  <Child 
    :message="parentMessage" 
    :user="user"
    @update="handleUpdate"
    @custom-event="handleCustomEvent"
  />
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const parentMessage = ref('Hello from parent')
const user = ref({ name: 'John', age: 30 })

const handleUpdate = (newValue) => {
  parentMessage.value = newValue
}

const handleCustomEvent = (payload) => {
  console.log('Custom event:', payload)
}
</script>

<!-- Child.vue -->
<template>
  <div>
    <p>{{ message }}</p>
    <p>User: {{ user.name }} ({{ user.age }})</p>
    <button @click="updateParent">Update Parent</button>
  </div>
</template>

<script setup>
const props = defineProps({
  message: String,
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update', 'custom-event'])

const updateParent = () => {
  emit('update', 'Updated from child')
  emit('custom-event', { type: 'update', timestamp: Date.now() })
}
</script>
```

#### Provide/Inject
```vue
<!-- Parent.vue -->
<script setup>
import { provide, ref, readonly } from 'vue'
import Child from './Child.vue'

const theme = ref('dark')
const user = ref({ name: 'John' })

// Provide reactive state
provide('theme', readonly(theme))
provide('user', readonly(user))

// Provide functions
provide('updateTheme', (newTheme) => {
  theme.value = newTheme
})
</script>

<!-- DeepChild.vue -->
<script setup>
import { inject } from 'vue'

const theme = inject('theme')
const user = inject('user')
const updateTheme = inject('updateTheme')

const changeTheme = () => {
  updateTheme('light')
}
</script>
```

### Lifecycle Hooks

#### Options API Lifecycle
```javascript
export default {
  beforeCreate() {
    // Instance initialization
  },
  created() {
    // Instance created, data and events ready
  },
  beforeMount() {
    // Before DOM mounting
  },
  mounted() {
    // Component mounted to DOM
  },
  beforeUpdate() {
    // Before reactive data changes
  },
  updated() {
    // After DOM updates
  },
  beforeUnmount() {
    // Before component destruction
  },
  unmounted() {
    // Component destroyed
  },
  errorCaptured(err, instance, info) {
    // Error handling
  }
}
```

#### Composition API Lifecycle
```javascript
import { 
  onBeforeMount, 
  onMounted, 
  onBeforeUpdate, 
  onUpdated, 
  onBeforeUnmount, 
  onUnmounted,
  onErrorCaptured
} from 'vue'

export default {
  setup() {
    onBeforeMount(() => {
      console.log('Before mount')
    })
    
    onMounted(() => {
      console.log('Mounted')
    })
    
    onBeforeUpdate(() => {
      console.log('Before update')
    })
    
    onUpdated(() => {
      console.log('Updated')
    })
    
    onBeforeUnmount(() => {
      console.log('Before unmount')
    })
    
    onUnmounted(() => {
      console.log('Unmounted')
    })
    
    onErrorCaptured((err, instance, info) => {
      console.error('Error captured:', err)
    })
  }
}
```

### Computed & Watch

#### Computed Properties
```javascript
// Options API
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      items: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    evenItems() {
      return this.items.filter(item => item % 2 === 0)
    },
    // Setter
    fullNameSetter: {
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(newValue) {
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}

// Composition API
import { computed, ref } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => `${firstName.value} ${lastName.value}`)

const fullNameSetter = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (newValue) => {
    const names = newValue.split(' ')
    firstName.value = names[0]
    lastName.value = names[names.length - 1]
  }
})
```

#### Watchers
```javascript
// Options API
export default {
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark.'
    }
  },
  watch: {
    // Simple watcher
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    },
    // Object watcher with deep
    user: {
      handler(newUser, oldUser) {
        console.log('User changed:', newUser)
      },
      deep: true,
      immediate: true
    },
    // Array watcher
    items: {
      handler(newItems) {
        console.log('Items changed:', newItems)
      },
      deep: true
    }
  },
  methods: {
    getAnswer() {
      // Method implementation
    }
  }
}

// Composition API
import { ref, watch, watchEffect } from 'vue'

const question = ref('')
const answer = ref('')

// Simple watcher
watch(question, (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    getAnswer()
  }
})

// Watch with options
watch(
  () => user.value,
  (newUser, oldUser) => {
    console.log('User changed:', newUser)
  },
  { deep: true, immediate: true }
)

// WatchEffect (automatically tracks dependencies)
watchEffect(() => {
  console.log(`Question is: ${question.value}`)
})

// Watch multiple sources
watch(
  [firstName, lastName],
  ([newFirst, newLast], [oldFirst, oldLast]) => {
    console.log(`Name changed from ${oldFirst} ${oldLast} to ${newFirst} ${newLast}`)
  }
)
```

---

## Advanced

### Performance Optimization

#### Lazy Loading Components
```javascript
// Route-based code splitting
const routes = [
  {
    path: '/about',
    component: () => import('./views/About.vue')
  }
]

// Component-based lazy loading
export default {
  components: {
    AsyncComponent: () => import('./AsyncComponent.vue')
  }
}

// Async component with loading and error states
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./AsyncComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 3000
})
```

#### Virtual Scrolling
```vue
<template>
  <div class="virtual-list" @scroll="handleScroll">
    <div class="virtual-list-phantom" :style="{ height: totalHeight + 'px' }"></div>
    <div class="virtual-list-content" :style="{ transform: `translateY(${offsetY}px)` }">
      <div v-for="item in visibleItems" :key="item.id" class="list-item">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  items: Array,
  itemHeight: { type: Number, default: 50 },
  visibleCount: { type: Number, default: 10 }
})

const scrollTop = ref(0)
const containerHeight = ref(0)

const totalHeight = computed(() => props.items.length * props.itemHeight)
const startIndex = computed(() => Math.floor(scrollTop.value / props.itemHeight))
const endIndex = computed(() => Math.min(startIndex.value + props.visibleCount, props.items.length))
const offsetY = computed(() => startIndex.value * props.itemHeight)

const visibleItems = computed(() => 
  props.items.slice(startIndex.value, endIndex.value)
)

const handleScroll = (e) => {
  scrollTop.value = e.target.scrollTop
}

onMounted(() => {
  containerHeight.value = props.visibleCount * props.itemHeight
})
</script>
```

#### Memoization
```javascript
import { memoize } from 'lodash'

// Memoize expensive functions
const expensiveFunction = memoize((param) => {
  // Heavy computation
  return result
})

// Custom memoization composable
function useMemoize(fn, getKey) {
  const cache = new Map()
  
  return (...args) => {
    const key = getKey ? getKey(...args) : JSON.stringify(args)
    
    if (cache.has(key)) {
      return cache.get(key)
    }
    
    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}
```

#### Performance Monitoring
```javascript
// Performance measurement
import { onMounted, onUnmounted } from 'vue'

export function usePerformanceMonitor() {
  let startTime = 0
  
  onMounted(() => {
    startTime = performance.now()
  })
  
  onUnmounted(() => {
    const endTime = performance.now()
    console.log(`Component lived for ${endTime - startTime}ms`)
  })
}

// Frame rate monitoring
function useFPS() {
  const fps = ref(0)
  let lastTime = performance.now()
  let frames = 0
  
  function updateFPS(currentTime) {
    frames++
    
    if (currentTime >= lastTime + 1000) {
      fps.value = Math.round((frames * 1000) / (currentTime - lastTime))
      frames = 0
      lastTime = currentTime
    }
    
    requestAnimationFrame(updateFPS)
  }
  
  onMounted(() => {
    requestAnimationFrame(updateFPS)
  })
  
  return { fps }
}
```

### Custom Directives

#### Creating Custom Directives
```javascript
// Global directive
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

// Local directive
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}

// Directive with hooks
app.directive('color', {
  beforeMount(el, binding) {
    el.style.color = binding.value
  },
  updated(el, binding) {
    el.style.color = binding.value
  }
})

// Directive with modifiers
app.directive('highlight', {
  beforeMount(el, binding) {
    const modifiers = binding.modifiers
    const value = binding.value
    
    if (modifiers.delay) {
      setTimeout(() => {
        el.style.backgroundColor = value
      }, 1000)
    } else {
      el.style.backgroundColor = value
    }
  }
})
```

#### Advanced Directive Examples
```javascript
// Infinite scroll directive
app.directive('infinite-scroll', {
  mounted(el, binding) {
    const callback = binding.value
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback()
        }
      })
    }, options)
    
    observer.observe(el)
    
    el._observer = observer
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect()
    }
  }
})

// Click outside directive
app.directive('click-outside', {
  mounted(el, binding) {
    el._clickOutside = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el._clickOutside)
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutside)
  }
})
```

### Plugins & Ecosystem

#### Creating Plugins
```javascript
// my-plugin.js
export default {
  install(app, options) {
    // Add global property
    app.config.globalProperties.$myGlobal = 'Hello from plugin'
    
    // Add global directive
    app.directive('my-directive', {
      mounted(el) {
        // Directive logic
      }
    })
    
    // Add mixin
    app.mixin({
      created() {
        console.log('Component created from plugin')
      }
    })
    
    // Provide inject
    app.provide('pluginOptions', options)
  }
}

// Using plugin
import MyPlugin from './my-plugin'
app.use(MyPlugin, { someOption: true })
```

#### Popular Vue Libraries
```bash
# UI Libraries
npm install element-plus
npm install vuetify
npm install ant-design-vue
npm install primevue

# Utilities
npm install vueuse
npm install @vueuse/core
npm install lodash-es

# Development
npm install @vitejs/plugin-vue
npm install vue-tsc
npm install @vue/test-utils
```

#### VueUse Examples
```javascript
import { 
  useMouse, 
  useLocalStorage, 
  useDark, 
  useToggle,
  useWindowSize,
  useClipboard
} from '@vueuse/core'

// Mouse position
const { x, y } = useMouse()

// Local storage
const stored = useLocalStorage('my-key', 'default value')

// Dark mode
const isDark = useDark()
const toggleDark = useToggle(isDark)

// Window size
const { width, height } = useWindowSize()

// Clipboard
const { copy, copied, text } = useClipboard()
```

### Testing

#### Unit Testing with Vitest
```javascript
// Component.test.js
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

describe('Counter', () => {
  it('renders initial count', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('Count: 0')
  })
  
  it('increments count when button is clicked', async () => {
    const wrapper = mount(Counter)
    const button = wrapper.find('button')
    
    await button.trigger('click')
    
    expect(wrapper.text()).toContain('Count: 1')
  })
  
  it('emits increment event', async () => {
    const wrapper = mount(Counter)
    const button = wrapper.find('button')
    
    await button.trigger('click')
    
    expect(wrapper.emitted().increment).toBeTruthy()
    expect(wrapper.emitted().increment[0]).toEqual([1])
  })
})
```

#### Component Testing
```javascript
// Testing with Composition API
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import MyComponent from '../MyComponent.vue'

describe('MyComponent', () => {
  it('computes double correctly', () => {
    const count = ref(5)
    const double = computed(() => count.value * 2)
    
    expect(double.value).toBe(10)
  })
  
  it('reacts to prop changes', async () => {
    const wrapper = mount(MyComponent, {
      props: { message: 'Hello' }
    })
    
    expect(wrapper.text()).toContain('Hello')
    
    await wrapper.setProps({ message: 'World' })
    expect(wrapper.text()).toContain('World')
  })
})
```

#### E2E Testing with Cypress
```javascript
// cypress/integration/app.spec.js
describe('Vue App', () => {
  it('should load the home page', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Vue.js')
  })
  
  it('should navigate to about page', () => {
    cy.visit('/')
    cy.get('a[href="/about"]').click()
    cy.url().should('include', '/about')
    cy.contains('h1', 'About')
  })
  
  it('should handle form submission', () => {
    cy.visit('/contact')
    cy.get('[data-cy=name-input]').type('John Doe')
    cy.get('[data-cy=email-input]').type('john@example.com')
    cy.get('[data-cy=submit-button]').click()
    cy.contains('Form submitted successfully')
  })
})
```

### TypeScript Integration

#### TypeScript with Composition API
```vue
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'

// Type definitions
interface User {
  id: number
  name: string
  email: string
}

interface Props {
  title: string
  user?: User
  initialCount?: number
}

// Props with types
const props = withDefaults(defineProps<Props>(), {
  initialCount: 0
})

// Emits with types
const emit = defineEmits<{
  increment: [count: number]
  update: [value: string]
}>()

// Refs with types
const count: Ref<number> = ref(props.initialCount)
const user: Ref<User | null> = ref(null)

// Computed with types
const doubled: Ref<number> = computed(() => count.value * 2)

// Functions with types
const increment = (): void => {
  count.value++
  emit('increment', count.value)
}

const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(`/api/users/${id}`)
  return response.json()
}
</script>
```

#### TypeScript with Pinia
```typescript
// stores/user.ts
import { defineStore } from 'pinia'
import type { User } from '@/types'

interface UserState {
  users: User[]
  currentUser: User | null
  loading: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    users: [],
    currentUser: null,
    loading: false
  }),
  
  getters: {
    getUserById: (state) => {
      return (id: number): User | undefined => 
        state.users.find(user => user.id === id)
    },
    
    activeUsers: (state): User[] => 
      state.users.filter(user => user.isActive)
  },
  
  actions: {
    async fetchUsers(): Promise<void> {
      this.loading = true
      try {
        const response = await fetch('/api/users')
        this.users = await response.json()
      } catch (error) {
        console.error('Failed to fetch users:', error)
      } finally {
        this.loading = false
      }
    },
    
    async createUser(userData: Omit<User, 'id'>): Promise<User> {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
      
      const newUser: User = await response.json()
      this.users.push(newUser)
      return newUser
    }
  }
})
```

### SSR & Nuxt.js

#### Nuxt 3 Setup
```bash
npx nuxi@latest init my-nuxt-app
cd my-nuxt-app
npm install
npm run dev
```

#### Nuxt 3 Pages
```vue
<!-- pages/index.vue -->
<template>
  <div>
    <h1>Welcome to Nuxt 3</h1>
    <p>Current count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
const count = ref(0)

const increment = () => {
  count.value++
}

// SEO meta
useSeoMeta({
  title: 'My Nuxt App',
  description: 'Welcome to my Nuxt 3 application'
})

// Fetch data on server
const { data: posts } = await useFetch('/api/posts')
</script>
```

#### Nuxt 3 API Routes
```vue
<!-- server/api/posts.get.vue -->
<template>
  <!-- This file handles GET /api/posts -->
</template>

<script setup>
export default defineEventHandler(async (event) => {
  const posts = [
    { id: 1, title: 'First Post', content: '...' },
    { id: 2, title: 'Second Post', content: '...' }
  ]
  
  return posts
})
</script>
```

#### Nuxt 3 Middleware
```typescript
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useCookie('auth-token').value
  
  if (!isAuthenticated) {
    return navigateTo('/login')
  }
})
```

---

## Expert

### Advanced Patterns

#### Renderless Components
```vue
<!-- RenderlessComponent.vue -->
<template>
  <slot :data="data" :loading="loading" :error="error" :refresh="refresh" />
</template>

<script setup>
const data = ref(null)
const loading = ref(false)
const error = ref(null)

const refresh = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await fetch('/api/data')
    data.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(refresh)
</script>

<!-- Using renderless component -->
<template>
  <RenderlessComponent v-slot="{ data, loading, error, refresh }">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div v-for="item in data" :key="item.id">
        {{ item.name }}
      </div>
      <button @click="refresh">Refresh</button>
    </div>
  </RenderlessComponent>
</template>
```

#### Higher-Order Components
```javascript
// withLoading.js
export function withLoading(WrappedComponent) {
  return {
    name: `WithLoading${WrappedComponent.name}`,
    props: WrappedComponent.props,
    data() {
      return {
        loading: false
      }
    },
    methods: {
      async withLoadingWrapper(fn) {
        this.loading = true
        try {
          return await fn()
        } finally {
          this.loading = false
        }
      }
    },
    render() {
      const slots = this.$slots.default
      const props = { ...this.$props, loading: this.loading }
      
      return h(WrappedComponent, {
        ...props,
        on: this.$listeners
      }, slots)
    }
  }
}

// Usage
const EnhancedComponent = withLoading(MyComponent)
```

#### State Machine Pattern
```javascript
// useStateMachine.js
import { ref, computed } from 'vue'

export function useStateMachine(initialState, transitions) {
  const currentState = ref(initialState)
  
  const transition = (action) => {
    const stateTransitions = transitions[currentState.value]
    if (stateTransitions && stateTransitions[action]) {
      currentState.value = stateTransitions[action]
    }
  }
  
  const canTransition = (action) => {
    const stateTransitions = transitions[currentState.value]
    return stateTransitions && stateTransitions[action]
  }
  
  return {
    currentState: computed(() => currentState.value),
    transition,
    canTransition
  }
}

// Usage
const { currentState, transition, canTransition } = useStateMachine(
  'idle',
  {
    idle: {
      start: 'loading'
    },
    loading: {
      success: 'success',
      error: 'error'
    },
    success: {
      reset: 'idle'
    },
    error: {
      retry: 'loading',
      reset: 'idle'
    }
  }
)
```

### Performance Monitoring

#### Performance API Integration
```javascript
// usePerformance.js
export function usePerformance() {
  const metrics = ref({
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0
  })
  
  const measureWebVitals = () => {
    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          metrics.value.firstContentfulPaint = entry.startTime
        }
      })
    }).observe({ entryTypes: ['paint'] })
    
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      metrics.value.largestContentfulPaint = lastEntry.startTime
    }).observe({ entryTypes: ['largest-contentful-paint'] })
    
    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach(entry => {
        metrics.value.firstInputDelay = entry.processingStart - entry.startTime
      })
    }).observe({ entryTypes: ['first-input'] })
    
    // Cumulative Layout Shift
    let clsValue = 0
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          metrics.value.cumulativeLayoutShift = clsValue
        }
      })
    }).observe({ entryTypes: ['layout-shift'] })
  }
  
  onMounted(measureWebVitals)
  
  return { metrics }
}
```

#### Memory Usage Monitoring
```javascript
// useMemoryMonitor.js
export function useMemoryMonitor() {
  const memoryInfo = ref({
    usedJSHeapSize: 0,
    totalJSHeapSize: 0,
    jsHeapSizeLimit: 0
  })
  
  const updateMemoryInfo = () => {
    if (performance.memory) {
      memoryInfo.value = {
        usedJSHeapSize: performance.memory.usedJSHeapSize,
        totalJSHeapSize: performance.memory.totalJSHeapSize,
        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
      }
    }
  }
  
  const memoryUsagePercentage = computed(() => {
    if (!memoryInfo.value.jsHeapSizeLimit) return 0
    return (memoryInfo.value.usedJSHeapSize / memoryInfo.value.jsHeapSizeLimit) * 100
  })
  
  // Update every 5 seconds
  const interval = setInterval(updateMemoryInfo, 5000)
  
  onUnmounted(() => {
    clearInterval(interval)
  })
  
  updateMemoryInfo()
  
  return { memoryInfo, memoryUsagePercentage }
}
```

### Micro-frontends

#### Module Federation with Vue
```javascript
// vue.config.js (shell application)
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'shell',
        remotes: {
          mfe1: 'mfe1@http://localhost:3001/remoteEntry.js',
          mfe2: 'mfe2@http://localhost:3002/remoteEntry.js'
        },
        shared: ['vue', 'vue-router']
      })
    ]
  }
}

// vue.config.js (micro-frontend)
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'mfe1',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App.vue',
          './router': './src/router'
        },
        shared: ['vue', 'vue-router']
      })
    ]
  }
}

// Using remote module
<template>
  <div>
    <RemoteApp />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const RemoteApp = defineAsyncComponent(() => import('mfe1/App'))

export default {
  components: {
    RemoteApp
  }
}
</script>
```

#### Web Components Integration
```javascript
// Define Vue component as custom element
import { defineCustomElement } from 'vue'
import MyComponent from './MyComponent.vue'

const MyElement = defineCustomElement(MyComponent)
customElements.define('my-component', MyElement)

// Using in other frameworks
// <my-component message="Hello"></my-component>

// Vue component that wraps web component
<template>
  <div>
    <external-component 
      :data="componentData"
      @custom-event="handleEvent"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const componentData = ref({})

const handleEvent = (event) => {
  console.log('Event from web component:', event.detail)
}

onMounted(() => {
  // Interact with web component DOM if needed
})
</script>
```

### Vue 3 Advanced Features

#### Suspense Component
```vue
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

<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() => 
  import('./AsyncComponent.vue')
)
</script>
```

#### Teleport Component
```vue
<template>
  <div>
    <h3>Modal inside component</h3>
    <button @click="showModal = true">Show Modal</button>
    
    <Teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <p>This modal is teleported to body</p>
          <button @click="showModal = false">Close</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const showModal = ref(false)
</script>
```

#### Multiple Root Nodes
```vue
<template>
  <header>Header</header>
  <main>Main content</main>
  <footer>Footer</footer>
</template>

<script setup>
// Fragment is automatic in Vue 3
</script>
```

#### Reactivity Transform (Experimental)
```vue
<script setup>
// Note: This is experimental and may change
let count = $ref(0)
let message = $ref('Hello')

function increment() {
  count++ // No .value needed
}

// Destructuring with reactivity
const { count, message } = $(useStore())
</script>
```

### Deployment & Production

#### Production Build Optimization
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          ui: ['element-plus']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: true,
    port: 3000
  }
})
```

#### Docker Configuration
```dockerfile
# Dockerfile
# Build stage
FROM node:18-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to server
        run: |
          # Deployment commands
          scp -r dist/* user@server:/var/www/html
```

#### Environment Configuration
```javascript
// .env.development
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=My App (Dev)

// .env.production
VITE_API_URL=https://api.myapp.com
VITE_APP_TITLE=My App

// Usage in app
const apiUrl = import.meta.env.VITE_API_URL
const appTitle = import.meta.env.VITE_APP_TITLE
```

#### Performance Budget
```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor chunks
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    // Set performance budgets
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096
  }
})

// webpack-bundle-analyzer
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true
    })
  ]
})
```

---

## 🚀 Quick Commands Reference

### Development Commands
```bash
# Create new Vue project
npm create vue@latest my-app

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e

# Type checking
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

### Vue CLI Commands
```bash
# Install Vue CLI
npm install -g @vue/cli

# Create project
vue create my-project

# Add plugin
vue add router
vue add vuex
vue add typescript

# Build and serve
npm run build
npm run serve

# Inspect webpack config
vue inspect
```

### Vite Commands
```bash
# Create Vite project
npm create vite@latest my-vue-app -- --template vue

# Start dev server
npm run dev

# Build
npm run build

# Preview
npm run preview

# Optimize dependencies
npm run optimize
```

---

## 📖 Additional Resources

### Official Documentation
- [Vue.js Official Docs](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [VueUse](https://vueuse.org/)
- [Nuxt.js](https://nuxt.com/)

### Community Resources
- [Awesome Vue](https://github.com/vuejs/awesome-vue)
- [Vue.js News](https://news.vuejs.org/)
- [Vue.js Discord](https://discord.gg/vue)
- [Vue.js Reddit](https://www.reddit.com/r/vuejs/)

### Learning Platforms
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)
- [Frontend Masters](https://frontendmasters.com/)

---

## 🔥 Pro Tips

1. **Use Composition API for better logic reuse**
2. **Leverage `<script setup>` for cleaner code**
3. **Use Pinia for state management instead of Vuex**
4. **Implement lazy loading for better performance**
5. **Use TypeScript for better development experience**
6. **Write tests for critical components**
7. **Use VueUse for common composable functions**
8. **Optimize bundle size with code splitting**
9. **Use environment variables for configuration**
10. **Monitor performance in production**

---

*This cheatsheet covers Vue.js from beginner to expert level. Keep it handy for quick reference and best practices!*
