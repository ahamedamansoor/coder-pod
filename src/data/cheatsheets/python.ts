import { Terminal } from 'lucide-react';

export const pythonCheatsheet = {
  id: 'python',
  name: 'Python',
  description: 'Master Python programming from basics to advanced (Python 3.8-3.12)',
  icon: Terminal,
  colorTheme: 'blue' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Python',
      commands: [
        {
          command: 'Python Installation',
          description: 'Install Python and set up environment',
          usage: 'Download from python.org or use package manager',
          example: '# Windows (download from python.org)\n# macOS (Homebrew)\nbrew install python@3.12\n\n# Linux (Ubuntu/Debian)\nsudo apt update\nsudo apt install python3 python3-pip python3-venv\n\n# Verify installation\npython3 --version\npip3 --version\n\n# Upgrade pip\npip install --upgrade pip',
        },
        {
          command: 'Running Python Code',
          description: 'Execute Python scripts and use REPL',
          usage: 'python script.py or python3 -c "code"',
          example: '# Run script\npython3 my_script.py\n\n# Execute one-liner\npython3 -c "print(\'Hello, World!\')"\n\n# Interactive REPL\npython3\n>>> print("Hello")\n>>> exit()\n\n# Run with specific encoding\npython3 -X utf8 script.py\n\n# Check syntax without running\npython3 -m py_compile script.py',
        },
        {
          command: 'Virtual Environments',
          description: 'Create isolated Python environments',
          usage: 'python -m venv env_name',
          example: '# Create virtual environment\npython3 -m venv myenv\n\n# Activate (macOS/Linux)\nsource myenv/bin/activate\n\n# Activate (Windows)\nmyenv\\Scripts\\activate\n\n# Install packages\npip install requests pandas\n\n# Save requirements\npip freeze > requirements.txt\n\n# Install from requirements\npip install -r requirements.txt\n\n# Deactivate\ndeactivate',
        },
        {
          command: 'Comments and Docstrings',
          description: 'Add documentation to code',
          usage: '# comment or """docstring"""',
          example: '# Single line comment\n\n# Multi-line comments\n# This is a comment\n# that spans multiple lines\n\n"""Module docstring - describes the module"""\n\ndef function():\n    """Function docstring - describes the function.\n    \n    Args:\n        param1: Description of parameter\n    \n    Returns:\n        Description of return value\n    """\n    pass\n\nclass MyClass:\n    """Class docstring - describes the class."""\n    pass',
        },
        {
          command: 'Basic Syntax',
          description: 'Python syntax fundamentals',
          usage: 'Indentation, case sensitivity, basic structure',
          example: '# Indentation defines blocks (4 spaces standard)\nif True:\n    print("Indented block")\n    if True:\n        print("Nested block")\n\n# Case sensitive\nvariable = 1\nVariable = 2  # Different from variable\n\n# No semicolons needed\nprint("Hello")\nprint("World")\n\n# Multiple statements on one line (not recommended)\nx = 1; y = 2; print(x, y)\n\n# Line continuation with backslash\nlong_variable_name = some_very_long_function_name(\n    argument1, argument2, argument3\n)',
        },
      ],
    },
    {
      title: 'Variables and Data Types',
      commands: [
        {
          command: 'Basic Data Types',
          description: 'Numbers, strings, booleans, None',
          usage: 'int, float, str, bool, None',
          example: '# Numbers\ninteger = 42\nfloat_num = 3.14159\nscientific = 1.23e-4\nhex_num = 0xFF\nbinary_num = 0b1010\n\n# Strings\nsingle_quote = \'Hello\'\ndouble_quote = "World"\nmulti_line = """Multi-line\nstring example"""\nraw_string = r"C:\\path\\to\\file"\n\n# Booleans\nis_true = True\nis_false = False\n\n# None (null equivalent)\nno_value = None\n\n# Type checking\nprint(type(integer))  # <class \'int\'>\nprint(isinstance(integer, int))  # True',
        },
        {
          command: 'Type Conversion',
          description: 'Convert between data types',
          usage: 'int(), float(), str(), bool()',
          example: '# String to number\nstr_to_int = int("42")\nstr_to_float = float("3.14")\n\n# Number to string\nnum_to_str = str(42)\nfloat_to_str = str(3.14)\n\n# Boolean conversion\nbool_zero = bool(0)      # False\nbool_empty = bool("")    # False\nbool_nonzero = bool(42)   # True\nbool_str = bool("text")  # True\n\n# Base conversion\ndecimal = 255\nhex_str = hex(decimal)    # \'0xff\'\nbin_str = bin(decimal)    # \'0b11111111\'\noct_str = oct(decimal)    # \'0o377\'\n\n# String to base\nint_from_hex = int("0xFF", 16)  # 255\nint_from_bin = int("1010", 2)   # 10',
        },
        {
          command: 'String Operations',
          description: 'String manipulation and formatting',
          usage: 'Methods, f-strings, slicing',
          example: '# String methods\ntext = "Hello, World!"\nprint(text.upper())        # "HELLO, WORLD!"\nprint(text.lower())        # "hello, world!"\nprint(text.title())        # "Hello, World!"\nprint(text.strip())        # "Hello, World!"\nprint(text.replace("World", "Python"))  # "Hello, Python!"\nprint(text.split(","))     # ["Hello", " World!"]\nprint(",".join(["a", "b", "c"]))  # "a,b,c"\n\n# String slicing\ns = "Python"\nprint(s[0])       # "P"\nprint(s[2:5])     # "tho"\nprint(s[:3])      # "Pyt"\nprint(s[3:])      # "hon"\nprint(s[-1])      # "n"\nprint(s[::-1])    # "nohtyP"\n\n# String formatting (f-strings - Python 3.6+)\nname = "Alice"\nage = 25\nprint(f"{name} is {age} years old")\nprint(f"{name:10} | {age:3d}")\nprint(f"Pi = {3.14159:.2f}")\nprint(f"Binary: {42:b}")\n\n# Other formatting methods\nprint("{}".format("Hello"))\nprint("%s is %d years old" % (name, age))',
        },
        {
          command: 'Type Hints',
          description: 'Add type annotations to code',
          usage: 'variable: type = value',
          example: '# Basic type hints\nname: str = "Alice"\nage: int = 25\nheight: float = 5.8\nis_student: bool = True\n\n# Collection type hints\nfrom typing import List, Dict, Tuple, Optional, Union\n\nnames: List[str] = ["Alice", "Bob"]\nages: Dict[str, int] = {"Alice": 25, "Bob": 30}\ncoordinates: Tuple[float, float] = (1.0, 2.0)\nmaybe_name: Optional[str] = None\nnumber: Union[int, float] = 42\n\n# Function type hints\ndef greet(name: str) -> str:\n    return f"Hello, {name}!"\n\ndef add(a: int, b: int) -> int:\n    return a + b\n\n# Complex type hints\nfrom typing import Callable, Any\n\nprocessor: Callable[[str], int] = len\ndata: List[Dict[str, Any]] = [{"name": "Alice", "age": 25}]',
        },
      ],
    },
    {
      title: 'Control Flow',
      commands: [
        {
          command: 'If Statements',
          description: 'Conditional execution',
          usage: 'if, elif, else',
          example: '# Basic if-elif-else\nage = 18\n\nif age < 13:\n    print("Child")\nelif age < 18:\n    print("Teenager")\nelif age < 65:\n    print("Adult")\nelse:\n    print("Senior")\n\n# Nested conditions\nscore = 85\nif score >= 60:\n    if score >= 90:\n        grade = "A"\n    elif score >= 80:\n        grade = "B"\n    elif score >= 70:\n        grade = "C"\n    else:\n        grade = "D"\nelse:\n    grade = "F"\n\n# Multiple conditions\nusername = "admin"\npassword = "secret"\nif username == "admin" and password == "secret":\n    print("Access granted")\nelif username == "admin" or password == "secret":\n    print("Partial access")\nelse:\n    print("Access denied")',
        },
        {
          command: 'Ternary Operator',
          description: 'Conditional expression in one line',
          usage: 'value_if_true if condition else value_if_false',
          example: '# Basic ternary\nage = 18\nstatus = "Adult" if age >= 18 else "Minor"\nprint(status)\n\n# Nested ternary\nscore = 75\ngrade = "A" if score >= 90 else "B" if score >= 80 else "C"\nprint(grade)\n\n# Ternary with function calls\nresult = len("hello") if isinstance("hello", str) else 0\n\n# Ternary in list comprehension\nnumbers = [1, 2, 3, 4, 5]\neven_odd = ["even" if x % 2 == 0 else "odd" for x in numbers]\nprint(even_odd)  # ["odd", "even", "odd", "even", "odd"]',
        },
        {
          command: 'For Loops',
          description: 'Iterate over sequences',
          usage: 'for item in iterable:',
          example: '# Basic for loop\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\n# Loop with step\nfor i in range(0, 10, 2):\n    print(i)  # 0, 2, 4, 6, 8\n\n# Loop over list\nfruits = ["apple", "banana", "orange"]\nfor fruit in fruits:\n    print(fruit)\n\n# Loop with enumerate\nfor index, fruit in enumerate(fruits):\n    print(f"{index}: {fruit}")\n\n# Loop over dictionary\nperson = {"name": "Alice", "age": 25, "city": "NYC"}\nfor key in person:\n    print(key, person[key])\n\nfor key, value in person.items():\n    print(f"{key}: {value}")\n\n# Loop over multiple sequences\nnames = ["Alice", "Bob", "Charlie"]\nages = [25, 30, 35]\nfor name, age in zip(names, ages):\n    print(f"{name} is {age} years old")',
        },
        {
          command: 'While Loops',
          description: 'Loop while condition is true',
          usage: 'while condition:',
          example: '# Basic while loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\n# While with break\nwhile True:\n    user_input = input("Enter \'quit\' to exit: ")\n    if user_input == "quit":\n        break\n    print(f"You entered: {user_input}")\n\n# While with continue\ni = 0\nwhile i < 10:\n    i += 1\n    if i % 2 == 0:\n        continue\n    print(i)  # Only odd numbers\n\n# While-else (executes if loop completes normally)\ni = 0\nwhile i < 3:\n    print(i)\n    i += 1\nelse:\n    print("Loop completed normally")',
        },
        {
          command: 'Loop Control',
          description: 'Break, continue, pass statements',
          usage: 'break, continue, pass',
          example: '# Break - exit loop\nnumbers = [1, 2, 3, 4, 5]\nfor num in numbers:\n    if num == 3:\n        break\n    print(num)  # 1, 2\n\n# Continue - skip iteration\nfor num in numbers:\n    if num == 3:\n        continue\n    print(num)  # 1, 2, 4, 5\n\n# Pass - do nothing (placeholder)\nfor num in numbers:\n    if num == 3:\n        pass  # Placeholder for future code\n    print(num)\n\n# Pass in empty functions/classes\ndef empty_function():\n    pass\n\nclass EmptyClass:\n    pass\n\n# Loop with else clause\nfor i in range(3):\n    print(i)\nelse:\n    print("Loop finished without break")',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Data Structures',
      commands: [
        {
          command: 'Lists',
          description: 'Ordered, mutable collections',
          usage: '[item1, item2, item3]',
          example: '# Create lists\nempty_list = []\nnumbers = [1, 2, 3, 4, 5]\nmixed = [1, "hello", 3.14, True]\n\n# List operations\nnumbers.append(6)        # Add to end\nnumbers.insert(0, 0)     # Insert at index\nnumbers.extend([7, 8])   # Extend with list\nnumbers.remove(3)        # Remove first occurrence\npopped = numbers.pop()    # Remove and return last\nnumbers.clear()          # Remove all items\n\n# List methods\nnumbers = [3, 1, 4, 1, 5, 9, 2, 6]\nnumbers.sort()           # Sort in place\nnumbers.reverse()        # Reverse in place\nnumbers.count(1)         # Count occurrences\nnumbers.index(4)         # Find index\n\n# List slicing\nnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint(numbers[2:5])      # [2, 3, 4]\nprint(numbers[:3])       # [0, 1, 2]\nprint(numbers[7:])       # [7, 8, 9]\nprint(numbers[::2])      # [0, 2, 4, 6, 8]\nprint(numbers[::-1])     # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]\n\n# List comprehensions\nsquares = [x**2 for x in range(10)]\nevens = [x for x in range(20) if x % 2 == 0]\nwords = ["hello", "world", "python"]\ncapitalized = [word.upper() for word in words]\n\n# Nested list comprehension\nmatrix = [[i*j for j in range(3)] for i in range(3)]\n# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]',
        },
        {
          command: 'Tuples',
          description: 'Ordered, immutable collections',
          usage: '(item1, item2, item3)',
          example: '# Create tuples\nempty_tuple = ()\nsingle = (1,)  # Note comma!\nmultiple = (1, 2, 3)\nwithout_parens = 1, 2, 3  # Also creates tuple\n\n# Tuple operations\npoint = (3, 4)\nx, y = point  # Tuple unpacking\nprint(f"x: {x}, y: {y}")\n\n# Nested tuples\nnested = ((1, 2), (3, 4), (5, 6))\nfor a, b in nested:\n    print(f"a: {a}, b: {b}")\n\n# Tuple methods\nnumbers = (1, 2, 3, 2, 4)\nprint(numbers.count(2))    # 2\nprint(numbers.index(3))    # 2\n\n# Named tuples (from collections module)\nfrom collections import namedtuple\n\nPoint = namedtuple(\'Point\', [\'x\', \'y\'])\np = Point(3, 4)\nprint(p.x, p.y)  # 3 4\n\n# Convert to/from list\nmy_list = [1, 2, 3]\nmy_tuple = tuple(my_list)\nback_to_list = list(my_tuple)',
        },
        {
          command: 'Dictionaries',
          description: 'Key-value pairs',
          usage: '{key1: value1, key2: value2}',
          example: '# Create dictionaries\nempty_dict = {}\nperson = {"name": "Alice", "age": 25, "city": "NYC"}\n\n# Dictionary operations\nperson["email"] = "alice@example.com"  # Add key\nperson["age"] = 26                     # Update value\ndel person["city"]                     # Remove key\n\n# Dictionary methods\nkeys = person.keys()\nvalues = person.values()\nitems = person.items()\n\n# Safe access\nname = person.get("name", "Unknown")\nage = person.get("age", 0)\n\n# Check existence\nif "name" in person:\n    print(f"Name: {person[\'name\']}")\n\n# Dictionary comprehension\nsquares = {x: x**2 for x in range(5)}\n# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\n\n# Filter dictionary\nfiltered = {k: v for k, v in person.items() if isinstance(v, str)}\n\n# Merge dictionaries (Python 3.9+)\ndict1 = {"a": 1, "b": 2}\ndict2 = {"c": 3, "d": 4}\nmerged = dict1 | dict2  # {"a": 1, "b": 2, "c": 3, "d": 4}\n\n# Update with | operator\ndict1 |= {"e": 5}  # dict1 is now {"a": 1, "b": 2, "e": 5}',
        },
        {
          command: 'Sets',
          description: 'Unordered collections of unique items',
          usage: '{item1, item2, item3}',
          example: '# Create sets\nempty_set = set()\nnumbers = {1, 2, 3, 4, 5}\nwith_duplicates = {1, 2, 2, 3, 3, 3}  # {1, 2, 3}\n\n# Set operations\nnumbers.add(6)        # Add item\nnumbers.remove(3)     # Remove item (raises error if not found)\nnumbers.discard(10)   # Remove item (no error if not found)\n\n# Set operations\nset1 = {1, 2, 3, 4}\nset2 = {3, 4, 5, 6}\n\nunion = set1 | set2          # {1, 2, 3, 4, 5, 6}\nintersection = set1 & set2   # {3, 4}\ndifference = set1 - set2     # {1, 2}\nsymmetric_diff = set1 ^ set2 # {1, 2, 5, 6}\n\n# Set methods\nset1.union(set2)\nset1.intersection(set2)\nset1.difference(set2)\nset1.symmetric_difference(set2)\n\n# Set comprehension\nsquares = {x**2 for x in range(5)}  # {0, 1, 4, 9, 16}\nevens = {x for x in range(10) if x % 2 == 0}  # {0, 2, 4, 6, 8}\n\n# Frozen set (immutable)\nfrozen = frozenset([1, 2, 3])',
        },
        {
          command: 'Advanced Data Structures',
          description: 'Collections module and custom structures',
          usage: 'deque, Counter, defaultdict, OrderedDict',
          example: 'from collections import deque, Counter, defaultdict, OrderedDict\n\n# Deque - double-ended queue\ndq = deque([1, 2, 3])\ndq.append(4)        # Add to right\ndq.appendleft(0)    # Add to left\ndq.pop()            # Remove from right\ndq.popleft()        # Remove from left\n\n# Counter - count hashable objects\nwords = ["apple", "banana", "apple", "orange", "banana", "apple"]\ncounts = Counter(words)\n# Counter({\'apple\': 3, \'banana\': 2, \'orange\': 1})\n\nprint(counts.most_common(2))  # [(\'apple\', 3), (\'banana\', 2)]\n\n# Defaultdict - dictionary with default values\nd = defaultdict(int)\nd["key1"] += 1  # Works even if key doesn\'t exist\n\n# Defaultdict with list\nfrom collections import defaultdict\n\nword_groups = defaultdict(list)\nwords = ["apple", "ant", "banana", "bat"]\nfor word in words:\n    word_groups[word[0]].append(word)\n\n# OrderedDict - remembers insertion order (Python 3.7+ dicts preserve order)\nfrom collections import OrderedDict\n\nordered = OrderedDict()\nordered["first"] = 1\nordered["second"] = 2\nordered["third"] = 3\n\n# ChainMap - search multiple dictionaries\nfrom collections import ChainMap\n\ndict1 = {"a": 1, "b": 2}\ndict2 = {"b": 3, "c": 4}\nchain = ChainMap(dict1, dict2)\nprint(chain["b"])  # 2 (from dict1)\nprint(chain["c"])  # 4 (from dict2)',
        },
      ],
    },
    {
      title: 'Functions',
      commands: [
        {
          command: 'Function Definition',
          description: 'Define and call functions',
          usage: 'def function_name(parameters):',
          example: '# Basic function\ndef greet(name):\n    return f"Hello, {name}!"\n\n# Function with default parameters\ndef greet_with_title(name, title="Mr."):\n    return f"Hello, {title} {name}!"\n\n# Function with multiple parameters\ndef create_profile(name, age, city="Unknown"):\n    return {"name": name, "age": age, "city": city}\n\n# Function with variable arguments\ndef sum_all(*numbers):\n    return sum(numbers)\n\n# Function with keyword arguments\ndef create_person(**kwargs):\n    return kwargs\n\n# Mixed arguments\ndef complex_function(a, b, *args, c=10, **kwargs):\n    return f"a: {a}, b: {b}, args: {args}, c: {c}, kwargs: {kwargs}"\n\n# Call functions\nprint(greet("Alice"))\nprint(greet_with_title("Smith"))\nprint(greet_with_title("Johnson", "Dr."))\nprint(sum_all(1, 2, 3, 4, 5))\nprint(create_person(name="Alice", age=25, city="NYC"))',
        },
        {
          command: 'Lambda Functions',
          description: 'Anonymous functions',
          usage: 'lambda parameters: expression',
          example: '# Basic lambda\nsquare = lambda x: x**2\nprint(square(5))  # 25\n\n# Lambda with multiple parameters\nadd = lambda x, y: x + y\nprint(add(3, 4))  # 7\n\n# Lambda in built-in functions\nnumbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nevens = list(filter(lambda x: x % 2 == 0, numbers))\n\n# Lambda in sorting\npeople = [\n    {"name": "Alice", "age": 25},\n    {"name": "Bob", "age": 30},\n    {"name": "Charlie", "age": 20}\n]\n\n# Sort by age\nsorted_by_age = sorted(people, key=lambda person: person["age"])\n\n# Sort by name length\nsorted_by_name_length = sorted(people, key=lambda p: len(p["name"]))\n\n# Lambda with conditional\ncategorize = lambda age: "Adult" if age >= 18 else "Minor"\nprint(categorize(25))  # "Adult"',
        },
        {
          command: 'Function Decorators',
          description: 'Modify function behavior',
          usage: '@decorator',
          example: '# Basic decorator\ndef uppercase_decorator(func):\n    def wrapper():\n        result = func()\n        return result.upper()\n    return wrapper\n\n@uppercase_decorator\ndef greet():\n    return "hello world"\n\nprint(greet())  # "HELLO WORLD"\n\n# Decorator with parameters\ndef repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            result = func(*args, **kwargs)\n            return result * times\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef echo(text):\n    return text\n\nprint(echo("hi"))  # "hihihi"\n\n# Decorator with arguments\ndef timer(func):\n    import time\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"{func.__name__} took {end - start:.4f} seconds")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    import time\n    time.sleep(1)\n    return "Done"',
        },
        {
          command: 'Advanced Function Features',
          description: 'Closures, generators, and function attributes',
          usage: 'yield, __closure__, function.__dict__',
          example: '# Closure - function that remembers environment\ndef make_multiplier(factor):\n    def multiplier(number):\n        return number * factor\n    return multiplier\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\n\nprint(double(5))   # 10\nprint(triple(5))   # 15\n\n# Generator function\ndef count_up_to(max):\n    count = 1\n    while count <= max:\n        yield count\n        count += 1\n\nfor number in count_up_to(5):\n    print(number)  # 1, 2, 3, 4, 5\n\n# Generator expression\nsquares = (x**2 for x in range(5))\nfor square in squares:\n    print(square)\n\n# Function attributes\ndef my_function():\n    """This is my function"""\n    pass\n\nmy_function.version = "1.0"\nmy_function.author = "Alice"\n\nprint(my_function.__doc__)     # "This is my function"\nprint(my_function.version)     # "1.0"\nprint(my_function.author)      # "Alice"\n\n# Introspection\nimport inspect\nprint(inspect.getsource(my_function))\nprint(inspect.signature(my_function))',
        },
      ],
    },
    {
      title: 'Object-Oriented Programming',
      commands: [
        {
          command: 'Classes and Objects',
          description: 'Define classes and create objects',
          usage: 'class ClassName:',
          example: '# Basic class\nclass Dog:\n    # Class attribute\n    species = "Canis familiaris"\n    \n    # Constructor\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    # Instance method\n    def bark(self):\n        return f"{self.name} says woof!"\n    \n    # Another method\n    def celebrate_birthday(self):\n        self.age += 1\n        return f"Happy {self.age}th birthday, {self.name}!"\n\n# Create objects\ndog1 = Dog("Buddy", 3)\ndog2 = Dog("Lucy", 5)\n\nprint(dog1.name)           # "Buddy"\nprint(dog1.bark())         # "Buddy says woof!"\nprint(dog1.celebrate_birthday())  # "Happy 4th birthday, Buddy!"\nprint(Dog.species)         # "Canis familiaris"',
        },
        {
          command: 'Inheritance',
          description: 'Create classes that inherit from others',
          usage: 'class ChildClass(ParentClass):',
          example: '# Parent class\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        raise NotImplementedError("Subclasses must implement speak()")\n    \n    def eat(self):\n        return f"{self.name} is eating"\n\n# Child class\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)  # Call parent constructor\n        self.breed = breed\n    \n    def speak(self):\n        return f"{self.name} barks"\n    \n    def fetch(self):\n        return f"{self.name} is fetching"\n\n# Another child class\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name} meows"\n\n# Create objects\ndog = Dog("Buddy", "Golden Retriever")\ncat = Cat("Whiskers")\n\nprint(dog.speak())  # "Buddy barks"\nprint(dog.eat())    # "Buddy is eating"\nprint(cat.speak())  # "Whiskers meows"',
        },
        {
          command: 'Special Methods',
          description: 'Magic methods for operator overloading',
          usage: '__str__, __len__, __add__, etc.',
          example: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    # String representation\n    def __str__(self):\n        return f"Vector({self.x}, {self.y})"\n    \n    # Official representation\n    def __repr__(self):\n        return f"Vector({self.x}, {self.y})"\n    \n    # Addition\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    # Equality\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n    \n    # Length\n    def __len__(self):\n        return int((self.x**2 + self.y**2)**0.5)\n    \n    # Indexing\n    def __getitem__(self, index):\n        if index == 0:\n            return self.x\n        elif index == 1:\n            return self.y\n        else:\n            raise IndexError("Index out of range")\n\n# Usage\nv1 = Vector(3, 4)\nv2 = Vector(1, 2)\nprint(v1)              # "Vector(3, 4)"\nprint(v1 + v2)         # "Vector(4, 6)"\nprint(v1 == Vector(3, 4))  # True\nprint(len(v1))         # 5\nprint(v1[0], v1[1])   # 3 4',
        },
        {
          command: 'Properties and Class Methods',
          description: 'Controlled access to attributes',
          usage: '@property, @classmethod, @staticmethod',
          example: 'class Person:\n    def __init__(self, name, age):\n        self._name = name  # Private by convention\n        self._age = age\n    \n    # Property for controlled access\n    @property\n    def name(self):\n        return self._name.title()\n    \n    @name.setter\n    def name(self, value):\n        if not value:\n            raise ValueError("Name cannot be empty")\n        self._name = value\n    \n    @property\n    def age(self):\n        return self._age\n    \n    @age.setter\n    def age(self, value):\n        if value < 0:\n            raise ValueError("Age cannot be negative")\n        self._age = value\n    \n    # Read-only property\n    @property\n    def is_adult(self):\n        return self._age >= 18\n    \n    # Class method\n    @classmethod\n    def from_birth_year(cls, name, birth_year):\n        from datetime import datetime\n        age = datetime.now().year - birth_year\n        return cls(name, age)\n    \n    # Static method\n    @staticmethod\n    def get_species():\n        return "Homo sapiens"\n\n# Usage\nperson = Person("alice smith", 25)\nprint(person.name)      # "Alice Smith"\nprint(person.is_adult)  # True\n\nperson2 = Person.from_birth_year("Bob", 1995)\nprint(Person.get_species())  # "Homo sapiens"',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Advanced Python Features',
      commands: [
        {
          command: 'Error Handling',
          description: 'Exception handling and custom exceptions',
          usage: 'try, except, finally, raise',
          example: '# Basic exception handling\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")\nexcept ValueError as e:\n    print(f"Value error: {e}")\nelse:\n    print("No errors occurred")\nfinally:\n    print("This always runs")\n\n# Multiple exceptions\ntry:\n    number = int(input("Enter a number: "))\n    result = 10 / number\nexcept (ValueError, ZeroDivisionError):\n    print("Invalid input or division by zero")\nexcept Exception as e:\n    print(f"Unexpected error: {e}")\n\n# Custom exception\nclass CustomError(Exception):\n    def __init__(self, message, code):\n        super().__init__(message)\n        self.code = code\n\ndef validate_age(age):\n    if age < 0:\n        raise CustomError("Age cannot be negative", 100)\n    if age > 150:\n        raise CustomError("Age seems unrealistic", 101)\n\ntry:\n    validate_age(-5)\nexcept CustomError as e:\n    print(f"Error {e.code}: {e}")\n\n# Context manager (with statement)\nwith open("file.txt", "r") as file:\n    content = file.read()\n    # File automatically closed\n\n# Creating custom context manager\nclass Timer:\n    def __enter__(self):\n        import time\n        self.start = time.time()\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        import time\n        self.end = time.time()\n        print(f"Elapsed time: {self.end - self.start:.4f}s")\n\nwith Timer():\n    import time\n    time.sleep(1)',
        },
        {
          command: 'File I/O',
          description: 'Reading and writing files',
          usage: 'open(), read(), write(), with statement',
          example: '# Reading files\n# Basic read\nwith open("example.txt", "r") as file:\n    content = file.read()\n\n# Read line by line\nwith open("example.txt", "r") as file:\n    for line in file:\n        print(line.strip())\n\n# Read all lines\nwith open("example.txt", "r") as file:\n    lines = file.readlines()\n\n# Writing files\n# Write (overwrite)\nwith open("output.txt", "w") as file:\n    file.write("Hello, World!\\n")\n    file.write("This is a new line")\n\n# Append\nwith open("output.txt", "a") as file:\n    file.write("\\nAppended line")\n\n# Write multiple lines\nlines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]\nwith open("output.txt", "w") as file:\n    file.writelines(lines)\n\n# File modes\n# "r" - read (default)\n# "w" - write (overwrite)\n# "a" - append\n# "r+" - read and write\n# "b" - binary mode\n# "t" - text mode (default)\n\n# Binary files\nwith open("image.jpg", "rb") as file:\n    image_data = file.read()\n\nwith open("copy.jpg", "wb") as file:\n    file.write(image_data)\n\n# File operations\nimport os\n\n# Check if file exists\nif os.path.exists("example.txt"):\n    print("File exists")\n\n# Get file size\nsize = os.path.getsize("example.txt")\n\n# Delete file\nos.remove("example.txt")\n\n# Rename file\nos.rename("old.txt", "new.txt")',
        },
        {
          command: 'Modules and Packages',
          description: 'Import and organize code',
          usage: 'import, from...import, __init__.py',
          example: '# Importing modules\nimport math\nimport random as rnd\nfrom datetime import datetime, timedelta\nfrom collections import Counter\n\n# Using imports\nprint(math.pi)\nprint(rnd.randint(1, 10))\nprint(datetime.now())\nprint(Counter([1, 2, 2, 3]))\n\n# Import all (not recommended)\n# from math import *\n\n# Import specific functions\nfrom math import sqrt, sin, cos\n\n# Import with alias\nimport numpy as np\nimport pandas as pd\n\n# Creating modules\n# mymodule.py\ndef greet(name):\n    return f"Hello, {name}!"\n\nPI = 3.14159\n\nclass Calculator:\n    def add(self, a, b):\n        return a + b\n\n# Using custom module\nimport mymodule\nprint(mymodule.greet("Alice"))\nprint(mymodule.PI)\n\ncalc = mymodule.Calculator()\nprint(calc.add(5, 3))\n\n# Packages (directories with __init__.py)\n# mypackage/\n#   __init__.py\n#   module1.py\n#   module2.py\n\n# Import from package\nfrom mypackage import module1, module2\nfrom mypackage.module1 import some_function',
        },
        {
          command: 'List Comprehensions',
          description: 'Concise list creation',
          usage: '[expression for item in iterable if condition]',
          example: '# Basic list comprehension\nsquares = [x**2 for x in range(10)]\n# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n\n# With condition\nevens = [x for x in range(20) if x % 2 == 0]\n# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]\n\n# With if-else\nnumbers = [1, 2, 3, 4, 5]\nlabeled = ["even" if x % 2 == 0 else "odd" for x in numbers]\n# ["odd", "even", "odd", "even", "odd"]\n\n# Nested list comprehension\nmatrix = [[i*j for j in range(3)] for i in range(3)]\n# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]\n\n# Flatten nested list\nnested = [[1, 2], [3, 4], [5, 6]]\nflattened = [item for sublist in nested for item in sublist]\n# [1, 2, 3, 4, 5, 6]\n\n# With function calls\nwords = ["hello", "world", "python"]\nlengths = [len(word) for word in words]\n# [5, 5, 6]\n\n# Complex example\npeople = [\n    {"name": "Alice", "age": 25},\n    {"name": "Bob", "age": 30},\n    {"name": "Charlie", "age": 20}\n]\n\n# Get names of people over 25\nadult_names = [person["name"] for person in people if person["age"] > 25]\n# ["Bob"]\n\n# Dictionary and set comprehensions\nsquares_dict = {x: x**2 for x in range(5)}\n# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\n\nsquares_set = {x**2 for x in range(5)}\n# {0, 1, 4, 9, 16}',
        },
      ],
    },
    {
      title: 'Python 3.8+ Features',
      commands: [
        {
          command: 'Walrus Operator (:=)',
          description: 'Assignment expressions (Python 3.8+)',
          usage: 'variable := expression',
          example: '# Basic walrus operator\nif (n := len("hello")) > 3:\n    print(f"Length is {n}")\n\n# In list comprehension\nnumbers = [1, 2, 3, 4, 5]\nprocessed = [y for x in numbers if (y := x * 2) > 4]\n# [6, 8, 10]\n\n# In while loop\nwhile (line := input("Enter text (or \'quit\'): ")) != "quit":\n    print(f"You entered: {line}")\n\n# Multiple assignments\nif (a := 5) > (b := 3):\n    print(f"{a} > {b}")\n\n# Practical example\nimport re\n\npattern = r"\\d+"\ntext = "I have 2 apples and 5 bananas"\n\n# Without walrus operator\nmatches = re.findall(pattern, text)\nif matches:\n    numbers = [int(m) for m in matches]\n    print(f"Found numbers: {numbers}")\n\n# With walrus operator\nif (matches := re.findall(pattern, text)):\n    numbers = [int(m) for m in matches]\n    print(f"Found numbers: {numbers}")',
        },
        {
          command: 'Positional-Only Parameters',
          description: 'Force positional parameters (Python 3.8+)',
          usage: 'def func(a, b, /, c, d):',
          example: '# Positional-only parameters\ndef func(a, b, /, c, d):\n    print(f"a: {a}, b: {b}, c: {c}, d: {d}")\n\n# Valid calls\nfunc(1, 2, 3, 4)        # Positional only\nfunc(1, 2, c=3, d=4)    # Mixed\nfunc(1, 2, 3, d=4)      # Mixed\n\n# Invalid calls\n# func(a=1, b=2, c=3, d=4)  # Error: a and b must be positional\n\n# Positional-only with keyword-only\ndef complex_func(a, b, /, c, *, d):\n    print(f"a: {a}, b: {b}, c: {c}, d: {d}")\n\n# Valid calls\ncomplex_func(1, 2, 3, d=4)\n\n# Invalid calls\n# complex_func(1, 2, c=3, d=4)  # Error: d must be keyword\n# complex_func(1, 2, 3, 4)     # Error: d must be keyword\n\n# Built-in functions with positional-only\n# pow(base, exp, /, mod=None)\nprint(pow(2, 3))        # 8\nprint(pow(2, 3, 5))     # 3\n# pow(base=2, exp=3)    # Error',
        },
        {
          command: 'f-string Debugging',
          description: 'Debug expressions in f-strings (Python 3.8+)',
          usage: 'f"{expr=}"',
          example: '# Basic f-string debugging\nx = 42\ny = 3.14\nprint(f"{x=}")        # "x=42"\nprint(f"{y=}")        # "y=3.14"\n\n# With expressions\nprint(f"{2+2=}")       # "2+2=4"\nprint(f"{len(\'hello\')=}")  # "len(\'hello\')=5"\n\n# With formatting\nvalue = 3.14159\nprint(f"{value=: .2f}")  # "value= 3.14"\n\n# Multiple variables\nname = "Alice"\nage = 25\nprint(f"{name=}, {age=}")  # "name=\'Alice\', age=25"\n\n# Complex expressions\ndef calculate(a, b):\n    return a * b + a\n\nresult = calculate(5, 3)\nprint(f"{calculate(5, 3)=}")  # "calculate(5, 3)=20"\nprint(f"{result=}")          # "result=20"\n\n# In debugging\nimport math\nradius = 5\narea = math.pi * radius ** 2\nprint(f"{radius=}, {area=:.2f}")  # "radius=5, area=78.54"',
        },
      ],
    },
    {
      title: 'Python 3.9+ Features',
      commands: [
        {
          command: 'Dictionary Merge Operators',
          description: 'Merge dictionaries with | and |= (Python 3.9+)',
          usage: 'dict1 | dict2, dict1 |= dict2',
          example: '# Dictionary merge\ndict1 = {"a": 1, "b": 2}\ndict2 = {"c": 3, "d": 4}\n\n# Merge with |\nmerged = dict1 | dict2\nprint(merged)  # {"a": 1, "b": 2, "c": 3, "d": 4}\n\n# Original dictionaries unchanged\nprint(dict1)  # {"a": 1, "b": 2}\nprint(dict2)  # {"c": 3, "d": 4}\n\n# Update with |=\ndict1 |= {"e": 5, "f": 6}\nprint(dict1)  # {"a": 1, "b": 2, "e": 5, "f": 6}\n\n# Overwrite existing keys\ndict1 = {"a": 1, "b": 2}\ndict2 = {"b": 3, "c": 4}\nmerged = dict1 | dict2\nprint(merged)  # {"a": 1, "b": 3, "c": 4}\n\n# Multiple merges\ndict1 = {"a": 1}\ndict2 = {"b": 2}\ndict3 = {"c": 3}\nmerged = dict1 | dict2 | dict3\nprint(merged)  # {"a": 1, "b": 2, "c": 3}\n\n# In function\ndef merge_configs(*configs):\n    result = {}\n    for config in configs:\n        result |= config\n    return result\n\nconfig1 = {"debug": True}\nconfig2 = {"port": 8080}\nconfig3 = {"host": "localhost"}\nfinal_config = merge_configs(config1, config2, config3)',
        },
        {
          command: 'Type Hinting Improvements',
          description: 'Enhanced type hints (Python 3.9+)',
          usage: 'dict[str, int], list[str], tuple[str, ...]',
          example: '# Python 3.9+ type hints (no need to import from typing)\nfrom typing import Optional, Union\n\n# Basic collections\nnames: list[str] = ["Alice", "Bob", "Charlie"]\nages: dict[str, int] = {"Alice": 25, "Bob": 30}\ncoordinates: tuple[float, float] = (1.0, 2.0)\n\n# Complex types\nmatrix: list[list[int]] = [[1, 2], [3, 4]]\ndata: dict[str, list[int]] = {"scores": [1, 2, 3], "values": [4, 5, 6]}\n\n# Optional and Union still from typing\nmaybe_name: Optional[str] = None\nnumber: Union[int, float] = 42\n\n# Function signatures\ndef process_data(items: list[str]) -> dict[str, int]:\n    return {item: len(item) for item in items}\n\n# Generic types\ndef first_element(seq: list[T]) -> Optional[T]:\n    return seq[0] if seq else None\n\n# Type aliases\nUserID = int\nUserName = str\nUserInfo = dict[str, Union[str, int]]\n\ndef get_user(user_id: UserID) -> UserInfo:\n    return {"id": user_id, "name": "User"}\n\n# Inheritance with type hints\nclass Animal:\n    name: str\n    \n    def __init__(self, name: str):\n        self.name = name\n\nclass Dog(Animal):\n    breed: str\n    \n    def __init__(self, name: str, breed: str):\n        super().__init__(name)\n        self.breed = breed',
        },
        {
          command: 'String Methods',
          description: 'New string methods (Python 3.9+)',
          usage: 'removeprefix(), removesuffix()',
          example: '# Remove prefix\nfilename = "test_file.txt"\nno_prefix = filename.removeprefix("test_")\nprint(no_prefix)  # "file.txt"\n\n# Remove suffix\nfilename = "document.pdf"\nno_suffix = filename.removesuffix(".pdf")\nprint(no_suffix)  # "document"\n\n# Chain operations\nfull_path = "/home/user/documents/file.txt"\nno_prefix = full_path.removeprefix("/home/user/")\nno_suffix = no_prefix.removesuffix(".txt")\nprint(no_suffix)  # "documents/file"\n\n# Safe operations (no error if prefix/suffix not found)\ntext = "hello world"\nprint(text.removeprefix("test_"))  # "hello world" (unchanged)\nprint(text.removesuffix(".txt"))   # "hello world" (unchanged)\n\n# Practical usage\ndef clean_filename(filename: str) -> str:\n    # Remove common prefixes and suffixes\n    cleaned = filename.removeprefix("temp_")\n    cleaned = cleaned.removesuffix("_backup")\n    cleaned = cleaned.removesuffix(".tmp")\n    return cleaned\n\nprint(clean_filename("temp_document_backup.tmp"))  # "document"',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Python 3.10+ Features',
      commands: [
        {
          command: 'Structural Pattern Matching',
          description: 'Match statements (Python 3.10+)',
          usage: 'match value: case pattern:',
          example: '# Basic pattern matching\ndef process_command(command):\n    match command:\n        case "start":\n            print("Starting...")\n        case "stop" | "exit" | "quit":\n            print("Stopping...")\n        case _:\n            print("Unknown command")\n\n# Pattern matching with values\ndef describe_number(num):\n    match num:\n        case 0:\n            return "Zero"\n        case 1:\n            return "One"\n        case 2 | 3 | 5 | 7 | 11:\n            return "Small prime"\n        case _:\n            return "Other number"\n\n# Pattern matching with sequences\ndef process_sequence(seq):\n    match seq:\n        case []:\n            return "Empty sequence"\n        case [x]:\n            return f"Single element: {x}"\n        case [x, y]:\n            return f"Two elements: {x}, {y}"\n        case [x, y, *rest]:\n            return f"First two: {x}, {y}, rest: {rest}"\n\n# Pattern matching with dictionaries\ndef process_person(person):\n    match person:\n        case {"name": name, "age": age}:\n            return f"{name} is {age} years old"\n        case {"name": name}:\n            return f"{name} (age unknown)"\n        case {}:\n            return "Empty dictionary"\n\n# Pattern matching with guards\ndef classify_point(point):\n    match point:\n        case (x, y) if x == y:\n            return f"Point on diagonal: ({x}, {y})"\n        case (x, y) if x > 0 and y > 0:\n            return f"Point in first quadrant: ({x}, {y})"\n        case (x, y):\n            return f"Point: ({x}, {y})"\n\n# Pattern matching with classes\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\ndef match_point(point):\n    match point:\n        case Point(x=0, y=0):\n            return "Origin"\n        case Point(x=x, y=y) if x == y:\n            return f"Diagonal point: ({x}, {y})"\n        case Point(x, y):\n            return f"Regular point: ({x}, {y})"',
        },
        {
          command: 'Improved Error Messages',
          description: 'Better error messages (Python 3.10+)',
          usage: 'More precise error locations',
          example: '# Python 3.10+ provides more precise error messages\n\n# Before Python 3.10:\n# TypeError: can only concatenate str (not "int") to str\n\n# Python 3.10+:\n# TypeError: can only concatenate str (not "int") to str\n\n# Example that shows improved error\ntry:\n    result = "hello" + 42\nexcept TypeError as e:\n    print(f"Error: {e}")\n\n# Better attribute error messages\nclass Person:\n    def __init__(self, name):\n        self.name = name\n\nperson = Person("Alice")\n\ntry:\n    print(person.age)  # AttributeError with better message\nexcept AttributeError as e:\n    print(f"Error: {e}")\n\n# Improved KeyError messages\nmy_dict = {"a": 1, "b": 2}\n\ntry:\n    value = my_dict["c"]  # KeyError with better message\nexcept KeyError as e:\n    print(f"Error: {e}")\n\n# Better import error messages\ntry:\n    import nonexistent_module\nexcept ImportError as e:\n    print(f"Error: {e}")',
        },
        {
          command: 'Precise Type Hints',
          description: 'X | Y syntax for Union types (Python 3.10+)',
          usage: 'int | str instead of Union[int, str]',
          example: '# Python 3.10+ union syntax\n\n# Instead of Union[int, str]\ndef process(value: int | str) -> str:\n    if isinstance(value, int):\n        return f"Integer: {value}"\n    else:\n        return f"String: {value}"\n\n# Multiple types\ndef handle_data(data: int | float | str) -> str:\n    match data:\n        case int() | float():\n            return f"Number: {data}"\n        case str():\n            return f"Text: {data}"\n\n# Optional with new syntax\nmaybe_value: int | None = None\n\n# Complex type hints\nfrom typing import List\n\nnumbers: List[int | str] = [1, 2, "three", "four"]\n\n# Function return types\ndef get_value() -> int | str:\n    return "value"\n\n# Class attributes\nclass Container:\n    value: int | str\n    \n    def __init__(self, value: int | str):\n        self.value = value\n\n# Type aliases\nNumber = int | float\nText = str\nJSONValue = int | float | str | bool | None | dict | list\n\ndef process_json(data: JSONValue) -> str:\n    return str(type(data))\n\n# Generic types with new syntax\nfrom typing import TypeVar, Generic\n\nT = TypeVar(\'T\')\n\nclass Container(Generic[T]):\n    def __init__(self, value: T | None = None):\n        self.value = value',
        },
      ],
    },
    {
      title: 'Python 3.11+ Features',
      commands: [
        {
          command: 'Exception Groups',
          description: 'Handle multiple exceptions (Python 3.11+)',
          usage: 'except* ExceptionGroup',
          example: '# Exception groups\nimport sys\n\n# Create exception group\nerrors = [ValueError("Invalid value"), TypeError("Wrong type")]\nexception_group = ExceptionGroup("Multiple errors", errors)\n\n# Handle exception groups\ntry:\n    # Code that might raise exception group\n    raise exception_group\nexcept* ValueError as e:\n    print(f"Value errors: {e.exceptions}")\nexcept* TypeError as e:\n    print(f"Type errors: {e.exceptions}")\n\n# Create exception group manually\ndef validate_data(data):\n    errors = []\n    \n    if not isinstance(data, dict):\n        errors.append(TypeError("Data must be a dictionary"))\n    \n    if isinstance(data, dict):\n        if "name" not in data:\n            errors.append(ValueError("Missing name field"))\n        if "age" in data and not isinstance(data["age"], int):\n            errors.append(ValueError("Age must be an integer"))\n    \n    if errors:\n        raise ExceptionGroup("Validation errors", errors)\n\n# Usage\ntry:\n    validate_data({"age": "twenty"})\nexcept* ValueError as e:\n    print(f"Validation failed: {e.exceptions}")\nexcept* TypeError as e:\n    print(f"Type error: {e.exceptions}")\n\n# except* with multiple types\ntry:\n    validate_data({"not": "valid"})\nexcept* (ValueError, TypeError) as e:\n    print(f"Multiple errors: {e.exceptions}")',
        },
        {
          command: 'Enhanced f-strings',
          description: 'Self-documenting expressions and speed improvements (Python 3.12+)',
          usage: 'f"{expr=}" improvements',
          example: '# Python 3.12+ enhanced f-strings\n\n# Faster f-string evaluation\nname = "Alice"\nage = 25\n\n# Self-documenting (improved)\nprint(f"{name=}, {age=}")  # "name=\'Alice\', age=25"\n\n# Complex expressions\ndef calculate(x, y):\n    return x * y + x\n\nresult = calculate(5, 3)\nprint(f"{calculate(5, 3)=}")  # "calculate(5, 3)=20"\n\n# Debugging with formatting\nvalue = 3.14159\nprint(f"{value=: .2f}")  # "value= 3.14"\n\n# Performance improvements\n# Python 3.12+ f-strings are significantly faster\n# No need to use .format() or % formatting\n\n# Better error messages in f-strings\ntry:\n    # This will show better error location in Python 3.12+\n    print(f"{undefined_var}")\nexcept NameError as e:\n    print(f"Error: {e}")\n\n# Complex debugging\nimport math\nradius = 5\narea = math.pi * radius ** 2\ncircumference = 2 * math.pi * radius\n\nprint(f"{radius=}, {area=:.2f}, {circumference=:.2f}")\n# "radius=5, area=78.54, circumference=31.42"',
        },
        {
          command: 'Type Parameter Defaults',
          description: 'Default type parameters (Python 3.12+)',
          usage: 'def func[T: int = int](x: T) -> T:',
          example: '# Python 3.12+ type parameter defaults\nfrom typing import Generic, TypeVar\n\n# Basic type parameter with default\ndef process[T: int = int](value: T) -> T:\n    return value\n\n# Use default type\nresult1 = process(42)  # T defaults to int\n\n# Specify type explicitly\nresult2 = process[str]("hello")  # T is str\n\n# Multiple type parameters with defaults\ndef combine[T: int = int, U: str = str](x: T, y: U) -> str:\n    return f"{x}{y}"\n\n# Generic class with type parameter defaults\nclass Container[T: int = int]:\n    def __init__(self, value: T):\n        self.value = value\n    \n    def get_value(self) -> T:\n        return self.value\n\n# Usage\nint_container = Container(42)  # T defaults to int\nstr_container = Container[str]("hello")  # T is str\n\n# Complex type parameter constraints\nfrom collections.abc import Sequence\n\ndef process_sequence[T: Sequence[int] = list[int]](seq: T) -> int:\n    return len(seq)\n\n# Type parameter with multiple bounds\ndef process_number[T: int | float = int](value: T) -> T:\n    return value * 2\n\n# Practical usage\ndef create_list[T: int = int](size: int, default: T) -> list[T]:\n    return [default] * size\n\nnumbers = create_list(5, 0)  # list[int]\nstrings = create_list[str](3, "default")  # list[str]',
        },
      ],
    },
    {
      title: 'Advanced Python Topics',
      commands: [
        {
          command: 'Metaclasses',
          description: 'Classes that create classes',
          usage: 'class Meta(type):',
          example: '# Basic metaclass\nclass SingletonMeta(type):\n    _instances = {}\n    \n    def __call__(cls, *args, **kwargs):\n        if cls not in cls._instances:\n            instance = super().__call__(*args, **kwargs)\n            cls._instances[cls] = instance\n        return cls._instances[cls]\n\n# Singleton pattern with metaclass\nclass Singleton(metaclass=SingletonMeta):\n    def __init__(self):\n        self.value = 0\n\ns1 = Singleton()\ns2 = Singleton()\nprint(s1 is s2)  # True\n\n# Metaclass for validation\nclass ValidateAttributes(type):\n    def __new__(cls, name, bases, namespace):\n        # Add validation to all methods\n        for key, value in namespace.items():\n            if callable(value):\n                namespace[key] = cls.add_validation(value)\n        return super().__new__(cls, name, bases, namespace)\n    \n    @staticmethod\n    def add_validation(func):\n        def wrapper(*args, **kwargs):\n            print(f"Validating call to {func.__name__}")\n            return func(*args, **kwargs)\n        return wrapper\n\nclass Person(metaclass=ValidateAttributes):\n    def __init__(self, name):\n        self.name = name\n    \n    def greet(self):\n        return f"Hello, {self.name}"\n\nperson = Person("Alice")\nperson.greet()  # Will show validation message',
        },
        {
          command: 'Descriptors',
          description: 'Objects that manage attribute access',
          usage: '__get__, __set__, __delete__',
          example: '# Basic descriptor\nclass LoggedAttribute:\n    def __init__(self, initial_value=None):\n        self.value = initial_value\n        self.name = None\n    \n    def __set_name__(self, owner, name):\n        self.name = name\n    \n    def __get__(self, obj, objtype=None):\n        if obj is None:\n            return self\n        print(f"Getting {self.name}: {self.value}")\n        return self.value\n    \n    def __set__(self, obj, value):\n        print(f"Setting {self.name} from {self.value} to {value}")\n        self.value = value\n\nclass Person:\n    name = LoggedAttribute()\n    age = LoggedAttribute(0)\n\nperson = Person()\nperson.name = "Alice"  # Logs the set\nprint(person.name)   # Logs the get\n\n# Read-only descriptor\nclass ReadOnly:\n    def __init__(self, value):\n        self.value = value\n    \n    def __get__(self, obj, objtype=None):\n        return self.value\n    \n    def __set__(self, obj, value):\n        raise AttributeError("Read-only attribute")\n\nclass Config:\n    VERSION = ReadOnly("1.0.0")\n    DEBUG = ReadOnly(False)\n\nconfig = Config()\nprint(config.VERSION)  # "1.0.0"\n# config.VERSION = "2.0.0"  # Raises AttributeError',
        },
        {
          command: 'Async Programming',
          description: 'Asynchronous programming with asyncio',
          usage: 'async, await, asyncio',
          example: 'import asyncio\nimport aiohttp  # pip install aiohttp\n\n# Basic async function\nasync def fetch_data(url):\n    await asyncio.sleep(1)  # Simulate network delay\n    return f"Data from {url}"\n\n# Run async function\nasync def main():\n    result = await fetch_data("https://api.example.com")\n    print(result)\n\n# Run the async main\nasyncio.run(main())\n\n# Concurrent execution\nasync def fetch_multiple(urls):\n    tasks = [fetch_data(url) for url in urls]\n    results = await asyncio.gather(*tasks)\n    return results\n\n# Async context manager\nclass AsyncTimer:\n    async def __aenter__(self):\n        self.start = asyncio.get_event_loop().time()\n        return self\n    \n    async def __aexit__(self, exc_type, exc_val, exc_tb):\n        end = asyncio.get_event_loop().time()\n        print(f"Elapsed: {end - self.start:.2f}s")\n\nasync def timed_operation():\n    async with AsyncTimer():\n        await asyncio.sleep(2)\n\n# Async generator\nasync def async_counter(limit):\n    for i in range(limit):\n        yield i\n        await asyncio.sleep(0.1)\n\n# Consume async generator\nasync def consume_counter():\n    async for number in async_counter(5):\n        print(number)\n\n# Async iterator\nclass AsyncDataStreamer:\n    def __init__(self, data):\n        self.data = data\n        self.index = 0\n    \n    def __aiter__(self):\n        return self\n    \n    async def __anext__(self):\n        if self.index >= len(self.data):\n            raise StopAsyncIteration\n        await asyncio.sleep(0.1)\n        value = self.data[self.index]\n        self.index += 1\n        return value\n\n# Usage\nasync def main():\n    streamer = AsyncDataStreamer([1, 2, 3, 4, 5])\n    async for item in streamer:\n        print(item)',
        },
        {
          command: 'Memory Management',
          description: 'Understanding Python memory management',
          usage: 'gc module, weak references, memory profiling',
          example: 'import gc\nimport weakref\nimport sys\nfrom memory_profiler import profile  # pip install memory_profiler\n\n# Garbage collection\nprint(f"GC threshold: {gc.get_threshold()}")\ngc.collect()  # Force garbage collection\n\n# Weak references\nclass MyClass:\n    def __init__(self, name):\n        self.name = name\n    \n    def __del__(self):\n        print(f"{self.name} deleted")\n\nobj = MyClass("test")\nweak_ref = weakref.ref(obj)\n\nprint(f"Object exists: {weak_ref() is not None}")\ndel obj\ngc.collect()\nprint(f"Object exists: {weak_ref() is not None}")\n\n# Weak value dictionary\nweak_dict = weakref.WeakValueDictionary()\nkey_obj = MyClass("key")\nweak_dict["key"] = key_obj\n\ndel key_obj\ngc.collect()\nprint(f"Weak dict size: {len(weak_dict)}")\n\n# Memory profiling\n@profile\ndef memory_intensive_function():\n    large_list = [i for i in range(1000000)]\n    return sum(large_list)\n\n# Get memory usage\nimport psutil  # pip install psutil\nprocess = psutil.Process()\nmemory_info = process.memory_info()\nprint(f"Memory usage: {memory_info.rss / 1024 / 1024:.2f} MB")\n\n# Object size\nimport sys\nmy_list = [1, 2, 3, 4, 5]\nprint(f"List size: {sys.getsizeof(my_list)} bytes")\nprint(f"Total size: {sys.getsizeof(my_list) + sum(sys.getsizeof(i) for i in my_list)} bytes")\n\n# Memory-efficient alternatives\n# Use generators instead of lists for large datasets\ndef large_generator(n):\n    for i in range(n):\n        yield i\n\n# Use __slots__ to reduce memory usage\nclass Point:\n    __slots__ = [\'x\', \'y\']  # No __dict__ created\n    \n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n# Compare memory usage\nimport sys\n\nnormal_point = object()  # Has __dict__\nslot_point = Point(1, 2)  # No __dict__\n\nprint(f"Normal object: {sys.getsizeof(normal_point)} bytes")\nprint(f"Slots object: {sys.getsizeof(slot_point)} bytes")',
        },
      ],
    },
    {
      title: 'Python Ecosystem and Tools',
      commands: [
        {
          command: 'Package Management',
          description: 'pip, conda, virtual environments',
          usage: 'pip install, conda create, requirements.txt',
          example: '# pip commands\npip install requests pandas numpy\npip install -r requirements.txt\npip install --upgrade package\npip uninstall package\npip list  # Show installed packages\npip show package  # Package details\npip freeze > requirements.txt\n\n# Virtual environments\npython -m venv myenv\nsource myenv/bin/activate  # macOS/Linux\nmyenv\\Scripts\\activate     # Windows\n\ndeactivate\n\n# pip with specific versions\npip install package==1.2.3\npip install "package>=1.0,<2.0"\n\n# Development dependencies\npip install -e .  # Editable install\npip install -r requirements-dev.txt\n\n# Conda commands\nconda create -n myenv python=3.11\nconda activate myenv\nconda install numpy pandas scipy\nconda env export > environment.yml\nconda env create -f environment.yml\n\n# Package distribution setup.py\nfrom setuptools import setup, find_packages\n\nsetup(\n    name="mypackage",\n    version="1.0.0",\n    packages=find_packages(),\n    install_requires=[\n        "requests>=2.25.0",\n        "pandas>=1.3.0"\n    ],\n    python_requires=">=3.8",\n    author="Your Name",\n    description="My awesome package"\n)\n\n# pyproject.toml (modern approach)\n[build-system]\nrequires = ["setuptools>=45", "wheel"]\nbuild-backend = "setuptools.build_meta"\n\n[project]\nname = "mypackage"\nversion = "1.0.0"\ndependencies = [\n    "requests>=2.25.0",\n    "pandas>=1.3.0"\n]',
        },
        {
          command: 'Code Quality Tools',
          description: 'Linting, formatting, type checking',
          usage: 'black, flake8, mypy, pylint',
          example: '# Install code quality tools\npip install black flake8 mypy isort pylint pre-commit\n\n# Black - code formatter\nblack .                    # Format all files\nblack myscript.py         # Format single file\nblack --check .           # Check formatting without changing\nblack --line-length 100 . # Custom line length\n\n# isort - import sorting\nisort .                   # Sort imports\nisort --profile black .   # Black-compatible sorting\n\n# flake8 - linting\nflake8 .                  # Lint all files\nflake8 --max-line-length=88 myscript.py\nflake8 --ignore=E501,W503 myscript.py\n\n# mypy - static type checking\nmypy .                    # Type check all files\nmypy --ignore-missing-imports myscript.py\nmypy --strict myscript.py\n\n# pylint - comprehensive linting\npylint myscript.py\npylint --disable=C0114 myscript.py\n\n# Pre-commit hooks\n# .pre-commit-config.yaml\nrepos:\n  - repo: https://github.com/psf/black\n    rev: 22.3.0\n    hooks:\n      - id: black\n  - repo: https://github.com/pycqa/isort\n    rev: 5.10.1\n    hooks:\n      - id: isort\n  - repo: https://github.com/pycqa/flake8\n    rev: 4.0.1\n    hooks:\n      - id: flake8\n  - repo: https://github.com/pre-commit/mirrors-mypy\n    rev: v0.991\n    hooks:\n      - id: mypy\n\n# Install pre-commit\npip install pre-commit\npre-commit install\npre-commit run --all-files',
        },
        {
          command: 'Testing Frameworks',
          description: 'pytest, unittest, mocking',
          usage: 'pytest, unittest.mock',
          example: '# pytest\n# test_calculator.py\nimport pytest\nfrom calculator import Calculator\n\nclass TestCalculator:\n    def test_add(self):\n        calc = Calculator()\n        assert calc.add(2, 3) == 5\n    \n    def test_add_negative(self):\n        calc = Calculator()\n        assert calc.add(-1, 1) == 0\n    \n    @pytest.mark.parametrize("a,b,expected", [\n        (1, 2, 3),\n        (0, 0, 0),\n        (-1, 1, 0)\n    ])\n    def test_add_parametrized(self, a, b, expected):\n        calc = Calculator()\n        assert calc.add(a, b) == expected\n    \n    def test_divide_by_zero(self):\n        calc = Calculator()\n        with pytest.raises(ZeroDivisionError):\n            calc.divide(1, 0)\n\n# Fixtures\n@pytest.fixture\ndef calculator():\n    return Calculator()\n\ndef test_with_fixture(calculator):\n    assert calculator.add(2, 3) == 5\n\n# Mocking\nfrom unittest.mock import Mock, patch\n\ndef test_with_mock():\n    mock_func = Mock(return_value=42)\n    result = mock_func()\n    assert result == 42\n    mock_func.assert_called_once()\n\ndef test_with_patch():\n    with patch(\'calculator.Calculator.add\') as mock_add:\n        mock_add.return_value = 100\n        calc = Calculator()\n        result = calc.add(2, 3)\n        assert result == 100\n        mock_add.assert_called_once_with(2, 3)\n\n# Run tests\npytest                          # Run all tests\npytest test_calculator.py         # Run specific file\npytest -v                        # Verbose output\npytest -k "test_add"             # Run tests matching pattern\npytest --cov=calculator         # Run with coverage\n\n# unittest\nimport unittest\n\nclass TestCalculator(unittest.TestCase):\n    def setUp(self):\n        self.calc = Calculator()\n    \n    def test_add(self):\n        self.assertEqual(self.calc.add(2, 3), 5)\n    \n    def test_divide_by_zero(self):\n        with self.assertRaises(ZeroDivisionError):\n            self.calc.divide(1, 0)\n\nif __name__ == "__main__":\n    unittest.main()',
        },
        {
          command: 'Popular Libraries',
          description: 'Essential Python libraries',
          usage: 'requests, pandas, numpy, matplotlib',
          example: '# requests - HTTP library\nimport requests\n\nresponse = requests.get("https://api.github.com")\nprint(response.status_code)\ndata = response.json()\n\n# POST request\nresponse = requests.post("https://httpbin.org/post", json={"key": "value"})\n\n# pandas - data analysis\nimport pandas as pd\n\n# Create DataFrame\ndf = pd.DataFrame({\n    "name": ["Alice", "Bob", "Charlie"],\n    "age": [25, 30, 35],\n    "city": ["NYC", "LA", "Chicago"]\n})\n\n# Basic operations\nprint(df.head())\nprint(df.describe())\nprint(df[df["age"] > 25])\n\n# numpy - numerical computing\nimport numpy as np\n\n# Create arrays\narr = np.array([1, 2, 3, 4, 5])\nmatrix = np.array([[1, 2], [3, 4]])\n\n# Operations\nprint(np.mean(arr))\nprint(np.sum(matrix, axis=0))\n\n# matplotlib - plotting\nimport matplotlib.pyplot as plt\n\n# Line plot\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\nplt.plot(x, y)\nplt.xlabel("X axis")\nplt.ylabel("Y axis")\nplt.title("Line Plot")\nplt.show()\n\n# Other essential libraries\n# flask/django - web frameworks\n# sqlalchemy - database ORM\n# beautifulsoup4 - web scraping\n# scikit-learn - machine learning\n# pytest - testing\n# celery - task queue\n# redis - caching\n# boto3 - AWS SDK',
        },
      ],
    },
  ],
};
