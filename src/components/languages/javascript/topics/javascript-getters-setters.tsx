'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  ClipboardCheck,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Eye,
  Lock,
  Calculator,
} from 'lucide-react';

export default function JavaScriptGettersSetters() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ClipboardCheck}
        category="JavaScript Fundamentals"
        title="Getters & Setters"
        description="Control how properties are accessed and modified in objects and classes"
        colorTheme="yellow"
      />

      {/* What are Getters & Setters */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Getters & Setters?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Getters and setters are <strong className="text-yellow-700 dark:text-yellow-400">special methods</strong> that look like properties but run code when you read or write them. Like a gatekeeper that controls access!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Eye className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Gatekeeper Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Think of getters as reading data through a window, and setters as a security guard checking what goes in. You access them like normal properties, but they run code behind the scenes!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Getter */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Getters - Read Properties</CardTitle>
              <CardDescription>Run code when accessing a property</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">get Keyword</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">get</code> before a method to make it a getter
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Getter - access like a property
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const person = new Person('John', 'Doe');
console.log(person.fullName);  // 'John Doe'
// No () needed! Looks like a property`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Getter Examples"
        description="Computed properties with get"
        code={`class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  // Getter - calculate area
  get area() {
    return this.width * this.height;
  }
  
  // Getter - calculate perimeter
  get perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(5, 10);

// Access like properties, no ()
console.log(rect.area);       // 50
console.log(rect.perimeter);  // 30

// Change dimensions
rect.width = 8;
console.log(rect.area);  // 80 (automatically recalculated!)

// Real-world: User display name
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  get displayName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
  
  get initials() {
    return this.firstName[0] + this.lastName[0];
  }
}

const user = new User('Alice', 'Smith');
console.log(user.displayName);  // 'Alice Smith'
console.log(user.initials);     // 'AS'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Basic Setter */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Setters - Write Properties</CardTitle>
              <CardDescription>Validate and control what gets set</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">set Keyword</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">set</code> to validate values before storing
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Person {
  constructor(age) {
    this._age = age;  // underscore = private by convention
  }
  
  get age() {
    return this._age;
  }
  
  // Setter - validate before setting
  set age(value) {
    if (value < 0 || value > 150) {
      console.log('Invalid age!');
      return;
    }
    this._age = value;
  }
}

const person = new Person(25);
person.age = 30;   // ✓ Valid
person.age = -5;   // ✗ 'Invalid age!'
person.age = 200;  // ✗ 'Invalid age!'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Setter Examples with Validation"
        description="Control what values are accepted"
        code={`class Temperature {
  constructor() {
    this._celsius = 0;
  }
  
  get celsius() {
    return this._celsius;
  }
  
  set celsius(value) {
    if (value < -273.15) {
      throw new Error('Temperature below absolute zero!');
    }
    this._celsius = value;
  }
  
  // Getter for Fahrenheit
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }
  
  // Setter for Fahrenheit
  set fahrenheit(value) {
    this.celsius = (value - 32) * 5/9;  // Use celsius setter
  }
}

const temp = new Temperature();

temp.celsius = 25;
console.log(temp.celsius);     // 25
console.log(temp.fahrenheit);  // 77

temp.fahrenheit = 86;
console.log(temp.celsius);     // 30

// Validation works
// temp.celsius = -300;  // Error!

// Real-world: Password strength
class Account {
  constructor(username) {
    this.username = username;
    this._password = '';
  }
  
  get password() {
    return '******';  // Never show real password
  }
  
  set password(value) {
    if (value.length < 8) {
      console.log('Password too short!');
      return;
    }
    if (!/\\d/.test(value)) {
      console.log('Password needs a number!');
      return;
    }
    this._password = value;
    console.log('Password updated successfully');
  }
}

const account = new Account('alice');
account.password = 'abc';       // 'Password too short!'
account.password = 'password';  // 'Password needs a number!'
account.password = 'pass123';   // 'Password updated successfully'
console.log(account.password);  // '******'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Getters & Setters Together */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <ClipboardCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Getters & Setters Together</CardTitle>
              <CardDescription>Complete control over properties</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Full Property Control</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Combine getter and setter for complete control
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }
  
  get price() {
    return '$' + this._price.toFixed(2);
  }
  
  set price(value) {
    if (value < 0) {
      console.log('Price cannot be negative!');
      return;
    }
    this._price = value;
  }
}

const product = new Product('Laptop', 999.99);
console.log(product.price);  // '$999.99' (formatted)

product.price = 1299.5;
console.log(product.price);  // '$1299.50'

