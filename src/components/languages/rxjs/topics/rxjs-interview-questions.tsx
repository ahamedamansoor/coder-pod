'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Target, TrendingUp, Play } from 'lucide-react';
import { marked } from 'marked';
import InterviewHeader from '@/components/shared/interview-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const easyQuestions = [
  {
    question: "What is RxJS?",
    idealAnswer: `**RxJS (Reactive Extensions for JavaScript)** is a library for reactive programming using Observables to make it easier to compose asynchronous or callback-based code.

**Key Features:**
- **Observable Streams**: Treats events and data as streams
- **Operators**: Powerful functions to transform streams
- **Asynchronous Handling**: Manages async operations elegantly
- **Composable**: Chain operations together
- **Cross-platform**: Works in JavaScript environments

**Core Concept:**
\`\`\`javascript
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);
const doubled$ = numbers$.pipe(map(n => n * 2));
doubled$.subscribe(console.log); // 2, 4, 6, 8, 10
\`\`\``
  },
  {
    question: "What are Observables?",
    idealAnswer: `**Observables** are lazy collections that emit multiple values over time to observers who subscribe to them.

**Key Characteristics:**
- **Lazy**: Don't execute until someone subscribes
- **Multiple Values**: Can emit 0, 1, or many values
- **Asynchronous**: Can emit values over time
- **Push-based**: Push values to subscribers
- **Cancellable**: Can be unsubscribed

**Basic Example:**
\`\`\`javascript
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

observable.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Done!')
});
\`\`\``
  },
  {
    question: "How is an Observable different from a Promise?",
    idealAnswer: `**Key Differences between Observables and Promises:**

**Promises:**
- **Single Value**: Resolve with one value or reject
- **Eager**: Execute immediately when created
- **Not Cancellable**: Once started, cannot be stopped
- **One-time**: Can only be used once

**Observables:**
- **Multiple Values**: Can emit many values over time
- **Lazy**: Don't execute until subscribed
- **Cancellable**: Can be unsubscribed anytime
- **Reusable**: Can be subscribed multiple times

**Example:**
\`\`\`javascript
// Promise - single value
const promise = new Promise(resolve => {
  setTimeout(() => resolve('Single result'), 1000);
});

// Observable - multiple values
const observable = new Observable(subscriber => {
  let count = 0;
  const interval = setInterval(() => {
    subscriber.next(\`Value \${++count}\`);
    if (count === 3) {
      clearInterval(interval);
      subscriber.complete();
    }
  }, 1000);
});
\`\`\``
  },
  {
    question: "What are the three notifications an Observable can emit?",
    idealAnswer: `**Observables can emit three types of notifications:**

**1. Next (Value)**
- Emits actual data values
- Can be emitted multiple times
- Main payload of the stream

**2. Error**
- Indicates an error occurred
- Terminates the Observable
- No further values can be emitted

**3. Complete**
- Indicates successful completion
- Terminates the Observable
- No further values can be emitted

**Example:**
\`\`\`javascript
const observable = new Observable(subscriber => {
  subscriber.next('Value 1');  // Next
  subscriber.next('Value 2');  // Next
  subscriber.complete();       // Complete
});
\`\`\`

**Important Rules:**
- After Error or Complete, Observable is dead
- Can have multiple Next notifications
- Only one Error or Complete notification
- Cannot have both Error and Complete`
  },
  {
    question: "What is a Subscriber?",
    idealAnswer: `**Subscriber** is an object that listens to values emitted by an Observable and defines how to react to those values.

**Observer Interface:**
\`\`\`javascript
const observer = {
  next: value => console.log('Received:', value),
  error: err => console.log('Error:', err),
  complete: () => console.log('Complete!')
};
\`\`\`

**Creating Subscribers:**
\`\`\`javascript
// Method 1: Object with callbacks
observable.subscribe({
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log('Done')
});

// Method 2: Just next callback
observable.subscribe(value => console.log(value));
\`\`\`

**Key Points:**
- **Lazy Execution**: Starts when subscribed
- **Independent**: Each subscription gets independent execution
- **Cancellable**: Can be unsubscribed`
  },
  {
    question: "What is a Subscription?",
    idealAnswer: `**Subscription** represents the execution of an Observable and provides methods to manage that execution.

**Basic Usage:**
\`\`\`javascript
import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe(value => {
  console.log('Value:', value);
});

// Cancel after 5 seconds
setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribed!');
}, 5000);
\`\`\`

**Subscription Methods:**
\`\`\`javascript
const subscription = observable.subscribe(value => console.log(value));

// Check if still active
console.log(subscription.closed); // false

// Unsubscribe
subscription.unsubscribe();
console.log(subscription.closed); // true
\`\`\`

**Managing Multiple Subscriptions:**
\`\`\`javascript
import { Subscription } from 'rxjs';

const mainSubscription = new Subscription();
mainSubscription.add(obs1.subscribe(...));
mainSubscription.add(obs2.subscribe(...));

// Unsubscribe all at once
mainSubscription.unsubscribe();
\`\`\``
  },
  {
    question: "What are Operators in RxJS?",
    idealAnswer: `**Operators** are pure functions that transform, filter, combine, or manipulate Observable streams.

**Types of Operators:**

**Creation Operators:**
- **of()**: Create Observable from values
- **from()**: Convert array/promise/iterable to Observable
- **interval()**: Emit periodic values

**Transformation Operators:**
- **map()**: Transform each emitted value
- **mergeMap()**: Map and flatten inner Observables

**Filtering Operators:**
- **filter()**: Only emit values matching condition
- **take()**: Emit first N values

**Using Operators:**
\`\`\`javascript
import { of } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  .pipe(
    filter(n => n % 2 === 0),    // [2, 4, 6, 8, 10]
    map(n => n * 2),             // [4, 8, 12, 16, 20]
    take(3)                       // [4, 8, 12]
  )
  .subscribe(console.log);
\`\`\``
  },
  {
    question: "Difference between cold and hot Observables?",
    idealAnswer: `**Cold Observables** start producing data when subscribed to.

**Characteristics:**
- **Lazy**: Don't emit until subscribed
- **Unicast**: Each subscription gets independent execution
- **Same Data**: All subscribers get same sequence from start

**Hot Observables** emit regardless of subscriptions.

**Characteristics:**
- **Eager**: Emit immediately, even without subscribers
- **Multicast**: Multiple subscribers share same execution
- **Timing Matters**: Late subscribers miss earlier values

**Example:**
\`\`\`javascript
// Cold Observable
const cold$ = new Observable(subscriber => {
  subscriber.next(Math.random());
});

// Hot Observable
const hot$ = fromEvent(document, 'click');

cold$.subscribe(val => console.log('Cold 1:', val));
cold$.subscribe(val => console.log('Cold 2:', val));
// Different random numbers

hot$.subscribe(e => console.log('Hot 1:', e));
hot$.subscribe(e => console.log('Hot 2:', e));
// Same click events
\`\`\``
  },
  {
    question: "What is the pipe() method?",
    idealAnswer: `**pipe()** is a method used to chain multiple operators together in a readable, functional way.

**Basic Usage:**
\`\`\`javascript
import { of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(
    filter(n => n % 2 === 0),     // [2, 4]
    map(n => n * 2),              // [4, 8]
    tap(n => console.log('Value:', n))
  )
  .subscribe(console.log);
\`\`\`

**Benefits of pipe():**
- **Composable**: Easy to add/remove operators
- **Tree-shakable**: Only import needed operators
- **Type Safety**: Better TypeScript support
- **Testable**: Each operator can be tested separately

**Key Points:**
- Returns new Observable
- Operators execute in order
- Each operator receives output of previous`
  },
  {
    question: "What is the map() operator?",
    idealAnswer: `**map()** is a transformation operator that applies a function to each value emitted by an Observable and emits the result.

**Basic Syntax:**
\`\`\`javascript
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(map(n => n * 2))
  .subscribe(console.log); // 2, 4, 6, 8, 10
\`\`\`

**Common Use Cases:**
\`\`\`javascript
// Transform numbers to strings
of(1, 2, 3).pipe(map(n => n.toString()));

// Extract properties from objects
of({ id: 1, name: 'John' }).pipe(map(user => user.name));

// Format dates
interval(1000).pipe(map(() => new Date().toLocaleTimeString()));
\`\`\`

**Key Characteristics:**
- **One-to-One**: Each input produces one output
- **Pure Function**: No side effects
- **Synchronous**: Immediate transformation
- **Type Safe**: Maintains TypeScript types`
  },
  {
    question: "What is the filter() operator?",
    idealAnswer: `**filter()** is a filtering operator that only emits values from an Observable that pass a specified condition.

**Basic Syntax:**
\`\`\`javascript
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  .pipe(filter(n => n % 2 === 0))  // Only even numbers
  .subscribe(console.log); // 2, 4, 6, 8, 10
\`\`\`

**Common Use Cases:**
\`\`\`javascript
// Filter by condition
of(1, 2, 3, 4, 5).pipe(filter(n => n > 3));

// Filter strings
of('apple', 'banana', 'cherry').pipe(
  filter(fruit => fruit.length > 5)
);

// Filter objects
of(users).pipe(
  filter(users => users.filter(user => user.active))
);
\`\`\`

**Key Characteristics:**
- **Conditional**: Only emits values that return true
- **Zero or More**: Can emit any number of values
- **Pure Function**: No side effects`
  },
  {
    question: "What is the tap() operator used for?",
    idealAnswer: `**tap()** is a utility operator that performs side effects for each emission without modifying the values.

**Purpose:**
- **Debugging**: Log values without affecting stream
- **Side Effects**: Perform actions (logging, analytics)
- **State Updates**: Update external state
- **No Transformation**: Values pass through unchanged

**Basic Usage:**
\`\`\`javascript
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(
    tap(value => console.log('Before map:', value)),
    map(n => n * 2),
    tap(value => console.log('After map:', value))
  )
  .subscribe(console.log);
\`\`\`

**Common Use Cases:**
\`\`\`javascript
// Debugging
of(1, 2, 3).pipe(
  tap(value => console.log('Processing:', value)),
  map(n => n * 2)
).subscribe(console.log);

// Logging/Analytics
userActions.pipe(
  tap(action => analytics.track(action)),
  map(action => processAction(action))
).subscribe(console.log);
\`\`\`

**Key Points:**
- **Transparent**: Values pass through unchanged
- **Side Effects**: Perfect for logging, debugging
- **Multiple Taps**: Can use multiple tap operators`
  },
  {
    question: "What is of() in RxJS?",
    idealAnswer: `**of()** is a creation operator that creates an Observable that emits a sequence of values, then completes.

**Basic Syntax:**
\`\`\`javascript
import { of } from 'rxjs';

of(1, 2, 3, 4, 5).subscribe(console.log); // 1, 2, 3, 4, 5
of('Hello', 'World').subscribe(console.log); // "Hello", "World"
of({ id: 1, name: 'John' }).subscribe(console.log);
\`\`\`

**Use Cases:**
\`\`\`javascript
// Create Observable from values
of(10, 20, 30).pipe(map(n => n * 2)).subscribe(console.log);

// Emit single value
of('Hello World').subscribe(console.log);

// Mock data for testing
of(mockUserData).pipe(
  map(user => validateUser(user))
).subscribe(console.log);
\`\`\`

**Key Characteristics:**
- **Synchronous**: Emits values immediately
- **Finite**: Emits provided values then completes
- **Multiple Values**: Can emit any number of values
- **Type Safe**: Maintains TypeScript types`
  },
  {
    question: "What is from() in RxJS?",
    idealAnswer: `**from()** is a creation operator that converts various data structures into Observables that emit their values.

**Supported Types:**
- **Arrays**: Emits each array element
- **Promises**: Converts to Observable
- **Iterables**: Maps, Sets, etc.
- **Strings**: Emits each character

**Basic Usage:**
\`\`\`javascript
import { from } from 'rxjs';

// From array
from([1, 2, 3, 4, 5]).subscribe(console.log); // 1, 2, 3, 4, 5

// From string
from('Hello').subscribe(console.log); // "H", "e", "l", "l", "o"

// From Promise
const promise = Promise.resolve('Success!');
from(promise).subscribe(console.log); // "Success!"
\`\`\`

**Real-world Use Cases:**
\`\`\`javascript
// Convert API response
fetch('/api/users')
  .then(response => response.json())
  .then(users => from(users))
  .pipe(filter(user => user.active))
  .subscribe(console.log);

// Convert NodeList
from(document.querySelectorAll('.item')).pipe(
  map(element => element.textContent)
).subscribe(console.log);
\`\`\`

**Key Characteristics:**
- **Conversion**: Turns various types into Observables
- **Iteration**: Iterates over iterable objects
- **Promise Handling**: Converts Promises to Observables`
  },
  {
    question: "What is the difference between of() and from()?",
    idealAnswer: `**Key Differences between of() and from():**

**of() Operator:**
- **Arguments**: Each argument becomes a separate emission
- **Array Handling**: Emits entire array as single value
- **Synchronous**: Emits immediately

**from() Operator:**
- **Iteration**: Iterates over array/iterable elements
- **Array Handling**: Emits each array element separately
- **Promise Support**: Converts Promises to Observables

**Comparison Examples:**
\`\`\`javascript
import { of, from } from 'rxjs';

// of() - each argument is separate emission
of(1, 2, 3).subscribe(console.log); // 1, 2, 3

// from() - iterates over array elements
from([1, 2, 3]).subscribe(console.log); // 1, 2, 3

// of() with array - emits array as single value
of([1, 2, 3]).subscribe(console.log); // [1, 2, 3]

// from() with array - emits each element
from([1, 2, 3]).subscribe(console.log); // 1, 2, 3
\`\`\`

**Different Data Types:**
\`\`\`javascript
// Strings
of('Hello').subscribe(console.log); // "Hello"
from('Hello').subscribe(console.log); // "H", "e", "l", "l", "o"

// Promises (only from() supports)
const promise = Promise.resolve('Success');
from(promise).subscribe(console.log); // "Success"
\`\`\`

**Summary:**
- **of()**: Emit arguments as-is
- **from()**: Iterate and emit individual elements
- **from()**: More versatile (supports Promises, iterables)`
  }
];

