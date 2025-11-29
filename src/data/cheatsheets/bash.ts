import { Terminal } from 'lucide-react';

export const bashCheatsheet = {
  id: 'bash',
  name: 'Bash',
  description: 'Bash scripting & shell commands',
  icon: Terminal,
  colorTheme: 'slate' as const,
  sections: [
    {
      title: 'Bash Basics',
      commands: [
        {
          command: 'Shebang',
          description: 'Script header',
          usage: '#!/bin/bash',
          example: '#!/bin/bash\n# First line of every bash script\n\n#!/usr/bin/env bash  # More portable',
        },
        {
          command: 'echo',
          description: 'Print to stdout',
          usage: 'echo [options] string',
          example: 'echo "Hello World"\necho -n "No newline"  # No trailing newline\necho -e "Line1\\nLine2"  # Enable escape sequences',
        },
        {
          command: 'Comments',
          description: 'Add comments',
          usage: '# Single line comment',
          example: '# This is a comment\necho "code"  # Inline comment',
        },
        {
          command: 'Command substitution',
          description: 'Store command output',
          usage: '$(command) or `command`',
          example: 'today=$(date +%Y-%m-%d)\necho "Today is $today"\n\n# Old syntax (avoid)\ntoday=`date +%Y-%m-%d`',
        },
      ],
    },
    {
      title: 'Variables',
      commands: [
        {
          command: 'Variable assignment',
          description: 'Create variables',
          usage: 'name=value',
          example: 'name="John"\nage=30\npath=/home/user\n\n# No spaces around =',
        },
        {
          command: 'Variable expansion',
          description: 'Use variables',
          usage: '$variable or ${variable}',
          example: 'echo $name\necho ${name}\necho "Hello, $name"',
        },
        {
          command: 'Read-only variables',
          description: 'Constant variables',
          usage: 'readonly variable',
          example: 'readonly API_KEY="secret123"\nAPI_KEY="new"  # Error: readonly',
        },
        {
          command: 'Environment variables',
          description: 'Export variables',
          usage: 'export VARIABLE=value',
          example: 'export PATH=$PATH:/usr/local/bin\nexport DATABASE_URL="postgres://..."',
        },
        {
          command: 'Default values',
          description: 'Variable with fallback',
          usage: '${var:-default}',
          example: 'name=${1:-"Guest"}\necho "Hello, $name"\n\n# If $1 empty, use "Guest"',
        },
        {
          command: 'String length',
          description: 'Get string length',
          usage: '${#variable}',
          example: 'name="John"\necho ${#name}  # Output: 4',
        },
      ],
    },
    {
      title: 'Arrays',
      commands: [
        {
          command: 'Array declaration',
          description: 'Create array',
          usage: 'array=(val1 val2 val3)',
          example: 'fruits=("apple" "banana" "orange")\nnumbers=(1 2 3 4 5)',
        },
        {
          command: 'Access array elements',
          description: 'Get array values',
          usage: '${array[index]}',
          example: 'fruits=("apple" "banana" "orange")\necho ${fruits[0]}  # apple\necho ${fruits[1]}  # banana',
        },
        {
          command: 'All array elements',
          description: 'Get all values',
          usage: '${array[@]} or ${array[*]}',
          example: 'fruits=("apple" "banana" "orange")\necho ${fruits[@]}  # apple banana orange\necho "Fruits: ${fruits[*]}"',
        },
        {
          command: 'Array length',
          description: 'Get array size',
          usage: '${#array[@]}',
          example: 'fruits=("apple" "banana" "orange")\necho ${#fruits[@]}  # Output: 3',
        },
        {
          command: 'Add to array',
          description: 'Append elements',
          usage: 'array+=(element)',
          example: 'fruits=("apple" "banana")\nfruits+=("orange")\necho ${fruits[@]}  # apple banana orange',
        },
        {
          command: 'Associative arrays',
          description: 'Key-value arrays (Bash 4+)',
          usage: 'declare -A array',
          example: 'declare -A user\nuser[name]="John"\nuser[age]=30\necho ${user[name]}  # John',
        },
      ],
    },
    {
      title: 'Conditionals',
      commands: [
        {
          command: 'if statement',
          description: 'Basic if condition',
          usage: 'if [ condition ]; then ... fi',
          example: 'if [ "$age" -gt 18 ]; then\n  echo "Adult"\nfi',
        },
        {
          command: 'if-else',
          description: 'If with else',
          usage: 'if [ condition ]; then ... else ... fi',
          example: 'if [ "$age" -ge 18 ]; then\n  echo "Adult"\nelse\n  echo "Minor"\nfi',
        },
        {
          command: 'if-elif-else',
          description: 'Multiple conditions',
          usage: 'if [ cond1 ]; then ... elif [ cond2 ]; then ... fi',
          example: 'if [ "$score" -ge 90 ]; then\n  echo "A"\nelif [ "$score" -ge 80 ]; then\n  echo "B"\nelse\n  echo "C"\nfi',
        },
        {
          command: 'String comparison',
          description: 'Compare strings',
          usage: '[ "$str1" = "$str2" ]',
          example: 'if [ "$name" = "John" ]; then\n  echo "Hello John"\nfi\n\nif [ "$name" != "John" ]; then\n  echo "Not John"\nfi',
        },
        {
          command: 'Numeric comparison',
          description: 'Compare numbers',
          usage: '[ $num1 -op $num2 ]',
          example: '# -eq (equal), -ne (not equal)\n# -gt (greater), -lt (less)\n# -ge (>=), -le (<=)\n\nif [ $age -gt 18 ]; then\n  echo "Adult"\nfi',
        },
        {
          command: 'File tests',
          description: 'Check file conditions',
          usage: '[ -test file ]',
          example: 'if [ -f "file.txt" ]; then\n  echo "File exists"\nfi\n\n# -f (file), -d (directory)\n# -e (exists), -r (readable)\n# -w (writable), -x (executable)',
        },
        {
          command: 'Logical operators',
          description: 'AND, OR, NOT',
          usage: '[ cond1 ] && [ cond2 ]',
          example: 'if [ $age -gt 18 ] && [ "$name" = "John" ]; then\n  echo "Adult John"\nfi\n\nif [ $age -lt 18 ] || [ "$role" = "admin" ]; then\n  echo "Access granted"\nfi',
        },
        {
          command: '[[ ]] (extended test)',
          description: 'Modern test syntax',
          usage: '[[ condition ]]',
          example: 'if [[ $age -gt 18 && $name == "John" ]]; then\n  echo "Adult John"\nfi\n\n# Pattern matching\nif [[ $file == *.txt ]]; then\n  echo "Text file"\nfi',
        },
      ],
    },
    {
      title: 'Loops',
      commands: [
        {
          command: 'for loop',
          description: 'Iterate over list',
          usage: 'for var in list; do ... done',
          example: 'for fruit in apple banana orange; do\n  echo $fruit\ndone\n\nfor i in {1..5}; do\n  echo "Number $i"\ndone',
        },
        {
          command: 'C-style for loop',
          description: 'Numeric iteration',
          usage: 'for ((init; condition; increment))',
          example: 'for ((i=0; i<5; i++)); do\n  echo "Count: $i"\ndone',
        },
        {
          command: 'while loop',
          description: 'Loop while condition true',
          usage: 'while [ condition ]; do ... done',
          example: 'counter=0\nwhile [ $counter -lt 5 ]; do\n  echo $counter\n  ((counter++))\ndone',
        },
        {
          command: 'until loop',
          description: 'Loop until condition true',
          usage: 'until [ condition ]; do ... done',
          example: 'counter=0\nuntil [ $counter -ge 5 ]; do\n  echo $counter\n  ((counter++))\ndone',
        },
        {
          command: 'break',
          description: 'Exit loop',
          usage: 'break',
          example: 'for i in {1..10}; do\n  if [ $i -eq 5 ]; then\n    break\n  fi\n  echo $i\ndone',
        },
        {
          command: 'continue',
          description: 'Skip iteration',
          usage: 'continue',
          example: 'for i in {1..5}; do\n  if [ $i -eq 3 ]; then\n    continue\n  fi\n  echo $i\ndone  # Skips 3',
        },
      ],
    },
    {
      title: 'Functions',
      commands: [
        {
          command: 'Function definition',
          description: 'Create function',
          usage: 'function_name() { commands; }',
          example: 'greet() {\n  echo "Hello, $1"\n}\n\ngreet "John"  # Call function',
        },
        {
          command: 'Function with return',
          description: 'Return value',
          usage: 'return value',
          example: 'add() {\n  result=$(($1 + $2))\n  return $result\n}\n\nadd 5 3\necho $?  # 8',
        },
        {
          command: 'Local variables',
          description: 'Function-scoped variables',
          usage: 'local var=value',
          example: 'myfunction() {\n  local temp="local value"\n  echo $temp\n}\n\nmyfunction',
        },
        {
          command: 'Function arguments',
          description: 'Access parameters',
          usage: '$1, $2, ... $@',
          example: 'greet() {\n  echo "Hello, $1"\n  echo "You are $2 years old"\n}\n\ngreet "John" 30',
        },
      ],
    },
    {
      title: 'Input/Output',
      commands: [
        {
          command: 'read',
          description: 'Read user input',
          usage: 'read variable',
          example: 'echo "Enter your name:"\nread name\necho "Hello, $name"\n\nread -p "Enter age: " age\nread -s password  # Silent input',
        },
        {
          command: 'Redirection',
          description: 'Redirect input/output',
          usage: '> file (overwrite), >> file (append)',
          example: 'echo "Hello" > file.txt  # Overwrite\necho "World" >> file.txt  # Append\n\ncommand < input.txt  # Read from file',
        },
        {
          command: 'Pipe',
          description: 'Chain commands',
          usage: 'command1 | command2',
          example: 'cat file.txt | grep "error"\nls -l | wc -l  # Count files',
        },
        {
          command: 'Here document',
          description: 'Multi-line input',
          usage: '<< EOF ... EOF',
          example: 'cat << EOF\nThis is line 1\nThis is line 2\nEOF\n\nmysql -u user << SQL\nSELECT * FROM users;\nSQL',
        },
        {
          command: 'Here string',
          description: 'Pass string as input',
          usage: '<<< "string"',
          example: 'grep "pattern" <<< "text to search"\nbc <<< "5 + 3"  # 8',
        },
      ],
    },
    {
      title: 'String Manipulation',
      commands: [
        {
          command: 'String concatenation',
          description: 'Combine strings',
          usage: 'str1$str2',
          example: 'first="Hello"\nlast="World"\nfull="$first $last"\necho $full  # Hello World',
        },
        {
          command: 'Substring',
          description: 'Extract part of string',
          usage: '${string:position:length}',
          example: 'text="Hello World"\necho ${text:0:5}  # Hello\necho ${text:6}    # World',
        },
        {
          command: 'Replace substring',
          description: 'Find and replace',
          usage: '${string/pattern/replacement}',
          example: 'text="Hello World"\necho ${text/World/Universe}  # Hello Universe\necho ${text//o/0}  # Hell0 W0rld (all)',
        },
        {
          command: 'Remove prefix',
          description: 'Remove from start',
          usage: '${string#pattern}',
          example: 'file="path/to/file.txt"\necho ${file#*/}  # to/file.txt\necho ${file##*/}  # file.txt (greedy)',
        },
        {
          command: 'Remove suffix',
          description: 'Remove from end',
          usage: '${string%pattern}',
          example: 'file="file.txt.bak"\necho ${file%.bak}  # file.txt\necho ${file%%.*}  # file (greedy)',
        },
        {
          command: 'Upper/lowercase',
          description: 'Change case (Bash 4+)',
          usage: '${string^^} or ${string,,}',
          example: 'text="Hello World"\necho ${text^^}  # HELLO WORLD\necho ${text,,}  # hello world\necho ${text^}   # Hello world (first char)',
        },
      ],
    },
    {
      title: 'Arithmetic',
      commands: [
        {
          command: '$(( ))',
          description: 'Arithmetic expansion',
          usage: '$((expression))',
          example: 'result=$((5 + 3))\necho $result  # 8\n\necho $((10 * 2))  # 20',
        },
        {
          command: 'let',
          description: 'Arithmetic evaluation',
          usage: 'let expression',
          example: 'let result=5+3\necho $result  # 8\n\nlet counter++\nlet "result = 10 * 2"',
        },
        {
          command: '(( ))',
          description: 'Arithmetic command',
          usage: '((expression))',
          example: 'counter=0\n((counter++))\necho $counter  # 1\n\nif ((counter > 0)); then\n  echo "Positive"\nfi',
        },
        {
          command: 'bc',
          description: 'Floating point math',
          usage: 'bc <<< expression',
          example: 'result=$(bc <<< "10 / 3")\necho $result  # 3.33...\n\nresult=$(bc <<< "scale=2; 10 / 3")\necho $result  # 3.33',
        },
      ],
    },
    {
      title: 'Special Variables',
      commands: [
        {
          command: '$0',
          description: 'Script name',
          usage: '$0',
          example: 'echo "Script name: $0"',
        },
        {
          command: '$1, $2, ...',
          description: 'Positional parameters',
          usage: '$1, $2, $3, ...',
          example: '#!/bin/bash\necho "First arg: $1"\necho "Second arg: $2"\n\n# Run: ./script.sh hello world',
        },
        {
          command: '$#',
          description: 'Number of arguments',
          usage: '$#',
          example: 'echo "You passed $# arguments"',
        },
        {
          command: '$@',
          description: 'All arguments (array)',
          usage: '$@',
          example: 'for arg in "$@"; do\n  echo $arg\ndone',
        },
        {
          command: '$*',
          description: 'All arguments (string)',
          usage: '$*',
          example: 'echo "All args: $*"',
        },
        {
          command: '$?',
          description: 'Last command exit status',
          usage: '$?',
          example: 'ls /nonexistent\nif [ $? -ne 0 ]; then\n  echo "Command failed"\nfi',
        },
        {
          command: '$$',
          description: 'Current process ID',
          usage: '$$',
          example: 'echo "PID: $$"\nlog_file="/tmp/script.$$.log"',
        },
        {
          command: '$!',
          description: 'Last background process PID',
          usage: '$!',
          example: 'sleep 10 &\necho "Background PID: $!"\nwait $!',
        },
      ],
    },
    {
      title: 'Error Handling',
      commands: [
        {
          command: 'set -e',
          description: 'Exit on error',
          usage: 'set -e',
          example: '#!/bin/bash\nset -e\n\n# Script exits if any command fails\ncommand1\ncommand2',
        },
        {
          command: 'set -u',
          description: 'Exit on undefined variable',
          usage: 'set -u',
          example: 'set -u\n\necho $undefined_var  # Error: unbound variable',
        },
        {
          command: 'set -o pipefail',
          description: 'Pipe failure detection',
          usage: 'set -o pipefail',
          example: 'set -o pipefail\n\n# Fails if any command in pipe fails\ncommand1 | command2 | command3',
        },
        {
          command: 'trap',
          description: 'Handle signals',
          usage: 'trap command signal',
          example: 'cleanup() {\n  echo "Cleaning up..."\n  rm -f /tmp/*.tmp\n}\n\ntrap cleanup EXIT\ntrap cleanup INT  # Ctrl+C',
        },
        {
          command: '|| (OR)',
          description: 'Execute on failure',
          usage: 'command || fallback',
          example: 'mkdir /tmp/mydir || echo "Failed to create dir"\ncd /path || exit 1',
        },
        {
          command: '&& (AND)',
          description: 'Execute on success',
          usage: 'command && next_command',
          example: 'cd /tmp && ls\nmkdir mydir && cd mydir && touch file.txt',
        },
      ],
    },
    {
      title: 'Case Statement',
      commands: [
        {
          command: 'case',
          description: 'Pattern matching',
          usage: 'case $var in pattern) commands;; esac',
          example: 'case $1 in\n  start)\n    echo "Starting..."\n    ;;\n  stop)\n    echo "Stopping..."\n    ;;\n  *)\n    echo "Unknown command"\n    ;;\nesac',
        },
        {
          command: 'case with patterns',
          description: 'Multiple patterns',
          usage: 'pattern1|pattern2)',
          example: 'case $file in\n  *.txt|*.log)\n    echo "Text file"\n    ;;\n  *.jpg|*.png)\n    echo "Image file"\n    ;;\nesac',
        },
      ],
    },
    {
      title: 'Process Management',
      commands: [
        {
          command: 'Background execution',
          description: 'Run in background',
          usage: 'command &',
          example: 'long_process &\necho "Running in background"\n\nsleep 10 &\necho "PID: $!"',
        },
        {
          command: 'wait',
          description: 'Wait for background jobs',
          usage: 'wait [PID]',
          example: 'command1 &\npid1=$!\ncommand2 &\npid2=$!\n\nwait $pid1 $pid2\necho "Both completed"',
        },
        {
          command: 'jobs',
          description: 'List background jobs',
          usage: 'jobs',
          example: 'sleep 100 &\nsleep 200 &\njobs  # Lists running jobs',
        },
        {
          command: 'fg',
          description: 'Bring job to foreground',
          usage: 'fg %job_number',
          example: 'sleep 100 &\nfg %1  # Bring to foreground',
        },
        {
          command: 'bg',
          description: 'Resume in background',
          usage: 'bg %job_number',
          example: '# Press Ctrl+Z to suspend\nbg %1  # Resume in background',
        },
      ],
    },
    {
      title: 'Command Line Arguments',
      commands: [
        {
          command: 'getopts',
          description: 'Parse options',
          usage: 'getopts optstring name',
          example: 'while getopts "hv:f:" opt; do\n  case $opt in\n    h) echo "Help"; ;;\n    v) verbose=$OPTARG; ;;\n    f) file=$OPTARG; ;;\n  esac\ndone\n\n# Usage: script.sh -h -v 2 -f file.txt',
        },
        {
          command: 'shift',
          description: 'Shift positional parameters',
          usage: 'shift [n]',
          example: 'echo "First: $1"\nshift\necho "Now first: $1"\nshift 2  # Shift by 2',
        },
      ],
    },
    {
      title: 'Debugging',
      commands: [
        {
          command: 'set -x',
          description: 'Enable debug mode',
          usage: 'set -x',
          example: 'set -x\nname="John"\necho "Hello $name"\nset +x  # Disable',
        },
        {
          command: 'bash -x',
          description: 'Run script in debug mode',
          usage: 'bash -x script.sh',
          example: 'bash -x myscript.sh\n# Shows each command before execution',
        },
        {
          command: 'set -v',
          description: 'Verbose mode',
          usage: 'set -v',
          example: 'set -v\n# Prints commands before executing',
        },
      ],
    },
    {
      title: 'File Operations',
      commands: [
        {
          command: 'Test file exists',
          description: 'Check file presence',
          usage: '[ -f file ]',
          example: 'if [ -f "config.txt" ]; then\n  echo "Config exists"\nfi',
        },
        {
          command: 'Test directory exists',
          description: 'Check directory',
          usage: '[ -d directory ]',
          example: 'if [ -d "/path/to/dir" ]; then\n  echo "Directory exists"\nfi',
        },
        {
          command: 'Test readable/writable',
          description: 'Check permissions',
          usage: '[ -r file ] or [ -w file ]',
          example: 'if [ -r "file.txt" ]; then\n  cat file.txt\nfi\n\nif [ -w "file.txt" ]; then\n  echo "Can write"\nfi',
        },
        {
          command: 'Test executable',
          description: 'Check executable permission',
          usage: '[ -x file ]',
          example: 'if [ -x "./script.sh" ]; then\n  ./script.sh\nfi',
        },
        {
          command: 'Test file size',
          description: 'Check if file has content',
          usage: '[ -s file ]',
          example: 'if [ -s "data.txt" ]; then\n  echo "File has content"\nfi',
        },
      ],
    },
    {
      title: 'Regular Expressions',
      commands: [
        {
          command: '=~ operator',
          description: 'Regex matching',
          usage: '[[ string =~ pattern ]]',
          example: 'email="user@example.com"\nif [[ $email =~ ^[a-z]+@[a-z]+\\.[a-z]+$ ]]; then\n  echo "Valid email"\nfi',
        },
        {
          command: 'grep in script',
          description: 'Pattern search',
          usage: 'grep pattern file',
          example: 'if grep -q "error" log.txt; then\n  echo "Errors found"\nfi\n\n# -q: quiet mode',
        },
      ],
    },
    {
      title: 'Modern Bash Features (Bash 4+)',
      commands: [
        {
          command: 'Associative arrays',
          description: 'Hash maps',
          usage: 'declare -A array',
          example: 'declare -A colors\ncolors[red]="#FF0000"\ncolors[blue]="#0000FF"\necho ${colors[red]}',
        },
        {
          command: 'Globstar',
          description: 'Recursive globbing',
          usage: 'shopt -s globstar',
          example: 'shopt -s globstar\nfor file in **/*.txt; do\n  echo $file\ndone  # All .txt files recursively',
        },
        {
          command: 'Read into array',
          description: 'Read lines into array',
          usage: 'mapfile -t array < file',
          example: 'mapfile -t lines < file.txt\nfor line in "${lines[@]}"; do\n  echo $line\ndone',
        },
        {
          command: 'Case modification',
          description: 'Upper/lowercase',
          usage: '${var^^} or ${var,,}',
          example: 'name="john"\necho ${name^^}  # JOHN\necho ${name^}   # John',
        },
      ],
    },
    {
      title: 'Best Practices',
      commands: [
        {
          command: 'Strict mode',
          description: 'Safe scripting',
          usage: 'set -euo pipefail',
          example: '#!/bin/bash\nset -euo pipefail\nIFS=$\'\\n\\t\'\n\n# Exit on error, undefined vars, pipe failures',
        },
        {
          command: 'Quote variables',
          description: 'Prevent word splitting',
          usage: '"$variable"',
          example: '# Bad\nfile=$1\nrm $file\n\n# Good\nfile="$1"\nrm "$file"',
        },
        {
          command: 'Use functions',
          description: 'Organize code',
          usage: 'function_name() { ... }',
          example: 'setup() {\n  echo "Setting up..."\n}\n\ncleanup() {\n  echo "Cleaning up..."\n}\n\nsetup\n# main code\ncleanup',
        },
        {
          command: 'Check dependencies',
          description: 'Verify commands exist',
          usage: 'command -v cmd',
          example: 'if ! command -v jq &> /dev/null; then\n  echo "jq is not installed"\n  exit 1\nfi',
        },
      ],
    },
  ],
};
