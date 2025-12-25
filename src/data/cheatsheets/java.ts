import { Code } from 'lucide-react';

export const javaCheatsheet = {
  id: 'java',
  name: 'Java',
  description: 'Master Java programming from basics to advanced features (Java 8-22)',
  icon: Code,
  colorTheme: 'orange' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Java',
      commands: [
        {
          command: 'Java Program Structure',
          description: 'Basic structure of a Java program',
          usage: 'public class ClassName { public static void main(String[] args) { ... } }',
          example: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
        },
        {
          command: 'Installing Java',
          description: 'Install JDK and set up environment',
          usage: 'Download JDK from Oracle or OpenJDK',
          example: '# Install OpenJDK (Ubuntu/Debian)\nsudo apt update\nsudo apt install openjdk-21-jdk\n\n# Install OpenJDK (macOS with Homebrew)\nbrew install openjdk@21\n\n# Install OpenJDK (Windows)\n# Download from https://adoptium.net/\n\n# Set JAVA_HOME environment variable\nexport JAVA_HOME=/usr/lib/jvm/java-21-openjdk\nexport PATH=$JAVA_HOME/bin:$PATH\n\n# Verify installation\njava -version\njavac -version',
        },
        {
          command: 'Compiling & Running',
          description: 'Basic JDK commands',
          usage: 'javac FileName.java && java ClassName',
          example: '# Compile Java file\njavac HelloWorld.java\n\n# Run compiled class\njava HelloWorld\n\n# Run with command line arguments\njava HelloWorld arg1 arg2\n\n# Compile with specific encoding\njavac -encoding UTF-8 HelloWorld.java\n\n# Run with classpath\njava -cp .:lib/* com.example.Main\n\n# Run with JVM options\njava -Xmx2g -Xms512m -XX:+UseG1GC com.example.Main',
        },
      ],
    },
    {
      title: 'Basic Data Types & Variables',
      commands: [
        {
          command: 'Primitive Data Types',
          description: 'Basic data types in Java',
          usage: 'int, double, char, boolean, etc.',
          example: '// Numeric types\nbyte smallNumber = 127;         // 8-bit signed integer\nshort mediumNumber = 32767;      // 16-bit signed integer\nint defaultInt = 42;             // 32-bit signed integer\nlong bigNumber = 123456789L;     // 64-bit signed integer (L suffix)\n\n// Floating-point types\nfloat singlePrecision = 3.14f;   // 32-bit floating point (f suffix)\ndouble doublePrecision = 3.14159; // 64-bit floating point\n\n// Other primitive types\nchar singleChar = \'A\';           // 16-bit Unicode character\nboolean isActive = true;         // true or false',
        },
        {
          command: 'Variables & Constants',
          description: 'Declaring variables and constants',
          usage: 'type variableName = value; final type CONSTANT = value;',
          example: 'public class VariablesExample {\n  // Instance variables\n  private String name = "Java";\n  private final double PI = 3.14159; // Constant\n  \n  // Static variable\n  private static int count = 0;\n  \n  public void demonstrateVariables() {\n    // Local variables\n    int age = 25;\n    String message = "Hello, World!";\n    \n    // Type inference (Java 10+)\n    var inferredString = "Type inference";\n    var inferredNumber = 42;\n  }\n}',
        },
        {
          command: 'Basic Operators',
          description: 'Arithmetic, comparison, and logical operators',
          usage: '+, -, *, /, %, ==, !=, &&, ||',
          example: 'public class Operators {\n  public static void main(String[] args) {\n    int a = 10, b = 3;\n    \n    // Arithmetic\n    System.out.println(a + b);  // 13\n    System.out.println(a - b);  // 7\n    System.out.println(a * b);  // 30\n    System.out.println(a / b);  // 3 (integer division)\n    System.out.println(a % b);  // 1\n    \n    // Comparison\n    System.out.println(a == b); // false\n    System.out.println(a != b); // true\n    System.out.println(a > b);  // false\n    \n    // Logical\n    boolean x = true, y = false;\n    System.out.println(x && y); // false\n    System.out.println(x || y); // true\n    System.out.println(!x);     // false\n  }\n}',
        },
      ],
    },
    {
      title: 'Control Flow',
      commands: [
        {
          command: 'If-Else Statements',
          description: 'Conditional execution',
          usage: 'if (condition) { ... } else if (condition) { ... } else { ... }',
          example: 'public class ConditionalExample {\n  public static void main(String[] args) {\n    int age = 18;\n    \n    if (age < 13) {\n      System.out.println("Child");\n    } else if (age < 18) {\n      System.out.println("Teenager");\n    } else if (age < 65) {\n      System.out.println("Adult");\n    } else {\n      System.out.println("Senior");\n    }\n    \n    // Ternary operator\n    String status = (age >= 18) ? "Adult" : "Minor";\n    System.out.println(status);\n  }\n}',
        },
        {
          command: 'Switch Statement',
          description: 'Multi-way branching',
          usage: 'switch (variable) { case value: ... break; default: ... }',
          example: 'public class SwitchExample {\n  public static void main(String[] args) {\n    int day = 3;\n    String dayName;\n    \n    switch (day) {\n      case 1:\n        dayName = "Monday";\n        break;\n      case 2:\n        dayName = "Tuesday";\n        break;\n      case 3:\n        dayName = "Wednesday";\n        break;\n      default:\n        dayName = "Invalid day";\n    }\n    \n    System.out.println(dayName);\n    \n    // Enhanced switch (Java 14+)\n    String dayNameEnhanced = switch (day) {\n      case 1 -> "Monday";\n      case 2 -> "Tuesday";\n      case 3 -> "Wednesday";\n      default -> "Invalid day";\n    };\n  }\n}',
        },
        {
          command: 'Loops',
          description: 'for, while, and do-while loops',
          usage: 'for (init; condition; increment) { ... }',
          example: 'public class LoopsExample {\n  public static void main(String[] args) {\n    // For loop\n    for (int i = 0; i < 5; i++) {\n      System.out.println("For loop: " + i);\n    }\n    \n    // Enhanced for loop (for-each)\n    int[] numbers = {1, 2, 3, 4, 5};\n    for (int num : numbers) {\n      System.out.println("For-each: " + num);\n    }\n    \n    // While loop\n    int count = 0;\n    while (count < 3) {\n      System.out.println("While loop: " + count);\n      count++;\n    }\n    \n    // Do-while loop\n    int doCount = 0;\n    do {\n      System.out.println("Do-while loop: " + doCount);\n      doCount++;\n    } while (doCount < 3);\n  }\n}',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Arrays and Strings',
      commands: [
        {
          command: 'Arrays',
          description: 'Working with arrays in Java',
          usage: 'type[] arrayName = new type[size];',
          example: 'public class ArraysExample {\n  public static void main(String[] args) {\n    // Declaration and initialization\n    int[] numbers = new int[5];\n    int[] values = {1, 2, 3, 4, 5};\n    \n    // Access and modify\n    numbers[0] = 10;\n    System.out.println(values[0]); // 1\n    \n    // Array length\n    System.out.println(values.length); // 5\n    \n    // Iterate through array\n    for (int i = 0; i < values.length; i++) {\n      System.out.println(values[i]);\n    }\n    \n    // Enhanced for loop\n    for (int value : values) {\n      System.out.println(value);\n    }\n    \n    // Multidimensional arrays\n    int[][] matrix = {{1, 2}, {3, 4}};\n    System.out.println(matrix[0][1]); // 2\n    \n    // Arrays utility class\n    java.util.Arrays.sort(values);\n    System.out.println(java.util.Arrays.toString(values));\n  }\n}',
        },
        {
          command: 'String Operations',
          description: 'Working with strings',
          usage: 'String str = "text"; str.length(), str.substring(), etc.',
          example: 'public class StringExample {\n  public static void main(String[] args) {\n    String text = "Hello, World!";\n    \n    // Basic operations\n    System.out.println(text.length());        // 13\n    System.out.println(text.charAt(0));       // H\n    System.out.println(text.substring(0, 5)); // Hello\n    System.out.println(text.toUpperCase());    // HELLO, WORLD!\n    System.out.println(text.toLowerCase());    // hello, world!\n    \n    // String comparison\n    String str1 = "hello";\n    String str2 = "hello";\n    String str3 = new String("hello");\n    \n    System.out.println(str1.equals(str2));    // true\n    System.out.println(str1 == str2);         // true (string pool)\n    System.out.println(str1 == str3);         // false (different objects)\n    \n    // String manipulation\n    System.out.println(text.replace("World", "Java")); // Hello, Java!\n    System.out.println(text.contains("World"));        // true\n    System.out.println(text.indexOf("World"));          // 7\n    \n    // StringBuilder for mutable strings\n    StringBuilder sb = new StringBuilder();\n    sb.append("Hello");\n    sb.append(" ");\n    sb.append("Java");\n    System.out.println(sb.toString()); // Hello Java\n  }\n}',
        },
      ],
    },
    {
      title: 'Object-Oriented Programming',
      commands: [
        {
          command: 'Classes and Objects',
          description: 'Creating classes and objects',
          usage: 'class ClassName { ... } ClassName obj = new ClassName();',
          example: 'public class Person {\n  // Instance variables\n  private String name;\n  private int age;\n  \n  // Constructor\n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  // Methods\n  public void introduce() {\n    System.out.println("Hi, I\'m " + name + " and I\'m " + age + " years old.");\n  }\n  \n  // Getters and setters\n  public String getName() { return name; }\n  public void setName(String name) { this.name = name; }\n  public int getAge() { return age; }\n  public void setAge(int age) { this.age = age; }\n  \n  public static void main(String[] args) {\n    // Create objects\n    Person person1 = new Person("Alice", 25);\n    Person person2 = new Person("Bob", 30);\n    \n    person1.introduce(); // Hi, I\'m Alice and I\'m 25 years old.\n    person2.introduce(); // Hi, I\'m Bob and I\'m 30 years old.\n  }\n}',
        },
        {
          command: 'Inheritance',
          description: 'Extending classes and method overriding',
          usage: 'class SubClass extends SuperClass { @Override ... }',
          example: '// Parent class\nclass Animal {\n  protected String name;\n  \n  public Animal(String name) {\n    this.name = name;\n  }\n  \n  public void makeSound() {\n    System.out.println("Animal makes a sound");\n  }\n  \n  public void eat() {\n    System.out.println(name + " is eating");\n  }\n}\n\n// Child class\nclass Dog extends Animal {\n  private String breed;\n  \n  public Dog(String name, String breed) {\n    super(name); // Call parent constructor\n    this.breed = breed;\n  }\n  \n  @Override\n  public void makeSound() {\n    System.out.println(name + " barks: Woof!");\n  }\n  \n  public void wagTail() {\n    System.out.println(name + " is wagging tail");\n  }\n}\n\npublic class InheritanceExample {\n  public static void main(String[] args) {\n    Dog myDog = new Dog("Buddy", "Golden Retriever");\n    myDog.makeSound(); // Buddy barks: Woof!\n    myDog.eat();       // Buddy is eating\n    myDog.wagTail();   // Buddy is wagging tail\n  }\n}',
        },
        {
          command: 'Polymorphism',
          description: 'Method overriding and interfaces',
          usage: 'interface InterfaceName { ... }',
          example: '// Interface\ninterface Drawable {\n  void draw();\n  double getArea();\n}\n\n// Abstract class\nabstract class Shape implements Drawable {\n  protected String color;\n  \n  public Shape(String color) {\n    this.color = color;\n  }\n  \n  public abstract double getArea();\n  \n  public void setColor(String color) {\n    this.color = color;\n  }\n}\n\n// Concrete classes\nclass Circle extends Shape {\n  private double radius;\n  \n  public Circle(String color, double radius) {\n    super(color);\n    this.radius = radius;\n  }\n  \n  @Override\n  public void draw() {\n    System.out.println("Drawing " + color + " circle");\n  }\n  \n  @Override\n  public double getArea() {\n    return Math.PI * radius * radius;\n  }\n}\n\nclass Rectangle extends Shape {\n  private double width, height;\n  \n  public Rectangle(String color, double width, double height) {\n    super(color);\n    this.width = width;\n    this.height = height;\n  }\n  \n  @Override\n  public void draw() {\n    System.out.println("Drawing " + color + " rectangle");\n  }\n  \n  @Override\n  public double getArea() {\n    return width * height;\n  }\n}\n\npublic class PolymorphismExample {\n  public static void main(String[] args) {\n    Shape circle = new Circle("red", 5.0);\n    Shape rectangle = new Rectangle("blue", 4.0, 6.0);\n    \n    circle.draw();    // Drawing red circle\n    rectangle.draw(); // Drawing blue rectangle\n    \n    System.out.println("Circle area: " + circle.getArea());    // 78.54\n    System.out.println("Rectangle area: " + rectangle.getArea()); // 24.0\n  }\n}',
        },
        {
          command: 'Encapsulation and Access Modifiers',
          description: 'Controlling access to class members',
          usage: 'private, protected, public, package-private',
          example: 'public class BankAccount {\n  // Private data - encapsulation\n  private String accountNumber;\n  private double balance;\n  private String ownerName;\n  \n  // Protected data - accessible to subclasses\n  protected String bankName;\n  \n  // Public data - accessible everywhere\n  public static final String BANK_CODE = "BANK001";\n  \n  // Package-private data - accessible within same package\n  String branchCode;\n  \n  public BankAccount(String accountNumber, String ownerName) {\n    this.accountNumber = accountNumber;\n    this.ownerName = ownerName;\n    this.balance = 0.0;\n    this.bankName = "Default Bank";\n  }\n  \n  // Public methods - controlled access to private data\n  public void deposit(double amount) {\n    if (amount > 0) {\n      balance += amount;\n      System.out.println("Deposited: $" + amount);\n    } else {\n      System.out.println("Invalid deposit amount");\n    }\n  }\n  \n  public boolean withdraw(double amount) {\n    if (amount > 0 && balance >= amount) {\n      balance -= amount;\n      System.out.println("Withdrawn: $" + amount);\n      return true;\n    } else {\n      System.out.println("Insufficient funds or invalid amount");\n      return false;\n    }\n  }\n  \n  // Getters for read-only access\n  public double getBalance() {\n    return balance;\n  }\n  \n  public String getAccountNumber() {\n    return accountNumber;\n  }\n  \n  // Protected method - accessible to subclasses\n  protected void logTransaction(String transaction) {\n    System.out.println("Transaction: " + transaction);\n  }\n}',
        },
      ],
    },
    {
      title: 'Exception Handling',
      commands: [
        {
          command: 'Try-Catch Blocks',
          description: 'Handling exceptions in Java',
          usage: 'try { ... } catch (Exception e) { ... } finally { ... }',
          example: 'public class ExceptionExample {\n  public static void main(String[] args) {\n    try {\n      // Code that might throw exception\n      int result = 10 / 0;\n    } catch (ArithmeticException e) {\n      System.out.println("Cannot divide by zero: " + e.getMessage());\n    } catch (Exception e) {\n      System.out.println("General exception: " + e.getMessage());\n    } finally {\n      System.out.println("This always executes");\n    }\n    \n    // Multiple catch blocks\n    try {\n      String str = null;\n      System.out.println(str.length());\n    } catch (NullPointerException e) {\n      System.out.println("Null pointer exception");\n    } catch (Exception e) {\n      System.out.println("Other exception");\n    }\n    \n    // Try with resources (Java 7+)\n    try (java.io.FileReader reader = new java.io.FileReader("file.txt")) {\n      // Auto-closed resources\n      int data = reader.read();\n      while (data != -1) {\n        System.out.print((char) data);\n        data = reader.read();\n      }\n    } catch (java.io.IOException e) {\n      System.out.println("File error: " + e.getMessage());\n    }\n  }\n}',
        },
        {
          command: 'Custom Exceptions',
          description: 'Creating your own exception classes',
          usage: 'class CustomException extends Exception { ... }',
          example: '// Custom exception class\nclass InsufficientFundsException extends Exception {\n  private double amount;\n  private double available;\n  \n  public InsufficientFundsException(double amount, double available) {\n    super("Insufficient funds: Attempted to withdraw $" + amount + \n          " but only $" + available + " available");\n    this.amount = amount;\n    this.available = available;\n  }\n  \n  public double getAmount() { return amount; }\n  public double getAvailable() { return available; }\n}\n\n// Custom unchecked exception\nclass InvalidAgeException extends RuntimeException {\n  public InvalidAgeException(String message) {\n    super(message);\n  }\n}\n\npublic class CustomExceptionExample {\n  public static void validateAge(int age) throws InvalidAgeException {\n    if (age < 0 || age > 150) {\n      throw new InvalidAgeException("Invalid age: " + age);\n    }\n  }\n  \n  public static void withdrawAmount(double balance, double amount) \n      throws InsufficientFundsException {\n    if (amount > balance) {\n      throw new InsufficientFundsException(amount, balance);\n    }\n    System.out.println("Withdrawal successful");\n  }\n  \n  public static void main(String[] args) {\n    try {\n      validateAge(25);  // Valid\n      validateAge(-5);  // Invalid\n    } catch (InvalidAgeException e) {\n      System.out.println("Error: " + e.getMessage());\n    }\n    \n    try {\n      withdrawAmount(1000, 1500);\n    } catch (InsufficientFundsException e) {\n      System.out.println("Error: " + e.getMessage());\n    }\n  }\n}',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Collections Framework',
      commands: [
        {
          command: 'ArrayList',
          description: 'Dynamic array implementation',
          usage: 'List<Type> list = new ArrayList<>();',
          example: 'import java.util.ArrayList;\nimport java.util.List;\n\npublic class ArrayListExample {\n  public static void main(String[] args) {\n    // Create ArrayList\n    List<String> fruits = new ArrayList<>();\n    \n    // Add elements\n    fruits.add("Apple");\n    fruits.add("Banana");\n    fruits.add("Orange");\n    fruits.add(1, "Mango"); // Insert at index 1\n    \n    // Access elements\n    System.out.println(fruits.get(0));        // Apple\n    System.out.println(fruits.size());        // 4\n    \n    // Check if contains\n    System.out.println(fruits.contains("Apple")); // true\n    \n    // Remove elements\n    fruits.remove("Banana");\n    fruits.remove(0); // Remove first element\n    \n    // Iterate through ArrayList\n    for (String fruit : fruits) {\n      System.out.println(fruit);\n    }\n    \n    // Using iterator\n    java.util.Iterator<String> iterator = fruits.iterator();\n    while (iterator.hasNext()) {\n      System.out.println(iterator.next());\n    }\n    \n    // Convert to array\n    String[] fruitArray = fruits.toArray(new String[0]);\n  }\n}',
        },
        {
          command: 'HashMap',
          description: 'Key-value pair storage',
          usage: 'Map<KeyType, ValueType> map = new HashMap<>();',
          example: 'import java.util.HashMap;\nimport java.util.Map;\n\npublic class HashMapExample {\n  public static void main(String[] args) {\n    // Create HashMap\n    Map<String, Integer> studentGrades = new HashMap<>();\n    \n    // Add key-value pairs\n    studentGrades.put("Alice", 85);\n    studentGrades.put("Bob", 92);\n    studentGrades.put("Charlie", 78);\n    \n    // Access values\n    System.out.println(studentGrades.get("Alice")); // 85\n    System.out.println(studentGrades.getOrDefault("David", 0)); // 0\n    \n    // Check if key exists\n    System.out.println(studentGrades.containsKey("Bob")); // true\n    System.out.println(studentGrades.containsValue(92)); // true\n    \n    // Remove entry\n    studentGrades.remove("Charlie");\n    \n    // Get all keys and values\n    System.out.println("Keys: " + studentGrades.keySet());\n    System.out.println("Values: " + studentGrades.values());\n    \n    // Iterate through HashMap\n    for (Map.Entry<String, Integer> entry : studentGrades.entrySet()) {\n      System.out.println(entry.getKey() + ": " + entry.getValue());\n    }\n    \n    // Using forEach (Java 8+)\n    studentGrades.forEach((name, grade) -> \n      System.out.println(name + " scored " + grade));\n  }\n}',
        },
        {
          command: 'HashSet',
          description: 'Unique element collection',
          usage: 'Set<Type> set = new HashSet<>();',
          example: 'import java.util.HashSet;\nimport java.util.Set;\n\npublic class HashSetExample {\n  public static void main(String[] args) {\n    // Create HashSet\n    Set<String> uniqueNames = new HashSet<>();\n    \n    // Add elements\n    uniqueNames.add("Alice");\n    uniqueNames.add("Bob");\n    uniqueNames.add("Alice"); // Duplicate - will be ignored\n    uniqueNames.add("Charlie");\n    \n    System.out.println(uniqueNames.size()); // 3 (Alice appears only once)\n    \n    // Check if contains\n    System.out.println(uniqueNames.contains("Bob")); // true\n    \n    // Remove element\n    uniqueNames.remove("Charlie");\n    \n    // Iterate through HashSet\n    for (String name : uniqueNames) {\n      System.out.println(name);\n    }\n    \n    // Set operations\n    Set<String> set1 = new HashSet<>();\n    Set<String> set2 = new HashSet<>();\n    \n    set1.add("A");\n    set1.add("B");\n    set1.add("C");\n    \n    set2.add("B");\n    set2.add("C");\n    set2.add("D");\n    \n    // Union\n    Set<String> union = new HashSet<>(set1);\n    union.addAll(set2);\n    \n    // Intersection\n    Set<String> intersection = new HashSet<>(set1);\n    intersection.retainAll(set2);\n    \n    // Difference\n    Set<String> difference = new HashSet<>(set1);\n    difference.removeAll(set2);\n  }\n}',
        },
      ],
    },
    {
      title: 'Java 8+ Features',
      commands: [
        {
          command: 'Lambda Expressions',
          description: 'Anonymous functions in Java',
          usage: '(parameters) -> expression',
          example: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.ArrayList;\n\npublic class LambdaExample {\n  public static void main(String[] args) {\n    List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");\n    \n    // Traditional way (before Java 8)\n    for (String name : names) {\n      System.out.println(name);\n    }\n    \n    // Using lambda with forEach\n    names.forEach(name -> System.out.println(name));\n    \n    // Method reference\n    names.forEach(System.out::println);\n    \n    // Lambda with multiple parameters\n    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n    numbers.forEach((num) -> {\n      int squared = num * num;\n      System.out.println(num + " squared is " + squared);\n    });\n    \n    // Lambda in functional interfaces\n    Runnable runnable = () -> System.out.println("Running in thread");\n    new Thread(runnable).start();\n    \n    // Lambda with return statement\n    List<Integer> doubled = new ArrayList<>();\n    numbers.forEach(num -> doubled.add(num * 2));\n    System.out.println(doubled);\n  }\n}',
        },
        {
          command: 'Stream API',
          description: 'Functional data processing',
          usage: 'collection.stream().filter().map().collect()',
          example: 'import java.util.*;\nimport java.util.stream.Collectors;\n\npublic class StreamExample {\n  public static void main(String[] args) {\n    List<String> names = Arrays.asList(\n      "Alice", "Bob", "Charlie", "David", "Eve", "Frank"\n    );\n    \n    // Filter and collect\n    List<String> longNames = names.stream()\n      .filter(name -> name.length() > 4)\n      .collect(Collectors.toList());\n    System.out.println(longNames); // [Charlie, David, Frank]\n    \n    // Map to uppercase\n    List<String> upperNames = names.stream()\n      .map(String::toUpperCase)\n      .collect(Collectors.toList());\n    System.out.println(upperNames);\n    \n    // Sort and limit\n    List<String> sortedLimited = names.stream()\n      .sorted()\n      .limit(3)\n      .collect(Collectors.toList());\n    System.out.println(sortedLimited);\n    \n    // Numeric operations\n    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n    \n    int sum = numbers.stream()\n      .filter(n -> n % 2 == 0)\n      .mapToInt(Integer::intValue)\n      .sum();\n    System.out.println("Sum of even numbers: " + sum);\n    \n    double average = numbers.stream()\n      .mapToInt(Integer::intValue)\n      .average()\n      .orElse(0.0);\n    System.out.println("Average: " + average);\n    \n    // Grouping\n    Map<Integer, List<String>> groupedByLength = names.stream()\n      .collect(Collectors.groupingBy(String::length));\n    System.out.println(groupedByLength);\n    \n    // Parallel stream\n    long count = names.parallelStream()\n      .filter(name -> name.startsWith("A"))\n      .count();\n    System.out.println("Names starting with A: " + count);\n  }\n}',
        },
        {
          command: 'Optional Class',
          description: 'Null-safe container for values',
          usage: 'Optional<T> optional = Optional.ofNullable(value);',
          example: 'import java.util.Optional;\n\npublic class OptionalExample {\n  public static void main(String[] args) {\n    // Creating Optional\n    Optional<String> optional1 = Optional.of("Hello");\n    Optional<String> optional2 = Optional.ofNullable(null);\n    Optional<String> optional3 = Optional.empty();\n    \n    // Check if present\n    if (optional1.isPresent()) {\n      System.out.println("Value: " + optional1.get());\n    }\n    \n    // Or else\n    String value = optional2.orElse("Default Value");\n    System.out.println(value); // Default Value\n    \n    // Or else throw\n    try {\n      String result = optional3.orElseThrow(() -> \n        new IllegalArgumentException("No value present"));\n    } catch (IllegalArgumentException e) {\n      System.out.println("Exception: " + e.getMessage());\n    }\n    \n    // If present\n    optional1.ifPresent(val -> System.out.println("Value exists: " + val));\n    \n    // Map operation\n    Optional<Integer> length = optional1.map(String::length);\n    System.out.println("Length: " + length.orElse(0));\n    \n    // Filter\n    Optional<String> filtered = optional1.filter(s -> s.length() > 3);\n    System.out.println("Filtered present: " + filtered.isPresent());\n    \n    // Practical example\n    public Optional<String> findUserById(int id) {\n      // Simulate database lookup\n      if (id == 1) {\n        return Optional.of("John Doe");\n      }\n      return Optional.empty();\n    }\n    \n    Optional<String> user = findUserById(1);\n    String userName = user.orElse("Unknown User");\n    System.out.println(userName);\n  }\n}',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Multithreading and Concurrency',
      commands: [
        {
          command: 'Creating Threads',
          description: 'Basic thread creation and management',
          usage: 'new Thread(() -> { ... }).start();',
          example: 'public class ThreadExample {\n  public static void main(String[] args) {\n    // Method 1: Extending Thread class\n    class MyThread extends Thread {\n      public void run() {\n        for (int i = 0; i < 5; i++) {\n          System.out.println("Thread 1: " + i);\n          try {\n            Thread.sleep(1000);\n          } catch (InterruptedException e) {\n            System.out.println("Thread interrupted");\n          }\n        }\n      }\n    }\n    \n    // Method 2: Implementing Runnable\n    Runnable myRunnable = () -> {\n      for (int i = 0; i < 5; i++) {\n        System.out.println("Thread 2: " + i);\n        try {\n          Thread.sleep(500);\n        } catch (InterruptedException e) {\n          System.out.println("Thread interrupted");\n        }\n      }\n    };\n    \n    // Start threads\n    MyThread thread1 = new MyThread();\n    Thread thread2 = new Thread(myRunnable);\n    \n    thread1.start();\n    thread2.start();\n    \n    // Wait for threads to complete\n    try {\n      thread1.join();\n      thread2.join();\n    } catch (InterruptedException e) {\n      System.out.println("Main thread interrupted");\n    }\n    \n    System.out.println("Main thread finished");\n  }\n}',
        },
        {
          command: 'Thread Synchronization',
          description: 'Synchronized methods and blocks',
          usage: 'synchronized method or synchronized(object) { ... }',
          example: 'class BankAccount {\n  private double balance;\n  private final Object lock = new Object();\n  \n  public BankAccount(double initialBalance) {\n    this.balance = initialBalance;\n  }\n  \n  // Synchronized method\n  public synchronized void deposit(double amount) {\n    balance += amount;\n    System.out.println("Deposited: " + amount + ", New balance: " + balance);\n  }\n  \n  // Synchronized block\n  public void withdraw(double amount) {\n    synchronized(lock) {\n      if (balance >= amount) {\n        balance -= amount;\n        System.out.println("Withdrawn: " + amount + ", New balance: " + balance);\n      } else {\n        System.out.println("Insufficient funds");\n      }\n    }\n  }\n  \n  public synchronized double getBalance() {\n    return balance;\n  }\n}\n\npublic class SynchronizationExample {\n  public static void main(String[] args) {\n    BankAccount account = new BankAccount(1000);\n    \n    // Multiple threads accessing the same account\n    Thread[] threads = new Thread[5];\n    \n    for (int i = 0; i < threads.length; i++) {\n      threads[i] = new Thread(() -> {\n        for (int j = 0; j < 10; j++) {\n          account.deposit(10);\n          account.withdraw(5);\n        }\n      });\n      threads[i].start();\n    }\n    \n    // Wait for all threads to complete\n    for (Thread thread : threads) {\n      try {\n        thread.join();\n      } catch (InterruptedException e) {\n        System.out.println("Thread interrupted");\n      }\n    }\n    \n    System.out.println("Final balance: " + account.getBalance());\n  }\n}',
        },
        {
          command: 'ExecutorService',
          description: 'Thread pool management',
          usage: 'ExecutorService executor = Executors.newFixedThreadPool(n);',
          example: 'import java.util.concurrent.*;\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class ExecutorServiceExample {\n  private static final AtomicInteger counter = new AtomicInteger(0);\n  \n  public static void main(String[] args) {\n    // Create thread pool\n    ExecutorService executor = Executors.newFixedThreadPool(3);\n    \n    // Submit tasks\n    for (int i = 0; i < 10; i++) {\n      final int taskId = i;\n      executor.submit(() -> {\n        int currentValue = counter.incrementAndGet();\n        System.out.println("Task " + taskId + " executed by " + \n          Thread.currentThread().getName() + \n          ", Counter: " + currentValue);\n        \n        try {\n          Thread.sleep(1000);\n        } catch (InterruptedException e) {\n          Thread.currentThread().interrupt();\n        }\n      });\n    }\n    \n    // Submit callable task that returns result\n    Future<Integer> future = executor.submit(() -> {\n      Thread.sleep(2000);\n      return 42;\n    });\n    \n    try {\n      Integer result = future.get();\n      System.out.println("Future result: " + result);\n    } catch (InterruptedException | ExecutionException e) {\n      System.out.println("Error getting future result");\n    }\n    \n    // Shutdown executor\n    executor.shutdown();\n    try {\n      if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {\n        executor.shutdownNow();\n      }\n    } catch (InterruptedException e) {\n      executor.shutdownNow();\n    }\n    \n    System.out.println("All tasks completed");\n  }\n}',
        },
      ],
    },
    {
      title: 'Advanced Java Features',
      commands: [
        {
          command: 'Generics',
          description: 'Type-safe classes and methods',
          usage: 'class ClassName<T> { ... }',
          example: '// Generic class\nclass Box<T> {\n  private T content;\n  \n  public void set(T content) {\n    this.content = content;\n  }\n  \n  public T get() {\n    return content;\n  }\n  \n  public boolean isEmpty() {\n    return content == null;\n  }\n}\n\n// Generic method\npublic class GenericMethodExample {\n  public static <T> T getFirst(T[] array) {\n    if (array == null || array.length == 0) {\n      return null;\n    }\n    return array[0];\n  }\n  \n  public static <T extends Comparable<T>> T findMax(T[] array) {\n    if (array == null || array.length == 0) {\n      return null;\n    }\n    \n    T max = array[0];\n    for (int i = 1; i < array.length; i++) {\n      if (array[i].compareTo(max) > 0) {\n        max = array[i];\n      }\n    }\n    return max;\n  }\n}\n\n// Bounded type parameters\nclass NumberBox<T extends Number> {\n  private T number;\n  \n  public void set(T number) {\n    this.number = number;\n  }\n  \n  public double getDoubleValue() {\n    return number.doubleValue();\n  }\n}\n\npublic class GenericsExample {\n  public static void main(String[] args) {\n    // Using generic class\n    Box<String> stringBox = new Box<>();\n    stringBox.set("Hello Generics");\n    System.out.println(stringBox.get());\n    \n    Box<Integer> integerBox = new Box<>();\n    integerBox.set(42);\n    System.out.println(integerBox.get());\n    \n    // Using generic methods\n    String[] names = {"Alice", "Bob", "Charlie"};\n    String firstName = GenericMethodExample.getFirst(names);\n    System.out.println("First name: " + firstName);\n    \n    Integer[] numbers = {5, 2, 8, 1, 9};\n    Integer maxNumber = GenericMethodExample.findMax(numbers);\n    System.out.println("Max number: " + maxNumber);\n    \n    // Bounded type parameters\n    NumberBox<Double> doubleBox = new NumberBox<>();\n    doubleBox.set(3.14);\n    System.out.println("Double value: " + doubleBox.getDoubleValue());\n  }\n}',
        },
        {
          command: 'Reflection API',
          description: 'Inspect and modify classes at runtime',
          usage: 'Class<?> clazz = ClassName.class;',
          example: 'import java.lang.reflect.*;\n\npublic class ReflectionExample {\n  public static void main(String[] args) throws Exception {\n    // Get class object\n    Class<?> stringClass = String.class;\n    Class<?> objectClass = Class.forName("java.lang.Object");\n    \n    // Get class name\n    System.out.println("Class name: " + stringClass.getName());\n    System.out.println("Simple name: " + stringClass.getSimpleName());\n    \n    // Get constructors\n    Constructor<?>[] constructors = stringClass.getConstructors();\n    System.out.println("Number of constructors: " + constructors.length);\n    \n    // Get methods\n    Method[] methods = stringClass.getMethods();\n    System.out.println("Number of methods: " + methods.length);\n    \n    for (Method method : methods) {\n      System.out.println("Method: " + method.getName() + \n        " with " + method.getParameterCount() + " parameters");\n    }\n    \n    // Get fields\n    Field[] fields = stringClass.getDeclaredFields();\n    System.out.println("Number of fields: " + fields.length);\n    \n    // Create instance using reflection\n    Constructor<String> constructor = \n      stringClass.getConstructor(byte[].class);\n    byte[] bytes = "Hello".getBytes();\n    String instance = constructor.newInstance(bytes);\n    System.out.println("Created instance: " + instance);\n    \n    // Invoke method using reflection\n    Method substringMethod = stringClass.getMethod("substring", int.class, int.class);\n    String result = (String) substringMethod.invoke(instance, 0, 3);\n    System.out.println("Substring result: " + result);\n    \n    // Access private field\n    Field valueField = stringClass.getDeclaredField("value");\n    valueField.setAccessible(true);\n    byte[] value = (byte[]) valueField.get(instance);\n    System.out.println("Private field value: " + new String(value));\n  }\n}',
        },
        {
          command: 'Annotations',
          description: 'Metadata in Java code',
          usage: '@interface CustomAnnotation { ... }',
          example: '// Custom annotation\nimport java.lang.annotation.*;\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\n@interface TestInfo {\n  String author() default "Unknown";\n  String date() default "";\n  int version() default 1;\n}\n\n// Using annotation\nclass AnnotatedClass {\n  @TestInfo(author = "John Doe", date = "2024-01-01", version = 2)\n  public void testMethod1() {\n    System.out.println("Test method 1");\n  }\n  \n  @TestInfo(author = "Jane Smith")\n  public void testMethod2() {\n    System.out.println("Test method 2");\n  }\n  \n  @Deprecated\n  public void oldMethod() {\n    System.out.println("This method is deprecated");\n  }\n  \n  @SuppressWarnings("unchecked")\n  public void suppressWarning() {\n    // Code that would generate warning\n  }\n}\n\n// Processing annotations\npublic class AnnotationProcessor {\n  public static void main(String[] args) throws Exception {\n    Class<?> clazz = AnnotatedClass.class;\n    \n    for (Method method : clazz.getDeclaredMethods()) {\n      if (method.isAnnotationPresent(TestInfo.class)) {\n        TestInfo annotation = method.getAnnotation(TestInfo.class);\n        System.out.println("Method: " + method.getName());\n        System.out.println("  Author: " + annotation.author());\n        System.out.println("  Date: " + annotation.date());\n        System.out.println("  Version: " + annotation.version());\n      }\n      \n      if (method.isAnnotationPresent(Deprecated.class)) {\n        System.out.println("Method " + method.getName() + " is deprecated");\n      }\n    }\n  }\n}',
        },
      ],
    },
    {
      title: 'Modern Java Features (Java 11-22)',
      commands: [
        {
          command: 'Records (Java 14+)',
          description: 'Immutable data carriers',
          usage: 'public record Person(String name, int age) { }',
          example: '// Basic record\npublic record Person(String name, int age) {\n  // Record automatically provides:\n  // - Private final fields for name and age\n  // - Public accessor methods: name(), age()\n  // - Constructor\n  // - equals(), hashCode(), toString()\n}\n\n// Record with custom constructor\npublic record Employee(String name, double salary) {\n  public Employee {\n    if (name == null || name.isBlank()) {\n      throw new IllegalArgumentException("Name cannot be null or blank");\n    }\n    if (salary < 0) {\n      throw new IllegalArgumentException("Salary cannot be negative");\n    }\n  }\n  \n  // Custom method\n  public double getAnnualSalary() {\n    return salary * 12;\n  }\n}\n\n// Record implementing interface\npublic interface Drawable {\n  void draw();\n}\n\npublic record Point(int x, int y) implements Drawable {\n  @Override\n  public void draw() {\n    System.out.println("Drawing point at (" + x + ", " + y + ")");\n  }\n}\n\npublic class RecordExample {\n  public static void main(String[] args) {\n    // Create record instances\n    Person person = new Person("Alice", 30);\n    Employee employee = new Employee("Bob", 50000);\n    Point point = new Point(10, 20);\n    \n    // Use accessor methods\n    System.out.println(person.name()); // Alice\n    System.out.println(person.age());  // 30\n    \n    // toString() is automatically provided\n    System.out.println(person); // Person[name=Alice, age=30]\n    \n    // equals() and hashCode() are automatically provided\n    Person person2 = new Person("Alice", 30);\n    System.out.println(person.equals(person2)); // true\n    \n    // Custom method\n    System.out.println("Annual salary: " + employee.getAnnualSalary());\n    \n    // Interface method\n    point.draw();\n  }\n}',
        },
        {
          command: 'Pattern Matching (Java 16+)',
          description: 'Enhanced instanceof and switch expressions',
          usage: 'if (obj instanceof String s) { ... }',
          example: '// Pattern matching with instanceof\npublic class PatternMatchingExample {\n  public static void processObject(Object obj) {\n    // Traditional way\n    if (obj instanceof String) {\n      String str = (String) obj;\n      System.out.println("String length: " + str.length());\n    }\n    \n    // Pattern matching (Java 16+)\n    if (obj instanceof String s) {\n      System.out.println("String length: " + s.length());\n    } else if (obj instanceof Integer i) {\n      System.out.println("Integer value: " + i);\n    } else if (obj instanceof Double d) {\n      System.out.println("Double value: " + d);\n    }\n  }\n  \n  // Pattern matching with switch (preview in Java 17, standard in Java 21)\n  public static String formatValue(Object obj) {\n    return switch (obj) {\n      case Integer i -> String.format("int %d", i);\n      case Long l    -> String.format("long %d", l);\n      case Double d  -> String.format("double %f", d);\n      case String s  -> String.format("String %s", s);\n      default        -> obj.toString();\n    };\n  }\n  \n  // Record patterns (Java 19+)\n  public static void processPerson(Object obj) {\n    if (obj instanceof Person(String name, int age)) {\n      System.out.printf("Person: %s is %d years old%n", name, age);\n    }\n  }\n  \n  public static void main(String[] args) {\n    processObject("Hello World");\n    processObject(42);\n    processObject(3.14);\n    \n    System.out.println(formatValue("Test"));\n    System.out.println(formatValue(123));\n    System.out.println(formatValue(45.67));\n    \n    Person person = new Person("Alice", 30);\n    processPerson(person);\n  }\n}',
        },
        {
          command: 'Virtual Threads (Java 21+)',
          description: 'Lightweight threads for high-concurrency',
          usage: 'Thread.startVirtualThread(() -> { ... });',
          example: 'import java.util.concurrent.*;\n\npublic class VirtualThreadExample {\n  public static void main(String[] args) {\n    // Create virtual thread\n    Thread virtualThread = Thread.startVirtualThread(() -> {\n      System.out.println("Running in virtual thread: " + Thread.currentThread());\n      try {\n        Thread.sleep(1000);\n      } catch (InterruptedException e) {\n        Thread.currentThread().interrupt();\n      }\n      System.out.println("Virtual thread completed");\n    });\n    \n    // Using ExecutorService with virtual threads\n    try (ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor()) {\n      // Submit many tasks\n      for (int i = 0; i < 1000; i++) {\n        final int taskId = i;\n        executor.submit(() -> {\n          System.out.println("Task " + taskId + " running in: " + Thread.currentThread());\n          try {\n            Thread.sleep(100);\n          } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n          }\n        });\n      }\n      \n      // Wait for all tasks to complete\n      Thread.sleep(2000);\n    } catch (InterruptedException e) {\n      Thread.currentThread().interrupt();\n    }\n    \n    // Structured concurrency (Java 21+)\n    try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {\n      Future<String> future1 = scope.fork(() -> {\n        Thread.sleep(1000);\n        return "Result 1";\n      });\n      \n      Future<Integer> future2 = scope.fork(() -> {\n        Thread.sleep(500);\n        return 42;\n      });\n      \n      scope.join();           // Wait for all tasks\n      scope.throwIfFailed();  // Throw if any task failed\n      \n      System.out.println("Future 1 result: " + future1.resultNow());\n      System.out.println("Future 2 result: " + future2.resultNow());\n    } catch (InterruptedException e) {\n      Thread.currentThread().interrupt();\n    }\n  }\n}',
        },
      ],
    },
    {
      title: 'Java Best Practices and Tools',
      commands: [
        {
          command: 'Build Tools - Maven',
          description: 'Project management and build automation',
          usage: 'mvn clean compile, mvn package',
          example: '<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 \n         http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n  \n  <groupId>com.example</groupId>\n  <artifactId>my-java-app</artifactId>\n  <version>1.0.0</version>\n  <packaging>jar</packaging>\n  \n  <properties>\n    <maven.compiler.source>21</maven.compiler.source>\n    <maven.compiler.target>21</maven.compiler.target>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n  </properties>\n  \n  <dependencies>\n    <dependency>\n      <groupId>org.junit.jupiter</groupId>\n      <artifactId>junit-jupiter</artifactId>\n      <version>5.10.0</version>\n      <scope>test</scope>\n    </dependency>\n    \n    <dependency>\n      <groupId>org.apache.commons</groupId>\n      <artifactId>commons-lang3</artifactId>\n      <version>3.13.0</version>\n    </dependency>\n  </dependencies>\n  \n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-compiler-plugin</artifactId>\n        <version>3.11.0</version>\n        <configuration>\n          <source>21</source>\n          <target>21</target>\n        </configuration>\n      </plugin>\n      \n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-surefire-plugin</artifactId>\n        <version>3.1.2</version>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n\n# Maven commands\nmvn clean                    # Clean build artifacts\nmvn compile                  # Compile source code\nmvn test                     # Run tests\nmvn package                  # Create JAR file\nmvn install                  # Install to local repository\nmvn dependency:tree         # Show dependency tree\nmvn dependency:analyze      # Analyze dependencies',
        },
        {
          command: 'Build Tools - Gradle',
          description: 'Modern build automation with Groovy/Kotlin DSL',
          usage: './gradlew build, ./gradlew test',
          example: '// build.gradle (Groovy DSL)\nplugins {\n    id \'java\'\n    id \'application\'\n    id \'org.junit.jupiter\' version \'5.10.0\'\n}\n\njava {\n    sourceCompatibility = JavaVersion.VERSION_21\n    targetCompatibility = JavaVersion.VERSION_21\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    testImplementation \'org.junit.jupiter:junit-jupiter:5.10.0\'\n    implementation \'org.apache.commons:commons-lang3:3.13.0\'\n}\n\napplication {\n    mainClass = \'com.example.Main\'\n}\n\ntest {\n    useJUnitPlatform()\n}\n\njar {\n    manifest {\n        attributes \'Main-Class\': \'com.example.Main\'\n    }\n}\n\n# Gradle commands\n./gradlew build               # Build project\n./gradlew test                # Run tests\n./gradlew run                 # Run application\n./gradlew jar                 # Create JAR file\n./gradlew clean               # Clean build artifacts\n./gradlew dependencies        # Show dependencies\n./gradlew tasks               # List available tasks\n\n# build.gradle.kts (Kotlin DSL)\nplugins {\n    java\n    application\n    id("org.junit.jupiter") version "5.10.0"\n}\n\njava {\n    sourceCompatibility = JavaVersion.VERSION_21\n    targetCompatibility = JavaVersion.VERSION_21\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    testImplementation("org.junit.jupiter:junit-jupiter:5.10.0")\n    implementation("org.apache.commons:commons-lang3:3.13.0")\n}\n\napplication {\n    mainClass.set("com.example.Main")\n}',
        },
        {
          command: 'Testing with JUnit 5',
          description: 'Modern Java testing framework',
          usage: '@Test, @BeforeEach, @ParameterizedTest',
          example: 'import org.junit.jupiter.api.*;\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.ValueSource;\nimport org.junit.jupiter.params.provider.CsvSource;\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass CalculatorTest {\n    private Calculator calculator;\n    \n    @BeforeEach\n    void setUp() {\n        calculator = new Calculator();\n    }\n    \n    @AfterEach\n    void tearDown() {\n        calculator = null;\n    }\n    \n    @Test\n    @DisplayName("Addition test")\n    void testAdd() {\n        assertEquals(5, calculator.add(2, 3));\n        assertNotEquals(6, calculator.add(2, 3));\n    }\n    \n    @Test\n    void testDivideByZero() {\n        assertThrows(ArithmeticException.class, () -> {\n            calculator.divide(10, 0);\n        });\n    }\n    \n    @ParameterizedTest\n    @ValueSource(ints = {1, 2, 3, 4, 5})\n    void testSquare(int number) {\n        assertEquals(number * number, calculator.square(number));\n    }\n    \n    @ParameterizedTest\n    @CsvSource({\n        "2, 3, 5",\n        "0, 0, 0",\n        "-1, 1, 0",\n        "10, -5, 5"\n    })\n    void testAddParameterized(int a, int b, int expected) {\n        assertEquals(expected, calculator.add(a, b));\n    }\n    \n    @Test\n    void testTimeout() {\n        assertTimeout(Duration.ofSeconds(1), () -> {\n            calculator.complexCalculation();\n        });\n    }\n    \n    @RepeatedTest(3)\n    void testRepeated() {\n        assertNotNull(calculator);\n    }\n    \n    @Test\n    @Disabled("Not implemented yet")\n    void testFutureFeature() {\n        // Will be implemented later\n    }\n}',
        },
      ],
    },
  ],
};