const mediumQuestions = [
  {
    question: "What are Subjects in RxJS and when should you use them?",
    idealAnswer: `**Subjects** are special types of Observables that can multicast values to multiple Observers.

**Key Characteristics:**
- **Both Observable and Observer**: Can emit and receive values
- **Multicasting**: Same value broadcast to all subscribers
- **Hot**: Emits regardless of subscription timing
- **Stateful**: Can maintain current value

**Types of Subjects:**
- **Subject**: Basic multicasting
- **BehaviorSubject**: Holds last emitted value
- **ReplaySubject**: Replays previous values
- **AsyncSubject**: Emits last value on completion

**When to Use Subjects:**
- **Event buses**: Communication between components
- **State management**: Sharing application state
- **Service communication**: Data sharing across services

**Example:**
\`\`\`javascript
import { Subject, BehaviorSubject } from 'rxjs';

const subject = new Subject();
subject.subscribe(data => console.log('Subscriber 1:', data));
subject.subscribe(data => console.log('Subscriber 2:', data));
subject.next('Hello'); // Both subscribers receive 'Hello'

const behaviorSubject = new BehaviorSubject('Initial');
behaviorSubject.subscribe(data => console.log('New sub:', data)); // 'Initial'
behaviorSubject.next('Updated'); // All subscribers receive 'Updated'
\`\`\``
  },
  {
    question: "What is the difference between mergeMap, switchMap, concatMap, and exhaustMap?",
    idealAnswer: `**Flattening Operators Comparison:**

**mergeMap:**
- **Concurrent**: Handles all inner observables simultaneously
- **Order**: Not guaranteed
- **Use Case**: Independent parallel operations

**switchMap:**
- **Cancelling**: Cancels previous inner observables
- **Latest Only**: Only latest observable completes
- **Use Case**: Search/typeahead scenarios

**concatMap:**
- **Sequential**: Processes observables in order
- **Order**: Maintains order
- **Use Case**: Ordered operations

**exhaustMap:**
- **Ignoring**: Ignores new observables while active
- **Prevention**: Prevents overlapping operations
- **Use Case**: Preventing duplicate requests

**Example:**
\`\`\`javascript
import { of } from 'rxjs';
import { mergeMap, switchMap, concatMap, exhaustMap } from 'rxjs/operators';

const source = of('A', 'B', 'C');

// mergeMap - concurrent
source.pipe(
  mergeMap(val => simulateAsync(val))
).subscribe(console.log);

// switchMap - only latest
source.pipe(
  switchMap(val => simulateAsync(val))
).subscribe(console.log);

// concatMap - sequential
source.pipe(
  concatMap(val => simulateAsync(val))
).subscribe(console.log);

// exhaustMap - ignore while active
source.pipe(
  exhaustMap(val => simulateAsync(val))
).subscribe(console.log);
\`\`\``
  },
  {
    question: "How do you handle errors in RxJS?",
    idealAnswer: `**Error Handling Strategies in RxJS:**

**1. catchError Operator**
- Catches errors and provides fallback values
- Can return a new Observable
- Graceful error recovery

**2. retry Operator**
- Retries the source Observable on error
- Configurable number of attempts
- Simple retry logic

**3. retryWhen Operator**
- Advanced retry with custom logic
- Can implement exponential backoff
- More control over retry timing

**4. finalize Operator**
- Executes code on complete or error
- Cleanup operations
- Always runs

**Examples:**
\`\`\`javascript
import { throwError, of } from 'rxjs';
import { catchError, retry, finalize } from 'rxjs/operators';

// Basic error handling
throwError('Error!').pipe(
  catchError(err => of('Fallback value'))
).subscribe(console.log);

// Retry with fallback
throwError('Error!').pipe(
  retry(3),
  catchError(err => of('Failed after retries'))
).subscribe(console.log);

// Cleanup with finalize
throwError('Error!').pipe(
  finalize(() => console.log('Cleanup executed'))
).subscribe();
\`\`\`

**Best Practices:**
- Always handle errors in observables
- Use catchError for graceful degradation
- Implement retry logic for transient failures
- Use finalize for cleanup operations`
  },
  {
    question: "What is the takeUntil operator and how is it used for subscription management?",
    idealAnswer: `**takeUntil()** is a filtering operator that emits values from a source Observable until a notifier Observable emits a value.

**Primary Use Case:**
- **Subscription Management**: Automatically unsubscribe when component is destroyed
- **Lifecycle Management**: Clean up subscriptions to prevent memory leaks

**Basic Syntax:**
\`\`\`javascript
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Create notifier
const destroy$ = new Subject();

// Auto-unsubscribe when destroy$ emits
interval(1000).pipe(
  takeUntil(destroy$)
).subscribe(console.log);

// Trigger cleanup
destroy$.next();
destroy$.complete();
\`\`\`

**Angular Component Example:**
\`\`\`javascript
@Component({...})
export class MyComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  
  ngOnInit() {
    this.dataService.getData().pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.data = data;
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
\`\`\`

**Benefits:**
- **Automatic Cleanup**: No manual unsubscribe needed
- **Pattern Consistency**: Same pattern across all subscriptions
- **Memory Leak Prevention**: Guaranteed cleanup
- **Multiple Subscriptions**: One notifier handles all

**Common Pattern:**
\`\`\`javascript
// Multiple subscriptions with single cleanup
this.service1.data$.pipe(takeUntil(this.destroy$)).subscribe(...);
this.service2.events$.pipe(takeUntil(this.destroy$)).subscribe(...);
this.service3.status$.pipe(takeUntil(this.destroy$)).subscribe(...);
\`\`\``
  },
  {
    question: "What are higher-order observables and how do you work with them?",
    idealAnswer: `**Higher-Order Observables** are Observables that emit other Observables.

**What They Are:**
- **Observable of Observables**: Each emission is itself an Observable
- **Nested Streams**: Streams within streams
- **Common Pattern**: Results from operations like map returning Observables

**Example:**
\`\`\`javascript
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// Higher-order observable
const clicks = fromEvent(document, 'click');
const intervalObs = clicks.pipe(
  map(click => interval(1000)) // Each click creates new interval
);
// intervalObs emits Observables, not numbers
\`\`\`

**Flattening Operators:**
- **mergeMap**: Flatten and merge all inner observables
- **switchMap**: Switch to latest inner observable
- **concatMap**: Concatenate inner observables sequentially
- **exhaustMap**: Ignore new inner observables while active

**Real-world Example:**
\`\`\`javascript
// Search with debouncing
searchInput.pipe(
  debounceTime(300),
  map(query => this.searchAPI(query)), // Returns Observable
  mergeMap(apiResult => apiResult) // Flatten the result
).subscribe(results => {
  this.displayResults(results);
});

// Same with switchMap (cancels previous searches)
searchInput.pipe(
  debounceTime(300),
  switchMap(query => this.searchAPI(query))
).subscribe(results => {
  this.displayResults(results);
});
\`\`\`

**Use Cases:**
- **HTTP Requests**: Based on user input
- **WebSocket Streams**: Multiple data streams
- **File Uploads**: Sequential or parallel uploads
- **Animation Sequences**: Complex animation chains`
  },
  {
    question: "What is the share() operator and when should you use it?",
    idealAnswer: `**share()** is a multicasting operator that shares a single execution among multiple subscribers.

**What It Does:**
- **Multicasting**: Converts cold Observable to hot
- **Shared Execution**: One subscription for all observers
- **Reference Counting**: Manages subscription lifecycle
- **Connection Management**: Connects/disconnects automatically

**Basic Example:**
\`\`\`javascript
import { interval } from 'rxjs';
import { share, take } from 'rxjs/operators';

const source$ = interval(1000).pipe(
  take(5),
  share() // Share execution
);

// Multiple subscribers share same execution
source$.subscribe(val => console.log('Sub 1:', val));
source$.subscribe(val => console.log('Sub 2:', val));
// Both receive same values at same time
\`\`\`

**Without share() vs With share():**
\`\`\`javascript
// Without share() - separate executions
const cold$ = interval(1000).pipe(take(3));
cold$.subscribe(val => console.log('Cold 1:', val)); // 0, 1, 2
cold$.subscribe(val => console.log('Cold 2:', val)); // 0, 1, 2 (separate)

// With share() - shared execution
const hot$ = interval(1000).pipe(take(3), share());
hot$.subscribe(val => console.log('Hot 1:', val)); // 0, 1, 2
hot$.subscribe(val => console.log('Hot 2:', val)); // 1, 2 (misses 0)
\`\`\`

**Common Use Cases:**
- **HTTP Caching**: Share API responses
- **WebSocket Connections**: Single connection for multiple components
- **Expensive Operations**: Avoid duplicate computations
- **State Sharing**: Share application state

**Advanced Example:**
\`\`\`javascript
// Cached API call
const userData$ = this.http.get('/api/user').pipe(
  share(), // Cache and share
  retry(3)
);

// Multiple components get same data
userData$.subscribe(data => this.updateProfile(data));
userData$.subscribe(data => this.updateSidebar(data));
\`\`\`

**Benefits:**
- **Performance**: Avoids duplicate operations
- **Consistency**: All subscribers see same data
- **Resource Efficiency**: Single network request/connection
- **Memory Management**: Automatic cleanup`
  },
  {
    question: "What is the difference between debounceTime and throttleTime?",
    idealAnswer: `**debounceTime() and throttleTime()** are both time-based filtering operators with different behaviors.

**debounceTime():**
- **Wait for Silence**: Emits only after period of inactivity
- **Last Value**: Only emits the last value in the time window
- **Delay**: Delays emissions
- **Use Case**: Search input, save functionality

**throttleTime():**
- **Rate Limiting**: Emits at most once per time period
- **First Value**: Emits first value, then ignores subsequent
- **Immediate**: Can emit immediately
- **Use Case**: Button clicks, scroll events

**Visual Example:**
\`\`\`javascript
// Input: A B C D E (rapid succession)

// debounceTime(1000ms)
// After 1s of silence: E (only last value)

// throttleTime(1000ms) 
// Immediate: A, then after 1s: D (first in each window)
\`\`\`

**Code Examples:**
\`\`\`javascript
import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

// Search with debouncing
fromEvent(searchInput, 'input').pipe(
  debounceTime(300), // Wait 300ms after typing stops
  map(event => event.target.value),
  switchMap(query => searchAPI(query))
).subscribe(results => {
  displayResults(results);
});

// Button click throttling
fromEvent(button, 'click').pipe(
  throttleTime(1000), // At most once per second
  map(() => performAction())
).subscribe();
\`\`\`

**Use Cases:**
\`\`\`javascript
// debounceTime - search, auto-save
searchInput.pipe(debounceTime(500)).subscribe(...);
autoSave.pipe(debounceTime(2000)).subscribe(...);

// throttleTime - buttons, scrolling
submitButton.pipe(throttleTime(1000)).subscribe(...);
scrollEvents.pipe(throttleTime(100)).subscribe(...);
\`\`\`

**Key Differences:**
| Feature | debounceTime | throttleTime |
|---------|--------------|--------------|
| Emits | Last value after pause | First value in window |
| Timing | Delayed | Can be immediate |
| Pattern | Wait for silence | Rate limiting |
| Best for | Search, auto-save | Buttons, scrolling`
  },
  {
    question: "What is the combineLatest operator and how does it work?",
    idealAnswer: `**combineLatest()** is a combination operator that emits the latest values from multiple Observables when any of them emit.

**How It Works:**
- **Multiple Sources**: Combines 2+ Observables
- **Latest Values**: Always emits latest values from each source
- **Trigger**: Emits when any Observable emits
- **Waiting**: Waits for each Observable to emit at least once

**Basic Syntax:**
\`\`\`javascript
import { combineLatest, of } from 'rxjs';

const obs1$ = of(1, 2, 3);
const obs2$ = of('A', 'B', 'C');
const obs3$ = of(true, false);

combineLatest([obs1$, obs2$, obs3$]).subscribe(values => {
  console.log(values); // [3, 'C', false] - latest values
});
\`\`\`

**Real-world Example:**
\`\`\`javascript
// Form validation
const email$ = this.emailField.valueChanges;
const password$ = this.passwordField.valueChanges;
const terms$ = this.termsCheckbox.valueChanges;

combineLatest([email$, password$, terms$]).subscribe(([email, password, terms]) => {
  this.isFormValid = validateEmail(email) && 
                     password.length >= 8 && 
                     terms;
});
\`\`\`

**Use Cases:**
\`\`\`javascript
// User profile with permissions
const user$ = this.authService.user$;
const permissions$ = this.authService.permissions$;

combineLatest([user$, permissions$]).subscribe(([user, permissions]) => {
  this.canEdit = permissions.includes('edit') && user.isActive;
});

// Shopping cart calculations
const items$ = this.cartService.items$;
const shipping$ = this.shippingService.selectedMethod$;
const discount$ = this.discountService.appliedDiscount$;

combineLatest([items$, shipping$, discount$]).subscribe(([items, shipping, discount]) => {
  this.total = calculateTotal(items, shipping, discount);
});
\`\`\`

**Important Notes:**
- **Initial Emission**: Only after all Observables emit
- **Memory**: Can hold last value from each Observable
- **Order**: Maintains the order of input Observables
- **Performance**: Efficient for combining multiple streams

**Alternative:**
\`\`\`javascript
// withLatestFrom - only when main emits
main$.pipe(
  withLatestFrom(obs1$, obs2$)
).subscribe(([main, val1, val2]) => {
  // Only emits when main$ emits
});
\`\`\``
  },
  {
    question: "What is the zip operator and how is it different from combineLatest?",
    idealAnswer: `**zip()** is a combination operator that combines values from multiple Observables in order, waiting for each to emit before proceeding.

**How zip() Works:**
- **Ordered Combination**: Combines values by position
- **Waiting**: Waits for all Observables to emit
- **One-to-One**: Emits when all have corresponding values
- **Completion**: Completes when any Observable completes

**Basic Syntax:**
\`\`\`javascript
import { zip, interval } from 'rxjs';

const obs1$ = of(1, 2, 3);
const obs2$ = of('A', 'B', 'C');
const obs3$ = of(true, false, true);

zip(obs1$, obs2$, obs3$).subscribe(values => {
  console.log(values); 
  // [1, 'A', true]
  // [2, 'B', false] 
  // [3, 'C', true]
});
\`\`\`

**zip() vs combineLatest():**
\`\`\`javascript
// zip() - waits for all, emits by position
const zipExample = zip(
  of(1, 2),
  of('A', 'B', 'C', 'D')
);
// Output: [1, 'A'], [2, 'B'] (stops when shortest completes)

// combineLatest() - emits latest values
const combineExample = combineLatest([
  of(1, 2),
  of('A', 'B', 'C', 'D')
]);
// Output: [2, 'A'], [2, 'B'], [2, 'C'], [2, 'D']
\`\`\`

**Real-world Examples:**
\`\`\`javascript
// Coordinate API calls
const users$ = this.http.get('/api/users');
const posts$ = this.http.get('/api/posts');
const comments$ = this.http.get('/api/comments');

zip(users$, posts$, comments$).subscribe(([users, posts, comments]) => {
  // All data loaded, process together
  this.initializeApp(users, posts, comments);
});

// Sequential operations
const step1$ = this.performStep1();
const step2$ = this.performStep2();
const step3$ = this.performStep3();

zip(step1$, step2$, step3$).subscribe(([result1, result2, result3]) => {
  // All steps completed
  this.finalize(result1, result2, result3);
});
\`\`\`

**When to Use zip():**
- **Coordinated Operations**: Multiple operations must complete together
- **Data Synchronization**: Different data sources for same entity
- **Sequential Processing**: Steps that must complete in order
- **Matching Data**: Related data from different sources

**Key Differences:**
| Feature | zip() | combineLatest() |
|---------|-------|-----------------|
| Emission | When all emit | When any emits |
| Values | By position | Latest values |
| Completion | When any completes | When all complete |
| Use Case | Coordinated ops | Independent state`
  },
  {
    question: "What is the distinctUntilChanged operator?",
    idealAnswer: `**distinctUntilChanged()** is a filtering operator that only emits distinct values from an Observable, suppressing consecutive duplicates.

**Basic Behavior:**
- **Consecutive Duplicates**: Only filters identical consecutive values
- **Comparison**: Uses === by default
- **First Value**: Always emits first value
- **Memory Efficient**: Only remembers last value

**Basic Example:**
\`\`\`javascript
import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

of(1, 1, 2, 2, 2, 3, 1, 1).pipe(
  distinctUntilChanged()
).subscribe(console.log);
// Output: 1, 2, 3, 1 (consecutive duplicates removed)
\`\`\`

**Custom Comparison:**
\`\`\`javascript
// Custom comparison function
of({ id: 1, name: 'John' }, { id: 1, name: 'Jane' }, { id: 2, name: 'Bob' }).pipe(
  distinctUntilChanged((prev, curr) => prev.id === curr.id)
).subscribe(console.log);
// Output: { id: 1, name: 'John' }, { id: 2, name: 'Bob' }
\`\`\`

**Real-world Use Cases:**
\`\`\`javascript
// Form validation - only process when value actually changes
formControl.valueChanges.pipe(
  distinctUntilChanged(),
  debounceTime(300),
  switchMap(value => validateValue(value))
).subscribe(result => {
  this.validationResult = result;
});

// User status changes
userService.status$.pipe(
  distinctUntilChanged((prev, curr) => prev.online === curr.online)
).subscribe(status => {
  if (status.online) {
    this.showOnlineIndicator();
  } else {
    this.showOfflineIndicator();
  }
});

// Search optimization
searchInput.pipe(
  distinctUntilChanged(), // Don't search for same value
  debounceTime(500),
  switchMap(query => searchAPI(query))
).subscribe(results => {
  this.displayResults(results);
});
\`\`\`

**Performance Benefits:**
- **Reduced Processing**: Avoid unnecessary operations
- **Network Efficiency**: Prevent duplicate API calls
- **UI Performance**: Reduce unnecessary re-renders
- **Resource Conservation**: Save CPU/memory

**Advanced Usage:**
\`\`\`javascript
// Deep object comparison
of(user1, user2, user3).pipe(
  distinctUntilChanged((prev, curr) => 
    JSON.stringify(prev) === JSON.stringify(curr)
  )
).subscribe(console.log);

// Key-based comparison
of(users).pipe(
  distinctUntilChanged((prev, curr) => prev.id === curr.id)
).subscribe(console.log);
\`\`\`

**Key Points:**
- Only filters **consecutive** duplicates
- Custom comparison function available
- Excellent for performance optimization
- Commonly used with form inputs`
  },
  {
    question: "What is the retry operator and how does it work?",
    idealAnswer: `**retry()** is an error handling operator that resubscribes to the source Observable when an error occurs, up to a specified number of times.

**Basic Behavior:**
- **Error Recovery**: Automatically retries on error
- **Configurable**: Specify number of retry attempts
- **Fresh Start**: Each retry starts from beginning
- **Final Error**: Emits error if all retries fail

**Basic Syntax:**
\`\`\`javascript
import { throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

let attempts = 0;
const source$ = new Observable(subscriber => {
  attempts++;
  console.log(\`Attempt \${attempts}\`);
  if (attempts < 3) {
    subscriber.error('Failed!');
  } else {
    subscriber.next('Success!');
    subscriber.complete();
  }
});

source$.pipe(
  retry(2), // Retry 2 times (total 3 attempts)
  catchError(err => of('Final fallback'))
).subscribe(console.log);
\`\`\`

**Common Use Cases:**
\`\`\`javascript
// HTTP request retry
this.http.get('/api/data').pipe(
  retry(3), // Retry 3 times on network error
  catchError(err => {
    console.error('API failed after retries:', err);
    return of(defaultData);
  })
).subscribe(data => {
  this.data = data;
});

// WebSocket reconnection
this.webSocketService.connect().pipe(
  retry(5), // Try to reconnect 5 times
  catchError(err => {
    this.showConnectionError();
    return EMPTY;
  })
).subscribe(message => {
  this.handleMessage(message);
});
\`\`\`

**Advanced Retry Patterns:**
\`\`\`javascript
// Exponential backoff with retryWhen
import { retryWhen, delay, scan } from 'rxjs/operators';

source$.pipe(
  retryWhen(errors =>
    errors.pipe(
      scan((attemptCount, err) => {
        if (attemptCount >= 5) {
          throw err;
        }
        return attemptCount + 1;
      }, 0),
      delay(attempt => Math.pow(2, attempt) * 1000) // 1s, 2s, 4s, 8s, 16s
    )
  )
).subscribe(console.log);
\`\`\`

**Best Practices:**
\`\`\`javascript
// Retry with specific error types
source$.pipe(
  retryWhen(errors =>
    errors.pipe(
      mergeMap(err => {
        if (err.status === 500) {
          return of(err); // Retry server errors
        }
        return throwError(err); // Don't retry client errors
      }),
      delay(1000),
      take(3)
    )
  )
).subscribe(console.log);
\`\`\`

**Important Notes:**
- **All or Nothing**: Retries entire Observable from start
- **Memory**: Can cause issues with long-running Observables
- **Side Effects**: Re-executes all side effects on retry
- **Network**: Be careful with network requests that modify data

**When to Use:**
- **Transient Failures**: Network issues, temporary server problems
- **Unstable Connections**: Mobile networks, unreliable services
- **Idempotent Operations**: Safe to retry (GET requests)
- **External Dependencies**: Third-party services that may fail`
  },
  {
    question: "What is the finalize operator?",
    idealAnswer: `**finalize()** is a utility operator that executes a specified function when the Observable terminates, either through completion or error.

**Basic Behavior:**
- **Cleanup**: Executes code on termination
- **Always Runs**: Called on both complete and error
- **Side Effects**: Perfect for cleanup operations
- **Resource Management**: Ensures resources are released

**Basic Syntax:**
\`\`\`javascript
import { of, throwError } from 'rxjs';
import { finalize } from 'rxjs/operators';

of(1, 2, 3).pipe(
  finalize(() => console.log('Cleanup executed'))
).subscribe({
  next: val => console.log('Value:', val),
  complete: () => console.log('Complete'),
  error: err => console.error('Error:', err)
});

// Output:
// Value: 1
// Value: 2  
// Value: 3
// Complete
// Cleanup executed
\`\`\`

**Common Use Cases:**
\`\`\`javascript
// Loading indicators
this.http.get('/api/data').pipe(
  tap(() => this.loading = true),
  finalize(() => this.loading = false)
).subscribe(data => {
  this.data = data;
});

// Resource cleanup
const connection = createDatabaseConnection();
connection.pipe(
  finalize(() => connection.close())
).subscribe(data => {
  this.processData(data);
});

// UI state management
dialog.open().pipe(
  finalize(() => dialog.close())
).subscribe(result => {
  this.handleResult(result);
});
\`\`\`

**Real-world Examples:**
\`\`\`javascript
// File upload with progress tracking
uploadFile(file).pipe(
  tap(progress => this.updateProgress(progress)),
  finalize(() => {
    this.hideProgressBar();
    this.enableUploadButton();
  }),
  catchError(err => {
    this.showErrorMessage('Upload failed');
    return EMPTY;
  })
).subscribe(result => {
  this.showSuccessMessage('Upload complete');
});

// Database transaction
database.transaction().pipe(
  finalize(() => {
    database.rollback(); // Safe - no-op if committed
  }),
  switchMap(tx => tx.execute(query)),
  tap(() => database.commit())
).subscribe(results => {
  this.handleResults(results);
});
\`\`\`

**Multiple finalize() Operators:**
\`\`\`javascript
source$.pipe(
  finalize(() => console.log('First cleanup')),
  finalize(() => console.log('Second cleanup')),
  finalize(() => console.log('Third cleanup'))
).subscribe();
// All three will execute in order
\`\`\`

**Best Practices:**
\`\`\`javascript
// Combine with other error handling
source$.pipe(
  retry(3),
  catchError(err => of(fallbackValue)),
  finalize(() => {
    this.hideLoadingIndicator();
    this.resetForm();
    this.unlockUI();
  })
).subscribe(console.log);
\`\`\`

**Key Benefits:**
- **Guaranteed Execution**: Always runs regardless of outcome
- **Code Organization**: Centralizes cleanup logic
- **Memory Management**: Prevents memory leaks
- **UI Consistency**: Ensures UI state is restored

**Important Notes:**
- **Execution Order**: Multiple finalize() operators execute in reverse order
- **Synchronous**: Cleanup function executes synchronously
- **Error Handling**: Errors in finalize() are not caught
- **Performance**: Minimal performance overhead`
  },
  {
    question: "What is the scan operator and how is it different from reduce?",
    idealAnswer: `**scan()** is an accumulation operator that emits intermediate values as it reduces the Observable stream, similar to reduce() but with ongoing emissions.

**Basic Behavior:**
- **Accumulation**: Builds up value over time
- **Intermediate Emissions**: Emits each intermediate result
- **State Management**: Maintains internal accumulator
- **Live Updates**: Provides running total/state

**Basic Syntax:**
\`\`\`javascript
import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

of(1, 2, 3, 4, 5).pipe(
  scan((acc, value) => acc + value, 0) // Start with 0
).subscribe(console.log);
// Output: 1, 3, 6, 10, 15 (running totals)
\`\`\`

**scan() vs reduce():**
\`\`\`javascript
// scan() - emits intermediate values
of(1, 2, 3, 4).pipe(
  scan((acc, val) => acc + val, 0)
).subscribe(console.log);
// Output: 1, 3, 6, 10

// reduce() - emits only final value
of(1, 2, 3, 4).pipe(
  reduce((acc, val) => acc + val, 0)
).subscribe(console.log);
// Output: 10 (only final)
\`\`\`

**Real-world Use Cases:**
\`\`\`javascript
// Running total for shopping cart
cartItems.pipe(
  scan((total, item) => total + item.price, 0)
).subscribe(runningTotal => {
  this.cartTotal = runningTotal;
});

// Game score tracking
gameEvents.pipe(
  scan((score, event) => {
    switch(event.type) {
      case 'points': return score + event.points;
      case 'bonus': return score + event.bonus;
      case 'penalty': return score - event.penalty;
      default: return score;
    }
  }, 0)
).subscribe(currentScore => {
  this.displayScore(currentScore);
});

// Form validation state
formFields.pipe(
  scan((state, field) => ({
    ...state,
    [field.name]: field.value,
    isValid: validateAllFields({...state, [field.name]: field.value})
  }), {})
).subscribe(formState => {
  this.formState = formState;
  this.submitButton.disabled = !formState.isValid;
});
\`\`\`

**Advanced Examples:**
\`\`\`javascript
// Object accumulation
of({ id: 1, name: 'John' }, { id: 2, name: 'Jane' }).pipe(
  scan((acc, user) => ({ ...acc, [user.id]: user }), {})
).subscribe(userMap => {
  this.users = userMap;
});

// Array operations
of(1, 2, 3, 4, 5).pipe(
  scan((acc, val) => [...acc, val * 2], [])
).subscribe(doubledArray => {
  this.doubledNumbers = doubledArray;
});

// State machine
events.pipe(
  scan((state, event) => stateMachine.next(state, event), initialState)
).subscribe(currentState => {
  this.updateUI(currentState);
});
\`\`\`

**Performance Considerations:**
\`\`\`javascript
// Efficient object spreading
scan((acc, item) => Object.assign({}, acc, { [item.id]: item }), {})

// For large arrays, consider immutable updates
scan((acc, items) => [...acc, ...items], [])
\`\`\`

**Key Differences:**
| Feature | scan() | reduce() |
|---------|--------|----------|
| Emissions | Intermediate + final | Final only |
| Use Case | Live state tracking | Final calculation |
| Memory | Holds accumulator | Holds accumulator |
| Timing | Ongoing | At completion |

**When to Use scan():**
- **Running Totals**: Shopping carts, scores, counters
- **State Management**: Form state, application state
- **Data Aggregation**: Building collections over time
- **Live Updates**: Real-time calculations`
  },
  {
    question: "What is the withLatestFrom operator?",
    idealAnswer: `**withLatestFrom()** is a combination operator that combines the source Observable with the latest values from other Observables, but only emits when the source emits.

**Basic Behavior:**
- **Source-Driven**: Only emits when source Observable emits
- **Latest Values**: Gets latest values from other Observables
- **Waiting**: Requires other Observables to emit at least once
- **Selective**: Source controls emission timing

**Basic Syntax:**
\`\`\`javascript
import { fromEvent, interval } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';

const clicks$ = fromEvent(document, 'click');
const timer$ = interval(1000);

clicks$.pipe(
  withLatestFrom(timer$),
  map(([click, timerValue]) => \`Clicked at timer: \${timerValue}\`)
).subscribe(console.log);
\`\`\`

**Real-world Use Cases:**
\`\`\`javascript
// Form submission with current form values
const submit$ = fromEvent(form, 'submit');
const formValues$ = form.valueChanges;

submit$.pipe(
  withLatestFrom(formValues$),
  map(([event, values]) => values) // Only need values, not event
).subscribe(formValues => {
  this.submitForm(formValues);
});

// Button click with user context
const click$ = fromEvent(button, 'click');
const user$ = this.authService.user$;
const permissions$ = this.authService.permissions$;

click$.pipe(
  withLatestFrom(user$, permissions$),
  filter(([click, user, permissions]) => 
    permissions.includes('can_click')
  ),
  map(([click, user, permissions]) => user)
).subscribe(user => {
  this.performAction(user);
});
\`\`\`

**withLatestFrom() vs combineLatest():**
\`\`\`javascript
// withLatestFrom() - only when source emits
const clicks$ = fromEvent(document, 'click');
const timer$ = interval(1000);

clicks$.pipe(
  withLatestFrom(timer$)
).subscribe(([click, timer]) => {
  // Only emits on clicks
});

// combineLatest() - when any emits
combineLatest([clicks$, timer$]).subscribe(([click, timer]) => {
  // Emits on clicks AND timer ticks
});
\`\`\`

**Advanced Examples:**
\`\`\`javascript
// API calls with current user context
const apiCall$ = this.http.get('/api/data');
const userContext$ = this.authService.user$;
const appState$ = this.appService.state$;

apiCall$.pipe(
  withLatestFrom(userContext$, appState$),
  switchMap(([data, user, state]) => {
    return this.processData(data, user, state);
  })
).subscribe(result => {
  this.displayResult(result);
});

// Keyboard shortcuts with application state
const keydown$ = fromEvent(document, 'keydown');
const editorState$ = this.editor.state$;
const clipboard$ = this.clipboard.content$;

keydown$.pipe(
  withLatestFrom(editorState$, clipboard$),
  filter(([event, editor, clipboard]) => 
    event.ctrlKey && event.key === 'v' && clipboard.content
  ),
  map(([event, editor, clipboard]) => ({
    position: editor.cursor,
    content: clipboard.content
  }))
).subscribe(({ position, content }) => {
  this.pasteContent(position, content);
});
\`\`\`

**Important Notes:**
- **Initial Values**: Other Observables must emit before combining
- **No Emission**: If source never emits, nothing is emitted
- **Memory**: Holds latest values from each Observable
- **Order**: Source value is first in emitted array

**Common Pattern:**
\`\`\`javascript
// User actions with current state
userActions$.pipe(
  withLatestFrom(userState$, appConfig$),
  map(([action, state, config]) => ({
    action,
    context: { state, config }
  }))
).subscribe(({ action, context }) => {
  this.executeAction(action, context);
});
\`\`\`

**When to Use:**
- **Event Handling**: User actions with current state
- **Form Submission**: Submit events with form values
- **API Context**: API responses with user/application context
- **Conditional Logic**: Actions based on current state`
  },
  {
    question: "What are Schedulers in RxJS?",
    idealAnswer: `**Schedulers** control the concurrency and execution context of Observable emissions and operator notifications.

**What They Do:**
- **Concurrency Control**: When and where code executes
- **Timing Control**: Delay and schedule emissions
- **Thread Management**: Execute on different threads/contexts
- **Performance**: Optimize execution for specific scenarios

**Built-in Schedulers:**
\`\`\`javascript
import { asap, async, queue, animationFrame } from 'rxjs';

// null/undefined - Synchronous (default)
of(1, 2, 3).subscribe(console.log); // Sync

// asapScheduler - Microtask (Promise.then)
of(1, 2, 3, asapScheduler).subscribe(console.log); // Next tick

// asyncScheduler - Macrotask (setTimeout)
of(1, 2, 3, asyncScheduler).subscribe(console.log); // After current stack

// queueScheduler - Queue-based scheduling
of(1, 2, 3, queueScheduler).subscribe(console.log); // Queued execution

// animationFrameScheduler - Animation frame
of(1, 2, 3, animationFrameScheduler).subscribe(console.log); // Next frame
\`\`\`

**Common Use Cases:**
\`\`\`javascript
// Animation loop
interval(0, animationFrameScheduler).pipe(
  map(() => this.updateAnimation())
).subscribe();

// Debounced search with async scheduling
searchInput.pipe(
  debounceTime(300, asyncScheduler),
  switchMap(query => this.searchAPI(query))
).subscribe(results => {
  this.displayResults(results);
});

// Recursive operations with queue scheduler
function processItems(items) {
  return from(items).pipe(
    concatMap(item => processItem(item)),
    observeOn(queueScheduler) // Prevent stack overflow
  );
}
\`\`\`

**Operator Scheduling:**
\`\`\`javascript
import { observeOn, subscribeOn } from 'rxjs/operators';

// Control where emissions are observed
source$.pipe(
  observeOn(asyncScheduler) // Observers run on async scheduler
).subscribe(observer);

// Control where subscription happens
source$.pipe(
  subscribeOn(asyncScheduler) // Subscribe on async scheduler
).subscribe(observer);

// Both together
source$.pipe(
  subscribeOn(asyncScheduler),
  observeOn(animationFrameScheduler)
).subscribe(observer);
\`\`\`

**Real-world Examples:**
\`\`\`javascript
// Canvas animation
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

interval(0, animationFrameScheduler).pipe(
  map(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawFrame(ctx);
    return performance.now();
  })
).subscribe(timestamp => {
  this.lastFrameTime = timestamp;
});

// Batch processing
const items = [...largeDataSet];
from(items).pipe(
  bufferCount(100),
  concatMap(batch => processBatch(batch)),
  observeOn(asyncScheduler) // Process in background
).subscribe(results => {
  this.updateProgress(results);
});

// UI updates
dataUpdates.pipe(
  observeOn(asapScheduler) // Next UI frame
).subscribe(data => {
  this.updateUI(data);
});
\`\`\`

**Custom Schedulers:**
\`\`\`javascript
import { Scheduler } from 'rxjs';

// Web Worker scheduler
const workerScheduler = new Scheduler(() => {
  // Custom scheduling logic
});

// Use custom scheduler
source$.pipe(
  observeOn(workerScheduler)
).subscribe();
\`\`\`

**Performance Considerations:**
- **Default**: Synchronous is fastest for simple operations
- **async**: Good for preventing UI blocking
- **animationFrame**: Essential for smooth animations
- **queue**: Prevents stack overflow in recursive operations

**When to Use:**
- **Animations**: animationFrameScheduler
- **UI Updates**: asapScheduler
- **Background Processing**: asyncScheduler
- **Recursive Operations**: queueScheduler`
  },
  {
    question: "What is the defer operator?",
    idealAnswer: `**defer()** is a creation operator that creates a new Observable for each observer, allowing fresh Observable creation at subscription time.

**Basic Behavior:**
- **Lazy Creation**: Creates Observable only when subscribed
- **Fresh Instance**: Each subscription gets new Observable
- **Factory Function**: Takes a function that returns Observable
- **Dynamic**: Can use current state during creation

**Basic Syntax:**
\`\`\`javascript
import { defer, of } from 'rxjs';

const deferred = defer(() => {
  console.log('Creating Observable');
  return of(Math.random());
});

deferred.subscribe(val => console.log('Sub 1:', val));
deferred.subscribe(val => console.log('Sub 2:', val));
// Each gets different random number
\`\`\`

**Common Use Cases:**
\`\`\`javascript
// Fresh API call for each subscriber
const userData = defer(() => {
  const userId = getCurrentUserId();
  return this.http.get(\`/api/users/\${userId}\`);
});

// Each subscriber gets fresh data
userData.subscribe(data => this.updateProfile(data));
userData.subscribe(data => this.updateSidebar(data));

// Current timestamp at subscription
const currentTime = defer(() => {
  return of(new Date().toISOString());
});

currentTime.subscribe(time => console.log('Sub 1:', time));
setTimeout(() => {
  currentTime.subscribe(time => console.log('Sub 2:', time));
}, 1000);
\`\`\`

**Real-world Examples:**
\`\`\`javascript
// WebSocket connection per subscriber
const websocket$ = defer(() => {
  const socket = new WebSocket('ws://localhost:8080');
  return new Observable(subscriber => {
    socket.onmessage = event => subscriber.next(JSON.parse(event.data));
    socket.onerror = error => subscriber.error(error);
    socket.onclose = () => subscriber.complete();
    
    return () => socket.close();
  });
});

// Each component gets its own WebSocket connection
websocket$.subscribe(data => this.component1Data = data);
websocket$.subscribe(data => this.component2Data = data);

// Database connection per subscription
const dbQuery = defer(() => {
  const connection = createDatabaseConnection();
  return connection.query('SELECT * FROM users').pipe(
    finalize(() => connection.close())
  );
});

// Fresh query execution each time
dbQuery.subscribe(users => this.displayUsers(users));
dbQuery.subscribe(users => this.exportUsers(users));
\`\`\`

**defer() vs of() with function:**
\`\`\`javascript
// of() - executes immediately
const immediate = of(getCurrentUser());
// User fetched immediately, same for all subscribers

// defer() - executes at subscription
const deferred = defer(() => of(getCurrentUser()));
// User fetched fresh for each subscriber
\`\`\`

**Advanced Patterns:**
\`\`\`javascript
// Conditional Observable creation
const conditionalObservable = defer(() => {
  if (this.user.isAdmin) {
    return this.getAdminData();
  } else {
    return this.getUserData();
  }
});

// Observable based on current state
const stateBasedObservable = defer(() => {
  const currentState = this.appState.getCurrent();
  return this.getDataForState(currentState);
});

// Retry with fresh Observable
const retryableObservable = defer(() => {
  return this.http.get('/api/data').pipe(
    retry(3),
    catchError(err => {
      console.log('Retrying with fresh request');
      return EMPTY;
    })
  );
});
\`\`\`

**Benefits:**
- **Fresh Data**: Each subscription gets current data
- **Resource Management**: Create resources per subscriber
- **State Dependency**: Use current state during creation
- **Memory Efficiency**: Don't hold resources until needed

**When to Use:**
- **API Calls**: Fresh data per subscription
- **Resource Creation**: Database connections, WebSocket connections
- **State-dependent**: Observable creation depends on current state
- **Time-sensitive**: Current timestamp, dynamic values`
  }
];

