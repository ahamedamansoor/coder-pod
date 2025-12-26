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
          example: '# Regex is a sequence of characters that forms a search pattern\n# Used for: validation, searching, replacing, extracting\n# Example: /hello/ matches "hello" in text\n\n# Basic syntax:\n# JavaScript: /pattern/flags or new RegExp("pattern", "flags")\n# Python: import re; re.search(r"pattern", text)\n# Java: Pattern.compile("pattern")',
        },
        {
          command: 'Basic Pattern Matching',
          description: 'Simple literal string matching',
          usage: 'Exact character matching',
          example: '# Literal matching\n/hello/ matches "hello"\n/world/ matches "world"\n# Case sensitivity\n/Hello/ matches "Hello" but not "hello"\n# Use i flag for case insensitive: /hello/i',
        },
        {
          command: 'Regex Engines and Flavors',
          description: 'Different regex implementations',
          usage: 'PCRE, JavaScript, Python, Java, .NET',
          example: '# Common regex engines:\n# PCRE (Perl Compatible) - PHP, R, many languages\n# JavaScript - ECMAScript standard\n# Python re module\n# Java java.util.regex\n# .NET System.Text.RegularExpressions\n\n# Features vary between engines',
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
          example: '/cat/ matches "cat"\n/dog/ matches "dog"\n/123/ matches "123"',
        },
        {
          command: 'Dot (.) Wildcard',
          description: 'Match any single character',
          usage: '. (dot)',
          example: '/h.t/ matches "hat", "hot", "h3t"\n/.at/ matches "cat", "bat", "rat"',
        },
        {
          command: 'Character Classes [abc]',
          description: 'Match any character in set',
          usage: '[character1character2character3]',
          example: '/[abc]/ matches "a", "b", or "c"\n/[aeiou]/ matches any vowel\n/[123]/ matches "1", "2", or "3"',
        },
        {
          command: 'Negated Character Classes [^abc]',
          description: 'Match any character NOT in set',
          usage: '[^characters]',
          example: '/[^abc]/ matches anything except "a", "b", "c"\n/[^0-9]/ matches any non-digit',
        },
        {
          command: 'Character Ranges [a-z]',
          description: 'Match range of characters',
          usage: '[start-end]',
          example: '/[a-z]/ matches any lowercase letter\n/[A-Z]/ matches any uppercase letter\n/[0-9]/ matches any digit',
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
          example: '/\\d/ matches "5", "0", "9"\n/\\d{3}/ matches "123", "456"\n/price: \\d+/ matches "price: 99"',
        },
        {
          command: '\\D - Non-Digits',
          description: 'Match any non-digit character',
          usage: '\\D',
          example: '/\\D/ matches "a", "$", " "\n/\\D+/ matches "hello", "world!"',
        },
        {
          command: '\\w - Word Characters',
          description: 'Match alphanumeric + underscore [a-zA-Z0-9_]',
          usage: '\\w',
          example: '/\\w/ matches "a", "Z", "5", "_"\n/\\w+/ matches "hello123", "user_name"',
        },
        {
          command: '\\W - Non-Word Characters',
          description: 'Match any non-word character',
          usage: '\\W',
          example: '/\\W/ matches " ", "$", "-", "@"\n/\\W+/ matches "!!!", "   "\n/\\w+\\W+\\w+/ matches "hello-world"',
        },
        {
          command: '\\s - Whitespace',
          description: 'Match whitespace characters [space, tab, newline]',
          usage: '\\s',
          example: '/\\s/ matches " ", "\\t", "\\n"\n/\\s+/ matches multiple spaces\n/\\w+\\s+\\w+/ matches "hello world"',
        },
        {
          command: '\\S - Non-Whitespace',
          description: 'Match any non-whitespace character',
          usage: '\\S',
          example: '/\\S/ matches "a", "5", "$"\n/\\S+/ matches "hello", "world!"',
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
          example: '/ab*c/ matches "ac", "abc", "abbc"\n/\\d*/ matches "", "1", "123"',
        },
        {
          command: '+ - One or More',
          description: 'Match preceding character one or more times',
          usage: 'character+',
          example: '/ab+c/ matches "abc", "abbc"\n/\\d+/ matches "1", "123", "456"',
        },
        {
          command: '? - Zero or One',
          description: 'Match preceding character zero or one time',
          usage: 'character?',
          example: '/colou?r/ matches "color", "colour"\n/https?/ matches "http", "https"',
        },
        {
          command: '{n} - Exact Count',
          description: 'Match exactly n times',
          usage: 'character{n}',
          example: '/\\d{3}/ matches exactly 3 digits\n/\\w{5}/ matches exactly 5 word chars\n/a{3}/ matches "aaa" only',
        },
        {
          command: '{n,} - Minimum Count',
          description: 'Match at least n times',
          usage: 'character{n,}',
          example: '/\\d{2,}/ matches 2 or more digits\n/\\w{3,}/ matches 3 or more word chars',
        },
        {
          command: '{n,m} - Range Count',
          description: 'Match between n and m times',
          usage: 'character{n,m}',
          example: '/\\d{2,4}/ matches 2 to 4 digits\n/\\w{3,5}/ matches 3 to 5 word chars',
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
          example: '/^hello/ matches "hello world"\n/^\\d/ matches "123abc"\n/^http/ matches "http://example.com"',
        },
        {
          command: '$ - End of String',
          description: 'Match at end of string',
          usage: 'pattern$',
          example: '/world$/ matches "hello world"\n/\\d+$/ matches "abc123"\n/com$/ matches "example.com"',
        },
        {
          command: '\\b - Word Boundary',
          description: 'Match between word and non-word characters',
          usage: '\\bword\\b',
          example: '/\\bcat\\b/ matches "cat" not "catch"\n/\\bhello\\b/ matches "hello" not "hello_world"',
        },
        {
          command: '\\B - Non-Word Boundary',
          description: 'Match within words, not at boundaries',
          usage: '\\B',
          example: '/\\Bcat\\B/ matches "concatenate"\n/\\B\\w\\B/ matches middle letters',
        },
        {
          command: '^ and $ Together',
          description: 'Match entire string',
          usage: '^pattern$',
          example: '/^\\d{3}-\\d{3}-\\d{4}$/ matches full phone number\n/^\\w+@\\w+\\.\\w+$/ matches full email',
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
          example: '/(\\d{3})-(\\d{3})-(\\d{4})/ captures phone parts\n/(\\w+)\\s+(\\w+)/ captures first and last name',
        },
        {
          command: 'Backreferences \\1, \\2',
          description: 'Reference previously captured groups',
          usage: '\\n (where n is group number)',
          example: '/(\\w+)\\s+\\1/ matches repeated words like "hello hello"\n/(\\d{3})-\\1/ matches "123-123"',
        },
        {
          command: 'Non-Capturing Groups (?:)',
          description: 'Group without capturing',
          usage: '(?:pattern)',
          example: '/(?:https?:\\/\\/)/ matches http:// or https://\n/(?:\\d{3}-){2}\\d{4}/ matches phone format',
        },
        {
          command: 'Alternation | (OR)',
          description: 'Match one pattern OR another',
          usage: 'pattern1|pattern2',
          example: '/cat|dog/ matches "cat" or "dog"\n/\\d+|\\w+/ matches numbers OR words',
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
          example: '/\\./ matches literal dot\n/\\*/ matches literal asterisk\n/\\+/ matches literal plus',
        },
        {
          command: 'Special Escape Sequences',
          description: 'Common escaped characters',
          usage: '\\n, \\t, \\r',
          example: '/\\n/ matches newline\n/\\t/ matches tab\n/\\r/ matches carriage return',
        },
        {
          command: 'Character Class Escaping',
          description: 'Escaping rules inside character classes',
          usage: '[\\]\\-\\^]',
          example: '/[\\[\\]]/ matches "[" or "]"\n/[\\-]/ matches literal dash\n/[\\^]/ matches literal caret',
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
          example: '/hello/i matches "Hello", "HELLO", "hello"\n/\\w+/i matches "Hello", "WORLD"',
        },
        {
          command: 'g - Global Matching',
          description: 'Find all matches, not just first',
          usage: '/pattern/g',
          example: '/\\d+/g finds all numbers\n/cat/g finds all "cat" occurrences',
        },
        {
          command: 'm - Multiline Mode',
          description: '^ and $ match line boundaries',
          usage: '/pattern/m',
          example: '/^\\d/m matches digits at line starts\n/\\.$/ matches periods at line ends',
        },
        {
          command: 's - Dotall Mode',
          description: 'Dot matches newline characters',
          usage: '/pattern/s',
          example: '/.*$/s matches entire content\n/<div>.*<\\/ .div>/s matches across lines',
        },
        {
          command: 'Combining Flags',
          description: 'Use multiple flags together',
          usage: '/pattern/flags',
          example: '/\\w+/gi - global, case insensitive\n/^\\d+/gm - global, multiline\n/.*$/gs - dotall, global',
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
          example: '/\\d+(?= dollars)/ matches "100" in "100 dollars"\n/\\w+(?=,)/ matches word before comma\n/a(?=b)/ matches "a" only if followed by "b"',
        },
        {
          command: 'Negative Lookahead (?!)',
          description: 'Match if NOT followed by pattern',
          usage: 'pattern(?!following)',
          example: '/\\d+(?! dollars)/ matches numbers not followed by " dollars"\n/\\w+(?!\\w)/ matches last word in string\n/a(?!b)/ matches "a" not followed by "b"',
        },
        {
          command: 'Positive Lookbehind (?<=)',
          description: 'Match if preceded by pattern',
          usage: '(?< =preceding)pattern',
          example: '/(?<=\\$)\\d+/ matches "100" in "$100"\n/(?<=@)\\w+/ matches username in "@user"\n/(?<=https?:\\/\\/)/\\w+/ matches domain',
        },
        {
          command: 'Negative Lookbehind (?<!)',
          description: 'Match if NOT preceded by pattern',
          usage: '(?< !preceding)pattern',
          example: '/(?<!\\$)\\d+/ matches numbers not after $\n/(?<!@)\\w+/ matches words not after @\n/(?<!\\w+)\\./ matches first dot',
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
          example: '/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/\n# Access via groups.year, groups.month\n\n/(?<user>\\w+)@(?<domain>\\w+)/\n# Captures username and domain separately',
        },
        {
          command: 'Named Backreferences',
          description: 'Reference named groups',
          usage: '\\k<name>',
          example: '/(?<word>\\w+)\\s+\\k<word>/ matches repeated words\n/(?<char>\\w)\\k<char>/ matches double letters\n/(?<num>\\d+)\\s*=\\s*\\k<num>/ matches "123 = 123"',
        },
        {
          command: 'Conditional Groups',
          description: 'Match based on conditions',
          usage: '(?(condition)yes|no)',
          example: '/(a)?(?(1)b|c)/\n# If "a" matched, require "b", else "c"\n\n/(?(?=\\d)\\d{3}|[a-z]{3})/\n# 3 digits OR 3 letters',
        },
        {
          command: 'Atomic Groups (?>)',
          description: 'Non-backtracking groups',
          usage: '(?>pattern)',
          example: '/(?>\\d+)\\w/ - faster, no backtracking\n/(?>a+)b/ prevents backtracking\n/(?>\\w+)\\s+/ atomic word matching',
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
          example: '/.*?/ matches minimal characters\n/<.*?>/ matches "<div>" not "<div><span>"\n/\\d+?/ matches minimal digits\n/a{2,4}?/ matches "aa" in "aaaa"',
        },
        {
          command: 'Possessive Quantifiers',
          description: 'No backtracking quantifiers',
          usage: '*+, ++, ?+, {n,m}+',
          example: '/\\d++\\w/ - digits, no backtracking\n/a++b/ possessive matching\n/\\w{3}+\\s+/ possessive word matching',
        },
        {
          command: 'Quantifier Combinations',
          description: 'Complex quantifier patterns',
          usage: 'Multiple quantifiers together',
          example: '/\\d{2,4}\\.\\d{2}/ matches 2-4 digit numbers\n/\\w{3,6}\\s+\\w{3,6}/ word pairs\n/[a-z]{2,4}\\d{2,4}/ mixed patterns',
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
          example: '/\\p{L}+/ matches letters in any script\n/\\p{N}+/ matches numbers in any script\n/\\p{Script=Greek}+/ matches Greek letters\n/\\p{Emoji}+/ matches emoji characters',
        },
        {
          command: 'Unicode Scripts',
          description: 'Match specific writing systems',
          usage: '\\p{Script=name}',
          example: '/\\p{Script=Latin}+/ matches Latin letters\n/\\p{Script=Cyrillic}+/ matches Cyrillic letters\n/\\p{Script=Arabic}+/ matches Arabic letters\n/\\p{Script=Han}+/ matches Chinese characters',
        },
        {
          command: 'Unicode Categories',
          description: 'Match Unicode categories',
          usage: '\\p{category}',
          example: '/\\p{Lu}+/ matches uppercase letters\n/\\p{Ll}+/ matches lowercase letters\n/\\p{Pd}+/ matches dash punctuation\n/\\p{Sc}+/ matches currency symbols',
        },
        {
          command: 'Unicode Code Points',
          description: 'Match specific Unicode characters',
          usage: '\\uXXXX or \\u{XXXXX}',
          example: '/\\u{1F600}/ matches 😀 emoji\n/\\u00A9/ matches © copyright\n/\\u{20AC}/ matches € euro symbol\n/[\\u0400-\\u04FF]+/ matches Cyrillic range',
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
          example: '# Problem: (a+)+b can be slow\n# Solution: (?>a+)+b or a++b\n\n# Problem: .*? in large strings\n# Solution: Use specific character classes\n\n# Use anchored patterns when possible\n/^pattern$/ is faster than pattern/',
        },
        {
          command: 'Character Class Optimization',
          description: 'Use efficient character classes',
          usage: '[abc] instead of (a|b|c)',
          example: '# Use: [abc]\n# Not: (a|b|c)\n\n# Use: \\d\n# Not: [0-9]\n\n# Use: \\w\n# Not: [a-zA-Z0-9_]',
        },
        {
          command: 'Regex Compilation',
          description: 'Pre-compile regex for repeated use',
          usage: 'Language-specific compilation',
          example: '# JavaScript\nconst pattern = new RegExp("\\\\d+", "g");\n\n# Python\npattern = re.compile(r"\\\\d+");\n\n# Java\nPattern pattern = Pattern.compile("\\\\d+");\n\n# PHP\n$pattern = "/\\\\d+/";',
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
          example: '/\\((?:[^()]|(?R))*\\)/ matches balanced parentheses\n/<[^>]*(?:<(?R)[^>]*)*>/ matches nested HTML tags\n/"(?:[^"\\\\]|\\\\.)*"/ matches quoted strings',
        },
        {
          command: 'Subroutines',
          description: 'Call previously defined groups',
          usage: '(?1), (?2), etc.',
          example: '/(<[^>]+>)(.*?)(?1)/ matches opening and closing tags\n/(\\w+)\\s+(?1)/ matches repeated word patterns\n/(?<tag>\\w+).*?(?&tag)/ named subroutine',
        },
        {
          command: 'Branch Reset',
          description: 'Reset group numbers in alternation',
          usage: '(?|(a)|(b))',
          example: '/(?|(\\d+)|([a-z]+))/ both branches use group 1\n/(?|(\\w+)|(\\d+))/ same group number for alternatives',
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
          example: '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/\n\n# Advanced version:\n/^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/',
        },
        {
          command: 'URL Validation',
          description: 'Complete URL pattern',
          usage: 'URL validation regex',
          example: '/^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$/\n\n# Simplified:\n/https?:\\/\\/[\\w.-]+\\.[a-z]{2,}/i',
        },
        {
          command: 'Phone Number Patterns',
          description: 'International phone formats',
          usage: 'Phone number validation',
          example: '# US format:\n/^(?:\\+?1[-.]?)?\\(?([0-9]{3})\\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/\n\n# International:\n/^\\+?[1-9]\\d{1,14}$/',
        },
        {
          command: 'Password Validation',
          description: 'Strong password requirements',
          usage: 'Password strength regex',
          example: '# Strong password:\n/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/\n\n# Requirements:\n# - At least 8 characters\n# - One lowercase, one uppercase\n# - One digit, one special character',
        },
        {
          command: 'Credit Card Validation',
          description: 'Credit card number patterns',
          usage: 'Credit card regex',
          example: '# Basic format:\n/^\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}$/\n\n# With Luhn check (separate validation)\n/^\\d{13,19}$/',
        },
        {
          command: 'IPv4 Address',
          description: 'IPv4 address validation',
          usage: 'IP address regex',
          example: '/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/\n\n# Simplified:\n/^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$/',
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
          example: '# Multiple spaces to single:\nstr.replace(/\\s+/g, " ")\n\n# Trim leading/trailing:\nstr.replace(/^\\s+|\\s+$/g, "")\n\n# Remove all whitespace:\nstr.replace(/\\s/g, "")',
        },
        {
          command: 'Extract URLs',
          description: 'Find all URLs in text',
          usage: 'URL extraction regex',
          example: '/https?:\\/\\/[\\w.-]+(?:\\/[^\\s]*)?/g\n\n# With www:\n/https?:\\/\\/(?:www\\.)?[\\w.-]+\\.[a-z]{2,}/gi',
        },
        {
          command: 'Extract Email Addresses',
          description: 'Find all emails in text',
          usage: 'Email extraction regex',
          example: '/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g\n\n# With validation:\n/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/g',
        },
        {
          command: 'Extract Numbers',
          description: 'Find all numbers in text',
          usage: 'Number extraction regex',
          example: '/\\d+(?:\\.\\d+)?/g\n\n# Currency amounts:\n/\\$?\\d{1,3}(?:,\\d{3})*(?:\\.\\d{2})?/g\n\n# Percentages:\n/\\d+(?:\\.\\d+)?%/g',
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
          example: '# Test matching:\n/pattern/.test(string)\n\n# Find all matches:\nstring.match(/pattern/g)\n\n# Replace:\nstring.replace(/pattern/g, replacement)\n\n# Split:\nstring.split(/pattern/)\n\n# Search:\nstring.search(/pattern/)',
        },
        {
          command: 'Python Regex Module',
          description: 'Python re module usage',
          usage: 'Python regex functions',
          example: '# Import:\nimport re\n\n# Match:\nre.match(r"pattern", string)\n\n# Search:\nre.search(r"pattern", string)\n\n# Find all:\nre.findall(r"pattern", string)\n\n# Replace:\nre.sub(r"pattern", replacement, string)',
        },
        {
          command: 'Java Regex Classes',
          description: 'Java regex API',
          usage: 'Pattern and Matcher classes',
          example: '# Compile pattern:\nPattern pattern = Pattern.compile("regex");\n\n# Create matcher:\nMatcher matcher = pattern.matcher(text);\n\n# Find matches:\nwhile (matcher.find()) { ... }\n\n# Replace:\nString result = text.replaceAll("regex", "replacement");',
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
          example: '# PCRE callout syntax:\n/(?C1)/ callout 1\n/(?C"my_func")/ callout function\n\n# Used for debugging and complex matching\n# Available in PCRE, PHP, R, some other engines',
        },
        {
          command: 'PCRE Backtracking Control',
          description: 'Control backtracking behavior',
          usage: '(*PRUNE), (*SKIP), (*THEN)',
          example: '# Backtracking verbs:\na(*PRUNE)b - prune backtracking at a\na(*SKIP)b - skip to b if a matches\na(*THEN)b - try b if a fails\n\n# Prevents catastrophic backtracking',
        },
        {
          command: 'PCRE Subpattern Definitions',
          description: 'Define reusable subpatterns',
          usage: '(?(DEFINE)pattern)',
          example: '# Define subpatterns:\n(?(DEFINE)(?<digit>\\d+)(?<word>\\w+))\n# Use later in pattern:\n(?<digit>digit)|(?<word>word)',
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
          example: '# Balanced parentheses:\n(?<open>\\()|(?<-open>\\))|(?:(?!\\().)+\n(?(open)(?!))$\n\n# Tracks opening/closing counts',
        },
        {
          command: '.NET Character Class Subtraction',
          description: 'Subtract character classes',
          usage: '[class-[subclass]]',
          example: '# All letters except vowels:\n[a-z-[aeiou]]\n\n# Digits except 0:\n[0-9-[0]]\n\n# Available in .NET only',
        },
        {
          command: '.NET Right-to-Left Matching',
          description: 'Match patterns from right to left',
          usage: 'RegexOptions.RightToLeft',
          example: '# C# example:\nvar regex = new Regex(@"\\d+", RegexOptions.RightToLeft);\n\n# Useful for parsing from end',
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
          example: '# Extended properties:\n/\\p{Script=Devanagari}+/ Hindi script\n/\\p{Block=Cyrillic}+/ Cyrillic block\n/\\p{Grapheme_Cluster_Break=Spacing_Mark}/\n/\\p{East_Asian_Width=Wide}+/ Full-width characters',
        },
        {
          command: 'Unicode Text Segmentation',
          description: 'Match text boundaries using Unicode rules',
          usage: '\\b{g} (grapheme cluster)',
          example: '# Grapheme clusters:\n/\\b{g}/ Unicode grapheme boundaries\n/\\X/ Match entire grapheme cluster\n\n# Handles emoji sequences, combining marks',
        },
        {
          command: 'Unicode Normalization',
          description: 'Handle Unicode normalization forms',
          usage: 'Normalize before regex',
          example: '# JavaScript:\ntext.normalize("NFC")\n\n# Python:\nimport unicodedata\nunicodedata.normalize("NFC", text)\n\n# Ensures consistent matching',
        },
        {
          command: 'Bidirectional Text',
          description: 'Handle RTL/LTR text patterns',
          usage: 'Unicode directional properties',
          example: '# RTL scripts:\n/\\p{Bidi_Class=Arabic}+/ Arabic\n/\\p{Bidi_Class=Hebrew}+/ Hebrew\n\n# Mixed directional text patterns',
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
          example: '# Nested conditions:\n(?(?=\\d)\\d+(?(?=\\.)\\.\\d+|\\b)|[a-z]+)\n\n# Numbers with optional decimals OR words',
        },
        {
          command: 'Recursive Conditionals',
          description: 'Conditional patterns with recursion',
          usage: '(?(R)pattern|pattern)',
          example: '# Conditional recursion:\n(?(R)\\((?:[^()]|(?R))*\\)|\\w+)\n\n# Match balanced parentheses OR words',
        },
        {
          command: 'Lookaround Conditionals',
          description: 'Use lookarounds in conditions',
          usage: '(?(?=lookahead)then|else)',
          example: '# Lookahead conditional:\n(?(?=\\d{4})\\d{4}-\\d{2}-\\d{2}|[a-z]{3,})\n\n# Date format OR short words',
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
          example: '# JavaScript (ES2018+):\n/(?<=\\d{2,4})\\b/ boundary after 2-4 digits\n\n# PCRE/Python:\n/(?<=(?:\\w+\\s+){2})\\w+/ word after 2 words',
        },
        {
          command: 'Multiple Lookarounds',
          description: 'Combine multiple lookarounds',
          usage: '(?=...)(?!...)(?<=...)(?<!...)',
          example: '# Complex validation:\n(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?!.*\\s).{8,}\n\n# Password: 8+ chars, mixed case, digit, no spaces',
        },
        {
          command: 'Conditional Anchors',
          description: 'Anchors that depend on context',
          usage: '(?(?m)^|\\G)',
          example: '# Multiline conditional:\n(?(?m)^\\s*#|\\G\\s*#) line start or continuation\n\n# Context-aware boundaries',
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
          example: '# ISO 8601:\n/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d{3})?Z?$/\n\n# US Date (MM/DD/YYYY):\n/^(0[1-9]|1[0-2])\\/(0[1-9]|[12]\\d|3[01])\\/(19|20)\\d{2}$/\n\n# Time 12-hour:\n/^(1[0-2]|0?[1-9]):[0-5]\\d\\s?(?:AM|PM)$/i',
        },
        {
          command: 'Social Security Numbers',
          description: 'SSN validation patterns',
          usage: 'Social Security Number regex',
          example: '# US SSN:\n/^(?!000|666|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0000)\\d{4}$/\n\n# Simplified:\n/^\\d{3}-\\d{2}-\\d{4}$/\n\n# With area number validation',
        },
        {
          command: 'Postal Code Patterns',
          description: 'International postal codes',
          usage: 'Postal code validation',
          example: '# US ZIP:\n/^\\d{5}(-\\d{4})?$/\n\n# Canadian:\n/^[ABCEGHJ-NPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][ -]?\\d[ABCEGHJ-NPRSTV-Z]\\d$/i\n\n# UK Postcode:\n/^[A-Z]{1,2}\\d[A-Z\\d]?\\s?\\d[A-Z]{2}$/i',
        },
        {
          command: 'Credit Card Enhanced',
          description: 'Credit card validation with card types',
          usage: 'Enhanced credit card patterns',
          example: '# Visa:\n/^4[12]\\d{13,15}$/\n\n# Mastercard:\n/^(5[1-5]\\d{4}|2[2-7]\\d{3})\\d{10}$/\n\n# Amex:\n/^3[47]\\d{13}$/\n\n# Discover:\n/^6(?:011|5\\d{2})\\d{12}$/',
        },
        {
          command: 'MAC Address Validation',
          description: 'MAC address patterns',
          usage: 'Hardware address validation',
          example: '# MAC Address:\n/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/\n\n# IPv6 MAC:\n/^([0-9A-Fa-f]{4}\\.){2}[0-9A-Fa-f]{4}$/',
        },
        {
          command: 'License Plate Patterns',
          description: 'Vehicle license plate formats',
          usage: 'License plate validation',
          example: '# US General:\n/^[A-Z0-9]{2,8}$/\n\n# California:\n/^\\d{1}[A-Z]{3}\\s?\\d{3}$/\n\n# Customizable by state/country',
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
          example: '# Problem patterns:\n# (.+)*a - can be catastrophic\n# Solution:\n(?>.+)*a or (.++)*a\n\n# Nested quantifiers:\n# (.+\\s+)+ - problematic\n# Solution:\n(?>[^\\s]+\\s+)+',
        },
        {
          command: 'Optimized Character Classes',
          description: 'Efficient character class design',
          usage: 'Optimized character class patterns',
          example: '# Use specific ranges:\n[0-9] not \\d for single digits\n[a-f] not [abcdef] for hex\n\n# Avoid overlapping ranges:\n[a-zA-Z] not [a-z][A-Z]\n\n# Use negation when beneficial:\n[^a-z] when most chars are non-letters',
        },
        {
          command: 'Regex Compilation Strategies',
          description: 'Advanced compilation techniques',
          usage: 'Pattern compilation optimization',
          example: '# JavaScript:\nconst patterns = {\n  email: /^\\S+@\\S+\\.\\S+$/,\n  phone: /^\\d{3}-\\d{3}-\\d{4}$/\n};\n\n# Python:\npatterns = {k: re.compile(v) for k, v in regex_dict.items()}\n\n# Java static final patterns',
        },
        {
          command: 'Benchmarking Techniques',
          description: 'Performance testing methods',
          usage: 'Regex performance measurement',
          example: '# JavaScript performance:\nconsole.time(\'regex\');\nfor(let i = 0; i < 10000; i++) pattern.test(text);\nconsole.timeEnd(\'regex\');\n\n# Python timeit:\nimport timeit\ntimeit.timeit(lambda: pattern.search(text), number=10000)',
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
          example: '# Matching:\npreg_match(\'/pattern/\', $string, $matches)\n\n# All matches:\npreg_match_all(\'/pattern/\', $string, $matches)\n\n# Replace:\npreg_replace(\'/pattern/\', $replacement, $string)\n\n# Split:\npreg_split(\'/pattern/\', $string)',
        },
        {
          command: 'Ruby Regex Features',
          description: 'Ruby-specific regex capabilities',
          usage: 'Ruby regex syntax and methods',
          example: '# Ruby regex literals:\n/pattern/\n/pattern/i\n/pattern/m\n\n# Methods:\n"string".match(/pattern/)\n"string".scan(/pattern/)\n"string".gsub(/pattern/, replacement)\n\n# Named captures:\n/(?<name>pattern)/',
        },
        {
          command: 'Go Regex Package',
          description: 'Go regexp package usage',
          usage: 'Go regex functions',
          example: '# Import:\nimport "regexp"\n\n# Compile:\nre := regexp.MustCompile(`\\d+`)\n\n# Find:\nmatches := re.FindAllString(text, -1)\n\n# Replace:\nresult := re.ReplaceAllString(text, replacement)',
        },
        {
          command: 'Rust Regex Crate',
          description: 'Rust regex crate features',
          usage: 'Rust regex crate',
          example: '# Cargo.toml:\nregex = "1.0"\n\n# Use:\nuse regex::Regex;\n\nlet re = Regex::new(r"\\d+").unwrap();\nlet caps = re.captures(text).unwrap();',
        },
        {
          command: 'Swift Regex (iOS 16+)',
          description: 'Modern Swift regex syntax',
          usage: 'Swift regex builder',
          example: '# Swift 5.7+:\nimport RegexBuilder\n\nlet regex = Regex {\n  OneOrMore(.digit)\n  "."\n  OneOrMore(.digit)\n}\n\n# Traditional:\nlet regex = try Regex("\\\\d+\\\\.\\\\d+")',
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
          example: '# Debugging techniques:\n# 1. Break down complex patterns\n# 2. Use online testers (regex101.com)\n# 3. Add comments (x flag in PCRE)\n# 4. Test edge cases\n# 5. Use capture groups for verification\n\n# PCRE commented mode:\n/\\n  # Match email\n  \\w+@\\w+\\.\\w+  # Basic structure\n/x',
        },
        {
          command: 'Common Pitfalls',
          description: 'Advanced regex mistakes to avoid',
          usage: 'Regex best practices',
          example: '# Advanced pitfalls:\n# - Greedy quantifiers in nested structures\n# - Backtracking in alternation\n# - Unicode normalization issues\n# - Engine-specific features\n# - Performance in loops\n\n# Always test with:\n# - Empty strings\n# - Very long strings\n# - Unicode characters\n# - Edge cases',
        },
        {
          command: 'Regex Testing Strategies',
          description: 'Comprehensive testing approaches',
          usage: 'Test regex patterns thoroughly',
          example: '# Testing framework:\n# 1. Positive test cases\n# 2. Negative test cases\n# 3. Boundary conditions\n# 4. Performance tests\n# 5. Cross-language tests\n\n# Test data examples:\n# - Valid inputs\n# - Invalid inputs\n# - Edge cases\n# - Unicode samples\n# - Large inputs',
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
          example: '# ES2024 v flag:\n/[\\p{Script=Latin}&&\\p{Letter}]/v\n# Intersection of properties\n\n/[\\p{Emoji}&&\\p{Emoji_Presentation}]/v\n# Emoji that present by default\n\n# Available in modern browsers/Node.js',
        },
        {
          command: 'Python 3.12+ Features',
          description: 'Latest Python regex enhancements',
          usage: 're module new features',
          example: '# Python 3.12+:\n# Enhanced Unicode support\n# Performance improvements\n# Better error messages\n\nimport re\npattern = re.compile(r"\\p{Script=Latin}", re.UNICODE)',
        },
        {
          command: 'Java 17+ Regex Features',
          description: 'Modern Java regex capabilities',
          usage: 'Java Pattern class enhancements',
          example: '# Java 17+ features:\n# Enhanced Unicode support\n# Better performance\n# New predefined character classes\n\nPattern pattern = Pattern.compile("\\\\p{Script=Latin}");',
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
          example: '# Popular tools:\n# - regex101.com (detailed explanations)\n# - regexr.com (interactive testing)\n# - debuggex.com (visual regex)\n# - regexpal.com (simple testing)\n\n# Always test in your target language',
        },
        {
          command: 'Common Regex Mistakes',
          description: 'Avoid common regex errors',
          usage: 'Regex debugging tips',
          example: '# Forgetting to escape:\n# Use \\. not . for literal dot\n\n# Greedy vs lazy:\n# .* is greedy, .*? is lazy\n\n# Character class escaping:\n# Inside [], escape ] \\ ^ -\n\n# Multiline vs single line:\n# Use m flag for ^ $ to work per line',
        },
        {
          command: 'Performance Testing',
          description: 'Test regex performance',
          usage: 'Benchmark regex patterns',
          example: '# Test with large inputs\n# Use browser dev tools or Node.js\n\n# Time complexity matters\n# Avoid catastrophic backtracking\n\n# Use specific character classes\n# [a-z] is faster than (a|b|c)',
        },
      ],
    },
  ],
};
