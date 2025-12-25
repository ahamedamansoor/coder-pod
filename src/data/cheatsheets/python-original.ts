import { Terminal } from 'lucide-react';

export const pythonCheatsheet = {
    id: 'python',
    name: 'Python',
    description: 'Comprehensive Python 3.x guide with advanced patterns, libraries, and best practices',
    icon: Terminal,
    colorTheme: 'blue' as const,
    sections: [
        {
            title: 'Basics & Flow Control',
            commands: [
                {
                    command: 'Variables & Types',
                    description: 'Dynamic typing and type hints',
                    usage: 'x: int = 10; name: str = "Neo"',
                    example: 'count: int = 42\npi: float = 3.14\nis_active: bool = True\nnone_value: None = None\n\n# Type annotations\nfrom typing import List, Dict, Optional\nnames: List[str] = ["Alice", "Bob"]',
                },
                {
                    command: 'If / Else',
                    description: 'Conditional branching with ternary operator',
                    usage: 'if condition: ... elif: ... else: ...',
                    example: 'if x > 10:\n    print("Large")\nelif x == 10:\n    print("Ten")\nelse:\n    print("Small")\n\n# Ternary operator\nresult = "pass" if score >= 60 else "fail"',
                },
                {
                    command: 'Loops',
                    description: 'For, while loops with comprehensions',
                    usage: 'for x in iterable: ...',
                    example: 'for i in range(5):\n    print(i)\n\n# With enumerate\nfor i, item in enumerate(items):\n    print(i, item)\n\n# With zip\nfor name, age in zip(names, ages):\n    print(f"{name} is {age}")\n\nwhile count > 0:\n    count -= 1',
                },
                {
                    command: 'Pattern Matching',
                    description: 'Structural pattern matching (Python 3.10+)',
                    usage: 'match value: case pattern: ...',
                    example: 'def process_command(cmd):\n    match cmd:\n        case "start":\n            print("Starting...")\n        case "stop" | "exit":\n            print("Stopping...")\n        case _:  # wildcard\n            print("Unknown command")',
                },
            ],
        },
        {
            title: 'Data Structures',
            commands: [
                {
                    command: 'List',
                    description: 'Ordered, mutable sequence with methods',
                    usage: '[item1, item2]',
                    example: 'fruits = ["apple", "banana"]\nfruits.append("orange")\nfruits.extend(["kiwi", "mango"])\nfruits.insert(0, "berry")\nfruits.remove("banana")\nfruits.pop()  # Remove last\nfruits.sort()\nfruits.reverse()\n# List comprehension\nsquares = [x**2 for x in range(10)]',
                },
                {
                    command: 'Dictionary',
                    description: 'Key-value pairs with dictionary methods',
                    usage: '{key: value}',
                    example: 'user = {"name": "Alice", "age": 30}\nuser["role"] = "Admin"\nuser.update({"email": "alice@example.com"})\nuser.pop("age")  # Remove key\nkeys = user.keys()\nvalues = user.values()\nitems = user.items()\n# Dict comprehension\nsquares = {x: x**2 for x in range(5)}',
                },
                {
                    command: 'Set & Frozenset',
                    description: 'Unordered collections of unique elements',
                    usage: 'set([1, 2, 3])',
                    example: 'numbers = {1, 2, 3, 3, 2}  # {1, 2, 3}\nnumbers.add(4)\nnumbers.remove(2)\nnumbers.discard(5)  # No error if not exists\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\nunion = set1 | set2\nintersection = set1 & set2\ndifference = set1 - set2',
                },
                {
                    command: 'Tuple',
                    description: 'Ordered, immutable sequence',
                    usage: '(item1, item2)',
                    example: 'point = (10, 20)\nx, y = point  # Unpacking\n# Named tuple\nfrom collections import namedtuple\nPoint = namedtuple("Point", ["x", "y"])\np = Point(10, 20)\nprint(p.x, p.y)',
                },
                {
                    command: 'Advanced Comprehensions',
                    description: 'Nested and conditional comprehensions',
                    usage: '[expr for x in iterable if condition]',
                    example: '# Nested comprehension\nmatrix = [[i*j for j in range(3)] for i in range(3)]\n# Multiple conditions\nfiltered = [x for x in range(20) if x % 2 == 0 and x > 5]\n# Dict with condition\nsquares_even = {x: x**2 for x in range(10) if x % 2 == 0}',
                },
                {
                    command: 'Slicing',
                    description: 'Extract parts of sequences',
                    usage: 'seq[start:end:step]',
                    example: 's = "Hello World"\nprint(s[0:5])   # "Hello"\nprint(s[::2])   # Every second char\nprint(s[::-1])  # Reverse\nprint(s[-5:])   # Last 5 chars\n\n# List slicing\nnums = list(range(10))\nprint(nums[2:8:2])  # [2, 4, 6]',
                },
            ],
        },
        {
            title: 'Functions & Modules',
            commands: [
                {
                    command: 'Function Definition',
                    description: 'Functions with type hints and defaults',
                    usage: 'def name(args: type) -> return_type: ...',
                    example: 'from typing import List, Optional\n\ndef add(a: int, b: int = 1) -> int:\n    """Add two numbers with optional default."""\n    return a + b\n\ndef process_items(items: List[str]) -> Optional[str]:\n    """Process list of items."""\n    return items[0] if items else None',
                },
                {
                    command: 'Advanced Function Features',
                    description: '*args, **kwargs, and unpacking',
                    usage: 'def func(*args, **kwargs): ...',
                    example: 'def flexible_func(*args, **kwargs):\n    print(f"Args: {args}")\n    print(f"Kwargs: {kwargs}")\n\n# Unpacking\nnumbers = [1, 2, 3]\nprint(*numbers)  # 1 2 3\n\ndef func(a, b, c):\n    print(a, b, c)\n\nfunc(*numbers)  # 1 2 3',
                },
                {
                    command: 'Lambda & Higher Order',
                    description: 'Anonymous functions and functional programming',
                    usage: 'lambda args: expr',
                    example: '# Lambda\nsquare = lambda x: x * x\nadd = lambda x, y: x + y\n\n# Higher order functions\nnumbers = [1, 2, 3, 4, 5]\nevens = list(filter(lambda x: x % 2 == 0, numbers))\ndoubled = list(map(lambda x: x * 2, numbers))\nsum_all = reduce(lambda x, y: x + y, numbers)',
                },
                {
                    command: 'Decorators',
                    description: 'Function decorators with parameters',
                    usage: '@decorator',
                    example: 'import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f"{func.__name__} took {time.time() - start:.2f}s")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(1)',
                },
                {
                    command: 'Module System',
                    description: 'Imports and package structure',
                    usage: 'import module / from module import name',
                    example: '# Standard imports\nimport os\nimport sys as system\nfrom datetime import datetime, timedelta as dt\n\n# Package imports\nfrom mypackage import submodule\nfrom mypackage.submodule import function\n\n# Relative imports (inside packages)\nfrom . import sibling_module\nfrom ..parent import parent_function',
                },
                {
                    command: '__main__ Guard',
                    description: 'Script execution guard',
                    usage: 'if __name__ == "__main__": ...',
                    example: 'def main():\n    print("Script executed directly")\n\nif __name__ == "__main__":\n    main()\n\n# Can be imported without running main\nimport myscript  # No execution',
                },
            ],
        },
        {
            title: 'String Manipulation',
            commands: [
                {
                    command: 'String Methods',
                    description: 'Comprehensive string operations',
                    usage: 's.method()',
                    example: 's = "  Hello World  "\ns.strip()      # "Hello World"\ns.lstrip()     # "Hello World  "\ns.rstrip()     # "  Hello World"\ns.upper()      # "HELLO WORLD"\ns.lower()      # "hello world"\ns.title()      # "Hello World"\ns.capitalize() # "Hello world"\ns.swapcase()   # "hELLO wORLD"\ns.replace("e", "a")  # "Hallo World"\ns.find("World")       # 6 (index)\ns.count("l")          # 3',
                },
                {
                    command: 'String Formatting',
                    description: 'Multiple formatting approaches',
                    usage: 'f-string, .format(), % operator',
                    example: 'name = "Alice"\nage = 30\n\n# f-strings (Python 3.6+)\nmsg1 = f"{name} is {age} years old"\nmsg2 = f"{name=:10} | {age=:03d}"  # Debug formatting\n\n# .format()\nmsg3 = "{} is {} years old".format(name, age)\nmsg4 = "{name} is {age} years old".format(name=name, age=age)\n\n# % operator (older)\nmsg5 = "%s is %d years old" % (name, age)',
                },
                {
                    command: 'Splitting & Joining',
                    description: 'String division and combination',
                    usage: 's.split(), sep.join()',
                    example: '# Splitting\ntext = "apple,banana,cherry"\nwords = text.split(",")  # ["apple", "banana", "cherry"]\nlines = "line1\\nline2\\nline3".split("\\n")\n\n# Joining\nwords = ["apple", "banana", "cherry"]\ncsv = ",".join(words)  # "apple,banana,cherry"\n\n# Advanced splitting\nimport re\ntext = "word1, word2; word3.word4"\nparts = re.split(r"[,;.]\\s*", text)',
                },
                {
                    command: 'Regular Expressions',
                    description: 'Pattern matching with re module',
                    usage: 'import re; re.pattern()',
                    example: 'import re\n\ntext = "Contact: email@example.com or call 123-456-7890"\n\n# Find all matches\nemails = re.findall(r"\\b[\\w.%+-]+@[\\w.-]+\\.[A-Z]{2,}\\b", text, re.I)\nphones = re.findall(r"\\b\\d{3}-\\d{3}-\\d{4}\\b", text)\n\n# Replace\nmasked = re.sub(r"\\b[\\w.%+-]+@[\\w.-]+\\.[A-Z]{2,}\\b", "[REDACTED]", text)\n\n# Compile for performance\npattern = re.compile(r"\\d+")\nnumbers = pattern.findall(text)',
                },
            ],
        },
        {
            title: 'Object-Oriented Programming',
            commands: [
                {
                    command: 'Class Definition',
                    description: 'Complete class with methods and attributes',
                    usage: 'class Name: def __init__(self): ...',
                    example: 'class Person:\n    species = "Homo sapiens"  # Class attribute\n    \n    def __init__(self, name: str, age: int):\n        self.name = name        # Instance attribute\n        self.age = age\n        self._private = "secret" # Convention\n        self.__very_private = "hidden"  # Name mangling\n    \n    def greet(self) -> str:\n        return f"Hello, I\'m {self.name}"\n    \n    @classmethod\n    def from_birth_year(cls, name: str, birth_year: int):\n        return cls(name, 2023 - birth_year)\n    \n    @staticmethod\n    def is_adult(age: int) -> bool:\n        return age >= 18',
                },
                {
                    command: 'Inheritance & Polymorphism',
                    description: 'Parent-child relationships and method overriding',
                    usage: 'class Child(Parent): ...',
                    example: 'class Animal:\n    def __init__(self, name: str):\n        self.name = name\n    \n    def speak(self) -> str:\n        return "Some sound"\n    \n    def __str__(self) -> str:\n        return f"Animal named {self.name}"\n\nclass Dog(Animal):\n    def __init__(self, name: str, breed: str):\n        super().__init__(name)\n        self.breed = breed\n    \n    def speak(self) -> str:  # Override\n        return "Woof!"\n    \n    def __repr__(self) -> str:  # Developer representation\n        return f"Dog(name=\'{self.name}\', breed=\'{self.breed}\')"',
                },
                {
                    command: 'Properties & Descriptors',
                    description: 'Managed attribute access',
                    usage: '@property, @setter, @deleter',
                    example: 'class Temperature:\n    def __init__(self, celsius: float = 0.0):\n        self._celsius = celsius\n    \n    @property\n    def celsius(self) -> float:\n        return self._celsius\n    \n    @celsius.setter\n    def celsius(self, value: float):\n        if value < -273.15:\n            raise ValueError("Below absolute zero!")\n        self._celsius = value\n    \n    @property\n    def fahrenheit(self) -> float:\n        return self._celsius * 9/5 + 32',
                },
                {
                    command: 'Magic Methods',
                    description: 'Special methods for operator overloading',
                    usage: '__method__',
                    example: 'class Vector:\n    def __init__(self, x: float, y: float):\n        self.x = x\n        self.y = y\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n    \n    def __len__(self):\n        return int((self.x**2 + self.y**2)**0.5)\n    \n    def __getitem__(self, key):\n        return self.x if key == 0 else self.y if key == 1 else None',
                },
                {
                    command: 'Abstract Base Classes',
                    description: 'Define interfaces and abstract methods',
                    usage: 'from abc import ABC, abstractmethod',
                    example: 'from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self) -> float:\n        pass\n    \n    @abstractmethod\n    def perimeter(self) -> float:\n        pass\n\nclass Rectangle(Shape):\n    def __init__(self, width: float, height: float):\n        self.width = width\n        self.height = height\n    \n    def area(self) -> float:\n        return self.width * self.height\n    \n    def perimeter(self) -> float:\n        return 2 * (self.width + self.height)',
                },
            ],
        },
        {
            title: 'Error Handling & Exceptions',
            commands: [
                {
                    command: 'Try / Except Blocks',
                    description: 'Comprehensive exception handling',
                    usage: 'try: ... except Error: ... else: ... finally: ...',
                    example: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError as e:\n    print(f"Division error: {e}")\nexcept ValueError as e:\n    print(f"Value error: {e}")\nexcept Exception as e:\n    print(f"Unexpected error: {e}")\nelse:\n    print("No errors occurred")\nfinally:\n    print("Cleanup code")',
                },
                {
                    command: 'Custom Exceptions',
                    description: 'Create user-defined exception classes',
                    usage: 'class CustomError(Exception): ...',
                    example: 'class ValidationError(Exception):\n    def __init__(self, field: str, value: str):\n        self.field = field\n        self.value = value\n        super().__init__(f"Invalid {field}: {value}")\n\nclass APIError(Exception):\n    def __init__(self, status_code: int, message: str):\n        self.status_code = status_code\n        super().__init__(f"API Error {status_code}: {message}")\n\n# Usage\ntry:\n    raise ValidationError("email", "invalid-email")\nexcept ValidationError as e:\n    print(e)',
                },
                {
                    command: 'Context Managers',
                    description: 'with statement and custom context managers',
                    usage: 'with context: ...',
                    example: 'from contextlib import contextmanager\n\n@contextmanager\ndef file_manager(filename: str, mode: str):\n    f = open(filename, mode)\n    try:\n        yield f\n    finally:\n        f.close()\n\n# Usage\nwith file_manager("data.txt", "r") as f:\n    content = f.read()\n    # File automatically closed\n\n# Class-based context manager\nclass DatabaseConnection:\n    def __enter__(self):\n        self.connection = self.connect()\n        return self.connection\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.connection.close()',
                },
            ],
        },
        {
            title: 'File I/O & Serialization',
            commands: [
                {
                    command: 'File Operations',
                    description: 'Reading and writing files with encoding',
                    usage: 'with open(path, mode, encoding) as f:',
                    example: '# Reading\nwith open("data.txt", "r", encoding="utf-8") as f:\n    content = f.read()           # All content\n    lines = f.readlines()       # List of lines\n    first_line = f.readline()   # First line only\n\n# Writing\nwith open("output.txt", "w", encoding="utf-8") as f:\n    f.write("Hello\\nWorld")\n    f.writelines(["Line 1\\n", "Line 2\\n"])\n\n# Appending\nwith open("log.txt", "a", encoding="utf-8") as f:\n    f.write(f"{datetime.now()}: Log entry\\n")\n\n# Binary mode\nwith open("image.jpg", "rb") as f:\n    image_data = f.read()',
                },
                {
                    command: 'Path Handling',
                    description: 'Modern path manipulation with pathlib',
                    usage: 'from pathlib import Path',
                    example: 'from pathlib import Path\n\n# Path creation and manipulation\npath = Path("data") / "subdir" / "file.txt"\npath.mkdir(parents=True, exist_ok=True)\n\n# Path operations\nprint(path.exists())\nprint(path.is_file())\nprint(path.is_dir())\nprint(path.name)      # file.txt\nprint(path.stem)      # file\nprint(path.suffix)    # .txt\nprint(path.parent)    # data/subdir\n\n# File operations\npath.write_text("Hello, World!")\ncontent = path.read_text()\n\n# Directory operations\nfor file_path in path.parent.glob("*.txt"):\n    print(file_path)',
                },
                {
                    command: 'JSON Serialization',
                    description: 'JSON encoding and decoding',
                    usage: 'import json; json.loads(), json.dumps()',
                    example: 'import json\nfrom typing import Dict, Any\n\n# Serialization\ndata = {\n    "name": "Alice",\n    "age": 30,\n    "skills": ["Python", "JavaScript"],\n    "active": True\n}\n\njson_str = json.dumps(data, indent=2, ensure_ascii=False)\nwith open("data.json", "w") as f:\n    json.dump(data, f, indent=2)\n\n# Deserialization\nwith open("data.json", "r") as f:\n    loaded_data = json.load(f)\n\nparsed = json.loads(json_str)\n\n# Custom JSON encoder\nclass DateTimeEncoder(json.JSONEncoder):\n    def default(self, obj):\n        if isinstance(obj, datetime):\n            return obj.isoformat()\n        return super().default(obj)',
                },
                {
                    command: 'Pickle & CSV',
                    description: 'Python object serialization and CSV handling',
                    usage: 'import pickle; import csv',
                    example: 'import pickle\nimport csv\n\n# Pickle (Python-specific serialization)\ndata = {"name": "Alice", "age": 30}\nwith open("data.pkl", "wb") as f:\n    pickle.dump(data, f)\n\nwith open("data.pkl", "rb") as f:\n    loaded = pickle.load(f)\n\n# CSV handling\nheaders = ["name", "age", "city"]\nrows = [\n    ["Alice", 30, "New York"],\n    ["Bob", 25, "Los Angeles"]\n]\n\n# Writing CSV\nwith open("data.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(headers)\n    writer.writerows(rows)\n\n# Reading CSV\nwith open("data.csv", "r") as f:\n    reader = csv.reader(f)\n    headers = next(reader)\n    data = [row for row in reader]',
                },
            ],
        },
        {
            title: 'Standard Library Essentials',
            commands: [
                {
                    command: 'datetime & Time',
                    description: 'Date, time, and timezone handling',
                    usage: 'from datetime import datetime, timedelta, timezone',
                    example: 'from datetime import datetime, timedelta, timezone\nimport time\n\n# Current time\nnow = datetime.now()\nutc_now = datetime.now(timezone.utc)\n\n# Creating dates\ndate1 = datetime(2023, 12, 25, 15, 30)\ndate2 = datetime.strptime("2023-12-25", "%Y-%m-%d")\n\n# Time arithmetic\ntomorrow = now + timedelta(days=1)\nweek_later = now + timedelta(weeks=1)\ndiff = date2 - date1\n\n# Formatting\nformatted = now.strftime("%Y-%m-%d %H:%M:%S")\niso_string = now.isoformat()\n\n# Performance timing\nstart_time = time.perf_counter()\n# ... code ...\nend_time = time.perf_counter()\nprint(f"Execution time: {end_time - start_time:.4f}s")',
                },
                {
                    command: 'Collections Module',
                    description: 'Specialized container datatypes',
                    usage: 'from collections import Counter, defaultdict, deque',
                    example: 'from collections import Counter, defaultdict, deque, namedtuple\n\n# Counter - count hashable objects\nwords = ["apple", "banana", "apple", "orange", "banana", "apple"]\ncounts = Counter(words)\nprint(counts.most_common(2))  # [("apple", 3), ("banana", 2)]\n\n# defaultdict - dictionary with default factory\nd = defaultdict(list)\nd["fruits"].append("apple")\nd["vegetables"].append("carrot")\n\n# deque - double-ended queue\nqueue = deque([1, 2, 3])\nqueue.append(4)\nqueue.appendleft(0)\nqueue.pop()\nqueue.popleft()\n\n# namedtuple - tuple with named fields\nPoint = namedtuple("Point", ["x", "y"])\np = Point(10, 20)\nprint(p.x, p.y)',
                },
                {
                    command: 'Math & Statistics',
                    description: 'Mathematical functions and statistics',
                    usage: 'import math; import statistics; import random',
                    example: 'import math\nimport statistics\nimport random\n\n# Math functions\nprint(math.sqrt(16))        # 4.0\nprint(math.ceil(3.2))       # 4\nprint(math.floor(3.8))      # 3\nprint(math.pi)              # 3.14159...\nprint(math.e)               # 2.71828...\nprint(math.log(100, 10))    # 2.0\n\n# Statistics\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nprint(statistics.mean(numbers))    # 5.5\nprint(statistics.median(numbers))  # 5.5\nprint(statistics.stdev(numbers))   # Standard deviation\n\n# Random\nrandom.seed(42)  # Reproducible results\nprint(random.randint(1, 100))     # Random integer\nprint(random.choice(["a", "b", "c"]))  # Random choice\nprint(random.sample(range(100), 5))   # 5 unique random numbers\nrandom.shuffle(numbers)  # Shuffle in place',
                },
                {
                    command: 'os & sys Modules',
                    description: 'Operating system and Python interpreter interface',
                    usage: 'import os; import sys',
                    example: 'import os\nimport sys\nimport platform\n\n# Environment variables\nhome_dir = os.environ.get("HOME", os.environ.get("USERPROFILE"))\nos.environ["MY_VAR"] = "value"\n\n# File system operations\nprint(os.getcwd())  # Current directory\nos.chdir("/path/to/dir")\nos.mkdir("new_dir")\nos.makedirs("dir/subdir", exist_ok=True)\n\n# Path operations\npath = os.path.join("dir", "file.txt")\nprint(os.path.exists(path))\nprint(os.path.isfile(path))\nprint(os.path.isdir(path))\n\n# System information\nprint(sys.version)\nprint(sys.platform)\nprint(platform.system())\nprint(platform.python_version())\n\n# Command line arguments\nprint(sys.argv)  # [script_name, arg1, arg2, ...]',
                },
            ],
        },
        {
            title: 'Advanced Python Features',
            commands: [
                {
                    command: 'Generators & Iterators',
                    description: 'Lazy evaluation and custom iterators',
                    usage: 'def generator(): yield value',
                    example: '# Generator function\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\n# Using generator\nfor num in fibonacci(10):\n    print(num)\n\n# Generator expression\nsquares = (x**2 for x in range(10))\nprint(sum(squares))\n\n# Custom iterator\nclass Countdown:\n    def __init__(self, start):\n        self.start = start\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.start <= 0:\n            raise StopIteration\n        self.start -= 1\n        return self.start + 1',
                },
                {
                    command: 'Decorators Advanced',
                    description: 'Class decorators, property decorators, and more',
                    usage: '@decorator with parameters',
                    example: 'import functools\nfrom typing import Callable, Any\n\n# Decorator with parameters\ndef repeat(times: int):\n    def decorator(func: Callable) -> Callable:\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            result = None\n            for _ in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet(name: str):\n    print(f"Hello, {name}!")\n\n# Class decorator\ndef add_methods(cls):\n    cls.new_method = lambda self: "New method"\n    return cls\n\n@add_methods\nclass MyClass:\n    pass\n\n# Property decorators with validation\nclass Person:\n    def __init__(self, name: str):\n        self._name = name\n    \n    @property\n    def name(self) -> str:\n        return self._name\n    \n    @name.setter\n    def name(self, value: str):\n        if not value.strip():\n            raise ValueError("Name cannot be empty")\n        self._name = value.strip()',
                },
                {
                    command: 'Metaclasses',
                    description: 'Class creation and customization',
                    usage: 'class Meta(type): ...',
                    example: 'class SingletonMeta(type):\n    _instances = {}\n    \n    def __call__(cls, *args, **kwargs):\n        if cls not in cls._instances:\n            instance = super().__call__(*args, **kwargs)\n            cls._instances[cls] = instance\n        return cls._instances[cls]\n\nclass Singleton(metaclass=SingletonMeta):\n    def __init__(self):\n        self.value = 0\n\n# Validation metaclass\nclass ValidateFields(type):\n    def __new__(cls, name, bases, namespace):\n        # Add validation to all classes using this metaclass\n        for key, value in namespace.items():\n            if isinstance(value, property):\n                # Wrap property with validation\n                namespace[key] = cls._validate_property(value)\n        return super().__new__(cls, name, bases, namespace)',
                },
                {
                    command: 'Type Hints & Generics',
                    description: 'Advanced typing with TypeVar and Generic',
                    usage: 'from typing import TypeVar, Generic, List',
                    example: 'from typing import TypeVar, Generic, List, Dict, Optional, Union\n\n# Type variables\nT = TypeVar(\'T\')\nK = TypeVar(\'K\')\nV = TypeVar(\'V\')\n\n# Generic classes\nclass Stack(Generic[T]):\n    def __init__(self):\n        self._items: List[T] = []\n    \n    def push(self, item: T) -> None:\n        self._items.append(item)\n    \n    def pop(self) -> Optional[T]:\n        return self._items.pop() if self._items else None\n\n# Generic functions\ndef first_item(items: List[T]) -> Optional[T]:\n    return items[0] if items else None\n\n# Union types\nNumber = Union[int, float]\ndef add(a: Number, b: Number) -> Number:\n    return a + b\n\n# Protocol (structural typing)\nfrom typing import Protocol\n\nclass Drawable(Protocol):\n    def draw(self) -> str: ...\n\ndef render(obj: Drawable) -> str:\n    return obj.draw()',
                },
                {
                    command: 'Async Programming',
                    description: 'async/await and concurrent programming',
                    usage: 'async def function(): await coroutine',
                    example: 'import asyncio\nimport aiohttp\nfrom typing import List\n\n# Async functions\nasync def fetch_url(url: str) -> str:\n    async with aiohttp.ClientSession() as session:\n        async with session.get(url) as response:\n            return await response.text()\n\n# Concurrent execution\nasync def fetch_multiple(urls: List[str]) -> List[str]:\n    tasks = [fetch_url(url) for url in urls]\n    return await asyncio.gather(*tasks)\n\n# Async context manager\nclass AsyncTimer:\n    async def __aenter__(self):\n        self.start = asyncio.get_event_loop().time()\n        return self\n    \n    async def __aexit__(self, exc_type, exc_val, exc_tb):\n        duration = asyncio.get_event_loop().time() - self.start\n        print(f"Operation took {duration:.2f}s")\n\n# Usage\nasync def main():\n    async with AsyncTimer():\n        results = await fetch_multiple(["url1", "url2"])\n        print(results)\n\n# Run async code\nasyncio.run(main())',
                },
            ],
        },
        {
            title: 'Testing & Debugging',
            commands: [
                {
                    command: 'Unit Testing with unittest',
                    description: 'Built-in testing framework',
                    usage: 'import unittest; class TestClass(unittest.TestCase)',
                    example: 'import unittest\n\nclass TestMathFunctions(unittest.TestCase):\n    def test_addition(self):\n        self.assertEqual(2 + 2, 4)\n        self.assertNotEqual(2 + 2, 5)\n    \n    def test_exceptions(self):\n        with self.assertRaises(ValueError):\n            int("abc")\n    \n    def setUp(self):\n        """Called before each test method."""\n        self.test_data = [1, 2, 3]\n    \n    def tearDown(self):\n        """Called after each test method."""\n        pass\n\nif __name__ == "__main__":\n    unittest.main()',
                },
                {
                    command: 'Testing with pytest',
                    description: 'Third-party testing framework',
                    usage: 'import pytest; def test_function(): ...',
                    example: 'import pytest\nfrom calculator import add, multiply\n\n# Simple test\ndef test_add():\n    assert add(2, 3) == 5\n\n# Parameterized test\n@pytest.mark.parametrize("a,b,expected", [\n    (1, 2, 3),\n    (0, 0, 0),\n    (-1, 1, 0)\n])\ndef test_add(a, b, expected):\n    assert add(a, b) == expected\n\n# Test with fixtures\n@pytest.fixture\ndef sample_data():\n    return {"users": ["Alice", "Bob"], "count": 2}\n\ndef test_user_count(sample_data):\n    assert len(sample_data["users"]) == sample_data["count"]\n\n# Mocking\nfrom unittest.mock import patch, Mock\n\ndef test_api_call():\n    with patch("requests.get") as mock_get:\n        mock_response = Mock()\n        mock_response.json.return_value = {"status": "success"}\n        mock_get.return_value = mock_response\n        \n        result = fetch_api_data()\n        assert result["status"] == "success"',
                },
                {
                    command: 'Debugging Tools',
                    description: 'pdb, logging, and debugging techniques',
                    usage: 'import pdb; pdb.set_trace()',
                    example: 'import pdb\nimport logging\n\n# pdb debugging\ndef buggy_function(x):\n    pdb.set_trace()  # Breakpoint\n    result = x / 0  # This will cause error\n    return result\n\n# Logging configuration\nlogging.basicConfig(\n    level=logging.INFO,\n    format=\'%(asctime)s - %(name)s - %(levelname)s - %(message)s\',\n    handlers=[\n        logging.FileHandler(\'app.log\'),\n        logging.StreamHandler()\n    ]\n)\n\nlogger = logging.getLogger(__name__)\n\ndef process_data(data):\n    logger.info(f"Processing {len(data)} items")\n    try:\n        result = complex_operation(data)\n        logger.info("Processing successful")\n        return result\n    except Exception as e:\n        logger.error(f"Processing failed: {e}", exc_info=True)\n        raise\n\n# Assert statements for debugging\ndef validate_config(config):\n    assert config is not None, "Config cannot be None"\n    assert "database" in config, "Database config missing"\n    assert config["database"]["host"], "Database host required"',
                },
                {
                    command: 'Performance Profiling',
                    description: 'cProfile and memory profiling',
                    usage: 'import cProfile; import timeit',
                    example: 'import cProfile\nimport pstats\nimport timeit\nfrom memory_profiler import profile\n\n# Time execution\ntime_taken = timeit.timeit(\n    "my_function()",\n    setup="from __main__ import my_function",\n    number=1000\n)\nprint(f"Average time: {time_taken/1000:.6f}s")\n\n# Profile function\ndef profile_function(func):\n    profiler = cProfile.Profile()\n    profiler.enable()\n    result = func()\n    profiler.disable()\n    \n    stats = pstats.Stats(profiler)\n    stats.sort_stats(\'cumulative\')\n    stats.print_stats(10)  # Top 10 functions\n    \n    return result\n\n# Memory profiling\n@profile\ndef memory_intensive_function():\n    large_list = [i for i in range(1000000)]\n    return sum(large_list)\n\n# Line profiling\nfrom line_profiler import LineProfiler\n\nlp = LineProfiler()\nlp_wrapper = lp(my_function)\nlp_wrapper()\nlp.print_stats()',
                },
            ],
        },
        {
            title: 'Popular Libraries & Frameworks',
            commands: [
                {
                    command: 'NumPy Basics',
                    description: 'Numerical computing with arrays',
                    usage: 'import numpy as np',
                    example: 'import numpy as np\n\n# Array creation\narr = np.array([1, 2, 3, 4, 5])\nzeros = np.zeros((3, 3))\nones = np.ones((2, 4))\nrandom_arr = np.random.rand(3, 3)\n\n# Array operations\narr2d = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr2d.shape)  # (2, 3)\nprint(arr2d.dtype)  # int64\n\n# Mathematical operations\nresult = arr + 10\nsquared = arr ** 2\ndot_product = np.dot(arr1, arr2)\n\n# Indexing and slicing\nprint(arr[1:4])        # [2, 3, 4]\nprint(arr2d[:, 1])    # [2, 5] (second column)\nprint(arr[arr > 3])   # [4, 5] (boolean indexing)\n\n# Aggregation\nprint(np.mean(arr))    # Mean\nprint(np.std(arr))     # Standard deviation\nprint(arr.sum())       # Sum\nprint(arr.max())       # Maximum',
                },
                {
                    command: 'Pandas DataFrames',
                    description: 'Data manipulation and analysis',
                    usage: 'import pandas as pd',
                    example: 'import pandas as pd\nimport numpy as np\n\n# Creating DataFrames\ndata = {\n    "name": ["Alice", "Bob", "Charlie"],\n    "age": [25, 30, 35],\n    "city": ["NYC", "LA", "Chicago"]\n}\ndf = pd.DataFrame(data)\n\n# Reading/writing data\ndf = pd.read_csv("data.csv")\ndf.to_excel("output.xlsx", index=False)\n\n# Data exploration\nprint(df.head())        # First 5 rows\nprint(df.info())         # DataFrame info\nprint(df.describe())     # Statistics\nprint(df.shape)         # (rows, columns)\n\n# Selection and filtering\nprint(df["name"])                    # Single column\nprint(df[["name", "age"]])           # Multiple columns\nprint(df[df["age"] > 25])            # Filter rows\nprint(df.loc[df["city"] == "NYC"])   # Label-based indexing\n\n# Data manipulation\ndf["age_plus_5"] = df["age"] + 5\ndf["age_category"] = pd.cut(df["age"], bins=[0, 25, 35, 50], labels=["Young", "Adult", "Senior"])\ngrouped = df.groupby("city")["age"].mean()\n\n# Handling missing data\ndf.dropna()                    # Drop rows with NaN\ndf.fillna(0)                  # Fill NaN with 0\ndf["age"].fillna(df["age"].mean())  # Fill with mean',
                },
                {
                    command: 'Requests & HTTP',
                    description: 'HTTP client library',
                    usage: 'import requests',
                    example: 'import requests\nimport json\n\n# Basic GET request\nresponse = requests.get("https://api.example.com/data")\nprint(response.status_code)  # 200\nprint(response.headers)      # Headers\nprint(response.json())       # JSON response\n\n# POST request with data\ndata = {"name": "Alice", "age": 30}\nheaders = {"Content-Type": "application/json"}\nresponse = requests.post(\n    "https://api.example.com/users",\n    json=data,\n    headers=headers\n)\n\n# Error handling\ntry:\n    response = requests.get("https://api.example.com/data", timeout=5)\n    response.raise_for_status()  # Raise exception for 4XX/5XX\nexcept requests.exceptions.RequestException as e:\n    print(f"Request failed: {e}")\n\n# Session for multiple requests\nsession = requests.Session()\nsession.headers.update({"Authorization": "Bearer token"})\nresponse1 = session.get("https://api.example.com/endpoint1")\nresponse2 = session.get("https://api.example.com/endpoint2")',
                },
                {
                    command: 'Flask Web Framework',
                    description: 'Lightweight web framework',
                    usage: 'from flask import Flask, request, jsonify',
                    example: 'from flask import Flask, request, jsonify, render_template\n\napp = Flask(__name__)\n\n# Routes\n@app.route("/")\ndef home():\n    return "Hello, World!"\n\n@app.route("/api/users", methods=["GET", "POST"])\ndef users():\n    if request.method == "POST":\n        data = request.get_json()\n        # Process data\n        return jsonify({"status": "success", "received": data})\n    else:\n        users = [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]\n        return jsonify(users)\n\n# Route parameters\n@app.route("/users/<int:user_id>")\ndef get_user(user_id):\n    return f"User ID: {user_id}"\n\n# Query parameters\n@app.route("/search")\ndef search():\n    query = request.args.get("q", "")\n    page = int(request.args.get("page", 1))\n    return f"Searching for: {query}, page: {page}"\n\n# Template rendering\n@app.route("/profile/<username>")\ndef profile(username):\n    return render_template("profile.html", username=username)\n\nif __name__ == "__main__":\n    app.run(debug=True)',
                },
                {
                    command: 'SQLAlchemy ORM',
                    description: 'Database ORM',
                    usage: 'from sqlalchemy import create_engine, Column, Integer, String',
                    example: 'from sqlalchemy import create_engine, Column, Integer, String, Float\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy.orm import sessionmaker\n\nBase = declarative_base()\n\nclass User(Base):\n    __tablename__ = "users"\n    \n    id = Column(Integer, primary_key=True)\n    name = Column(String(50), nullable=False)\n    email = Column(String(100), unique=True)\n    age = Column(Integer)\n    \n    def __repr__(self):\n        return f"<User(name=\'{self.name}\', email=\'{self.email}\')>"\n\n# Database setup\nengine = create_engine("sqlite:///users.db")\nBase.metadata.create_all(engine)\nSession = sessionmaker(bind=engine)\nsession = Session()\n\n# CRUD operations\n\n# Create\nnew_user = User(name="Alice", email="alice@example.com", age=25)\nsession.add(new_user)\nsession.commit()\n\n# Read\nusers = session.query(User).all()\nalice = session.query(User).filter_by(name="Alice").first()\nadults = session.query(User).filter(User.age >= 18).all()\n\n# Update\nalice.age = 26\nsession.commit()\n\n# Delete\nsession.delete(alice)\nsession.commit()',
                },
            ],
        },
        {
            title: 'Performance & Best Practices',
            commands: [
                {
                    command: 'Performance Optimization',
                    description: 'Code optimization techniques',
                    usage: '# Use built-in functions, list comprehensions, generators',
                    example: '# Use list comprehensions instead of loops\n# Bad\nresult = []\nfor i in range(1000):\n    if i % 2 == 0:\n        result.append(i * 2)\n\n# Good\nresult = [i * 2 for i in range(1000) if i % 2 == 0]\n\n# Use generators for large datasets\n# Bad (memory intensive)\nlarge_list = [i**2 for i in range(1000000)]\n\n# Good (memory efficient)\nlarge_generator = (i**2 for i in range(1000000))\n\n# Use built-in functions\n# Bad\ndef find_max(numbers):\n    max_val = numbers[0]\n    for num in numbers[1:]:\n        if num > max_val:\n            max_val = num\n    return max_val\n\n# Good\nmax_val = max(numbers)\n\n# Use sets for membership testing\n# Bad\nif item in large_list:  # O(n)\n\n# Good\nif item in large_set:   # O(1)',
                },
                {
                    command: 'Memory Management',
                    description: 'Efficient memory usage patterns',
                    usage: '# Use generators, weak references, memory profiling',
                    example: 'import weakref\nimport gc\nfrom functools import lru_cache\n\n# Generator for memory efficiency\ndef process_large_file(filename):\n    with open(filename, "r") as f:\n        for line in f:\n            yield process_line(line)\n\n# Weak references to avoid circular references\nclass Node:\n    def __init__(self, value):\n        self.value = value\n        self.parent = None\n        self.children = weakref.WeakSet()\n\n# LRU cache for memoization\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n# Memory profiling\nimport sys\n\nvar_size = sys.getsizeof(variable)\nprint(f"Variable size: {var_size} bytes")\n\n# Force garbage collection\ngc.collect()\n\n# Context managers for resource management\nclass DatabaseConnection:\n    def __enter__(self):\n        self.connection = self.connect()\n        return self.connection\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.connection.close()',
                },
                {
                    command: 'Code Style & PEP 8',
                    description: 'Python coding standards',
                    usage: '# Follow PEP 8 guidelines',
                    example: '# Naming conventions\nvariable_name = "snake_case"\nCONSTANT_NAME = "UPPER_CASE"\nclass_name = "PascalCase"\nfunction_name = "snake_case"\n_private_variable = "leading_underscore"\n\n# Line length (max 79 characters)\nlong_line = ("This is a long line that is wrapped "\n             "using parentheses for readability")\n\n# Import order (standard library, third-party, local)\nimport os\nimport sys\nfrom typing import List\n\nimport requests\nimport pandas as pd\n\nfrom myproject import mymodule\nfrom myproject.utils import helper_function\n\n# Docstrings\ndef calculate_area(length: float, width: float) -> float:\n    """\n    Calculate the area of a rectangle.\n    \n    Args:\n        length: The length of the rectangle.\n        width: The width of the rectangle.\n    \n    Returns:\n        The area of the rectangle.\n    \n    Raises:\n        ValueError: If length or width is negative.\n    """\n    if length < 0 or width < 0:\n        raise ValueError("Dimensions must be positive")\n    return length * width',
                },
                {
                    command: 'Virtual Environments',
                    description: 'Project isolation and dependency management',
                    usage: 'python -m venv env; source env/bin/activate',
                    example: '# Create virtual environment\npython -m venv myproject_env\n\n# Activate (Linux/Mac)\nsource myproject_env/bin/activate\n\n# Activate (Windows)\nmyproject_env\\Scripts\\activate\n\n# Install packages\npip install requests pandas numpy\n\n# Save dependencies\npip freeze > requirements.txt\n\n# Install from requirements\npip install -r requirements.txt\n\n# Development dependencies\npip install -r requirements-dev.txt\n\n# Create requirements.txt with specific versions\npip freeze > requirements.txt\n\n# Use pipenv for better dependency management\npipenv install requests pandas\npipenv install pytest --dev\npipenv shell  # Activate virtual environment',
                },
                {
                    command: 'Logging Best Practices',
                    description: 'Structured logging for applications',
                    usage: 'import logging; logging.basicConfig()',
                    example: 'import logging\nimport sys\nfrom datetime import datetime\n\n# Configure logging\nlogging.basicConfig(\n    level=logging.INFO,\n    format=\'%(asctime)s - %(name)s - %(levelname)s - %(message)s\',\n    handlers=[\n        logging.FileHandler(f\'app_{datetime.now().strftime("%Y%m%d")}.log\'),\n        logging.StreamHandler(sys.stdout)\n    ]\n)\n\n# Create logger\nlogger = logging.getLogger(__name__)\n\n# Different log levels\nlogger.debug("Detailed debug information")\nlogger.info("General information")\nlogger.warning("Warning message")\nlogger.error("Error occurred")\nlogger.critical("Critical error")\n\n# Structured logging\ndef process_user(user_id: int):\n    logger.info(f"Processing user {user_id}", extra={"user_id": user_id})\n    try:\n        # Process user\n        result = user_operation(user_id)\n        logger.info(f"User {user_id} processed successfully")\n        return result\n    except Exception as e:\n        logger.error(f"Failed to process user {user_id}: {e}", exc_info=True)\n        raise\n\n# Custom formatter\nclass CustomFormatter(logging.Formatter):\n    def format(self, record):\n        # Add custom formatting\n        return super().format(record)',
                },
            ],
        },
        {
            title: 'Development Tools & Workflow',
            commands: [
                {
                    command: 'Package Management',
                    description: 'pip, conda, and package distribution',
                    usage: 'pip install package; conda install package',
                    example: '# pip commands\npip install requests pandas numpy\npip install -r requirements.txt\npip install --upgrade package\npip uninstall package\npip list  # Show installed packages\npip show package  # Package details\n\n# Virtual environment with pip\npython -m venv venv\nsource venv/bin/activate\npip install -r requirements.txt\n\n# Conda (for data science)\nconda create -n myenv python=3.9\nconda activate myenv\nconda install numpy pandas scipy\nconda env export > environment.yml\nconda env create -f environment.yml\n\n# Package distribution setup.py\nfrom setuptools import setup, find_packages\n\nsetup(\n    name="mypackage",\n    version="1.0.0",\n    packages=find_packages(),\n    install_requires=[\n        "requests>=2.25.0",\n        "pandas>=1.3.0"\n    ],\n    python_requires=">=3.7",\n    author="Your Name",\n    description="My awesome package"\n)',
                },
                {
                    command: 'Code Quality Tools',
                    description: 'Linting, formatting, and static analysis',
                    usage: '# Install tools: pip install black flake8 mypy',
                    example: '# Install code quality tools\npip install black flake8 mypy isort pylint\n\n# Black - code formatter\nblack .                    # Format all files\nblack myscript.py         # Format single file\nblack --check .           # Check formatting without changing\n\n# isort - import sorting\nisort .                   # Sort imports\nisort --profile black .   # Black-compatible sorting\n\n# flake8 - linting\nflake8 .                  # Lint all files\nflake8 --max-line-length=88 myscript.py\n\n# mypy - static type checking\nmypy .                    # Type check all files\nmypy --ignore-missing-imports myscript.py\n\n# pylint - comprehensive linting\npylint myscript.py\n\n# Pre-commit hooks\n# .pre-commit-config.yaml\nrepos:\n  - repo: https://github.com/psf/black\n    rev: 22.3.0\n    hooks:\n      - id: black\n  - repo: https://github.com/pycqa/isort\n    rev: 5.10.1\n    hooks:\n      - id: isort\n  - repo: https://github.com/pycqa/flake8\n    rev: 4.0.1\n    hooks:\n      - id: flake8',
                },
                {
                    command: 'Documentation',
                    description: 'Docstrings, Sphinx, and API documentation',
                    usage: '# Use docstrings and Sphinx for documentation',
                    example: '# Google-style docstring\ndef calculate_compound_interest(principal: float, rate: float, time: int) -> float:\n    """Calculate compound interest.\n    \n    This function calculates the compound interest earned on a principal\n    amount over a specified time period at a given annual interest rate.\n    \n    Args:\n        principal: The initial amount of money.\n        rate: The annual interest rate as a decimal (e.g., 0.05 for 5%).\n        time: The number of years to compound.\n    \n    Returns:\n        The final amount after compound interest.\n    \n    Raises:\n        ValueError: If principal is negative or rate is negative.\n    \n    Example:\n        >>> calculate_compound_interest(1000, 0.05, 5)\n        1276.28\n    """\n    if principal < 0:\n        raise ValueError("Principal cannot be negative")\n    if rate < 0:\n        raise ValueError("Rate cannot be negative")\n    return principal * (1 + rate) ** time\n\n# Type hints for better documentation\nfrom typing import List, Dict, Optional, Union\n\ndef process_data(\n    data: List[Dict[str, Union[str, int, float]]],\n    config: Optional[Dict[str, str]] = None\n) -> List[str]:\n    """Process a list of data dictionaries."""\n    pass\n\n# Sphinx documentation\n# conf.py setup for Sphinx\nproject = "MyProject"\ncopyright = "2023, Your Name"\nauthor = "Your Name"\nextensions = ["sphinx.ext.autodoc", "sphinx.ext.viewcode"]',
                },
                {
                    command: 'Debugging & Profiling',
                    description: 'Advanced debugging and performance analysis',
                    usage: '# Use pdb, cProfile, and memory_profiler',
                    example: '# pdb debugging\nimport pdb\n\ndef complex_function(data):\n    pdb.set_trace()  # Breakpoint\n    processed = []\n    for item in data:\n        if item > 0:\n            processed.append(item * 2)\n    return processed\n\n# Post-mortem debugging\ntry:\n    problematic_function()\nexcept Exception:\n    import pdb\n    pdb.pm()  # Post-mortem debugger\n\n# Performance profiling\nimport cProfile\nimport pstats\n\ndef profile_function(func):\n    profiler = cProfile.Profile()\n    profiler.enable()\n    result = func()\n    profiler.disable()\n    \n    stats = pstats.Stats(profiler)\n    stats.sort_stats("cumulative")\n    stats.print_stats(20)\n    return result\n\n# Memory profiling\n# pip install memory_profiler\nfrom memory_profiler import profile\n\n@profile\ndef memory_intensive_function():\n    large_data = [i for i in range(1000000)]\n    return sum(large_data)\n\n# Line profiling\n# pip install line_profiler\nfrom line_profiler import LineProfiler\n\nlp = LineProfiler()\nlp.add_function(my_function)\nlp_wrapper = lp(my_function)\nlp_wrapper()\nlp.print_stats()',
                },
            ],
        },
    ],
};
