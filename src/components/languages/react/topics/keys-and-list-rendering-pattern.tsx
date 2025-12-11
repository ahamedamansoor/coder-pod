'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Lightbulb, CheckCircle2, Key, AlertTriangle, Zap, XCircle, List } from 'lucide-react';

export default function KeysAndListRenderingPattern() {
  const goodKeyCode = `// ✅ GOOD: Unique, stable IDs
const todos = [
  { id: 'todo-1', text: 'Learn React' },
  { id: 'todo-2', text: 'Build project' },
  { id: 'todo-3', text: 'Deploy app' }
];

function TodoList() {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>  {/* ✅ Stable unique key */}
          {todo.text}
        </li>
      ))}
    </ul>
  );
}`;

  const badKeyCode = `// ❌ BAD: Using array index
function TodoList() {
  const [todos, setTodos] = useState([
    'Learn React',
    'Build project',
    'Deploy app'
  ]);

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>  {/* ❌ Index causes bugs! */}
          {todo}
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

// Problem: When you delete item 1:
// - Item 2 becomes index 1 (was index 2)
// - Item 3 becomes index 2 (was index 3)
// React thinks items moved, causes re-renders and bugs!`;

  const whyKeysCode = `// Without keys, React can't track items
// Initial render: ['A', 'B', 'C']
// After adding 'D' at start: ['D', 'A', 'B', 'C']

// ❌ Without keys:
// React thinks: "Change A to D, B to A, C to B, add C"
// Destroys and recreates all components!

// ✅ With keys:
// React thinks: "Add D, keep A, B, C"
// Only creates one new component!

function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>  {/* React tracks by ID */}
          <input defaultValue={item.name} />
        </li>
      ))}
    </ul>
  );
}

// Without keys:
// - All inputs get recreated
// - User input is lost!

// With keys:
// - Only new item is created
// - Existing inputs preserved!`;

  const uuidCode = `// Generate unique IDs for items
import { v4 as uuidv4 } from 'uuid';

function AddTodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),  // ✅ Unique ID
        text: input,
        completed: false
      }
    ]);
    setInput('');
  };

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>  {/* ✅ Stable unique key */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Alternative: Use Date.now() + Math.random()
// id: Date.now() + '-' + Math.random()`;

  const rulesCode = `// KEY RULES FOR REACT KEYS

// ✅ Rule 1: Keys must be UNIQUE among siblings
const list1 = [
  <Item key="a" />,
  <Item key="b" />,
  <Item key="c" />  // ✅ All different
];

// ❌ DON'T: Duplicate keys
const list2 = [
  <Item key="a" />,
  <Item key="a" />,  // ❌ Duplicate!
  <Item key="b" />
];

// ✅ Rule 2: Keys must be STABLE (not change)
// Good: Database ID, UUID
const goodKey = item.id;  // ✅ Never changes

// Bad: Random number, array index when reordering
const badKey = Math.random();  // ❌ Changes every render!

// ✅ Rule 3: Keys don't need to be globally unique
function App() {
  return (
    <>
      <List1>
        <Item key="a" />  {/* OK */}
      </List1>
      <List2>
        <Item key="a" />  {/* OK - different parent */}
      </List2>
    </>
  );
}

// ✅ Rule 4: Don't use keys for anything else
// Keys are NOT passed as props!
function Item({ key }) {
  console.log(key);  // ❌ undefined!
}

// If you need the value, pass it separately:
<Item key={item.id} id={item.id} />`;

  const indexWhenOkCode = `// When is using INDEX as key acceptable?

// ✅ OK: Static list (never changes)
const items = ['Apple', 'Banana', 'Orange'];
items.map((item, index) => (
  <li key={index}>{item}</li>  // OK - list is static
));

// ✅ OK: Items never reordered, added, or removed
const months = ['Jan', 'Feb', 'Mar', 'Apr'];  // Fixed list
months.map((month, index) => (
  <option key={index}>{month}</option>  // OK
));

// ❌ NOT OK: Dynamic list
// - Items can be added/removed
// - Items can be reordered
// - Items have form inputs
// - Items have local state

// Use this rule:
// If your list can change → DON'T use index
// If your list is static forever → index is OK`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Key}
        category="React · Advanced Patterns"
        title="Keys and List Rendering"
        description="Master React keys for optimal list rendering, understand why keys matter, and learn best practices to avoid common pitfalls."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What are Keys */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Key className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What are Keys?"
              description="Unique identifiers for list items"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Keys</strong> help React identify which items in a list have changed, been added, or removed. They give items a <strong>stable identity</strong> across renders!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">🎯 Why Keys Matter</h4>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-green-600 dark:text-green-400">Performance:</strong> React can efficiently update only changed items instead of re-rendering the entire list
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-blue-600 dark:text-blue-400">State Preservation:</strong> Component state (like input values) is preserved when list order changes
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-orange-600 dark:text-orange-400">Bug Prevention:</strong> Prevents subtle bugs where wrong items get updated or removed
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Keys are React's Tracking System!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Think of keys like barcodes on products - they help React identify and track each item uniquely, even when the list changes!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Good vs Bad Keys */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-green-700 dark:text-green-300">✅ Good Keys</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Badge className="bg-green-500 mt-1">1</Badge>
                  <span><strong>Database IDs:</strong> item.id from your database</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="bg-green-500 mt-1">2</Badge>
                  <span><strong>UUIDs:</strong> Generated unique identifiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="bg-green-500 mt-1">3</Badge>
                  <span><strong>Unique attributes:</strong> user.email (if unique)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="bg-green-500 mt-1">4</Badge>
                  <span><strong>Stable values:</strong> Never change between renders</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-3">
                <XCircle className="w-7 h-7 text-red-600 dark:text-red-400" />
                <h3 className="text-xl font-bold text-red-700 dark:text-red-300">❌ Bad Keys</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Badge className="bg-red-500 mt-1">1</Badge>
                  <span><strong>Array index:</strong> When list can reorder/change</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="bg-red-500 mt-1">2</Badge>
                  <span><strong>Math.random():</strong> Changes every render!</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="bg-red-500 mt-1">3</Badge>
                  <span><strong>Date.now():</strong> Not unique for multiple items</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="bg-red-500 mt-1">4</Badge>
                  <span><strong>Duplicate values:</strong> Multiple items same key</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Good Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="✅ Correct: Using Stable IDs"
            description="Best practice for keys"
            size="lg"
          />
          <FrontendCodePreview
            title="List with Proper Keys - Live Demo"
            description="Add and remove items! Keys remain stable"
            colorTheme="green"
            react={`function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 'todo-1', text: 'Learn React', completed: false },
    { id: 'todo-2', text: 'Master Keys', completed: false },
    { id: 'todo-3', text: 'Build Project', completed: false }
  ]);
  const [input, setInput] = React.useState('');

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: 'todo-' + Date.now(),
        text: input,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-app">
      <h2>✅ Todo List (Good Keys)</h2>
      <p className="subtitle">Each item has unique, stable ID</p>

      <div className="add-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add new todo..."
        />
        <button onClick={addTodo} className="add-btn">Add</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)} className="delete-btn">
              ❌
            </button>
            <code className="key-display">key: {todo.id}</code>
          </li>
        ))}
      </ul>

      <div className="info">
        <p>💡 Try adding/removing items - keys stay stable!</p>
        <p>Total items: {todos.length}</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoList />);`}
            html={`<div id="root"></div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.todo-app {
  background: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

h2 {
  color: #10b981;
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.subtitle {
  color: #6b7280;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.add-section {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.add-section input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
}

.add-section input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.add-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.add-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.todo-list {
  list-style: none;
  space: 10px;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  margin-bottom: 10px;
  transition: all 0.2s;
}

.todo-item:hover {
  background: #f3f4f6;
  transform: translateX(5px);
}

.todo-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-item span {
  flex: 1;
  color: #374151;
  font-size: 15px;
}

.todo-item span.completed {
  text-decoration: line-through;
  color: #9ca3af;
}

.delete-btn {
  padding: 6px 12px;
  background: #fef2f2;
  border: 1px solid #ef4444;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.delete-btn:hover {
  background: #ef4444;
}

.key-display {
  font-size: 11px;
  color: #10b981;
  background: #d1fae5;
  padding: 4px 8px;
  border-radius: 6px;
}

.info {
  margin-top: 20px;
  padding: 15px;
  background: #d1fae5;
  border-radius: 12px;
  text-align: center;
}

.info p {
  color: #059669;
  font-size: 14px;
  margin-bottom: 5px;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .todo-app {
    background: #1f2937;
  }

  h2 {
    color: #6ee7b7;
  }

  .subtitle {
    color: #9ca3af;
  }

  .add-section input {
    background: #111827;
    border-color: #374151;
    color: #f3f4f6;
  }

  .add-section input:focus {
    border-color: #6ee7b7;
  }

  .todo-item {
    background: #111827;
  }

  .todo-item:hover {
    background: #1f2937;
  }

  .todo-item span {
    color: #e5e7eb;
  }

  .key-display {
    background: #064e3b;
    color: #6ee7b7;
  }

  .info {
    background: #064e3b;
  }

  .info p {
    color: #6ee7b7;
  }
}`}
          />
        </div>

        {/* Bad Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="❌ Wrong: Using Array Index"
            description="Common mistake with serious bugs"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Bad Keys Example"
            description="Why array index causes problems"
            language="javascript"
            colorTheme="red"
            code={badKeyCode}
            output={[
              '❌ Index changes when items reorder',
              '❌ Causes unnecessary re-renders',
              '❌ Can lose component state',
              '❌ Wrong items get updated',
              '',
              'Example bug:',
              '1. Type in input for item 2',
              '2. Delete item 1',
              '3. Your input appears on item 3!',
              '',
              '🐛 Index keys cause identity confusion'
            ]}
          />
        </div>

        {/* Why Keys Matter */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="How React Uses Keys"
              description="Understanding the reconciliation process"
              size="lg"
            />
            <CodeSnippetWithOutput
              title="Keys Enable Smart Diffing"
              description="How React tracks changes with keys"
              language="javascript"
              colorTheme="purple"
              code={whyKeysCode}
              output={[
                'Without keys:',
                '> React compares by position',
                '> Destroys and recreates components',
                '> Loses all state!',
                '',
                'With keys:',
                '> React compares by ID',
                '> Reuses existing components',
                '> Preserves state!',
                '',
                '✅ Keys = Smart Updates'
              ]}
            />
          </CardContent>
        </Card>

        {/* Generating Unique IDs */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Key className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Generating Unique Keys"
            description="When your data doesn't have IDs"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Creating Unique IDs"
            description="Best practices for ID generation"
            language="javascript"
            colorTheme="blue"
            code={uuidCode}
            output={[
              '✅ Best: Use UUID library',
              '• Guaranteed unique',
              '• Industry standard',
              '• Works offline',
              '',
              '✅ Alternative: Timestamp + random',
              '• Good enough for most cases',
              '• No external dependency',
              '',
              '❌ Avoid: Just timestamp',
              '• Not unique if added quickly'
            ]}
          />
        </div>

        {/* Rules for Keys */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 dark:from-orange-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<List className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="The 4 Rules of Keys"
              description="Must-follow guidelines"
              size="lg"
            />
            <CodeSnippetWithOutput
              title="Key Rules Explained"
              description="Essential rules for React keys"
              language="javascript"
              colorTheme="orange"
              code={rulesCode}
              output={[
                '✅ Rule 1: Unique among siblings',
                '✅ Rule 2: Stable (never change)',
                '✅ Rule 3: Only unique in their list',
                '✅ Rule 4: Not accessible as props',
                '',
                'Remember:',
                'UNIQUE + STABLE = Good Key',
                'RANDOM + CHANGING = Bad Key'
              ]}
            />
          </CardContent>
        </Card>

        {/* When Index is OK */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="When Can You Use Index?"
              description="The rare acceptable cases"
              size="lg"
            />
            <CodeSnippetWithOutput
              title="Index as Key: When It's OK"
              description="Specific scenarios where index is acceptable"
              language="javascript"
              colorTheme="blue"
              code={indexWhenOkCode}
              output={[
                '✅ OK to use index when:',
                '1. List is static (never changes)',
                '2. Items never reordered',
                '3. No add/remove operations',
                '4. No form inputs or state',
                '',
                '❌ DON\'T use index when:',
                '1. List can be filtered/sorted',
                '2. Items can be added/removed',
                '3. Items have inputs/state',
                '4. List order can change',
                '',
                '💡 If in doubt, use proper IDs!'
              ]}
            />
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              description="Essential points to remember"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Key className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Use Stable IDs</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always use unique, stable identifiers from your data as keys
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Avoid Index</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't use array index for dynamic lists - it causes bugs
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Performance</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Proper keys enable React to optimize rendering efficiently
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Generate IDs</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If data lacks IDs, generate UUIDs when creating items
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Master This Pattern!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Keys are critical for React's performance and correctness. Always use stable, unique identifiers - never use index for dynamic lists!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
