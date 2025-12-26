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
          command: 'Basic Java Program',
          description: 'Simple Hello World program structure',
          usage: 'public class ClassName { public static void main(String[] args) { ... } }',
          example: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
        },
        {
          command: 'Install Java on Ubuntu',
          description: 'Install OpenJDK on Ubuntu/Debian',
          usage: 'apt install openjdk-21-jdk',
          example: `# Install OpenJDK (Ubuntu/Debian)
sudo apt update
sudo apt install openjdk-21-jdk`,
        },
        {
          command: 'Install Java on macOS',
          description: 'Install OpenJDK on macOS with Homebrew',
          usage: 'brew install openjdk@21',
          example: `# Install OpenJDK (macOS with Homebrew)
brew install openjdk@21`,
        },
        {
          command: 'Set JAVA_HOME Environment',
          description: 'Configure JAVA_HOME environment variable',
          usage: 'export JAVA_HOME=/path/to/java',
          example: `# Set JAVA_HOME environment variable
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk
export PATH=$JAVA_HOME/bin:$PATH`,
        },
        {
          command: 'Verify Java Installation',
          description: 'Check Java and compiler versions',
          usage: 'java -version, javac -version',
          example: `# Verify installation
java -version
javac -version`,
        },
        {
          command: 'Compile Java File',
          description: 'Compile Java source code',
          usage: 'javac FileName.java',
          example: `# Compile Java file
javac HelloWorld.java`,
        },
        {
          command: 'Run Java Program',
          description: 'Execute compiled Java class',
          usage: 'java ClassName',
          example: `# Run compiled class
java HelloWorld`,
        },
        {
          command: 'Run with Arguments',
          description: 'Execute Java program with command line arguments',
          usage: 'java ClassName arg1 arg2',
          example: `# Run with command line arguments
java HelloWorld arg1 arg2`,
        },
        {
          command: 'Compile with Encoding',
          description: 'Compile with specific character encoding',
          usage: 'javac -encoding UTF-8',
          example: `# Compile with specific encoding
javac -encoding UTF-8 HelloWorld.java`,
        },
        {
          command: 'Run with Classpath',
          description: 'Execute Java with custom classpath',
          usage: 'java -cp path ClassName',
          example: `# Run with classpath
java -cp .:lib/* com.example.Main`,
        },
        {
          command: 'Run with JVM Options',
          description: 'Execute Java with memory and GC options',
          usage: 'java -Xmx2g -Xms512m',
          example: `# Run with JVM options
java -Xmx2g -Xms512m -XX:+UseG1GC com.example.Main`,
        },
      ],
    },
    {
      title: 'Basic Data Types & Variables',
      commands: [
        {
          command: 'Integer Primitive Types',
          description: 'All integer primitive types in Java',
          usage: 'byte, short, int, long',
          example: `// Numeric types
byte smallNumber = 127;         // 8-bit signed integer
short mediumNumber = 32767;      // 16-bit signed integer
int defaultInt = 42;             // 32-bit signed integer
long bigNumber = 123456789L;     // 64-bit signed integer (L suffix)`,
        },
        {
          command: 'Floating Point Types',
          description: 'Float and double primitive types',
          usage: 'float, double with suffixes',
          example: `// Floating-point types
float singlePrecision = 3.14f;   // 32-bit floating point (f suffix)
double doublePrecision = 3.14159; // 64-bit floating point`,
        },
        {
          command: 'Other Primitive Types',
          description: 'Character and boolean types',
          usage: 'char, boolean',
          example: `// Other primitive types
char singleChar = 'A';           // 16-bit Unicode character
boolean isActive = true;         // true or false`,
        },
        {
          command: 'Instance Variables',
          description: 'Class-level variables',
          usage: 'private type variableName',
          example: `public class VariablesExample {
  // Instance variables
  private String name = "Java";
  private final double PI = 3.14159; // Constant
  
  // Static variable
  private static int count = 0;`,
        },
        {
          command: 'Local Variables',
          description: 'Method-level variables',
          usage: 'type variableName = value',
          example: `  public void demonstrateVariables() {
    // Local variables
    int age = 25;
    String message = "Hello, World!";`,
        },
        {
          command: 'Type Inference',
          description: 'Use var for local variable type inference (Java 10+)',
          usage: 'var variableName = value',
          example: `    // Type inference (Java 10+)
    var inferredString = "Type inference";
    var inferredNumber = 42;
  }
}`,
        },
        {
          command: 'Arithmetic Operators',
          description: 'Basic arithmetic operations',
          usage: '+, -, *, /, %',
          example: `public class Operators {
  public static void main(String[] args) {
    int a = 10, b = 3;
    
    // Arithmetic
    System.out.println(a + b);  // 13
    System.out.println(a - b);  // 7
    System.out.println(a * b);  // 30
    System.out.println(a / b);  // 3 (integer division)
    System.out.println(a % b);  // 1`,
        },
        {
          command: 'Comparison Operators',
          description: 'Equality and comparison operations',
          usage: '==, !=, >, <, >=, <=',
          example: `    // Comparison
    System.out.println(a == b); // false
    System.out.println(a != b); // true
    System.out.println(a > b);  // false`,
        },
        {
          command: 'Logical Operators',
          description: 'Boolean logical operations',
          usage: '&&, ||, !',
          example: `    // Logical
    boolean x = true, y = false;
    System.out.println(x && y); // false
    System.out.println(x || y); // true
    System.out.println(!x);     // false
  }
}`,
        },
      ],
    },
    {
      title: 'Control Flow',
      commands: [
        {
          command: 'If-Else If-Else Chain',
          description: 'Multi-level conditional statements',
          usage: 'if (condition) { } else if (condition) { } else { }',
          example: `public class ConditionalExample {
  public static void main(String[] args) {
    int age = 18;
    
    if (age < 13) {
      System.out.println("Child");
    } else if (age < 18) {
      System.out.println("Teenager");
    } else if (age < 65) {
      System.out.println("Adult");
    } else {
      System.out.println("Senior");
    }`,
        },
        {
          command: 'Ternary Operator',
          description: 'Conditional expression in one line',
          usage: 'condition ? valueIfTrue : valueIfFalse',
          example: `    // Ternary operator
    String status = (age >= 18) ? "Adult" : "Minor";
    System.out.println(status);
  }
}`,
        },
        {
          command: 'Traditional Switch Statement',
          description: 'Multi-way branching with break statements',
          usage: 'switch (variable) { case value: break; default: }',
          example: `public class SwitchExample {
  public static void main(String[] args) {
    int day = 3;
    String dayName;
    
    switch (day) {
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      default:
        dayName = "Invalid day";
    }`,
        },
        {
          command: 'Enhanced Switch Expression',
          description: 'Modern switch expression syntax (Java 14+)',
          usage: 'switch (variable) { case value -> result; }',
          example: `    // Enhanced switch (Java 14+)
    String dayNameEnhanced = switch (day) {
      case 1 -> "Monday";
      case 2 -> "Tuesday";
      case 3 -> "Wednesday";
      default -> "Invalid day";
    };
  }
}`,
        },
        {
          command: 'For Loop',
          description: 'Traditional for loop with initialization, condition, increment',
          usage: 'for (init; condition; increment) { }',
          example: `public class LoopsExample {
  public static void main(String[] args) {
    // For loop
    for (int i = 0; i < 5; i++) {
      System.out.println("For loop: " + i);
    }`,
        },
        {
          command: 'Enhanced For Loop',
          description: 'For-each loop for iterating over collections/arrays',
          usage: 'for (type variable : collection) { }',
          example: `    // Enhanced for loop (for-each)
    int[] numbers = {1, 2, 3, 4, 5};
    for (int num : numbers) {
      System.out.println("For-each: " + num);
    }`,
        },
        {
          command: 'While Loop',
          description: 'Loop while condition is true',
          usage: 'while (condition) { }',
          example: `    // While loop
    int count = 0;
    while (count < 3) {
      System.out.println("While loop: " + count);
      count++;
    }`,
        },
        {
          command: 'Do-While Loop',
          description: 'Loop that executes at least once',
          usage: 'do { } while (condition)',
          example: `    // Do-while loop
    int doCount = 0;
    do {
      System.out.println("Do-while loop: " + doCount);
      doCount++;
    } while (doCount < 3);
  }
}`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Arrays and Strings',
      commands: [
        {
          command: 'Array Declaration and Initialization',
          description: 'Create and initialize arrays',
          usage: 'type[] array = new type[size]',
          example: `public class ArraysExample {
  public static void main(String[] args) {
    // Declaration and initialization
    int[] numbers = new int[5];
    int[] values = {1, 2, 3, 4, 5};`,
        },
        {
          command: 'Array Access and Modification',
          description: 'Access and modify array elements',
          usage: 'array[index] = value',
          example: `    // Access and modify
    numbers[0] = 10;
    System.out.println(values[0]); // 1`,
        },
        {
          command: 'Array Length Property',
          description: 'Get array size',
          usage: 'array.length',
          example: `    // Array length
    System.out.println(values.length); // 5`,
        },
        {
          command: 'Traditional Array Iteration',
          description: 'Iterate array with index',
          usage: 'for (int i = 0; i < array.length; i++)',
          example: `    // Iterate through array
    for (int i = 0; i < values.length; i++) {
      System.out.println(values[i]);
    }`,
        },
        {
          command: 'Enhanced Array Iteration',
          description: 'Iterate array with for-each',
          usage: 'for (type item : array)',
          example: `    // Enhanced for loop
    for (int value : values) {
      System.out.println(value);
    }`,
        },
        {
          command: 'Multidimensional Arrays',
          description: 'Create and use 2D arrays',
          usage: 'type[][] matrix = new type[rows][cols]',
          example: `    // Multidimensional arrays
    int[][] matrix = {{1, 2}, {3, 4}};
    System.out.println(matrix[0][1]); // 2`,
        },
        {
          command: 'Arrays Utility Class',
          description: 'Use Arrays class for array operations',
          usage: 'Arrays.sort(), Arrays.toString()',
          example: `    // Arrays utility class
    java.util.Arrays.sort(values);
    System.out.println(java.util.Arrays.toString(values));
  }
}`,
        },
        {
          command: 'String Basic Operations',
          description: 'String length, charAt, substring methods',
          usage: 'str.length(), str.charAt(), str.substring()',
          example: `public class StringExample {
  public static void main(String[] args) {
    String text = "Hello, World!";
    
    // Basic operations
    System.out.println(text.length());        // 13
    System.out.println(text.charAt(0));       // H
    System.out.println(text.substring(0, 5)); // Hello`,
        },
        {
          command: 'String Case Operations',
          description: 'Convert string case',
          usage: 'str.toUpperCase(), str.toLowerCase()',
          example: `    System.out.println(text.toUpperCase());    // HELLO, WORLD!
    System.out.println(text.toLowerCase());    // hello, world!`,
        },
        {
          command: 'String Comparison',
          description: 'Compare strings correctly',
          usage: 'equals(), == operator',
          example: `    // String comparison
    String str1 = "hello";
    String str2 = "hello";
    String str3 = new String("hello");
    
    System.out.println(str1.equals(str2));    // true
    System.out.println(str1 == str2);         // true (string pool)
    System.out.println(str1 == str3);         // false (different objects)`,
        },
        {
          command: 'String Manipulation',
          description: 'Replace, contains, indexOf methods',
          usage: 'str.replace(), str.contains(), str.indexOf()',
          example: `    // String manipulation
    System.out.println(text.replace("World", "Java")); // Hello, Java!
    System.out.println(text.contains("World"));        // true
    System.out.println(text.indexOf("World"));          // 7`,
        },
        {
          command: 'StringBuilder for Mutable Strings',
          description: 'Use StringBuilder for efficient string modification',
          usage: 'StringBuilder sb = new StringBuilder()',
          example: `    // StringBuilder for mutable strings
    StringBuilder sb = new StringBuilder();
    sb.append("Hello");
    sb.append(" ");
    sb.append("Java");
    System.out.println(sb.toString()); // Hello Java
  }
}`,
        },
      ],
    },
    {
      title: 'Object-Oriented Programming',
      commands: [
        {
          command: 'Class Instance Variables',
          description: 'Define class fields',
          usage: 'private type fieldName',
          example: `public class Person {
  // Instance variables
  private String name;
  private int age;`,
        },
        {
          command: 'Class Constructor',
          description: 'Initialize object state',
          usage: 'public ClassName(params) { }',
          example: `  // Constructor
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }`,
        },
        {
          command: 'Class Methods',
          description: 'Define object behavior',
          usage: 'public returnType methodName() { }',
          example: `  // Methods
  public void introduce() {
    System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
  }`,
        },
        {
          command: 'Getter Methods',
          description: 'Access private fields',
          usage: 'public getType getFieldName()',
          example: `  // Getters and setters
  public String getName() { return name; }
  public int getAge() { return age; }`,
        },
        {
          command: 'Setter Methods',
          description: 'Modify private fields',
          usage: 'public void setFieldName(type value)',
          example: `  public void setName(String name) { this.name = name; }
  public void setAge(int age) { this.age = age; }
}`,
        },
        {
          command: 'Create Object Instance',
          description: 'Instantiate class objects',
          usage: 'ClassName object = new ClassName(args)',
          example: `// Usage
public class Main {
  public static void main(String[] args) {
    Person person = new Person("John", 25);
    person.introduce();
  }
}`,
        },
        {
          command: 'Parent Class Definition',
          description: 'Define base class with protected fields',
          usage: 'public class ParentClass { protected type field; }',
          example: `public class Animal {
  protected String name;
  
  public Animal(String name) {
    this.name = name;
  }
  
  public void eat() {
    System.out.println(name + " is eating");
  }
}`,
        },
        {
          command: 'Child Class Extends Parent',
          description: 'Create subclass extending parent',
          usage: 'public class ChildClass extends ParentClass { }',
          example: `public class Dog extends Animal {
  private String breed;
  
  public Dog(String name, String breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }`,
        },
        {
          command: 'Method Overriding',
          description: 'Override parent class method',
          usage: '@Override public void methodName() { }',
          example: `  @Override
  public void eat() {
    System.out.println(name + " the " + breed + " is eating dog food");
  }`,
        },
        {
          command: 'Child Class Method',
          description: 'Add new method to child class',
          usage: 'public void newMethod() { }',
          example: `  public void bark() {
    System.out.println("Woof!");
  }
}`,
        },
        {
          command: 'Interface Definition',
          description: 'Define contract with methods',
          usage: 'public interface InterfaceName { void method(); }',
          example: `public interface Drawable {
  void draw();
  double getArea();
}`,
        },
        {
          command: 'Class Implements Interface',
          description: 'Implement interface methods',
          usage: 'public class ClassName implements Interface { }',
          example: `public class Circle implements Drawable {
  private double radius;
  
  public Circle(double radius) {
    this.radius = radius;
  }`,
        },
        {
          command: 'Interface Method Implementation',
          description: 'Implement interface methods with @Override',
          usage: '@Override public void methodName() { }',
          example: `  @Override
  public void draw() {
    System.out.println("Drawing a circle");
  }
  
  @Override
  public double getArea() {
    return Math.PI * radius * radius;
  }
}`,
        },
        {
          command: 'Another Interface Implementation',
          description: 'Different class implementing same interface',
          usage: 'public class AnotherClass implements Interface { }',
          example: `public class Rectangle implements Drawable {
  private double width, height;
  
  public Rectangle(double width, double height) {
    this.width = width;
    this.height = height;
  }
  
  @Override
  public void draw() {
    System.out.println("Drawing a rectangle");
  }
  
  @Override
  public double getArea() {
    return width * height;
  }
}`,
        },
      ],
    },
    {
      title: 'Exception Handling',
      commands: [
        {
          command: 'Basic Try-Catch Block',
          description: 'Handle exceptions with try-catch',
          usage: 'try { } catch (Exception e) { }',
          example: `public class ExceptionHandling {
  public static void main(String[] args) {
    try {
      int result = 10 / 0;
    } catch (ArithmeticException e) {
      System.out.println("Cannot divide by zero: " + e.getMessage());
    }`,
        },
        {
          command: 'Multiple Catch Blocks',
          description: 'Handle different exception types',
          usage: 'catch (Exception1 | Exception2 e)',
          example: `    } catch (Exception e) {
      System.out.println("General exception: " + e.getMessage());
    } finally {
      System.out.println("This always executes");
    }`,
        },
        {
          command: 'Multi-Catch with Pipe',
          description: 'Catch multiple exceptions in one block',
          usage: 'catch (Exception1 | Exception2 e)',
          example: `    // Multiple exceptions
    try {
      String str = null;
      System.out.println(str.length());
    } catch (NullPointerException | ArithmeticException e) {
      System.out.println("Null or arithmetic error");
    }
  }
}`,
        },
        {
          command: 'Custom Exception Class',
          description: 'Create your own exception type',
          usage: 'public class CustomException extends Exception',
          example: `public class InsufficientFundsException extends Exception {
  public InsufficientFundsException(String message) {
    super(message);
  }
}`,
        },
        {
          command: 'Throw Custom Exception',
          description: 'Throw custom exception in business logic',
          usage: 'throw new CustomException(message)',
          example: `public class BankAccount {
  private double balance;
  
  public BankAccount(double initialBalance) {
    this.balance = initialBalance;
  }
  
  public void withdraw(double amount) throws InsufficientFundsException {
    if (amount > balance) {
      throw new InsufficientFundsException("Insufficient funds: " + amount);
    }
    balance -= amount;
  }`,
        },
        {
          command: 'Getter Method',
          description: 'Access private field value',
          usage: 'public returnType getField()',
          example: `  public double getBalance() {
    return balance;
  }
}`,
        },
      ],
    },
    // Continue with more sections...
  ],
};
