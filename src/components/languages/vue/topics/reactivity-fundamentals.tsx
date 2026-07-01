'use client';

import React from 'react';
import { Zap, RefreshCw, Box, Target } from 'lucide-react';

export default function ReactivityFundamentals() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-yellow-100 dark:bg-yellow-950/30">
            <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Reactivity Fundamentals</h1>
            <p className="text-lg text-muted-foreground">Understanding Vue's reactive system</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">What is Reactivity?</h2>
        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <p className="text-lg leading-relaxed">
            Reactivity is a programming paradigm that allows automatic updates when data changes. In Vue.js, 
            the reactivity system tracks dependencies between data and the DOM, automatically updating the UI 
            when the underlying data changes.
          </p>
        </div>
      </section>

      {/* ref() vs reactive() */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">ref() vs reactive()</h2>
        
        {/* ref() */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</div>
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">Using ref()</h3>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <p className="mb-4"><code className="bg-blue-100 px-1">ref()</code> creates a reactive reference for any value type:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`import { ref } from 'vue'

// Primitive values
const count = ref(0)
const message = ref('Hello Vue!')

// Access value with .value
console.log(count.value) // 0
count.value = 1

// In templates, .value is unwrapped automatically
&lt;template&gt;
  &lt;div&gt;{{ count }}&lt;/div&gt;  // No .value needed!
&lt;/template&gt;`}</pre>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-blue-700 dark:text-blue-300">Best for:</span>
              </div>
              <ul className="text-sm text-slate-600 dark:text-slate-400 ml-6">
                <li>• Primitive values (string, number, boolean)</li>
                <li>• When you need to replace the entire value</li>
                <li>• Simple reactive state</li>
              </ul>
            </div>
          </div>
        </div>

        {/* reactive() */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">2</div>
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">Using reactive()</h3>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <p className="mb-4"><code className="bg-green-100 px-1">reactive()</code> creates a reactive proxy of an object:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`import { reactive } from 'vue'

// Objects and arrays
const state = reactive({
  count: 0,
  user: {
    name: 'John',
    age: 25
  },
  items: []
})

// Access properties directly
console.log(state.count) // 0
state.count = 1
state.user.name = 'Jane'
state.items.push('new item')

// In templates, access properties directly
&lt;template&gt;
  &lt;div&gt;{{ state.count }}&lt;/div&gt;
  &lt;div&gt;{{ state.user.name }}&lt;/div&gt;
&lt;/template&gt;`}</pre>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-green-500" />
                <span className="font-medium text-green-700 dark:text-green-300">Best for:</span>
              </div>
              <ul className="text-sm text-slate-600 dark:text-slate-400 ml-6">
                <li>• Objects and arrays</li>
                <li>• Complex state structures</li>
                <li>• When you need nested reactivity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-slate-700 rounded-lg">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Feature</th>
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">ref()</th>
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">reactive()</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2 font-medium">Value Access</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">.value needed</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Direct access</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2 font-medium">Template Usage</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Auto-unwrapped</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Direct access</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2 font-medium">Reassignment</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">✓ Supported</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">✗ Not supported</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2 font-medium">Value Types</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Any type</td>
                <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Objects only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Practical Examples</h2>
        
        {/* Counter Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Counter Component</h3>
          <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`&lt;script setup&gt;
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="decrement"&gt;-&lt;/button&gt;
    &lt;span&gt;{{ count }}&lt;/span&gt;
    &lt;button @click="increment"&gt;+&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;`}</pre>
            </div>
          </div>
        </div>

        {/* Form Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Form Component</h3>
          <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`&lt;script setup&gt;
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  console.log('Form submitted:', form)
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit.prevent="submitForm"&gt;
    &lt;input v-model="form.name" placeholder="Name"&gt;
    &lt;input v-model="form.email" placeholder="Email"&gt;
    &lt;textarea v-model="form.message" placeholder="Message"&gt;&lt;/textarea&gt;
    &lt;button type="submit"&gt;Submit&lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Common Patterns</h2>
        
        {/* Mixed Usage */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Mixed Usage</h3>
          <div className="bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
            <p className="mb-4">You can combine ref() and reactive() for optimal state management:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`&lt;script setup&gt;
import { ref, reactive } from 'vue'

// Use ref for primitive values
const loading = ref(false)
const error = ref(null)

// Use reactive for complex objects
const user = reactive({
  profile: {
    name: '',
    email: ''
  },
  preferences: {
    theme: 'light',
    notifications: true
  }
})

async function fetchUser() {
  loading.value = true
  error.value = null
  
  try {
    const response = await api.getUser()
    user.profile = response.data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
&lt;/script&gt;`}</pre>
            </div>
          </div>
        </div>

        {/* Destructuring */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Destructuring with toRefs()</h3>
          <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <p className="mb-4">When you need to destructure reactive objects while preserving reactivity:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`&lt;script setup&gt;
import { reactive, toRefs } from 'vue'

const state = reactive({
  count: 0,
  message: 'Hello',
  user: null
})

// This loses reactivity:
// const { count, message } = state

// This preserves reactivity:
const { count, message, user } = toRefs(state)

// Now you can use count.value, message.value, etc.
function increment() {
  count.value++
}
&lt;/script&gt;`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Considerations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Performance Considerations</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-green-400 bg-green-50 dark:bg-green-950/20 p-4 rounded">
            <h4 className="font-semibold text-green-800 dark:text-green-200">✅ Good Practices</h4>
            <ul className="text-sm text-green-700 dark:text-green-300 mt-2 space-y-1">
              <li>• Use ref() for primitive values</li>
              <li>• Use reactive() for objects with multiple properties</li>
              <li>• Use toRefs() when destructuring is needed</li>
              <li>• Keep reactive state as flat as possible</li>
            </ul>
          </div>
          <div className="border-l-4 border-red-400 bg-red-50 dark:bg-red-950/20 p-4 rounded">
            <h4 className="font-semibold text-red-800 dark:text-red-200">❌ Avoid These</h4>
            <ul className="text-sm text-red-700 dark:text-red-300 mt-2 space-y-1">
              <li>• Destructuring reactive objects directly</li>
              <li>• Nesting reactive objects too deeply</li>
              <li>• Using reactive() for primitive values</li>
              <li>• Reassigning entire reactive objects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <div className="bg-gradient-to-r from-yellow-50 to-green-50 dark:from-yellow-950/20 dark:to-green-950/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">✓</span>
              <span>Use <code className="bg-yellow-100 px-1">ref()</code> for primitive values and when reassignment is needed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">✓</span>
              <span>Use <code className="bg-yellow-100 px-1">reactive()</code> for objects and complex state</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">✓</span>
              <span>Remember to use <code className="bg-yellow-100 px-1">.value</code> with ref() in JavaScript</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">✓</span>
              <span>Use <code className="bg-yellow-100 px-1">toRefs()</code> when destructuring reactive objects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">✓</span>
              <span>Templates automatically unwrap refs - no .value needed!</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
