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
          command: 'Installing Java Installation',
          description: 'Install JDK and set up environment',
          usage: 'Download JDK from Oracle or OpenJDK',
          example: '# Install OpenJDK (Ubuntu/Debian)\nsudo apt update\nsudo apt install openjdk-21-jdk\n\n# Install OpenJDK (macOS with Homebrew)\nbrew install openjdk@21\n\n# Set JAVA_HOME environment variable\nexport JAVA_HOME=/usr/lib/jvm/java-21-openjdk\nexport PATH=\\$JAVA_HOME/bin:\\$PATH\n\n# Verify installation\njava -version\njavac -version',
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
          description: 'Creating classes and instantiating objects',
          usage: 'class ClassName { ... } new ClassName()',
          example: 'public class Person {\n  // Instance variables\n  private String name;\n  private int age;\n  \n  // Constructor\n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  // Methods\n  public void introduce() {\n    System.out.println("Hi, I\'m " + name + " and I\'m " + age + " years old.");\n  }\n  \n  // Getters and setters\n  public String getName() { return name; }\n  public void setName(String name) { this.name = name; }\n  public int getAge() { return age; }\n  public void setAge(int age) { this.age = age; }\n}\n\n// Usage\npublic class Main {\n  public static void main(String[] args) {\n    Person person = new Person("John", 25);\n    person.introduce();\n  }\n}',
        },
        {
          command: 'Inheritance',
          description: 'Creating subclasses and extending functionality',
          usage: 'class Subclass extends Superclass { ... }',
          example: 'public class Animal {\n  protected String name;\n  \n  public Animal(String name) {\n    this.name = name;\n  }\n  \n  public void eat() {\n    System.out.println(name + " is eating");\n  }\n}\n\npublic class Dog extends Animal {\n  private String breed;\n  \n  public Dog(String name, String breed) {\n    super(name); // Call parent constructor\n    this.breed = breed;\n  }\n  \n  @Override\n  public void eat() {\n    System.out.println(name + " the " + breed + " is eating dog food");\n  }\n  \n  public void bark() {\n    System.out.println("Woof!");\n  }\n}',
        },
        {
          command: 'Polymorphism',
          description: 'Method overriding and interfaces',
          usage: '@Override, interface, implements',
          example: 'public interface Drawable {\n  void draw();\n  double getArea();\n}\n\npublic class Circle implements Drawable {\n  private double radius;\n  \n  public Circle(double radius) {\n    this.radius = radius;\n  }\n  \n  @Override\n  public void draw() {\n    System.out.println("Drawing a circle");\n  }\n  \n  @Override\n  public double getArea() {\n    return Math.PI * radius * radius;\n  }\n}\n\npublic class Rectangle implements Drawable {\n  private double width, height;\n  \n  public Rectangle(double width, double height) {\n    this.width = width;\n    this.height = height;\n  }\n  \n  @Override\n  public void draw() {\n    System.out.println("Drawing a rectangle");\n  }\n  \n  @Override\n  public double getArea() {\n    return width * height;\n  }\n}',
        },
      ],
    },
    {
      title: 'Exception Handling',
      commands: [
        {
          command: 'Try-Catch Blocks',
          description: 'Handling exceptions and errors',
          usage: 'try { ... } catch (Exception e) { ... } finally { ... }',
          example: 'public class ExceptionHandling {\n  public static void main(String[] args) {\n    try {\n      int result = 10 / 0;\n    } catch (ArithmeticException e) {\n      System.out.println("Cannot divide by zero: " + e.getMessage());\n    } catch (Exception e) {\n      System.out.println("General exception: " + e.getMessage());\n    } finally {\n      System.out.println("This always executes");\n    }\n    \n    // Multiple exceptions\n    try {\n      String str = null;\n      System.out.println(str.length());\n    } catch (NullPointerException | ArithmeticException e) {\n      System.out.println("Null or arithmetic error");\n    }\n  }\n}',
        },
        {
          command: 'Custom Exceptions',
          description: 'Creating and throwing custom exceptions',
          usage: 'throw new ExceptionType("message")',
          example: 'public class InsufficientFundsException extends Exception {\n  public InsufficientFundsException(String message) {\n    super(message);\n  }\n}\n\npublic class BankAccount {\n  private double balance;\n  \n  public BankAccount(double initialBalance) {\n    this.balance = initialBalance;\n  }\n  \n  public void withdraw(double amount) throws InsufficientFundsException {\n    if (amount > balance) {\n      throw new InsufficientFundsException("Insufficient funds: " + amount);\n    }\n    balance -= amount;\n  }\n  \n  public double getBalance() {\n    return balance;\n  }\n}',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Collections Framework',
      commands: [
        {
          command: 'List Interface',
          description: 'Working with List collections',
          usage: 'List<Type> list = new ArrayList<>();',
          example: 'import java.util.*;\n\npublic class ListExample {\n  public static void main(String[] args) {\n    // ArrayList\n    List<String> fruits = new ArrayList<>();\n    fruits.add("Apple");\n    fruits.add("Banana");\n    fruits.add(0, "Orange"); // Insert at index\n    \n    System.out.println(fruits.get(1)); // Banana\n    System.out.println(fruits.size()); // 3\n    \n    // Remove element\n    fruits.remove("Banana");\n    \n    // Iterate\n    for (String fruit : fruits) {\n      System.out.println(fruit);\n    }\n    \n    // LinkedList\n    List<Integer> numbers = new LinkedList<>();\n    numbers.add(1);\n    numbers.add(2);\n    numbers.add(3);\n    \n    // Sort list\n    Collections.sort(fruits);\n  }\n}',
        },
        {
          command: 'Set Interface',
          description: 'Working with Set collections',
          usage: 'Set<Type> set = new HashSet<>();',
          example: 'import java.util.*;\n\npublic class SetExample {\n  public static void main(String[] args) {\n    // HashSet (unordered, unique)\n    Set<String> uniqueNames = new HashSet<>();\n    uniqueNames.add("Alice");\n    uniqueNames.add("Bob");\n    uniqueNames.add("Alice"); // Duplicate, won\'t be added\n    \n    System.out.println(uniqueNames.size()); // 2\n    \n    // TreeSet (sorted)\n    Set<Integer> sortedNumbers = new TreeSet<>();\n    sortedNumbers.add(5);\n    sortedNumbers.add(2);\n    sortedNumbers.add(8);\n    sortedNumbers.add(1);\n    \n    System.out.println(sortedNumbers); // [1, 2, 5, 8]\n    \n    // LinkedHashSet (insertion order)\n    Set<String> orderedSet = new LinkedHashSet<>();\n    orderedSet.add("First");\n    orderedSet.add("Second");\n    orderedSet.add("Third");\n  }\n}',
        },
        {
          command: 'Map Interface',
          description: 'Working with Map collections',
          usage: 'Map<KeyType, ValueType> map = new HashMap<>();',
          example: 'import java.util.*;\n\npublic class MapExample {\n  public static void main(String[] args) {\n    // HashMap\n    Map<String, Integer> ages = new HashMap<>();\n    ages.put("Alice", 25);\n    ages.put("Bob", 30);\n    ages.put("Charlie", 35);\n    \n    System.out.println(ages.get("Alice")); // 25\n    System.out.println(ages.containsKey("Bob")); // true\n    System.out.println(ages.containsValue(30)); // true\n    \n    // Iterate over keys\n    for (String name : ages.keySet()) {\n      System.out.println(name + ": " + ages.get(name));\n    }\n    \n    // TreeMap (sorted by key)\n    Map<String, String> phoneBook = new TreeMap<>();\n    phoneBook.put("Alice", "555-1234");\n    phoneBook.put("Bob", "555-5678");\n    phoneBook.put("Charlie", "555-9012");\n    \n    // LinkedHashMap (insertion order)\n    Map<Integer, String> orderedMap = new LinkedHashMap<>();\n    orderedMap.put(1, "First");\n    orderedMap.put(2, "Second");\n    orderedMap.put(3, "Third");\n  }\n}',
        },
      ],
    },
    {
      title: 'Generics',
      commands: [
        {
          command: 'Generic Classes',
          description: 'Creating type-safe classes and methods',
          usage: 'class ClassName<T> { ... }',
          example: 'public class Box<T> {\n  private T content;\n  \n  public void setContent(T content) {\n    this.content = content;\n  }\n  \n  public T getContent() {\n    return content;\n  }\n  \n  public static void main(String[] args) {\n    Box<String> stringBox = new Box<>();\n    stringBox.setContent("Hello Generics");\n    \n    Box<Integer> intBox = new Box<>();\n    intBox.setContent(42);\n    \n    System.out.println(stringBox.getContent());\n    System.out.println(intBox.getContent());\n  }\n}',
        },
        {
          command: 'Generic Methods',
          description: 'Creating type-safe methods',
          usage: '<T> T methodName(T parameter)',
          example: 'public class GenericMethods {\n  // Generic method\n  public static <T> void printArray(T[] array) {\n    for (T element : array) {\n      System.out.println(element);\n    }\n  }\n  \n  // Generic method with multiple type parameters\n  public static <K, V> boolean compareMaps(Map<K, V> map1, Map<K, V> map2) {\n    return map1.equals(map2);\n  }\n  \n  // Bounded type parameter\n  public static <T extends Number> double sum(T[] numbers) {\n    double total = 0;\n    for (T num : numbers) {\n      total += num.doubleValue();\n    }\n    return total;\n  }\n  \n  public static void main(String[] args) {\n    String[] strings = {"A", "B", "C"};\n    printArray(strings);\n    \n    Integer[] integers = {1, 2, 3};\n    System.out.println("Sum: " + sum(integers));\n  }\n}',
        },
        {
          command: 'Wildcards',
          description: 'Using wildcards in generics',
          usage: '? extends Type, ? super Type',
          example: 'import java.util.*;\n\npublic class Wildcards {\n  // Upper bounded wildcard\n  public static double sumOfList(List<? extends Number> list) {\n    double sum = 0.0;\n    for (Number n : list) {\n      sum += n.doubleValue();\n    }\n    return sum;\n  }\n  \n  // Lower bounded wildcard\n  public static void addNumbers(List<? super Integer> list) {\n    for (int i = 1; i <= 5; i++) {\n      list.add(i);\n    }\n  }\n  \n  // Unbounded wildcard\n  public static void printList(List<?> list) {\n    for (Object elem : list) {\n      System.out.print(elem + " ");\n    }\n    System.out.println();\n  }\n  \n  public static void main(String[] args) {\n    List<Integer> intList = Arrays.asList(1, 2, 3);\n    List<Double> doubleList = Arrays.asList(1.1, 2.2, 3.3);\n    \n    System.out.println("Sum of ints: " + sumOfList(intList));\n    System.out.println("Sum of doubles: " + sumOfList(doubleList));\n  }\n}',
        },
      ],
    },
    {
      title: 'Java 8+ Features',
      commands: [
        {
          command: 'Lambda Expressions',
          description: 'Functional programming with lambdas',
          usage: '(parameters) -> expression',
          example: 'import java.util.*;\nimport java.util.function.*;\n\npublic class LambdaExample {\n  public static void main(String[] args) {\n    // List of strings\n    List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");\n    \n    // Traditional approach\n    Collections.sort(names, new Comparator<String>() {\n      @Override\n      public int compare(String a, String b) {\n        return a.compareTo(b);\n      }\n    });\n    \n    // Lambda expression\n    Collections.sort(names, (a, b) -> a.compareTo(b));\n    \n    // Method reference\n    Collections.sort(names, String::compareTo);\n    \n    // Functional interfaces\n    Predicate<String> startsWithA = str -> str.startsWith("A");\n    Function<String, Integer> stringLength = String::length;\n    Consumer<String> printer = str -> System.out.println(str);\n    Supplier<String> stringSupplier = () -> "Hello World";\n    \n    // Using lambdas with streams\n    names.stream()\n         .filter(name -> name.length() > 4)\n         .map(String::toUpperCase)\n         .forEach(System.out::println);\n  }\n}',
        },
        {
          command: 'Stream API',
          description: 'Processing collections with streams',
          usage: 'collection.stream().filter().map().collect()',
          example: 'import java.util.*;\nimport java.util.stream.*;\n\npublic class StreamExample {\n  public static void main(String[] args) {\n    List<Person> people = Arrays.asList(\n      new Person("Alice", 25, "Engineering"),\n      new Person("Bob", 30, "Sales"),\n      new Person("Charlie", 35, "Engineering"),\n      new Person("David", 28, "Marketing")\n    );\n    \n    // Filter and map\n    List<String> engineeringNames = people.stream()\n        .filter(person -> person.getDepartment().equals("Engineering"))\n        .map(Person::getName)\n        .collect(Collectors.toList());\n    \n    // Reduce\n    int totalAge = people.stream()\n        .mapToInt(Person::getAge)\n        .sum();\n    \n    // Grouping\n    Map<String, List<Person>> byDepartment = people.stream()\n        .collect(Collectors.groupingBy(Person::getDepartment));\n    \n    // Find operations\n    Optional<Person> firstEngineer = people.stream()\n        .filter(p -> p.getDepartment().equals("Engineering"))\n        .findFirst();\n    \n    // Sorting\n    List<Person> sortedByName = people.stream()\n        .sorted(Comparator.comparing(Person::getName))\n        .collect(Collectors.toList());\n  }\n  \n  static class Person {\n    private String name;\n    private int age;\n    private String department;\n    \n    public Person(String name, int age, String department) {\n      this.name = name;\n      this.age = age;\n      this.department = department;\n    }\n    \n    // Getters\n    public String getName() { return name; }\n    public int getAge() { return age; }\n    public String getDepartment() { return department; }\n  }\n}',
        },
        {
          command: 'Optional Class',
          description: 'Handling null values safely',
          usage: 'Optional<T> optional = Optional.ofNullable(value);',
          example: 'import java.util.*;\n\npublic class OptionalExample {\n  public static void main(String[] args) {\n    // Creating Optionals\n    Optional<String> nonEmpty = Optional.of("Hello");\n    Optional<String> empty = Optional.empty();\n    Optional<String> nullable = Optional.ofNullable(null);\n    \n    // Check if present\n    if (nonEmpty.isPresent()) {\n      System.out.println(nonEmpty.get());\n    }\n    \n    // Or else\n    String result = nullable.orElse("Default Value");\n    System.out.println(result);\n    \n    // Or else get\n    String computed = nullable.orElseGet(() -> "Computed Value");\n    \n    // Or else throw\n    try {\n      String value = nullable.orElseThrow(() -> new IllegalArgumentException("Value not present"));\n    } catch (IllegalArgumentException e) {\n      System.out.println("Caught exception: " + e.getMessage());\n    }\n    \n    // Map and filter\n    Optional<String> upperCase = nonEmpty.map(String::toUpperCase);\n    Optional<String> filtered = nonEmpty.filter(s -> s.length() > 3);\n    \n    // Chaining operations\n    Optional<Integer> length = nullable\n        .map(String::length)\n        .filter(len -> len > 0);\n  }\n}',
        },
      ],
    },
    {
      title: 'Concurrency',
      commands: [
        {
          command: 'Threads',
          description: 'Creating and managing threads',
          usage: 'new Thread(() -> { ... }).start()',
          example: 'public class ThreadExample {\n  public static void main(String[] args) {\n    // Using Runnable\n    Runnable task = () -> {\n      for (int i = 0; i < 5; i++) {\n        System.out.println("Worker thread: " + i);\n        try {\n          Thread.sleep(1000);\n        } catch (InterruptedException e) {\n          Thread.currentThread().interrupt();\n        }\n      }\n    };\n    \n    Thread workerThread = new Thread(task);\n    workerThread.start();\n    \n    // Main thread continues\n    for (int i = 0; i < 5; i++) {\n      System.out.println("Main thread: " + i);\n      try {\n        Thread.sleep(500);\n      } catch (InterruptedException e) {\n        Thread.currentThread().interrupt();\n      }\n    }\n    \n    // Wait for worker thread to finish\n    try {\n      workerThread.join();\n    } catch (InterruptedException e) {\n      Thread.currentThread().interrupt();\n    }\n  }\n}',
        },
        {
          command: 'Thread Pools',
          description: 'Using ExecutorService for thread management',
          usage: 'ExecutorService executor = Executors.newFixedThreadPool(4);',
          example: 'import java.util.concurrent.*;\nimport java.util.*;\n\npublic class ThreadPoolExample {\n  public static void main(String[] args) {\n    // Create thread pool\n    ExecutorService executor = Executors.newFixedThreadPool(4);\n    \n    List<Future<String>> futures = new ArrayList<>();\n    \n    // Submit tasks\n    for (int i = 0; i < 10; i++) {\n      final int taskId = i;\n      Future<String> future = executor.submit(() -> {\n        Thread.sleep(1000);\n        return "Task " + taskId + " completed";\n      });\n      futures.add(future);\n    }\n    \n    // Get results\n    for (Future<String> future : futures) {\n      try {\n        String result = future.get();\n        System.out.println(result);\n      } catch (InterruptedException | ExecutionException e) {\n        e.printStackTrace();\n      }\n    }\n    \n    // Shutdown executor\n    executor.shutdown();\n    try {\n      if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {\n        executor.shutdownNow();\n      }\n    } catch (InterruptedException e) {\n      executor.shutdownNow();\n    }\n  }\n}',
        },
        {
          command: 'Synchronization',
          description: 'Thread synchronization and locks',
          usage: 'synchronized, ReentrantLock, Semaphore',
          example: 'import java.util.concurrent.locks.*;\nimport java.util.concurrent.*;\n\npublic class SynchronizationExample {\n  private static int counter = 0;\n  private static final Object lock = new Object();\n  private static final ReentrantLock reentrantLock = new ReentrantLock();\n  private static final Semaphore semaphore = new Semaphore(3);\n  \n  // Synchronized method\n  public static synchronized void incrementCounter() {\n    counter++;\n  }\n  \n  // Synchronized block\n  public static void incrementWithBlock() {\n    synchronized (lock) {\n      counter++;\n    }\n  }\n  \n  // Using ReentrantLock\n  public static void incrementWithLock() {\n    reentrantLock.lock();\n    try {\n      counter++;\n    } finally {\n      reentrantLock.unlock();\n    }\n  }\n  \n  // Using Semaphore\n  public static void performTask() {\n    try {\n      semaphore.acquire();\n      System.out.println("Performing task: " + Thread.currentThread().getName());\n      Thread.sleep(1000);\n    } catch (InterruptedException e) {\n      Thread.currentThread().interrupt();\n    } finally {\n      semaphore.release();\n    }\n  }\n  \n  public static void main(String[] args) {\n    // Test synchronization\n    ExecutorService executor = Executors.newFixedThreadPool(10);\n    \n    for (int i = 0; i < 100; i++) {\n      executor.submit(() -> incrementWithLock());\n    }\n    \n    executor.shutdown();\n    System.out.println("Final counter: " + counter);\n  }\n}',
        },
      ],
    },
    {
      title: 'Java Best Practices',
      commands: [
        {
          command: 'Code Style and Conventions',
          description: 'Following Java coding standards',
          usage: 'Naming conventions, code organization',
          example: '// Package naming: lowercase, reverse domain\npackage com.example.myapp;\n\n// Class naming: PascalCase\npublic class UserService {\n  // Constants: UPPER_SNAKE_CASE\n  private static final int MAX_ATTEMPTS = 3;\n  \n  // Variables: camelCase\n  private String userName;\n  private int userAge;\n  \n  // Methods: camelCase, verbs\n  public void createUser() { ... }\n  public boolean isValid() { ... }\n  \n  // Private helper methods\n  private void validateInput() { ... }\n}\n\n// Interface naming: often adjectives\npublic interface Serializable { ... }\npublic interface Runnable { ... }\n\n// Enum naming: PascalCase\npublic enum OrderStatus {\n  PENDING,\n  CONFIRMED,\n  SHIPPED,\n  DELIVERED\n}',
        },
        {
          command: 'Memory Management',
          description: 'Best practices for memory usage',
          usage: 'Avoid memory leaks, use appropriate data structures',
          example: 'public class MemoryManagement {\n  // Use StringBuilder for string concatenation in loops\n  public String buildString(List<String> parts) {\n    StringBuilder sb = new StringBuilder();\n    for (String part : parts) {\n      sb.append(part).append(" ");\n    }\n    return sb.toString().trim();\n  }\n  \n  // Close resources properly\n  public void readFile(String filename) {\n    try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {\n      String line;\n      while ((line = reader.readLine()) != null) {\n        System.out.println(line);\n      }\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n  \n  // Use appropriate collection types\n  public void collectionExamples() {\n    // For frequent access by index: ArrayList\n    List<String> list = new ArrayList<>();\n    \n    // For frequent insertions/deletions: LinkedList\n    List<Integer> linkedList = new LinkedList<>();\n    \n    // For unique elements: HashSet\n    Set<String> uniqueSet = new HashSet<>();\n    \n    // For key-value pairs: HashMap\n    Map<String, Integer> map = new HashMap<>();\n    \n    // For thread-safe operations: ConcurrentHashMap\n    Map<String, Integer> concurrentMap = new ConcurrentHashMap<>();\n  }\n}',
        },
        {
          command: 'Error Handling',
          description: 'Best practices for exception handling',
          usage: 'Specific exceptions, proper logging, resource cleanup',
          example: 'import java.io.*;\nimport java.util.logging.*;\n\npublic class ErrorHandling {\n  private static final Logger logger = Logger.getLogger(ErrorHandling.class.getName());\n  \n  // Be specific with exceptions\n  public void processData(String input) throws InvalidDataException {\n    if (input == null || input.trim().isEmpty()) {\n      throw new InvalidDataException("Input cannot be null or empty");\n    }\n    \n    try {\n      // Process data\n      int result = Integer.parseInt(input);\n      if (result < 0) {\n        throw new InvalidDataException("Value must be positive");\n      }\n    } catch (NumberFormatException e) {\n      throw new InvalidDataException("Invalid number format: " + input, e);\n    }\n  }\n  \n  // Log exceptions properly\n  public void safeOperation() {\n    try {\n      riskyOperation();\n    } catch (SpecificException e) {\n      logger.log(Level.SEVERE, "Specific error occurred", e);\n      // Handle specific exception\n    } catch (Exception e) {\n      logger.log(Level.WARNING, "Unexpected error", e);\n      // Handle general exception\n    } finally {\n      // Cleanup\n    }\n  }\n  \n  // Custom exception\n  public static class InvalidDataException extends Exception {\n    public InvalidDataException(String message) {\n      super(message);\n    }\n    \n    public InvalidDataException(String message, Throwable cause) {\n      super(message, cause);\n    }\n  }\n  \n  private void riskyOperation() throws SpecificException {\n    // Implementation\n  }\n  \n  private static class SpecificException extends Exception {\n    public SpecificException(String message) {\n      super(message);\n    }\n  }\n}',
        },
      ],
    },
  ],
};
