'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Dices, Sparkles } from 'lucide-react';

export default function JavaScriptMathRandom() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Dices}
        category="JavaScript Math & Numbers"
        title="Random Numbers"
        description="Generate random numbers and ranges with Math.random()"
        colorTheme="pink"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50/80 via-rose-50/50 to-red-50/30 dark:from-pink-950/20 dark:via-rose-950/10 dark:to-red-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white shadow-xl">
              <Dices className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-700 via-rose-600 to-red-600 bg-clip-text text-transparent">
                Generate Random Numbers
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="text-sm bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded">Math.random()</code> returns a decimal between 0 (inclusive) and 1 (exclusive). Use it to generate random integers, pick random items, shuffle arrays, and more!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Math.random()"
        description="Returns decimal between 0 and 1"
        language="javascript"
        colorTheme="pink"
        code={`// Returns random decimal: 0 <= x < 1
console.log(Math.random());    // 0.7392...
console.log(Math.random());    // 0.2156...
console.log(Math.random());    // 0.9834...

// Always between 0 (inclusive) and 1 (exclusive)
// 0 is possible, 1 is NOT possible
const rand = Math.random();
console.log(rand >= 0);        // true
console.log(rand < 1);         // true`}
      />

      <CodeSnippet
        title="Random Integer in Range"
        description="Generate random whole numbers"
        language="javascript"
        colorTheme="rose"
        code={`// Random integer between min and max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Examples
console.log(randomInt(1, 6));      // Dice roll: 1-6
console.log(randomInt(0, 100));    // Score: 0-100
console.log(randomInt(1, 10));     // Rating: 1-10

// Random between 0 and max (inclusive)
function randomUpTo(max) {
  return Math.floor(Math.random() * (max + 1));
}

console.log(randomUpTo(10));       // 0-10
console.log(randomUpTo(99));       // 0-99

// Common use case: Array index
const colors = ['red', 'green', 'blue', 'yellow'];
const randomIndex = randomUpTo(colors.length - 1);
console.log(colors[randomIndex]); // Random color`}
      />

      <CodeSnippet
        title="Random Decimal in Range"
        description="Generate random decimals between min and max"
        language="javascript"
        colorTheme="red"
        code={`// Random decimal between min and max
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// Examples
console.log(randomFloat(0, 100));      // 47.239...
console.log(randomFloat(1.5, 5.5));    // 3.814...
console.log(randomFloat(-10, 10));     // -2.651...

// Round to specific decimal places
function randomFloatFixed(min, max, decimals) {
  const rand = Math.random() * (max - min) + min;
  return Number(rand.toFixed(decimals));
}

console.log(randomFloatFixed(0, 100, 2));  // 47.24
console.log(randomFloatFixed(0, 1, 3));    // 0.382

// Random price
const price = randomFloatFixed(9.99, 99.99, 2);
console.log("$" + price);              // $53.47`}
      />

      <CodeSnippet
        title="Pick Random Item from Array"
        description="Select random element"
        language="javascript"
        colorTheme="purple"
        code={`// Pick random item
function randomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Examples
const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log(randomItem(fruits));   // "banana"

const names = ['Alice', 'Bob', 'Charlie', 'David'];
console.log(randomItem(names));    // "Charlie"

// Random quote
const quotes = [
  "Be yourself",
  "Stay positive",
  "Never give up"
];
console.log(randomItem(quotes));

// Random winner
const participants = ['John', 'Jane', 'Mike', 'Sarah'];
const winner = randomItem(participants);
console.log("Winner:", winner);`}
      />

      <CodeSnippet
        title="Shuffle Array"
        description="Randomize array order (Fisher-Yates algorithm)"
        language="javascript"
        colorTheme="indigo"
        code={`// Shuffle array in place
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap
  }
  return array;
}

// Example
const deck = ['A♠', 'K♥', 'Q♦', 'J♣'];
console.log(shuffle([...deck]));  // ['Q♦', 'A♠', 'J♣', 'K♥']
console.log(shuffle([...deck]));  // ['J♣', 'Q♦', 'K♥', 'A♠']

// Shuffle playlist
const songs = ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5'];
const shuffled = shuffle([...songs]); // Use spread to avoid mutating original
console.log(shuffled);

// Quiz questions
const questions = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
shuffle(questions);
console.log(questions); // Random order`}
      />

      <CodeSnippet
        title="Random Boolean"
        description="True or false with optional probability"
        language="javascript"
        colorTheme="cyan"
        code={`// Random true/false (50/50 chance)
function randomBoolean() {
  return Math.random() < 0.5;
}

console.log(randomBoolean());  // true or false

// With custom probability (0 to 1)
function randomChance(probability) {
  return Math.random() < probability;
}

console.log(randomChance(0.7));   // 70% chance of true
console.log(randomChance(0.3));   // 30% chance of true
console.log(randomChance(0.1));   // 10% chance of true

// Coin flip
const heads = randomBoolean();
console.log(heads ? "Heads!" : "Tails!");

// Critical hit (20% chance)
const criticalHit = randomChance(0.2);
if (criticalHit) {
  console.log("Critical Hit! 💥");
}

// Random event trigger
if (randomChance(0.05)) {
  console.log("Rare event occurred! (5% chance)");
}`}
      />

      <CodeSnippet
        title="Random Color"
        description="Generate random hex colors"
        language="javascript"
        colorTheme="orange"
        code={`// Random hex color
function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

console.log(randomColor());  // "#a3c2f1"
console.log(randomColor());  // "#7b4e9a"

// Random RGB color
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return \`rgb(\${r}, \${g}, \${b})\`;
}

console.log(randomRGB());    // "rgb(145, 78, 234)"

// Random pastel color
function randomPastel() {
  const r = Math.floor(Math.random() * 127 + 127);
  const g = Math.floor(Math.random() * 127 + 127);
  const b = Math.floor(Math.random() * 127 + 127);
  return \`rgb(\${r}, \${g}, \${b})\`;
}

console.log(randomPastel()); // Light, soft colors`}
      />

      <CodeSnippet
        title="Random String/ID"
        description="Generate random strings for IDs or tokens"
        language="javascript"
        colorTheme="green"
        code={`// Random alphanumeric string
function randomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

console.log(randomString(8));   // "aB3xKp9Q"
console.log(randomString(16));  // "mN7qRt2Yz5LpXw8C"

// Random hex ID
function randomHexId(length) {
  let id = '';
  for (let i = 0; i < length; i++) {
    id += Math.floor(Math.random() * 16).toString(16);
  }
  return id;
}

console.log(randomHexId(8));    // "a3f7c2e9"

// Quick UUID-like ID (not a real UUID)
function quickId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

console.log(quickId());  // "l8k3x7m92b4f"`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Common Patterns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border-2 border-pink-200 dark:border-pink-800/30">
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">0 to N</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 block">
                Math.floor(Math.random() * (n + 1))
              </code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Random integer from 0 to n (inclusive)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-950/20 border-2 border-rose-200 dark:border-rose-800/30">
              <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">Min to Max</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 block">
                Math.floor(Math.random() * (max - min + 1)) + min
              </code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Random integer between min and max
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Probability</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 block">
                Math.random() &lt; 0.3
              </code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                30% chance of true
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Array Item</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 block">
                array[Math.floor(Math.random() * array.length)]
              </code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Random element from array
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-300 dark:border-pink-700 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950/20 dark:via-rose-950/10 dark:to-red-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <Dices className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">0 to 1</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">Math.random()</code> returns 0 ≤ x &lt; 1
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎲</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Integers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">Math.floor()</code> to convert to whole numbers
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Shuffle</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fisher-Yates algorithm for unbiased shuffling
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Not Cryptographic</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't use for security! Use <code className="text-xs">crypto.getRandomValues()</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
