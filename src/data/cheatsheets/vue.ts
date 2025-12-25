import { Triangle } from 'lucide-react';

export const vueCheatsheet = {
  id: 'vue',
  name: 'Vue.js',
  description: 'Comprehensive Vue.js cheatsheet from beginner to expert (Vue 2 & 3)',
  icon: Triangle,
  colorTheme: 'green' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Vue',
      commands: [
        {
          command: 'Vue Installation',
          description: 'Create new Vue application',
          usage: 'npm create vue@latest my-app or npx create-vue@latest my-app',
          example: '# Using Vue CLI (Vue 2)\nnpm install -g @vue/cli\nvue create my-app\n\n# Using create-vue (Vue 3)\nnpm create vue@latest my-app\ncd my-app\nnpm install\nnpm run dev',
        },
        {
          command: 'Vue 3 CDN Setup',
          description: 'Quick setup with CDN',
          usage: '<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>',
          example: '<div id="app">{{ message }}</div>\n<script>\n  const { createApp } = Vue\n  createApp({\n    data() {\n      return { message: "Hello Vue!" }\n    }\n  }).mount("#app")\n</script>',
        },
        {
          command: 'Single File Component',
          description: 'Vue component structure',
          usage: '<template>...</template>\n<script>...</script>\n<style>...</style>',
          example: '<template>\n  <div class="hello">\n    <h1>{{ msg }}</h1>\n    <button @click="increment">Count: {{ count }}</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "HelloWorld",\n  data() {\n    return {\n      msg: "Welcome to Vue",\n      count: 0\n    }\n  },\n  methods: {\n    increment() {\n      this.count++\n    }\n  }\n}\n</script>\n\n<style scoped>\n.hello {\n  color: #42b983;\n}\n</style>',
        },
        {
          command: 'Vue 3 Composition API',
          description: 'Modern Vue 3 component with script setup',
          usage: '<script setup>',
          example: '<template>\n  <div>\n    <h1>{{ message }}</h1>\n    <p>Count: {{ count }}</p>\n    <button @click="increment">+</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from "vue"\n\nconst message = "Hello Vue 3!"\nconst count = ref(0)\n\nfunction increment() {\n  count.value++\n}\n</script>',
        },
        {
          command: 'Vue 3.3+ Features',
          description: 'Latest Vue 3.3+ improvements',
          usage: 'defineModel, defineOptions, toValue',
          example: '<script setup>\n// defineModel - simplified v-model\nconst modelValue = defineModel()\nconst title = defineModel("title")\n\n// defineOptions - component options\ndefineOptions({\n  name: "MyComponent",\n  inheritAttrs: false\n})\n\n// toValue - normalize values\nconst normalized = toValue(maybeRefOrGetter)\n</script>',
        },
        {
          command: 'Data Binding',
          description: 'Bind data to templates',
          usage: '{{ expression }} and v-bind directive',
          example: '<template>\n  <div>\n    <h1>{{ title }}</h1>\n    <img :src="imageUrl" :alt="imageAlt">\n    <a :href="url">Link</a>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      title: "Vue.js",\n      imageUrl: "/logo.png",\n      imageAlt: "Vue Logo",\n      url: "https://vuejs.org"\n    }\n  }\n}\n</script>',
        },
        {
          command: 'Event Handling',
          description: 'Handle user events',
          usage: 'v-on or @ shorthand',
          example: '<template>\n  <div>\n    <button @click="sayHello">Say Hello</button>\n    <input @keyup.enter="submit">\n    <form @submit.prevent="handleSubmit">\n      <button type="submit">Submit</button>\n    </form>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    sayHello() {\n      alert("Hello!")\n    },\n    submit() {\n      console.log("Form submitted")\n    },\n    handleSubmit() {\n      console.log("Form submitted with prevent")\n    }\n  }\n}\n</script>',
        },
      ],
    },
    {
      title: 'Vue Templates and Directives',
      commands: [
        {
          command: 'Text Interpolation',
          description: 'Display data in templates',
          usage: '{{ expression }}',
          example: '<template>\n  <div>\n    <p>{{ message }}</p>\n    <p>{{ number + 1 }}</p>\n    <p>{{ message.split("").reverse().join("") }}</p>\n    <p>{{ isTrue ? "Yes" : "No" }}</p>\n  </div>\n</template>',
        },
        {
          command: 'Raw HTML',
          description: 'Render HTML content',
          usage: 'v-html directive',
          example: '<template>\n  <div>\n    <p>{{ rawHtml }}</p>\n    <div v-html="rawHtml"></div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      rawHtml: \'<span style="color: red">This should be red</span>\'\n    }\n  }\n}\n</script>',
        },
        {
          command: 'Attribute Binding',
          description: 'Bind HTML attributes',
          usage: 'v-bind or : shorthand',
          example: '<template>\n  <div>\n    <img :src="imageSrc" :alt="imageAlt">\n    <button :disabled="isDisabled">Click me</button>\n    <div :class="{ active: isActive, error: hasError }">\n      Dynamic classes\n    </div>\n    <div :style="{ color: textColor, fontSize: fontSize + \'px\' }">\n      Dynamic styles\n    </div>\n  </div>\n</template>',
        },
        {
          command: 'Conditional Rendering',
          description: 'Show/hide elements conditionally',
          usage: 'v-if, v-else-if, v-else, v-show',
          example: '<template>\n  <div>\n    <p v-if="type === \'A\'">A</p>\n    <p v-else-if="type === \'B\'">B</p>\n    <p v-else>Not A or B</p>\n    \n    <p v-show="isVisible">This is toggleable</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      type: "A",\n      isVisible: true\n    }\n  }\n}\n</script>',
        },
        {
          command: 'List Rendering',
          description: 'Render lists of data',
          usage: 'v-for directive',
          example: '<template>\n  <div>\n    <ul>\n      <li v-for="item in items" :key="item.id">\n        {{ item.message }}\n      </li>\n    </ul>\n    \n    <ul>\n      <li v-for="(item, index) in items" :key="index">\n        {{ index }} - {{ item.message }}\n      </li>\n    </ul>\n    \n    <div v-for="(value, key) in object" :key="key">\n      {{ key }}: {{ value }}\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      items: [\n        { id: 1, message: "Item 1" },\n        { id: 2, message: "Item 2" }\n      ],\n      object: {\n        name: "Vue",\n        version: "3.0"\n      }\n    }\n  }\n}\n</script>',
        },
        {
          command: 'Form Input Binding',
          description: 'Two-way data binding',
          usage: 'v-model directive',
          example: '<template>\n  <div>\n    <input v-model="message" placeholder="Type something">\n    <p>Message: {{ message }}</p>\n    \n    <input v-model="checked" type="checkbox">\n    <label>Checked: {{ checked }}</label>\n    \n    <select v-model="selected">\n      <option disabled value="">Select one</option>\n      <option>A</option>\n      <option>B</option>\n      <option>C</option>\n    </select>\n    <span>Selected: {{ selected }}</span>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      message: "",\n      checked: false,\n      selected: ""\n    }\n  }\n}\n</script>',
        },
        {
          command: 'Event Modifiers',
          description: 'Modify event behavior',
          usage: '.stop, .prevent, .capture, .self, .once, .passive',
          example: '<template>\n  <div>\n    <form @submit.prevent="onSubmit">\n      <button type="submit">Submit</button>\n    </form>\n    \n    <div @click="doThis">\n      <button @click.stop="doThat">Click me</button>\n    </div>\n    \n    <input @keyup.enter="submit">\n    <input @keyup.ctrl.enter="clear">\n  </div>\n</template>',
        },
      ],
    },
    {
      title: 'Vue Components and Props',
      commands: [
        {
          command: 'Component Registration',
          description: 'Create and use components',
          usage: 'Vue.component or components option',
          example: '// Global registration\nVue.component("my-component", {\n  template: "<div>A custom component!</div>"\n})\n\n// Local registration\nexport default {\n  components: {\n    "my-component": MyComponent\n  }\n}\n\n// In template\n<template>\n  <my-component></my-component>\n</template>',
        },
        {
          command: 'Props',
          description: 'Pass data to child components',
          usage: 'props option',
          example: '// Child component\nVue.component("blog-post", {\n  props: ["title"],\n  template: "<h3>{{ title }}</h3>"\n})\n\n// Parent component\n<template>\n  <blog-post title="My journey with Vue"></blog-post>\n  <blog-post title="Blogging with Vue"></blog-post>\n</template>',
        },
        {
          command: 'Props Validation',
          description: 'Validate prop types and requirements',
          usage: 'props with validation',
          example: 'Vue.component("my-component", {\n  props: {\n    propA: Number,\n    propB: [String, Number],\n    propC: {\n      type: String,\n      required: true\n    },\n    propD: {\n      type: Number,\n      default: 100\n    },\n    propE: {\n      type: Object,\n      default: function() {\n        return { message: "hello" }\n      }\n    }\n  }\n})',
        },
        {
          command: 'Custom Events',
          description: 'Child to parent communication',
          usage: '$emit method',
          example: '// Child component\nVue.component("button-counter", {\n  template: `\n    <button @click="$emit(\'increment\')">\n      {{ count }}\n    </button>\n  `,\n  data() {\n    return { count: 0 }\n  },\n  methods: {\n    increment() {\n      this.count++\n      this.$emit("increment")\n    }\n  }\n})\n\n// Parent component\n<template>\n  <div>\n    <p>{{ total }}</p>\n    <button-counter @increment="incrementTotal"></button-counter>\n  </div>\n</template>',
        },
        {
          command: 'Slots',
          description: 'Distribute content in components',
          usage: '<slot> element',
          example: '// BaseLayout component\nVue.component("base-layout", {\n  template: `\n    <div class="container">\n      <header>\n        <slot name="header"></slot>\n      </header>\n      <main>\n        <slot></slot>\n      </main>\n      <footer>\n        <slot name="footer"></slot>\n      </footer>\n    </div>\n  `\n})\n\n// Usage\n<template>\n  <base-layout>\n    <template v-slot:header>\n      <h1>Here might be a page title</h1>\n    </template>\n    \n    <p>A paragraph for the main content.</p>\n    <p>And another one.</p>\n    \n    <template v-slot:footer>\n      <p>Here\'s some contact info</p>\n    </template>\n  </base-layout>\n</template>',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Vue Reactivity System',
      commands: [
        {
          command: 'Data and Methods',
          description: 'Component data and methods',
          usage: 'data() and methods options',
          example: 'export default {\n  data() {\n    return {\n      count: 0,\n      message: "Hello Vue"\n    }\n  },\n  methods: {\n    increment() {\n      this.count++\n    },\n    reverseMessage() {\n      this.message = this.message.split("").reverse().join("")\n    }\n  }\n}',
        },
        {
          command: 'Computed Properties',
          description: 'Derived data with caching',
          usage: 'computed option',
          example: 'export default {\n  data() {\n    return {\n      firstName: "John",\n      lastName: "Doe"\n    }\n  },\n  computed: {\n    fullName: {\n      get() {\n        return this.firstName + " " + this.lastName\n      },\n      set(newValue) {\n        const names = newValue.split(" ")\n        this.firstName = names[0]\n        this.lastName = names[names.length - 1]\n      }\n    }\n  }\n}',
        },
        {
          command: 'Watchers',
          description: 'React to data changes',
          usage: 'watch option',
          example: 'export default {\n  data() {\n    return {\n      question: "",\n      answer: "Questions usually contain a question mark."\n    }\n  },\n  watch: {\n    question(newQuestion, oldQuestion) {\n      if (newQuestion.indexOf("?") > -1) {\n        this.getAnswer()\n      }\n    }\n  },\n  methods: {\n    getAnswer() {\n      this.answer = "Thinking..."\n      // Simulate async operation\n      setTimeout(() => {\n        this.answer = "The answer is 42"\n      }, 2000)\n    }\n  }\n}',
        },
        {
          command: 'Vue 3 ref and reactive',
          description: 'Composition API reactivity',
          usage: 'ref() and reactive() functions',
          example: '<script setup>\nimport { ref, reactive, computed, watch } from "vue"\n\n// Primitive values\nconst count = ref(0)\nconst message = ref("Hello")\n\n// Objects\nconst user = reactive({\n  name: "John",\n  age: 30\n})\n\n// Computed\nconst doubleCount = computed(() => count.value * 2)\n\n// Watcher\nwatch(count, (newValue, oldValue) => {\n  console.log(`Count changed from ${oldValue} to ${newValue}`)\n})\n\n// Methods\nfunction increment() {\n  count.value++\n}\n</script>',
        },
        {
          command: 'toRefs and toRef',
          description: 'Convert reactive objects to refs',
          usage: 'toRefs() and toRef() functions',
          example: '<script setup>\nimport { reactive, toRefs, toRef } from "vue"\n\nconst state = reactive({\n  count: 0,\n  message: "Hello"\n})\n\n// Convert all properties to refs\nconst { count, message } = toRefs(state)\n\n// Convert single property to ref\nconst countRef = toRef(state, "count")\n\n// Now you can use count.value in template\n</script>',
        },
      ],
    },
    {
      title: 'Vue 3 Composition API',
      commands: [
        {
          command: 'setup() Function',
          description: 'Composition API entry point',
          usage: 'setup() option',
          example: 'export default {\n  setup() {\n    const count = ref(0)\n    const doubleCount = computed(() => count.value * 2)\n    \n    function increment() {\n      count.value++\n    }\n    \n    return {\n      count,\n      doubleCount,\n      increment\n    }\n  }\n}',
        },
        {
          command: 'script setup syntax',
          description: 'Simplified Composition API',
          usage: '<script setup>',
          example: '<script setup>\nimport { ref, computed, onMounted } from "vue"\n\nconst count = ref(0)\nconst doubleCount = computed(() => count.value * 2)\n\nfunction increment() {\n  count.value++\n}\n\nonMounted(() => {\n  console.log("Component mounted")\n  // Fetch data, set up timers, etc.\n})\n</script>\n\n<template>\n  <div>\n    <p>Count: {{ count }}</p>\n    <p>Double: {{ doubleCount }}</p>\n    <button @click="increment">Increment</button>\n  </div>\n</template>',
        },
        {
          command: 'reactive and ref',
          description: 'Create reactive data',
          usage: 'reactive() and ref()',
          example: '<script setup>\nimport { reactive, ref } from "vue"\n\n// ref for primitive values\nconst count = ref(0)\nconst message = ref("Hello")\n\n// reactive for objects\nconst user = reactive({\n  name: "John",\n  age: 30\n})\n\n// Access ref values with .value\nfunction updateCount() {\n  count.value++\n}\n\n// Access reactive properties directly\nfunction updateName() {\n  user.name = "Jane"\n}\n</script>',
        },
        {
          command: 'computed properties',
          description: 'Derived computed values',
          usage: 'computed() function',
          example: '<script setup>\nimport { ref, computed } from "vue"\n\nconst firstName = ref("John")\nconst lastName = ref("Doe")\n\nconst fullName = computed(() => {\n  return `${firstName.value} ${lastName.value}`\n})\n\n// Writable computed\nconst writableComputed = computed({\n  get() {\n    return firstName.value + " " + lastName.value\n  },\n  set(newValue) {\n    const names = newValue.split(" ")\n    firstName.value = names[0]\n    lastName.value = names[names.length - 1]\n  }\n})\n</script>',
        },
        {
          command: 'Vue 3.4+ Reactive Utilities',
          description: 'Latest reactivity improvements',
          usage: 'syncRefs, triggerRef, shallowRef',
          example: '<script setup>\nimport { ref, reactive, syncRefs, triggerRef, shallowRef } from "vue"\n\n// syncRefs - two-way binding between refs\nconst source = ref("hello")\nconst target = ref("")\nsyncRefs(source, target)\n\n// triggerRef - manual trigger\nconst shallow = shallowRef({ count: 0 })\nshallow.value.count++\ntriggerRef(shallow) // force update\n\n// Improved reactive with shallow\nconst state = reactive({\n  deep: { nested: true },\n  shallow: shallowRef({ data: 1 })\n})\n</script>',
        },
        {
          command: 'watch and watchEffect',
          description: 'React to changes',
          usage: 'watch() and watchEffect()',
          example: '<script setup>\nimport { ref, watch, watchEffect } from "vue"\n\nconst count = ref(0)\nconst message = ref("")\n\n// Watch specific source\nwatch(count, (newValue, oldValue) => {\n  console.log(`Count changed: ${oldValue} -> ${newValue}`)\n})\n\n// Watch multiple sources\nwatch([count, message], ([newCount, newMessage], [oldCount, oldMessage]) => {\n  console.log("Multiple values changed")\n})\n\n// Watch effect (auto-tracking)\nwatchEffect(() => {\n  console.log(`Current count: ${count.value}, message: ${message.value}`)\n})\n</script>',
        },
        {
          command: 'Lifecycle Hooks',
          description: 'Component lifecycle in Composition API',
          usage: 'onMounted, onUpdated, onUnmounted, etc.',
          example: '<script setup>\nimport { onMounted, onUpdated, onUnmounted, onBeforeMount } from "vue"\n\nonBeforeMount(() => {\n  console.log("Before mount")\n})\n\nonMounted(() => {\n  console.log("Component mounted")\n  // Fetch data, set up timers, etc.\n})\n\nonUpdated(() => {\n  console.log("Component updated")\n})\n\nonUnmounted(() => {\n  console.log("Component unmounted")\n  // Clean up timers, subscriptions, etc.\n})\n</script>',
        },
      ],
    },
    {
      title: 'Vue Router',
      commands: [
        {
          command: 'Router Installation and Setup',
          description: 'Install and configure Vue Router',
          usage: 'npm install vue-router@4',
          example: 'import { createRouter, createWebHistory } from "vue-router"\nimport Home from "./views/Home.vue"\nimport About from "./views/About.vue"\n\nconst routes = [\n  { path: "/", component: Home },\n  { path: "/about", component: About }\n]\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes\n})\n\nexport default router',
        },
        {
          command: 'Dynamic Routes',
          description: 'Routes with parameters',
          usage: 'path: "/user/:id"',
          example: 'const routes = [\n  {\n    path: "/user/:id",\n    component: User,\n    name: "user",\n    props: true\n  }\n]\n\n// In component\nconst route = useRoute()\nconst userId = computed(() => route.params.id)',
        },
        {
          command: 'Navigation',
          description: 'Programmatic navigation',
          usage: 'router.push() and router.replace()',
          example: '<script setup>\nimport { useRouter } from "vue-router"\n\nconst router = useRouter()\n\nfunction goToHome() {\n  router.push("/")\n}\n\nfunction goToUser(id) {\n  router.push({ name: "user", params: { id } })\n}\n\nfunction replaceWithAbout() {\n  router.replace("/about")\n}\n</script>',
        },
        {
          command: 'Router Links',
          description: 'Declarative navigation',
          usage: '<router-link> component',
          example: '<template>\n  <nav>\n    <router-link to="/">Home</router-link>\n    <router-link to="/about">About</router-link>\n    <router-link :to="`/user/${userId}`">User</router-link>\n    \n    <!-- Active link styling -->\n    <router-link \n      to="/contact" \n      active-class="active-link"\n      exact-active-class="exact-active"\n    >\n      Contact\n    </router-link>\n  </nav>\n  \n  <router-view></router-view>\n</template>',
        },
        {
          command: 'Route Guards',
          description: 'Navigation guards',
          usage: 'beforeEach, beforeResolve, afterEach',
          example: 'router.beforeEach((to, from, next) => {\n  if (to.meta.requiresAuth && !isAuthenticated()) {\n    next("/login")\n  } else {\n    next()\n  }\n})\n\n// In-component guard\nexport default {\n  beforeRouteEnter(to, from, next) {\n    // Called before the route that renders this component is confirmed.\n    next()\n  },\n  beforeRouteUpdate(to, from, next) {\n    // Called when the route that renders this component has changed.\n    next()\n  },\n  beforeRouteLeave(to, from, next) {\n    // Called when the navigation is about to leave this component.\n    if (hasUnsavedChanges) {\n      if (confirm("Are you sure you want to leave?")) {\n        next()\n      } else {\n        next(false)\n      }\n    } else {\n      next()\n    }\n  }\n}',
        },
        {
          command: 'Nested Routes',
          description: 'Child routes and layouts',
          usage: 'children in route configuration',
          example: 'const routes = [\n  {\n    path: "/user/:id",\n    component: User,\n    children: [\n      {\n        path: "profile",\n        component: UserProfile\n      },\n      {\n        path: "posts",\n        component: UserPosts\n      }\n    ]\n  }\n]\n\n// Parent component template\n<template>\n  <div>\n    <h2>User {{ $route.params.id }}</h2>\n    <router-view></router-view>\n  </div>\n</template>',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'State Management with Pinia',
      commands: [
        {
          command: 'Pinia Installation',
          description: 'Install and setup Pinia',
          usage: 'npm install pinia',
          example: 'import { createApp } from "vue"\nimport { createPinia } from "pinia"\nimport App from "./App.vue"\n\nconst app = createApp(App)\napp.use(createPinia())\napp.mount("#app")',
        },
        {
          command: 'Define Store',
          description: 'Create a Pinia store',
          usage: 'defineStore()',
          example: 'import { defineStore } from "pinia"\n\nexport const useCounterStore = defineStore("counter", {\n  state: () => ({\n    count: 0,\n    name: "Eduardo"\n  }),\n  getters: {\n    doubleCount: (state) => state.count * 2\n  },\n  actions: {\n    increment() {\n      this.count++\n    },\n    randomizeCounter() {\n      this.count = Math.round(100 * Math.random())\n    }\n  }\n})',
        },
        {
          command: 'Setup Store Syntax',
          description: 'Modern store definition',
          usage: 'defineStore with setup function',
          example: 'import { defineStore } from "pinia"\nimport { ref, computed } from "vue"\n\nexport const useCounterStore = defineStore("counter", () => {\n  const count = ref(0)\n  const name = ref("Eduardo")\n  const doubleCount = computed(() => count.value * 2)\n  \n  function increment() {\n    count.value++\n  }\n  \n  function randomizeCounter() {\n    count.value = Math.round(100 * Math.random())\n  }\n  \n  return { count, name, doubleCount, increment, randomizeCounter }\n})',
        },
        {
          command: 'Using Store in Components',
          description: 'Access store in components',
          usage: 'useStore() composable',
          example: '<script setup>\nimport { useCounterStore } from "@/stores/counter"\nimport { storeToRefs } from "pinia"\n\nconst store = useCounterStore()\n\n// Extract individual properties with reactivity\nconst { count, doubleCount } = storeToRefs(store)\n\n// Access actions directly\nconst { increment } = store\n</script>\n\n<template>\n  <div>\n    <p>Count: {{ count }}</p>\n    <p>Double: {{ doubleCount }}</p>\n    <button @click="increment">Increment</button>\n  </div>\n</template>',
        },
        {
          command: 'Store Actions with Async',
          description: 'Async actions in stores',
          usage: 'async/await in actions',
          example: 'export const useUserStore = defineStore("user", {\n  state: () => ({\n    user: null,\n    loading: false,\n    error: null\n  }),\n  actions: {\n    async fetchUser(userId) {\n      this.loading = true\n      this.error = null\n      \n      try {\n        const response = await fetch(`/api/users/${userId}`)\n        this.user = await response.json()\n      } catch (error) {\n        this.error = error.message\n      } finally {\n        this.loading = false\n      }\n    }\n  }\n})',
        },
      ],
    },
    {
      title: 'Vue 3 Advanced Features',
      commands: [
        {
          command: 'Teleport',
          description: 'Render content outside component tree',
          usage: '<Teleport> component',
          example: '<template>\n  <div>\n    <h3>Modal</h3>\n    <button @click="showModal = true">Show Modal</button>\n    \n    <Teleport to="body">\n      <div v-if="showModal" class="modal">\n        <div class="modal-content">\n          <h3>Teleported Modal</h3>\n          <p>This modal is rendered in body</p>\n          <button @click="showModal = false">Close</button>\n        </div>\n      </div>\n    </Teleport>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from "vue"\n\nconst showModal = ref(false)\n</script>',
        },
        {
          command: 'Suspense',
          description: 'Handle async component loading',
          usage: '<Suspense> component',
          example: '<template>\n  <Suspense>\n    <template #default>\n      <AsyncComponent />\n    </template>\n    <template #fallback>\n      <div>Loading...</div>\n    </template>\n  </Suspense>\n</template>\n\n<script setup>\nimport { defineAsyncComponent } from "vue"\n\nconst AsyncComponent = defineAsyncComponent(() => \n  import("./AsyncComponent.vue")\n)\n</script>',
        },
        {
          command: 'Transitions',
          description: 'Animate component transitions',
          usage: '<Transition> component',
          example: '<template>\n  <div>\n    <button @click="show = !show">Toggle</button>\n    \n    <Transition name="fade">\n      <p v-if="show">Hello</p>\n    </Transition>\n  </div>\n</template>\n\n<style>\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s ease;\n}\n\n.fade-enter-from,\n.fade-leave-to {\n  opacity: 0;\n}\n</style>',
        },
        {
          command: 'Transition Group',
          description: 'Animate list transitions',
          usage: '<TransitionGroup> component',
          example: '<template>\n  <div>\n    <button @click="addItem">Add Item</button>\n    \n    <TransitionGroup name="list" tag="ul">\n      <li v-for="item in items" :key="item.id">\n        {{ item.text }}\n      </li>\n    </TransitionGroup>\n  </div>\n</template>\n\n<style>\n.list-enter-active,\n.list-leave-active {\n  transition: all 0.5s ease;\n}\n.list-enter-from,\n.list-leave-to {\n  opacity: 0;\n  transform: translateX(30px);\n}\n.list-move {\n  transition: transform 0.5s ease;\n}\n</style>',
        },
        {
          command: 'Provide/Inject',
          description: 'Dependency injection pattern',
          usage: 'provide() and inject()',
          example: '// Parent component\n<script setup>\nimport { provide, ref } from "vue"\n\nconst theme = ref("dark")\nprovide("theme", theme)\nprovide("updateTheme", (newTheme) => {\n  theme.value = newTheme\n})\n</script>\n\n// Child component\n<script setup>\nimport { inject } from "vue"\n\nconst theme = inject("theme")\nconst updateTheme = inject("updateTheme")\n</script>',
        },
        {
          command: 'Custom Directives',
          description: 'Create custom directives',
          usage: 'app.directive()',
          example: 'import { createApp } from "vue"\n\nconst app = createApp({})\n\n// Global directive\napp.directive("focus", {\n  mounted(el) {\n    el.focus()\n  }\n})\n\n// Directive with hooks\napp.directive("color", {\n  mounted(el, binding) {\n    el.style.color = binding.value\n  },\n  updated(el, binding) {\n    el.style.color = binding.value\n  }\n})\n\n// Usage\n<template>\n  <input v-focus>\n  <p v-color="\'red\'">Red text</p>\n</template>',
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'v-memo',
          description: 'Memoize template sections',
          usage: 'v-memo directive',
          example: '<template>\n  <div v-memo="[items.length]">\n    <p>Expensive rendering: {{ items.length }}</p>\n    <div v-for="item in items" :key="item.id">\n      {{ item.name }}\n    </div>\n  </div>\n</template>',
        },
        {
          command: 'v-once',
          description: 'Render once and skip updates',
          usage: 'v-once directive',
          example: '<template>\n  <div>\n    <span v-once>This will never change: {{ message }}</span>\n    <button @click="message = "Updated"">Update Message</button>\n    \n    <!-- Static content -->\n    <div v-once>\n      <h1>Static Title</h1>\n      <p>Static content that won\'t re-render</p>\n    </div>\n  </div>\n</template>',
        },
        {
          command: 'Async Components',
          description: 'Lazy load components',
          usage: 'defineAsyncComponent()',
          example: '<script setup>\nimport { defineAsyncComponent } from "vue"\n\nconst AsyncComponent = defineAsyncComponent(() => \n  import("./HeavyComponent.vue")\n)\n\n// With options\nconst AsyncComponentWithOptions = defineAsyncComponent({\n  loader: () => import("./HeavyComponent.vue"),\n  loadingComponent: LoadingComponent,\n  errorComponent: ErrorComponent,\n  delay: 200,\n  timeout: 3000\n})\n</script>',
        },
        {
          command: 'KeepAlive',
          description: 'Cache component instances',
          usage: '<KeepAlive> component',
          example: '<template>\n  <div>\n    <button @click="currentTab = "Tab1"">Tab 1</button>\n    <button @click="currentTab = "Tab2"">Tab 2</button>\n    \n    <KeepAlive>\n      <component :is="currentTab"></component>\n    </KeepAlive>\n  </div>\n</template>\n\n<script setup>\nimport { ref, shallowRef } from "vue"\nimport Tab1 from "./Tab1.vue"\nimport Tab2 from "./Tab2.vue"\n\nconst currentTab = shallowRef("Tab1")\n</script>',
        },
        {
          command: 'Computed Property Caching',
          description: 'Optimize computed properties',
          usage: 'computed with caching',
          example: '<script setup>\nimport { ref, computed } from "vue"\n\nconst items = ref([])\n\n// Expensive computation\nconst expensiveValue = computed(() => {\n  console.log("Computing expensive value...")\n  return items.value.reduce((sum, item) => sum + item.value, 0)\n})\n\n// Computed with getter only (read-only)\nconst readOnly = computed(() => {\n  return items.value.length > 0\n})\n\n// Computed with getter and setter\nconst searchQuery = ref("")\nconst filteredItems = computed({\n  get() {\n    return items.value.filter(item => \n      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())\n    )\n  },\n  set(value) {\n    // Custom setter logic\n    searchQuery.value = value\n  }\n})\n</script>',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Vue 3 TypeScript Integration',
      commands: [
        {
          command: 'TypeScript Setup',
          description: 'Vue 3 with TypeScript',
          usage: 'npm create vue@latest -- --typescript',
          example: '<script setup lang="ts">\nimport { ref, computed } from "vue"\n\ninterface User {\n  id: number\n  name: string\n  email: string\n}\n\nconst user = ref<User>({\n  id: 1,\n  name: "John Doe",\n  email: "john@example.com"\n})\n\nconst userName = computed<string>(() => user.value.name)\n</script>',
        },
        {
          command: 'Typed Props',
          description: 'TypeScript props with Composition API',
          usage: 'defineProps<T>()',
          example: '<script setup lang="ts">\ninterface Props {\n  msg: string\n  count?: number\n  user?: {\n    name: string\n    age: number\n  }\n}\n\n// With runtime props\nconst props = withDefaults(defineProps<Props>(), {\n  count: 0,\n  user: () => ({ name: "", age: 0 })\n})\n\n// Or just compile-time\nconst props = defineProps<Props>()\n</script>',
        },
        {
          command: 'Typed Emits',
          description: 'TypeScript emits with Composition API',
          usage: 'defineEmits<T>()',
          example: '<script setup lang="ts">\ninterface Emits {\n  (e: "change", id: number): void\n  (e: "update", value: string): void\n  (e: "delete", id: number): void\n}\n\nconst emit = defineEmits<Emits>()\n\nfunction handleChange() {\n  emit("change", 123)\n}\n\nfunction handleUpdate() {\n  emit("update", "new value")\n}\n</script>',
        },
        {
          command: 'Typed Composables',
          description: 'Create typed composables',
          usage: 'Generic composables with TypeScript',
          example: '<script setup lang="ts">\n// Generic composable\nfunction useFetch<T>(url: string) {\n  const data = ref<T | null>(null)\n  const error = ref<string | null>(null)\n  const loading = ref(false)\n  \n  const fetchData = async () => {\n    loading.value = true\n    error.value = null\n    \n    try {\n      const response = await fetch(url)\n      data.value = await response.json()\n    } catch (err) {\n      error.value = err instanceof Error ? err.message : "Unknown error"\n    } finally {\n      loading.value = false\n    }\n  }\n  \n  return { data, error, loading, fetchData }\n}\n\n// Usage\ninterface Post {\n  id: number\n  title: string\n  content: string\n}\n\nconst { data: post, loading } = useFetch<Post>("/api/post/1")\n</script>',
        },
        {
          command: 'Typed Pinia Stores',
          description: 'TypeScript with Pinia',
          usage: 'Typed store definitions',
          example: 'import { defineStore } from "pinia"\n\ninterface User {\n  id: number\n  name: string\n  email: string\n}\n\ninterface UserState {\n  user: User | null\n  loading: boolean\n  error: string | null\n}\n\nexport const useUserStore = defineStore("user", {\n  state: (): UserState => ({\n    user: null,\n    loading: false,\n    error: null\n  }),\n  getters: {\n    isAuthenticated: (state): boolean => state.user !== null,\n    userName: (state): string => state.user?.name ?? ""\n  },\n  actions: {\n    async fetchUser(id: number): Promise<void> {\n      this.loading = true\n      try {\n        const response = await fetch(`/api/users/${id}`)\n        this.user = await response.json()\n      } catch (error) {\n        this.error = error instanceof Error ? error.message : "Failed to fetch user"\n      } finally {\n        this.loading = false\n      }\n    }\n  }\n})',
        },
      ],
    },
    {
      title: 'Vue Testing',
      commands: [
        {
          command: 'Vue Test Utils Setup',
          description: 'Setup testing with Vue Test Utils',
          usage: 'npm install @vue/test-utils vitest',
          example: 'import { describe, it, expect } from "vitest"\nimport { mount } from "@vue/test-utils"\nimport Counter from "../components/Counter.vue"\n\ndescribe("Counter.vue", () => {\n  it("renders initial count", () => {\n    const wrapper = mount(Counter, {\n      props: { initial: 10 }\n    })\n    expect(wrapper.text()).toContain("10")\n  })\n  \n  it("increments count when button is clicked", async () => {\n    const wrapper = mount(Counter)\n    const button = wrapper.find("button")\n    \n    await button.trigger("click")\n    expect(wrapper.text()).toContain("1")\n  })\n})',
        },
        {
          command: 'Testing Composition API',
          description: 'Test components with script setup',
          usage: 'mount with Composition API',
          example: 'import { mount } from "@vue/test-utils"\nimport { ref } from "vue"\nimport MyComponent from "../MyComponent.vue"\n\ndescribe("MyComponent", () => {\n  it("works with composition API", () => {\n    const wrapper = mount(MyComponent, {\n      global: {\n        provide: {\n          theme: ref("dark")\n        }\n      }\n    })\n    \n    expect(wrapper.find(".theme").text()).toBe("dark")\n  })\n})',
        },
        {
          command: 'Testing Async Components',
          description: 'Test async operations',
          usage: 'async testing patterns',
          example: 'import { mount } from "@vue/test-utils"\nimport { nextTick } from "vue"\nimport AsyncComponent from "../AsyncComponent.vue"\n\ndescribe("AsyncComponent", () => {\n  it("loads data asynchronously", async () => {\n    const wrapper = mount(AsyncComponent)\n    \n    expect(wrapper.text()).toContain("Loading...")\n    \n    await nextTick()\n    await wrapper.vm.$nextTick()\n    \n    expect(wrapper.text()).toContain("Data loaded")\n  })\n})',
        },
        {
          command: 'Testing with Mocks',
          description: 'Mock dependencies in tests',
          usage: 'vi.mock() for mocking',
          example: 'import { mount } from "@vue/test-utils"\nimport { vi } from "vitest"\nimport ComponentWithApi from "../ComponentWithApi.vue"\n\n// Mock API\nvi.mock("../api", () => ({\n  fetchUser: vi.fn().mockResolvedValue({ name: "John" })\n}))\n\ndescribe("ComponentWithApi", () => {\n  it("loads and displays user data", async () => {\n    const wrapper = mount(ComponentWithApi)\n    \n    await new Promise(resolve => setTimeout(resolve, 0))\n    await wrapper.vm.$nextTick()\n    \n    expect(wrapper.text()).toContain("John")\n  })\n})',
        },
      ],
    },
    {
      title: 'Vue Best Practices and Patterns',
      commands: [
        {
          command: 'Component Naming',
          description: 'Best practices for component names',
          usage: 'PascalCase for components',
          example: '// Good component names\nUserProfile.vue\nDataTable.vue\nLoginForm.vue\nSearchResults.vue\n\n// Avoid\nuserProfile.vue\ndata-table.vue\n\n// In template\n<template>\n  <UserProfile />\n  <DataTable />\n</template>',
        },
        {
          command: 'File Organization',
          description: 'Organize Vue project files',
          usage: 'Directory structure best practices',
          example: 'src/\n├── assets/\n├── components/\n│   ├── common/\n│   │   ├── BaseButton.vue\n│   │   └── BaseInput.vue\n│   └── features/\n│       ├── UserProfile/\n│       └── SearchBar/\n├── composables/\n│   ├── useAuth.js\n│   └── useApi.js\n├── stores/\n│   ├── auth.js\n│   └── user.js\n├── views/\n├── router/\n├── utils/\n└── types/',
        },
        {
          command: 'Composable Patterns',
          description: 'Create reusable composables',
          usage: 'Composable best practices',
          example: '// composables/useCounter.js\nimport { ref, computed } from "vue"\n\nexport function useCounter(initialValue = 0) {\n  const count = ref(initialValue)\n  \n  const doubleCount = computed(() => count.value * 2)\n  \n  function increment() {\n    count.value++\n  }\n  \n  function decrement() {\n    count.value--\n  }\n  \n  function reset() {\n    count.value = initialValue\n  }\n  \n  return {\n    count,\n    doubleCount,\n    increment,\n    decrement,\n    reset\n  }\n}\n\n// Usage in component\n<script setup>\nimport { useCounter } from "@/composables/useCounter"\n\nconst { count, doubleCount, increment } = useCounter(10)\n</script>',
        },
        {
          command: 'Error Handling',
          description: 'Handle errors in Vue applications',
          usage: 'Error boundaries and error handling',
          example: '<script setup>\nimport { ref, onErrorCaptured } from "vue"\n\nconst error = ref(null)\n\nonErrorCaptured((err) => {\n  error.value = err\n  console.error("Error captured:", err)\n  // Return false to prevent error from propagating\n  return false\n})\n\nfunction retry() {\n  error.value = null\n  // Retry logic\n}\n</script>\n\n<template>\n  <div>\n    <div v-if="error" class="error">\n      <p>Something went wrong: {{ error.message }}</p>\n      <button @click="retry">Retry</button>\n    </div>\n    \n    <slot v-else></slot>\n  </div>\n</template>',
        },
        {
          command: 'Performance Monitoring',
          description: 'Monitor Vue app performance',
          usage: 'Performance tools and techniques',
          example: 'import { createApp } from "vue"\nimport App from "./App.vue"\n\nconst app = createApp(App)\n\n// Enable performance tracking in development\nif (import.meta.env.DEV) {\n  app.config.performance = true\n}\n\n// Custom performance tracking\napp.config.warnHandler = (msg, instance, trace) => {\n  console.warn(`[Vue Warn]: ${msg}`, trace)\n}\n\napp.config.errorHandler = (err, instance, info) => {\n  console.error(`[Vue Error]: ${err}`, info)\n  // Send error to monitoring service\n  errorReporting.captureException(err, {\n    contexts: {\n      vue: {\n        componentName: instance?.$options.name,\n        lifecycle: info\n      }\n    }\n  })\n}',
        },
        {
          command: 'Security Best Practices',
          description: 'Secure Vue applications',
          usage: 'Security considerations',
          example: '<script setup>\nimport { ref } from "vue"\n\n// Never use v-html with untrusted content\nconst safeHtml = ref("<strong>Safe HTML</strong>")\nconst unsafeHtml = ref("<script>alert("xss")</script>") // DANGEROUS!\n\n// Sanitize user input\nimport DOMPurify from "dompurify"\n\nconst userInput = ref("")\nconst sanitizedHtml = computed(() => {\n  return DOMPurify.sanitize(userInput.value)\n})\n\n// Validate props\nconst props = defineProps({\n  userContent: {\n    type: String,\n    validator: (value) => {\n      // Validate content\n      return !value.includes("<script>")\n    }\n  }\n})\n</script>\n\n<template>\n  <!-- Good: Escaped by default -->\n  <p>{{ userInput }}</p>\n  \n  <!-- Bad: Potentially dangerous -->\n  <div v-html="unsafeHtml"></div>\n  \n  <!-- Good: Sanitized HTML -->\n  <div v-html="sanitizedHtml"></div>\n</template>',
        },
      ],
    },
    {
      title: 'Vue 3.4+ Latest Features',
      commands: [
        {
          command: 'defineModel Simplification',
          description: 'Simplified v-model implementation',
          usage: 'defineModel() without props/emits',
          example: '<script setup>\n// Before Vue 3.3\nconst props = defineProps<{ modelValue: string }>()\nconst emit = defineEmits<{ (e: "update:modelValue", value: string): void }>()\n\n// After Vue 3.3+\nconst modelValue = defineModel<string>()\n\n// Multiple models\nconst title = defineModel("title", { type: String, required: true })\nconst count = defineModel("count", { type: Number, default: 0 })\n</script>',
        },
        {
          command: 'Improved SSR',
          description: 'Better server-side rendering support',
          usage: 'useId, onServerPrefetch',
          example: '<script setup>\nimport { useId, onServerPrefetch } from "vue"\n\n// Generate unique IDs\nconst uniqueId = useId()\n\n// Server prefetch data\nconst data = ref(null)\n\nonServerPrefetch(async () => {\n  data.value = await fetch("/api/data").then(r => r.json())\n})\n</script>',
        },
        {
          command: 'Performance Improvements',
          description: 'Vue 3.4+ performance optimizations',
          usage: 'faster reactivity, template compilation',
          example: '<script setup>\n// Faster template compilation\n// Improved reactivity system\n// Better TypeScript support\n// Reduced bundle size\n\n// Example of optimized template\n<template>\n  <div v-for="item in items" :key="item.id">\n    {{ item.name }}\n  </div>\n</template>\n\n<script setup>\n// More efficient reactivity\nconst items = ref([])\n// Vue 3.4+ optimizes this automatically\n</script>',
        },
        {
          command: 'DevTools Integration',
          description: 'Enhanced Vue DevTools support',
          usage: 'timeline, components inspector',
          example: '<script setup>\n// DevTools automatically detects:\n// - Component hierarchy\n// - State changes\n// - Performance timeline\n// - Event tracking\n\n// Manual DevTools integration\nif (import.meta.env.DEV) {\n  window.__VUE_DEVTOOLS_GLOBAL_HOOK__?.on("app:init", (app) => {\n    console.log("Vue DevTools connected")\n  })\n}\n</script>',
        },
      ],
    },
    {
      title: 'Vue Ecosystem and Tools',
      commands: [
        {
          command: 'Vue DevTools',
          description: 'Browser extension for debugging',
          usage: 'Install Vue DevTools extension',
          example: '// Enable DevTools in production\nimport { createApp } from "vue"\n\nconst app = createApp(App)\n\n// DevTools configuration\napp.config.devtools = true\napp.config.performance = true\n\n// Component debugging\n<script setup>\nimport { onMounted, getCurrentInstance } from "vue"\n\nonMounted(() => {\n  const instance = getCurrentInstance()\n  console.log("Component instance:", instance)\n  \n  // Access component for debugging\n  if (import.meta.env.DEV) {\n    window.__VUE_INSTANCE__ = instance\n  }\n})\n</script>',
        },
        {
          command: 'Vue CLI Commands',
          description: 'Common Vue CLI commands',
          usage: 'vue-cli-service commands',
          example: '# Serve in development\nnpm run serve\n\n# Build for production\nnpm run build\n\n# Run tests\nnpm run test:unit\n\n# Lint and fix files\nnpm run lint\n\n# Start development server with specific port\nnpm run serve -- --port 8080\n\n# Build with specific mode\nnpm run build -- --mode staging',
        },
        {
          command: 'Vite Configuration',
          description: 'Configure Vite for Vue projects',
          usage: 'vite.config.js',
          example: 'import { defineConfig } from "vite"\nimport vue from "@vitejs/plugin-vue"\nimport { resolve } from "path"\n\nexport default defineConfig({\n  plugins: [vue()],\n  resolve: {\n    alias: {\n      "@": resolve(__dirname, "src")\n    }\n  },\n  server: {\n    port: 3000,\n    open: true\n  },\n  build: {\n    outDir: "dist",\n    sourcemap: true\n  },\n  define: {\n    __VUE_OPTIONS_API__: JSON.stringify(true),\n    __VUE_PROD_DEVTOOLS__: JSON.stringify(false)\n  }\n})',
        },
        {
          command: 'Environment Variables',
          description: 'Use environment variables in Vue',
          usage: '.env files and import.meta.env',
          example: '# .env.development\nVITE_API_URL=http://localhost:3000/api\nVITE_APP_TITLE=My App (Dev)\n\n# .env.production\nVITE_API_URL=https://api.myapp.com\nVITE_APP_TITLE=My App\n\n# In component\n<script setup>\nconst apiUrl = import.meta.env.VITE_API_URL\nconst appTitle = import.meta.env.VITE_APP_TITLE\n\nconsole.log("API URL:", apiUrl)\nconsole.log("App Title:", appTitle)\n</script>',
        },
        {
          command: 'Popular Vue Libraries',
          description: 'Essential Vue ecosystem libraries',
          usage: 'Install and use popular libraries',
          example: '# UI Libraries\nnpm install element-plus\nnpm install ant-design-vue\nnpm install vuetify\nnpm install primevue\nnpm install quasar\n\n# Utilities\nnpm install lodash-es\nnpm install dayjs\nnpm install axios\nnpm install @vueuse/core\n\n# Development\nnpm install @types/node\nnpm install sass\nnpm install eslint\nnpm install prettier\nnpm install @vitest/coverage-vue\n\n# Usage example\n<script setup>\nimport { ElButton, ElMessage } from "element-plus"\nimport { useLocalStorage, useMouse } from "@vueuse/core"\nimport axios from "axios"\nimport { debounce } from "lodash-es"\n\nconst { x, y } = useMouse()\nconst storage = useLocalStorage("key", "default")\n\nconst handleClick = debounce(() => {\n  ElMessage.success("Debounced click!")\n}, 300)\n</script>',
        },
        {
          command: 'Vue 3 Modern Tooling',
          description: 'Latest Vue development tools',
          usage: 'VueUse, Vitest, Vue Test Utils',
          example: '# VueUse - Composition utilities\nnpm install @vueuse/core\n\n# Testing\nnpm install vitest @vue/test-utils\nnpm install @vitest/coverage-vue\n\n# TypeScript support\nnpm install vue-tsc --save-dev\n\n# State management alternatives\nnpm install valtio\nnpm install zustand\n\n# Example with VueUse\n<script setup>\nimport {\n  useStorage,\n  useDark,\n  useToggle,\n  useFetch,\n  useIntervalFn\n} from "@vueuse/core"\n\nconst isDark = useDark()\nconst toggleDark = useToggle(isDark)\n\nconst { data, error } = useFetch("/api/data").json()\n\nconst storage = useStorage("vue-use", { count: 0 })\n</script>',
        },
      ],
    },
    {
      title: 'Nuxt 3 Latest Features',
      commands: [
        {
          command: 'Nuxt 3.8+ Features',
          description: 'Latest Nuxt improvements',
          usage: 'Extended navigation, payload extraction',
          example: '# Extended navigation\nnavigateTo({\n  path: "/search",\n  query: { q: "vue" },\n  external: true,\n  open: {\n    target: "_blank"\n  }\n})\n\n# Payload extraction\nexport const payload = {\n  data: await $fetch("/api/data")\n}',
        },
        {
          command: 'Nuxt DevTools',
          description: 'Integrated development tools',
          usage: 'nuxt devtools',
          example: '# Auto-enabled in development\n# Features:\n# - Component inspector\n# - Module analysis\n# - Performance monitoring\n# - Route visualization\n\n# Manual configuration\nexport default defineNuxtConfig({\n  devtools: {\n    enabled: true,\n    timeline: {\n      enabled: true\n    }\n  }\n})',
        },
        {
          command: 'Nuxt 3 Server Components',
          description: 'Experimental server components',
          usage: '.server.vue components',
          example: 'components/MyServerComponent.server.vue\n<template>\n  <div>\n    <!-- Server-side only -->\n    <h1>{{ serverData.title }}</h1>\n    <p>Processed at: {{ new Date().toISOString() }}</p>\n  </div>\n</template>\n\n<script setup>\n// Server-side only code\nconst serverData = await $fetch("/api/data")\n</script>',
        },
        {
          command: 'Nuxt 3 Hybrid Rendering',
          description: 'Mixed rendering modes',
          usage: 'route rules for rendering',
          example: 'nuxt.config.ts\nexport default defineNuxtConfig({\n  routeRules: {\n    "/": { prerender: true },\n    "/admin/**": { ssr: false },\n    "/api/**": { cors: true },\n    "/blog/**": { isr: 60 } // 60 seconds\n  }\n})',
        },
        {
          command: 'Nuxt 3 Database Integration',
          description: 'Built-in database support',
          usage: 'Nuxt hub, Nitro storage',
          example: '# Using Nuxt Hub\nexport default defineNuxtConfig({\n  modules: ["@nuxthub/core"]\n})\n\n# Nitro storage\nconst storage = useStorage()\nawait storage.setItem("key", "value")\nconst value = await storage.getItem("key")\n\n# Database queries\nconst db = useDatabase()\nconst users = await db.sql`SELECT * FROM users`',
        },
      ],
    },
  ],
};
