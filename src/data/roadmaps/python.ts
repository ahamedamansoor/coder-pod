import type { Roadmap } from './types';

export const python: Roadmap = {
  slug: 'python',
  name: 'Python',
  description: 'Versatile programming language for web development, data science, AI, and automation',
  topics: [
    { slug: 'learning-plan', title: 'Learning Plan', explanation: 'A comprehensive roadmap for mastering Python from fundamentals to expert-level applications.' },

    // 1. FUNDAMENTALS
    { slug: 'python-introduction', title: 'What is Python?', explanation: 'Introduction to Python, its history, philosophy, and why it\'s popular across multiple domains.', category: 'Fundamentals' },
    { slug: 'python-installation', title: 'Installation & Setup', explanation: 'Installing Python, setting up virtual environments, and configuring your development environment.', category: 'Fundamentals' },
    { slug: 'python-syntax-basics', title: 'Basic Syntax', explanation: 'Python syntax rules, indentation, comments, and basic program structure.', category: 'Fundamentals' },
    { slug: 'python-variables-data-types', title: 'Variables & Data Types', explanation: 'Understanding variables, numbers, strings, booleans, and type conversion in Python.', category: 'Fundamentals' },
    { slug: 'python-operators', title: 'Operators', explanation: 'Arithmetic, comparison, logical, and assignment operators in Python.', category: 'Fundamentals' },
    { slug: 'python-input-output', title: 'Input & Output', explanation: 'Getting user input and displaying output using print() and input() functions.', category: 'Fundamentals' },

    // 2. CONTROL FLOW
    { slug: 'python-if-else', title: 'Conditional Statements', explanation: 'if, elif, else statements and conditional expressions for decision making.', category: 'Control Flow' },
    { slug: 'python-loops', title: 'Loops', explanation: 'for loops, while loops, loop control statements (break, continue, pass).', category: 'Control Flow' },
    { slug: 'python-exception-handling', title: 'Exception Handling', explanation: 'try, except, finally blocks and handling common Python exceptions.', category: 'Control Flow' },

    // 3. DATA STRUCTURES
    { slug: 'python-lists', title: 'Lists', explanation: 'Creating, manipulating, and working with Python lists - the most versatile data structure.', category: 'Data Structures' },
    { slug: 'python-tuples', title: 'Tuples', explanation: 'Understanding tuples, their immutability, and when to use them over lists.', category: 'Data Structures' },
    { slug: 'python-dictionaries', title: 'Dictionaries', explanation: 'Key-value pairs, dictionary methods, and common operations with dict objects.', category: 'Data Structures' },
    { slug: 'python-sets', title: 'Sets', explanation: 'Sets for unique values, set operations, and performance benefits.', category: 'Data Structures' },
    { slug: 'python-comprehensions', title: 'Comprehensions', explanation: 'List, dict, and set comprehensions for concise and efficient code.', category: 'Data Structures' },

    // 4. FUNCTIONS
    { slug: 'python-functions-basics', title: 'Function Basics', explanation: 'Defining functions, parameters, return values, and function documentation.', category: 'Functions' },
    { slug: 'python-function-arguments', title: 'Function Arguments', explanation: 'Positional, keyword, default, variable-length (*args, **kwargs) arguments.', category: 'Functions' },
    { slug: 'python-lambda-functions', title: 'Lambda Functions', explanation: 'Anonymous functions and their use cases with functional programming concepts.', category: 'Functions' },
    { slug: 'python-decorators', title: 'Decorators', explanation: 'Understanding and creating decorators for modifying function behavior.', category: 'Functions' },
    { slug: 'python-generators', title: 'Generators', explanation: 'Generator functions, yield keyword, and memory-efficient iteration.', category: 'Functions' },

    // 5. OBJECT-ORIENTED PROGRAMMING
    { slug: 'python-classes-objects', title: 'Classes & Objects', explanation: 'Creating classes, objects, instance variables, and the __init__ method.', category: 'Object-Oriented Programming' },
    { slug: 'python-inheritance', title: 'Inheritance', explanation: 'Single and multiple inheritance, method resolution order, and super() function.', category: 'Object-Oriented Programming' },
    { slug: 'python-polymorphism', title: 'Polymorphism', explanation: 'Method overriding, duck typing, and polymorphic behavior in Python.', category: 'Object-Oriented Programming' },
    { slug: 'python-encapsulation', title: 'Encapsulation', explanation: 'Private variables, name mangling, and property decorators.', category: 'Object-Oriented Programming' },
    { slug: 'python-special-methods', title: 'Special Methods', explanation: 'Magic methods (__str__, __repr__, __len__, etc.) for operator overloading.', category: 'Object-Oriented Programming' },

    // 6. MODULES & PACKAGES
    { slug: 'python-modules', title: 'Modules', explanation: 'Importing modules, creating custom modules, and understanding Python\'s module system.', category: 'Modules & Packages' },
    { slug: 'python-packages', title: 'Packages', explanation: 'Creating and organizing packages, __init__.py, and package structure.', category: 'Modules & Packages' },
    { slug: 'python-standard-library', title: 'Standard Library', explanation: 'Essential modules: os, sys, datetime, math, random, and collections.', category: 'Modules & Packages' },
    { slug: 'python-pip-package-management', title: 'Package Management', explanation: 'Using pip, requirements.txt, virtual environments, and managing dependencies.', category: 'Modules & Packages' },

    // 7. FILE HANDLING
    { slug: 'python-file-operations', title: 'File Operations', explanation: 'Reading, writing, and appending files using different file modes.', category: 'File Handling' },
    { slug: 'python-file-context-managers', title: 'Context Managers', explanation: 'Using with statement for automatic resource management and custom context managers.', category: 'File Handling' },
    { slug: 'python-working-directories', title: 'Working with Directories', explanation: 'Directory operations, path manipulation with pathlib and os modules.', category: 'File Handling' },
    { slug: 'python-file-formats', title: 'File Formats', explanation: 'Working with CSV, JSON, XML, and other common file formats.', category: 'File Handling' },

    // 8. ERROR HANDLING & DEBUGGING
    { slug: 'python-advanced-exceptions', title: 'Advanced Exception Handling', explanation: 'Custom exceptions, exception chaining, and best practices for error handling.', category: 'Error Handling & Debugging' },
    { slug: 'python-logging', title: 'Logging', explanation: 'Python logging module, log levels, and implementing logging in applications.', category: 'Error Handling & Debugging' },
    { slug: 'python-debugging', title: 'Debugging', explanation: 'Using pdb debugger, breakpoints, and debugging techniques.', category: 'Error Handling & Debugging' },
    { slug: 'python-testing-basics', title: 'Testing Basics', explanation: 'Writing unit tests with unittest module and testing fundamentals.', category: 'Error Handling & Debugging' },

    // 9. ADVANCED CONCEPTS
    { slug: 'python-iterators-iterables', title: 'Iterators & Iterables', explanation: 'Understanding iteration protocols and creating custom iterators.', category: 'Advanced Concepts' },
    { slug: 'python-contextlib', title: 'Context Management', explanation: 'Advanced context management with contextlib module.', category: 'Advanced Concepts' },
    { slug: 'python-metaclasses', title: 'Metaclasses', explanation: 'Understanding metaclasses and their applications in advanced Python programming.', category: 'Advanced Concepts' },
    { slug: 'python-descriptors', title: 'Descriptors', explanation: 'Creating and using descriptors for managed attributes.', category: 'Advanced Concepts' },
    { slug: 'python-multiple-inheritance', title: 'Advanced Inheritance', explanation: 'Mixins, abstract base classes, and complex inheritance patterns.', category: 'Advanced Concepts' },

    // 10. FUNCTIONAL PROGRAMMING
    { slug: 'python-functional-basics', title: 'Functional Programming Basics', explanation: 'map, filter, reduce functions and functional programming concepts.', category: 'Functional Programming' },
    { slug: 'python-itertools', title: 'Itertools Module', explanation: 'Creating complex iterators with itertools module for efficient data processing.', category: 'Functional Programming' },
    { slug: 'python-functools', title: 'Functools Module', explanation: 'Higher-order functions, partial functions, and caching with lru_cache.', category: 'Functional Programming' },
    { slug: 'python-operator-module', title: 'Operator Module', explanation: 'Functional interfaces to Python\'s intrinsic operators.', category: 'Functional Programming' },

    // 11. CONCURRENCY & PARALLELISM
    { slug: 'python-threading', title: 'Threading', explanation: 'Multi-threading in Python, thread synchronization, and thread safety.', category: 'Concurrency & Parallelism' },
    { slug: 'python-multiprocessing', title: 'Multiprocessing', explanation: 'Multi-processing for CPU-bound tasks and inter-process communication.', category: 'Concurrency & Parallelism' },
    { slug: 'python-asyncio', title: 'Asyncio', explanation: 'Asynchronous programming with async/await syntax and event loops.', category: 'Concurrency & Parallelism' },
    { slug: 'python-concurrent-futures', title: 'Concurrent Futures', explanation: 'High-level interface for asynchronous execution using ThreadPoolExecutor and ProcessPoolExecutor.', category: 'Concurrency & Parallelism' },

    // 12. WEB DEVELOPMENT
    { slug: 'python-web-basics', title: 'Web Development Basics', explanation: 'HTTP protocol, request/response cycle, and web fundamentals.', category: 'Web Development' },
    { slug: 'python-flask', title: 'Flask Framework', explanation: 'Building web applications with Flask, routing, templates, and REST APIs.', category: 'Web Development' },
    { slug: 'python-django', title: 'Django Framework', explanation: 'Full-stack web development with Django, models, views, templates, and admin panel.', category: 'Web Development' },
    { slug: 'python-fastapi', title: 'FastAPI', explanation: 'Modern, fast web framework for building APIs with automatic documentation.', category: 'Web Development' },
    { slug: 'python-web-deployment', title: 'Web Deployment', explanation: 'Deploying Python web applications using Docker, Gunicorn, and cloud platforms.', category: 'Web Development' },

    // 13. DATA SCIENCE FUNDAMENTALS
    { slug: 'python-data-science-intro', title: 'Data Science Introduction', explanation: 'Overview of data science workflow and Python\'s role in data analysis.', category: 'Data Science Fundamentals' },
    { slug: 'python-numpy', title: 'NumPy', explanation: 'Numerical computing with NumPy arrays, vectorization, and mathematical operations.', category: 'Data Science Fundamentals' },
    { slug: 'python-pandas', title: 'Pandas', explanation: 'Data manipulation and analysis with pandas DataFrames and Series.', category: 'Data Science Fundamentals' },
    { slug: 'python-data-visualization', title: 'Data Visualization', explanation: 'Creating plots and charts with Matplotlib and Seaborn libraries.', category: 'Data Science Fundamentals' },
    { slug: 'python-data-cleaning', title: 'Data Cleaning', explanation: 'Techniques for handling missing data, outliers, and data preprocessing.', category: 'Data Science Fundamentals' },

    // 14. MACHINE LEARNING
    { slug: 'python-machine-learning-intro', title: 'Machine Learning Introduction', explanation: 'Understanding ML concepts, types of learning, and the ML workflow.', category: 'Machine Learning' },
    { slug: 'python-scikit-learn', title: 'Scikit-learn', explanation: 'Supervised and unsupervised learning with scikit-learn library.', category: 'Machine Learning' },
    { slug: 'python-feature-engineering', title: 'Feature Engineering', explanation: 'Creating and selecting features for better model performance.', category: 'Machine Learning' },
    { slug: 'python-model-evaluation', title: 'Model Evaluation', explanation: 'Metrics for evaluating model performance and cross-validation techniques.', category: 'Machine Learning' },
    { slug: 'python-deep-learning-intro', title: 'Deep Learning Introduction', explanation: 'Neural networks basics and introduction to deep learning frameworks.', category: 'Machine Learning' },

    // 15. ADVANCED DATA SCIENCE
    { slug: 'python-tensorflow', title: 'TensorFlow', explanation: 'Building and training neural networks with TensorFlow.', category: 'Advanced Data Science' },
    { slug: 'python-pytorch', title: 'PyTorch', explanation: 'Deep learning with PyTorch, dynamic computation graphs, and GPU acceleration.', category: 'Advanced Data Science' },
    { slug: 'python-natural-language-processing', title: 'Natural Language Processing', explanation: 'Text processing, sentiment analysis, and NLP techniques with NLTK and spaCy.', category: 'Advanced Data Science' },
    { slug: 'python-computer-vision', title: 'Computer Vision', explanation: 'Image processing and computer vision tasks with OpenCV and PIL.', category: 'Advanced Data Science' },
    { slug: 'python-time-series', title: 'Time Series Analysis', explanation: 'Analyzing and forecasting time series data with specialized techniques.', category: 'Advanced Data Science' },

    // 16. DATABASE PROGRAMMING
    { slug: 'python-sql-basics', title: 'SQL Basics', explanation: 'Database fundamentals, SQL queries, and database design principles.', category: 'Database Programming' },
    { slug: 'python-sqlite', title: 'SQLite with Python', explanation: 'Working with SQLite databases using Python\'s sqlite3 module.', category: 'Database Programming' },
    { slug: 'python-sqlalchemy', title: 'SQLAlchemy ORM', explanation: 'Object-relational mapping with SQLAlchemy for database operations.', category: 'Database Programming' },
    { slug: 'python-database-connections', title: 'Database Connections', explanation: 'Connecting to PostgreSQL, MySQL, and other databases from Python.', category: 'Database Programming' },
    { slug: 'python-nosql', title: 'NoSQL Databases', explanation: 'Working with MongoDB, Redis, and other NoSQL databases.', category: 'Database Programming' },

    // 17. AUTOMATION & SCRIPTING
    { slug: 'python-automation-basics', title: 'Automation Basics', explanation: 'Scripting for system administration and task automation.', category: 'Automation & Scripting' },
    { slug: 'python-web-scraping', title: 'Web Scraping', explanation: 'Extracting data from websites using BeautifulSoup and Scrapy.', category: 'Automation & Scripting' },
    { slug: 'python-api-integration', title: 'API Integration', explanation: 'Working with REST APIs, making HTTP requests, and handling JSON data.', category: 'Automation & Scripting' },
    { slug: 'python-email-automation', title: 'Email Automation', explanation: 'Sending emails, attachments, and email processing with Python.', category: 'Automation & Scripting' },
    { slug: 'python-scheduling', title: 'Task Scheduling', explanation: 'Automating scheduled tasks using cron, APScheduler, and other tools.', category: 'Automation & Scripting' },

    // 18. TESTING & QUALITY ASSURANCE
    { slug: 'python-pytest', title: 'Pytest Framework', explanation: 'Advanced testing with pytest, fixtures, and parameterized tests.', category: 'Testing & Quality Assurance' },
    { slug: 'python-test-driven-development', title: 'Test-Driven Development', explanation: 'TDD methodology and writing tests before implementation.', category: 'Testing & Quality Assurance' },
    { slug: 'python-mocking', title: 'Mocking & Patching', explanation: 'Isolating code for testing using unittest.mock module.', category: 'Testing & Quality Assurance' },
    { slug: 'python-code-coverage', title: 'Code Coverage', explanation: 'Measuring test coverage and improving test quality.', category: 'Testing & Quality Assurance' },
    { slug: 'python-performance-testing', title: 'Performance Testing', explanation: 'Profiling and optimizing Python code performance.', category: 'Testing & Quality Assurance' },

    // 19. SECURITY & CRYPTOGRAPHY
    { slug: 'python-security-basics', title: 'Security Basics', explanation: 'Common security vulnerabilities and secure coding practices.', category: 'Security & Cryptography' },
    { slug: 'python-cryptography', title: 'Cryptography', explanation: 'Encryption, hashing, and cryptographic operations with cryptography library.', category: 'Security & Cryptography' },
    { slug: 'python-authentication', title: 'Authentication & Authorization', explanation: 'Implementing authentication systems and access control.', category: 'Security & Cryptography' },
    { slug: 'python-security-tools', title: 'Security Tools', explanation: 'Using Python for security testing, vulnerability scanning, and penetration testing.', category: 'Security & Cryptography' },

    // 20. PERFORMANCE OPTIMIZATION
    { slug: 'python-profiling', title: 'Code Profiling', explanation: 'Identifying bottlenecks using cProfile, line_profiler, and memory_profiler.', category: 'Performance Optimization' },
    { slug: 'python-optimization-techniques', title: 'Optimization Techniques', explanation: 'Algorithm optimization, memory management, and performance best practices.', category: 'Performance Optimization' },
    { slug: 'python-c-extensions', title: 'C Extensions', explanation: 'Writing C extensions for performance-critical code using Cython and ctypes.', category: 'Performance Optimization' },
    { slug: 'python-parallel-processing', title: 'Parallel Processing', explanation: 'Optimizing for multi-core systems and distributed computing.', category: 'Performance Optimization' },

    // 21. DEVOPS & CLOUD
    { slug: 'python-devops-basics', title: 'DevOps Basics', explanation: 'Infrastructure as code, CI/CD pipelines, and automation in DevOps.', category: 'DevOps & Cloud' },
    { slug: 'python-docker', title: 'Docker with Python', explanation: 'Containerizing Python applications and Docker best practices.', category: 'DevOps & Cloud' },
    { slug: 'python-cloud-platforms', title: 'Cloud Platforms', explanation: 'Deploying Python applications to AWS, Google Cloud, and Azure.', category: 'DevOps & Cloud' },
    { slug: 'python-kubernetes', title: 'Kubernetes', explanation: 'Orchestrating Python applications with Kubernetes.', category: 'DevOps & Cloud' },

    // 22. GUI DEVELOPMENT
    { slug: 'python-gui-basics', title: 'GUI Development Basics', explanation: 'Introduction to desktop application development with Python.', category: 'GUI Development' },
    { slug: 'python-tkinter', title: 'Tkinter', explanation: 'Building GUI applications with Python\'s built-in Tkinter library.', category: 'GUI Development' },
    { slug: 'python-pyqt', title: 'PyQt/PySide', explanation: 'Advanced GUI development with PyQt or PySide frameworks.', category: 'GUI Development' },
    { slug: 'python-kivy', title: 'Kivy', explanation: 'Cross-platform GUI development for mobile and desktop applications.', category: 'GUI Development' },

    // 23. GAME DEVELOPMENT
    { slug: 'python-game-dev-basics', title: 'Game Development Basics', explanation: 'Introduction to game development concepts and Python game engines.', category: 'Game Development' },
    { slug: 'python-pygame', title: 'Pygame', explanation: 'Creating 2D games with Pygame library.', category: 'Game Development' },
    { slug: 'python-game-physics', title: 'Game Physics', explanation: 'Implementing physics, collision detection, and game mechanics.', category: 'Game Development' },
    { slug: 'python-game-ai', title: 'Game AI', explanation: 'Creating artificial intelligence for game characters and opponents.', category: 'Game Development' },

    // 24. BEST PRACTICES & DESIGN PATTERNS
    { slug: 'python-code-style', title: 'Code Style & Formatting', explanation: 'PEP 8 guidelines, code formatting with black, and linting tools.', category: 'Best Practices & Design Patterns' },
    { slug: 'python-design-patterns', title: 'Design Patterns', explanation: 'Implementing common design patterns in Python (Singleton, Factory, Observer, etc.).', category: 'Best Practices & Design Patterns' },
    { slug: 'python-clean-code', title: 'Clean Code Principles', explanation: 'Writing maintainable, readable, and clean Python code.', category: 'Best Practices & Design Patterns' },
    { slug: 'python-documentation', title: 'Documentation', explanation: 'Writing effective docstrings, Sphinx documentation, and API docs.', category: 'Best Practices & Design Patterns' },

    // 25. ADVANCED TOPICS
    { slug: 'python-internals', title: 'Python Internals', explanation: 'Understanding Python\'s internal architecture, GIL, and memory management.', category: 'Advanced Topics' },
    { slug: 'python-network-programming', title: 'Network Programming', explanation: 'Socket programming, network protocols, and building network applications.', category: 'Advanced Topics' },
    { slug: 'python-regular-expressions', title: 'Regular Expressions', explanation: 'Advanced pattern matching and text processing with regex.', category: 'Advanced Topics' },
    { slug: 'python-serialization', title: 'Serialization', explanation: 'Pickle, JSON, and other serialization methods for data persistence.', category: 'Advanced Topics' },

    // 26. REAL-WORLD PROJECTS
    { slug: 'python-project-ideas', title: 'Project Ideas', explanation: 'Comprehensive project suggestions to apply your Python skills.', category: 'Real-World Projects' },
    { slug: 'python-project-structure', title: 'Project Structure', explanation: 'Organizing large Python projects and best practices for project layout.', category: 'Real-World Projects' },
    { slug: 'python-version-control', title: 'Version Control', explanation: 'Using Git with Python projects and collaborative development.', category: 'Real-World Projects' },
    { slug: 'python-open-source', title: 'Open Source Contribution', explanation: 'Contributing to Python open-source projects and community involvement.', category: 'Real-World Projects' },

    // 27. INTERVIEW PREPARATION
    { slug: 'python-interview-questions', title: 'Interview Questions', explanation: 'Common Python interview questions and coding challenges.', category: 'Interview Preparation' },
    { slug: 'python-coding-challenges', title: 'Coding Challenges', explanation: 'Practice problems and algorithms for technical interviews.', category: 'Interview Preparation' },
    { slug: 'python-system-design', title: 'System Design', explanation: 'Designing scalable systems with Python and architectural patterns.', category: 'Interview Preparation' },
    { slug: 'python-career-paths', title: 'Career Paths', explanation: 'Career opportunities and specializations for Python developers.', category: 'Interview Preparation' },
  ],
};
