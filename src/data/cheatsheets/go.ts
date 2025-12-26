import { Code } from 'lucide-react';

export const goCheatsheet = {
  id: 'go',
  name: 'Go',
  description: 'Master Go programming from basics to advanced features (Go 1.19-1.22)',
  icon: Code,
  colorTheme: 'cyan' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Go',
      commands: [
        {
          command: 'Install Go on Ubuntu/Debian',
          description: 'Install Go on Ubuntu/Debian systems',
          usage: 'apt install golang-go',
          example: `# Install Go (Ubuntu/Debian)
sudo apt update
sudo apt install golang-go`,
        },
        {
          command: 'Install Go on macOS',
          description: 'Install Go on macOS with Homebrew',
          usage: 'brew install go',
          example: `# Install Go (macOS with Homebrew)
brew install go`,
        },
        {
          command: 'Install Go on Windows',
          description: 'Install Go on Windows',
          usage: 'Download installer from golang.org',
          example: `# Install Go (Windows)
# Download installer from golang.org`,
        },
        {
          command: 'Verify Go Installation',
          description: 'Check Go version and environment',
          usage: 'go version, go env',
          example: `# Verify installation
go version
go env`,
        },
        {
          command: 'Set Go Workspace',
          description: 'Configure GOPATH and PATH',
          usage: 'Set up workspace directories',
          example: `# Set up workspace
mkdir -p ~/go/{bin,src,pkg}
echo 'export GOPATH=$HOME/go' >> ~/.bashrc
echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.bashrc
source ~/.bashrc`,
        },
        {
          command: 'Initialize Go Module',
          description: 'Create a new Go module',
          usage: 'go mod init',
          example: `# Initialize Go module
go mod init github.com/username/projectname`,
        },
        {
          command: 'Run Go File Directly',
          description: 'Execute Go file without building',
          usage: 'go run filename.go',
          example: `# Run Go file directly
go run main.go`,
        },
        {
          command: 'Run with Arguments',
          description: 'Execute Go with command line arguments',
          usage: 'go run filename.go arg1 arg2',
          example: `# Run with command line arguments
go run main.go arg1 arg2`,
        },
        {
          command: 'Build Go Executable',
          description: 'Compile Go to executable',
          usage: 'go build -o executable filename.go',
          example: `# Build executable
go build -o myapp main.go
./myapp`,
        },
        {
          command: 'Cross-Platform Build',
          description: 'Build for different operating systems',
          usage: 'GOOS=OS GOARCH=ARCH go build',
          example: `# Build for different platforms
GOOS=linux GOARCH=amd64 go build -o myapp-linux main.go
GOOS=windows GOARCH=amd64 go build -o myapp.exe main.go
GOOS=darwin GOARCH=arm64 go build -o myapp-mac main.go`,
        },
        {
          command: 'Install to GOPATH',
          description: 'Install Go program to GOPATH/bin',
          usage: 'go install package',
          example: `# Install to GOPATH/bin
go install github.com/username/projectname`,
        },
        {
          command: 'Run with Specific Go Version',
          description: 'Use specific Go version',
          usage: 'goX.X run filename.go',
          example: `# Run with specific Go version
go1.21 run main.go`,
        },
        {
          command: 'Run with Race Detection',
          description: 'Enable race condition detection',
          usage: 'go run -race filename.go',
          example: `# Run with race detection
go run -race main.go`,
        },
        {
          command: 'Basic Go Program Structure',
          description: 'Essential Go program components',
          usage: 'package main, import, func main()',
          example: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
        },
        {
          command: 'Go Program with Imports',
          description: 'Multiple imports and error handling',
          usage: 'Import multiple packages',
          example: `package main

import (
    "fmt"
    "log"
    "os"
)

func main() {
    fmt.Println("Hello, World!")
    
    if err := run(); err != nil {
        log.Fatalf("Error: %v", err)
        os.Exit(1)
    }
}

func run() error {
    return nil
}`,
        },
        {
          command: 'Global Constants in Go',
          description: 'Define package-level constants',
          usage: 'const NAME = value',
          example: `package main

import "fmt"

const Version = "1.0.0"

func main() {
    fmt.Printf("Program version: %s\n", Version)
}`,
        },
      ],
    },
    {
      title: 'Basic Data Types & Variables',
      commands: [
        {
          command: 'Integer Types in Go',
          description: 'Different integer sizes and signedness',
          usage: 'int, int8, int16, int32, int64, uint, uint8, uint16, uint32, uint64',
          example: `// Integer types
var age int = 25
var i8 int8 = 127          // 8-bit
var i16 int16 = 32767      // 16-bit
var i32 int32 = 2147483647 // 32-bit
var i64 int64 = 9223372036854775807 // 64-bit

// Unsigned integers
var u8 uint8 = 255         // 8-bit (byte)
var u16 uint16 = 65535     // 16-bit
var u32 uint32 = 4294967295 // 32-bit
var u64 uint64 = 18446744073709551615 // 64-bit`,
        },
        {
          command: 'Floating Point Types',
          description: 'Float32 and float64 types',
          usage: 'float32, float64',
          example: `// Floating point
var salary float64 = 50000.50
var balance float32 = 1234.56
var f32 float32 = 3.14     // 32-bit
var f64 float64 = 3.14159265359 // 64-bit`,
        },
        {
          command: 'Complex Number Types',
          description: 'Complex64 and complex128 types',
          usage: 'complex64, complex128',
          example: `// Complex numbers
var c64 complex64 = 1 + 2i // 32-bit real + imaginary
var c128 complex128 = 1 + 2i // 64-bit real + imaginary`,
        },
        {
          command: 'String and Boolean Types',
          description: 'String and boolean data types',
          usage: 'string, bool',
          example: `// String
var name string = "Go"
var message = \`Multiline
string\`

// Boolean
var isActive bool = true
var isComplete bool = false`,
        },
        {
          command: 'Byte and Rune Types',
          description: 'Byte and rune character types',
          usage: 'byte, rune',
          example: `// Byte and rune
var b byte = 'A'           // ASCII character
var r rune = '世'           // Unicode character`,
        },
        {
          command: 'Variable Declaration with var',
          description: 'Declare variables with var keyword',
          usage: 'var name type = value',
          example: `// Variable declaration with var
var x int = 10
var y = 20                // Type inference
var z int                 // Zero value`,
        },
        {
          command: 'Multiple Variable Declaration',
          description: 'Declare multiple variables at once',
          usage: 'var a, b, c type = value1, value2, value3',
          example: `// Multiple variable declaration
var a, b, c int = 1, 2, 3
var d, e, f = 4, 5, 6     // Type inference`,
        },
        {
          command: 'Short Variable Declaration',
          description: 'Declare and infer type with :=',
          usage: 'variable := value',
          example: `// Short variable declaration (inside functions)
x := 10                   // Type inferred as int
name := "Go"              // Type inferred as string
isActive := true          // Type inferred as bool`,
        },
        {
          command: 'Multiple Short Declaration',
          description: 'Declare multiple variables with :=',
          usage: 'a, b := value1, value2',
          example: `// Multiple short declaration
a, b := 1, "hello"`,
        },
        {
          command: 'Basic Constants',
          description: 'Define constant values',
          usage: 'const NAME = value',
          example: `// Constants
const Pi = 3.14159
const Greeting = "Hello, World!"`,
        },
        {
          command: 'Constant Groups',
          description: 'Define multiple constants in a group',
          usage: 'const ( NAME1 = value1; NAME2 = value2 )',
          example: `const (
    StatusActive   = "active"
    StatusInactive = "inactive"
    StatusPending  = "pending"
)`,
        },
        {
          command: 'Iota for Enum Constants',
          description: 'Use iota for incrementing constants',
          usage: 'const ( NAME1 = iota; NAME2; NAME3 )',
          example: `// iota for enum-like constants
const (
    Monday = iota    // 0
    Tuesday          // 1
    Wednesday        // 2
    Thursday         // 3
    Friday           // 4
    Saturday         // 5
    Sunday           // 6
)`,
        },
        {
          command: 'Zero Values in Go',
          description: 'Default values for uninitialized variables',
          usage: 'Understanding Go zero values',
          example: `// Zero values
var i int               // 0
var f float64           // 0
var s string            // ""
var b bool              // false
var p *int              // nil
var sli []int           // nil
var m map[string]int    // nil`,
        },
        {
          command: 'Arithmetic Operators',
          description: 'Basic arithmetic operations',
          usage: '+, -, *, /, %',
          example: `// Arithmetic operators
a, b := 10, 3
fmt.Println(a + b)   // 13 (addition)
fmt.Println(a - b)   // 7 (subtraction)
fmt.Println(a * b)   // 30 (multiplication)
fmt.Println(a / b)   // 3 (integer division)
fmt.Println(a % b)   // 1 (modulo)`,
        },
        {
          command: 'Floating Point Division',
          description: 'Division with floating point numbers',
          usage: 'Use float64 for decimal division',
          example: `// Floating point division
x, y := 10.0, 3.0
fmt.Println(x / y)   // 3.3333333333333335`,
        },
        {
          command: 'Comparison Operators',
          description: 'Compare values and expressions',
          usage: '==, !=, >, >=, <, <=',
          example: `// Comparison operators
fmt.Println(a == b)  // false
fmt.Println(a != b)  // true
fmt.Println(a > b)   // true
fmt.Println(a >= b)  // true
fmt.Println(a < b)   // false
fmt.Println(a <= b)  // true`,
        },
        {
          command: 'Logical Operators',
          description: 'Boolean logic operations',
          usage: '&&, ||, !',
          example: `// Logical operators
x, y := true, false
fmt.Println(x && y)  // false (AND)
fmt.Println(x || y)  // true (OR)
fmt.Println(!x)      // false (NOT)`,
        },
        {
          command: 'Bitwise Operators',
          description: 'Bit-level operations',
          usage: '&, |, ^, <<, >>',
          example: `// Bitwise operators
a, b := 5, 3         // 101, 011 in binary
fmt.Println(a & b)   // 1 (0101 & 0011 = 0001)
fmt.Println(a | b)   // 7 (0101 | 0011 = 0111)
fmt.Println(a ^ b)   // 6 (0101 ^ 0011 = 0110)
fmt.Println(a << 1)  // 10 (101 << 1 = 1010)
fmt.Println(a >> 1)  // 2 (101 >> 1 = 010)`,
        },
        {
          command: 'Assignment Operators',
          description: 'Compound assignment operations',
          usage: '+=, -=, *=, /=, %=',
          example: `// Assignment operators
x := 10
x += 5               // x = x + 5
x -= 3               // x = x - 3
x *= 2               // x = x * 2
x /= 4               // x = x / 4
x %= 3               // x = x % 3`,
        },
        {
          command: 'Increment and Decrement',
          description: 'Increase or decrease values by 1',
          usage: '++, --',
          example: `// Increment and decrement
x := 0
x++                  // x = x + 1
x--                  // x = x - 1`,
        },
      ],
    },
    {
      title: 'Control Flow',
      commands: [
        {
          command: 'Simple If Statement',
          description: 'Basic conditional execution',
          usage: 'if condition { }',
          example: `age := 18

// Simple if
if age >= 18 {
    fmt.Println("Adult")
}`,
        },
        {
          command: 'If-Else Statement',
          description: 'Two-way conditional execution',
          usage: 'if condition { } else { }',
          example: `// If-else
if age >= 18 {
    fmt.Println("Adult")
} else {
    fmt.Println("Minor")
}`,
        },
        {
          command: 'If-Else If-Else Chain',
          description: 'Multiple conditional branches',
          usage: 'if condition1 { } else if condition2 { } else { }',
          example: `// If-else if-else
if age < 13 {
    fmt.Println("Child")
} else if age < 18 {
    fmt.Println("Teenager")
} else if age < 65 {
    fmt.Println("Adult")
} else {
    fmt.Println("Senior")
}`,
        },
        {
          command: 'If with Initialization',
          description: 'Initialize variable in if statement',
          usage: 'if variable := value; condition { }',
          example: `// If with initialization
if x := 10; x > 5 {
    fmt.Println("x is greater than 5")
}`,
        },
        {
          command: 'If with Error Handling',
          description: 'Handle errors in if statements',
          usage: 'if value, err := function(); err != nil { }',
          example: `// If with error handling
if value, err := getValue(); err != nil {
    fmt.Printf("Error: %v\n", err)
} else {
    fmt.Printf("Value: %v\n", value)
}`,
        },
        {
          command: 'Multiple Conditions in If',
          description: 'Combine conditions with logical operators',
          usage: 'if condition1 && condition2 || condition3 { }',
          example: `// Multiple conditions
username := "admin"
password := "secret"
if username == "admin" && password == "secret" {
    fmt.Println("Access granted")
} else if username == "admin" || password == "secret" {
    fmt.Println("Partial access")
} else {
    fmt.Println("Access denied")
}`,
        },
        {
          command: 'Classic For Loop',
          description: 'Traditional three-part for loop',
          usage: 'for init; condition; post { }',
          example: `// Classic for loop
for i := 0; i < 5; i++ {
    fmt.Printf("Count: %d\n", i)
}`,
        },
        {
          command: 'While-Like Loop',
          description: 'For loop used as while loop',
          usage: 'for condition { }',
          example: `// While-like loop
i := 0
for i < 5 {
    fmt.Printf("While count: %d\n", i)
    i++
}`,
        },
        {
          command: 'Infinite Loop',
          description: 'Loop that runs forever until break',
          usage: 'for { }',
          example: `// Infinite loop
for {
    fmt.Println("Infinite loop")
    break // Exit condition
}`,
        },
        {
          command: 'For Range with Slice',
          description: 'Iterate over slice elements',
          usage: 'for index, value := range slice { }',
          example: `// For range with slice
fruits := []string{"apple", "banana", "cherry"}
for index, fruit := range fruits {
    fmt.Printf("%d: %s\n", index, fruit)
}`,
        },
        {
          command: 'For Range with Map',
          description: 'Iterate over map key-value pairs',
          usage: 'for key, value := range map { }',
          example: `// For range with map
person := map[string]int{
    "age": 30,
    "height": 175,
}
for key, value := range person {
    fmt.Printf("%s: %d\n", key, value)
}`,
        },
        {
          command: 'For Range with String',
          description: 'Iterate over string characters',
          usage: 'for index, rune := range string { }',
          example: `// For range with string
for index, char := range "hello" {
    fmt.Printf("%d: %c\n", index, char)
}`,
        },
        {
          command: 'Break and Continue in Loop',
          description: 'Control loop execution flow',
          usage: 'break, continue statements',
          example: `// Break and continue
for i := 0; i < 10; i++ {
    if i == 3 {
        continue // Skip 3
    }
    if i == 7 {
        break    // Stop at 7
    }
    fmt.Println(i)
}`,
        },
        {
          command: 'Labeled Break and Continue',
          description: 'Break or continue outer loops',
          usage: 'label: for { break label }',
          example: `// Labeled break and continue
outer:
for i := 0; i < 3; i++ {
    for j := 0; j < 3; j++ {
        if i == 1 && j == 1 {
            break outer // Break outer loop
        }
        fmt.Printf("i: %d, j: %d\n", i, j)
    }
}`,
        },
        {
          command: 'Basic Switch Statement',
          description: 'Multi-way branching with cases',
          usage: 'switch value { case v1: ... case v2: ... default: ... }',
          example: `day := 3

// Basic switch
switch day {
case 1:
    fmt.Println("Monday")
case 2:
    fmt.Println("Tuesday")
case 3:
    fmt.Println("Wednesday")
case 4:
    fmt.Println("Thursday")
case 5:
    fmt.Println("Friday")
case 6, 7:
    fmt.Println("Weekend")
default:
    fmt.Println("Invalid day")
}`,
        },
        {
          command: 'Switch with Initialization',
          description: 'Initialize variable in switch statement',
          usage: 'switch variable := value; variable { }',
          example: `// Switch with initialization
switch x := 5; x {
case 1, 2, 3:
    fmt.Println("Small number")
case 4, 5, 6:
    fmt.Println("Medium number")
default:
    fmt.Println("Large number")
}`,
        },
        {
          command: 'Switch Without Condition',
          description: 'Switch used as if-else chain',
          usage: 'switch { case condition: ... }',
          example: `// Switch without condition (like if-else chain)
{
    score := 85
    switch {
    case score >= 90:
        fmt.Println("A")
    case score >= 80:
        fmt.Println("B")
    case score >= 70:
        fmt.Println("C")
    case score >= 60:
        fmt.Println("D")
    default:
        fmt.Println("F")
    }
}`,
        },
        {
          command: 'Type Switch',
          description: 'Switch on interface type',
          usage: 'switch v := i.(type) { case type: ... }',
          example: `// Type switch
var i interface{} = "hello"
switch v := i.(type) {
case int:
    fmt.Printf("Integer: %d\n", v)
case string:
    fmt.Printf("String: %s\n", v)
case bool:
    fmt.Printf("Boolean: %t\n", v)
default:
    fmt.Printf("Unknown type: %T\n", v)
}`,
        },
        {
          command: 'Switch with Fallthrough',
          description: 'Execute next case after current',
          usage: 'fallthrough keyword',
          example: `// Fallthrough
x := 1
switch x {
case 1:
    fmt.Println("One")
    fallthrough
case 2:
    fmt.Println("Two")
    fallthrough
case 3:
    fmt.Println("Three")
default:
    fmt.Println("Default")
}`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Functions and Methods',
      commands: [
        {
          command: 'Basic Function Definition',
          description: 'Create and use simple functions',
          usage: 'func functionName(params) returnType { return value }',
          example: `// Basic function
func greet(name string) string {
    return "Hello, " + name
}

// Function with multiple parameters
func add(a, b int) int {
    return a + b
}`,
        },
        {
          command: 'Function with Multiple Return Values',
          description: 'Return multiple values from a function',
          usage: 'func func(params) (type1, type2) { }',
          example: `// Function with multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}`,
        },
        {
          command: 'Named Return Values',
          description: 'Use named return values in functions',
          usage: 'func func(params) (name1 type1, name2 type2) { }',
          example: `// Named return values
func calculateRectangle(width, height float64) (area, perimeter float64) {
    area = width * height
    perimeter = 2 * (width + height)
    return // Return named variables
}`,
        },
        {
          command: 'Variadic Functions',
          description: 'Accept variable number of arguments',
          usage: 'func func(params ...type) returnType { }',
          example: `// Variadic function
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}`,
        },
        {
          command: 'Higher-Order Functions',
          description: 'Functions that accept other functions',
          usage: 'func func(a, b int, operation func(int, int) int) int { }',
          example: `// Higher-order function
func applyOperation(a, b int, operation func(int, int) int) int {
    return operation(a, b)
}`,
        },
        {
          command: 'Anonymous Functions',
          description: 'Create functions without names',
          usage: 'func(params) { }',
          example: `// Anonymous function
add := func(a, b int) int {
    return a + b
}`,
        },
        {
          command: 'Function as Parameter',
          description: 'Pass functions as parameters',
          usage: 'func func(slice []int, predicate func(int) bool) []int { }',
          example: `// Function as parameter
func filter(numbers []int, predicate func(int) bool) []int {
    var result []int
    for _, num := range numbers {
        if predicate(num) {
            result = append(result, num)
        }
    }
    return result
}`,
        },
        {
          command: 'Recursive Functions',
          description: 'Functions that call themselves',
          usage: 'func func(n int) int { return n * func(n-1) }',
          example: `// Recursive function
func factorial(n int) int {
    if n <= 1 {
        return 1
    }
    return n * factorial(n-1)
}`,
        },
        {
          command: 'Function with Deferred Execution',
          description: 'Use defer for cleanup operations',
          usage: 'defer function()',
          example: `// Function with deferred execution
func processFile(filename string) error {
    file, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer file.Close() // Executed when function returns
    
    // Process file
    return nil
}`,
        },
        {
          command: 'Value Receiver Methods',
          description: 'Methods that work with value copies',
          usage: 'func (r Type) Method() returnType { }',
          example: `// Define a type
type Rectangle struct {
    Width  float64
    Height float64
}

// Value receiver method
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}`,
        },
        {
          command: 'Pointer Receiver Methods',
          description: 'Methods that can modify the receiver',
          usage: 'func (r *Type) Method() { }',
          example: `// Pointer receiver method
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}`,
        },
        {
          command: 'Method with Parameters and Return',
          description: 'Methods with parameters and return values',
          usage: 'func (r Type) Method(param type) returnType { }',
          example: `// Method with parameters and return values
func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}`,
        },
        {
          command: 'String Method for Custom Types',
          description: 'Implement String() for custom string representation',
          usage: 'func (r Type) String() string { }',
          example: `// String method for custom string representation
func (r Rectangle) String() string {
    return fmt.Sprintf("Rectangle{Width: %.2f, Height: %.2f}", r.Width, r.Height)
}`,
        },
        {
          command: 'Method on Non-Struct Type',
          description: 'Define methods on basic types',
          usage: 'type CustomType type; func (c CustomType) Method() { }',
          example: `// Method on non-struct type
type Celsius float64

func (c Celsius) String() string {
    return fmt.Sprintf("%.2f°C", c)
}

func (c Celsius) ToFahrenheit() Fahrenheit {
    return Fahrenheit(c*9/5 + 32)
}

type Fahrenheit float64

func (f Fahrenheit) ToCelsius() Celsius {
    return Celsius((f - 32) * 5 / 9)
}`,
        },
        {
          command: 'Function Types',
          description: 'Define function as a type',
          usage: 'type FunctionType func(param1, param2) returnType',
          example: `// Function type
type Operation func(int, int) int

// Function as parameter
func compute(a, b int, op Operation) int {
    return op(a, b)
}`,
        },
        {
          command: 'Function Returning Function',
          description: 'Functions that return other functions',
          usage: 'func func() func(int) int { }',
          example: `// Function returning a function
func getAdder() func(int, int) int {
    return func(a, b int) int {
        return a + b
    }
}`,
        },
        {
          command: 'Closure with Captured Variables',
          description: 'Functions that capture variables from outer scope',
          usage: 'func func(x int) func(int) int { }',
          example: `// Closure with captured variables
func makeAdder(x int) func(int) int {
    return func(y int) int {
        return x + y
    }
}

// Using closures
add5 := makeAdder(5)
add10 := makeAdder(10)
fmt.Println(add5(3))   // 8
fmt.Println(add10(3))  // 13`,
        },
        {
          command: 'Closure with Loop Variables',
          description: 'Handle closures in loops correctly',
          usage: 'Capture loop variable as parameter',
          example: `// Closure with loop
func multiplier() []func() int {
    var multipliers []func() int
    for i := 1; i <= 3; i++ {
        // Capture loop variable
        multiplier := func() int {
            return i * 2
        }
        multipliers = append(multipliers, multiplier)
    }
    return multipliers
}`,
        },
        {
          command: 'Function as Field in Struct',
          description: 'Store functions in struct fields',
          usage: 'type Struct struct { operations map[string]FunctionType }',
          example: `// Function as field in struct
type Calculator struct {
    operations map[string]Operation
}

func NewCalculator() *Calculator {
    return &Calculator{
        operations: map[string]Operation{
            "add": func(a, b int) int { return a + b },
            "sub": func(a, b int) int { return a - b },
            "mul": func(a, b int) int { return a * b },
            "div": func(a, b int) int { return a / b },
        },
    }
}

func (c *Calculator) Calculate(a, b int, op string) (int, error) {
    operation, exists := c.operations[op]
    if !exists {
        return 0, fmt.Errorf("unknown operation: %s", op)
    }
    return operation(a, b), nil
}`,
        },
      ],
    },
    {
      title: 'Arrays, Slices, and Maps',
      commands: [
        {
          command: 'Array Declaration',
          description: 'Declare arrays with fixed size',
          usage: 'var name [size]type',
          example: `// Array declaration
var numbers [5]int                    // Zero-initialized array
var primes = [5]int{2, 3, 5, 7, 11}  // Array literal`,
        },
        {
          command: 'Array with Inferred Size',
          description: 'Let compiler determine array size',
          usage: '[...]type{values}',
          example: `// Array with inferred size
fibonacci := [...]int{0, 1, 1, 2, 3, 5, 8}`,
        },
        {
          command: 'Array with Specific Indices',
          description: 'Initialize array at specific indices',
          usage: '[size]type{index: value, index: value}',
          example: `// Array with specific indices
months := [12]string{
    1: "January",
    2: "February",
    12: "December",
}`,
        },
        {
          command: 'Array Operations',
          description: 'Access and modify array elements',
          usage: 'array[index] = value',
          example: `// Array operations
numbers[0] = 10                      // Set element
first := numbers[0]                  // Get element
length := len(numbers)               // Get length`,
        },
        {
          command: 'Arrays are Value Types',
          description: 'Understanding array copying behavior',
          usage: 'Arrays are copied when assigned',
          example: `// Arrays are value types
arr1 := [3]int{1, 2, 3}
arr2 := arr1                          // Copy
arr2[0] = 100                        // Doesn't affect arr1
fmt.Println(arr1, arr2)              // [1 2 3] [100 2 3]`,
        },
        {
          command: 'Multidimensional Arrays',
          description: 'Create and use 2D arrays',
          usage: '[rows][cols]type',
          example: `// Multidimensional arrays
var matrix [3][3]int
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9

// 2D array literal
matrix2 := [3][3]int{
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9},
}`,
        },
        {
          command: 'Iterating Over Arrays',
          description: 'Loop through array elements',
          usage: 'for index, value := range array { }',
          example: `// Iterating over arrays
for i, value := range numbers {
    fmt.Printf("Index %d: %d\n", i, value)
}`,
        },
        {
          command: 'Comparing Arrays',
          description: 'Compare arrays for equality',
          usage: 'array1 == array2',
          example: `// Comparing arrays
a := [3]int{1, 2, 3}
b := [3]int{1, 2, 3}
c := [3]int{1, 2, 4}
fmt.Println(a == b)  // true
fmt.Println(a == c)  // false`,
        },
        {
          command: 'Slice Declaration',
          description: 'Declare dynamic-size slices',
          usage: 'var name []type, name := []type{values}',
          example: `// Slice declaration
var slice []int                     // nil slice
numbers := []int{1, 2, 3, 4, 5}    // Slice literal`,
        },
        {
          command: 'Make Slice',
          description: 'Create slices with make()',
          usage: 'make([]type, length, capacity)',
          example: `// Make slice
slice := make([]int, 5)             // Length 5, capacity 5
slice := make([]int, 3, 10)         // Length 3, capacity 10`,
        },
        {
          command: 'Append to Slice',
          description: 'Add elements to slice',
          usage: 'slice = append(slice, elements)',
          example: `// Slice operations
numbers = append(numbers, 6, 7, 8)  // Append elements
numbers = append(numbers, slice...) // Append another slice`,
        },
        {
          command: 'Slice Slicing',
          description: 'Create sub-slices from slices',
          usage: 'slice[start:end]',
          example: `// Slicing
numbers := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
sub1 := numbers[2:5]                // [2, 3, 4]
sub2 := numbers[:5]                 // [0, 1, 2, 3, 4]
sub3 := numbers[5:]                 // [5, 6, 7, 8, 9]
sub4 := numbers[:]                  // Copy of entire slice`,
        },
        {
          command: 'Slice Properties',
          description: 'Get slice length and capacity',
          usage: 'len(slice), cap(slice)',
          example: `// Slice properties
length := len(numbers)              // Length
capacity := cap(numbers)            // Capacity`,
        },
        {
          command: 'Copy Slices',
          description: 'Copy elements between slices',
          usage: 'copy(dest, src)',
          example: `// Copy slices
dest := make([]int, len(src))
copied := copy(dest, src)           // Number of elements copied`,
        },
        {
          command: 'Delete Element from Slice',
          description: 'Remove element at specific index',
          usage: 'append(slice[:index], slice[index+1:]...)',
          example: `// Delete element from slice
numbers := []int{1, 2, 3, 4, 5}
index := 2
numbers = append(numbers[:index], numbers[index+1:]...) // Remove element at index 2`,
        },
        {
          command: 'Insert Element into Slice',
          description: 'Insert element at specific position',
          usage: 'append(slice[:index], append([]int{value}, slice[index:]...)...)',
          example: `// Insert element into slice
numbers = append(numbers[:index], append([]int{99}, numbers[index:]...)...)`,
        },
        {
          command: 'Filter Slice',
          description: 'Create filtered version of slice',
          usage: 'Iterate and conditionally append',
          example: `// Filter slice
even := func(numbers []int) []int {
    var result []int
    for _, num := range numbers {
        if num%2 == 0 {
            result = append(result, num)
        }
    }
    return result
}`,
        },
        {
          command: 'Slice of Structs',
          description: 'Create slices containing structs',
          usage: '[]StructType{values}',
          example: `// Slice of structs
type Person struct {
    Name string
    Age  int
}

people := []Person{
    {"Alice", 30},
    {"Bob", 25},
    {"Charlie", 35},
}`,
        },
        {
          command: 'Slice as Function Parameter',
          description: 'Pass slices to functions',
          usage: 'func func(s []int) { }',
          example: `// Slice as function parameter
func processSlice(s []int) {
    s[0] = 100  // Modifies original slice
}`,
        },
        {
          command: 'Map Declaration',
          description: 'Declare key-value collections',
          usage: 'var name map[keyType]valueType, make(map[keyType]valueType)',
          example: `// Map declaration
var m map[string]int                 // nil map
ages := make(map[string]int)         // Empty map`,
        },
        {
          command: 'Map Literal',
          description: 'Initialize maps with values',
          usage: 'map[keyType]valueType{key: value}',
          example: `// Map literal
person := map[string]interface{}{
    "name":  "Alice",
    "age":   30,
    "email": "alice@example.com",
}`,
        },
        {
          command: 'Map Operations',
          description: 'Set, get, and check map values',
          usage: 'map[key] = value, value, exists := map[key]',
          example: `// Map operations
ages["alice"] = 30                   // Set value
age := ages["alice"]                 // Get value
age, exists := ages["alice"]         // Get value with existence check
if !exists {
    age = 0                          // Default value
}`,
        },
        {
          command: 'Delete from Map',
          description: 'Remove key-value pairs from maps',
          usage: 'delete(map, key)',
          example: `// Delete from map
delete(ages, "alice")                // Delete key`,
        },
        {
          command: 'Iterate Over Map',
          description: 'Loop through map key-value pairs',
          usage: 'for key, value := range map { }',
          example: `// Iterate over map
for key, value := range person {
    fmt.Printf("%s: %v\n", key, value)
}`,
        },
        {
          command: 'Check if Map is Empty',
          description: 'Test if map has no elements',
          usage: 'len(map) == 0',
          example: `// Check if map is empty
if len(ages) == 0 {
    fmt.Println("Map is empty")
}`,
        },
        {
          command: 'Map of Structs',
          description: 'Store structs as map values',
          usage: 'map[keyType]StructType',
          example: `// Map of structs
type Address struct {
    Street  string
    City    string
    Country string
}

addresses := map[string]Address{
    "home": {
        Street:  "123 Main St",
        City:    "New York",
        Country: "USA",
    },
    "work": {
        Street:  "456 Office Ave",
        City:    "Boston",
        Country: "USA",
    },
}`,
        },
        {
          command: 'Map as Function Parameter',
          description: 'Pass maps to functions',
          usage: 'func func(m map[string]int) { }',
          example: `// Map as function parameter
func processMap(m map[string]int) {
    m["new"] = 100  // Modifies original map
}`,
        },
        {
          command: 'Map with Custom Key Type',
          description: 'Use structs as map keys',
          usage: 'map[StructType]valueType',
          example: `// Map with custom key type
type Person struct {
    Name string
    Age  int
}

func (p Person) String() string {
    return fmt.Sprintf("%s (%d)", p.Name, p.Age)
}

scores := map[Person]int{
    {"Alice", 30}: 95,
    {"Bob", 25}:   87,
}`,
        },
        {
          command: 'Concurrent Safe Map',
          description: 'Use sync.Map for concurrent access',
          usage: 'sync.Map{}',
          example: `// Concurrent map access (not safe)
// Use sync.Map for concurrent access
var safeMap sync.Map
safeMap.Store("key", "value")
if val, ok := safeMap.Load("key"); ok {
    fmt.Println(val)
}`,
        },
      ],
    },
    {
      title: 'Structs and Interfaces',
      commands: [
        {
          command: 'Basic Struct Definition',
          description: 'Define custom data structures',
          usage: 'type Name struct { field1 type1; field2 type2 }',
          example: `// Basic struct
type Person struct {
    Name string
    Age  int
    Email string
}`,
        },
        {
          command: 'Struct with Tags',
          description: 'Add metadata to struct fields',
          usage: 'field type \`tag:"value"\`',
          example: `// Struct with tags
type User struct {
    ID       int    \`json:"id"\`
    Username string \`json:"username" db:"username"\`
    Password string \`json:"-" db:"password"\` // Hyphen means ignore in JSON
    Created  time.Time \`json:"created_at"\`
}`,
        },
        {
          command: 'Embedded Struct Composition',
          description: 'Compose structs by embedding',
          usage: 'type Child struct { Parent; otherField type }',
          example: `// Embedded struct (composition)
type Address struct {
    Street  string
    City    string
    Country string
}

type PersonWithAddress struct {
    Person  // Embedded
    Address // Embedded
    Phone   string
}`,
        },
        {
          command: 'Struct Methods',
          description: 'Define methods on structs',
          usage: 'func (s Struct) Method() returnType { }',
          example: `// Struct methods
func (p Person) String() string {
    return fmt.Sprintf("%s (%d years old)", p.Name, p.Age)
}

func (p *Person) HaveBirthday() {
    p.Age++
}`,
        },
        {
          command: 'Struct Constructors',
          description: 'Create constructor functions for structs',
          usage: 'func NewStruct(params) *Struct { }',
          example: `// Struct constructors
func NewPerson(name string, age int) *Person {
    return &Person{
        Name: name,
        Age:  age,
    }
}`,
        },
        {
          command: 'Using Structs',
          description: 'Create and use struct instances',
          usage: 'structName{field: value}',
          example: `// Using structs
p := Person{
    Name: "Alice",
    Age:  30,
    Email: "alice@example.com",
}

// Field access
fmt.Println(p.Name)
p.Age = 31`,
        },
        {
          command: 'Pointer to Struct',
          description: 'Work with struct pointers',
          usage: '&struct, pointer.field',
          example: `// Pointer to struct
ptr := &p
ptr.Name = "Bob"`,
        },
        {
          command: 'Struct Literals',
          description: 'Initialize structs in different ways',
          usage: 'Struct{field: value} or Struct{value1, value2}',
          example: `// Struct literals
p1 := Person{Name: "Alice", Age: 30}
p2 := Person{"Bob", 25, "bob@example.com"} // Must provide all fields`,
        },
        {
          command: 'Anonymous Struct',
          description: 'Create structs without named type',
          usage: 'struct { field type }{value}',
          example: `// Anonymous struct
user := struct {
    Name string
    Age  int
}{
    Name: "Charlie",
    Age:  35,
}`,
        },
        {
          command: 'Comparing Structs',
          description: 'Compare struct instances',
          usage: 'struct1 == struct2',
          example: `// Comparing structs
a := Person{Name: "Alice", Age: 30}
b := Person{Name: "Alice", Age: 30}
fmt.Println(a == b) // true (if all fields are comparable)`,
        },
        {
          command: 'Basic Interface Definition',
          description: 'Define behavior contracts',
          usage: 'type Name interface { method1(); method2() }',
          example: `// Basic interface
type Shape interface {
    Area() float64
    Perimeter() float64
}`,
        },
        {
          command: 'Interface with Multiple Methods',
          description: 'Interfaces with multiple method requirements',
          usage: 'type Name interface { method1() error; method2() int }',
          example: `// Interface with multiple methods
type Writer interface {
    Write([]byte) (int, error)
    Flush() error
}`,
        },
        {
          command: 'Empty Interface',
          description: 'Interface that accepts any type',
          usage: 'interface{} or any',
          example: `// Empty interface (any type)
type Any interface{}`,
        },
        {
          command: 'Interface Embedding',
          description: 'Compose interfaces by embedding',
          usage: 'type Combined interface { Interface1; Interface2 }',
          example: `// Interface embedding
type Reader interface {
    Read([]byte) (int, error)
}

type ReadWriter interface {
    Reader
    Writer
}`,
        },
        {
          command: 'Implementing Interface',
          description: 'Create types that satisfy interfaces',
          usage: 'func (t Type) Method() returnType { }',
          example: `// Implementing interface
type Rectangle struct {
    Width  float64
    Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}`,
        },
        {
          command: 'Using Interfaces',
          description: 'Use interfaces as function parameters',
          usage: 'func func(s Interface) { }',
          example: `// Using interfaces
func PrintShapeInfo(s Shape) {
    fmt.Printf("Area: %.2f, Perimeter: %.2f\n", s.Area(), s.Perimeter())
}`,
        },
        {
          command: 'Interface as Field',
          description: 'Store interfaces in struct fields',
          usage: 'type Struct struct { field Interface }',
          example: `// Interface as field
type Drawer struct {
    shapes []Shape
}

func (d *Drawer) AddShape(s Shape) {
    d.shapes = append(d.shapes, s)
}

func (d *Drawer) DrawAll() {
    for _, shape := range d.shapes {
        PrintShapeInfo(shape)
    }
}`,
        },
        {
          command: 'Type Assertion',
          description: 'Convert interface to concrete type',
          usage: 'value := interface.(ConcreteType)',
          example: `// Type assertion
var s Shape = Rectangle{Width: 10, Height: 5}
if rect, ok := s.(Rectangle); ok {
    fmt.Printf("Rectangle: %.2f x %.2f\n", rect.Width, rect.Height)
}`,
        },
        {
          command: 'Type Switch',
          description: 'Switch on interface type',
          usage: 'switch v := i.(type) { case Type: ... }',
          example: `// Type switch
func describeType(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("Integer: %d\n", v)
    case string:
        fmt.Printf("String: %s\n", v)
    case Rectangle:
        fmt.Printf("Rectangle: %.2f x %.2f\n", v.Width, v.Height)
    default:
        fmt.Printf("Unknown type: %T\n", v)
    }
}`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Error Handling and Testing',
      commands: [
        {
          command: 'Basic Error Handling',
          description: 'Handle errors with if statements',
          usage: 'if err != nil { return err }',
          example: `// Basic error handling
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Using error handling
result, err := divide(10, 0)
if err != nil {
    fmt.Printf("Error: %v\n", err)
    return
}
fmt.Printf("Result: %.2f\n", result)`,
        },
        {
          command: 'Custom Error Type',
          description: 'Create your own error types',
          usage: 'type Error struct { Field string; Message string }',
          example: `// Custom error type
type ValidationError struct {
    Field   string
    Message string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("validation error in field %s: %s", e.Field, e.Message)
}

func validateAge(age int) error {
    if age < 0 {
        return ValidationError{Field: "age", Message: "age cannot be negative"}
    }
    if age > 120 {
        return ValidationError{Field: "age", Message: "age seems unrealistic"}
    }
    return nil
}`,
        },
        {
          command: 'Error Wrapping',
          description: 'Wrap errors with context (Go 1.13+)',
          usage: 'fmt.Errorf("context: %w", err)',
          example: `// Error wrapping (Go 1.13+)
func processFile(filename string) error {
    content, err := os.ReadFile(filename)
    if err != nil {
        return fmt.Errorf("failed to read file %s: %w", filename, err)
    }
    // Process content
    return nil
}`,
        },
        {
          command: 'Error Unwrapping',
          description: 'Check and unwrap errors',
          usage: 'errors.Is(err, target), errors.As(err, &target)',
          example: `// Error unwrapping
func handleError(err error) {
    if errors.Is(err, os.ErrNotExist) {
        fmt.Println("File does not exist")
    } else if errors.Is(err, os.ErrPermission) {
        fmt.Println("Permission denied")
    }
    
    var validationErr ValidationError
    if errors.As(err, &validationErr) {
        fmt.Printf("Validation error in field %s\n", validationErr.Field)
    }
}`,
        },
        {
          command: 'Panic and Recover',
          description: 'Handle runtime panics',
          usage: 'panic(), recover()',
          example: `// Panic and recover
func riskyOperation() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Printf("Recovered from panic: %v\n", r)
        }
    }()
    
    // Something that might panic
    panic("something went wrong")
}`,
        },
        {
          command: 'Basic Test Function',
          description: 'Create simple unit tests',
          usage: 'func TestFunction(t *testing.T) { }',
          example: `// Basic test
func TestAdd(t *testing.T) {
    result := add(2, 3)
    expected := 5
    if result != expected {
        t.Errorf("add(2, 3) = %d; want %d", result, expected)
    }
}`,
        },
        {
          command: 'Table-Driven Tests',
          description: 'Test multiple cases with struct slices',
          usage: 'tests := []struct { name string; input type; expected type }',
          example: `// Table-driven tests
func TestCalculateArea(t *testing.T) {
    tests := []struct {
        name     string
        width    float64
        height   float64
        expected float64
    }{
        {"square", 5.0, 5.0, 25.0},
        {"rectangle", 10.0, 5.0, 50.0},
        {"zero width", 0.0, 5.0, 0.0},
        {"zero height", 5.0, 0.0, 0.0},
    }
    
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := calculateArea(tt.width, tt.height)
            if result != tt.expected {
                t.Errorf("calculateArea(%f, %f) = %f; want %f",
                    tt.width, tt.height, result, tt.expected)
            }
        })
    }
}`,
        },
        {
          command: 'Error Testing',
          description: 'Test error conditions and types',
          usage: 'Test error returns and types',
          example: `// Error testing
func TestValidateAge(t *testing.T) {
    tests := []struct {
        name    string
        age     int
        wantErr bool
        errType error
    }{
        {"valid age", 25, false, nil},
        {"negative age", -1, true, ValidationError{}},
        {"too old", 130, true, ValidationError{}},
    }
    
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            err := validateAge(tt.age)
            if (err != nil) != tt.wantErr {
                t.Errorf("validateAge(%d) error = %v; wantErr %v",
                    tt.age, err, tt.wantErr)
            }
            
            if tt.wantErr && tt.errType != nil {
                var validationErr ValidationError
                if !errors.As(err, &validationErr) {
                    t.Errorf("validateAge(%d) error type = %T; want %T",
                        tt.age, err, tt.errType)
                }
            }
        })
    }
}`,
        },
        {
          command: 'Benchmark Tests',
          description: 'Measure performance of functions',
          usage: 'func BenchmarkFunction(b *testing.B) { }',
          example: `// Benchmark tests
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        add(2, 3)
    }
}

func BenchmarkStringConcatenation(b *testing.B) {
    str1 := "Hello, "
    str2 := "World!"
    
    b.ResetTimer()
    for i := 0; i < b.N; i++ {
        result := str1 + str2
        _ = result
    }
}`,
        },
        {
          command: 'Test Coverage',
          description: 'Generate and analyze test coverage',
          usage: 'go test -cover ./...',
          example: `# Run tests with coverage
go test -cover ./...

# Generate coverage report
go test -coverprofile=coverage.out ./...
go tool cover -html=coverage.out -o coverage.html

# Show coverage percentage
go test -cover ./... | grep "coverage:"`,
        },
        {
          command: 'CI/CD Configuration',
          description: 'Set up continuous integration',
          usage: 'GitHub Actions workflow',
          example: `# GitHub Actions workflow (.github/workflows/test.yml)
name: Test

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        go-version: [1.19, 1.20, 1.21]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Go
      uses: actions/setup-go@v3
      with:
        go-version: \${{ matrix.go-version }}
    
    - name: Download dependencies
      run: go mod download
    
    - name: Run tests
      run: go test -v -race -coverprofile=coverage.out ./...
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage.out
        flags: unittests
        name: codecov-umbrella`,
        },
      ],
    },
    {
      title: 'Concurrency and Parallelism',
      commands: [
        {
          command: 'Basic Goroutine',
          description: 'Start lightweight threads',
          usage: 'go functionName()',
          example: `// Basic goroutine
func sayHello(name string) {
    for i := 0; i < 5; i++ {
        fmt.Printf("Hello, %s! (%d)\n", name, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    // Start goroutine
    go sayHello("Alice")
    go sayHello("Bob")
    
    // Wait for goroutines to finish
    time.Sleep(1 * time.Second)
    fmt.Println("Main function finished")
}`,
        },
        {
          command: 'Anonymous Goroutine',
          description: 'Start goroutine with anonymous function',
          usage: 'go func() { }()',
          example: `// Goroutine with anonymous function
func main() {
    go func() {
        fmt.Println("Anonymous goroutine")
    }()
    
    // Goroutine with parameters
    go func(msg string) {
        fmt.Println(msg)
    }("Hello from goroutine")
    
    time.Sleep(100 * time.Millisecond)
}`,
        },
        {
          command: 'Goroutine with Closure',
          description: 'Handle closures in goroutines correctly',
          usage: 'go func(param type) { }(variable)',
          example: `// Goroutine with closure
func main() {
    numbers := []int{1, 2, 3, 4, 5}
    
    for _, num := range numbers {
        go func(n int) {
            fmt.Printf("Processing %d\n", n)
        }(num) // Pass num as parameter to avoid race condition
    }
    
    time.Sleep(100 * time.Millisecond)
}`,
        },
        {
          command: 'Worker Pattern',
          description: 'Implement worker pool pattern',
          usage: 'Channels + goroutines for work distribution',
          example: `// Goroutine lifecycle management
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("Worker %d processing job %d\n", id, j)
        time.Sleep(time.Second)
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)
    
    // Start workers
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }
    
    // Send jobs
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)
    
    // Collect results
    for a := 1; a <= 5; a++ {
        <-results
    }
}`,
        },
        {
          command: 'Basic Channel Operations',
          description: 'Send and receive through channels',
          usage: 'make(chan type), ch <- value, value := <-ch',
          example: `// Basic channel operations
func main() {
    // Create channel
    ch := make(chan int)
    
    // Send data in goroutine
    go func() {
        ch <- 42 // Send value to channel
    }()
    
    // Receive data
    value := <-ch
    fmt.Printf("Received: %d\n", value)
}`,
        },
        {
          command: 'Buffered Channel',
          description: 'Channels with capacity for non-blocking sends',
          usage: 'make(chan type, capacity)',
          example: `// Buffered channel
func main() {
    // Buffered channel with capacity 3
    ch := make(chan string, 3)
    
    // Send without blocking
    ch <- "hello"
    ch <- "world"
    ch <- "go"
    
    // Receive
    fmt.Println(<-ch)
    fmt.Println(<-ch)
    fmt.Println(<-ch)
}`,
        },
        {
          command: 'Channel Directions',
          description: 'Specify send-only or receive-only channels',
          usage: 'chan<- type (send), <-chan type (receive)',
          example: `// Channel directions
func sender(ch chan<- int) {
    for i := 0; i < 5; i++ {
        ch <- i
        fmt.Printf("Sent: %d\n", i)
    }
    close(ch)
}

func receiver(ch <-chan int) {
    for value := range ch {
        fmt.Printf("Received: %d\n", value)
    }
}

func main() {
    ch := make(chan int)
    go sender(ch)
    receiver(ch)
}`,
        },
        {
          command: 'Select Statement',
          description: 'Wait on multiple channel operations',
          usage: 'select { case <-ch1: ... case <-ch2: ... }',
          example: `// Select statement
func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "from ch1"
    }()
    
    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "from ch2"
    }()
    
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        case <-time.After(3 * time.Second):
            fmt.Println("Timeout!")
        }
    }
}`,
        },
        {
          command: 'Select with Default',
          description: 'Non-blocking channel operations',
          usage: 'select { case ch <- value: ... default: ... }',
          example: `// Select with default
func main() {
    ch := make(chan int)
    
    for i := 0; i < 5; i++ {
        select {
        case ch <- i:
            fmt.Printf("Sent: %d\n", i)
        default:
            fmt.Printf("Channel full, dropped: %d\n", i)
        }
    }
}`,
        },
        {
          command: 'Mutex for Mutual Exclusion',
          description: 'Protect shared resources from race conditions',
          usage: 'sync.Mutex{}, mu.Lock(), mu.Unlock()',
          example: `// Mutex for mutual exclusion
type Counter struct {
    mu    sync.Mutex
    value int
}

func (c *Counter) Increment() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.value++
}

func (c *Counter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.value
}`,
        },
        {
          command: 'WaitGroup for Goroutine Coordination',
          description: 'Wait for multiple goroutines to complete',
          usage: 'sync.WaitGroup{}, wg.Add(), wg.Done(), wg.Wait()',
          example: `// WaitGroup for waiting for goroutines
func main() {
    var wg sync.WaitGroup
    
    for i := 0; i < 5; i++ {
        wg.Add(1)
        go func(id int) {
            defer wg.Done()
            fmt.Printf("Worker %d starting\n", id)
            time.Sleep(time.Second)
            fmt.Printf("Worker %d finished\n", id)
        }(i)
    }
    
    wg.Wait()
    fmt.Println("All workers finished")
}`,
        },
        {
          command: 'Once for One-Time Initialization',
          description: 'Initialize resources exactly once',
          usage: 'sync.Once{}, once.Do(func() { })',
          example: `// Once for one-time initialization
type Singleton struct {
    data string
}

var (
    instance *Singleton
    once     sync.Once
)

func GetInstance() *Singleton {
    once.Do(func() {
        instance = &Singleton{data: "singleton data"}
    })
    return instance
}`,
        },
        {
          command: 'RWMutex for Read-Write Locks',
          description: 'Allow multiple readers or exclusive writer',
          usage: 'sync.RWMutex{}, mu.RLock(), mu.RUnlock()',
          example: `// RWMutex for read-write locks
type Cache struct {
    mu    sync.RWMutex
    items map[string]string
}

func NewCache() *Cache {
    return &Cache{
        items: make(map[string]string),
    }
}

func (c *Cache) Get(key string) (string, bool) {
    c.mu.RLock()
    defer c.mu.RUnlock()
    value, exists := c.items[key]
    return value, exists
}

func (c *Cache) Set(key, value string) {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.items[key] = value
}`,
        },
      ],
    },
    {
      title: 'Go Best Practices and Patterns',
      commands: [
        {
          command: 'Standard Go Project Layout',
          description: 'Organize Go projects effectively',
          usage: 'Follow standard directory structure',
          example: `# Standard Go project layout
myproject/
├── cmd/
│   ├── server/
│   │   └── main.go
│   └── client/
│       └── main.go
├── internal/
│   ├── auth/
│   ├── database/
│   └── handlers/
├── pkg/
│   ├── utils/
│   └── models/
├── api/
│   └── v1/
├── web/
│   ├── static/
│   └── templates/
├── configs/
├── scripts/
├── docs/
├── build/
├── deployments/
├── test/
├── go.mod
├── go.sum
├── README.md
└── Makefile`,
        },
        {
          command: 'Package Naming Conventions',
          description: 'Choose appropriate package names',
          usage: 'Short, lowercase, single words',
          example: `# Package naming conventions
// Package names should be short, lowercase, single words
package http
package json
package time

// Avoid common package names
package main
package util  // Avoid, be more specific
package types  // Avoid, be more specific

// Good package names
package server
package client
package auth
package database`,
        },
        {
          command: 'Interface Naming',
          description: 'Name interfaces appropriately',
          usage: '-er suffix for single method, descriptive for multiple',
          example: `# Interface naming
// Interface names should end with -er if they have only one method
type Reader interface {
    Read([]byte) (int, error)
}

type Writer interface {
    Write([]byte) (int, error)
}

// For interfaces with multiple methods, use descriptive names
type FileSystem interface {
    Open(name string) (File, error)
    Create(name string) (File, error)
    Remove(name string) error
}`,
        },
        {
          command: 'Function Naming',
          description: 'Follow Go function naming conventions',
          usage: 'CamelCase, exported vs unexported',
          example: `# Function naming
// Functions should be named in CamelCase
func calculateTotal(items []Item) float64 {
    // Implementation
}

// Exported functions (public) start with uppercase
func CalculateTotal(items []Item) float64 {
    // Implementation
}

// Unexported functions (private) start with lowercase
func calculateTotal(items []Item) float64 {
    // Implementation
}`,
        },
        {
          command: 'Variable Naming',
          description: 'Choose descriptive variable names',
          usage: 'Short for local, descriptive for exported',
          example: `# Variable naming
// Local variables should be short and descriptive
func processUser(u User) error {
    if u.Name == "" {
        return errors.New("empty name")
    }
    // Process user
    return nil
}

// Exported constants should be descriptive
const MaxRetryAttempts = 3
const DefaultTimeout = 30 * time.Second`,
        },
        {
          command: 'Error Handling Patterns',
          description: 'Follow Go error handling best practices',
          usage: 'Handle errors immediately, wrap with context',
          example: `// Error handling patterns
func processFile(filename string) error {
    // Early return pattern
    if filename == "" {
        return fmt.Errorf("filename cannot be empty")
    }
    
    content, err := os.ReadFile(filename)
    if err != nil {
        return fmt.Errorf("failed to read file %s: %w", filename, err)
    }
    
    // Process content
    return nil
}`,
        },
        {
          command: 'Resource Management',
          description: 'Properly manage resources with defer',
          usage: 'defer for cleanup, file handles, connections',
          example: `// Resource management
func processDatabase() error {
    db, err := sql.Open("postgres", dsn)
    if err != nil {
        return err
    }
    defer db.Close()
    
    tx, err := db.Begin()
    if err != nil {
        return err
    }
    defer tx.Rollback() // Rollback if not committed
    
    // Use transaction
    if err := tx.Commit(); err != nil {
        return err
    }
    
    return nil
}`,
        },
        {
          command: 'Interface Design',
          description: 'Design effective interfaces',
          usage: 'Small interfaces, accept interfaces return structs',
          example: `// Interface design
// Small interfaces are better
type Reader interface {
    Read([]byte) (int, error)
}

// Accept interfaces, return structs
func ProcessData(data []byte, logger Logger) error {
    logger.Log("Processing data")
    // Process data
    return nil
}

// Interface for testing
type Database interface {
    GetUser(id int) (*User, error)
    SaveUser(user *User) error
    DeleteUser(id int) error
}`,
        },
        {
          command: 'Performance Profiling',
          description: 'Profile Go applications for performance',
          usage: 'pprof package for CPU and memory profiling',
          example: `// Profiling Go programs

// CPU profiling
func main() {
    f, err := os.Create("cpu.prof")
    if err != nil {
        log.Fatal(err)
    }
    defer f.Close()
    
    pprof.StartCPUProfile(f)
    defer pprof.StopCPUProfile()
    
    // Your code here
    expensiveOperation()
}`,
        },
        {
          command: 'Memory Profiling',
          description: 'Profile memory usage and allocations',
          usage: 'pprof.WriteHeapProfile()',
          example: `// Memory profiling
func main() {
    // Your code here
    expensiveOperation()
    
    f, err := os.Create("mem.prof")
    if err != nil {
        log.Fatal(err)
    }
    defer f.Close()
    
    pprof.WriteHeapProfile(f)
}`,
        },
        {
          command: 'Benchmarking Best Practices',
          description: 'Write effective benchmarks',
          usage: 'b.ResetTimer(), b.ReportAllocs()',
          example: `// Benchmarking
func BenchmarkStringConcatenation(b *testing.B) {
    str1 := "Hello, "
    str2 := "World!"
    
    b.ResetTimer()
    for i := 0; i < b.N; i++ {
        result := str1 + str2
        _ = result
    }
}

func BenchmarkStringBuilder(b *testing.B) {
    str1 := "Hello, "
    str2 := "World!"
    
    b.ResetTimer()
    b.ReportAllocs()
    for i := 0; i < b.N; i++ {
        var builder strings.Builder
        builder.WriteString(str1)
        builder.WriteString(str2)
        result := builder.String()
        _ = result
    }
}`,
        },
        {
          command: 'Memory Optimization',
          description: 'Optimize memory usage in Go',
          usage: 'strings.Builder, sync.Pool, pre-allocation',
          example: `// Memory optimization
// Use strings.Builder for string concatenation
func concatenateStrings(parts []string) string {
    var builder strings.Builder
    builder.Grow(len(parts) * 10) // Pre-allocate capacity
    
    for _, part := range parts {
        builder.WriteString(part)
    }
    
    return builder.String()
}

// Use sync.Pool for object reuse
var bufferPool = sync.Pool{
    New: func() interface{} {
        return make([]byte, 0, 1024)
    },
}

func processData(data []byte) []byte {
    buf := bufferPool.Get().([]byte)
    defer bufferPool.Put(buf[:0]) // Reset length but keep capacity
    
    buf = append(buf, data...)
    return append([]byte(nil), buf...) // Return copy
}`,
        },
        {
          command: 'Security Best Practices',
          description: 'Write secure Go code',
          usage: 'Input validation, SQL injection prevention',
          example: `// Input validation
func validateUserInput(input string) error {
    // Check length
    if len(input) == 0 {
        return errors.New("input cannot be empty")
    }
    
    if len(input) > 1000 {
        return errors.New("input too long")
    }
    
    // Check for dangerous characters
    dangerous := []string{"<", ">", "&", "\"", "'", "javascript:", "data:"}
    for _, char := range dangerous {
        if strings.Contains(input, char) {
            return fmt.Errorf("input contains dangerous character: %s", char)
        }
    }
    
    return nil
}

// SQL injection prevention
func getUserByID(db *sql.DB, id int) (*User, error) {
    // Use parameterized queries
    query := "SELECT id, name, email FROM users WHERE id = ?"
    
    var user User
    err := db.QueryRow(query, id).Scan(&user.ID, &user.Name, &user.Email)
    if err != nil {
        return nil, fmt.Errorf("failed to get user: %w", err)
    }
    
    return &user, nil
}`,
        },
      ],
    },
  ],
};