const hardQuestions = [
  {
    question: "What is backpressure in RxJS and how do you handle it?",
    idealAnswer: `**Backpressure** occurs when a producer emits values faster than a consumer can process them, leading to potential memory issues and performance degradation.

**Common Backpressure Scenarios:**
- **High-frequency events**: Mouse movements, scroll events
- **Fast data streams**: WebSocket messages, sensor data
- **Slow processing**: Complex computations, UI updates
- **Network constraints**: Limited bandwidth or server capacity

**Handling Strategies:**

**1. Buffering Operators**
\`\`\`javascript
import { bufferTime, bufferCount, bufferToggle } from 'rxjs/operators';

// Buffer by time
fastStream$.pipe(
  bufferTime(1000) // Collect values for 1 second
).subscribe(buffer => {
  console.log('Processed batch:', buffer);
});

// Buffer by count
fastStream$.pipe(
  bufferCount(50) // Collect 50 values
).subscribe(batch => processBatch(batch));
\`\`\`

**2. Throttling and Debouncing**
\`\`\`javascript
import { throttleTime, debounceTime, auditTime } from 'rxjs/operators';

// Throttle - process first, ignore rest
mouseEvents$.pipe(
  throttleTime(16) // ~60fps
).subscribe(updatePosition);

// Debounce - wait for pause
searchInput$.pipe(
  debounceTime(300)
).subscribe(performSearch);

// Audit - sample latest in window
fastStream$.pipe(
  auditTime(1000)
).subscribe(latestValue => updateUI(latestValue));
\`\`\`

**3. Dropping Strategies**
\`\`\`javascript
import { sample, throttle, first } from 'rxjs/operators';

// Sample at regular intervals
fastStream$.pipe(
  sample(interval(1000))
).subscribe(latestValue => updateDisplay(latestValue));

// Take only first N values
fastStream$.pipe(
  take(100)
).subscribe(processInitialValues);
\`\`\`

**4. Custom Backpressure**
\`\`\`javascript
// Custom backpressure with queue management
function controlledBackpressure(maxQueueSize = 100) {
  return source$ => new Observable(subscriber => {
    const queue = [];
    let processing = false;
    
    const processQueue = async () => {
      if (processing || queue.length === 0) return;
      processing = true;
      
      while (queue.length > 0) {
        const value = queue.shift();
        try {
          await processValue(value);
          subscriber.next(value);
        } catch (error) {
          subscriber.error(error);
          return;
        }
      }
      processing = false;
    };
    
    return source$.subscribe({
      next: value => {
        if (queue.length < maxQueueSize) {
          queue.push(value);
          processQueue();
        } else {
          console.warn('Queue overflow, dropping value');
        }
      },
      error: err => subscriber.error(err),
      complete: () => {
        processQueue().then(() => subscriber.complete());
      }
    });
  });
}
\`\`\`

**Best Practices:**
- **Choose appropriate strategy**: Based on use case requirements
- **Monitor memory usage**: Prevent memory leaks
- **Handle overflow gracefully**: Provide fallback mechanisms
- **Test with realistic data**: Simulate production conditions`
  },
  {
    question: "How do you implement custom operators in RxJS?",
    idealAnswer: `**Custom Operators** allow you to create reusable, composable operations that extend RxJS functionality.

**Function-based Custom Operators:**

**1. Simple Operator**
\`\`\`javascript
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Custom operator to multiply values
function multiplyBy(factor) {
  return source$ => new Observable(subscriber => {
    return source$.subscribe({
      next: value => subscriber.next(value * factor),
      error: err => subscriber.error(err),
      complete: () => subscriber.complete()
    });
  });
}

// Usage
of(1, 2, 3, 4).pipe(
  multiplyBy(3)
).subscribe(console.log); // 3, 6, 9, 12
\`\`\`

**2. Operator Using Existing Operators**
\`\`\`javascript
import { filter, map, tap } from 'rxjs/operators';

// Custom operator for filtering and logging
function debugFilter(predicate, logPrefix = 'Filter') {
  return source$ => source$.pipe(
    tap(value => console.log(\`\${logPrefix}: \${value}\`)),
    filter(predicate),
    tap(value => console.log(\`\${logPrefix} passed: \${value}\`))
  );
}

// Usage
of(1, 2, 3, 4, 5).pipe(
  debugFilter(x => x % 2 === 0, 'Even filter')
).subscribe(console.log); // 2, 4
\`\`\`

**3. Higher-order Custom Operator**
\`\`\`javascript
// Custom operator with retry and exponential backoff
function retryWithBackoff(maxRetries = 3, initialDelay = 1000) {
  return source$ => new Observable(subscriber => {
    let retryCount = 0;
    let currentDelay = initialDelay;
    
    const attempt = () => {
      return source$.subscribe({
        next: value => subscriber.next(value),
        error: err => {
          if (retryCount < maxRetries) {
            retryCount++;
            console.log(\`Retry \${retryCount} in \${currentDelay}ms\`);
            setTimeout(attempt, currentDelay);
            currentDelay *= 2; // Exponential backoff
          } else {
            subscriber.error(err);
          }
        },
        complete: () => subscriber.complete()
      });
    };
    
    return attempt();
  });
}

// Usage
this.http.get('/api/data').pipe(
  retryWithBackoff(5, 1000)
).subscribe(data => {
  this.data = data;
});
\`\`\`

**4. Stateful Custom Operator**
\`\`\`javascript
// Custom operator that tracks running total
function accumulateTotal() {
  return source$ => new Observable(subscriber => {
    let total = 0;
    
    return source$.subscribe({
      next: value => {
        total += value;
        subscriber.next({ value, total });
      },
      error: err => subscriber.error(err),
      complete: () => subscriber.complete()
    });
  });
}

// Usage
of(10, 20, 30, 40).pipe(
  accumulateTotal()
).subscribe(({ value, total }) => {
  console.log(\`Value: \${value}, Total: \${total}\`);
});
// Output: Value: 10, Total: 10; Value: 20, Total: 30; etc.
\`\`\`

**5. Async Custom Operator**
\`\`\`javascript
// Custom operator for async processing with concurrency control
function concurrentMap(mapper, concurrency = 3) {
  return source$ => new Observable(subscriber => {
    let activeCount = 0;
    let hasCompleted = false;
    const buffer = [];
    
    const processNext = () => {
      if (buffer.length === 0 || activeCount >= concurrency) return;
      
      const value = buffer.shift();
      activeCount++;
      
      Promise.resolve(mapper(value))
        .then(result => {
          subscriber.next(result);
          activeCount--;
          processNext();
        })
        .catch(error => {
          subscriber.error(error);
        });
    };
    
    return source$.subscribe({
      next: value => {
        buffer.push(value);
        processNext();
      },
      error: err => subscriber.error(err),
      complete: () => {
        hasCompleted = true;
        if (activeCount === 0 && buffer.length === 0) {
          subscriber.complete();
        }
      }
    });
  });
}

// Usage
of(1, 2, 3, 4, 5, 6).pipe(
  concurrentMap(x => fetch(\`/api/items/\${x}\`).then(r => r.json()), 2)
).subscribe(data => {
  console.log('Processed:', data);
});
\`\`\`

**Best Practices:**
- **Follow Observable contract**: Proper error handling and completion
- **Handle subscription**: Return cleanup function
- **Document behavior**: Clear documentation of side effects
- **Test thoroughly**: Unit tests for various scenarios
- **Consider performance**: Memory usage and computational efficiency`
  },
  {
    question: "What are multicasting strategies and when should you use them?",
    idealAnswer: `**Multicasting** in RxJS allows multiple subscribers to share the same observable execution, preventing duplicate work and ensuring consistency.

**Core Concepts:**
- **Unicast (Cold)**: Each subscription gets independent execution
- **Multicast (Hot)**: All subscriptions share the same execution
- **Connectable Observables**: Manual control over execution start/stop

**Multicasting Strategies:**

**1. Subject-based Multicasting**
\`\`\`javascript
import { Subject, interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

// Using Subject for manual multicasting
const source$ = interval(1000).pipe(
  take(5),
  tap(() => console.log('Side effect executed'))
);

const subject = new Subject();
source$.subscribe(subject);

// Multiple subscribers share execution
subject.subscribe(val => console.log('Subscriber 1:', val));
subject.subscribe(val => console.log('Subscriber 2:', val));

// Side effect executes only once per emission
\`\`\`

**2. publish() Operator**
\`\`\`javascript
import { publish, ConnectableObservable } from 'rxjs/operators';

const source$ = interval(1000).pipe(
  take(3),
  tap(() => console.log('Expensive operation')),
  publish() // Returns ConnectableObservable
) as ConnectableObservable<number>;

// Subscribers don't trigger execution
source$.subscribe(val => console.log('Sub 1:', val));
source$.subscribe(val => console.log('Sub 2:', val));

// Manually start execution
const connection = source$.connect();
// Execution starts, both subscribers receive same values

// Stop execution
connection.unsubscribe();
\`\`\`

**3. share() Operator**
\`\`\`javascript
import { share } from 'rxjs/operators';

// Automatic reference counting
const shared$ = interval(1000).pipe(
  take(5),
  tap(() => console.log('Operation executed')),
  share() // Auto-connect/disconnect based on subscribers
);

// First subscriber starts execution
const sub1 = shared$.subscribe(val => console.log('Sub 1:', val));

// Second subscriber joins existing execution
const sub2 = shared$.subscribe(val => console.log('Sub 2:', val));

// When all unsubscribe, execution stops
sub1.unsubscribe();
sub2.unsubscribe();
\`\`\`

**4. Specialized Publishing Operators**
\`\`\`javascript
import { publishBehavior, publishReplay, publishLast } from 'rxjs/operators';

// publishBehavior - Initial value + latest to new subscribers
const behavior$ = source$.pipe(
  publishBehavior('initial value')
);

// publishReplay - Replay N last values to new subscribers
const replay$ = source$.pipe(
  publishReplay(2) // Replay last 2 values
);

// publishLast - Emit only last value on completion
const last$ = source$.pipe(
  publishLast()
);
\`\`\`

**5. Advanced share() Configuration**
\`\`\`javascript
import { share } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

// Custom share with replay and reset policies
const customShared$ = source$.pipe(
  share({
    connector: () => new ReplaySubject(3), // Replay last 3 values
    resetOnError: true,                    // Reset on error
    resetOnComplete: false,                // Keep values on complete
    resetOnRefCountZero: false             // Keep connection alive
  })
);

// HTTP caching example
const cachedUser$ = this.http.get('/api/user').pipe(
  share({
    connector: () => new ReplaySubject(1),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: true // Refetch when no subscribers
  })
);

// Multiple components get same cached data
cachedUser$.subscribe(user => this.updateProfile(user));
cachedUser$.subscribe(user => this.updateSidebar(user));
\`\`\`

**Use Cases:**

**1. HTTP Request Sharing**
\`\`\`javascript
// Prevent duplicate API calls
const userData$ = this.http.get('/api/user').pipe(
  shareReplay(1) // Cache and share
);

// Multiple services get same data
this.profileService.setUserData(userData$);
this.notificationService.setUserData(userData$);
\`\`\`

**2. WebSocket Connection Management**
\`\`\`javascript
// Single WebSocket connection for multiple components
const websocket$ = new Observable(subscriber => {
  const ws = new WebSocket('ws://localhost:8080');
  ws.onmessage = event => subscriber.next(JSON.parse(event.data));
  ws.onerror = error => subscriber.error(error);
  ws.onclose = () => subscriber.complete();
  return () => ws.close();
}).pipe(
  share()
);

// Multiple components share same connection
this.chatService.connect(websocket$);
this.notificationService.connect(websocket$);
\`\`\`

**3. Expensive Computation Caching**
\`\`\`javascript
// Cache expensive data processing
const processedData$ = this.rawData$.pipe(
  switchMap(data => this.expensiveProcessing(data)),
  shareReplay(1)
);

// Multiple visualizations use same processed data
this.chartComponent.setData(processedData$);
this.tableComponent.setData(processedData$);
\`\`\`

**Performance Considerations:**
- **Memory Usage**: Replay subjects hold values in memory
- **Connection Management**: Proper cleanup to prevent leaks
- **Timing Issues**: Hot observables may miss early emissions
- **Error Handling**: Error propagation in multicasted streams`
  },
  {
    question: "How do you implement advanced scheduling and time control in RxJS?",
    idealAnswer: `**Advanced Scheduling** in RxJS provides fine-grained control over when and where observable operations execute, essential for performance optimization and testing.

**Scheduler Types and Use Cases:**

**1. Built-in Schedulers**
\`\`\`javascript
import { asap, async, queue, animationFrame, VirtualTimeScheduler } from 'rxjs';

// asapScheduler - Microtask queue (Promise.then)
// Best for: UI updates, non-blocking operations
of(1, 2, 3, asapScheduler).subscribe(console.log);

// asyncScheduler - Macrotask queue (setTimeout)
// Best for: Background processing, timeouts
timer(0, 1000, asyncScheduler).subscribe(console.log);

// queueScheduler - Current event loop iteration
// Best for: Recursive operations, preventing stack overflow
from([1, 2, 3, 4, 5], queueScheduler).subscribe(console.log);

// animationFrameScheduler - requestAnimationFrame
// Best for: Animations, visual updates
interval(0, animationFrameScheduler).subscribe(() => updateAnimation());
\`\`\`

**2. Advanced Scheduling Patterns**
\`\`\`javascript
import { observeOn, subscribeOn } from 'rxjs/operators';

// Control execution context
source$.pipe(
  subscribeOn(asyncScheduler),    // Where subscription happens
  observeOn(asapScheduler)        // Where emissions are observed
).subscribe(observer);

// Chained scheduling for complex workflows
heavyComputation$.pipe(
  subscribeOn(asyncScheduler),     // Start in background
  observeOn(animationFrameScheduler) // Update UI
).subscribe(updateUI);
\`\`\`

**3. Custom Scheduler Implementation**
\`\`\`javascript
import { Scheduler } from 'rxjs';

// Web Worker scheduler for CPU-intensive tasks
class WorkerScheduler extends Scheduler {
  constructor(worker) {
    super((action) => {
      const id = Math.random();
      worker.postMessage({ type: 'schedule', id, action });
      return new Subscription(() => {
        worker.postMessage({ type: 'cancel', id });
      });
    });
  }
}

// Priority-based scheduler
class PriorityScheduler extends Scheduler {
  constructor() {
    super((action) => {
      const task = { action, priority: 0, id: Math.random() };
      this.queue.push(task);
      this.queue.sort((a, b) => b.priority - a.priority);
      this.processQueue();
      return new Subscription(() => {
        this.queue = this.queue.filter(t => t.id !== task.id);
      });
    });
    this.queue = [];
  }
  
  processQueue() {
    if (this.processing || this.queue.length === 0) return;
    this.processing = true;
    
    const task = this.queue.shift();
    Promise.resolve().then(() => {
      task.action();
      this.processing = false;
      this.processQueue();
    });
  }
}
\`\`\`

**4. Time Control and Virtual Time**
\`\`\`javascript
import { TestScheduler } from 'rxjs/testing';

// Virtual time for testing
const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

testScheduler.run(({ cold, expectObservable, time }) => {
  const source$ = cold('-a-b-c-|', { a: 1, b: 2, c: 3 });
  const expected =     '--a-b-c-|';
  
  const result$ = source$.pipe(
    delay(time('---')) // 30ms virtual time
  );
  
  expectObservable(result$).toBe(expected, { a: 1, b: 2, c: 3 });
});

// Time manipulation utilities
const timeOperators = {
  // Conditional delay based on value
  conditionalDelay: (predicate, delayTime) => source$ => 
    source$.pipe(
      concatMap(value => 
        predicate(value) 
          ? of(value).pipe(delay(delayTime))
          : of(value)
      )
    ),
  
  // Adaptive throttling based on load
  adaptiveThrottle: (getLoadFactor) => source$ =>
    source$.pipe(
      throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
      }),
      // Adjust throttle based on system load
      switchMap(value => {
        const load = getLoadFactor();
        const adaptiveDelay = Math.min(5000, 1000 * load);
        return of(value).pipe(delay(adaptiveDelay));
      })
    )
};
\`\`\`

**5. Advanced Time-based Patterns**
\`\`\`javascript
import { timer, interval, fromEvent } from 'rxjs';
import { windowTime, bufferTime, auditTime, throttleTime, debounceTime } from 'rxjs/operators';

// Time-windowed processing with overlap
const slidingWindow$ = source$.pipe(
  windowTime(5000, 1000), // 5s windows, slide every 1s
  switchMap(window$ => window$.pipe(
    toArray(),
    map(batch => processBatch(batch))
  ))
);

// Adaptive debouncing based on input frequency
const adaptiveDebounce = (baseDelay = 300) => source$ => source$.pipe(
  debounceTime(() => {
    const recentActivity = this.getRecentActivityCount();
    return Math.max(100, baseDelay - recentActivity * 50);
  })
);

// Time-based rate limiting with burst allowance
const tokenBucketRateLimit = (rate = 5, burst = 10) => source$ => {
  let tokens = burst;
  let lastRefill = Date.now();
  
  return source$.pipe(
    concatMap(value => {
      const now = Date.now();
      const timePassed = (now - lastRefill) / 1000;
      tokens = Math.min(burst, tokens + timePassed * rate);
      lastRefill = now;
      
      if (tokens >= 1) {
        tokens--;
        return of(value);
      } else {
        return EMPTY; // Skip this value
      }
    })
  );
};
\`\`\`

**6. Performance Optimization with Scheduling**
\`\`\`javascript
// Batch processing with background scheduling
const batchProcessor = (batchSize = 100, delay = 0) => source$ => source$.pipe(
  bufferCount(batchSize),
  observeOn(asyncScheduler), // Process batches in background
  concatMap(batch => 
    from(batch).pipe(
      mergeMap(item => processItem(item), 4), // Parallel processing
      toArray()
    )
  ),
  delay(delay), // Prevent UI blocking
  observeOn(asapScheduler) // Return to UI thread
);

// Progressive loading with time slicing
const progressiveLoad = (items, timeSlice = 16) => {
  let index = 0;
  
  return new Observable(subscriber => {
    const processSlice = () => {
      const startTime = performance.now();
      
      while (index < items.length && performance.now() - startTime < timeSlice) {
        subscriber.next(items[index]);
        index++;
      }
      
      if (index < items.length) {
        requestAnimationFrame(processSlice);
      } else {
        subscriber.complete();
      }
    };
    
    requestAnimationFrame(processSlice);
  });
};
\`\`\`

**Best Practices:**
- **Choose appropriate scheduler**: Based on operation type and requirements
- **Avoid unnecessary scheduling**: Synchronous is fastest when possible
- **Consider thread safety**: Shared state across schedulers
- **Test with virtual time**: For deterministic testing of time-based code
- **Monitor performance**: Profile scheduler overhead`
  },
  {
    question: "What are advanced RxJS testing strategies and marble diagrams?",
    idealAnswer: `**Advanced RxJS Testing** requires specialized strategies to test asynchronous streams, time-based operators, and complex observable interactions.

**Marble Diagram Syntax:**
\`\`\`
Basic Syntax:
- '-' : Time passage (1 frame = 10ms virtual time)
- '|' : Complete notification
- '#' : Error notification
- 'a', 'b', 'c' : Emitted values
- '(' ')' : Group synchronous events
- '^' : Subscription point (hot observables)
- '!' : Unsubscription point

Examples:
'-a-b-c-|'     : Emit a, b, c, then complete
'-a-b-#'        : Emit a, b, then error
'-(ab)-c-|'     : Emit a and b synchronously, then c
'---a---b---'   : Emit a at 30ms, b at 80ms
\`\`\`

**1. TestScheduler Fundamentals**
\`\`\`javascript
import { TestScheduler } from 'rxjs/testing';

describe('Advanced RxJS Testing', () => {
  let scheduler: TestScheduler;
  
  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });
  
  it('should test complex operator chains', () => {
    scheduler.run(({ cold, hot, expectObservable, expectSubscriptions }) => {
      const input$ = cold('-a-b-c-d-|', { 
        a: 1, b: 2, c: 3, d: 4 
      });
      const expected =     '--a-b-c-|';
      const subs =          '^-------!';
      
      const result$ = input$.pipe(
        filter(x => x % 2 === 1), // 1, 3
        map(x => x * 2),          // 2, 6
        take(2)                   // Take first 2
      );
      
      expectObservable(result$).toBe(expected, { a: 2, b: 6 });
      expectSubscriptions(input$.subscriptions).toBe(subs);
    });
  });
});
\`\`\`

**2. Testing Time-based Operators**
\`\`\`javascript
it('should test debouncing with varying delays', () => {
  scheduler.run(({ cold, time, expectObservable }) => {
    const input$ = cold('-a--bc---d-|', { a: 'A', b: 'B', c: 'C', d: 'D' });
    const expected =     '-------a--d-|';
    
    const result$ = input$.pipe(
      debounceTime(time('---')) // 30ms debounce
    );
    
    expectObservable(result$).toBe(expected, { a: 'C', d: 'D' });
  });
});

it('should test window operator', () => {
  scheduler.run(({ cold, expectObservable }) => {
    const input$ = cold('-a-b-c-d-e-f-|');
    const expected =     'x---y---z---|';
    const expectedValues = {
      x: ['a', 'b'],
      y: ['c', 'd'], 
      z: ['e', 'f']
    };
    
    const result$ = input$.pipe(
      windowTime(time('----')), // 40ms windows
      map(window$ => window$.pipe(toArray())),
      mergeAll()
    );
    
    expectObservable(result$).toBe(expected, expectedValues);
  });
});
\`\`\`

**3. Testing Error Scenarios**
\`\`\`javascript
it('should test error handling with retry', () => {
  scheduler.run(({ cold, expectObservable }) => {
    const error$ = cold('-a-#', { a: 1 }, new Error('Test error'));
    const expected =     '-a--a--a-#';
    
    const result$ = error$.pipe(
      retry(2),
      catchError(err => throwError(err))
    );
    
    expectObservable(result$).toBe(expected, { a: 1 }, new Error('Test error'));
  });
});

it('should test catchError with fallback', () => {
  scheduler.run(({ cold, expectObservable }) => {
    const source$ = cold('-a-#', { a: 1 }, new Error('Failed'));
    const fallback$ = cold('--b-|', { b: 999 });
    const expected =     '-a---b-|';
    
    const result$ = source$.pipe(
      catchError(err => fallback$)
    );
    
    expectObservable(result$).toBe(expected, { a: 1, b: 999 });
  });
});
\`\`\`

**4. Testing Hot Observables and Subscriptions**
\`\`\`javascript
it('should test hot observable behavior', () => {
  scheduler.run(({ hot, expectObservable, expectSubscriptions }) => {
    const hot$ = hot('-a-b-c-d-e-f-|', { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 });
    const sub1 =          '^----!';
    const sub2 =          '---^----!';
    const expected1 =     '--b-c-';
    const expected2 =     '----d-e-';
    
    expectObservable(hot$, sub1).toBe(expected1, { b: 2, c: 3 });
    expectObservable(hot$, sub2).toBe(expected2, { d: 4, e: 5 });
  });
});

it('should test multicast behavior', () => {
  scheduler.run(({ cold, expectObservable }) => {
    const source$ = cold('-a-b-c-|');
    const multicast$ = source$.pipe(shareReplay(1));
    
    const sub1 = '^----!';
    const sub2 = '--^---!';
    const expected1 = '-a-b-c-|';
    const expected2 = '--b-c-|';
    
    expectObservable(multicast$, sub1).toBe(expected1, { a: 'A', b: 'B', c: 'C' });
    expectObservable(multicast$, sub2).toBe(expected2, { b: 'B', c: 'C' });
  });
});
\`\`\`

**5. Testing Custom Operators**
\`\`\`javascript
// Custom operator to test
function customFilter<T>(predicate: (value: T) => boolean, defaultValue: T) {
  return (source$: Observable<T>) => new Observable<T>(subscriber => {
    return source$.subscribe({
      next: value => {
        if (predicate(value)) {
          subscriber.next(value);
        } else {
          subscriber.next(defaultValue);
        }
      },
      error: err => subscriber.error(err),
      complete: () => subscriber.complete()
    });
  });
}

it('should test custom operator', () => {
  scheduler.run(({ cold, expectObservable }) => {
    const input$ = cold('-a-b-c-|', { a: 1, b: 2, c: 3 });
    const expected =     '-x-y-z-|';
    
    const result$ = input$.pipe(
      customFilter(x => x % 2 === 0, 0)
    );
    
    expectObservable(result$).toBe(expected, { x: 0, y: 2, z: 0 });
  });
});
\`\`\`

**6. Integration Testing with Real Dependencies**
\`\`\`javascript
// Mock service for integration testing
class MockDataService {
  private responses: { [key: string]: Observable<any> } = {};
  
  setResponse(key: string, response: Observable<any>) {
    this.responses[key] = response;
  }
  
  getData(key: string): Observable<any> {
    return this.responses[key] || EMPTY;
  }
}

it('should test complete workflow', () => {
  scheduler.run(({ cold, expectObservable }) => {
    const mockService = new MockDataService();
    const userResponse = cold('--u-|', { u: { id: 1, name: 'John' } });
    const postsResponse = cold('---p-|', { p: [{ id: 1, title: 'Post 1' }] });
    
    mockService.setResponse('user', userResponse);
    mockService.setResponse('posts', postsResponse);
    
    const userId$ = cold('-u-|', { u: 1 });
    const expected =     '-----r-|';
    
    const result$ = userId$.pipe(
      switchMap(id => 
        zip(
          mockService.getData('user'),
          mockService.getData('posts')
        ).pipe(
          map(([user, posts]) => ({ user, posts }))
        )
      )
    );
    
    expectObservable(result$).toBe(expected, { 
      r: { user: { id: 1, name: 'John' }, posts: [{ id: 1, title: 'Post 1' }] }
    });
  });
});
\`\`\`

**7. Performance and Load Testing**
\`\`\`javascript
it('should handle high-frequency events', () => {
  scheduler.run(({ cold, expectObservable }) => {
    // Simulate 1000 events over 1 second
    const events = Array.from({ length: 1000 }, (_, i) => i);
    const marbles = events.map(() => 'a').join('');
    const values = events.reduce((acc, val) => ({ ...acc, a: val }), {});
    
    const input$ = cold(marbles, values);
    const expected = marbles.replace(/a/g, 'b');
    const expectedValues = events.reduce((acc, val) => ({ ...acc, b: val * 2 }), {});
    
    const result$ = input$.pipe(
      bufferTime(100),
      mergeMap(buffer => from(buffer).pipe(
        map(x => x * 2)
      ))
    );
    
    expectObservable(result$).toBe(expected, expectedValues);
  });
});
\`\`\`

**Best Practices:**
- **Test both happy path and edge cases**: Errors, empty streams, timing variations
- **Use descriptive marble diagrams**: Clear representation of expected behavior
- **Test subscription timing**: Especially for hot observables
- **Mock external dependencies**: Isolate the code under test
- **Test performance characteristics**: High-frequency events, memory usage
- **Use virtual time**: Deterministic testing of time-based operators`
  },
  {
    question: "How do you optimize RxJS performance and handle memory management?",
    idealAnswer: `**RxJS Performance Optimization** requires understanding of memory management, subscription patterns, and operator efficiency to build scalable reactive applications.

**Memory Management Strategies:**

**1. Subscription Lifecycle Management**
\`\`\`javascript
import { Subject, takeUntil, fromEvent } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

// Component-level subscription management
@Component({...})
export class OptimizedComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private subscriptions: Subscription[] = [];
  
  ngOnInit() {
    // Pattern 1: takeUntil (recommended)
    this.dataService.getData().pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.handleData(data));
    
    // Pattern 2: Manual tracking for complex scenarios
    const sub = this.realtimeService.stream().pipe(
      finalize(() => console.log('Stream cleaned up'))
    ).subscribe(data => this.updateUI(data));
    
    this.subscriptions.push(sub);
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    
    // Manual cleanup for tracked subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }
}

// Service-level singleton management
@Injectable({...})
export class CacheService {
  private cache$ = new BehaviorSubject<Map<string, any>>(new Map());
  private cleanup$ = new Subject<void>();
  
  constructor() {
    // Auto-cleanup after inactivity
    this.cache$.pipe(
      debounceTime(300000), // 5 minutes
      takeUntil(this.cleanup$)
    ).subscribe(() => this.clearExpiredCache());
  }
  
  ngOnDestroy() {
    this.cleanup$.next();
    this.cleanup$.complete();
  }
}
\`\`\`

**2. Operator Efficiency and Selection**
\`\`\`javascript
// Efficient filtering strategies
const optimizedFiltering = {
  // Use distinctUntilChanged for duplicate prevention
  preventDuplicates: source$ => source$.pipe(
    distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
  ),
  
  // Use auditTime for high-frequency events
  highFrequencyHandler: source$ => source$.pipe(
    auditTime(16), // ~60fps
    map(event => this.processEvent(event))
  ),
  
  // Use shareReplay for caching expensive operations
  cacheExpensiveOperation: source$ => source$.pipe(
    switchMap(data => this.expensiveComputation(data)),
    shareReplay(1), // Cache last result
    distinctUntilChanged()
  )
};

// Efficient data transformation
const efficientTransformation = source$ => source$.pipe(
  // Use object spread efficiently
  map(data => ({ ...data, processed: true })),
  
  // Batch operations when possible
  bufferCount(100),
  mergeMap(batch => this.processBatch(batch), 4), // Concurrency 4
  
  // Flatten results
  mergeAll()
);
\`\`\`

**3. Memory Leak Prevention**
\`\`\`javascript
// Common memory leak patterns and solutions

// ❌ Memory leak: Unmanaged timer
class BadTimer {
  start() {
    interval(1000).subscribe(() => this.update());
  }
}

// ✅ Fixed: Proper cleanup
class GoodTimer {
  private subscription?: Subscription;
  
  start() {
    this.subscription = interval(1000).subscribe(() => this.update());
  }
  
  stop() {
    this.subscription?.unsubscribe();
  }
}

// ❌ Memory leak: Subject not completed
class BadSubjectService {
  private subject = new Subject<any>();
  
  getData() {
    return this.subject.asObservable();
  }
}

// ✅ Fixed: Proper lifecycle
class GoodSubjectService {
  private subject = new Subject<any>();
  private destroy$ = new Subject<void>();
  
  getData() {
    return this.subject.asObservable().pipe(takeUntil(this.destroy$));
  }
  
  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.subject.complete();
  }
}

// Memory monitoring utility
class MemoryMonitor {
  private observers = new Set<Subscription>();
  private maxObservers = 100;
  
  addSubscription(subscription: Subscription) {
    this.observers.add(subscription);
    
    if (this.observers.size > this.maxObservers) {
      console.warn('Too many active subscriptions:', this.observers.size);
      this.logActiveSubscriptions();
    }
    
    subscription.add(() => this.observers.delete(subscription));
  }
  
  private logActiveSubscriptions() {
    console.log('Active subscriptions:', Array.from(this.observers));
  }
}
\`\`\`

**4. Performance Monitoring and Profiling**
\`\`\`javascript
// Performance monitoring decorator
function monitorPerformance<T>(name: string) {
  return (source$: Observable<T>) => new Observable<T>(subscriber => {
    const startTime = performance.now();
    let count = 0;
    
    return source$.subscribe({
      next: value => {
        count++;
        subscriber.next(value);
      },
      error: err => {
        const duration = performance.now() - startTime;
        console.log(\`\${name} failed after \${duration}ms, \${count} emissions\`);
        subscriber.error(err);
      },
      complete: () => {
        const duration = performance.now() - startTime;
        console.log(\`\${name} completed in \${duration}ms, \${count} emissions\`);
        subscriber.complete();
      }
    });
  });
}

// Usage
this.http.get('/api/data').pipe(
  monitorPerformance('API Call'),
  map(data => this.transformData(data)),
  monitorPerformance('Data Transformation')
).subscribe(data => this.displayData(data));

// Memory usage tracking
class MemoryTracker {
  private snapshots: { timestamp: number; memory: number }[] = [];
  
  takeSnapshot() {
    if (performance.memory) {
      this.snapshots.push({
        timestamp: Date.now(),
        memory: performance.memory.usedJSHeapSize
      });
      
      // Keep only last 100 snapshots
      if (this.snapshots.length > 100) {
        this.snapshots.shift();
      }
    }
  }
  
  getMemoryTrend() {
    if (this.snapshots.length < 2) return 'stable';
    
    const recent = this.snapshots.slice(-10);
    const trend = recent[recent.length - 1].memory - recent[0].memory;
    
    return trend > 0 ? 'increasing' : 'decreasing';
  }
}
\`\`\`

**5. Advanced Optimization Techniques**
\`\`\`javascript
// Virtual scrolling with RxJS
class VirtualScroller {
  private viewportHeight = 600;
  private itemHeight = 40;
  private visibleCount = Math.ceil(this.viewportHeight / this.itemHeight);
  
  createVirtualStream(data$: Observable<any[]>, scrollTop$: Observable<number>) {
    return combineLatest([data$, scrollTop$]).pipe(
      map(([data, scrollTop]) => {
        const startIndex = Math.floor(scrollTop / this.itemHeight);
        const endIndex = Math.min(startIndex + this.visibleCount + 1, data.length);
        
        return {
          items: data.slice(startIndex, endIndex),
          startIndex,
          totalHeight: data.length * this.itemHeight,
          offsetY: startIndex * this.itemHeight
        };
      }),
      distinctUntilChanged((prev, curr) => 
        prev.startIndex === curr.startIndex && 
        prev.items.length === curr.items.length
      )
    );
  }
}

// Efficient data caching with LRU
class LRUCache<T> {
  private cache = new Map<string, { value: T; timestamp: number }>();
  private maxSize = 100;
  private ttl = 300000; // 5 minutes
  
  get(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    // Move to end (most recently used)
    this.cache.delete(key);
    this.cache.set(key, item);
    return item.value;
  }
  
  set(key: string, value: T): void {
    // Remove oldest if at capacity
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    
    this.cache.set(key, { value, timestamp: Date.now() });
  }
}

// Reactive state management with optimized updates
class OptimizedStateManager {
  private state$ = new BehaviorSubject<any>({});
  private updates$ = new Subject<Partial<any>>();
  
  constructor() {
    this.updates$.pipe(
      // Batch rapid updates
      debounceTime(16),
      // Only process actual changes
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
      // Optimize state updates
      scan((state, update) => this.mergeOptimized(state, update), {})
    ).subscribe(newState => {
      this.state$.next(newState);
    });
  }
  
  private mergeOptimized(state: any, update: Partial<any>): any {
    // Only update changed properties
    const result = { ...state };
    
    for (const [key, value] of Object.entries(update)) {
      if (state[key] !== value) {
        result[key] = value;
      }
    }
    
    return result;
  }
  
  updateState(update: Partial<any>) {
    this.updates$.next(update);
  }
  
  getState() {
    return this.state$.asObservable();
  }
}
\`\`\`

**Best Practices:**
- **Always unsubscribe**: Prevent memory leaks with proper cleanup
- **Choose appropriate operators**: Use efficient operators for specific use cases
- **Monitor performance**: Track memory usage and execution time
- **Batch operations**: Reduce frequency of expensive operations
- **Use caching**: Share expensive computations with shareReplay
- **Profile regularly**: Identify and fix performance bottlenecks`
  },
  {
    question: "What are RxJS design patterns and architectural best practices?",
    idealAnswer: `**RxJS Design Patterns** provide proven solutions for common reactive programming challenges, enabling scalable and maintainable applications.

**1. Service Layer Pattern**
\`\`\`javascript
// Base reactive service
@Injectable()
export abstract class ReactiveService {
  protected destroy$ = new Subject<void>();
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  protected takeUntilDestroy<T>(): MonoTypeOperatorFunction<T> {
    return takeUntil(this.destroy$);
  }
}

// Specific service implementation
@Injectable()
export class UserService extends ReactiveService {
  private user$ = new BehaviorSubject<User | null>(null);
  private permissions$ = new BehaviorSubject<Permission[]>([]);
  
  // Public observables (read-only)
  public readonly user$ = this.user$.asObservable();
  public readonly permissions$ = this.permissions$.asObservable();
  public readonly isAdmin$ = this.user$.pipe(
    map(user => user?.role === 'admin'),
    distinctUntilChanged()
  );
  
  constructor(private http: HttpClient) {
    super();
    this.initializeUser();
  }
  
  private initializeUser() {
    this.http.get<User>('/api/user/current').pipe(
      this.takeUntilDestroy(),
      tap(user => this.user$.next(user)),
      switchMap(user => this.loadUserPermissions(user.id))
    ).subscribe(permissions => {
      this.permissions$.next(permissions);
    });
  }
  
  updateUser(userData: Partial<User>): Observable<User> {
    return this.http.put<User>(\`/api/users/\${this.user$.value?.id}\`, userData).pipe(
      tap(updatedUser => this.user$.next(updatedUser))
    );
  }
}
\`\`\`

**2. State Management Pattern**
\`\`\`javascript
// Redux-like state management with RxJS
interface AppState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

@Injectable()
export class StoreService {
  private state$ = new BehaviorSubject<AppState>({
    user: null,
    loading: false,
    error: null
  });
  
  private actions$ = new Subject<Action>();
  
  constructor() {
    this.setupReducer();
  }
  
  private setupReducer() {
    this.actions$.pipe(
      scan((state, action) => this.reducer(state, action), this.state$.value)
    ).subscribe(newState => {
      this.state$.next(newState);
    });
  }
  
  private reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
      case 'LOAD_USER_START':
        return { ...state, loading: true, error: null };
      case 'LOAD_USER_SUCCESS':
        return { ...state, loading: false, user: action.payload };
      case 'LOAD_USER_ERROR':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  dispatch(action: Action) {
    this.actions$.next(action);
  }
  
  select<T>(selector: (state: AppState) => T): Observable<T> {
    return this.state$.pipe(
      map(selector),
      distinctUntilChanged()
    );
  }
  
  // Convenience selectors
  readonly user$ = this.select(state => state.user);
  readonly loading$ = this.select(state => state.loading);
  readonly error$ = this.select(state => state.error);
}

// Usage in component
@Component({...})
export class UserComponent {
  user$ = this.store.select(state => state.user);
  loading$ = this.store.select(state => state.loading);
  
  constructor(private store: StoreService) {}
  
  loadUser() {
    this.store.dispatch({ type: 'LOAD_USER_START' });
    this.userService.getUser().pipe(
      tap(user => this.store.dispatch({ type: 'LOAD_USER_SUCCESS', payload: user })),
      catchError(error => {
        this.store.dispatch({ type: 'LOAD_USER_ERROR', payload: error.message });
        return EMPTY;
      })
    ).subscribe();
  }
}
\`\`\`

**3. Data Access Layer Pattern**
\`\`\`javascript
// Repository pattern with caching
@Injectable()
export class UserRepository {
  private cache = new Map<number, Observable<User>>();
  private cacheExpiry = new Map<number, number>();
  private readonly CACHE_TTL = 300000; // 5 minutes
  
  constructor(private http: HttpClient) {}
  
  getUser(id: number): Observable<User> {
    // Check cache
    const cached = this.getCached(id);
    if (cached) return cached;
    
    // Create new request with caching
    const user$ = this.http.get<User>(\`/api/users/\${id}\`).pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
    
    this.setCached(id, user$);
    return user$;
  }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users').pipe(
      shareReplay(1)
    );
  }
  
  updateUser(user: Partial<User>): Observable<User> {
    return this.http.put<User>(\`/api/users/\${user.id}\`, user).pipe(
      tap(updatedUser => {
        // Invalidate cache
        this.invalidateCache(updatedUser.id);
      })
    );
  }
  
  private getCached(id: number): Observable<User> | null {
    const cached = this.cache.get(id);
    const expiry = this.cacheExpiry.get(id);
    
    if (cached && expiry && Date.now() < expiry) {
      return cached;
    }
    
    this.invalidateCache(id);
    return null;
  }
  
  private setCached(id: number, user$: Observable<User>) {
    this.cache.set(id, user$);
    this.cacheExpiry.set(id, Date.now() + this.CACHE_TTL);
  }
  
  private invalidateCache(id: number) {
    this.cache.delete(id);
    this.cacheExpiry.delete(id);
  }
}
\`\`\`

**4. Event Bus Pattern**
\`\`\`javascript
// Type-safe event bus
interface AppEvent {
  type: string;
  payload?: any;
}

class TypedEventBus<T extends Record<string, any>> {
  private events$ = new Subject<AppEvent>();
  
  emit<K extends keyof T>(type: K, payload?: T[K]): void {
    this.events$.next({ type: type as string, payload });
  }
  
  on<K extends keyof T>(type: K): Observable<T[K]> {
    return this.events$.pipe(
      filter(event => event.type === type as string),
      map(event => event.payload as T[K])
    );
  }
  
  once<K extends keyof T>(type: K): Observable<T[K]> {
    return this.on(type).pipe(take(1));
  }
}

// Usage
interface AppEvents {
  'user:login': User;
  'user:logout': void;
  'notification:show': { message: string; type: 'success' | 'error' };
}

@Injectable()
export class EventBusService extends TypedEventBus<AppEvents> {
  constructor() {
    super();
  }
}

// Service using event bus
@Injectable()
export class NotificationService {
  constructor(private eventBus: EventBusService) {
    this.setupEventListeners();
  }
  
  private setupEventListeners() {
    this.eventBus.on('user:login').subscribe(user => {
      this.showWelcomeMessage(user);
    });
    
    this.eventBus.on('user:logout').subscribe(() => {
      this.clearNotifications();
    });
  }
  
  showNotification(message: string, type: 'success' | 'error') {
    this.eventBus.emit('notification:show', { message, type });
  }
}
\`\`\`

**5. Command Query Separation Pattern**
\`\`\`javascript
// Command pattern for actions
abstract class Command<T = any> {
  abstract execute(): Observable<T>;
  abstract undo(): Observable<void>;
}

class UpdateUserCommand extends Command<User> {
  constructor(
    private userId: number,
    private userData: Partial<User>,
    private userRepository: UserRepository
  ) {
    super();
  }
  
  execute(): Observable<User> {
    return this.userRepository.updateUser(this.userData).pipe(
      tap(user => this.previousState = user)
    );
  }
  
  undo(): Observable<void> {
    if (this.previousState) {
      return this.userRepository.updateUser(this.previousState).pipe(
        map(() => {})
      );
    }
    return of(void 0);
  }
  
  private previousState?: User;
}

// Query pattern for data retrieval
abstract class Query<T> {
  abstract execute(): Observable<T>;
}

class GetUserQuery extends Query<User> {
  constructor(
    private userId: number,
    private userRepository: UserRepository
  ) {
    super();
  }
  
  execute(): Observable<User> {
    return this.userRepository.getUser(this.userId);
  }
}

// Command/Query service
@Injectable()
export class CqrsService {
  constructor(
    private eventBus: EventBusService,
    private userRepository: UserRepository
  ) {}
  
  executeCommand<T>(command: Command<T>): Observable<T> {
    return command.execute().pipe(
      tap(result => {
        this.eventBus.emit('command:executed', { command, result });
      }),
      catchError(error => {
        this.eventBus.emit('command:failed', { command, error });
        return throwError(error);
      })
    );
  }
  
  executeQuery<T>(query: Query<T>): Observable<T> {
    return query.execute().pipe(
      catchError(error => {
        this.eventBus.emit('query:failed', { query, error });
        return throwError(error);
      })
    );
  }
}
\`\`\`

**6. Facade Pattern**
\`\`\`javascript
// Simplified interface for complex subsystems
@Injectable()
export class UserFacade {
  // Simplified public API
  readonly user$ = this.userService.user$;
  readonly permissions$ = this.userService.permissions$;
  readonly isAdmin$ = this.userService.isAdmin$;
  readonly loading$ = this.store.select(state => state.loading);
  readonly error$ = this.store.select(state => state.error);
  
  constructor(
    private userService: UserService,
    private userRepository: UserRepository,
    private store: StoreService,
    private eventBus: EventBusService
  ) {}
  
  // Simplified methods
  loadUser(): void {
    this.store.dispatch({ type: 'LOAD_USER_START' });
    this.userService.getCurrentUser().pipe(
      tap(user => this.store.dispatch({ type: 'LOAD_USER_SUCCESS', payload: user })),
      catchError(error => {
        this.store.dispatch({ type: 'LOAD_USER_ERROR', payload: error.message });
        return EMPTY;
      })
    ).subscribe();
  }
  
  updateUser(userData: Partial<User>): Observable<User> {
    return this.userRepository.updateUser(userData).pipe(
      tap(user => {
        this.eventBus.emit('user:updated', user);
      })
    );
  }
  
  // Complex operations simplified
  refreshUserData(): Observable<void> {
    return this.loadUser().pipe(
      switchMap(() => this.loadUserPermissions()),
      map(() => {})
    );
  }
}
\`\`\`

**Best Practices:**
- **Separate concerns**: Clear boundaries between data, business logic, and UI
- **Use facades**: Simplify complex subsystems with clean interfaces
- **Implement caching**: Reduce redundant operations
- **Handle errors gracefully**: Provide fallback mechanisms
- **Type safety**: Use TypeScript for compile-time error prevention
- **Test thoroughly**: Unit tests for all reactive patterns`
  },
  {
    question: "How do you implement real-time data synchronization with RxJS?",
    idealAnswer: `**Real-time Data Synchronization** with RxJS enables bi-directional data flow between clients and servers, ensuring consistency across multiple clients.

**WebSocket-based Synchronization:**
\`\`\`javascript
@Injectable()
export class RealtimeSyncService {
  private socket$: Observable<WebSocket>;
  private messages$ = new Subject<SyncMessage>();
  private reconnect$ = new Subject<void>();
  private connectionState$ = new BehaviorSubject<ConnectionState>('disconnected');
  
  constructor() {
    this.initializeWebSocket();
  }
  
  private initializeWebSocket() {
    this.socket$ = this.reconnect$.pipe(
      startWith(void 0),
      switchMap(() => this.createWebSocket()),
      retry({ delay: 1000, resetOnSuccess: true }),
      share()
    );
    
    this.socket$.subscribe({
      next: ws => {
        this.connectionState$.next('connected');
        ws.onmessage = event => this.handleMessage(JSON.parse(event.data));
        ws.onclose = () => {
          this.connectionState$.next('disconnected');
          this.reconnect$.next();
        };
        ws.onerror = () => this.connectionState$.next('error');
      }
    });
  }
  
  private createWebSocket(): Observable<WebSocket> {
    return new Observable(subscriber => {
      const ws = new WebSocket('wss://api.example.com/sync');
      ws.onopen = () => subscriber.next(ws);
      ws.onerror = error => subscriber.error(error);
      ws.onclose = () => subscriber.complete();
      
      return () => ws.close();
    });
  }
  
  private handleMessage(message: SyncMessage) {
    switch (message.type) {
      case 'data_update':
        this.messages$.next(message);
        break;
      case 'conflict':
        this.handleConflict(message);
        break;
      case 'sync_complete':
        this.handleSyncComplete(message);
        break;
    }
  }
  
  // Public API
  readonly connectionState$ = this.connectionState$.asObservable();
  readonly messages$ = this.messages$.asObservable();
  
  sendMessage(message: Partial<SyncMessage>) {
    this.socket$.subscribe(ws => {
      ws.send(JSON.stringify(message));
    });
  }
}
\`\`\`

**Conflict Resolution and Merging:**
\`\`\`javascript
interface SyncableData {
  id: string;
  version: number;
  lastModified: number;
  data: any;
}

@Injectable()
export class ConflictResolutionService {
  private dataStore = new Map<string, SyncableData>();
  private pendingChanges = new Map<string, SyncableData>();
  
  // Operational Transformation for collaborative editing
  transformOperation(localOp: Operation, remoteOp: Operation): Operation {
    // Implement operational transformation logic
    if (localOp.type === 'insert' && remoteOp.type === 'insert') {
      if (localOp.position <= remoteOp.position) {
        return remoteOp;
      } else {
        return { ...remoteOp, position: remoteOp.position + 1 };
      }
    }
    // Handle other operation combinations...
    return remoteOp;
  }
  
  // Three-way merge
  mergeData(base: SyncableData, local: SyncableData, remote: SyncableData): SyncableData {
    const conflicts = this.detectConflicts(base, local, remote);
    
    if (conflicts.length === 0) {
      // No conflicts - auto-merge
      return {
        ...remote,
        data: this.deepMerge(base.data, local.data, remote.data),
        version: Math.max(local.version, remote.version) + 1,
        lastModified: Date.now()
      };
    }
    
    // Handle conflicts
    return this.resolveConflicts(base, local, remote, conflicts);
  }
  
  private detectConflicts(base: SyncableData, local: SyncableData, remote: SyncableData): Conflict[] {
    const conflicts: Conflict[] = [];
    
    // Compare changes against base
    const localChanges = this.getChanges(base.data, local.data);
    const remoteChanges = this.getChanges(base.data, remote.data);
    
    for (const [path, localValue] of localChanges) {
      if (remoteChanges.has(path) && !this.deepEqual(localValue, remoteChanges.get(path))) {
        conflicts.push({
          path,
          localValue,
          remoteValue: remoteChanges.get(path)
        });
      }
    }
    
    return conflicts;
  }
  
  private resolveConflicts(base: SyncableData, local: SyncableData, remote: SyncableData, conflicts: Conflict[]): SyncableData {
    // Strategy 1: Last writer wins
    const lastWriterWins = remote.lastModified > local.lastModified ? remote : local;
    
    // Strategy 2: Manual resolution
    this.conflictSubject.next({ base, local, remote, conflicts });
    
    // Strategy 3: Automatic merge with conflict markers
    const mergedData = { ...remote.data };
    conflicts.forEach(conflict => {
      (mergedData as any)[conflict.path] = {
        conflict: true,
        local: conflict.localValue,
        remote: conflict.remoteValue
      };
    });
    
    return {
      ...remote,
      data: mergedData,
      version: Math.max(local.version, remote.version) + 1,
      lastModified: Date.now()
    };
  }
}
\`\`\`

**Optimistic Updates and Rollback:**
\`\`\`javascript
@Injectable()
export class OptimisticUpdateService {
  private pendingOperations = new Map<string, PendingOperation>();
  
  optimisticUpdate<T>(id: string, operation: () => Observable<T>): Observable<T> {
    // Generate temporary ID for optimistic update
    const tempId = \`temp_\${Date.now()}_\${Math.random()}\`;
    
    // Create pending operation
    const pendingOp: PendingOperation = {
      id: tempId,
      originalData: this.getCurrentData(id),
      timestamp: Date.now(),
      rollback: () => this.rollbackUpdate(id, tempId)
    };
    
    this.pendingOperations.set(tempId, pendingOp);
    
    // Apply optimistic update immediately
    this.applyLocalUpdate(id, operation);
    
    // Execute actual operation
    return operation().pipe(
      map(result => {
        // Success - replace temporary with real data
        this.commitUpdate(id, tempId, result);
        return result;
      }),
      catchError(error => {
        // Failure - rollback optimistic update
        pendingOp.rollback();
        return throwError(error);
      }),
      finalize(() => {
        this.pendingOperations.delete(tempId);
      })
    );
  }
  
  private rollbackUpdate(id: string, tempId: string) {
    const pendingOp = this.pendingOperations.get(tempId);
    if (pendingOp) {
      this.restoreOriginalData(id, pendingOp.originalData);
      this.notifyRollback(id);
    }
  }
  
  private commitUpdate<T>(id: string, tempId: string, result: T) {
    this.replaceTemporaryData(id, tempId, result);
    this.notifySuccess(id, result);
  }
}
\`\`\`

**Offline Support and Sync Queue:**
\`\`\`javascript
@Injectable()
export class OfflineSyncService {
  private syncQueue: SyncOperation[] = [];
  private isOnline$ = new BehaviorSubject<boolean>(navigator.onLine);
  private syncInProgress$ = new BehaviorSubject<boolean>(false);
  
  constructor() {
    this.setupNetworkMonitoring();
    this.setupSyncProcessor();
  }
  
  private setupNetworkMonitoring() {
    fromEvent(window, 'online').subscribe(() => this.isOnline$.next(true));
    fromEvent(window, 'offline').subscribe(() => this.isOnline$.next(false));
    
    // Process queue when coming online
    this.isOnline$.pipe(
      distinctUntilChanged(),
      filter(online => online),
      switchMap(() => this.processSyncQueue())
    ).subscribe();
  }
  
  private setupSyncProcessor() {
    this.isOnline$.pipe(
      filter(online => online),
      switchMap(() => interval(30000)), // Sync every 30 seconds
      switchMap(() => this.processSyncQueue())
    ).subscribe();
  }
  
  // Add operation to sync queue
  queueOperation(operation: SyncOperation) {
    this.syncQueue.push({
      ...operation,
      id: this.generateOperationId(),
      timestamp: Date.now(),
      retryCount: 0
    });
    
    // Try to sync immediately if online
    if (this.isOnline$.value) {
      this.processSyncQueue().subscribe();
    }
  }
  
  private processSyncQueue(): Observable<SyncResult[]> {
    if (this.syncInProgress$.value || this.syncQueue.length === 0) {
      return of([]);
    }
    
    this.syncInProgress$.next(true);
    
    return from(this.syncQueue).pipe(
      concatMap(operation => this.executeOperation(operation)),
      toArray(),
      finalize(() => this.syncInProgress$.next(false))
    );
  }
  
  private executeOperation(operation: SyncOperation): Observable<SyncResult> {
    return this.executeRemoteOperation(operation).pipe(
      map(result => ({
        operation,
        success: true,
        result,
        timestamp: Date.now()
      })),
      catchError(error => {
        // Retry logic
        if (operation.retryCount < 3) {
          operation.retryCount++;
          return timer(1000 * operation.retryCount).pipe(
            switchMap(() => this.executeOperation(operation))
          );
        }
        
        return of({
          operation,
          success: false,
          error,
          timestamp: Date.now()
        });
      })
    );
  }
  
  // Public observables
  readonly isOnline$ = this.isOnline$.asObservable();
  readonly syncInProgress$ = this.syncInProgress$.asObservable();
  readonly queueLength$ = new BehaviorSubject<number>(0);
}
\`\`\`

**Real-time Collaboration Example:**
\`\`\`javascript
// Collaborative document editing
@Injectable()
export class DocumentCollaborationService {
  private document$ = new BehaviorSubject<Document | null>(null);
  private operations$ = new Subject<DocumentOperation>();
  private collaborators$ = new BehaviorSubject<User[]>([]);
  
  constructor(
    private syncService: RealtimeSyncService,
    private conflictService: ConflictResolutionService
  ) {
    this.setupCollaboration();
  }
  
  private setupCollaboration() {
    // Listen for remote operations
    this.syncService.messages$.pipe(
      filter(msg => msg.type === 'document_operation'),
      map(msg => msg.payload as DocumentOperation)
    ).subscribe(operation => {
      this.applyRemoteOperation(operation);
    });
    
    // Transform and send local operations
    this.operations$.pipe(
      bufferTime(100), // Batch operations
      filter(ops => ops.length > 0),
      switchMap(operations => this.transformAndSend(operations))
    ).subscribe();
  }
  
  applyLocalOperation(operation: DocumentOperation) {
    // Apply locally immediately
    const currentDoc = this.document$.value;
    if (currentDoc) {
      const updatedDoc = this.applyOperation(currentDoc, operation);
      this.document$.next(updatedDoc);
      this.operations$.next(operation);
    }
  }
  
  private applyRemoteOperation(operation: DocumentOperation) {
    const currentDoc = this.document$.value;
    if (currentDoc) {
      // Transform against pending local operations
      const transformedOp = this.transformOperation(operation, this.getPendingOperations());
      const updatedDoc = this.applyOperation(currentDoc, transformedOp);
      this.document$.next(updatedDoc);
    }
  }
  
  // Public API
  readonly document$ = this.document$.asObservable();
  readonly collaborators$ = this.collaborators$.asObservable();
  
  joinDocument(documentId: string) {
    this.syncService.sendMessage({
      type: 'join_document',
      payload: { documentId }
    });
  }
  
  leaveDocument() {
    this.syncService.sendMessage({
      type: 'leave_document',
      payload: {}
    });
  }
}
\`\`\`

**Best Practices:**
- **Handle network interruptions**: Implement robust reconnection logic
- **Resolve conflicts gracefully**: Provide user-friendly conflict resolution
- **Use optimistic updates**: Improve perceived performance
- **Implement offline support**: Queue operations for later sync
- **Monitor sync status**: Provide feedback to users
- **Test edge cases**: Network failures, concurrent edits, large datasets`
  }
];


