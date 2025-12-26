import { FileSearch } from 'lucide-react';

export const regexCheatsheet = {
  id: 'regex',
  name: 'Regular Expressions',
  description: 'Master Regular Expressions from basics to expert patterns (2024+)',
  icon: FileSearch,
  colorTheme: 'amber' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Regular Expressions',
      commands: [
        {
          command: 'What is a Regular Expression',
          description: 'Understanding regex basics and purpose',
          usage: 'Pattern matching for text processing',
          example: `# Regex is a sequence of characters that forms a search pattern
# Used for: validation, searching, replacing, extracting
# Example: /hello/ matches "hello" in text

# Basic syntax:
# JavaScript: /pattern/flags or new RegExp("pattern", "flags")
# Python: import re; re.search(r"pattern", text)
# Java: Pattern.compile("pattern")`,
        },
        {
          command: 'Basic Pattern Matching',
          description: 'Simple literal string matching',
          usage: 'Exact character matching',
          example: `# Literal matching
/hello/ matches "hello"
/world/ matches "world"
# Case sensitivity
/Hello/ matches "Hello" but not "hello"
# Use i flag for case insensitive: /hello/i`,
        },
        {
          command: 'Regex Engines and Flavors',
          description: 'Different regex implementations',
          usage: 'PCRE, JavaScript, Python, Java, .NET',
          example: `# Common regex engines:
# PCRE (Perl Compatible) - PHP, R, many languages
# JavaScript - ECMAScript standard
# Python re module
# Java java.util.regex
# .NET System.Text.RegularExpressions

# Features vary between engines`,
        },
      ],
    },
    {
      title: 'Basic Character Matching',
      commands: [
        {
          command: 'Literal Characters',
          description: 'Match exact characters',
          usage: 'a, b, c, 1, 2, 3',
          example: `/cat/ matches "cat"
/dog/ matches "dog"
/123/ matches "123"`,
        },
        {
          command: 'Dot (.) Wildcard',
          description: 'Match any single character',
          usage: '. (dot)',
          example: `/h.t/ matches "hat", "hot", "h3t"
/.at/ matches "cat", "bat", "rat"`,
        },
        {
          command: 'Character Classes [abc]',
          description: 'Match any character in set',
          usage: '[character1character2character3]',
          example: `/[abc]/ matches "a", "b", or "c"
/[aeiou]/ matches any vowel
/[123]/ matches "1", "2", or "3"`,
        },
        {
          command: 'Negated Character Classes [^abc]',
          description: 'Match any character NOT in set',
          usage: '[^characters]',
          example: `/[^abc]/ matches anything except "a", "b", "c"
/[^0-9]/ matches any non-digit`,
        },
        {
          command: 'Character Ranges [a-z]',
          description: 'Match range of characters',
          usage: '[start-end]',
          example: `/[a-z]/ matches any lowercase letter
/[A-Z]/ matches any uppercase letter
/[0-9]/ matches any digit`,
        },
      ],
    },
    {
      title: 'Predefined Character Classes',
      commands: [
        {
          command: '\\d - Digits',
          description: 'Match any digit [0-9]',
          usage: '\\d',
          example: `/\\d/ matches "5", "0", "9"
/\\d{3}/ matches "123", "456"
/price: \\d+/ matches "price: 99"`,
        },
        {
          command: '\\D - Non-Digits',
          description: 'Match any non-digit character',
          usage: '\\D',
          example: `/\\D/ matches "a", "$", " "
/\\D+/ matches "hello", "world!"`,
        },
        {
          command: '\\w - Word Characters',
          description: 'Match alphanumeric + underscore [a-zA-Z0-9_]',
          usage: '\\w',
          example: `/\\w/ matches "a", "Z", "5", "_"
/\\w+/ matches "hello123", "user_name"`,
        },
        {
          command: '\\W - Non-Word Characters',
          description: 'Match any non-word character',
          usage: '\\W',
          example: `/\\W/ matches " ", "$", "-", "@"
/\\W+/ matches "!!!", "   "
/\\w+\\W+\\w+/ matches "hello-world"`,
        },
        {
          command: '\\s - Whitespace',
          description: 'Match whitespace characters [space, tab, newline]',
          usage: '\\s',
          example: `/\\s/ matches " ", "\\t", "\\n"
/\\s+/ matches multiple spaces
/\\w+\\s+\\w+/ matches "hello world"`,
        },
        {
          command: '\\S - Non-Whitespace',
          description: 'Match any non-whitespace character',
          usage: '\\S',
          example: `/\\S/ matches "a", "5", "$"
/\\S+/ matches "hello", "world!"`,
        },
      ],
    },
    {
      title: 'Basic Quantifiers',
      commands: [
        {
          command: '* - Zero or More',
          description: 'Match preceding character zero or more times',
          usage: 'character*',
          example: `/ab*c/ matches "ac", "abc", "abbc"
/\\d*/ matches "", "1", "123"`,
        },
        {
          command: '+ - One or More',
          description: 'Match preceding character one or more times',
          usage: 'character+',
          example: `/ab+c/ matches "abc", "abbc"
/\\d+/ matches "1", "123", "456"`,
        },
        {
          command: '? - Zero or One',
          description: 'Match preceding character zero or one time',
          usage: 'character?',
          example: `/colou?r/ matches "color", "colour"
/https?/ matches "http", "https"`,
        },
        {
          command: '{n} - Exact Count',
          description: 'Match exactly n times',
          usage: 'character{n}',
          example: `/\\d{3}/ matches exactly 3 digits
/\\w{5}/ matches exactly 5 word chars
/a{3}/ matches "aaa" only`,
        },
        {
          command: '{n,} - Minimum Count',
          description: 'Match at least n times',
          usage: 'character{n,}',
          example: `/\\d{2,}/ matches 2 or more digits
/\\w{3,}/ matches 3 or more word chars`,
        },
        {
          command: '{n,m} - Range Count',
          description: 'Match between n and m times',
          usage: 'character{n,m}',
          example: `/\\d{2,4}/ matches 2 to 4 digits
/\\w{3,5}/ matches 3 to 5 word chars`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Anchors and Boundaries',
      commands: [
        {
          command: '^ - Start of String',
          description: 'Match at beginning of string',
          usage: '^pattern',
          example: `/^hello/ matches "hello world"
/^\\d/ matches "123abc"
/^http/ matches "http://example.com"`,
        },
        {
          command: '$ - End of String',
          description: 'Match at end of string',
          usage: 'pattern$',
          example: `/world$/ matches "hello world"
/\\d+$/ matches "abc123"
/com$/ matches "example.com"`,
        },
        {
          command: '\\b - Word Boundary',
          description: 'Match between word and non-word characters',
          usage: '\\bword\\b',
          example: `/\\bcat\\b/ matches "cat" not "catch"
/\\bhello\\b/ matches "hello" not "hello_world"`,
        },
        {
          command: '\\B - Non-Word Boundary',
          description: 'Match within words, not at boundaries',
          usage: '\\B',
          example: `/\\Bcat\\B/ matches "concatenate"
/\\B\\w\\B/ matches middle letters`,
        },
        {
          command: '^ and $ Together',
          description: 'Match entire string',
          usage: '^pattern$',
          example: `/^\\d{3}-\\d{3}-\\d{4}$/ matches full phone number
/^\\w+@\\w+\\.\\w+$/ matches full email`,
        },
      ],
    },
    {
      title: 'Groups and Capturing',
      commands: [
        {
          command: 'Capturing Groups ()',
          description: 'Group patterns and capture matches',
          usage: '(pattern)',
          example: `/(\\d{3})-(\\d{3})-(\\d{4})/ captures phone parts
/(\\w+)\\s+(\\w+)/ captures first and last name`,
        },
        {
          command: 'Backreferences \\1, \\2',
          description: 'Reference previously captured groups',
          usage: '\\n (where n is group number)',
          example: `/(\\w+)\\s+\\1/ matches repeated words like "hello hello"
/(\\d{3})-\\1/ matches "123-123"`,
        },
        {
          command: 'Non-Capturing Groups (?:)',
          description: 'Group without capturing',
          usage: '(?:pattern)',
          example: `/(?:https?:\\/\\/)/ matches http:// or https://
/(?:\\d{3}-){2}\\d{4}/ matches phone format`,
        },
        {
          command: 'Alternation | (OR)',
          description: 'Match one pattern OR another',
          usage: 'pattern1|pattern2',
          example: `/cat|dog/ matches "cat" or "dog"
/\\d+|\\w+/ matches numbers OR words`,
        },
      ],
    },
    {
      title: 'Escape Characters',
      commands: [
        {
          command: 'Escaping Special Characters',
          description: 'Match literal special characters',
          usage: '\\character',
          example: `/\\./ matches literal dot
/\\*/ matches literal asterisk
/\\+/ matches literal plus`,
        },
        {
          command: 'Special Escape Sequences',
          description: 'Common escaped characters',
          usage: '\\n, \\t, \\r',
          example: `/\\n/ matches newline
/\\t/ matches tab
/\\r/ matches carriage return`,
        },
        {
          command: 'Character Class Escaping',
          description: 'Escaping rules inside character classes',
          usage: '[\\]\\-\\^]',
          example: `/[\\[\\]]/ matches "[" or "]"
/[\\-]/ matches literal dash
/[\\^]/ matches literal caret`,
        },
      ],
    },
    {
      title: 'Regex Flags and Modifiers',
      commands: [
        {
          command: 'i - Case Insensitive',
          description: 'Ignore case in matching',
          usage: '/pattern/i',
          example: `/hello/i matches "Hello", "HELLO", "hello"
/\\w+/i matches "Hello", "WORLD"`,
        },
        {
          command: 'g - Global Matching',
          description: 'Find all matches, not just first',
          usage: '/pattern/g',
          example: `/\\d+/g finds all numbers
/cat/g finds all "cat" occurrences`,
        },
        {
          command: 'm - Multiline Mode',
          description: '^ and $ match line boundaries',
          usage: '/pattern/m',
          example: `/^\\d/m matches digits at line starts
/\\.$/ matches periods at line ends`,
        },
        {
          command: 's - Dotall Mode',
          description: 'Dot matches newline characters',
          usage: '/pattern/s',
          example: `/.*$/s matches entire content
/<div>.*<\\/ .div>/s matches across lines`,
        },
        {
          command: 'Combining Flags',
          description: 'Use multiple flags together',
          usage: '/pattern/flags',
          example: `/\\w+/gi - global, case insensitive
/^\\d+/gm - global, multiline
/.*$/gs - dotall, global`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Lookahead and Lookbehind',
      commands: [
        {
          command: 'Positive Lookahead (?=)',
          description: 'Match if followed by pattern',
          usage: 'pattern(?=following)',
          example: `/\\d+(?= dollars)/ matches "100" in "100 dollars"
/\\w+(?=,)/ matches word before comma
/a(?=b)/ matches "a" only if followed by "b"`,
        },
        {
          command: 'Negative Lookahead (?!)',
          description: 'Match if NOT followed by pattern',
          usage: 'pattern(?!following)',
          example: `/\\d+(?! dollars)/ matches numbers not followed by " dollars"
/\\w+(?!\\w)/ matches last word in string
/a(?!b)/ matches "a" not followed by "b"`,
        },
        {
          command: 'Positive Lookbehind (?<=)',
          description: 'Match if preceded by pattern',
          usage: '(?< =preceding)pattern',
          example: `/(?<=\\$)\\d+/ matches "100" in "$100"
/(?<=@)\\w+/ matches username in "@user"
/(?<=https?:\\/\\/)/\\w+/ matches domain`,
        },
        {
          command: 'Negative Lookbehind (?<!)',
          description: 'Match if NOT preceded by pattern',
          usage: '(?< !preceding)pattern',
          example: `/(?<!\\$)\\d+/ matches numbers not after $
/(?<!@)\\w+/ matches words not after @
/(?<!\\w+)\\./ matches first dot`,
        },
      ],
    },
    {
      title: 'Advanced Group Features',
      commands: [
        {
          command: 'Named Capture Groups',
          description: 'Give names to capture groups',
          usage: '(?<name>pattern)',
          example: `/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/
# Access via groups.year, groups.month

/(?<user>\\w+)@(?<domain>\\w+)/
# Captures username and domain separately`,
        },
        {
          command: 'Named Backreferences',
          description: 'Reference named groups',
          usage: '\\k<name>',
          example: `/(?<word>\\w+)\\s+\\k<word>/ matches repeated words
/(?<char>\\w)\\k<char>/ matches double letters
/(?<num>\\d+)\\s*=\\s*\\k<num>/ matches "123 = 123"`,
        },
        {
          command: 'Conditional Groups',
          description: 'Match based on conditions',
          usage: '(?(condition)yes|no)',
          example: `/(a)?(?(1)b|c)/
# If "a" matched, require "b", else "c"

/(?(?=\\d)\\d{3}|[a-z]{3})/
# 3 digits OR 3 letters`,
        },
        {
          command: 'Atomic Groups (?>)',
          description: 'Non-backtracking groups',
          usage: '(?>pattern)',
          example: `/(?>\\d+)\\w/ - faster, no backtracking
/(?>a+)b/ prevents backtracking
/(?>\\w+)\\s+/ atomic word matching`,
        },
      ],
    },
    {
      title: 'Quantifier Variations',
      commands: [
        {
          command: 'Lazy Quantifiers',
          description: 'Match minimum possible characters',
          usage: '*?, +?, ??, {n,m}?',
          example: `/.*?/ matches minimal characters
/<.*?>/ matches "<div>" not "<div><span>"
/\\d+?/ matches minimal digits
/a{2,4}?/ matches "aa" in "aaaa"`,
        },
        {
          command: 'Possessive Quantifiers',
          description: 'No backtracking quantifiers',
          usage: '*+, ++, ?+, {n,m}+',
          example: `/\\d++\\w/ - digits, no backtracking
/a++b/ possessive matching
/\\w{3}+\\s+/ possessive word matching`,
        },
        {
          command: 'Quantifier Combinations',
          description: 'Complex quantifier patterns',
          usage: 'Multiple quantifiers together',
          example: `/\\d{2,4}\\.\\d{2}/ matches 2-4 digit numbers
/\\w{3,6}\\s+\\w{3,6}/ word pairs
/[a-z]{2,4}\\d{2,4}/ mixed patterns`,
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'Unicode and International Characters',
      commands: [
        {
          command: 'Unicode Properties \\p{}',
          description: 'Match Unicode character properties',
          usage: '\\p{property}',
          example: `/\\p{L}+/ matches letters in any script
/\\p{N}+/ matches numbers in any script
/\\p{Script=Greek}+/ matches Greek letters
/\\p{Emoji}+/ matches emoji characters`,
        },
        {
          command: 'Unicode Scripts',
          description: 'Match specific writing systems',
          usage: '\\p{Script=name}',
          example: `/\\p{Script=Latin}+/ matches Latin letters
/\\p{Script=Cyrillic}+/ matches Cyrillic letters
/\\p{Script=Arabic}+/ matches Arabic letters
/\\p{Script=Han}+/ matches Chinese characters`,
        },
        {
          command: 'Unicode Categories',
          description: 'Match Unicode categories',
          usage: '\\p{category}',
          example: `/\\p{Lu}+/ matches uppercase letters
/\\p{Ll}+/ matches lowercase letters
/\\p{Pd}+/ matches dash punctuation
/\\p{Sc}+/ matches currency symbols`,
        },
        {
          command: 'Unicode Code Points',
          description: 'Match specific Unicode characters',
          usage: '\\uXXXX or \\u{XXXXX}',
          example: `/\\u{1F600}/ matches 😀 emoji
/\\u00A9/ matches © copyright
/\\u{20AC}/ matches € euro symbol
/[\\u0400-\\u04FF]+/ matches Cyrillic range`,
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Avoid Catastrophic Backtracking',
          description: 'Prevent regex performance issues',
          usage: 'Use atomic groups and possessive quantifiers',
          example: `# Problem: (a+)+b can be slow
# Solution: (?>a+)+b or a++b

# Problem: .*? in large strings
# Solution: Use specific character classes

# Use anchored patterns when possible
/^pattern$/ is faster than pattern/`,
        },
        {
          command: 'Character Class Optimization',
          description: 'Use efficient character classes',
          usage: '[abc] instead of (a|b|c)',
          example: `# Use: [abc]
# Not: (a|b|c)

# Use: \\d
# Not: [0-9]

# Use: \\w
# Not: [a-zA-Z0-9_]`,
        },
        {
          command: 'Regex Compilation',
          description: 'Pre-compile regex for repeated use',
          usage: 'Language-specific compilation',
          example: `# JavaScript
const pattern = new RegExp("\\\\d+", "g");

# Python
pattern = re.compile(r"\\\\d+");

# Java
Pattern pattern = Pattern.compile("\\\\d+");

# PHP
$pattern = "/\\\\d+/";`,
        },
      ],
    },
    {
      title: 'Advanced Patterns and Techniques',
      commands: [
        {
          command: 'Recursive Patterns',
          description: 'Match nested structures',
          usage: '(?R) or (?0)',
          example: `/\\((?:[^()]|(?R))*\\)/ matches balanced parentheses
/<[^>]*(?:<(?R)[^>]*)*>/ matches nested HTML tags
/"(?:[^"\\\\]|\\\\.)*"/ matches quoted strings`,
        },
        {
          command: 'Subroutines',
          description: 'Call previously defined groups',
          usage: '(?1), (?2), etc.',
          example: `/(<[^>]+>)(.*?)(?1)/ matches opening and closing tags
/(\\w+)\\s+(?1)/ matches repeated word patterns
/(?<tag>\\w+).*?(?&tag)/ named subroutine`,
        },
        {
          command: 'Branch Reset',
          description: 'Reset group numbers in alternation',
          usage: '(?|(a)|(b))',
          example: `/(?|(\\d+)|([a-z]+))/ both branches use group 1
/(?|(\\w+)|(\\d+))/ same group number for alternatives`,
        },
      ],
    },
    {
      title: 'Real-World Applications',
      commands: [
        {
          command: 'Email Validation',
          description: 'Comprehensive email pattern',
          usage: 'Email validation regex',
          example: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/

# Advanced version:
/^[a-zA-Z0-9.!#$%&\\'*+\\/=?^_\\x60{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/`,
        },
        {
          command: 'URL Validation',
          description: 'Complete URL pattern',
          usage: 'URL validation regex',
          example: `/^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$/

# Simplified:
/https?:\\/\\/[\\w.-]+\\.[a-z]{2,}/i`,
        },
        {
          command: 'Phone Number Patterns',
          description: 'International phone formats',
          usage: 'Phone number validation',
          example: `# US format:
/^(?:\\+?1[-.]?)?\\(?([0-9]{3})\\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/

# International:
/^\\+?[1-9]\\d{1,14}$/`,
        },
        {
          command: 'Password Validation',
          description: 'Strong password requirements',
          usage: 'Password strength regex',
          example: `# Strong password:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/

# Requirements:
# - At least 8 characters
# - One lowercase, one uppercase
# - One digit, one special character`,
        },
        {
          command: 'Credit Card Validation',
          description: 'Credit card number patterns',
          usage: 'Credit card regex',
          example: `# Basic format:
/^\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}$/

# With Luhn check (separate validation)
/^\\d{13,19}$/`,
        },
        {
          command: 'IPv4 Address',
          description: 'IPv4 address validation',
          usage: 'IP address regex',
          example: `/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

# Simplified:
/^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$/`,
        },
      ],
    },
    {
      title: 'Text Processing Patterns',
      commands: [
        {
          command: 'Remove Extra Spaces',
          description: 'Normalize whitespace',
          usage: 'Text cleaning regex',
          example: `# Multiple spaces to single:
str.replace(/\\s+/g, " ")

# Trim leading/trailing:
str.replace(/^\\s+|\\s+$/g, "")

# Remove all whitespace:
str.replace(/\\s/g, "")`,
        },
        {
          command: 'Extract URLs',
          description: 'Find all URLs in text',
          usage: 'URL extraction regex',
          example: `/https?:\\/\\/[\\w.-]+(?:\\/[^\\s]*)?/g

# With www:
/https?:\\/\\/(?:www\\.)?[\\w.-]+\\.[a-z]{2,}/gi`,
        },
        {
          command: 'Extract Email Addresses',
          description: 'Find all emails in text',
          usage: 'Email extraction regex',
          example: `/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g

# With validation:
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/g`,
        },
        {
          command: 'Extract Numbers',
          description: 'Find all numbers in text',
          usage: 'Number extraction regex',
          example: `/\\d+(?:\\.\\d+)?/g

# Currency amounts:
/\\$?\\d{1,3}(?:,\\d{3})*(?:\\.\\d{2})?/g

# Percentages:
/\\d+(?:\\.\\d+)?%/g`,
        },
      ],
    },
    {
      title: 'Language-Specific Features',
      commands: [
        {
          command: 'JavaScript Regex Methods',
          description: 'JavaScript regex API',
          usage: 'String and RegExp methods',
          example: `# Test matching:
/pattern/.test(string)

# Find all matches:
string.match(/pattern/g)

# Replace:
string.replace(/pattern/g, replacement)

# Split:
string.split(/pattern/)

# Search:
string.search(/pattern/)`,
        },
        {
          command: 'Python Regex Module',
          description: 'Python re module usage',
          usage: 'Python regex functions',
          example: `# Import:
import re

# Match:
re.match(r"pattern", string)

# Search:
re.search(r"pattern", string)

# Find all:
re.findall(r"pattern", string)

# Replace:
re.sub(r"pattern", replacement, string)`,
        },
        {
          command: 'Java Regex Classes',
          description: 'Java regex API',
          usage: 'Pattern and Matcher classes',
          example: `# Compile pattern:
Pattern pattern = Pattern.compile("regex");

# Create matcher:
Matcher matcher = pattern.matcher(text);

# Find matches:
while (matcher.find()) { ... }

# Replace:
String result = text.replaceAll("regex", "replacement");`,
        },
      ],
    },
    {
      title: 'Advanced Group Features',
      commands: [
        {
          command: 'Named Capture Groups',
          description: 'Give names to capture groups',
          usage: '(?<name>pattern)',
          example: `/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/
# Access via groups.year, groups.month

/(?<user>\\w+)@(?<domain>\\w+)/
# Captures username and domain separately`,
        },
        {
          command: 'Named Backreferences',
          description: 'Reference named groups',
          usage: '\\k<name>',
          example: `/(?<word>\\w+)\\s+\\k<word>/ matches repeated words
/(?<char>\\w)\\k<char>/ matches double letters
/(?<num>\\d+)\\s*=\\s*\\k<num>/ matches "123 = 123"`,
        },
        {
          command: 'Conditional Groups',
          description: 'Match based on conditions',
          usage: '(?(condition)yes|no)',
          example: `/(a)?(?(1)b|c)/
# If "a" matched, require "b", else "c"

/(?(?=\\d)\\d{3}|[a-z]{3})/
# 3 digits OR 3 letters`,
        },
        {
          command: 'Atomic Groups (?>)',
          description: 'Non-backtracking groups',
          usage: '(?>pattern)',
          example: `/(?>\\d+)\\w/ - faster, no backtracking
/(?>a+)b/ prevents backtracking
/(?>\\w+)\\s+/ atomic word matching`,
        },
      ],
    },
    {
      title: 'Quantifier Variations',
      commands: [
        {
          command: 'Lazy Quantifiers',
          description: 'Match minimum possible characters',
          usage: '*?, +?, ??, {n,m}?',
          example: `/.*?/ matches minimal characters
/<.*?>/ matches "<div>" not "<div><span>"
/\\d+?/ matches minimal digits
/a{2,4}?/ matches "aa" in "aaaa"`,
        },
        {
          command: 'Possessive Quantifiers',
          description: 'No backtracking quantifiers',
          usage: '*+, ++, ?+, {n,m}+',
          example: `/\\d++\\w/ - digits, no backtracking
/a++b/ possessive matching
/\\w{3}+\\s+/ possessive word matching`,
        },
        {
          command: 'Quantifier Combinations',
          description: 'Complex quantifier patterns',
          usage: 'Multiple quantifiers together',
          example: `/\\d{2,4}\\.\\d{2}/ matches 2-4 digit numbers
/\\w{3,6}\\s+\\w{3,6}/ word pairs
/[a-z]{2,4}\\d{2,4}/ mixed patterns`,
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'Unicode and International Characters',
      commands: [
        {
          command: 'Unicode Properties \\p{}',
          description: 'Match Unicode character properties',
          usage: '\\p{property}',
          example: `/\\p{L}+/ matches letters in any script
/\\p{N}+/ matches numbers in any script
/\\p{Script=Greek}+/ matches Greek letters
/\\p{Emoji}+/ matches emoji characters`,
        },
        {
          command: 'Unicode Scripts',
          description: 'Match specific writing systems',
          usage: '\\p{Script=name}',
          example: `/\\p{Script=Latin}+/ matches Latin letters
/\\p{Script=Cyrillic}+/ matches Cyrillic letters
/\\p{Script=Arabic}+/ matches Arabic letters
/\\p{Script=Han}+/ matches Chinese characters`,
        },
        {
          command: 'Unicode Categories',
          description: 'Match Unicode categories',
          usage: '\\p{category}',
          example: `/\\p{Lu}+/ matches uppercase letters
/\\p{Ll}+/ matches lowercase letters
/\\p{Pd}+/ matches dash punctuation
/\\p{Sc}+/ matches currency symbols`,
        },
        {
          command: 'Unicode Code Points',
          description: 'Match specific Unicode characters',
          usage: '\\uXXXX or \\u{XXXXX}',
          example: `/\\u{1F600}/ matches 😀 emoji
/\\u00A9/ matches © copyright
/\\u{20AC}/ matches € euro symbol
/[\\u0400-\\u04FF]+/ matches Cyrillic range`,
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Avoid Catastrophic Backtracking',
          description: 'Prevent regex performance issues',
          usage: 'Use atomic groups and possessive quantifiers',
          example: `# Problem: (a+)+b can be slow
# Solution: (?>a+)+b or a++b

# Problem: .*? in large strings
# Solution: Use specific character classes

# Use anchored patterns when possible
/^pattern$/ is faster than pattern/`,
        },
        {
          command: 'Character Class Optimization',
          description: 'Use efficient character classes',
          usage: '[abc] instead of (a|b|c)',
          example: `# Use: [abc]
# Not: (a|b|c)

# Use: \\d
# Not: [0-9]

# Use: \\w
# Not: [a-zA-Z0-9_]`,
        },
        {
          command: 'Regex Compilation',
          description: 'Pre-compile regex for repeated use',
          usage: 'Language-specific compilation',
          example: `# JavaScript
const pattern = new RegExp("\\\\d+", "g");

# Python
pattern = re.compile(r"\\\\d+");

# Java
Pattern pattern = Pattern.compile("\\\\d+");

# PHP
$pattern = "/\\\\d+/";`,
        },
      ],
    },
    {
      title: 'Advanced Patterns and Techniques',
      commands: [
        {
          command: 'Recursive Patterns',
          description: 'Match nested structures',
          usage: '(?R) or (?0)',
          example: `/\\((?:[^()]|(?R))*\\)/ matches balanced parentheses
/<[^>]*(?:<(?R)[^>]*)*>/ matches nested HTML tags
/"(?:[^"\\\\]|\\\\.)*"/ matches quoted strings`,
        },
        {
          command: 'Subroutines',
          description: 'Call previously defined groups',
          usage: '(?1), (?2), etc.',
          example: `/(<[^>]+>)(.*?)(?1)/ matches opening and closing tags
/(\\w+)\\s+(?1)/ matches repeated word patterns
/(?<tag>\\w+).*?(?&tag)/ named subroutine`,
        },
        {
          command: 'Branch Reset',
          description: 'Reset group numbers in alternation',
          usage: '(?|(a)|(b))',
          example: `/(?|(\\d+)|([a-z]+))/ both branches use group 1
/(?|(\\w+)|(\\d+))/ same group number for alternatives`,
        },
      ],
    },
    {
      title: 'Real-World Applications',
      commands: [
        {
          command: 'Email Validation',
          description: 'Comprehensive email pattern',
          usage: 'Email validation regex',
          example: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/

# Advanced version:
/^[a-zA-Z0-9.!#$%&\\'*+\\/=?^_\\x60{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/`,
        },
        {
          command: 'URL Validation',
          description: 'Complete URL pattern',
          usage: 'URL validation regex',
          example: `/^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$/

# Simplified:
/https?:\\/\\/[\\w.-]+\\.[a-z]{2,}/i`,
        },
        {
          command: 'Phone Number Patterns',
          description: 'International phone formats',
          usage: 'Phone number validation',
          example: `# US format:
/^(?:\\+?1[-.]?)?\\(?([0-9]{3})\\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/

# International:
/^\\+?[1-9]\\d{1,14}$/`,
        },
        {
          command: 'Password Validation',
          description: 'Strong password requirements',
          usage: 'Password strength regex',
          example: `# Strong password:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/

# Requirements:
# - At least 8 characters
# - One lowercase, one uppercase
# - One digit, one special character`,
        },
        {
          command: 'Credit Card Validation',
          description: 'Credit card number patterns',
          usage: 'Credit card regex',
          example: `# Basic format:
/^\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}$/

# With Luhn check (separate validation)
/^\\d{13,19}$/`,
        },
        {
          command: 'IPv4 Address',
          description: 'IPv4 address validation',
          usage: 'IP address regex',
          example: `/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

# Simplified:
/^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$/`,
        },
      ],
    },
    {
      title: 'Text Processing Patterns',
      commands: [
        {
          command: 'Remove Extra Spaces',
          description: 'Normalize whitespace',
          usage: 'Text cleaning regex',
          example: `# Multiple spaces to single:
str.replace(/\\s+/g, " ")

# Trim leading/trailing:
str.replace(/^\\s+|\\s+$/g, "")

# Remove all whitespace:
str.replace(/\\s/g, "")`,
        },
        {
          command: 'Extract URLs',
          description: 'Find all URLs in text',
          usage: 'URL extraction regex',
          example: `/https?:\\/\\/[\\w.-]+(?:\\/[^\\s]*)?/g

# With www:
/https?:\\/\\/(?:www\\.)?[\\w.-]+\\.[a-z]{2,}/gi`,
        },
        {
          command: 'Extract Email Addresses',
          description: 'Find all emails in text',
          usage: 'Email extraction regex',
          example: `/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g

# With validation:
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/g`,
        },
        {
          command: 'Extract Numbers',
          description: 'Find all numbers in text',
          usage: 'Number extraction regex',
          example: `/\\d+(?:\\.\\d+)?/g

# Currency amounts:
/\\$?\\d{1,3}(?:,\\d{3})*(?:\\.\\d{2})?/g

# Percentages:
/\\d+(?:\\.\\d+)?%/g`,
        },
      ],
    },
    {
      title: 'Language-Specific Features',
      commands: [
        {
          command: 'JavaScript Regex Methods',
          description: 'JavaScript regex API',
          usage: 'String and RegExp methods',
          example: `# Test matching:
/pattern/.test(string)

# Find all matches:
string.match(/pattern/g)

# Replace:
string.replace(/pattern/g, replacement)

# Split:
string.split(/pattern/)

# Search:
string.search(/pattern/)`,
        },
        {
          command: 'Python Regex Module',
          description: 'Python re module usage',
          usage: 'Python regex functions',
          example: `# Import:
import re

# Match:
re.match(r"pattern", string)

# Search:
re.search(r"pattern", string)

# Find all:
re.findall(r"pattern", string)

# Replace:
re.sub(r"pattern", replacement, string)`,
        },
        {
          command: 'Java Regex Classes',
          description: 'Java regex API',
          usage: 'Pattern and Matcher classes',
          example: `# Compile pattern:
Pattern pattern = Pattern.compile("regex");

# Create matcher:
Matcher matcher = pattern.matcher(text);

# Find matches:
while (matcher.find()) { ... }

# Replace:
String result = text.replaceAll("regex", "replacement");`,
        },
      ],
    },
    // EXPERT LEVEL - ENGINE SPECIFIC FEATURES
    {
      title: 'PCRE Specific Features',
      commands: [
        {
          command: 'PCRE Callout Patterns',
          description: 'Execute code during regex matching',
          usage: '(?C[number]) or (?C"function")',
          example: `# PCRE callout syntax:
/(?C1)/ callout 1
/(?C"my_func")/ callout function

# Used for debugging and complex matching
# Available in PCRE, PHP, R, some other engines`,
        },
        {
          command: 'PCRE Backtracking Control',
          description: 'Control backtracking behavior',
          usage: '(*PRUNE), (*SKIP), (*THEN)',
          example: `# Backtracking verbs:
a(*PRUNE)b - prune backtracking at a
a(*SKIP)b - skip to b if a matches
a(*THEN)b - try b if a fails

# Prevents catastrophic backtracking`,
        },
        {
          command: 'PCRE Subpattern Definitions',
          description: 'Define reusable subpatterns',
          usage: '(?(DEFINE)pattern)',
          example: `# Define subpatterns:
(?(DEFINE)(?<digit>\\d+)(?<word>\\w+))
# Use later in pattern:
(?<digit>digit)|(?<word>word)`,
        },
      ],
    },
    {
      title: '.NET Specific Features',
      commands: [
        {
          command: '.NET Balancing Groups',
          description: 'Track nested structures',
          usage: '(?<name1-name2>)',
          example: `# Balanced parentheses:
(?<open>\\()|(?<-open>\\))|(?:(?!\\().)+
(?(open)(?!))$

# Tracks opening/closing counts`,
        },
        {
          command: '.NET Character Class Subtraction',
          description: 'Subtract character classes',
          usage: '[class-[subclass]]',
          example: `# All letters except vowels:
[a-z-[aeiou]]

# Digits except 0:
[0-9-[0]]

# Available in .NET only`,
        },
        {
          command: '.NET Right-to-Left Matching',
          description: 'Match patterns from right to left',
          usage: 'RegexOptions.RightToLeft',
          example: `# C# example:
var regex = new Regex(@"\\d+", RegexOptions.RightToLeft);

# Useful for parsing from end`,
        },
      ],
    },
    {
      title: 'Advanced Unicode and International Characters',
      commands: [
        {
          command: 'Extended Unicode Properties',
          description: 'Advanced Unicode character properties',
          usage: '\\p{property=value}',
          example: `# Extended properties:
/\\p{Script=Devanagari}+/ Hindi script
/\\p{Block=Cyrillic}+/ Cyrillic block
/\\p{Grapheme_Cluster_Break=Spacing_Mark}/
/\\p{East_Asian_Width=Wide}+/ Full-width characters`,
        },
        {
          command: 'Unicode Text Segmentation',
          description: 'Match text boundaries using Unicode rules',
          usage: '\\b{g} (grapheme cluster)',
          example: `# Grapheme clusters:
/\\b{g}/ Unicode grapheme boundaries
/\\X/ Match entire grapheme cluster

# Handles emoji sequences, combining marks`,
        },
        {
          command: 'Unicode Normalization',
          description: 'Handle Unicode normalization forms',
          usage: 'Normalize before regex',
          example: `# JavaScript:
text.normalize("NFC")

# Python:
import unicodedata
unicodedata.normalize("NFC", text)

# Ensures consistent matching`,
        },
        {
          command: 'Bidirectional Text',
          description: 'Handle RTL/LTR text patterns',
          usage: 'Unicode directional properties',
          example: `# RTL scripts:
/\\p{Bidi_Class=Arabic}+/ Arabic
/\\p{Bidi_Class=Hebrew}+/ Hebrew

# Mixed directional text patterns`,
        },
      ],
    },
    {
      title: 'Advanced Conditional Patterns',
      commands: [
        {
          command: 'Nested Conditionals',
          description: 'Complex conditional matching',
          usage: '(?(condition1)yes1|no1)(?(condition2)yes2|no2)',
          example: `# Nested conditions:
(?(?=\\d)\\d+(?(?=\\.)\\.\\d+|\\b)|[a-z]+)

# Numbers with optional decimals OR words`,
        },
        {
          command: 'Recursive Conditionals',
          description: 'Conditional patterns with recursion',
          usage: '(?(R)pattern|pattern)',
          example: `# Conditional recursion:
(?(R)\\((?:[^()]|(?R))*\\)|\\w+)

# Match balanced parentheses OR words`,
        },
        {
          command: 'Lookaround Conditionals',
          description: 'Use lookarounds in conditions',
          usage: '(?(?=lookahead)then|else)',
          example: `# Lookahead conditional:
(?(?=\\d{4})\\d{4}-\\d{2}-\\d{2}|[a-z]{3,})

# Date format OR short words`,
        },
      ],
    },
    {
      title: 'Advanced Assertions and Anchors',
      commands: [
        {
          command: 'Variable-Length Lookbehind',
          description: 'Lookbehind with variable length',
          usage: '(?<=(?:pattern)*)',
          example: `# JavaScript (ES2018+):
/(?<=\\d{2,4})\\b/ boundary after 2-4 digits

# PCRE/Python:
/(?<=(?:\\w+\\s+){2})\\w+/ word after 2 words`,
        },
        {
          command: 'Multiple Lookarounds',
          description: 'Combine multiple lookarounds',
          usage: '(?=...)(?!...)(?<=...)(?<!...)',
          example: `# Complex validation:
(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?!.*\\s).{8,}

# Password: 8+ chars, mixed case, digit, no spaces`,
        },
        {
          command: 'Conditional Anchors',
          description: 'Anchors that depend on context',
          usage: '(?(?m)^|\\G)',
          example: `# Multiline conditional:
(?(?m)^\\s*#|\\G\\s*#) line start or continuation

# Context-aware boundaries`,
        },
      ],
    },
    {
      title: 'Extended Real-World Validation Patterns',
      commands: [
        {
          command: 'Date and Time Validation',
          description: 'Comprehensive date/time patterns',
          usage: 'Date and time regex patterns',
          example: `# ISO 8601:
/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d{3})?Z?$/

# US Date (MM/DD/YYYY):
/^(0[1-9]|1[0-2])\\/(0[1-9]|[12]\\d|3[01])\\/(19|20)\\d{2}$/

# Time 12-hour:
/^(1[0-2]|0?[1-9]):[0-5]\\d\\s?(?:AM|PM)$/i`,
        },
        {
          command: 'Social Security Numbers',
          description: 'SSN validation patterns',
          usage: 'Social Security Number regex',
          example: `# US SSN:
/^(?!000|666|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0000)\\d{4}$/

# Simplified:
/^\\d{3}-\\d{2}-\\d{4}$/

# With area number validation`,
        },
        {
          command: 'Postal Code Patterns',
          description: 'International postal codes',
          usage: 'Postal code validation',
          example: `# US ZIP:
/^\\d{5}(-\\d{4})?$/

# Canadian:
/^[ABCEGHJ-NPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][ -]?\\d[ABCEGHJ-NPRSTV-Z]\\d$/i

# UK Postcode:
/^[A-Z]{1,2}\\d[A-Z\\d]?\\s?\\d[A-Z]{2}$/i`,
        },
        {
          command: 'Credit Card Enhanced',
          description: 'Credit card validation with card types',
          usage: 'Enhanced credit card patterns',
          example: `# Visa:
/^4[12]\\d{13,15}$/

# Mastercard:
/^(5[1-5]\\d{4}|2[2-7]\\d{3})\\d{10}$/

# Amex:
/^3[47]\\d{13}$/

# Discover:
/^6(?:011|5\\d{2})\\d{12}$/`,
        },
        {
          command: 'MAC Address Validation',
          description: 'MAC address patterns',
          usage: 'Hardware address validation',
          example: `# MAC Address:
/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/

# IPv6 MAC:
/^([0-9A-Fa-f]{4}\\.){2}[0-9A-Fa-f]{4}$/`,
        },
        {
          command: 'License Plate Patterns',
          description: 'Vehicle license plate formats',
          usage: 'License plate validation',
          example: `# US General:
/^[A-Z0-9]{2,8}$/

# California:
/^\\d{1}[A-Z]{3}\\s?\\d{3}$/

# Customizable by state/country`,
        },
      ],
    },
    {
      title: 'Advanced Performance Optimization',
      commands: [
        {
          command: 'Prevent Catastrophic Backtracking',
          description: 'Advanced backtracking prevention',
          usage: 'Atomic groups and possessive quantifiers',
          example: `# Problem patterns:
# (.+)*a - can be catastrophic
# Solution:
(?>.+)*a or (.++)*a

# Nested quantifiers:
# (.+\\s+)+ - problematic
# Solution:
(?>[^\\s]+\\s+)+`,
        },
        {
          command: 'Optimized Character Classes',
          description: 'Efficient character class design',
          usage: 'Optimized character class patterns',
          example: `# Use specific ranges:
[0-9] not \\d for single digits
[a-f] not [abcdef] for hex

# Avoid overlapping ranges:
[a-zA-Z] not [a-z][A-Z]

# Use negation when beneficial:
[^a-z] when most chars are non-letters`,
        },
        {
          command: 'Regex Compilation Strategies',
          description: 'Advanced compilation techniques',
          usage: 'Pattern compilation optimization',
          example: `# JavaScript:
const patterns = {
  email: /^\\S+@\\S+\\.\\S+$/,
  phone: /^\\d{3}-\\d{3}-\\d{4}$/
};

# Python:
patterns = {k: re.compile(v) for k, v in regex_dict.items()}

# Java static final patterns`,
        },
        {
          command: 'Benchmarking Techniques',
          description: 'Performance testing methods',
          usage: 'Regex performance measurement',
          example: `# JavaScript performance:
console.time('regex');
for(let i = 0; i < 10000; i++) pattern.test(text);
console.timeEnd('regex');

# Python timeit:
import timeit
timeit.timeit(lambda: pattern.search(text), number=10000)`,
        },
      ],
    },
    {
      title: 'Extended Language Support',
      commands: [
        {
          command: 'PHP Regex Functions',
          description: 'PHP regex API and features',
          usage: 'PCRE functions in PHP',
          example: `# Matching:
preg_match('/pattern/', $string, $matches)

# All matches:
preg_match_all('/pattern/', $string, $matches)

# Replace:
preg_replace('/pattern/', $replacement, $string)

# Split:
preg_split('/pattern/', $string)`,
        },
        {
          command: 'Ruby Regex Features',
          description: 'Ruby-specific regex capabilities',
          usage: 'Ruby regex syntax and methods',
          example: `# Ruby regex literals:
/pattern/
/pattern/i
/pattern/m

# Methods:
"string".match(/pattern/)
"string".scan(/pattern/)
"string".gsub(/pattern/, replacement)

# Named captures:
/(?<name>pattern)/`,
        },
        {
          command: 'Go Regex Package',
          description: 'Go regexp package usage',
          usage: 'Go regex functions',
          example: `# Import:
import "regexp"

# Compile:
re := regexp.MustCompile(\`\\d+\`)

# Find:
matches := re.FindAllString(text, -1)

# Replace:
result := re.ReplaceAllString(text, replacement)`,
        },
        {
          command: 'Rust Regex Crate',
          description: 'Rust regex crate features',
          usage: 'Rust regex crate',
          example: `# Cargo.toml:
regex = "1.0"

# Use:
use regex::Regex;

let re = Regex::new(r"\\d+").unwrap();
let caps = re.captures(text).unwrap();`,
        },
        {
          command: 'Swift Regex (iOS 16+)',
          description: 'Modern Swift regex syntax',
          usage: 'Swift regex builder',
          example: `# Swift 5.7+:
import RegexBuilder

let regex = Regex {
  OneOrMore(.digit)
  "."
  OneOrMore(.digit)
}

# Traditional:
let regex = try Regex("\\\\d+\\\\.\\\\d+")`,
        },
      ],
    },
    {
      title: 'Advanced Debugging Techniques',
      commands: [
        {
          command: 'Regex Debugging Tools',
          description: 'Professional debugging methods',
          usage: 'Debug regex patterns effectively',
          example: `# Debugging techniques:
# 1. Break down complex patterns
# 2. Use online testers (regex101.com)
# 3. Add comments (x flag in PCRE)
# 4. Test edge cases
# 5. Use capture groups for verification

# PCRE commented mode:
/\\n  # Match email
  \\w+@\\w+\\.\\w+  # Basic structure
/x`,
        },
        {
          command: 'Common Pitfalls',
          description: 'Advanced regex mistakes to avoid',
          usage: 'Regex best practices',
          example: `# Advanced pitfalls:
# - Greedy quantifiers in nested structures
# - Backtracking in alternation
# - Unicode normalization issues
# - Engine-specific features
# - Performance in loops

# Always test with:
# - Empty strings
# - Very long strings
# - Unicode characters
# - Edge cases`,
        },
        {
          command: 'Regex Testing Strategies',
          description: 'Comprehensive testing approaches',
          usage: 'Test regex patterns thoroughly',
          example: `# Testing framework:
# 1. Positive test cases
# 2. Negative test cases
# 3. Boundary conditions
# 4. Performance tests
# 5. Cross-language tests

# Test data examples:
# - Valid inputs
# - Invalid inputs
# - Edge cases
# - Unicode samples
# - Large inputs`,
        },
      ],
    },
    {
      title: 'Modern Regex Features',
      commands: [
        {
          command: 'JavaScript v Flag (2024)',
          description: 'Unicode property escapes and sets',
          usage: '/pattern/v',
          example: `# ES2024 v flag:
/[\\p{Script=Latin}&&\\p{Letter}]/v
# Intersection of properties

/[\\p{Emoji}&&\\p{Emoji_Presentation}]/v
# Emoji that present by default

# Available in modern browsers/Node.js`,
        },
        {
          command: 'Python 3.12+ Features',
          description: 'Latest Python regex enhancements',
          usage: 're module new features',
          example: `# Python 3.12+:
# Enhanced Unicode support
# Performance improvements
# Better error messages

import re
pattern = re.compile(r"\\p{Script=Latin}", re.UNICODE)`,
        },
        {
          command: 'Java 17+ Regex Features',
          description: 'Modern Java regex capabilities',
          usage: 'Java Pattern class enhancements',
          example: `# Java 17+ features:
# Enhanced Unicode support
# Better performance
# New predefined character classes

Pattern pattern = Pattern.compile("\\\\p{Script=Latin}");`,
        },
      ],
    },
    {
      title: 'Debugging and Testing',
      commands: [
        {
          command: 'Online Regex Testers',
          description: 'Tools for regex testing',
          usage: 'Web-based regex testers',
          example: `# Popular tools:
# - regex101.com (detailed explanations)
# - regexr.com (interactive testing)
# - debuggex.com (visual regex)
# - regexpal.com (simple testing)

# Always test in your target language`,
        },
        {
          command: 'Common Regex Mistakes',
          description: 'Avoid common regex errors',
          usage: 'Regex debugging tips',
          example: `# Forgetting to escape:
# Use \\. not . for literal dot

# Greedy vs lazy:
# .* is greedy, .*? is lazy

# Character class escaping:
# Inside [], escape ] \\ ^ -

# Multiline vs single line:
# Use m flag for ^ $ to work per line`,
        },
        {
          command: 'Performance Testing',
          description: 'Test regex performance',
          usage: 'Benchmark regex patterns',
          example: `# Test with large inputs
# Use browser dev tools or Node.js

# Time complexity matters
# Avoid catastrophic backtracking

# Use specific character classes
# [a-z] is faster than (a|b|c)`,
        },
      ],
    },
  ],
};
