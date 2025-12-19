import { Terminal } from 'lucide-react';

export const pythonCheatsheet = {
    id: 'python',
    name: 'Python',
    description: 'Python 3.x syntax, data structures, and common libraries',
    icon: Terminal,
    colorTheme: 'blue' as const,
    sections: [
        {
            title: 'Basics & Flow Control',
            commands: [
                {
                    command: 'Variables & Types',
                    description: 'Dynamic typing',
                    usage: 'x = 10; name = "Neo"',
                    example: 'count = 42\npi = 3.14\nis_active = True\nnone_value = None',
                },
                {
                    command: 'If / Else',
                    description: 'Conditional branching',
                    usage: 'if condition: ... elif: ... else: ...',
                    example: 'if x > 10:\n    print("Large")\nelif x == 10:\n    print("Ten")\nelse:\n    print("Small")',
                },
                {
                    command: 'Loops',
                    description: 'For and While loops',
                    usage: 'for x in iterable: ...',
                    example: 'for i in range(5):\n    print(i)\n\nwhile count > 0:\n    count -= 1',
                },
            ],
        },
        {
            title: 'Data Structures',
            commands: [
                {
                    command: 'List',
                    description: 'Ordered, mutable sequence',
                    usage: '[item1, item2]',
                    example: 'fruits = ["apple", "banana"]\nfruits.append("orange")\nfruits[0]  # Access\nfruits[-1] # Last item',
                },
                {
                    command: 'Dictionary',
                    description: 'Key-value pairs',
                    usage: '{key: value}',
                    example: 'user = {"name": "Alice", "age": 30}\nuser["role"] = "Admin"\nkeys = user.keys()',
                },
                {
                    command: 'List Comprehensions',
                    description: 'Concise way to create lists',
                    usage: '[expr for x in iterable if condition]',
                    example: 'squares = [x**2 for x in range(10)]\nevens = [x for x in nums if x % 2 == 0]',
                },
                {
                    command: 'Slicing',
                    description: ' Extract parts of sequence',
                    usage: 'seq[start:end:step]',
                    example: 's = "Hello World"\nprint(s[0:5])   # "Hello"\nprint(s[::-1])  # "dlroW olleH" (Reverse)',
                },
            ],
        },
        {
            title: 'Functions & Modules',
            commands: [
                {
                    command: 'Define Function',
                    description: 'Creating reusable blocks',
                    usage: 'def name(args): ...',
                    example: 'def add(a, b=1):\n    return a + b\n\nresult = add(5)',
                },
                {
                    command: 'Lambda',
                    description: 'Anonymous functions',
                    usage: 'lambda args: expr',
                    example: 'square = lambda x: x * x\nprint(square(5))',
                },
                {
                    command: 'Imports',
                    description: 'Using libraries',
                    usage: 'import math / from math import sqrt',
                    example: 'import os\nfrom datetime import datetime as dt',
                },
            ],
        },
        {
            title: 'String Manipulation',
            commands: [
                {
                    command: 'Methods',
                    description: 'Common string operations',
                    usage: 's.lower(), s.strip(), s.replace()',
                    example: '"  Hi  ".strip() # "Hi"\n"Hello".replace("e", "a") # "Hallo"\n"Py".center(10, "-") # "----Py----"',
                },
                {
                    command: 'Splitting & Joining',
                    description: 'Divide or combine strings',
                    usage: 's.split(sep), sep.join(iterable)',
                    example: 'words = "a,b,c".split(",")\ncsv = "-".join(["a", "b"])',
                },
                {
                    command: 'Formatting (f-strings)',
                    description: 'String interpolation (Python 3.6+)',
                    usage: 'f"Text {var}"',
                    example: 'name = "Neo"\nmsg = f"Hello {name}, Time: {datetime.now():%H:%M}"',
                },
            ],
        },
        {
            title: 'Object-Oriented Programming',
            commands: [
                {
                    command: 'Class Definition',
                    description: 'Define a class and constructor',
                    usage: 'class Name:\n  def __init__(self, args): ...',
                    example: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return "Woof!"',
                },
                {
                    command: 'Inheritance',
                    description: 'Parent and child classes',
                    usage: 'class Child(Parent): ...',
                    example: 'class Poodle(Dog):\n    def bark(self): # Override\n        return super().bark() + " Arf!"',
                },
                {
                    command: 'Properties',
                    description: 'Getter/Setter behavior',
                    usage: '@property',
                    example: '@property\ndef age(self):\n    return self._age',
                },
            ],
        },
        {
            title: 'Error Handling',
            commands: [
                {
                    command: 'Try / Except',
                    description: 'Catch exceptions',
                    usage: 'try: ... except Error: ...',
                    example: 'try:\n    x = 1 / 0\nexcept ZeroDivisionError as e:\n    print(f"Error: {e}")\nelse:\n    print("Success")\nfinally:\n    print("Cleanup")',
                },
                {
                    command: 'Raise',
                    description: 'Trigger an exception',
                    usage: 'raise Exception("Msg")',
                    example: 'if x < 0:\n    raise ValueError("Must be positive")',
                },
            ],
        },
        {
            title: 'File I/O',
            commands: [
                {
                    command: 'Read File',
                    description: 'Open file for reading',
                    usage: 'with open(path, "r") as f:',
                    example: 'with open("data.txt", "r") as f:\n    content = f.read() # All\n    lines = f.readlines() # List',
                },
                {
                    command: 'Write File',
                    description: 'Open file for writing',
                    usage: 'with open(path, "w") as f:',
                    example: 'with open("log.txt", "a") as f: # Append\n    f.write("Log entry\\n")',
                },
            ],
        },
        {
            title: 'Standard Library',
            commands: [
                {
                    command: 'datetime',
                    description: 'Date and time manipulation',
                    usage: 'from datetime import datetime, timedelta',
                    example: 'now = datetime.now()\ntomorrow = now + timedelta(days=1)\niso = now.isoformat()',
                },
                {
                    command: 'json',
                    description: 'JSON parsing and stringifying',
                    usage: 'json.loads(), json.dumps()',
                    example: 'import json\ndata = json.loads(\'{"a": 1}\')\ntext = json.dumps(data, indent=2)',
                },
                {
                    command: 'math',
                    description: 'Mathematical functions',
                    usage: 'import math',
                    example: 'math.sqrt(16)\nmath.ceil(3.2)\nmath.pi',
                },
                {
                    command: 'random',
                    description: 'Random number generation',
                    usage: 'random.choice(), random.randint()',
                    example: 'import random\nnum = random.randint(1, 100)\nitem = random.choice(["a", "b"])',
                },
            ],
        },
        {
            title: 'Advanced Features',
            commands: [
                {
                    command: 'Decorators',
                    description: 'Modify function behavior',
                    usage: '@decorator',
                    example: 'def log(func):\n    def wrapper(*args):\n        print("Call")\n        return func(*args)\n    return wrapper\n\n@log\ndef hello(): pass',
                },
                {
                    command: 'Generators',
                    description: 'Lazy iterators using yield',
                    usage: 'yield value',
                    example: 'def count_up(n):\n    while n > 0:\n        yield n\n        n -= 1',
                },
            ],
        },
        {
            title: 'Virtual Environment',
            commands: [
                {
                    command: 'Create venv',
                    description: 'Create isolated environment',
                    usage: 'python -m venv <name>',
                    example: 'python -m venv .venv',
                },
                {
                    command: 'Activate venv',
                    description: 'Activate environment',
                    usage: 'source .venv/bin/activate (Mac/Linux)',
                    example: 'source .venv/bin/activate\n.venv\\Scripts\\activate (Windows)',
                },
                {
                    command: 'Pip',
                    description: 'Package installer',
                    usage: 'pip install <package>',
                    example: 'pip install requests\npip freeze > requirements.txt\npip install -r requirements.txt',
                },
            ],
        },
    ],
};
