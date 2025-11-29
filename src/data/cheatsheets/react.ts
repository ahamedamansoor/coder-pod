import { Layout } from 'lucide-react';

export const reactCheatsheet = {
  id: 'react',
  name: 'React',
  description: 'React hooks and patterns (v16-v19)',
  icon: Layout,
  colorTheme: 'cyan' as const,
  sections: [
    {
      title: 'Component Creation',
      commands: [
        {
          command: 'Function Component',
          description: 'Modern React component',
          usage: 'function Component(props) { return JSX }',
          example: 'function Welcome({ name }) {\n  return <h1>Hello, {name}</h1>\n}',
        },
        {
          command: 'Arrow Function Component',
          description: 'Concise component syntax',
          usage: 'const Component = (props) => JSX',
          example: 'const Button = ({ onClick, children }) => (\n  <button onClick={onClick}>{children}</button>\n)',
        },
        {
          command: 'Component with Props',
          description: 'Receive props with TypeScript',
          usage: 'function Component({ prop1, prop2 }: Props) {}',
          example: 'function User({ name, age }: { name: string; age: number }) {\n  return <div>{name} - {age}</div>\n}',
        },
        {
          command: 'Default Props',
          description: 'Set default prop values',
          usage: 'Component.defaultProps = { ... }',
          example: 'Button.defaultProps = {\n  type: "button",\n  disabled: false\n}',
        },
      ],
    },
    {
      title: 'Basic Hooks',
      commands: [
        {
          command: 'useState',
          description: 'Add state to components',
          usage: 'const [state, setState] = useState(initial)',
          example: 'const [count, setCount] = useState(0)\nsetCount(count + 1)\nsetCount(prev => prev + 1)',
        },
        {
          command: 'useEffect',
          description: 'Side effects & lifecycle',
          usage: 'useEffect(() => { effect; return cleanup }, [deps])',
          example: 'useEffect(() => {\n  const timer = setInterval(() => {...}, 1000)\n  return () => clearInterval(timer)\n}, [dependency])',
        },
        {
          command: 'useContext',
          description: 'Access context values',
          usage: 'const value = useContext(MyContext)',
          example: 'const theme = useContext(ThemeContext)\nconst user = useContext(UserContext)',
        },
        {
          command: 'useReducer',
          description: 'Complex state logic',
          usage: 'const [state, dispatch] = useReducer(reducer, initial)',
          example: 'const [state, dispatch] = useReducer(\n  (state, action) => {\n    switch(action.type) {\n      case "increment": return {count: state.count + 1}\n    }\n  },\n  {count: 0}\n)',
        },
        {
          command: 'useRef',
          description: 'Mutable refs & DOM access',
          usage: 'const ref = useRef(initialValue)',
          example: 'const inputRef = useRef(null)\nuseEffect(() => {\n  inputRef.current.focus()\n}, [])',
        },
      ],
    },
    {
      title: 'Advanced Hooks',
      commands: [
        {
          command: 'useMemo',
          description: 'Memoize expensive calculations',
          usage: 'const value = useMemo(() => compute(), [deps])',
          example: 'const sortedList = useMemo(() => {\n  return items.sort((a,b) => a.value - b.value)\n}, [items])',
        },
        {
          command: 'useCallback',
          description: 'Memoize callback functions',
          usage: 'const callback = useCallback(() => {...}, [deps])',
          example: 'const handleClick = useCallback(() => {\n  console.log(count)\n}, [count])',
        },
        {
          command: 'useLayoutEffect',
          description: 'Synchronous side effects',
          usage: 'useLayoutEffect(() => { effect }, [deps])',
          example: 'useLayoutEffect(() => {\n  // Measure DOM before paint\n  const rect = ref.current.getBoundingClientRect()\n  setHeight(rect.height)\n}, [dependency])',
        },
        {
          command: 'useImperativeHandle',
          description: 'Customize ref handle',
          usage: 'useImperativeHandle(ref, () => ({ methods }))',
          example: 'useImperativeHandle(ref, () => ({\n  focus: () => inputRef.current.focus(),\n  clear: () => inputRef.current.value = ""\n}))',
        },
        {
          command: 'useDebugValue',
          description: 'Label custom hooks in DevTools',
          usage: 'useDebugValue(value, format)',
          example: 'useDebugValue(isOnline ? "Online" : "Offline")',
        },
      ],
    },
    {
      title: 'React 18 Hooks',
      commands: [
        {
          command: 'useTransition',
          description: 'Mark updates as non-urgent (React 18)',
          usage: 'const [isPending, startTransition] = useTransition()',
          example: 'const [isPending, startTransition] = useTransition()\nstartTransition(() => {\n  setSearchQuery(input)\n})',
        },
        {
          command: 'useDeferredValue',
          description: 'Defer value updates (React 18)',
          usage: 'const deferredValue = useDeferredValue(value)',
          example: 'const deferredQuery = useDeferredValue(searchQuery)\n// Use deferredQuery for expensive renders',
        },
        {
          command: 'useId',
          description: 'Generate unique IDs (React 18)',
          usage: 'const id = useId()',
          example: 'const id = useId()\nreturn (\n  <>\n    <label htmlFor={id}>Name</label>\n    <input id={id} />\n  </>\n)',
        },
        {
          command: 'useSyncExternalStore',
          description: 'Subscribe to external store (React 18)',
          usage: 'const state = useSyncExternalStore(subscribe, getSnapshot)',
          example: 'const width = useSyncExternalStore(\n  callback => {\n    window.addEventListener("resize", callback)\n    return () => window.removeEventListener("resize", callback)\n  },\n  () => window.innerWidth\n)',
        },
        {
          command: 'useInsertionEffect',
          description: 'CSS-in-JS libraries (React 18)',
          usage: 'useInsertionEffect(() => { insertStyles })',
          example: 'useInsertionEffect(() => {\n  // Insert styles before layout\n  document.head.appendChild(style)\n})',
        },
      ],
    },
    {
      title: 'React 19 Hooks',
      commands: [
        {
          command: 'use',
          description: 'Read resources (React 19)',
          usage: 'const value = use(promise | context)',
          example: 'const data = use(fetchData())\n// Can be used in conditionals\nif (condition) {\n  const value = use(promise)\n}',
        },
        {
          command: 'useOptimistic',
          description: 'Optimistic updates (React 19)',
          usage: 'const [optimisticState, addOptimistic] = useOptimistic(state, updateFn)',
          example: 'const [optimisticMessages, addOptimisticMessage] = useOptimistic(\n  messages,\n  (state, newMsg) => [...state, newMsg]\n)\naddOptimisticMessage({ text: "Sending..." })',
        },
        {
          command: 'useFormStatus',
          description: 'Form submission status (React 19)',
          usage: 'const { pending, data, method, action } = useFormStatus()',
          example: 'function SubmitButton() {\n  const { pending } = useFormStatus()\n  return <button disabled={pending}>Submit</button>\n}',
        },
        {
          command: 'useFormState',
          description: 'Form state management (React 19)',
          usage: 'const [state, formAction] = useFormState(action, initialState)',
          example: 'const [state, formAction] = useFormState(\n  async (prevState, formData) => {\n    return await submitForm(formData)\n  },\n  { message: "" }\n)',
        },
        {
          command: 'useActionState',
          description: 'Action state management (React 19)',
          usage: 'const [state, action, isPending] = useActionState(actionFn, initialState)',
          example: 'const [state, submitAction, isPending] = useActionState(\n  async (prevState, formData) => {\n    return await processForm(formData)\n  },\n  null\n)',
        },
      ],
    },
    {
      title: 'Context API',
      commands: [
        {
          command: 'createContext',
          description: 'Create context object',
          usage: 'const Context = createContext(defaultValue)',
          example: 'const ThemeContext = createContext("light")\nconst UserContext = createContext(null)',
        },
        {
          command: 'Context.Provider',
          description: 'Provide context value',
          usage: '<Context.Provider value={value}>',
          example: '<ThemeContext.Provider value="dark">\n  <App />\n</ThemeContext.Provider>',
        },
        {
          command: 'useContext',
          description: 'Consume context',
          usage: 'const value = useContext(Context)',
          example: 'const theme = useContext(ThemeContext)\nconst user = useContext(UserContext)',
        },
        {
          command: 'Context with Custom Hook',
          description: 'Encapsulate context logic',
          usage: 'function useMyContext() { return useContext(Context) }',
          example: 'function useTheme() {\n  const context = useContext(ThemeContext)\n  if (!context) throw Error("Missing provider")\n  return context\n}',
        },
      ],
    },
    {
      title: 'JSX Syntax',
      commands: [
        {
          command: 'JSX Element',
          description: 'Basic JSX element',
          usage: '<div>content</div>',
          example: '<div className="container">\n  <h1>Title</h1>\n  <p>Paragraph</p>\n</div>',
        },
        {
          command: 'JSX Expression',
          description: 'Embed JavaScript',
          usage: '{expression}',
          example: '<div>\n  {userName}\n  {2 + 2}\n  {formatDate(date)}\n</div>',
        },
        {
          command: 'JSX Attributes',
          description: 'Element attributes',
          usage: '<element attr={value} />',
          example: '<input\n  type="text"\n  value={value}\n  onChange={handleChange}\n  disabled={isDisabled}\n/>',
        },
        {
          command: 'JSX Spread Props',
          description: 'Spread props object',
          usage: '<Component {...props} />',
          example: 'const props = { name: "John", age: 30 }\n<User {...props} />',
        },
        {
          command: 'JSX Children',
          description: 'Nested content',
          usage: '<Parent>children</Parent>',
          example: '<Card>\n  <CardHeader>Title</CardHeader>\n  <CardBody>Content</CardBody>\n</Card>',
        },
        {
          command: 'JSX Fragments',
          description: 'Group without extra DOM',
          usage: '<>...</> or <Fragment>...</Fragment>',
          example: '<>\n  <Header />\n  <Main />\n  <Footer />\n</>',
        },
        {
          command: 'JSX Comments',
          description: 'Comments in JSX',
          usage: '{/* comment */}',
          example: '<div>\n  {/* This is a comment */}\n  <h1>Title</h1>\n</div>',
        },
      ],
    },
    {
      title: 'Conditional Rendering',
      commands: [
        {
          command: 'If with &&',
          description: 'Render if truthy',
          usage: '{condition && <Component />}',
          example: '{isLoggedIn && <Dashboard />}\n{items.length > 0 && <List items={items} />}',
        },
        {
          command: 'Ternary Operator',
          description: 'If-else rendering',
          usage: '{condition ? <A /> : <B />}',
          example: '{isLoggedIn ? <Dashboard /> : <Login />}\n{loading ? <Spinner /> : <Content />}',
        },
        {
          command: 'Nullish Coalescing',
          description: 'Default value',
          usage: '{value ?? <Default />}',
          example: '{userName ?? "Guest"}\n{content ?? <EmptyState />}',
        },
        {
          command: 'Early Return',
          description: 'Conditional early exit',
          usage: 'if (condition) return <Component />',
          example: 'if (loading) return <Spinner />\nif (error) return <Error />\nreturn <Content />',
        },
        {
          command: 'Switch with Object',
          description: 'Multiple conditions',
          usage: 'const components = { key: <Component /> }',
          example: 'const views = {\n  home: <Home />,\n  about: <About />,\n  contact: <Contact />\n}\nreturn views[currentView]',
        },
      ],
    },
    {
      title: 'List Rendering',
      commands: [
        {
          command: 'Array.map()',
          description: 'Render array items',
          usage: '{array.map(item => <Component key={id} />)}',
          example: '{users.map(user => (\n  <li key={user.id}>{user.name}</li>\n))}',
        },
        {
          command: 'Map with Index',
          description: 'Access index in map',
          usage: '{array.map((item, index) => ...)}',
          example: '{items.map((item, i) => (\n  <div key={item.id}>{i + 1}. {item.name}</div>\n))}',
        },
        {
          command: 'Filter then Map',
          description: 'Conditional list rendering',
          usage: '{array.filter(...).map(...)}',
          example: '{users\n  .filter(user => user.active)\n  .map(user => <UserCard key={user.id} {...user} />)}',
        },
        {
          command: 'Key Prop',
          description: 'Unique identifier for list items',
          usage: 'key={uniqueId}',
          example: '// Use stable IDs\n{items.map(item => <Item key={item.id} />)}\n\n// Avoid index as key when order changes',
        },
      ],
    },
    {
      title: 'Event Handling',
      commands: [
        {
          command: 'onClick',
          description: 'Click events',
          usage: '<button onClick={handler}>',
          example: '<button onClick={() => setCount(c => c + 1)}>+</button>\n<button onClick={handleClick}>Click</button>',
        },
        {
          command: 'onChange',
          description: 'Input change events',
          usage: '<input onChange={handler} />',
          example: '<input\n  value={text}\n  onChange={e => setText(e.target.value)}\n/>',
        },
        {
          command: 'onSubmit',
          description: 'Form submission',
          usage: '<form onSubmit={handler}>',
          example: '<form onSubmit={e => {\n  e.preventDefault()\n  handleSubmit(formData)\n}}>',
        },
        {
          command: 'onKeyDown',
          description: 'Keyboard events',
          usage: '<input onKeyDown={handler} />',
          example: '<input onKeyDown={e => {\n  if (e.key === "Enter") handleSubmit()\n}} />',
        },
        {
          command: 'Event Object',
          description: 'Access event properties',
          usage: 'e.target, e.preventDefault(), e.stopPropagation()',
          example: 'const handleClick = (e) => {\n  e.preventDefault()\n  const value = e.target.value\n  console.log(e.type)\n}',
        },
        {
          command: 'Custom Event Handler',
          description: 'Pass parameters to handler',
          usage: 'onClick={() => handler(param)}',
          example: '<button onClick={() => deleteItem(item.id)}>Delete</button>',
        },
      ],
    },
    {
      title: 'Forms',
      commands: [
        {
          command: 'Controlled Input',
          description: 'React-controlled form input',
          usage: '<input value={state} onChange={setState} />',
          example: 'const [name, setName] = useState("")\n<input\n  value={name}\n  onChange={e => setName(e.target.value)}\n/>',
        },
        {
          command: 'Form with Multiple Inputs',
          description: 'Handle multiple form fields',
          usage: 'const [form, setForm] = useState({})',
          example: 'const handleChange = (e) => {\n  setForm({...form, [e.target.name]: e.target.value})\n}\n<input name="email" onChange={handleChange} />',
        },
        {
          command: 'FormData API',
          description: 'Extract form data',
          usage: 'const data = new FormData(e.target)',
          example: 'const handleSubmit = (e) => {\n  e.preventDefault()\n  const formData = new FormData(e.target)\n  const data = Object.fromEntries(formData)\n}',
        },
        {
          command: 'Checkbox',
          description: 'Controlled checkbox',
          usage: '<input type="checkbox" checked={bool} />',
          example: 'const [agreed, setAgreed] = useState(false)\n<input\n  type="checkbox"\n  checked={agreed}\n  onChange={e => setAgreed(e.target.checked)}\n/>',
        },
        {
          command: 'Select Dropdown',
          description: 'Controlled select',
          usage: '<select value={value} onChange={handler}>',
          example: '<select value={country} onChange={e => setCountry(e.target.value)}>\n  <option value="us">USA</option>\n  <option value="uk">UK</option>\n</select>',
        },
        {
          command: 'Form Action (React 19)',
          description: 'Server actions in forms',
          usage: '<form action={serverAction}>',
          example: 'async function submitForm(formData) {\n  "use server"\n  const data = Object.fromEntries(formData)\n  await saveToDb(data)\n}\n<form action={submitForm}>',
        },
      ],
    },
    {
      title: 'Refs & DOM',
      commands: [
        {
          command: 'useRef',
          description: 'Create ref object',
          usage: 'const ref = useRef(null)',
          example: 'const inputRef = useRef(null)\nconst handleFocus = () => inputRef.current.focus()',
        },
        {
          command: 'Attach Ref',
          description: 'Attach ref to element',
          usage: '<element ref={ref} />',
          example: '<input ref={inputRef} />\n<div ref={divRef} />',
        },
        {
          command: 'forwardRef',
          description: 'Forward ref to child',
          usage: 'React.forwardRef((props, ref) => ...)',
          example: 'const Input = forwardRef((props, ref) => {\n  return <input ref={ref} {...props} />\n})',
        },
        {
          command: 'Callback Ref',
          description: 'Ref with callback',
          usage: '<element ref={node => { ... }} />',
          example: '<div ref={node => {\n  if (node) {\n    node.scrollIntoView()\n  }\n}} />',
        },
        {
          command: 'DOM Measurements',
          description: 'Get element dimensions',
          usage: 'ref.current.getBoundingClientRect()',
          example: 'const rect = divRef.current.getBoundingClientRect()\nconst width = rect.width\nconst height = rect.height',
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'React.memo',
          description: 'Prevent re-renders',
          usage: 'const Component = React.memo(Component)',
          example: 'const Button = React.memo(({ onClick, children }) => {\n  return <button onClick={onClick}>{children}</button>\n})',
        },
        {
          command: 'React.memo with Compare',
          description: 'Custom comparison',
          usage: 'React.memo(Component, arePropsEqual)',
          example: 'const Item = React.memo(Item, (prev, next) => {\n  return prev.id === next.id\n})',
        },
        {
          command: 'useMemo',
          description: 'Memoize calculations',
          usage: 'const value = useMemo(() => compute(), [deps])',
          example: 'const expensiveValue = useMemo(() => {\n  return items.reduce((sum, item) => sum + item.value, 0)\n}, [items])',
        },
        {
          command: 'useCallback',
          description: 'Memoize functions',
          usage: 'const fn = useCallback(() => {...}, [deps])',
          example: 'const handleSubmit = useCallback(() => {\n  submitForm(data)\n}, [data])',
        },
        {
          command: 'Lazy Loading',
          description: 'Code splitting',
          usage: 'const Component = lazy(() => import("./Component"))',
          example: 'const Dashboard = lazy(() => import("./Dashboard"))\n<Suspense fallback={<Loading />}>\n  <Dashboard />\n</Suspense>',
        },
        {
          command: 'startTransition',
          description: 'Non-urgent updates',
          usage: 'startTransition(() => setState(...))',
          example: 'startTransition(() => {\n  setFilteredList(computeExpensiveFilter(list))\n})',
        },
      ],
    },
    {
      title: 'Suspense & Lazy Loading',
      commands: [
        {
          command: 'React.lazy',
          description: 'Dynamic import',
          usage: 'const Component = lazy(() => import("./file"))',
          example: 'const Profile = lazy(() => import("./Profile"))',
        },
        {
          command: 'Suspense',
          description: 'Loading fallback',
          usage: '<Suspense fallback={<Loading />}>',
          example: '<Suspense fallback={<Spinner />}>\n  <LazyComponent />\n</Suspense>',
        },
        {
          command: 'Nested Suspense',
          description: 'Multiple loading boundaries',
          usage: '<Suspense><Suspense>...</Suspense></Suspense>',
          example: '<Suspense fallback={<PageLoader />}>\n  <Header />\n  <Suspense fallback={<ContentLoader />}>\n    <Content />\n  </Suspense>\n</Suspense>',
        },
        {
          command: 'use with Promise (React 19)',
          description: 'Suspend on promise',
          usage: 'const data = use(fetchData())',
          example: 'function Component() {\n  const data = use(fetchUserData())\n  return <div>{data.name}</div>\n}',
        },
      ],
    },
    {
      title: 'Error Boundaries',
      commands: [
        {
          command: 'Error Boundary Class',
          description: 'Catch component errors',
          usage: 'class ErrorBoundary extends React.Component',
          example: 'class ErrorBoundary extends React.Component {\n  state = { hasError: false }\n  \n  static getDerivedStateFromError(error) {\n    return { hasError: true }\n  }\n  \n  componentDidCatch(error, info) {\n    logError(error, info)\n  }\n  \n  render() {\n    if (this.state.hasError) return <ErrorUI />\n    return this.props.children\n  }\n}',
        },
        {
          command: 'Use Error Boundary',
          description: 'Wrap components',
          usage: '<ErrorBoundary><Component /></ErrorBoundary>',
          example: '<ErrorBoundary fallback={<ErrorPage />}>\n  <App />\n</ErrorBoundary>',
        },
      ],
    },
    {
      title: 'Portals',
      commands: [
        {
          command: 'createPortal',
          description: 'Render outside parent DOM',
          usage: 'createPortal(children, container)',
          example: 'import { createPortal } from "react-dom"\n\nfunction Modal({ children }) {\n  return createPortal(\n    children,\n    document.getElementById("modal-root")\n  )\n}',
        },
        {
          command: 'Portal with State',
          description: 'Portal with local state',
          usage: 'createPortal(<Component />, domNode)',
          example: 'function Tooltip({ children, content }) {\n  const [isVisible, setIsVisible] = useState(false)\n  return (\n    <>\n      <div onMouseEnter={() => setIsVisible(true)}>\n        {children}\n      </div>\n      {isVisible && createPortal(\n        <div className="tooltip">{content}</div>,\n        document.body\n      )}\n    </>\n  )\n}',
        },
      ],
    },
    {
      title: 'Custom Hooks',
      commands: [
        {
          command: 'Custom Hook Pattern',
          description: 'Create reusable hook',
          usage: 'function useCustomHook() { return value }',
          example: 'function useCounter(initial = 0) {\n  const [count, setCount] = useState(initial)\n  const increment = () => setCount(c => c + 1)\n  const decrement = () => setCount(c => c - 1)\n  return { count, increment, decrement }\n}',
        },
        {
          command: 'useLocalStorage',
          description: 'Persist state in localStorage',
          usage: 'const [value, setValue] = useLocalStorage(key, initial)',
          example: 'function useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const item = localStorage.getItem(key)\n    return item ? JSON.parse(item) : initialValue\n  })\n  \n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value))\n  }, [key, value])\n  \n  return [value, setValue]\n}',
        },
        {
          command: 'useFetch',
          description: 'Fetch data hook',
          usage: 'const { data, loading, error } = useFetch(url)',
          example: 'function useFetch(url) {\n  const [data, setData] = useState(null)\n  const [loading, setLoading] = useState(true)\n  const [error, setError] = useState(null)\n  \n  useEffect(() => {\n    fetch(url)\n      .then(res => res.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() => setLoading(false))\n  }, [url])\n  \n  return { data, loading, error }\n}',
        },
        {
          command: 'useDebounce',
          description: 'Debounce value changes',
          usage: 'const debouncedValue = useDebounce(value, delay)',
          example: 'function useDebounce(value, delay) {\n  const [debouncedValue, setDebouncedValue] = useState(value)\n  \n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value)\n    }, delay)\n    \n    return () => clearTimeout(handler)\n  }, [value, delay])\n  \n  return debouncedValue\n}',
        },
        {
          command: 'useMediaQuery',
          description: 'Responsive media queries',
          usage: 'const matches = useMediaQuery("(min-width: 768px)")',
          example: 'function useMediaQuery(query) {\n  const [matches, setMatches] = useState(false)\n  \n  useEffect(() => {\n    const media = window.matchMedia(query)\n    setMatches(media.matches)\n    \n    const listener = (e) => setMatches(e.matches)\n    media.addEventListener("change", listener)\n    return () => media.removeEventListener("change", listener)\n  }, [query])\n  \n  return matches\n}',
        },
      ],
    },
    {
      title: 'Component Lifecycle',
      commands: [
        {
          command: 'Mount Effect',
          description: 'Run once on mount',
          usage: 'useEffect(() => { ... }, [])',
          example: 'useEffect(() => {\n  console.log("Component mounted")\n  fetchData()\n}, [])',
        },
        {
          command: 'Update Effect',
          description: 'Run on dependency change',
          usage: 'useEffect(() => { ... }, [deps])',
          example: 'useEffect(() => {\n  console.log("Count changed:", count)\n  document.title = `Count: ${count}`\n}, [count])',
        },
        {
          command: 'Cleanup Effect',
          description: 'Cleanup on unmount',
          usage: 'useEffect(() => { return cleanup }, [])',
          example: 'useEffect(() => {\n  const subscription = subscribe()\n  return () => {\n    subscription.unsubscribe()\n  }\n}, [])',
        },
        {
          command: 'Unmount Effect',
          description: 'Run only on unmount',
          usage: 'useEffect(() => { return () => cleanup }, [])',
          example: 'useEffect(() => {\n  return () => {\n    console.log("Component unmounting")\n    cleanup()\n  }\n}, [])',
        },
      ],
    },
    {
      title: 'React Router (Common Pattern)',
      commands: [
        {
          command: 'BrowserRouter',
          description: 'Router wrapper',
          usage: '<BrowserRouter><App /></BrowserRouter>',
          example: 'import { BrowserRouter } from "react-router-dom"\n\nroot.render(\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>\n)',
        },
        {
          command: 'Routes & Route',
          description: 'Define routes',
          usage: '<Routes><Route path="/" element={<Component />} /></Routes>',
          example: '<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="/about" element={<About />} />\n  <Route path="/users/:id" element={<User />} />\n</Routes>',
        },
        {
          command: 'Link',
          description: 'Navigation link',
          usage: '<Link to="/path">Text</Link>',
          example: '<Link to="/about">About</Link>\n<Link to={`/users/${userId}`}>Profile</Link>',
        },
        {
          command: 'useNavigate',
          description: 'Programmatic navigation',
          usage: 'const navigate = useNavigate()',
          example: 'const navigate = useNavigate()\nconst handleClick = () => {\n  navigate("/dashboard")\n}',
        },
        {
          command: 'useParams',
          description: 'Access URL parameters',
          usage: 'const { param } = useParams()',
          example: 'function User() {\n  const { id } = useParams()\n  return <div>User ID: {id}</div>\n}',
        },
        {
          command: 'useSearchParams',
          description: 'Query string parameters',
          usage: 'const [searchParams, setSearchParams] = useSearchParams()',
          example: 'const [params] = useSearchParams()\nconst query = params.get("q")\nconst page = params.get("page")',
        },
      ],
    },
    {
      title: 'TypeScript with React',
      commands: [
        {
          command: 'Function Component Types',
          description: 'Type component props',
          usage: 'function Component(props: Props) {}',
          example: 'type ButtonProps = {\n  text: string\n  onClick: () => void\n  disabled?: boolean\n}\n\nfunction Button({ text, onClick, disabled }: ButtonProps) {\n  return <button onClick={onClick} disabled={disabled}>{text}</button>\n}',
        },
        {
          command: 'React.FC',
          description: 'Function component type',
          usage: 'const Component: React.FC<Props> = (props) => {}',
          example: 'const Card: React.FC<{ title: string }> = ({ title, children }) => {\n  return <div><h2>{title}</h2>{children}</div>\n}',
        },
        {
          command: 'Event Types',
          description: 'Type event handlers',
          usage: 'React.MouseEvent, React.ChangeEvent',
          example: 'const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {\n  console.log(e.currentTarget)\n}\n\nconst handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n  setValue(e.target.value)\n}',
        },
        {
          command: 'useState with Type',
          description: 'Type state',
          usage: 'const [state, setState] = useState<Type>(initial)',
          example: 'const [user, setUser] = useState<User | null>(null)\nconst [count, setCount] = useState<number>(0)',
        },
        {
          command: 'useRef with Type',
          description: 'Type refs',
          usage: 'const ref = useRef<Type>(null)',
          example: 'const inputRef = useRef<HTMLInputElement>(null)\nconst divRef = useRef<HTMLDivElement>(null)',
        },
      ],
    },
    {
      title: 'Common Patterns',
      commands: [
        {
          command: 'Render Props',
          description: 'Pass render function as prop',
          usage: '<Component render={(data) => <Child data={data} />} />',
          example: 'function DataProvider({ render }) {\n  const [data, setData] = useState(null)\n  useEffect(() => fetchData().then(setData), [])\n  return render(data)\n}\n\n<DataProvider render={(data) => <div>{data}</div>} />',
        },
        {
          command: 'Higher-Order Component',
          description: 'Component wrapper',
          usage: 'const EnhancedComponent = withFeature(Component)',
          example: 'function withAuth(Component) {\n  return function AuthComponent(props) {\n    const { isAuthenticated } = useAuth()\n    if (!isAuthenticated) return <Login />\n    return <Component {...props} />\n  }\n}',
        },
        {
          command: 'Compound Components',
          description: 'Related components',
          usage: '<Parent><Child /><Child /></Parent>',
          example: 'function Tabs({ children }) {\n  const [active, setActive] = useState(0)\n  return <TabsContext.Provider value={{ active, setActive }}>\n    {children}\n  </TabsContext.Provider>\n}\n\nTabs.Tab = function Tab({ index, children }) {\n  const { active, setActive } = useContext(TabsContext)\n  return <button onClick={() => setActive(index)}>{children}</button>\n}',
        },
        {
          command: 'Controlled Component',
          description: 'React controls value',
          usage: '<input value={state} onChange={setState} />',
          example: 'const [value, setValue] = useState("")\n<input\n  value={value}\n  onChange={e => setValue(e.target.value)}\n/>',
        },
        {
          command: 'Uncontrolled Component',
          description: 'DOM controls value',
          usage: '<input ref={ref} defaultValue={initial} />',
          example: 'const inputRef = useRef()\nconst handleSubmit = () => {\n  console.log(inputRef.current.value)\n}\n<input ref={inputRef} defaultValue="initial" />',
        },
      ],
    },
  ],
};
