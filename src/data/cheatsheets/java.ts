import { Code } from 'lucide-react';

export const javaCheatsheet = {
  id: 'java',
  name: 'Java',
  description: 'Core Java commands, syntax, and concepts (up to Java 21+)',
  icon: Code,
  colorTheme: 'orange' as const,
  sections: [
    {
      title: 'JDK Commands',
      commands: [
        {
          command: 'javac',
          description: 'Compile Java source files into bytecode',
          usage: 'javac [options] <source-files>',
          example: 'javac HelloWorld.java\njavac -d build/classes src/com/example/*.java\njavac -cp "lib/*" Main.java',
        },
        {
          command: 'java',
          description: 'Run a compiled Java application',
          usage: 'java [options] <main-class> [args]',
          example: 'java HelloWorld\njava -cp "build/classes:lib/*" com.example.Main\njava -jar my-app.jar',
        },
        {
          command: 'jar',
          description: 'Create and manage Java Archive (JAR) files',
          usage: 'jar [options] [manifest] <destination> <input-files>',
          example: 'jar --create --file my-app.jar -C build/classes .\njar -cvf my-app.jar -C classes/ . # Create\njar -tvf my-app.jar # View contents\njar -xvf my-app.jar # Extract',
        },
        {
          command: 'javadoc',
          description: 'Generate API documentation from source code comments',
          usage: 'javadoc [options] <source-files>',
          example: 'javadoc -d docs -sourcepath src com.example\njavadoc MyClass.java',
        },
        {
          command: 'jshell',
          description: 'Interactive Java REPL (since Java 9)',
          usage: 'jshell',
          example: 'jshell\n/list\n/exit',
        },
        {
          command: 'jps',
          description: 'List running Java Virtual Machines',
          usage: 'jps [options]',
          example: 'jps\njps -l\njps -v',
        },
        {
          command: 'jstat',
          description: 'Monitor JVM statistics (garbage collection, class loading)',
          usage: 'jstat -<option> <pid> [interval] [count]',
          example: 'jstat -gc 12345 1000 10 # GC stats for PID 12345 every second, 10 times',
        },
        {
          command: 'jmap',
          description: 'Create heap dumps and view memory information',
          usage: 'jmap [option] <pid>',
          example: 'jmap -dump:format=b,file=heap.bin 12345\njmap -heap 12345',
        },
      ],
    },
    {
      title: 'Core Language Concepts',
      commands: [
        {
          command: 'Primitive Data Types',
          description: 'Fundamental data types in Java',
          usage: 'byte, short, int, long, float, double, char, boolean',
          example: 'int age = 30;\ndouble pi = 3.14159;\nboolean isActive = true;',
        },
        {
          command: 'Variable Declaration',
          description: 'Declaring typed variables',
          usage: '<type> <variableName> = <value>;',
          example: 'String name = "Java";\nfinal double E = 2.718;',
        },
        {
          command: 'var (Type Inference)',
          description: 'Local variable type inference (since Java 10)',
          usage: 'var <variableName> = <value>;',
          example: 'var name = "Java"; // Inferred as String\nvar list = new ArrayList<String>();',
        },
        {
          command: 'Control Flow: if-else',
          description: 'Conditional branching',
          usage: 'if (condition) { ... } else if (condition) { ... } else { ... }',
          example: 'if (score > 90) {\n  grade = \'A\';\n} else {\n  grade = \'B\';\n}',
        },
        {
          command: 'Control Flow: switch',
          description: 'Multi-way branching (enhanced since Java 14)',
          usage: 'switch (variable) { case val -> ...; default -> ...; }',
          example: 'String result = switch (day) {\n  case "MONDAY", "FRIDAY" -> "Start/End";\n  default -> "Midweek";\n};',
        },
        {
          command: 'Loops: for / while',
          description: 'Iterating over collections or based on conditions',
          usage: 'for (T item : collection) { ... } \nfor (int i=0; i<n; i++) { ... }',
          example: 'for (String name : names) { ... }\nwhile (iterator.hasNext()) { ... }',
        },
        {
          command: 'Records (since Java 16)',
          description: 'Immutable data carrier classes',
          usage: 'public record Person(String name, int age) {}',
          example: 'Person person = new Person("John", 30);\nperson.name(); // Accessor\nperson.age();',
        },
        {
          command: 'Sealed Classes (since Java 17)',
          description: 'Restrict which other classes may extend or implement them',
          usage: 'public sealed class Shape permits Circle, Square {}',
          example: 'public final class Circle extends Shape {}\npublic final class Square extends Shape {}',
        },
        {
          command: 'Pattern Matching for instanceof (since Java 16)',
          description: 'Test and cast in one step',
          usage: 'if (obj instanceof String s) { ... }',
          example: 'if (obj instanceof String s) {\n  System.out.println(s.toUpperCase());\n}',
        },
      ],
    },
    {
      title: 'Object-Oriented Programming',
      commands: [
        {
          command: 'Class Definition',
          description: 'Blueprint for creating objects',
          usage: 'class MyClass { ... }',
          example: 'public class Dog {\n  String name;\n  public void bark() { ... }\n}',
        },
        {
          command: 'Object Instantiation',
          description: 'Creating an instance of a class',
          usage: 'new MyClass();',
          example: 'Dog myDog = new Dog();',
        },
        {
          command: 'Inheritance',
          description: 'A class inheriting fields and methods from another',
          usage: 'class SubClass extends SuperClass { ... }',
          example: 'class GoldenRetriever extends Dog { ... }',
        },
        {
          command: 'Interface',
          description: 'A contract for classes to implement',
          usage: 'interface MyInterface { ... }',
          example: 'interface Flyable {\n  void fly();\n}\nclass Bird implements Flyable { ... }',
        },
        {
          command: 'Enum',
          description: 'A special class that represents a group of constants',
          usage: 'public enum Level { LOW, MEDIUM, HIGH }',
          example: 'Level myVar = Level.MEDIUM;',
        },
      ],
    },
    {
      title: 'Streams API (since Java 8)',
      commands: [
        {
          command: 'Creating a Stream',
          description: 'Create a stream from a collection or values',
          usage: 'collection.stream() | Stream.of(...)',
          example: 'List<String> list = ...;\nStream<String> stream = list.stream();\nStream<Integer> numbers = Stream.of(1, 2, 3);',
        },
        {
          command: 'filter',
          description: 'Filters elements based on a predicate',
          usage: '.filter(element -> condition)',
          example: 'list.stream().filter(s -> s.startsWith("a"));',
        },
        {
          command: 'map',
          description: 'Transforms each element',
          usage: '.map(element -> transformation)',
          example: 'list.stream().map(String::toUpperCase);',
        },
        {
          command: 'collect',
          description: 'Collects stream elements into a collection',
          usage: '.collect(Collectors.toList())',
          example: 'List<String> upper = list.stream().map(String::toUpperCase).collect(Collectors.toList());',
        },
        {
          command: 'forEach',
          description: 'Performs an action for each element',
          usage: '.forEach(element -> action)',
          example: 'list.stream().forEach(System.out::println);',
        },
        {
          command: 'reduce',
          description: 'Performs a reduction on the elements',
          usage: '.reduce(identity, accumulator)',
          example: 'int sum = numbers.stream().reduce(0, (a, b) -> a + b);',
        },
        {
          command: 'flatMap',
          description: 'Transforms each element into a stream of other objects',
          usage: '.flatMap(element -> stream)',
          example: 'List<List<String>> nested; nested.stream().flatMap(Collection::stream).collect(Collectors.toList());',
        },
      ],
    },
    {
      title: 'String Manipulation',
      commands: [
        {
          command: 'String Creation',
          description: 'Ways to create strings',
          usage: 'String s = "literal"; new String("text");',
          example: 'String s1 = "Hello";\nString s2 = new String("World");\nString s3 = """\n  Text Block\n  (Java 15+)\n  """;',
        },
        {
          command: 'Common Methods',
          description: 'Frequently used string operations',
          usage: 's.length(), s.charAt(i), s.substring(start, end)',
          example: 'int len = s.length();\nchar c = s.charAt(0);\nString sub = s.substring(0, 5);\nboolean b = s.contains("ell");',
        },
        {
          command: 'Modification (Immutable)',
          description: 'Operations that return new strings',
          usage: 's.replace(target, replacement), s.toUpperCase()',
          example: 'String upper = s.toUpperCase();\nString clean = "  abc  ".trim();\nString stripped = "  abc  ".strip(); // Java 11+',
        },
        {
          command: 'Splitting & Joining',
          description: 'Divide or combine strings',
          usage: 's.split(regex), String.join(delimiter, elements)',
          example: 'String[] parts = "a,b,c".split(",");\nString joined = String.join(" - ", "a", "b", "c");',
        },
        {
          command: 'Formatting',
          description: 'Format strings with placeholders',
          usage: 'String.format(format, args) / s.formatted(args)',
          example: 'String msg = String.format("Hello %s, Score: %d", "Alice", 100);\nString msg2 = "Pi is %.2f".formatted(Math.PI); // Java 15+',
        },
        {
          command: 'StringBuilder',
          description: 'Mutable sequence of characters for efficient concatenation',
          usage: 'new StringBuilder().append(...)',
          example: 'StringBuilder sb = new StringBuilder();\nsb.append("Hello").append(" ").append("World");\nString result = sb.toString();',
        },
      ],
    },
    {
      title: 'Collections Framework',
      commands: [
        {
          command: 'ArrayList',
          description: 'Resizes dynamically, fast random access',
          usage: 'List<T> list = new ArrayList<>();',
          example: 'List<String> list = new ArrayList<>();\nlist.add("Apple");\nlist.get(0);\nlist.remove("Apple");',
        },
        {
          command: 'LinkedList',
          description: 'Doubly-linked list, fast add/remove',
          usage: 'List<T> list = new LinkedList<>();',
          example: 'LinkedList<String> list = new LinkedList<>();\nlist.addFirst("Start");\nlist.addLast("End");',
        },
        {
          command: 'HashSet',
          description: 'Unordered collection of unique elements',
          usage: 'Set<T> set = new HashSet<>();',
          example: 'Set<Integer> set = new HashSet<>();\nset.add(1);\nset.add(1); // Ignored\nboolean exists = set.contains(1);',
        },
        {
          command: 'TreeSet',
          description: 'Sorted set of unique elements',
          usage: 'Set<T> set = new TreeSet<>();',
          example: 'Set<Integer> sorted = new TreeSet<>();\nsorted.add(5); sorted.add(1);\n// Iterates: 1, 5',
        },
        {
          command: 'HashMap',
          description: 'Key-value pairs, unsorted',
          usage: 'Map<K,V> map = new HashMap<>();',
          example: 'Map<String, Integer> map = new HashMap<>();\nmap.put("One", 1);\nint val = map.get("One");\nmap.containsKey("One");',
        },
        {
          command: 'TreeMap',
          description: 'Key-value pairs, sorted by key',
          usage: 'Map<K,V> map = new TreeMap<>();',
          example: 'Map<Integer, String> map = new TreeMap<>();\nmap.put(2, "B"); map.put(1, "A");\n// Keys iterate: 1, 2',
        },
        {
          command: 'List.of / Set.of / Map.of',
          description: 'Immutable collection factories (Java 9+)',
          usage: 'List.of(e1, e2)',
          example: 'List<String> list = List.of("A", "B");\nSet<Integer> set = Set.of(1, 2);\nMap<String, Integer> map = Map.of("K1", 1, "K2", 2);',
        },
      ],
    },
    {
      title: 'Exception Handling',
      commands: [
        {
          command: 'Try-Catch-Finally',
          description: 'Handle exceptions gracefully',
          usage: 'try { ... } catch (Exception e) { ... } finally { ... }',
          example: 'try {\n  int r = 10 / 0;\n} catch (ArithmeticException e) {\n  e.printStackTrace();\n} finally {\n  System.out.println("Done");\n}',
        },
        {
          command: 'Throw / Throws',
          description: 'Explicitly throwing exceptions',
          usage: 'throw new Exception(); / void m() throws Exception',
          example: 'public void readFile() throws IOException {\n  if (error) throw new IOException("Failed");\n}',
        },
        {
          command: 'Try-with-Resources',
          description: 'Auto-close resources (Java 7+)',
          usage: 'try (Resource r = ...) { ... }',
          example: 'try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {\n  return br.readLine();\n} // br closed automatically',
        },
      ],
    },
    {
      title: 'Functional Programming',
      commands: [
        {
          command: 'Lambda Expressions',
          description: 'Concise way to represent functional interfaces',
          usage: '(params) -> expression',
          example: 'Runnable r = () -> System.out.println("Run");\nConsumer<String> c = s -> System.out.println(s);',
        },
        {
          command: 'Method References',
          description: 'Shorthand for lambdas calling a method',
          usage: 'Class::method',
          example: 'list.forEach(System.out::println);\nlist.stream().map(String::toUpperCase);',
        },
        {
          command: 'Functional Interfaces',
          description: 'Built-in interfaces in java.util.function',
          usage: 'Predicate<T>, Function<T,R>, Supplier<T>, Consumer<T>',
          example: 'Predicate<String> isEmpty = String::isEmpty;\nFunction<String, Integer> toInt = Integer::parseInt;',
        },
      ],
    },
    {
      title: 'Optional API',
      commands: [
        {
          command: 'Creating Optional',
          description: 'Wrap potential null values',
          usage: 'Optional.of(val) / Optional.ofNullable(val)',
          example: 'Optional<String> opt = Optional.of("Hello");\nOptional<String> empty = Optional.empty();',
        },
        {
          command: 'Handling Values',
          description: 'Safely accessing values',
          usage: 'opt.ifPresent(action), opt.orElse(default)',
          example: 'opt.ifPresent(System.out::println);\nString val = opt.orElse("Default");\nString val2 = opt.orElseThrow(() -> new Error("Missing"));',
        },
      ],
    },
    {
      title: 'Date & Time API (Java 8+)',
      commands: [
        {
          command: 'LocalDate',
          description: 'Date without time',
          usage: 'LocalDate.now(), LocalDate.of(y, m, d)',
          example: 'LocalDate today = LocalDate.now();\nLocalDate birthday = LocalDate.of(1990, 1, 1);',
        },
        {
          command: 'LocalTime',
          description: 'Time without date',
          usage: 'LocalTime.now()',
          example: 'LocalTime now = LocalTime.now();',
        },
        {
          command: 'LocalDateTime',
          description: 'Date and Time combined',
          usage: 'LocalDateTime.now()',
          example: 'LocalDateTime dt = LocalDateTime.now();',
        },
        {
          command: 'Formatting Dates',
          description: 'Parsing and formatting',
          usage: 'DateTimeFormatter.ofPattern(pattern)',
          example: 'DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");\nString date = today.format(fmt);',
        },
      ],
    },
    {
      title: 'File I/O (NIO.2)',
      commands: [
        {
          command: 'Path',
          description: 'Representation of a file path',
          usage: 'Path.of(string) / Paths.get(string)',
          example: 'Path path = Path.of("data", "file.txt");',
        },
        {
          command: 'Reading Files',
          description: 'Read content from files',
          usage: 'Files.readString(path), Files.readAllLines(path)',
          example: 'String content = Files.readString(path);\nList<String> lines = Files.readAllLines(path);',
        },
        {
          command: 'Writing Files',
          description: 'Write content to files',
          usage: 'Files.writeString(path, content)',
          example: 'Files.writeString(path, "Hello World", StandardOpenOption.CREATE);',
        },
      ],
    },
    {
      title: 'Concurrency',
      commands: [
        {
          command: 'Threads',
          description: 'Basic unit of execution',
          usage: 'new Thread(runnable).start()',
          example: 'Thread t = new Thread(() -> System.out.println("Running"));\nt.start();',
        },
        {
          command: 'ExecutorService',
          description: 'Manage pool of threads',
          usage: 'Executors.newFixedThreadPool(n)',
          example: 'ExecutorService executor = Executors.newFixedThreadPool(2);\nexecutor.submit(() -> System.out.println("Task"));\nexecutor.shutdown();',
        },
        {
          command: 'CompletableFuture',
          description: 'Asynchronous programming (Java 8+)',
          usage: 'CompletableFuture.supplyAsync(supplier)',
          example: 'CompletableFuture.supplyAsync(() -> "Result")\n  .thenApply(String::toUpperCase)\n  .thenAccept(System.out::println);',
        },
        {
          command: 'Virtual Threads (Java 21+)',
          description: 'Lightweight threads for high-throughput',
          usage: 'Thread.startVirtualThread(runnable)',
          example: 'Thread.startVirtualThread(() -> {\n  System.out.println("Lightweight!");\n});',
        },
      ],
    },
    {
      title: 'Maven Commands',
      commands: [
        {
          command: 'mvn compile',
          description: 'Compile the source code',
          usage: 'mvn compile',
          example: 'mvn compile',
        },
        {
          command: 'mvn test',
          description: 'Run tests against compiled source code',
          usage: 'mvn test',
          example: 'mvn test',
        },
        {
          command: 'mvn package',
          description: 'Package compiled code into a distributable format (e.g., JAR)',
          usage: 'mvn package',
          example: 'mvn package',
        },
        {
          command: 'mvn install',
          description: 'Install the package into the local repository',
          usage: 'mvn install',
          example: 'mvn install',
        },
        {
          command: 'mvn clean',
          description: 'Clean up build artifacts (e.g., target directory)',
          usage: 'mvn clean',
          example: 'mvn clean\nmvn clean install # Common combination',
        },
        {
          command: 'mvn dependency:tree',
          description: 'Display the project\'s dependency tree',
          usage: 'mvn dependency:tree',
          example: 'mvn dependency:tree',
        },
      ],
    },
    {
      title: 'Gradle Commands',
      commands: [
        {
          command: 'gradle build',
          description: 'Assembles and tests the project',
          usage: 'gradle build',
          example: 'gradle build\n./gradlew build',
        },
        {
          command: 'gradle test',
          description: 'Runs the unit tests',
          usage: 'gradle test',
          example: 'gradle test\n./gradlew test',
        },
        {
          command: 'gradle run',
          description: 'Runs the main class of the project',
          usage: 'gradle run',
          example: 'gradle run\n./gradlew run',
        },
        {
          command: 'gradle clean',
          description: 'Deletes the build directory',
          usage: 'gradle clean',
          example: 'gradle clean\n./gradlew clean',
        },
        {
          command: 'gradle dependencies',
          description: 'Displays all dependencies declared in root project',
          usage: 'gradle dependencies',
          example: 'gradle dependencies\n./gradlew dependencies',
        },
        {
          command: 'gradle tasks',
          description: 'Lists the tasks for the project',
          usage: 'gradle tasks',
          example: 'gradle tasks\n./gradlew tasks --all',
        },
      ],
    },
  ],
};

