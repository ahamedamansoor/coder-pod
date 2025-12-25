import { Code } from 'lucide-react';

export const javaCheatsheet = {
  id: 'java',
  name: 'Java',
  description: 'Complete Java guide from beginner fundamentals to expert-level programming',
  icon: Code,
  colorTheme: 'orange' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started',
      commands: [
        {
          command: 'Java Program Structure',
          description: 'Basic structure of a Java program',
          usage: 'public class ClassName { public static void main(String[] args) { ... } }',
          example: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
        },
        {
          command: 'Compiling & Running',
          description: 'Basic JDK commands',
          usage: 'javac FileName.java && java ClassName',
          example: 'javac HelloWorld.java\njava HelloWorld\njava HelloWorld arg1 arg2  # with arguments',
        },
        {
          command: 'Comments',
          description: 'Adding comments to code',
          usage: '// single line or /* multi line */',
          example: '// This is a single line comment\n/* This is a\n   multi-line comment */\n/**\n * JavaDoc comment\n */',
        },
        {
          command: 'Primitive Data Types',
          description: 'Basic data types in Java',
          usage: 'int, double, char, boolean, etc.',
          example: 'int age = 25;\ndouble price = 99.99;\nchar grade = \'A\';\nboolean isActive = true;\nbyte smallNumber = 127;\nshort mediumNumber = 32767;\nlong bigNumber = 123456789L;\nfloat precise = 3.14f;',
        },
        {
          command: 'Variables & Constants',
          description: 'Declaring variables and constants',
          usage: 'type variableName = value; final type CONSTANT = value;',
          example: 'String name = "Java";\nfinal double PI = 3.14159;\nint count = 0;\ncount = count + 1; // increment',
        },
      ],
    },
    {
      title: 'Basic Operators',
      commands: [
        {
          command: 'Arithmetic Operators',
          description: 'Basic mathematical operations',
          usage: '+, -, *, /, %',
          example: 'int sum = 5 + 3;        // 8\nint diff = 10 - 4;      // 6\nint product = 6 * 7;    // 42\nint quotient = 15 / 3;   // 5\nint remainder = 17 % 5;   // 2',
        },
        {
          command: 'Comparison Operators',
          description: 'Compare values',
          usage: '==, !=, >, <, >=, <=',
          example: 'int a = 5, b = 10;\nboolean equal = (a == b);     // false\nboolean notEqual = (a != b);  // true\nboolean greater = (b > a);     // true',
        },
        {
          command: 'Logical Operators',
          description: 'Combine conditions',
          usage: '&&, ||, !',
          example: 'boolean x = true, y = false;\nboolean and = x && y;  // false\nboolean or = x || y;   // true\nboolean not = !x;      // false',
        },
        {
          command: 'Assignment Operators',
          description: 'Assign and modify values',
          usage: '=, +=, -=, *=, /=',
          example: 'int x = 10;\nx += 5;  // x = 15\nx *= 2;  // x = 30\nx -= 10; // x = 20',
        },
        {
          command: 'Increment/Decrement',
          description: 'Increase or decrease by 1',
          usage: '++, --',
          example: 'int count = 5;\ncount++;     // 6 (postfix)\n++count;     // 7 (prefix)\ncount--;     // 6\n--count;     // 5',
        },
      ],
    },
    {
      title: 'Control Flow',
      commands: [
        {
          command: 'if-else Statements',
          description: 'Conditional execution',
          usage: 'if (condition) { ... } else if (condition) { ... } else { ... }',
          example: 'int score = 85;\nif (score >= 90) {\n  System.out.println("A");\n} else if (score >= 80) {\n  System.out.println("B");\n} else {\n  System.out.println("C");\n}',
        },
        {
          command: 'switch Statement',
          description: 'Multiple condition handling',
          usage: 'switch (variable) { case value: ...; break; default: ...; }',
          example: 'int day = 2;\nswitch (day) {\n  case 1: System.out.println("Monday"); break;\n  case 2: System.out.println("Tuesday"); break;\n  default: System.out.println("Other day");\n}',
        },
        {
          command: 'for Loop',
          description: 'Iterate specific number of times',
          usage: 'for (initialization; condition; increment) { ... }',
          example: 'for (int i = 1; i <= 5; i++) {\n  System.out.println("Count: " + i);\n}\n\n// Enhanced for loop\nString[] fruits = {"Apple", "Banana", "Orange"};\nfor (String fruit : fruits) {\n  System.out.println(fruit);\n}',
        },
        {
          command: 'while Loop',
          description: 'Loop based on condition',
          usage: 'while (condition) { ... }',
          example: 'int count = 0;\nwhile (count < 5) {\n  System.out.println("Count: " + count);\n  count++;\n}',
        },
        {
          command: 'do-while Loop',
          description: 'Execute at least once, then check condition',
          usage: 'do { ... } while (condition);',
          example: 'int number;\ndo {\n  number = (int)(Math.random() * 10);\n  System.out.println("Number: " + number);\n} while (number != 7);',
        },
        {
          command: 'break & continue',
          description: 'Control loop execution',
          usage: 'break; // exit loop, continue; // skip to next iteration',
          example: 'for (int i = 1; i <= 10; i++) {\n  if (i == 5) continue;  // skip 5\n  if (i == 8) break;     // exit at 8\n  System.out.println(i);\n}',
        },
      ],
    },
    {
      title: 'Arrays & Strings',
      commands: [
        {
          command: 'Array Declaration',
          description: 'Create and initialize arrays',
          usage: 'type[] arrayName = new type[size];',
          example: 'int[] numbers = new int[5];\nnumbers[0] = 10;\nnumbers[1] = 20;\n\n// Initialization\nString[] names = {"Alice", "Bob", "Charlie"};\nint[] scores = {95, 87, 92};',
        },
        {
          command: 'Array Operations',
          description: 'Work with arrays',
          usage: 'arrayName[index], arrayName.length',
          example: 'int[] arr = {10, 20, 30, 40, 50};\nSystem.out.println(arr[0]);     // 10\nSystem.out.println(arr.length); // 5\n\n// Iterate array\nfor (int i = 0; i < arr.length; i++) {\n  System.out.println(arr[i]);\n}',
        },
        {
          command: 'String Basics',
          description: 'String creation and methods',
          usage: 'String str = "text"; str.method()',
          example: 'String name = "Java Programming";\nint length = name.length();           // 16\nchar first = name.charAt(0);          // J\nString upper = name.toUpperCase();     // JAVA PROGRAMMING\nString lower = name.toLowerCase();     // java programming',
        },
        {
          command: 'String Comparison',
          description: 'Compare strings properly',
          usage: 'equals(), equalsIgnoreCase(), compareTo()',
          example: 'String s1 = "Hello";\nString s2 = "hello";\nboolean same = s1.equals(s2);           // false\nboolean ignoreCase = s1.equalsIgnoreCase(s2); // true\nint compare = s1.compareTo(s2);       // positive value',
        },
        {
          command: 'String Manipulation',
          description: 'Modify and extract parts of strings',
          usage: 'substring(), replace(), trim(), split()',
          example: 'String text = "  Java Programming  ";\nString trimmed = text.trim();           // "Java Programming"\nString sub = text.substring(0, 4);     // "  Ja"\nString replaced = text.replace("Java", "Python");\nString[] words = text.split(" ");      // ["", "Java", "Programming", ""]',
        },
      ],
    },
    {
      title: 'Basic OOP',
      commands: [
        {
          command: 'Class Definition',
          description: 'Create a class blueprint',
          usage: 'public class ClassName { fields; methods; }',
          example: 'public class Student {\n  String name;\n  int age;\n  \n  public void study() {\n    System.out.println(name + " is studying");\n  }\n}',
        },
        {
          command: 'Object Creation',
          description: 'Create instances of classes',
          usage: 'ClassName objectName = new ClassName();',
          example: 'Student student1 = new Student();\nstudent1.name = "Alice";\nstudent1.age = 20;\nstudent1.study();',
        },
        {
          command: 'Constructors',
          description: 'Initialize objects',
          usage: 'public ClassName(parameters) { ... }',
          example: 'public class Student {\n  String name;\n  int age;\n  \n  public Student(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n// Usage\nStudent s = new Student("Bob", 21);',
        },
        {
          command: 'Methods',
          description: 'Define class behaviors',
          usage: 'returnType methodName(parameters) { ... }',
          example: 'public class Calculator {\n  public int add(int a, int b) {\n    return a + b;\n  }\n  \n  public void printResult(int result) {\n    System.out.println("Result: " + result);\n  }\n}',
        },
        {
          command: 'Static Members',
          description: 'Class-level fields and methods',
          usage: 'static type fieldName; static returnType methodName()',
          example: 'public class MathUtils {\n  public static final double PI = 3.14159;\n  \n  public static int add(int a, int b) {\n    return a + b;\n  }\n}\n\n// Usage\nint sum = MathUtils.add(5, 3);\ndouble pi = MathUtils.PI;',
        },
        {
          command: 'this Keyword',
          description: 'Reference to current object',
          usage: 'this.field, this.method()',
          example: 'public class Person {\n  String name;\n  \n  public Person(String name) {\n    this.name = name;  // this refers to current object\n  }\n  \n  public void introduce() {\n    System.out.println("I am " + this.name);\n  }\n}',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Inheritance & Polymorphism',
      commands: [
        {
          command: 'Inheritance',
          description: 'Class extending another class',
          usage: 'class Child extends Parent { ... }',
          example: 'public class Animal {\n  protected String name;\n  \n  public void eat() {\n    System.out.println("Animal is eating");\n  }\n}\n\npublic class Dog extends Animal {\n  public void bark() {\n    System.out.println("Dog is barking");\n  }\n}',
        },
        {
          command: 'Method Overriding',
          description: 'Redefine parent class method',
          usage: '@Override public returnType methodName() { ... }',
          example: 'public class Dog extends Animal {\n  @Override\n  public void eat() {\n    System.out.println("Dog is eating dog food");\n  }\n}',
        },
        {
          command: 'super Keyword',
          description: 'Access parent class members',
          usage: 'super.method(), super.field',
          example: 'public class Dog extends Animal {\n  public Dog(String name) {\n    super(name);  // call parent constructor\n  }\n  \n  @Override\n  public void eat() {\n    super.eat();  // call parent method\n    System.out.println("Dog food finished");\n  }\n}',
        },
        {
          command: 'Polymorphism',
          description: 'Treat objects of different classes uniformly',
          usage: 'ParentClass obj = new ChildClass();',
          example: 'Animal myDog = new Dog();\nAnimal myCat = new Cat();\nmyDog.eat();  // Calls Dog\'s eat method\nmyCat.eat();  // Calls Cat\'s eat method',
        },
        {
          command: 'Abstract Classes',
          description: 'Classes that cannot be instantiated',
          usage: 'abstract class ClassName { abstract returnType method(); }',
          example: 'public abstract class Shape {\n  protected String color;\n  \n  public abstract double getArea();\n  \n  public void setColor(String color) {\n    this.color = color;\n  }\n}\n\npublic class Circle extends Shape {\n  private double radius;\n  \n  @Override\n  public double getArea() {\n    return Math.PI * radius * radius;\n  }\n}',
        },
      ],
    },
    {
      title: 'Interfaces & Enums',
      commands: [
        {
          command: 'Interface Definition',
          description: 'Define contract for classes',
          usage: 'interface InterfaceName { returnType methodName(); }',
          example: 'public interface Drawable {\n  void draw();\n  double getArea();\n}\n\npublic interface Movable {\n  void move(int x, int y);\n}',
        },
        {
          command: 'Interface Implementation',
          description: 'Class implementing interface',
          usage: 'class ClassName implements InterfaceName { ... }',
          example: 'public class Rectangle implements Drawable, Movable {\n  private double width, height;\n  private int x, y;\n  \n  @Override\n  public void draw() {\n    System.out.println("Drawing rectangle");\n  }\n  \n  @Override\n  public double getArea() {\n    return width * height;\n  }\n  \n  @Override\n  public void move(int x, int y) {\n    this.x = x;\n    this.y = y;\n  }\n}',
        },
        {
          command: 'Default Methods in Interfaces',
          description: 'Methods with implementation in interfaces (Java 8+)',
          usage: 'default returnType methodName() { ... }',
          example: 'public interface Drawable {\n  void draw();\n  \n  default void printInfo() {\n    System.out.println("This is a drawable object");\n  }\n}',
        },
        {
          command: 'Enum Definition',
          description: 'Define fixed set of constants',
          usage: 'enum EnumName { CONSTANT1, CONSTANT2, ... }',
          example: 'public enum Day {\n  MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY\n}\n\npublic enum Season {\n  SPRING("Warm"), SUMMER("Hot"), FALL("Cool"), WINTER("Cold");\n  \n  private String description;\n  \n  Season(String description) {\n    this.description = description;\n  }\n  \n  public String getDescription() {\n    return description;\n  }\n}',
        },
        {
          command: 'Enum Usage',
          description: 'Use enum constants',
          usage: 'EnumName.CONSTANT',
          example: 'Day today = Day.MONDAY;\nSystem.out.println("Today is: " + today);\n\n// Iterate through enum\nfor (Day day : Day.values()) {\n  System.out.println(day);\n}\n\n// Switch with enum\nswitch (today) {\n  case MONDAY:\n    System.out.println("Start of week");\n    break;\n  case FRIDAY:\n    System.out.println("End of week");\n    break;\n}',
        },
      ],
    },
    {
      title: 'Exception Handling',
      commands: [
        {
          command: 'Try-Catch Block',
          description: 'Handle exceptions',
          usage: 'try { ... } catch (ExceptionType e) { ... }',
          example: 'try {\n  int result = 10 / 0;\n} catch (ArithmeticException e) {\n  System.out.println("Cannot divide by zero");\n} catch (Exception e) {\n  System.out.println("Other error: " + e.getMessage());\n}',
        },
        {
          command: 'Finally Block',
          description: 'Code that always executes',
          usage: 'try { ... } catch { ... } finally { ... }',
          example: 'try {\n  // risky code\n} catch (Exception e) {\n  System.out.println("Error occurred");\n} finally {\n  System.out.println("This always runs");\n}',
        },
        {
          command: 'Throw Exceptions',
          description: 'Manually throw exceptions',
          usage: 'throw new ExceptionType("message");',
          example: 'public void setAge(int age) {\n  if (age < 0) {\n    throw new IllegalArgumentException("Age cannot be negative");\n  }\n  this.age = age;\n}',
        },
        {
          command: 'Throws Clause',
          description: 'Declare exceptions that method can throw',
          usage: 'returnType methodName() throws ExceptionType { ... }',
          example: 'public void readFile(String filename) throws IOException {\n  FileReader file = new FileReader(filename);\n  // read file\n}',
        },
        {
          command: 'Custom Exceptions',
          description: 'Create your own exception classes',
          usage: 'class CustomException extends Exception { ... }',
          example: 'public class InsufficientFundsException extends Exception {\n  public InsufficientFundsException(String message) {\n    super(message);\n  }\n}\n\n// Usage\nif (balance < amount) {\n  throw new InsufficientFundsException("Insufficient balance");\n}',
        },
        {
          command: 'Try-with-Resources',
          description: 'Auto-close resources (Java 7+)',
          usage: 'try (Resource r = ...) { ... }',
          example: 'try (FileReader fr = new FileReader("file.txt");\n     BufferedReader br = new BufferedReader(fr)) {\n  String line = br.readLine();\n  System.out.println(line);\n} catch (IOException e) {\n  e.printStackTrace();\n} // Resources closed automatically',
        },
      ],
    },
    {
      title: 'Collections Framework',
      commands: [
        {
          command: 'ArrayList',
          description: 'Dynamic array list',
          usage: 'List<Type> list = new ArrayList<>();',
          example: 'List<String> fruits = new ArrayList<>();\nfruits.add("Apple");\nfruits.add("Banana");\nfruits.add(0, "Orange");  // insert at index\nSystem.out.println(fruits.get(1));  // Banana\nfruits.remove("Apple");\nSystem.out.println(fruits.size());  // 2',
        },
        {
          command: 'LinkedList',
          description: 'Doubly-linked list',
          usage: 'List<Type> list = new LinkedList<>();',
          example: 'LinkedList<Integer> numbers = new LinkedList<>();\nnumbers.addFirst(10);\nnumbers.addLast(20);\nnumbers.add(15);\nSystem.out.println(numbers.getFirst());  // 10\nSystem.out.println(numbers.getLast());   // 20',
        },
        {
          command: 'HashSet',
          description: 'Unique elements, unordered',
          usage: 'Set<Type> set = new HashSet<>();',
          example: 'Set<String> uniqueNames = new HashSet<>();\nuniqueNames.add("Alice");\nuniqueNames.add("Bob");\nuniqueNames.add("Alice");  // ignored - duplicate\nSystem.out.println(uniqueNames.contains("Bob"));  // true\nSystem.out.println(uniqueNames.size());  // 2',
        },
        {
          command: 'TreeSet',
          description: 'Sorted unique elements',
          usage: 'Set<Type> set = new TreeSet<>();',
          example: 'Set<Integer> sortedNumbers = new TreeSet<>();\nsortedNumbers.add(30);\nsortedNumbers.add(10);\nsortedNumbers.add(20);\n// Prints in sorted order: 10, 20, 30\nfor (Integer num : sortedNumbers) {\n  System.out.println(num);\n}',
        },
        {
          command: 'HashMap',
          description: 'Key-value pairs',
          usage: 'Map<KeyType, ValueType> map = new HashMap<>();',
          example: 'Map<String, Integer> ages = new HashMap<>();\nages.put("Alice", 25);\nages.put("Bob", 30);\nSystem.out.println(ages.get("Alice"));  // 25\nSystem.out.println(ages.containsKey("Bob"));  // true\nages.remove("Alice");',
        },
        {
          command: 'TreeMap',
          description: 'Sorted key-value pairs',
          usage: 'Map<KeyType, ValueType> map = new TreeMap<>();',
          example: 'Map<String, String> capitals = new TreeMap<>();\ncapitals.put("France", "Paris");\ncapitals.put("Germany", "Berlin");\ncapitals.put("Spain", "Madrid");\n// Keys are sorted alphabetically\nfor (String country : capitals.keySet()) {\n  System.out.println(country + ": " + capitals.get(country));\n}',
        },
        {
          command: 'Iterator',
          description: 'Traverse collections',
          usage: 'Iterator<Type> iterator = collection.iterator();',
          example: 'List<String> list = Arrays.asList("A", "B", "C");\nIterator<String> iterator = list.iterator();\nwhile (iterator.hasNext()) {\n  String item = iterator.next();\n  System.out.println(item);\n  if (item.equals("B")) {\n    iterator.remove();  // safe removal\n  }\n}',
        },
      ],
    },
    {
      title: 'File I/O',
      commands: [
        {
          command: 'Reading Text Files',
          description: 'Read content from text files',
          usage: 'FileReader, BufferedReader',
          example: 'try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {\n  String line;\n  while ((line = reader.readLine()) != null) {\n    System.out.println(line);\n  }\n} catch (IOException e) {\n  e.printStackTrace();\n}',
        },
        {
          command: 'Writing Text Files',
          description: 'Write content to text files',
          usage: 'FileWriter, BufferedWriter',
          example: 'try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {\n  writer.write("Hello, World!");\n  writer.newLine();\n  writer.write("This is a new line");\n} catch (IOException e) {\n  e.printStackTrace();\n}',
        },
        {
          command: 'File Class',
          description: 'File and directory operations',
          usage: 'File file = new File(path);',
          example: 'File file = new File("test.txt");\nSystem.out.println("Exists: " + file.exists());\nSystem.out.println("Can read: " + file.canRead());\nSystem.out.println("Length: " + file.length());\nfile.createNewFile();  // create new file\nfile.delete();  // delete file',
        },
        {
          command: 'Reading Properties Files',
          description: 'Read configuration files',
          usage: 'Properties class',
          example: 'Properties props = new Properties();\ntry (FileInputStream fis = new FileInputStream("config.properties")) {\n  props.load(fis);\n  String dbUrl = props.getProperty("database.url");\n  int timeout = Integer.parseInt(props.getProperty("connection.timeout"));\n}',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Generics',
      commands: [
        {
          command: 'Generic Class',
          description: 'Class with type parameters',
          usage: 'class ClassName<T> { ... }',
          example: 'public class Box<T> {\n  private T content;\n  \n  public void setContent(T content) {\n    this.content = content;\n  }\n  \n  public T getContent() {\n    return content;\n  }\n}\n\n// Usage\nBox<String> stringBox = new Box<>();\nstringBox.setContent("Hello");\nBox<Integer> intBox = new Box<>();\nintBox.setContent(123);',
        },
        {
          command: 'Generic Method',
          description: 'Method with type parameters',
          usage: '<T> returnType methodName(T param) { ... }',
          example: 'public <T> void swap(T[] array, int i, int j) {\n  T temp = array[i];\n  array[i] = array[j];\n  array[j] = temp;\n}\n\n// Usage\nString[] names = {"Alice", "Bob", "Charlie"};\nswap(names, 0, 2);',
        },
        {
          command: 'Bounded Type Parameters',
          description: 'Restrict type parameters',
          usage: '<T extends ClassName> or <T extends Interface>',
          example: 'public class NumberBox<T extends Number> {\n  private T number;\n  \n  public void setNumber(T number) {\n    this.number = number;\n  }\n  \n  public double doubleValue() {\n    return number.doubleValue();\n  }\n}\n\n// Usage\nNumberBox<Integer> intBox = new NumberBox<>();\nNumberBox<Double> doubleBox = new NumberBox<>();\n// NumberBox<String> stringBox = new NumberBox<>(); // ERROR!',
        },
        {
          command: 'Wildcard Types',
          description: 'Unknown type or bounded wildcards',
          usage: '? extends Type, ? super Type',
          example: 'public void processList(List<? extends Number> list) {\n  for (Number num : list) {\n    System.out.println(num.doubleValue());\n  }\n}\n\npublic void addNumbers(List<? super Integer> list) {\n  list.add(10);\n  list.add(20);\n}',
        },
        {
          command: 'Generic Interface',
          description: 'Interface with type parameters',
          usage: 'interface InterfaceName<T> { ... }',
          example: 'public interface Comparator<T> {\n  int compare(T o1, T o2);\n}\n\npublic class StudentComparator implements Comparator<Student> {\n  @Override\n  public int compare(Student s1, Student s2) {\n    return s1.getName().compareTo(s2.getName());\n  }\n}',
        },
      ],
    },
    {
      title: 'Concurrency',
      commands: [
        {
          command: 'Creating Threads',
          description: 'Basic thread creation',
          usage: 'new Thread(() -> { ... }).start();',
          example: '// Using lambda\nThread thread1 = new Thread(() -> {\n  for (int i = 0; i < 5; i++) {\n    System.out.println("Thread 1: " + i);\n  }\n});\nthread1.start();\n\n// Using Runnable interface\nRunnable task = () -> System.out.println("Running task");\nThread thread2 = new Thread(task);\nthread2.start();',
        },
        {
          command: 'Thread Sleep',
          description: 'Pause thread execution',
          usage: 'Thread.sleep(milliseconds);',
          example: 'try {\n  System.out.println("Sleeping for 2 seconds...");\n  Thread.sleep(2000);\n  System.out.println("Awake!");\n} catch (InterruptedException e) {\n  e.printStackTrace();\n}',
        },
        {
          command: 'Synchronized Methods',
          description: 'Thread-safe methods',
          usage: 'synchronized returnType methodName() { ... }',
          example: 'public class Counter {\n  private int count = 0;\n  \n  public synchronized void increment() {\n    count++;\n  }\n  \n  public synchronized int getCount() {\n    return count;\n  }\n}',
        },
        {
          command: 'Synchronized Blocks',
          description: 'Thread-safe code blocks',
          usage: 'synchronized (object) { ... }',
          example: 'public class BankAccount {\n  private double balance;\n  private final Object lock = new Object();\n  \n  public void deposit(double amount) {\n    synchronized (lock) {\n      balance += amount;\n    }\n  }\n}',
        },
        {
          command: 'ExecutorService',
          description: 'Thread pool management',
          usage: 'Executors.newFixedThreadPool(n)',
          example: 'ExecutorService executor = Executors.newFixedThreadPool(3);\n\nfor (int i = 0; i < 10; i++) {\n  int taskNum = i;\n  executor.submit(() -> {\n    System.out.println("Task " + taskNum + " running");\n  });\n}\n\nexecutor.shutdown();\nexecutor.awaitTermination(1, TimeUnit.MINUTES);',
        },
        {
          command: 'CompletableFuture',
          description: 'Asynchronous programming (Java 8+)',
          usage: 'CompletableFuture.supplyAsync(() -> value)',
          example: 'CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n  // Simulate long-running task\n  Thread.sleep(1000);\n  return "Result";\n});\n\nfuture.thenAccept(result -> System.out.println("Got: " + result));\nfuture.exceptionally(ex -> {\n  System.out.println("Error: " + ex.getMessage());\n  return null;\n});',
        },
      ],
    },
    {
      title: 'Lambda Expressions & Streams',
      commands: [
        {
          command: 'Lambda Expression',
          description: 'Anonymous function syntax',
          usage: '(parameters) -> expression or (parameters) -> { statements }',
          example: '// No parameters\nRunnable r = () -> System.out.println("Hello");\n\n// One parameter\nConsumer<String> printer = s -> System.out.println(s);\n\n// Multiple parameters\nBinaryOperator<Integer> add = (a, b) -> a + b;\n\n// Multi-line lambda\nPredicate<Integer> isEven = n -> {\n  System.out.println("Checking " + n);\n  return n % 2 == 0;\n};',
        },
        {
          command: 'Functional Interfaces',
          description: 'Interfaces for lambda expressions',
          usage: 'Predicate<T>, Function<T,R>, Consumer<T>, Supplier<T>',
          example: 'Predicate<String> isEmpty = String::isEmpty;\nFunction<String, Integer> stringLength = String::length;\nConsumer<String> printer = System.out::println;\nSupplier<Double> randomSupplier = Math::random;\n\n// Usage\nboolean empty = isEmpty.test("");\nint length = stringLength.apply("Hello");\nprinter.accept("Print this");\ndouble random = randomSupplier.get();',
        },
        {
          command: 'Stream Creation',
          description: 'Create streams from collections',
          usage: 'collection.stream() or Stream.of()',
          example: 'List<String> list = Arrays.asList("a", "b", "c");\nStream<String> stream1 = list.stream();\n\nStream<Integer> stream2 = Stream.of(1, 2, 3, 4, 5);\n\nIntStream stream3 = IntStream.range(1, 10);  // 1-9\nIntStream stream4 = IntStream.rangeClosed(1, 10);  // 1-10',
        },
        {
          command: 'Stream Operations: filter & map',
          description: 'Filter and transform stream elements',
          usage: '.filter(predicate) and .map(function)',
          example: 'List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");\n\n// Filter names starting with "A"\nList<String> aNames = names.stream()\n  .filter(name -> name.startsWith("A"))\n  .collect(Collectors.toList());\n\n// Convert to uppercase\nList<String> upperNames = names.stream()\n  .map(String::toUpperCase)\n  .collect(Collectors.toList());\n\n// Chain operations\nList<String> result = names.stream()\n  .filter(name -> name.length() > 3)\n  .map(String::toUpperCase)\n  .collect(Collectors.toList());',
        },
        {
          command: 'Stream Operations: reduce & collect',
          description: 'Aggregate stream elements',
          usage: '.reduce(identity, accumulator) and .collect()',
          example: 'List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n\n// Sum all numbers\nint sum = numbers.stream()\n  .reduce(0, (a, b) -> a + b);\n\n// Find maximum\nOptional<Integer> max = numbers.stream()\n  .reduce(Integer::max);\n\n// Collect to different collections\nSet<String> uniqueNames = names.stream()\n  .collect(Collectors.toSet());\n\nString joined = names.stream()\n  .collect(Collectors.joining(", "));\n\n// Group by length\nMap<Integer, List<String>> groupedByLength = names.stream()\n  .collect(Collectors.groupingBy(String::length));',
        },
        {
          command: 'Method References',
          description: 'Shorthand for lambda expressions',
          usage: 'Class::methodName or object::methodName',
          example: 'List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n\n// Static method reference\nnames.forEach(System.out::println);\n\n// Instance method reference\nnames.stream()\n  .map(String::toUpperCase)\n  .forEach(System.out::println);\n\n// Constructor reference\nSupplier<List<String>> listSupplier = ArrayList::new;\nList<String> newList = listSupplier.get();',
        },
      ],
    },
    {
      title: 'Advanced OOP Concepts',
      commands: [
        {
          command: 'Abstract Classes vs Interfaces',
          description: 'When to use each',
          usage: 'Abstract class for shared implementation, Interface for contract',
          example: '// Abstract class - when classes share common behavior\npublic abstract class Vehicle {\n  protected String brand;\n  \n  public abstract void start();\n  \n  public void stop() {\n    System.out.println("Vehicle stopped");\n  }\n}\n\n// Interface - when you want to define a contract\npublic interface Electric {\n  void charge();\n  int getBatteryLevel();\n}',
        },
        {
          command: 'Multiple Inheritance with Interfaces',
          description: 'Implement multiple interfaces',
          usage: 'class ClassName implements Interface1, Interface2 { ... }',
          example: 'public class SmartPhone implements Phone, Camera, GPS {\n  @Override\n  public void makeCall(String number) { ... }\n  \n  @Override\n  public void takePhoto() { ... }\n  \n  @Override\n  public Location getCurrentLocation() { ... }\n}',
        },
        {
          command: 'Inner Classes',
          description: 'Classes within other classes',
          usage: 'class Outer { class Inner { ... } }',
          example: 'public class OuterClass {\n  private String message = "Hello from outer";\n  \n  // Non-static inner class\n  public class InnerClass {\n    public void display() {\n      System.out.println(message);  // can access outer members\n    }\n  }\n  \n  // Static inner class\n  public static class StaticInnerClass {\n    public void display() {\n      System.out.println("Static inner class");\n    }\n  }\n}\n\n// Usage\nOuterClass outer = new OuterClass();\nOuterClass.InnerClass inner = outer.new InnerClass();\nOuterClass.StaticInnerClass staticInner = new OuterClass.StaticInnerClass();',
        },
        {
          command: 'Anonymous Classes',
          description: 'Unnamed local classes',
          usage: 'new Interface() { implementation }',
          example: '// Using anonymous class\nRunnable runnable = new Runnable() {\n  @Override\n  public void run() {\n    System.out.println("Anonymous class running");\n  }\n};\n\n// With interface\nButton button = new Button();\nbutton.addActionListener(new ActionListener() {\n  @Override\n  public void actionPerformed(ActionEvent e) {\n    System.out.println("Button clicked");\n  }\n});',
        },
        {
          command: 'Object Class Methods',
          description: 'Override Object methods',
          usage: '@Override public boolean equals(Object obj) { ... }',
          example: 'public class Person {\n  private String name;\n  private int age;\n  \n  @Override\n  public boolean equals(Object obj) {\n    if (this == obj) return true;\n    if (obj == null || getClass() != obj.getClass()) return false;\n    Person person = (Person) obj;\n    return age == person.age && Objects.equals(name, person.name);\n  }\n  \n  @Override\n  public int hashCode() {\n    return Objects.hash(name, age);\n  }\n  \n  @Override\n  public String toString() {\n    return "Person{name=\'" + name + "\', age=" + age + "}";\n  }\n}',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Design Patterns',
      commands: [
        {
          command: 'Singleton Pattern',
          description: 'Ensure only one instance exists',
          usage: 'private static instance, private constructor, static getInstance()',
          example: 'public class DatabaseConnection {\n  private static DatabaseConnection instance;\n  private Connection connection;\n  \n  private DatabaseConnection() {\n    // Private constructor\n  }\n  \n  public static synchronized DatabaseConnection getInstance() {\n    if (instance == null) {\n      instance = new DatabaseConnection();\n    }\n    return instance;\n  }\n  \n  public Connection getConnection() {\n    return connection;\n  }\n}',
        },
        {
          command: 'Factory Pattern',
          description: 'Create objects without specifying exact class',
          usage: 'Factory class with creation methods',
          example: 'public interface Shape {\n  void draw();\n}\n\npublic class Circle implements Shape {\n  @Override\n  public void draw() { System.out.println("Drawing circle"); }\n}\n\npublic class Rectangle implements Shape {\n  @Override\n  public void draw() { System.out.println("Drawing rectangle"); }\n}\n\npublic class ShapeFactory {\n  public Shape createShape(String type) {\n    if (type.equalsIgnoreCase("circle")) {\n      return new Circle();\n    } else if (type.equalsIgnoreCase("rectangle")) {\n      return new Rectangle();\n    }\n    return null;\n  }\n}',
        },
        {
          command: 'Observer Pattern',
          description: 'One-to-many dependency between objects',
          usage: 'Subject interface and Observer interface',
          example: 'public interface Observer {\n  void update(String message);\n}\n\npublic interface Subject {\n  void registerObserver(Observer observer);\n  void removeObserver(Observer observer);\n  void notifyObservers();\n}\n\npublic class NewsAgency implements Subject {\n  private List<Observer> observers = new ArrayList<>();\n  private String news;\n  \n  @Override\n  public void registerObserver(Observer observer) {\n    observers.add(observer);\n  }\n  \n  @Override\n  public void notifyObservers() {\n    for (Observer observer : observers) {\n      observer.update(news);\n    }\n  }\n  \n  public void setNews(String news) {\n    this.news = news;\n    notifyObservers();\n  }\n}',
        },
        {
          command: 'Strategy Pattern',
          description: 'Define family of algorithms, encapsulate each one',
          usage: 'Strategy interface and context class',
          example: 'public interface PaymentStrategy {\n  void pay(int amount);\n}\n\npublic class CreditCardPayment implements PaymentStrategy {\n  @Override\n  public void pay(int amount) {\n    System.out.println("Paid $" + amount + " with credit card");\n  }\n}\n\npublic class PayPalPayment implements PaymentStrategy {\n  @Override\n  public void pay(int amount) {\n    System.out.println("Paid $" + amount + " with PayPal");\n  }\n}\n\npublic class ShoppingCart {\n  private PaymentStrategy paymentStrategy;\n  \n  public void setPaymentStrategy(PaymentStrategy strategy) {\n    this.paymentStrategy = strategy;\n  }\n  \n  public void checkout(int amount) {\n    paymentStrategy.pay(amount);\n  }\n}',
        },
        {
          command: 'Builder Pattern',
          description: 'Construct complex objects step by step',
          usage: 'Builder class with fluent interface',
          example: 'public class Computer {\n  private String cpu;\n  private String ram;\n  private String storage;\n  \n  private Computer(Builder builder) {\n    this.cpu = builder.cpu;\n    this.ram = builder.ram;\n    this.storage = builder.storage;\n  }\n  \n  public static class Builder {\n    private String cpu;\n    private String ram;\n    private String storage;\n    \n    public Builder cpu(String cpu) {\n      this.cpu = cpu;\n      return this;\n    }\n    \n    public Builder ram(String ram) {\n      this.ram = ram;\n      return this;\n    }\n    \n    public Builder storage(String storage) {\n      this.storage = storage;\n      return this;\n    }\n    \n    public Computer build() {\n      return new Computer(this);\n    }\n  }\n}\n\n// Usage\nComputer computer = new Computer.Builder()\n  .cpu("Intel i7")\n  .ram("16GB")\n  .storage("512GB SSD")\n  .build();',
        },
      ],
    },
    {
      title: 'Performance & Optimization',
      commands: [
        {
          command: 'Memory Management',
          description: 'Understanding garbage collection and memory',
          usage: 'System.gc(), Runtime.getRuntime()',
          example: '// Get memory information\nRuntime runtime = Runtime.getRuntime();\nlong totalMemory = runtime.totalMemory();\nlong freeMemory = runtime.freeMemory();\nlong usedMemory = totalMemory - freeMemory;\n\nSystem.out.println("Used memory: " + (usedMemory / 1024 / 1024) + " MB");\n\n// Suggest garbage collection\nSystem.gc();\n\n// Memory leak prevention\npublic class CacheManager {\n  private Map<String, Object> cache = new HashMap<>();\n  \n  public void addToCache(String key, Object value) {\n    if (cache.size() > 1000) {\n      cache.clear();  // Prevent memory leak\n    }\n    cache.put(key, value);\n  }\n}',
        },
        {
          command: 'String Optimization',
          description: 'Efficient string handling',
          usage: 'StringBuilder, String.intern()',
          example: '// Use StringBuilder for concatenation in loops\npublic String joinStrings(List<String> strings) {\n  StringBuilder sb = new StringBuilder();\n  for (String s : strings) {\n    sb.append(s).append(", ");\n  }\n  return sb.toString();\n}\n\n// String interning for frequently used strings\nString common = "frequently_used".intern();\n\n// Avoid creating unnecessary strings\npublic boolean isValid(String input) {\n  return "VALID".equals(input);  // Better than input.equals("VALID")\n}',
        },
        {
          command: 'Collection Performance',
          description: 'Choose right collection for performance',
          usage: 'ArrayList vs LinkedList, HashMap vs TreeMap',
          example: '// ArrayList for random access\nList<Integer> randomAccess = new ArrayList<>();\n\n// LinkedList for frequent insertions/deletions\nList<String> frequentModifications = new LinkedList<>();\n\n// HashSet for O(1) lookup\nSet<Integer> fastLookup = new HashSet<>();\n\n// TreeMap for sorted data\nMap<String, Integer> sortedData = new TreeMap<>();\n\n// Initial capacity for better performance\nList<String> optimized = new ArrayList<>(1000);  // Avoid resizing',
        },
        {
          command: 'Lazy Initialization',
          description: 'Initialize objects only when needed',
          usage: 'Double-checked locking pattern',
          example: 'public class ExpensiveObject {\n  private static volatile ExpensiveObject instance;\n  private ExpensiveObject() {\n    // Expensive initialization\n  }\n  \n  public static ExpensiveObject getInstance() {\n    if (instance == null) {\n      synchronized (ExpensiveObject.class) {\n        if (instance == null) {\n          instance = new ExpensiveObject();\n        }\n      }\n    }\n    return instance;\n  }\n}',
        },
        {
          command: 'Caching Patterns',
          description: 'Implement caching for performance',
          usage: 'Map-based cache with expiration',
          example: 'public class Cache<K, V> {\n  private Map<K, CacheEntry<V>> cache = new HashMap<>();\n  private long ttlMillis;\n  \n  public Cache(long ttlMillis) {\n    this.ttlMillis = ttlMillis;\n  }\n  \n  public void put(K key, V value) {\n    long expiryTime = System.currentTimeMillis() + ttlMillis;\n    cache.put(key, new CacheEntry<>(value, expiryTime));\n  }\n  \n  public V get(K key) {\n    CacheEntry<V> entry = cache.get(key);\n    if (entry == null || entry.isExpired()) {\n      cache.remove(key);\n      return null;\n    }\n    return entry.getValue();\n  }\n  \n  private static class CacheEntry<V> {\n    private V value;\n    private long expiryTime;\n    \n    public boolean isExpired() {\n      return System.currentTimeMillis() > expiryTime;\n    }\n  }\n}',
        },
      ],
    },
    {
      title: 'Modern Java Features',
      commands: [
        {
          command: 'Records (Java 16+)',
          description: 'Immutable data carriers',
          usage: 'public record ClassName(Type1 field1, Type2 field2) {}',
          example: 'public record Person(String name, int age) {\n  // Compact constructor\n  public Person {\n    if (name == null || name.isBlank()) {\n      throw new IllegalArgumentException("Name cannot be null or empty");\n    }\n    if (age < 0) {\n      throw new IllegalArgumentException("Age cannot be negative");\n    }\n  }\n}\n\n// Usage\nPerson person = new Person("Alice", 30);\nSystem.out.println(person.name());  // Alice\nSystem.out.println(person.age());   // 30\nSystem.out.println(person);         // Person[name=Alice, age=30]',
        },
        {
          command: 'Sealed Classes (Java 17+)',
          description: 'Restrict class inheritance',
          usage: 'sealed class ClassName permits SubClass1, SubClass2 {}',
          example: 'public sealed class Shape permits Circle, Rectangle, Triangle {\n  public abstract double getArea();\n}\n\npublic final class Circle extends Shape {\n  private double radius;\n  \n  @Override\n  public double getArea() {\n    return Math.PI * radius * radius;\n  }\n}\n\npublic non-sealed class Rectangle extends Shape {\n  // Can be extended further\n}',
        },
        {
          command: 'Pattern Matching for instanceof (Java 16+)',
          description: 'Simplify instanceof checks',
          usage: 'if (obj instanceof Type variable) { ... }',
          example: '// Before Java 16\nif (obj instanceof String) {\n  String s = (String) obj;\n  System.out.println(s.toUpperCase());\n}\n\n// Java 16+\nif (obj instanceof String s) {\n  System.out.println(s.toUpperCase());\n}',
        },
        {
          command: 'Switch Expressions (Java 14+)',
          description: 'Enhanced switch statements',
          usage: 'var result = switch (variable) { case value -> expression; default -> expression; };',
          example: 'String day = "MONDAY";\nint workLoad = switch (day) {\n  case "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY" -> 8;\n  case "SATURDAY", "SUNDAY" -> 0;\n  default -> throw new IllegalArgumentException("Invalid day: " + day);\n};',
        },
        {
          command: 'Text Blocks (Java 15+)',
          description: 'Multi-line string literals',
          usage: 'String text = """\n  line1\n  line2\n  """;',
          example: 'String json = """\n  {\n    "name": "John",\n    "age": 30,\n    "city": "New York"\n  }\n  """;\n\nString html = """\n  <html>\n    <body>\n      <h1>Hello, World!</h1>\n    </body>\n  </html>\n  """;',
        },
        {
          command: 'var Keyword (Java 10+)',
          description: 'Local variable type inference',
          usage: 'var variableName = initialValue;',
          example: 'var name = "John";           // String\nvar age = 25;                 // int\nvar list = new ArrayList<String>();  // ArrayList<String>\nvar map = Map.of("key1", "value1", "key2", "value2");\n\n// Cannot use without initialization\n// var uninitialized;  // ERROR\n\n// Cannot use with null\n// var nullValue = null;  // ERROR',
        },
      ],
    },
    {
      title: 'Testing & Build Tools',
      commands: [
        {
          command: 'JUnit 5 Testing',
          description: 'Modern unit testing framework',
          usage: '@Test, @BeforeEach, @AfterEach, Assertions',
          example: 'import org.junit.jupiter.api.*;\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass CalculatorTest {\n  private Calculator calculator;\n  \n  @BeforeEach\n  void setUp() {\n    calculator = new Calculator();\n  }\n  \n  @Test\n  void testAdd() {\n    assertEquals(5, calculator.add(2, 3));\n  }\n  \n  @Test\n  void testDivideByZero() {\n    assertThrows(ArithmeticException.class, () -> {\n      calculator.divide(10, 0);\n    });\n  }\n  \n  @ParameterizedTest\n  @ValueSource(ints = {1, 2, 3, 4, 5})\n  void testMultiply(int number) {\n    assertEquals(number * 2, calculator.multiply(number, 2));\n  }\n}',
        },
        {
          command: 'Mockito Testing',
          description: 'Mocking framework for unit tests',
          usage: '@Mock, @InjectMocks, when(), verify()',
          example: 'import org.mockito.*;\nimport static org.mockito.Mockito.*;\n\nclass UserServiceTest {\n  @Mock\n  private UserRepository userRepository;\n  \n  @InjectMocks\n  private UserService userService;\n  \n  @Test\n  void testGetUserById() {\n    // Arrange\n    User mockUser = new User("John", 30);\n    when(userRepository.findById(1L)).thenReturn(Optional.of(mockUser));\n    \n    // Act\n    User result = userService.getUserById(1L);\n    \n    // Assert\n    assertNotNull(result);\n    assertEquals("John", result.getName());\n    verify(userRepository).findById(1L);\n  }\n}',
        },
        {
          command: 'Maven Build Tool',
          description: 'Project management and build tool',
          usage: 'mvn commands, pom.xml configuration',
          example: '<!-- pom.xml -->\n<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1.0.0</version>\n  \n  <dependencies>\n    <dependency>\n      <groupId>org.junit.jupiter</groupId>\n      <artifactId>junit-jupiter</artifactId>\n      <version>5.8.0</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n</project>\n\n// Common Maven commands\nmvn clean compile    // Clean and compile\nmvn test            // Run tests\nmvn package         // Create JAR\nmvn install         // Install to local repository',
        },
        {
          command: 'Gradle Build Tool',
          description: 'Modern build automation tool',
          usage: 'build.gradle configuration, gradle commands',
          example: '// build.gradle\nplugins {\n  id \'java\'\n  id \'application\'\n}\n\nrepositories {\n  mavenCentral()\n}\n\ndependencies {\n  testImplementation \'org.junit.jupiter:junit-jupiter:5.8.0\'\n  implementation \'com.google.guava:guava:31.0-jre\'\n}\n\napplication {\n  mainClass = \'com.example.Main\'\n}\n\ntest {\n  useJUnitPlatform()\n}\n\n// Common Gradle commands\n./gradlew build        // Build project\n./gradlew test         // Run tests\n./gradlew run          // Run application\n./gradlew clean        // Clean build',
        },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      commands: [
        {
          command: 'Spring Boot Basics',
          description: 'Modern Java application framework',
          usage: '@SpringBootApplication, @RestController, @Service',
          example: '@SpringBootApplication\npublic class Application {\n  public static void main(String[] args) {\n    SpringApplication.run(Application.class, args);\n  }\n}\n\n@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n  @Autowired\n  private UserService userService;\n  \n  @GetMapping("/{id}")\n  public ResponseEntity<User> getUser(@PathVariable Long id) {\n    User user = userService.findById(id);\n    return ResponseEntity.ok(user);\n  }\n  \n  @PostMapping\n  public User createUser(@RequestBody User user) {\n    return userService.save(user);\n  }\n}',
        },
        {
          command: 'Spring Data JPA',
          description: 'Database access layer',
          usage: '@Entity, @Repository, JpaRepository',
          example: '@Entity\n@Table(name = "users")\npublic class User {\n  @Id\n  @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n  \n  @Column(nullable = false)\n  private String name;\n  \n  @Column(unique = true)\n  private String email;\n  \n  // getters and setters\n}\n\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n  List<User> findByName(String name);\n  Optional<User> findByEmail(String email);\n  @Query("SELECT u FROM User u WHERE u.name LIKE %:name%")\n  List<User> findByNameContaining(@Param("name") String name);\n}',
        },
        {
          command: 'Hibernate ORM',
          description: 'Object-relational mapping framework',
          usage: '@Entity, @Column, @OneToMany, @ManyToOne',
          example: '@Entity\npublic class Department {\n  @Id\n  @GeneratedValue\n  private Long id;\n  \n  private String name;\n  \n  @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, fetch = FetchType.LAZY)\n  private List<Employee> employees = new ArrayList<>();\n}\n\n@Entity\npublic class Employee {\n  @Id\n  @GeneratedValue\n  private Long id;\n  \n  private String name;\n  \n  @ManyToOne(fetch = FetchType.LAZY)\n  @JoinColumn(name = "department_id")\n  private Department department;\n}',
        },
        {
          command: 'Jackson JSON Processing',
          description: 'JSON serialization/deserialization',
          usage: '@JsonProperty, @JsonFormat, ObjectMapper',
          example: '@JsonIgnoreProperties(ignoreUnknown = true)\npublic class User {\n  @JsonProperty("user_name")\n  private String name;\n  \n  @JsonProperty("user_age")\n  private int age;\n  \n  @JsonFormat(pattern = "yyyy-MM-dd")\n  private LocalDate birthDate;\n  \n  // getters and setters\n}\n\n// Usage\nObjectMapper mapper = new ObjectMapper();\nString json = mapper.writeValueAsString(user);\nUser parsedUser = mapper.readValue(json, User.class);',
        },
      ],
    },
  ],
};