// QnA Component
const QnA = ({ questions }: { questions: any[] }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (value: string | undefined) => {
    if (!value) {
      // Accordion is closing, remove all expanded items
      setExpandedItems([]);
      return;
    }
    
    setExpandedItems(prev =>
      prev.includes(value)
        ? [] // Close the item if it's already open
        : [value] // Open only this item, close all others
    );
  };

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <Card key={index} className="border-slate-200 dark:border-slate-700">
          <Accordion
            type="single"
            collapsible
            value={expandedItems.includes(`item-${index}`) ? `item-${index}` : undefined}
            onValueChange={(value) => toggleItem(value)}
          >
            <AccordionItem value={`item-${index}`} className="border-none">
              <AccordionTrigger className="hover:no-underline px-6 py-4">
                <div className="flex items-start gap-3 text-left flex-1">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-xs font-semibold text-blue-800 dark:text-blue-200 mt-0.5">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                      {item.question}
                    </h4>
                  </div>
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    const searchQuery = encodeURIComponent(`${item.question} RxJS`);
                    window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
                  }}
                  className="w-8 h-8 p-0 bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center mr-2 flex-shrink-0"
                >
                  <Play className="w-4 h-4" />
                </Button>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div 
                    className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-slate-700 dark:prose-headings:text-slate-300 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:bg-slate-200 dark:prose-code:bg-slate-800 prose-code:text-green-700 dark:prose-code:text-green-300 prose-code:font-medium prose-pre:bg-slate-100 dark:prose-pre:bg-slate-950 prose-pre:border dark:prose-pre:border-slate-600 prose-p:mb-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:leading-relaxed prose-pre:my-3 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:text-slate-700 dark:prose-pre:text-slate-300 prose-code:font-mono prose-pre:font-mono prose-pre:text-xs prose-pre:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: String(marked.parse(item.idealAnswer || '')) }}
                  />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}
    </div>
  );
};

