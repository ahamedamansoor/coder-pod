import { Code } from 'lucide-react';

export const pythonCheatsheet = {
  id: 'python',
  name: 'Python',
  description: 'Master Python programming from basics to advanced features (Python 3.8-3.12)',
  icon: Code,
  colorTheme: 'blue' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Python',
      commands: [
        {
          command: 'Install Python on Ubuntu',
          description: 'Install Python on Ubuntu/Debian systems',
          usage: 'apt install python3 python3-pip python3-venv',
          example: `# Install Python (Ubuntu/Debian)
sudo apt update
sudo apt install python3 python3-pip python3-venv`,
        },
        {
          command: 'Install Python on macOS',
          description: 'Install Python on macOS using Homebrew',
          usage: 'brew install python@3.11',
          example: `# Install Python (macOS with Homebrew)
brew install python@3.11`,
        },
        {
          command: 'Install Python on Windows',
          description: 'Install Python on Windows',
          usage: 'Download installer from python.org',
          example: `# Install Python (Windows)
# Download installer from python.org`,
        },
        {
          command: 'Verify Python Installation',
          description: 'Check Python and pip versions',
          usage: 'python3 --version, pip3 --version',
          example: `# Verify installation
python3 --version
pip3 --version`,
        },
        {
          command: 'Create Virtual Environment',
          description: 'Set up Python virtual environment',
          usage: 'python3 -m venv myenv',
          example: `# Set up virtual environment
python3 -m venv myenv
source myenv/bin/activate  # Linux/macOS
# myenv\\Scripts\\activate   # Windows`,
        },
        {
          command: 'Run Python Script',
          description: 'Execute Python script file',
          usage: 'python3 script.py',
          example: `# Run Python script
python3 script.py`,
        },
        {
          command: 'Run Python with Arguments',
          description: 'Execute Python script with command line arguments',
          usage: 'python3 script.py arg1 arg2',
          example: `# Run with command line arguments
python3 script.py arg1 arg2`,
        },
        {
          command: 'Execute Python Code Directly',
          description: 'Run Python code directly from command line',
          usage: 'python3 -c "code"',
          example: `# Execute Python code directly
python3 -c "print('Hello, World!')"`,
        },
        {
          command: 'Interactive Python Shell',
          description: 'Start interactive Python interpreter',
          usage: 'python3',
          example: `# Interactive Python shell
python3`,
        },
        {
          command: 'IPython Shell',
          description: 'Start enhanced IPython shell',
          usage: 'Install and run ipython',
          example: `# IPython shell
pip install ipython
ipython`,
        },
        {
          command: 'Run Python Module',
          description: 'Execute Python module as script',
          usage: 'python3 -m module_name',
          example: `# Run Python module
python3 -m module_name`,
        },
        {
          command: 'Check Python Syntax',
          description: 'Validate Python syntax without executing',
          usage: 'python3 -m py_compile script.py',
          example: `# Check syntax without executing
python3 -m py_compile script.py`,
        },
        {
          command: 'Python Program Structure',
          description: 'Basic structure of a Python program',
          usage: '#!/usr/bin/env python3, main function, imports',
          example: `#!/usr/bin/env python3
"""
Module description
Author: Your Name
Date: 2024
"""

import sys
import os
from typing import List, Dict

def main():
    """Main entry point of the program"""
    print("Hello, World!")
    return 0

if __name__ == "__main__":
    sys.exit(main())`,
        },
      ],
    },
    {
      title: 'Basic Data Types & Variables',
      commands: [
        {
          command: 'Numeric Data Types',
          description: 'Integer, float, and scientific notation types',
          usage: 'int, float, scientific notation',
          example: `# Numeric types
age = 25                    # integer
price = 19.99               # float
scientific = 1.5e-10        # scientific notation`,
        },
        {
          command: 'String Data Types',
          description: 'Different string declaration methods',
          usage: 'Single, double, multiline quotes',
          example: `# String types
name = "Python"              # double quotes
message = 'Hello'           # single quotes
multiline = """Line 1
Line 2
Line 3"""                   # multiline string`,
        },
        {
          command: 'Boolean and None Types',
          description: 'Boolean and None value types',
          usage: 'True, False, None',
          example: `# Boolean
is_active = True
is_complete = False

# None type
result = None`,
        },
        {
          command: 'Collection Data Types',
          description: 'List, dictionary, set, and tuple types',
          usage: 'list, dict, set, tuple',
          example: `# Collection types
numbers = [1, 2, 3, 4, 5]   # list
person = {"name": "John", "age": 30}  # dictionary
unique = {1, 2, 3, 4}       # set
coordinates = (10, 20)      # tuple`,
        },
        {
          command: 'Simple Variable Assignment',
          description: 'Basic variable assignment',
          usage: 'variable_name = value',
          example: `# Simple assignment
x = 10
name = "Python"`,
        },
        {
          command: 'Multiple Assignment',
          description: 'Assign multiple variables at once',
          usage: 'a, b, c = 1, 2, 3',
          example: `# Multiple assignment
a, b, c = 1, 2, 3

# Same value to multiple variables
x = y = z = 0`,
        },
        {
          command: 'Variable Swapping',
          description: 'Swap values between variables',
          usage: 'x, y = y, x',
          example: `# Swap variables
x, y = y, x`,
        },
        {
          command: 'Variable Unpacking',
          description: 'Unpack values from iterables',
          usage: 'first, second, third = numbers',
          example: `# Unpacking
numbers = [1, 2, 3]
first, second, third = numbers

# Extended unpacking (Python 3.5+)
first, *middle, last = [1, 2, 3, 4, 5]`,
        },
        {
          command: 'Type Hints',
          description: 'Add type annotations to variables',
          usage: 'variable: type = value',
          example: `# Type hints (Python 3.5+)
name: str = "Python"
age: int = 25
scores: List[int] = [90, 85, 95]`,
        },
        {
          command: 'Arithmetic Operators',
          description: 'Basic arithmetic operations',
          usage: '+, -, *, /, //, %, **',
          example: `# Arithmetic operators
a, b = 10, 3
print(a + b)   # 13 (addition)
print(a - b)   # 7 (subtraction)
print(a * b)   # 30 (multiplication)
print(a / b)   # 3.333... (division)
print(a // b)  # 3 (floor division)
print(a % b)   # 1 (modulo)
print(a ** b)  # 1000 (exponentiation)`,
        },
        {
          command: 'Comparison Operators',
          description: 'Compare values and expressions',
          usage: '==, !=, >, >=, <, <=',
          example: `# Comparison operators
print(a == b)  # False
print(a != b)  # True
print(a > b)   # True
print(a >= b)  # True
print(a < b)   # False
print(a <= b)  # True`,
        },
        {
          command: 'Logical Operators',
          description: 'Boolean logic operations',
          usage: 'and, or, not',
          example: `# Logical operators
x, y = True, False
print(x and y) # False
print(x or y)  # True
print(not x)   # False`,
        },
        {
          command: 'Membership Operators',
          description: 'Check membership in sequences',
          usage: 'in, not in',
          example: `# Membership operators
numbers = [1, 2, 3, 4, 5]
print(3 in numbers)     # True
print(6 not in numbers) # True`,
        },
        {
          command: 'Identity Operators',
          description: 'Check object identity',
          usage: 'is, is not',
          example: `# Identity operators
x = [1, 2, 3]
y = [1, 2, 3]
print(x is y)   # False (different objects)
print(x is not y) # True`,
        },
      ],
    },
    {
      title: 'Control Flow',
      commands: [
        {
          command: 'Simple If Statement',
          description: 'Basic conditional execution',
          usage: 'if condition:',
          example: `age = 18

# Simple if
if age >= 18:
    print("Adult")`,
        },
        {
          command: 'If-Elif-Else Statement',
          description: 'Multiple conditional branches',
          usage: 'if: elif: else:',
          example: `# If-elif-else
if age < 13:
    print("Child")
elif age < 18:
    print("Teenager")
elif age < 65:
    print("Adult")
else:
    print("Senior")`,
        },
        {
          command: 'Ternary Operator',
          description: 'Conditional expression in one line',
          usage: 'value_if_true if condition else value_if_false',
          example: `# Ternary operator
status = "Adult" if age >= 18 else "Minor"
print(status)`,
        },
        {
          command: 'Nested If Statements',
          description: 'If statements inside other if statements',
          usage: 'Nested conditional logic',
          example: `# Nested conditions
score = 85
if score >= 60:
    if score >= 80:
        grade = "A"
    else:
        grade = "B"
else:
    grade = "F"`,
        },
        {
          command: 'Multiple Conditions',
          description: 'Combine conditions with and/or',
          usage: 'condition1 and condition2',
          example: `# Multiple conditions
username = "admin"
password = "secret"
if username == "admin" and password == "secret":
    print("Access granted")
elif username == "admin" or password == "secret":
    print("Partial access")
else:
    print("Access denied")`,
        },
        {
          command: 'For Loop with Range',
          description: 'Iterate over a range of numbers',
          usage: 'for i in range(n):',
          example: `# For loop with range
for i in range(5):
    print(f"Count: {i}")`,
        },
        {
          command: 'For Loop with List',
          description: 'Iterate over list elements',
          usage: 'for item in list:',
          example: `# For loop with list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f" Fruit: {fruit}")`,
        },
        {
          command: 'For Loop with Enumerate',
          description: 'Get index and value while iterating',
          usage: 'for index, item in enumerate(list):',
          example: `# For loop with enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")`,
        },
        {
          command: 'For Loop with Dictionary',
          description: 'Iterate over dictionary items',
          usage: 'for key, value in dict.items():',
          example: `# For loop with dictionary
person = {"name": "John", "age": 30, "city": "New York"}
for key, value in person.items():
    print(f"{key}: {value}")`,
        },
        {
          command: 'While Loop',
          description: 'Loop while condition is true',
          usage: 'while condition:',
          example: `# While loop
count = 0
while count < 5:
    print(f"While count: {count}")
    count += 1`,
        },
        {
          command: 'Break and Continue',
          description: 'Control loop execution flow',
          usage: 'break, continue statements',
          example: `# Break and continue
for i in range(10):
    if i == 3:
        continue  # skip 3
    if i == 7:
        break     # stop at 7
    print(i)`,
        },
        {
          command: 'Loop Else Clause',
          description: 'Execute code when loop completes normally',
          usage: 'for/while...else:',
          example: `# Else clause with loops
for i in range(3):
    print(i)
else:
    print("Loop completed normally")`,
        },
        {
          command: 'List Comprehension',
          description: 'Create lists using concise syntax',
          usage: '[expression for item in iterable]',
          example: `# List comprehension
squares = [x**2 for x in range(10)]
even_squares = [x**2 for x in range(10) if x % 2 == 0]`,
        },
        {
          command: 'Basic Exception Handling',
          description: 'Handle exceptions with try-except',
          usage: 'try: except:',
          example: `# Basic exception handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`,
        },
        {
          command: 'Multiple Exception Types',
          description: 'Handle different exception types',
          usage: 'except (Error1, Error2):',
          example: `except Exception as e:
    print(f"Other error: {e}")`,
        },
        {
          command: 'Finally Block',
          description: 'Execute cleanup code always',
          usage: 'try:...finally:',
          example: `finally:
    print("This always executes")`,
        },
        {
          command: 'Multiple Exception Handling',
          description: 'Catch multiple specific exceptions',
          usage: 'except (Error1, Error2) as e:',
          example: `# Multiple exceptions
try:
    value = int("abc")
except (ValueError, TypeError) as e:
    print(f"Conversion error: {e}")`,
        },
        {
          command: 'Exception with Else',
          description: 'Execute code if no exception occurs',
          usage: 'try:...except:...else:',
          example: `# Exception with else
try:
    number = int("42")
except ValueError:
    print("Invalid number")
else:
    print(f"Success: {number * 2}")`,
        },
        {
          command: 'Custom Exception Class',
          description: 'Define your own exception types',
          usage: 'class CustomError(Exception):',
          example: `# Custom exceptions
class CustomError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)`,
        },
        {
          command: 'Raising Exceptions',
          description: 'Throw exceptions manually',
          usage: 'raise ExceptionType(message)',
          example: `# Raising exceptions
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 120:
        raise CustomError("Age seems unrealistic")
    return True`,
        },
        {
          command: 'Context Managers',
          description: 'Use with statements for resource management',
          usage: 'with open(file) as f:',
          example: `# Context managers (with statements)
try:
    with open("file.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found")
except IOError as e:
    print(f"IO error: {e}")`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Functions and Modules',
      commands: [
        {
          command: 'Basic Function Definition',
          description: 'Define a simple function',
          usage: 'def function_name(param):',
          example: `# Basic function
def greet(name):
    return f"Hello, {name}!"`,
        },
        {
          command: 'Function with Default Parameters',
          description: 'Functions with optional parameters',
          usage: 'def func(param=default):',
          example: `# Function with default parameters
def power(base, exponent=2):
    return base ** exponent`,
        },
        {
          command: 'Function with Keyword Arguments',
          description: 'Functions with named parameters',
          usage: 'def func(name, age, city="Unknown"):',
          example: `# Function with keyword arguments
def create_person(name, age, city="Unknown"):
    return {"name": name, "age": age, "city": city}`,
        },
        {
          command: 'Function with Variable Arguments',
          description: 'Accept arbitrary number of positional arguments',
          usage: 'def func(*args):',
          example: `# Function with variable arguments
def sum_all(*numbers):
    return sum(numbers)`,
        },
        {
          command: 'Function with Keyword Arguments',
          description: 'Accept arbitrary number of keyword arguments',
          usage: 'def func(**kwargs):',
          example: `# Function with keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")`,
        },
        {
          command: 'Function with Type Hints',
          description: 'Add type annotations to functions',
          usage: 'def func(param: type) -> return_type:',
          example: `# Function with type hints
def calculate_area(length: float, width: float) -> float:
    """Calculate rectangle area"""
    return length * width`,
        },
        {
          command: 'Lambda Functions',
          description: 'Anonymous functions',
          usage: 'lambda params: expression',
          example: `# Lambda functions
square = lambda x: x ** 2
add = lambda x, y: x + y`,
        },
        {
          command: 'Higher-Order Functions',
          description: 'Functions that accept other functions',
          usage: 'def apply_operation(func, x, y):',
          example: `# Higher-order functions
def apply_operation(func, x, y):
    return func(x, y)

result = apply_operation(lambda a, b: a * b, 5, 3)  # 15`,
        },
        {
          command: 'Function Decorator',
          description: 'Modify function behavior with decorators',
          usage: '@decorator',
          example: `# Function decorators
def timer_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer_decorator
def slow_function():
    import time
    time.sleep(1)
    return "Done"`,
        },
        {
          command: 'Import Modules',
          description: 'Import Python modules',
          usage: 'import module',
          example: `# Importing modules
import math
import os, sys`,
        },
        {
          command: 'Import Specific Items',
          description: 'Import specific functions or classes',
          usage: 'from module import item',
          example: `from datetime import datetime, timedelta
from collections import Counter, defaultdict`,
        },
        {
          command: 'Import with Alias',
          description: 'Import modules with alternative names',
          usage: 'import module as alias',
          example: `# Import with alias
import numpy as np
import pandas as pd`,
        },
        {
          command: 'Import Specific Functions',
          description: 'Import specific functions from modules',
          usage: 'from module import func1, func2',
          example: `# Import specific functions
from math import sqrt, pi, sin
from random import randint, choice`,
        },
        {
          command: 'Import All',
          description: 'Import all items from module',
          usage: 'from module import *',
          example: `# Import all (use sparingly)
from math import *`,
        },
        {
          command: 'Conditional Imports',
          description: 'Import modules conditionally',
          usage: 'try: import module',
          example: `# Conditional imports
try:
    import numpy as np
except ImportError:
    print("NumPy not available")
    np = None`,
        },
        {
          command: 'Create Custom Module',
          description: 'Create your own Python module',
          usage: 'Create .py file with functions',
          example: `# Creating modules (my_module.py)
"""
# my_module.py
def helper_function():
    return "Helper function"

CONSTANT_VALUE = 42
"""`,
        },
        {
          command: 'Use Custom Module',
          description: 'Import and use custom modules',
          usage: 'import my_module',
          example: `# Using custom modules
import my_module
from my_module import helper_function, CONSTANT_VALUE`,
        },
        {
          command: 'Package Structure',
          description: 'Create Python packages',
          usage: 'Directory with __init__.py',
          example: `# Package structure
"""
my_package/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py
"""`,
        },
        {
          command: 'Relative Imports',
          description: 'Import from relative package paths',
          usage: 'from .module import function',
          example: `# Relative imports
from .module1 import some_function
from ..subpackage.module3 import another_function`,
        },
        {
          command: 'Module Information',
          description: 'Get information about current module',
          usage: '__name__, __file__, __doc__',
          example: `# Module information
print(__name__)      # __main__ or module name
print(__file__)      # File path
print(__doc__)       # Module docstring`,
        },
        {
          command: 'Type Conversion Functions',
          description: 'Convert between data types',
          usage: 'int(), float(), str(), list()',
          example: `# Type conversion
int_val = int("42")
float_val = float("3.14")
str_val = str(123)
list_val = list("hello")
tuple_val = tuple([1, 2, 3])
set_val = set([1, 2, 2, 3])
dict_val = dict([("a", 1), ("b", 2)])`,
        },
        {
          command: 'Information Functions',
          description: 'Get information about objects',
          usage: 'type(), isinstance(), hasattr()',
          example: `# Information functions
print(type(42))           # <class 'int'>
print(isinstance(42, int)) # True
print(hasattr(str, "upper")) # True
print(id(42))             # Memory address
print(dir(str))           # List attributes`,
        },
        {
          command: 'Sequence Functions',
          description: 'Functions for working with sequences',
          usage: 'len(), max(), min(), sum()',
          example: `# Sequence functions
numbers = [1, 2, 3, 4, 5]
print(len(numbers))       # 5
print(max(numbers))       # 5
print(min(numbers))       # 1
print(sum(numbers))       # 15
print(sorted([3, 1, 2]))  # [1, 2, 3]
print(reversed([1, 2, 3])) # [3, 2, 1]`,
        },
        {
          command: 'Iteration Functions',
          description: 'Functions for iteration',
          usage: 'range(), enumerate(), zip()',
          example: `# Iteration functions
for i in range(5):
    print(i)

for i, val in enumerate(["a", "b", "c"]):
    print(i, val)

names = ["Alice", "Bob", "Charlie"]
scores = [90, 85, 95]
for name, score in zip(names, scores):
    print(f"{name}: {score}")`,
        },
        {
          command: 'Functional Programming Functions',
          description: 'map, filter, reduce functions',
          usage: 'map(), filter(), reduce()',
          example: `# Functional programming
numbers = [1, 2, 3, 4, 5]
even = list(filter(lambda x: x % 2 == 0, numbers))
squares = list(map(lambda x: x**2, numbers))
from functools import reduce
product = reduce(lambda x, y: x * y, numbers)`,
        },
        {
          command: 'Input Output Functions',
          description: 'Get user input and print output',
          usage: 'input(), print()',
          example: `# Input/output
name = input("Enter your name: ")
print(f"Hello, {name}!")`,
        },
        {
          command: 'Evaluation Functions',
          description: 'Evaluate Python code dynamically',
          usage: 'eval(), exec(), compile()',
          example: `# Evaluation functions
result = eval("2 + 3 * 4")  # 14
code = compile("x = 5", "<string>", "exec")
exec(code)
print(x)  # 5`,
        },
      ],
    },
    // Continue with more sections...
  ],
};
