import { Triangle } from 'lucide-react';

export const vueCheatsheet = {
  id: 'vue',
  name: 'Vue.js',
  description: 'Vue 3 + Vite/Nuxt essentials (Composition + Options API)',
  icon: Triangle,
  colorTheme: 'green' as const,
  sections: [
    {
      title: 'Project Setup & Tooling',
      commands: [
        {
          command: 'Scaffold projects',
          description: 'Create Vue 3 apps with Vite or Nuxt',
          usage: 'npm create vue@latest my-app -- --typescript\nnpx nuxi init my-nuxt-app',
          example: 'npm install\nnpm run dev\nnpm run build && npm run preview',
        },
        {
          command: 'SFC structure',
          description: 'Single File Components with `<script setup>`',
          usage: '<template>...</template>\n<script setup lang="ts">\nconst msg = "Hello"\n</script>\n<style scoped>...</style>',
          example: 'defineProps<{ title: string }>();\nconst count = ref(0);\nconst doubled = computed(() => count.value * 2);',
        },
        {
          command: 'Aliases & env',
          description: 'Use Vite alias `@` and env vars',
          usage: 'import Comp from "@/components/Comp.vue";\nconst api = import.meta.env.VITE_API_URL;',
          example: 'VITE_API_URL=https://api.example.com\nnpm run dev -- --mode staging',
        },
      ],
    },
    {
      title: 'Templates & Directives',
      commands: [
        {
          command: 'Interpolation & HTML',
          description: 'Escape by default; opt-in raw HTML',
          usage: '<h1>{{ title }}</h1>\n<div v-html="rawHtml"></div>',
          example: '<p>{{ price.toFixed(2) }}</p>',
        },
        {
          command: 'Class & style binding',
          description: 'Object/array bindings with conditions',
          usage: '<div :class=\"{ active: isActive, error: hasError }\" />\n<div :style=\"[{ color }, { fontSize: size + \'px\' }]\" />',
          example: '<button :class=\"[btnClass, { loading }]\">Save</button>',
        },
        {
          command: 'Conditionals & lists',
          description: 'Render control with keys',
          usage: '<div v-if=\"ok\">Yes</div><div v-else>No</div>\n<ul><li v-for=\"item in items\" :key=\"item.id\">{{ item.name }}</li></ul>',
          example: '<div v-show=\"expanded\">Toggled with display</div>',
        },
        {
          command: 'Events & modifiers',
          description: 'Listen and prevent/stop as needed',
          usage: '<button @click.prevent=\"save\">Save</button>\n<input @keyup.enter=\"submit\" />\n<form @submit.stop.prevent=\"submit\" />',
          example: '<div @click.self=\"close\" @scroll.passive=\"onScroll\">...</div>',
        },
      ],
    },
    {
      title: 'Reactivity Core',
      commands: [
        {
          command: 'State refs & reactive objects',
          description: 'Create reactive primitives',
          usage: 'const count = ref(0);\nconst user = reactive({ name: "Ada", age: 32 });',
          example: 'function inc() { count.value++; }\nconst name = toRef(user, "name");',
        },
        {
          command: 'Derived data',
          description: 'Compute values efficiently',
          usage: 'const fullName = computed(() => `${user.first} ${user.last}`);',
          example: 'const sorted = computed(() => [...items.value].sort(byDate));',
        },
        {
          command: 'Watchers',
          description: 'React to specific sources',
          usage: 'watch(() => props.id, async (id, prev) => { if (id !== prev) await load(id); });\nwatchEffect(() => console.log(form.value));',
          example: 'const stop = watch(search, debounce(fetchResults, 200));\nonUnmounted(stop);',
        },
        {
          command: 'Advanced refs',
          description: 'Control tracking depth and exposure',
          usage: 'const shallow = shallowRef({ heavy: true });\nconst raw = markRaw(thirdPartyInstance);\nconst custom = customRef((track, trigger) => { /* debounce */ });',
          example: 'const { foo, bar } = toRefs(reactiveObj);\nconst value = toValue(maybeRef);',
        },
      ],
    },
    {
      title: 'Components: Props, Emits, Slots',
      commands: [
        {
          command: 'Props & emits (TS)',
          description: 'Typed contracts in `<script setup>`',
          usage: 'const props = defineProps<{ msg: string; count?: number }>();\nconst emit = defineEmits<{ (e: "save", payload: FormData): void }>();',
          example: 'emit("save", formData);\nconst title = computed(() => props.msg);',
        },
        {
          command: 'Component v-model',
          description: 'Use modelValue/update:modelValue convention',
          usage: '<Child v-model=\"value\" />\n// Child\nconst props = defineProps<{ modelValue: string }>();\nconst emit = defineEmits([\"update:modelValue\"]);\nconst onInput = (v: string) => emit(\"update:modelValue\", v);',
          example: '<Modal v-model:open=\"isOpen\" v-model:title.trim=\"title\" />',
        },
        {
          command: 'Slots & scoped slots',
          description: 'Expose data to parents via slot props',
          usage: '<slot />\n<slot name=\"actions\" />\n<template #item=\"{ row }\">\n  <span>{{ row.name }}</span>\n</template>',
          example: '<Card>\n  <template #header>Title</template>\n  Body\n  <template #footer>CTA</template>\n</Card>',
        },
        {
          command: 'Expose & attrs',
          description: 'Expose methods to parent refs; forward attrs',
          usage: 'defineExpose({ focus });\nconst attrs = useAttrs(); // spread onto root element',
          example: '<input ref=\"input\" />\n// parent: const modal = ref(); modal.value?.focus();',
        },
      ],
    },
    {
      title: 'Lifecycle & Effects',
      commands: [
        {
          command: 'Mount/unmount hooks',
          description: 'Run on component lifecycle',
          usage: 'onMounted(fetchData);\nonBeforeUnmount(cleanup);\nonUpdated(runAfterRender);',
          example: 'onMounted(() => {\n  const id = setInterval(tick, 1000);\n  onUnmounted(() => clearInterval(id));\n});',
        },
        {
          command: 'Render diagnostics',
          description: 'Track reactive dependencies',
          usage: 'onRenderTracked(e => console.debug(e));\nonRenderTriggered(e => console.debug(e));',
          example: 'onErrorCaptured((err) => { console.error(err); return false; });',
        },
      ],
    },
    {
      title: 'Routing (Vue Router 4)',
      commands: [
        {
          command: 'Router setup',
          description: 'Create router with history mode',
          usage: 'const router = createRouter({\n  history: createWebHistory(),\n  routes: [\n    { path: "/", component: Home },\n    { path: "/user/:id", component: () => import("@/views/User.vue"), props: true },\n    { path: "/:pathMatch(.*)*", component: NotFound }\n  ],\n});',
          example: 'app.use(router);',
        },
        {
          command: 'Navigation & params',
          description: 'Programmatic navigation and props',
          usage: 'const route = useRoute();\nconst router = useRouter();\nrouter.push({ name: "user", params: { id: 123 } });',
          example: 'const id = computed(() => Number(route.params.id));',
        },
        {
          command: 'Guards & meta',
          description: 'Protect routes and set titles',
          usage: 'router.beforeEach((to, _from, next) => {\n  if (to.meta.requiresAuth && !isAuthed()) return next("/login");\n  next();\n});',
          example: 'router.afterEach((to) => document.title = to.meta.title ?? "App");',
        },
      ],
    },
    {
      title: 'State Management (Pinia)',
      commands: [
        {
          command: 'Define store',
          description: 'State + getters + actions',
          usage: 'import { defineStore } from "pinia";\nexport const useUser = defineStore("user", {\n  state: () => ({ name: "", token: "" }),\n  getters: { isAuthed: (s) => !!s.token },\n  actions: { setUser(name, token) { this.name = name; this.token = token; } },\n});',
          example: 'const user = useUser();\nuser.setUser("Ada", "token");',
        },
        {
          command: 'Store usage in components',
          description: 'Use directly or with setup stores',
          usage: 'const cart = useCartStore();\nconst total = computed(() => cart.total);\ncart.add(item);',
          example: 'const { items } = storeToRefs(cart);',
        },
        {
          command: 'Persistence & plugins',
          description: 'Persist state or add helpers',
          usage: 'import persist from \"pinia-plugin-persistedstate\";\npinia.use(persist);\n// or custom pinia.use((ctx) => { ... });',
          example: 'defineStore("settings", { persist: true, state: () => ({ theme: \"dark\" }) });',
        },
      ],
    },
    {
      title: 'Async, Data & Suspense',
      commands: [
        {
          command: 'Fetching in setup',
          description: 'Load data with cancellation',
          usage: 'const ac = new AbortController();\nonBeforeUnmount(() => ac.abort());\nconst data = await fetch(url, { signal: ac.signal }).then(r => r.json());',
          example: 'const state = ref({ loading: true });\nonMounted(async () => {\n  state.value = { loading: false, data: await load() };\n});',
        },
        {
          command: 'Suspense boundaries',
          description: 'Show fallback while async setup resolves',
          usage: '<Suspense>\n  <AsyncComp />\n  <template #fallback>Loading...</template>\n</Suspense>',
          example: 'const AsyncComp = defineAsyncComponent(() => import("./Heavy.vue"));',
        },
        {
          command: 'Lazy components',
          description: 'Control retries, delays, and errors',
          usage: 'defineAsyncComponent({\n  loader: () => import("./Chart.vue"),\n  delay: 200,\n  timeout: 5000,\n  onError(error, retry, fail, attempts) {\n    if (attempts <= 3) retry(); else fail();\n  }\n});',
          example: '<component :is=\"dynamicComp\" />',
        },
      ],
    },
    {
      title: 'Transitions, Teleport & Cache',
      commands: [
        {
          command: 'Element transitions',
          description: 'CSS-powered enter/leave',
          usage: '<Transition name=\"fade\">\n  <div v-if=\"show\" />\n</Transition>\n/* CSS */\n.fade-enter-active, .fade-leave-active { transition: opacity .2s; }\n.fade-enter-from, .fade-leave-to { opacity: 0; }',
          example: '<Transition mode=\"out-in\"><Component :is=\"view\" /></Transition>',
        },
        {
          command: 'List transitions',
          description: 'Animate reorders',
          usage: '<TransitionGroup name=\"list\" tag=\"ul\">\n  <li v-for=\"item in items\" :key=\"item.id\">{{ item.name }}</li>\n</TransitionGroup>',
          example: '.list-move { transition: transform .3s ease; }',
        },
        {
          command: 'KeepAlive caching',
          description: 'Cache dynamic components by name',
          usage: '<KeepAlive include=\"User,Dashboard\">\n  <component :is=\"view\" />\n</KeepAlive>',
          example: '<KeepAlive :max=\"5\"><RouterView /></KeepAlive>',
        },
        {
          command: 'Teleport',
          description: 'Render content elsewhere in DOM',
          usage: '<Teleport to=\"body\">\n  <div class=\"modal\">...</div>\n</Teleport>',
          example: '<Teleport to=\"#modals\"><Dialog /></Teleport>',
        },
      ],
    },
    {
      title: 'Forms & Validation',
      commands: [
        {
          command: 'v-model modifiers',
          description: 'Trim, number, and lazy updates',
          usage: '<input v-model.trim=\"search\" />\n<input v-model.number=\"age\" />\n<input v-model.lazy=\"title\" />',
          example: '<input v-model=\"form.email\" type=\"email\" autocomplete=\"email\" />',
        },
        {
          command: 'Multiple v-models',
          description: 'Expose multiple controlled props',
          usage: 'defineProps<{ modelValue: string; open: boolean }>();\ndefineEmits([\"update:modelValue\", \"update:open\"]);',
          example: '<Combobox v-model=\"selected\" v-model:open=\"isOpen\" />',
        },
        {
          command: 'Client validation',
          description: 'Validate with computed errors or libs',
          usage: 'const schema = z.object({ email: z.string().email(), age: z.number().min(18) });\nconst result = schema.safeParse(form.value);',
          example: 'const errors = computed(() => !form.value.email ? { email: \"Email required\" } : {});',
        },
      ],
    },
    {
      title: 'Performance & Testing',
      commands: [
        {
          command: 'Render optimizations',
          description: 'Skip or memoize renders when possible',
          usage: '<div v-memo=\"[items.length]\">...</div>\n<div v-once>Static content</div>',
          example: '<KeepAlive><RouterView /></KeepAlive>',
        },
        {
          command: 'Devtools & profiling',
          description: 'Use Vue Devtools performance tab',
          usage: 'app.config.performance = true;\napp.config.devtools = true;',
          example: 'import.meta.env.DEV && app.config.warnHandler = (msg) => console.warn(msg);',
        },
        {
          command: 'Testing setup',
          description: 'Mount components with @vue/test-utils + vitest',
          usage: 'import { mount } from \"@vue/test-utils\";\nimport { describe, it, expect } from \"vitest\";\ndescribe(\"Comp\", () => {\n  it(\"renders\", () => {\n    const wrapper = mount(Comp, { props: { msg: \"hi\" } });\n    expect(wrapper.text()).toContain(\"hi\");\n  });\n});',
          example: 'Use createTestingPinia + createMemoryHistory router for store/router-aware components.',
        },
      ],
    },
    {
      title: 'Nuxt 3 Notes',
      commands: [
        {
          command: 'File-based routing',
          description: 'Pages and layouts from filesystem',
          usage: 'pages/index.vue -> "/"\npages/users/[id].vue -> "/users/:id"\nlayouts/default.vue wraps pages',
          example: '<script setup>definePageMeta({ middleware: [\"auth\"], layout: \"admin\" })</script>',
        },
        {
          command: 'Data fetching',
          description: 'Server/CSR-safe fetch composables',
          usage: 'const { data, pending, error } = await useAsyncData(\"users\", () => $fetch(\"/api/users\"));',
          example: 'const { data: post } = await useFetch(`/api/posts/${route.params.id}`);',
        },
        {
          command: 'Server routes & state',
          description: 'API routes and shared state',
          usage: 'server/api/users.get.ts exports defineEventHandler(async (event) => {...});\nconst count = useState(\"count\", () => 0);',
          example: 'export default defineNuxtRouteMiddleware((to) => { if (!auth()) return navigateTo(\"/login\"); });',
        },
      ],
    },
  ],
};