export default function RxJSInterviewQuestions() {
  return (
    <div className="w-screen px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pb-8 sm:pb-12">
      
      {/* Interview Header */}
      <InterviewHeader showBackButton={true} currentLanguage="RxJS" />
        
      {/* Questions Tabs */}
      <div className="space-y-6">

        <Tabs defaultValue="easy" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-3 sm:grid-cols-2 h-auto p-1 sticky top-16 z-10 bg-background/95 backdrop-blur-sm border-b">
            <TabsTrigger value="easy" className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-4 rounded-lg data-[state=active]:bg-green-100 dark:data-[state=active]:bg-green-900/60 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200 data-[state=active]:shadow-sm hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-green-800 dark:data-[state=active]:text-green-200">Easy</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-300 hidden sm:block">{easyQuestions.length} questions • 5-10 min</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-300 sm:hidden">{easyQuestions.length} • 5-10m</span>
            </TabsTrigger>
            <TabsTrigger value="medium" className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-4 rounded-lg data-[state=active]:bg-yellow-100 dark:data-[state=active]:bg-yellow-900/60 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200 data-[state=active]:shadow-sm hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 dark:text-yellow-400 data-[state=active]:text-yellow-700 dark:data-[state=active]:text-yellow-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-yellow-800 dark:data-[state=active]:text-yellow-200">Medium</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-300 hidden sm:block">{mediumQuestions.length} questions • 10-15 min</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-300 sm:hidden">{mediumQuestions.length} • 10-15m</span>
            </TabsTrigger>
            <TabsTrigger value="hard" className="flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-4 rounded-lg data-[state=active]:bg-red-100 dark:data-[state=active]:bg-red-900/60 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200 data-[state=active]:shadow-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-150 cursor-pointer border border-transparent">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 dark:text-red-400 data-[state=active]:text-red-700 dark:data-[state=active]:text-red-300" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 data-[state=active]:text-red-800 dark:data-[state=active]:text-red-200">Hard</span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-300 hidden sm:block">{hardQuestions.length} questions • 15-20 min</span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 data-[state=active]:text-red-600 dark:data-[state=active]:text-red-300 sm:hidden">{hardQuestions.length} • 15-20m</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="easy" className="space-y-3 sm:space-y-4">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200 text-lg sm:text-xl">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  Easy Level
                </CardTitle>
                <CardDescription className="text-green-700 dark:text-green-300 text-sm sm:text-base">
                  Fundamental RxJS concepts perfect for beginners and quick reviews
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <QnA questions={easyQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medium" className="space-y-3 sm:space-y-4">
            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200 text-lg sm:text-xl">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  Medium Level
                </CardTitle>
                <CardDescription className="text-yellow-700 dark:text-yellow-300 text-sm sm:text-base">
                  Intermediate concepts that test deeper understanding of RxJS
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <QnA questions={mediumQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hard" className="space-y-3 sm:space-y-4">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200 text-lg sm:text-xl">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  Hard Level
                </CardTitle>
                <CardDescription className="text-red-700 dark:text-red-300 text-sm sm:text-base">
                  Advanced topics and complex scenarios for experienced developers
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <QnA questions={hardQuestions} />
              </CardContent>
            </Card>
          </TabsContent>
          
        </Tabs>
      </div>

      {/* Additional Resources */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800 dark:text-purple-200">
            <BookOpen className="w-5 h-5" />
            Additional Resources
          </CardTitle>
          <CardDescription className="text-purple-700 dark:text-purple-300">
            Enhance your RxJS knowledge with these resources
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">Official Documentation</h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• <a href="https://rxjs.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">RxJS Official Documentation</a></li>
                <li>• <a href="https://rxjs.dev/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">API Reference</a></li>
                <li>• <a href="https://rxjs.dev/guide/overview" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Learning Guides</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">Practice Tools</h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• <a href="https://rxjs-marbles.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">RxJS Marbles</a></li>
                <li>• <a href="https://thinkrx.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Think Rx</a></li>
                <li>• <a href="https://rxviz.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">RxViz</a></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