product.price = -50;  // 'Price cannot be negative!'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Getter/Setter Examples"
        description="Real-world property control"
        code={`class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance;
  }
  
  get balance() {
    return this._balance;
  }
  
  set balance(value) {
    if (value < 0) {
      console.log('Balance cannot be negative');
      return;
    }
    this._balance = value;
  }
  
  get balanceFormatted() {
    return \`$\${this._balance.toFixed(2)}\`;
  }
}

const account = new BankAccount('Alice', 1000);
console.log(account.balanceFormatted);  // '$1000.00'

account.balance = 1500;
console.log(account.balance);  // 1500

account.balance = -100;  // 'Balance cannot be negative'

// Real-world: Shopping cart
class ShoppingCart {
  constructor() {
    this._items = [];
  }
  
  get items() {
    return this._items;
  }
  
  get itemCount() {
    return this._items.length;
  }
  
  get total() {
    return this._items.reduce((sum, item) => sum + item.price, 0);
  }
  
  get totalFormatted() {
    return \`$\${this.total.toFixed(2)}\`;
  }
  
  addItem(item) {
    this._items.push(item);
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: 'Book', price: 15.99 });
cart.addItem({ name: 'Pen', price: 2.50 });

console.log(cart.itemCount);       // 2
console.log(cart.totalFormatted);  // '$18.49'

// Real-world: User profile
class UserProfile {
  constructor(email) {
    this._email = email;
    this._age = 0;
  }
  
  get email() {
    // Mask email for privacy
    const [name, domain] = this._email.split('@');
    return name[0] + '***@' + domain;
  }
  
  set email(value) {
    if (!value.includes('@')) {
      console.log('Invalid email format');
      return;
    }
    this._email = value;
  }
  
  get age() {
    return this._age;
  }
  
  set age(value) {
    if (value < 13) {
      console.log('Must be 13 or older');
      return;
    }
    this._age = value;
  }
  
  get isAdult() {
    return this._age >= 18;
  }
}

const profile = new UserProfile('alice@example.com');
console.log(profile.email);  // 'a***@example.com'

profile.age = 16;
console.log(profile.isAdult);  // false

profile.age = 20;
console.log(profile.isAdult);  // true`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Object Literals */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Calculator className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Getters/Setters in Objects</CardTitle>
              <CardDescription>Not just for classes!</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Plain Objects Too</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                You can use getters/setters in regular object literals
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const person = {
  firstName: 'John',
  lastName: 'Doe',
  
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  
  set fullName(name) {
    const [first, last] = name.split(' ');
    this.firstName = first;
    this.lastName = last;
  }
};

console.log(person.fullName);  // 'John Doe'

person.fullName = 'Jane Smith';
console.log(person.firstName);  // 'Jane'
console.log(person.lastName);   // 'Smith'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object Literal Getters/Setters"
        description="Use in plain objects"
        code={`const rectangle = {
  width: 5,
  height: 10,
  
  get area() {
    return this.width * this.height;
  },
  
  get perimeter() {
    return 2 * (this.width + this.height);
  }
};

console.log(rectangle.area);       // 50
console.log(rectangle.perimeter);  // 30

rectangle.width = 8;
console.log(rectangle.area);  // 80

// Real-world: Settings object
const settings = {
  _theme: 'light',
  _fontSize: 14,
  
  get theme() {
    return this._theme;
  },
  
  set theme(value) {
    const valid = ['light', 'dark', 'auto'];
    if (!valid.includes(value)) {
      console.log('Invalid theme. Use: light, dark, or auto');
      return;
    }
    this._theme = value;
    console.log(\`Theme changed to \${value}\`);
  },
  
  get fontSize() {
    return this._fontSize + 'px';
  },
  
  set fontSize(value) {
    if (value < 10 || value > 24) {
      console.log('Font size must be between 10 and 24');
      return;
    }
    this._fontSize = value;
  }
};

console.log(settings.theme);     // 'light'
console.log(settings.fontSize);  // '14px'

settings.theme = 'dark';    // 'Theme changed to dark'
settings.fontSize = 16;
console.log(settings.fontSize);  // '16px'

settings.theme = 'blue';    // 'Invalid theme...'
settings.fontSize = 50;     // 'Font size must be between 10 and 24'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>get</strong> for computed properties</li>
                <li>• Use <strong>set</strong> to validate input</li>
                <li>• Store actual value with _ prefix (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">_age</code>)</li>
                <li>• Keep getters fast (no heavy computation)</li>
                <li>• Use for data formatting and validation</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't do expensive operations in getters</li>
                <li>• Don't use getters with side effects</li>
                <li>• Don't forget validation in setters</li>
                <li>• Don't call getters with () - they're properties!</li>
                <li>• Don't make everything a getter/setter</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Common Use Cases</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>Computed properties:</strong> <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">get fullName()</code> - combine firstName + lastName</div>
              <div><strong>Data formatting:</strong> <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">get price()</code> - return formatted string like "$99.99"</div>
              <div><strong>Validation:</strong> <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">set age(value)</code> - check if age is valid before setting</div>
              <div><strong>Privacy:</strong> <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">get password()</code> - return masked version</div>
              <div><strong>Type conversion:</strong> <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">set fahrenheit()</code> - convert to celsius internally</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Getters and setters make your code look cleaner! Instead of <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">person.getFullName()</code>, you write <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">person.fullName</code> - much nicer!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
