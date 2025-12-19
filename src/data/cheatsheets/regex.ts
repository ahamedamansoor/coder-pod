import { FileSearch } from 'lucide-react';

export const regexCheatsheet = {
  id: 'regex',
  name: 'Regular Expressions',
  description: 'RegEx patterns and syntax',
  icon: FileSearch,
  colorTheme: 'amber' as const,
  sections: [
    {
      title: 'Basic Patterns',
      commands: [
        {
          command: '.',
          description: 'Any single character',
          usage: '.',
          example: 'a.c matches "abc", "aXc"',
        },
        {
          command: '^',
          description: 'Start of string',
          usage: '^pattern',
          example: '^Hello matches "Hello world"',
        },
        {
          command: '$',
          description: 'End of string',
          usage: 'pattern$',
          example: 'world$ matches "Hello world"',
        },
        {
          command: '*',
          description: 'Zero or more times',
          usage: 'a*',
          example: 'ab*c matches "ac", "abc", "abbc"',
        },
        {
          command: '+',
          description: 'One or more times',
          usage: 'a+',
          example: 'ab+c matches "abc", "abbc"',
        },
        {
          command: '?',
          description: 'Zero or one time',
          usage: 'a?',
          example: 'ab?c matches "ac", "abc"',
        },
      ],
    },
    {
      title: 'Character Classes',
      commands: [
        {
          command: '[abc]',
          description: 'Any character in set',
          usage: '[abc]',
          example: '[aeiou] matches any vowel',
        },
        {
          command: '[^abc]',
          description: 'Any character NOT in set',
          usage: '[^abc]',
          example: '[^0-9] matches non-digits',
        },
        {
          command: '[a-z]',
          description: 'Character range',
          usage: '[a-z]',
          example: '[a-z] lowercase\n[A-Z] uppercase\n[0-9] digits',
        },
        {
          command: '\\d',
          description: 'Any digit [0-9]',
          usage: '\\d',
          example: '\\d{3} matches "123"',
        },
        {
          command: '\\D',
          description: 'Any non-digit',
          usage: '\\D',
          example: '\\D+ matches "abc"',
        },
        {
          command: '\\w',
          description: 'Word character [a-zA-Z0-9_]',
          usage: '\\w',
          example: '\\w+ matches "hello_123"',
        },
        {
          command: '\\W',
          description: 'Non-word character',
          usage: '\\W',
          example: '\\W matches spaces, punctuation',
        },
        {
          command: '\\s',
          description: 'Whitespace character',
          usage: '\\s',
          example: '\\s+ matches spaces, tabs',
        },
        {
          command: '\\S',
          description: 'Non-whitespace character',
          usage: '\\S',
          example: '\\S+ matches "hello"',
        },
      ],
    },
    {
      title: 'Quantifiers',
      commands: [
        {
          command: '{n}',
          description: 'Exactly n times',
          usage: 'a{3}',
          example: 'a{3} matches "aaa"',
        },
        {
          command: '{n,}',
          description: 'At least n times',
          usage: 'a{2,}',
          example: 'a{2,} matches "aa", "aaa"',
        },
        {
          command: '{n,m}',
          description: 'Between n and m times',
          usage: 'a{2,4}',
          example: 'a{2,4} matches "aa", "aaa", "aaaa"',
        },
        {
          command: '*?',
          description: 'Lazy zero or more',
          usage: 'a*?',
          example: '<.*?> matches "<div>" not "<div><span>"',
        },
        {
          command: '+?',
          description: 'Lazy one or more',
          usage: 'a+?',
          example: 'Matches minimal characters',
        },
      ],
    },
    {
      title: 'Groups & Capturing',
      commands: [
        {
          command: '(pattern)',
          description: 'Capturing group',
          usage: '(\\d{3})',
          example: '(\\d{3})-(\\d{3}) captures area code',
        },
        {
          command: '(?:pattern)',
          description: 'Non-capturing group',
          usage: '(?:abc)',
          example: '(?:https?://) matches http:// or https://',
        },
        {
          command: '\\1, \\2',
          description: 'Backreference',
          usage: '(\\w+)\\s\\1',
          example: '(\\w+)\\s\\1 matches "hello hello"',
        },
        {
          command: '|',
          description: 'Alternation (OR)',
          usage: 'a|b',
          example: 'cat|dog matches "cat" or "dog"',
        },
      ],
    },
    {
      title: 'Lookahead & Lookbehind',
      commands: [
        {
          command: '(?=pattern)',
          description: 'Positive lookahead',
          usage: 'a(?=b)',
          example: 'a(?=b) matches "a" in "ab" but not "ac"',
        },
        {
          command: '(?!pattern)',
          description: 'Negative lookahead',
          usage: 'a(?!b)',
          example: 'a(?!b) matches "a" NOT followed by "b"',
        },
        {
          command: '(?<=pattern)',
          description: 'Positive lookbehind',
          usage: '(?<=@)\\w+',
          example: '(?<=@)\\w+ matches "gmail" in "@gmail"',
        },
        {
          command: '(?<!pattern)',
          description: 'Negative lookbehind',
          usage: '(?<!@)\\w+',
          example: 'Matches text NOT preceded by @',
        },
      ],
    },
    {
      title: 'Anchors & Boundaries',
      commands: [
        {
          command: '\\b',
          description: 'Word boundary',
          usage: '\\bword\\b',
          example: '\\bcat\\b matches "cat" not "catch"',
        },
        {
          command: '\\B',
          description: 'Non-word boundary',
          usage: '\\B',
          example: '\\Bcat\\B matches "concatenate"',
        },
      ],
    },
    {
      title: 'Flags',
      commands: [
        {
          command: 'i',
          description: 'Case insensitive',
          usage: '/pattern/i',
          example: '/hello/i matches "Hello", "HELLO"',
        },
        {
          command: 'g',
          description: 'Global match',
          usage: '/pattern/g',
          example: '/a/g matches all "a" in string',
        },
        {
          command: 'm',
          description: 'Multiline',
          usage: '/pattern/m',
          example: '^$ match line starts/ends',
        },
        {
          command: 's',
          description: 'Dotall (. matches newlines)',
          usage: '/pattern/s',
          example: '. matches any character including \\n',
        },
      ],
    },
    {
      title: 'Common Patterns',
      commands: [
        {
          command: 'Email',
          description: 'Email validation',
          usage: '[\\w.-]+@[\\w.-]+\\.\\w+',
          example: '/^[\\w.-]+@[\\w.-]+\\.\\w+$/',
        },
        {
          command: 'URL',
          description: 'URL pattern',
          usage: 'https?://[\\w.-]+',
          example: '/https?:\\/\\/[\\w.-]+\\.[\\w]{2,}/',
        },
        {
          command: 'Phone',
          description: 'Phone number (US)',
          usage: '\\d{3}-\\d{3}-\\d{4}',
          example: '/^\\d{3}-\\d{3}-\\d{4}$/',
        },
        {
          command: 'IP Address',
          description: 'IPv4 pattern',
          usage: '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}',
          example: 'Basic IP pattern',
        },
        {
          command: 'Hex Color',
          description: 'Hex color code',
          usage: '#[0-9A-Fa-f]{6}',
          example: '/^#[0-9A-Fa-f]{6}$/',
        },
        {
          command: 'Date',
          description: 'Date format YYYY-MM-DD',
          usage: '\\d{4}-\\d{2}-\\d{2}',
          example: '/^\\d{4}-\\d{2}-\\d{2}$/',
        },
      ],
    },
    {
      title: 'Escape Characters',
      commands: [
        {
          command: '\\',
          description: 'Escape special character',
          usage: '\\.',
          example: '\\. matches literal dot\n\\* matches literal *',
        },
        {
          command: '\\n',
          description: 'Newline',
          usage: '\\n',
          example: 'Line\\nbreak',
        },
        {
          command: '\\t',
          description: 'Tab',
          usage: '\\t',
          example: 'Tab\\tspace',
        },
        {
          command: '\\r',
          description: 'Carriage return',
          usage: '\\r',
          example: 'Windows line ending \\r\\n',
        },
        {
          command: '\\0',
          description: 'Null character',
          usage: '\\0',
          example: 'Null terminator',
        },
      ],
    },
    {
      title: 'Named Capture Groups',
      commands: [
        {
          command: '(?<name>pattern)',
          description: 'Named capturing group',
          usage: '(?<name>\\w+)',
          example: '(?<year>\\d{4})-(?<month>\\d{2})\n# Access via groups.year',
        },
        {
          command: '\\k<name>',
          description: 'Backreference to named group',
          usage: '\\k<name>',
          example: '(?<word>\\w+)\\s\\k<word>\n# Matches repeated words',
        },
      ],
    },
    {
      title: 'Unicode & International',
      commands: [
        {
          command: '\\p{L}',
          description: 'Unicode letter',
          usage: '\\p{L}',
          example: '\\p{L}+ matches "café", "日本"',
        },
        {
          command: '\\p{N}',
          description: 'Unicode number',
          usage: '\\p{N}',
          example: '\\p{N}+ matches any script numbers',
        },
        {
          command: '\\p{Script=Greek}',
          description: 'Unicode script',
          usage: '\\p{Script=Greek}',
          example: 'Match Greek characters',
        },
        {
          command: '\\u{XXXX}',
          description: 'Unicode code point',
          usage: '\\u{1F600}',
          example: '\\u{1F600} matches 😀',
        },
      ],
    },
    {
      title: 'Advanced Validation Patterns',
      commands: [
        {
          command: 'Strong Password',
          description: 'Password with requirements',
          usage: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
          example: 'Min 8 chars, uppercase, lowercase, digit, special',
        },
        {
          command: 'Username',
          description: 'Username validation',
          usage: '^[a-zA-Z0-9_-]{3,16}$',
          example: '3-16 chars, alphanumeric, dash, underscore',
        },
        {
          command: 'Slug',
          description: 'URL slug pattern',
          usage: '^[a-z0-9]+(?:-[a-z0-9]+)*$',
          example: 'my-blog-post-title',
        },
        {
          command: 'Credit Card',
          description: 'Credit card number',
          usage: '^\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}$',
          example: '1234 5678 9012 3456',
        },
        {
          command: 'Social Security',
          description: 'SSN pattern (US)',
          usage: '^\\d{3}-\\d{2}-\\d{4}$',
          example: '123-45-6789',
        },
        {
          command: 'Postal Code',
          description: 'ZIP code (US)',
          usage: '^\\d{5}(-\\d{4})?$',
          example: '12345 or 12345-6789',
        },
      ],
    },
    {
      title: 'Web & Internet',
      commands: [
        {
          command: 'URL (Complete)',
          description: 'Full URL validation',
          usage: '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$',
          example: 'Complete URL pattern',
        },
        {
          command: 'Email (RFC 5322)',
          description: 'Standard email validation',
          usage: '^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
          example: 'RFC-compliant email',
        },
        {
          command: 'Domain',
          description: 'Domain name',
          usage: '^([a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}$',
          example: 'example.com, sub.domain.co.uk',
        },
        {
          command: 'IPv6',
          description: 'IPv6 address',
          usage: '(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4})',
          example: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
        },
        {
          command: 'MAC Address',
          description: 'MAC address pattern',
          usage: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
          example: '00:1B:44:11:3A:B7',
        },
      ],
    },
    {
      title: 'Date & Time Patterns',
      commands: [
        {
          command: 'ISO 8601 Date',
          description: 'ISO date format',
          usage: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{3})?Z?$',
          example: '2024-01-15T10:30:00.000Z',
        },
        {
          command: 'US Date',
          description: 'MM/DD/YYYY format',
          usage: '^(0[1-9]|1[0-2])\\/(0[1-9]|[12][0-9]|3[01])\\/\\d{4}$',
          example: '12/31/2024',
        },
        {
          command: 'EU Date',
          description: 'DD/MM/YYYY format',
          usage: '^(0[1-9]|[12][0-9]|3[01])\\/(0[1-9]|1[0-2])\\/\\d{4}$',
          example: '31/12/2024',
        },
        {
          command: 'Time (24h)',
          description: '24-hour time format',
          usage: '^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$',
          example: '14:30:00 or 9:45',
        },
        {
          command: 'Time (12h)',
          description: '12-hour time with AM/PM',
          usage: '^(0?[1-9]|1[0-2]):[0-5][0-9]\\s?(AM|PM|am|pm)$',
          example: '2:30 PM',
        },
      ],
    },
    {
      title: 'File & Path Patterns',
      commands: [
        {
          command: 'File Extension',
          description: 'Extract file extension',
          usage: '\\.([a-zA-Z0-9]+)$',
          example: 'file.txt → txt',
        },
        {
          command: 'Image Files',
          description: 'Image file extensions',
          usage: '\\.(jpg|jpeg|png|gif|svg|webp|bmp)$',
          example: 'Matches image files',
        },
        {
          command: 'Windows Path',
          description: 'Windows file path',
          usage: '^[a-zA-Z]:\\\\(?:[^\\\\/:*?"<>|\\r\\n]+\\\\)*[^\\\\/:*?"<>|\\r\\n]*$',
          example: 'C:\\Users\\Documents\\file.txt',
        },
        {
          command: 'Unix Path',
          description: 'Unix/Linux file path',
          usage: '^\\/(?:[^\\/]+\\/)*[^\\/]+$',
          example: '/home/user/documents/file.txt',
        },
      ],
    },
    {
      title: 'Code & Markup',
      commands: [
        {
          command: 'HTML Tag',
          description: 'Match HTML tags',
          usage: '<([a-z]+)([^>]*)>.*?<\\/\\1>',
          example: '<div class="x">content</div>',
        },
        {
          command: 'HTML Comment',
          description: 'Match HTML comments',
          usage: '<!--[\\s\\S]*?-->',
          example: '<!-- comment -->',
        },
        {
          command: 'CSS Color',
          description: 'CSS color (hex, rgb, rgba)',
          usage: '#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b|rgba?\\([^)]+\\)',
          example: '#fff, rgb(255,0,0)',
        },
        {
          command: 'JavaScript Variable',
          description: 'Variable declaration',
          usage: '\\b(var|let|const)\\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\\b',
          example: 'let myVar = 5',
        },
        {
          command: 'JSON String',
          description: 'JSON string value',
          usage: '"([^"\\\\]|\\\\.)*"',
          example: '"Hello \\"World\\""',
        },
      ],
    },
    {
      title: 'Numbers & Currency',
      commands: [
        {
          command: 'Integer',
          description: 'Positive/negative integers',
          usage: '^-?\\d+$',
          example: '123, -456',
        },
        {
          command: 'Decimal',
          description: 'Decimal numbers',
          usage: '^-?\\d+(\\.\\d+)?$',
          example: '123.45, -67.89',
        },
        {
          command: 'Currency (US)',
          description: 'US dollar amount',
          usage: '^\\$?\\d{1,3}(,\\d{3})*(\\.\\d{2})?$',
          example: '$1,234.56',
        },
        {
          command: 'Percentage',
          description: 'Percentage value',
          usage: '^\\d+(\\.\\d+)?%$',
          example: '75.5%',
        },
        {
          command: 'Scientific Notation',
          description: 'Scientific number format',
          usage: '^[+-]?\\d+(\\.\\d+)?[eE][+-]?\\d+$',
          example: '1.23e-4',
        },
      ],
    },
    {
      title: 'Conditional Patterns',
      commands: [
        {
          command: '(?(condition)yes|no)',
          description: 'Conditional pattern',
          usage: '(?(1)yes|no)',
          example: '(a)?(?(1)b|c)\n# If "a" matches, require "b", else "c"',
        },
        {
          command: '(?(?=test)yes|no)',
          description: 'Lookahead conditional',
          usage: '(?(?=\\d)\\d{3}|[a-z]{3})',
          example: 'Match 3 digits OR 3 letters',
        },
      ],
    },
    {
      title: 'Performance & Optimization',
      commands: [
        {
          command: 'Atomic Grouping',
          description: 'Non-backtracking group',
          usage: '(?>pattern)',
          example: '(?>\\d+)\\w\n# Faster, no backtracking',
        },
        {
          command: 'Possessive Quantifier',
          description: 'No backtracking quantifier',
          usage: '*+, ++, ?+',
          example: '\\d++\\w\n# Faster matching',
        },
      ],
    },
    {
      title: 'Language-Specific',
      commands: [
        {
          command: 'JavaScript Regex',
          description: 'Create regex in JS',
          usage: 'new RegExp(pattern, flags)',
          example: 'const re = new RegExp("\\\\d+", "g")\nconst re = /\\d+/g',
        },
        {
          command: 'Python Regex',
          description: 'Python re module',
          usage: 'import re; re.search(pattern, string)',
          example: 're.match(r"\\d+", "123")\nre.findall(r"\\w+", text)',
        },
        {
          command: 'PHP Regex',
          description: 'PCRE in PHP',
          usage: 'preg_match(pattern, subject)',
          example: 'preg_match("/\\d+/", $str)\npreg_replace("/old/", "new", $str)',
        },
      ],
    },
    {
      title: 'Testing & Debugging',
      commands: [
        {
          command: 'Match All',
          description: 'Find all matches',
          usage: 'string.match(/pattern/g)',
          example: '"abc123def456".match(/\\d+/g)\n// ["123", "456"]',
        },
        {
          command: 'Test Match',
          description: 'Test if pattern matches',
          usage: '/pattern/.test(string)',
          example: '/\\d+/.test("abc123")\n// true',
        },
        {
          command: 'Replace',
          description: 'Replace with regex',
          usage: 'string.replace(/pattern/g, replacement)',
          example: '"hello".replace(/l/g, "L")\n// "heLLo"',
        },
        {
          command: 'Split',
          description: 'Split by regex',
          usage: 'string.split(/pattern/)',
          example: '"a,b;c".split(/[,;]/)\n// ["a", "b", "c"]',
        },
      ],
    },
    {
      title: 'Advanced Patterns',
      commands: [
        {
          command: 'Balanced Parentheses',
          description: 'Match balanced parentheses',
          usage: '\\(([^()]|\\([^()]*\\))*\\)',
          example: 'Matches nested parentheses (up to one level)',
        },
        {
          command: 'Quoted Strings',
          description: 'Match quoted strings with escaped quotes',
          usage: '"(?:[^"\\\\]|\\\\.)*"',
          example: '"Hello \\"World\\"" matches complete string',
        },
        {
          command: 'HTML Attributes',
          description: 'Extract HTML attribute values',
          usage: '\\s+([a-z-]+)=["\']([^"\']*)["\']',
          example: '<div class="container" id="main">',
        },
        {
          command: 'Multi-line Comments',
          description: 'Match multi-line comments',
          usage: '/\\*[\\s\\S]*?\\*/',
          example: '/* This is a\n   multi-line comment */',
        },
        {
          command: 'Single-line Comments',
          description: 'Match single-line comments',
          usage: '//.*$',
          example: '// This is a comment',
        },
      ],
    },
    {
      title: 'Backtracking Control',
      commands: [
        {
          command: 'Atomic Groups',
          description: 'Prevent backtracking',
          usage: '(?>pattern)',
          example: '(?>\\d+)\\w\n# Once digits matched, no backtracking',
        },
        {
          command: 'Possessive Quantifiers',
          description: 'Greedy with no backtracking',
          usage: '*+, ++, ?+, {n,m}+',
          example: '\\d++\\w\n# Matches all digits, no backtracking',
        },
        {
          command: 'Branch Reset',
          description: 'Reset capturing groups in alternation',
          usage: '(?|(a)|(b))',
          example: 'Both branches use same group number',
        },
      ],
    },
    {
      title: 'Recursion & Subroutines',
      commands: [
        {
          command: 'Recursive Pattern',
          description: 'Match nested structures',
          usage: '(?R) or (?0)',
          example: '\\((?:[^()]|(?R))*\\)\n# Matches balanced parentheses',
        },
        {
          command: 'Subroutine Call',
          description: 'Call capturing group',
          usage: '(?1), (?2), etc.',
          example: '(\\w+)\\s+(?1)\n# Matches word followed by same pattern',
        },
        {
          command: 'Named Subroutine',
          description: 'Call named group',
          usage: '(?&name)',
          example: '(?<word>\\w+)\\s+(?&word)',
        },
      ],
    },
    {
      title: 'Lookaround Examples',
      commands: [
        {
          command: 'Password Validation',
          description: 'Complex password requirements',
          usage: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
          example: 'Min 8 chars, lowercase, uppercase, digit, special char',
        },
        {
          command: 'Word Boundaries',
          description: 'Match whole words only',
          usage: '\\bword\\b',
          example: '\\bcat\\b matches "cat" not "catch" or "scat"',
        },
        {
          command: 'Negative Lookahead',
          description: 'Exclude pattern',
          usage: '(?!pattern)',
          example: '\\d{3}(?!\\d)\n# 3 digits NOT followed by another digit',
        },
        {
          command: 'Positive Lookbehind',
          description: 'Match after pattern',
          usage: '(?<=pattern)',
          example: '(?<=\\$)\\d+\n# Numbers after dollar sign',
        },
      ],
    },
    {
      title: 'Performance Tips',
      commands: [
        {
          command: 'Avoid Catastrophic Backtracking',
          description: 'Use atomic groups or possessive quantifiers',
          usage: '(?>pattern) or pattern++',
          example: 'Avoid: (a+)+b\nUse: (?>a+)+b or a++b',
        },
        {
          command: 'Anchor Patterns',
          description: 'Use ^ and $ when possible',
          usage: '^pattern$',
          example: 'Anchored patterns are faster',
        },
        {
          command: 'Specific Character Classes',
          description: 'Use specific classes over .',
          usage: '\\d instead of .',
          example: '\\d+ is faster than .+ for numbers',
        },
        {
          command: 'Avoid Excessive Alternation',
          description: 'Limit | usage',
          usage: 'Use character classes when possible',
          example: '[abc] is faster than (a|b|c)',
        },
      ],
    },
    {
      title: 'Common Mistakes',
      commands: [
        {
          command: 'Escaping Special Characters',
          description: 'Remember to escape special chars',
          usage: '\\. \\+ \\* \\? \\^ \\$ \\[ \\] \\( \\) \\{ \\} \\|',
          example: 'Use \\. not . for literal dot',
        },
        {
          command: 'Greedy vs Lazy',
          description: 'Understand quantifier behavior',
          usage: '* vs *?, + vs +?',
          example: '.* matches everything, .*? matches minimal',
        },
        {
          command: 'Character Class Escaping',
          description: 'Escape rules in character classes',
          usage: 'Inside []: escape ] \\ ^ -',
          example: '[\\]\\-] matches ] or -',
        },
        {
          command: 'Group vs Non-Capturing',
          description: 'Use (?:) when capture not needed',
          usage: '(?:pattern)',
          example: 'Better performance when capture not needed',
        },
      ],
    },
    {
      title: 'Real-World Patterns',
      commands: [
        {
          command: 'Extract URLs from Text',
          description: 'Find all URLs in text',
          usage: 'https?://[\\w.-]+(?:/[^\\s]*)?',
          example: 'https://example.com/page\nhttp://sub.domain.co.uk/path?query=1',
        },
        {
          command: 'Extract Hashtags',
          description: 'Find hashtags in social media text',
          usage: '#[\\w]+',
          example: '#regex #coding #javascript',
        },
        {
          command: 'Extract Mentions',
          description: 'Find @mentions',
          usage: '@[\\w]+',
          example: '@username @john_doe',
        },
        {
          command: 'Extract Phone Numbers',
          description: 'Various phone formats',
          usage: '(?:\\+?1[-.]?)?\\(?([0-9]{3})\\)?[-.]?([0-9]{3})[-.]?([0-9]{4})',
          example: '(123) 456-7890, 123-456-7890, +1-123-456-7890',
        },
        {
          command: 'Extract IP Addresses',
          description: 'IPv4 addresses',
          usage: '\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b',
          example: '192.168.1.1, 10.0.0.1',
        },
        {
          command: 'Extract Credit Card Numbers',
          description: 'Credit card pattern (basic)',
          usage: '\\b\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}\\b',
          example: '1234 5678 9012 3456',
        },
        {
          command: 'Extract Dates',
          description: 'Various date formats',
          usage: '\\d{1,2}[/-]\\d{1,2}[/-]\\d{2,4}',
          example: '12/31/2024, 31-12-24',
        },
        {
          command: 'Extract Email Domains',
          description: 'Get domain from email',
          usage: '@([\\w.-]+\\.[\\w]{2,})',
          example: 'user@example.com → example.com',
        },
      ],
    },
    {
      title: 'Text Processing Patterns',
      commands: [
        {
          command: 'Remove Extra Spaces',
          description: 'Replace multiple spaces with single',
          usage: '\\s+',
          example: '"hello    world".replace(/\\s+/g, " ")\n// "hello world"',
        },
        {
          command: 'Trim Whitespace',
          description: 'Remove leading/trailing whitespace',
          usage: '^\\s+|\\s+$',
          example: '"  hello  ".replace(/^\\s+|\\s+$/g, "")\n// "hello"',
        },
        {
          command: 'Remove HTML Tags',
          description: 'Strip HTML tags from text',
          usage: '<[^>]+>',
          example: '"<div>Hello</div>".replace(/<[^>]+>/g, "")\n// "Hello"',
        },
        {
          command: 'Extract Text Between Tags',
          description: 'Get content between HTML tags',
          usage: '<tag>([^<]+)</tag>',
          example: '<div>Content</div> → Content',
        },
        {
          command: 'Find Duplicate Words',
          description: 'Find repeated words',
          usage: '\\b(\\w+)\\s+\\1\\b',
          example: '"hello hello world" → matches "hello hello"',
        },
        {
          command: 'Capitalize First Letter',
          description: 'Make first letter uppercase',
          usage: '^[a-z]',
          example: '"hello".replace(/^[a-z]/, (m) => m.toUpperCase())\n// "Hello"',
        },
        {
          command: 'CamelCase to snake_case',
          description: 'Convert camelCase to snake_case',
          usage: '([a-z])([A-Z])',
          example: '"helloWorld".replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase()\n// "hello_world"',
        },
        {
          command: 'snake_case to CamelCase',
          description: 'Convert snake_case to camelCase',
          usage: '_([a-z])',
          example: '"hello_world".replace(/_([a-z])/g, (_, c) => c.toUpperCase())\n// "helloWorld"',
        },
      ],
    },
    {
      title: 'Validation Patterns',
      commands: [
        {
          command: 'Valid Username',
          description: 'Username: 3-20 chars, alphanumeric + underscore',
          usage: '^[a-zA-Z0-9_]{3,20}$',
          example: 'Valid: user_123, Invalid: user-name, u',
        },
        {
          command: 'Valid Password',
          description: '8+ chars, at least one letter and one number',
          usage: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
          example: 'Valid: password123, Invalid: password, 12345678',
        },
        {
          command: 'Valid Hex Color',
          description: '3 or 6 digit hex color',
          usage: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
          example: 'Valid: #fff, #FF5733, Invalid: #ggg, #ff',
        },
        {
          command: 'Valid Time (24h)',
          description: '24-hour time format',
          usage: '^([01]?[0-9]|2[0-3]):[0-5][0-9]$',
          example: 'Valid: 09:30, 23:59, Invalid: 24:00, 9:60',
        },
        {
          command: 'Valid Time (12h)',
          description: '12-hour time with AM/PM',
          usage: '^(0?[1-9]|1[0-2]):[0-5][0-9]\\s?(AM|PM|am|pm)$',
          example: 'Valid: 9:30 AM, 12:00 PM, Invalid: 13:00 PM',
        },
        {
          command: 'Valid UUID',
          description: 'UUID format',
          usage: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
          example: '550e8400-e29b-41d4-a716-446655440000',
        },
        {
          command: 'Valid ISBN',
          description: 'ISBN-10 or ISBN-13',
          usage: '^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|[0-9]{13}$)[0-9]{1,5}[ -]?[0-9]+[ -]?[0-9]+[ -]?[0-9X]$',
          example: 'ISBN 0-306-40615-2',
        },
        {
          command: 'Valid Credit Card (Luhn)',
          description: 'Credit card with Luhn algorithm check',
          usage: '^[0-9]{13,19}$',
          example: 'Basic format (Luhn check done separately)',
        },
      ],
    },
    {
      title: 'Data Extraction Patterns',
      commands: [
        {
          command: 'Extract Numbers',
          description: 'Find all numbers in text',
          usage: '\\d+(?:\\.\\d+)?',
          example: '"Price: $19.99 and $5" → 19.99, 5',
        },
        {
          command: 'Extract Currency Amounts',
          description: 'Find currency values',
          usage: '\\$?\\d{1,3}(?:,\\d{3})*(?:\\.\\d{2})?',
          example: '$1,234.56, 99.99, $100',
        },
        {
          command: 'Extract Percentages',
          description: 'Find percentage values',
          usage: '\\d+(?:\\.\\d+)?%',
          example: '50%, 12.5%, 100%',
        },
        {
          command: 'Extract Version Numbers',
          description: 'Semantic versioning',
          usage: '\\d+\\.\\d+(?:\\.\\d+)?(?:-[\\w]+)?',
          example: '1.2.3, 2.0.0-beta, 1.0',
        },
        {
          command: 'Extract File Extensions',
          description: 'Get file extension',
          usage: '\\.([a-zA-Z0-9]+)$',
          example: 'file.txt → txt, image.JPG → JPG',
        },
        {
          command: 'Extract Domain Names',
          description: 'Extract domain from URL',
          usage: 'https?://([\\w.-]+)',
          example: 'https://example.com → example.com',
        },
        {
          command: 'Extract Query Parameters',
          description: 'Get query string parameters',
          usage: '[?&]([^=]+)=([^&]+)',
          example: '?name=John&age=30 → name=John, age=30',
        },
        {
          command: 'Extract JSON Keys',
          description: 'Find JSON object keys',
          usage: '"([^"]+)":',
          example: '{"name": "John", "age": 30} → name, age',
        },
      ],
    },
    {
      title: 'String Manipulation',
      commands: [
        {
          command: 'Split by Multiple Delimiters',
          description: 'Split on comma, semicolon, or pipe',
          usage: '[,;|]',
          example: '"a,b;c|d".split(/[,;|]/)\n// ["a", "b", "c", "d"]',
        },
        {
          command: 'Remove Non-Alphanumeric',
          description: 'Keep only letters and numbers',
          usage: '[^a-zA-Z0-9]',
          example: '"Hello, World!123".replace(/[^a-zA-Z0-9]/g, "")\n// "HelloWorld123"',
        },
        {
          command: 'Remove Digits',
          description: 'Remove all numbers',
          usage: '\\d',
          example: '"abc123def456".replace(/\\d/g, "")\n// "abcdef"',
        },
        {
          command: 'Remove Vowels',
          description: 'Remove all vowels',
          usage: '[aeiouAEIOU]',
          example: '"Hello World".replace(/[aeiouAEIOU]/g, "")\n// "Hll Wrld"',
        },
        {
          command: 'Add Commas to Numbers',
          description: 'Format numbers with thousand separators',
          usage: '(\\d)(?=(\\d{3})+(?!\\d))',
          example: '"1000000".replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")\n// "1,000,000"',
        },
        {
          command: 'Reverse Words',
          description: 'Reverse order of words',
          usage: '\\b\\w+\\b',
          example: 'Use with array reverse',
        },
        {
          command: 'Extract Initials',
          description: 'Get first letter of each word',
          usage: '\\b\\w',
          example: '"John Doe Smith" → "JDS"',
        },
        {
          command: 'Word Count',
          description: 'Count words in text',
          usage: '\\b\\w+\\b',
          example: 'Match all words, count matches',
        },
      ],
    },
    {
      title: 'Advanced Matching',
      commands: [
        {
          command: 'Match Balanced Braces',
          description: 'Match nested braces',
          usage: '\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})*\\}',
          example: '{outer {inner} }',
        },
        {
          command: 'Match Nested Quotes',
          description: 'Handle nested quotation marks',
          usage: '"(?:[^"\\\\]|\\\\.|"(?:[^"\\\\]|\\\\.)*")*"',
          example: '"outer \\"inner\\" quote"',
        },
        {
          command: 'Match Function Calls',
          description: 'Extract function calls',
          usage: '\\b\\w+\\s*\\([^)]*\\)',
          example: 'function(arg1, arg2), method()',
        },
        {
          command: 'Match CSS Selectors',
          description: 'Find CSS selectors',
          usage: '[.#]?[\\w-]+(?:\\s*[>+~]\\s*[.#]?[\\w-]+)*',
          example: '.class #id, div > p, h1 + h2',
        },
        {
          command: 'Match SQL Keywords',
          description: 'Find SQL reserved words',
          usage: '\\b(SELECT|FROM|WHERE|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP)\\b',
          example: 'SELECT, FROM, WHERE',
        },
        {
          command: 'Match Variable Names',
          description: 'Valid variable identifier',
          usage: '^[a-zA-Z_$][a-zA-Z0-9_$]*$',
          example: 'Valid: myVar, _private, $jQuery',
        },
        {
          command: 'Match Comments (Multi-line)',
          description: 'Extract comments across lines',
          usage: '/\\*[\\s\\S]*?\\*/',
          example: '/* Multi-line\n   comment */',
        },
        {
          command: 'Match Strings with Escapes',
          description: 'Match strings handling escapes',
          usage: '["\'](?:[^"\'\\\\]|\\\\.)*["\']',
          example: '"Hello \\"World\\""',
        },
      ],
    },
    {
      title: 'Email Patterns',
      commands: [
        {
          command: 'Basic Email',
          description: 'Simple email validation',
          usage: '[\\w.-]+@[\\w.-]+\\.[\\w]{2,}',
          example: 'user@example.com',
        },
        {
          command: 'Strict Email (RFC 5322)',
          description: 'RFC-compliant email',
          usage: '^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
          example: 'Full RFC 5322 compliance',
        },
        {
          command: 'Email with Plus Addressing',
          description: 'Support + in local part',
          usage: '[\\w.+]+@[\\w.-]+\\.[\\w]{2,}',
          example: 'user+tag@example.com',
        },
        {
          command: 'Extract Email from Text',
          description: 'Find emails in text',
          usage: '\\b[\\w.+]+@[\\w.-]+\\.[\\w]{2,}\\b',
          example: 'Contact: john@example.com or jane@test.co.uk',
        },
        {
          command: 'Email Domain Only',
          description: 'Extract domain part',
          usage: '@([\\w.-]+\\.[\\w]{2,})',
          example: 'user@example.com → example.com',
        },
        {
          command: 'Email Local Part',
          description: 'Extract username part',
          usage: '^([\\w.+]+)@',
          example: 'user+tag@example.com → user+tag',
        },
      ],
    },
    {
      title: 'URL Patterns',
      commands: [
        {
          command: 'Complete URL',
          description: 'Full URL with protocol, domain, path, query',
          usage: '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/\\/=]*)$',
          example: 'https://www.example.com/path?query=1#fragment',
        },
        {
          command: 'URL Protocol',
          description: 'Extract protocol',
          usage: '^(https?):',
          example: 'https://example.com → https',
        },
        {
          command: 'URL Domain',
          description: 'Extract domain',
          usage: 'https?:\\/\\/(?:www\\.)?([\\w.-]+)',
          example: 'https://www.example.com → example.com',
        },
        {
          command: 'URL Path',
          description: 'Extract path',
          usage: 'https?:\\/\\/[^\\/]+(\\/[^?#]*)',
          example: 'https://example.com/path/to/page → /path/to/page',
        },
        {
          command: 'URL Query String',
          description: 'Extract query parameters',
          usage: '\\?([^#]+)',
          example: '?name=John&age=30 → name=John&age=30',
        },
        {
          command: 'URL Fragment',
          description: 'Extract hash fragment',
          usage: '#(.+)$',
          example: '#section1 → section1',
        },
        {
          command: 'Relative URL',
          description: 'Match relative URLs',
          usage: '^\\/[^\\s]+',
          example: '/path/to/page, /?query=1',
        },
      ],
    },
    {
      title: 'Date & Time Patterns',
      commands: [
        {
          command: 'ISO 8601 DateTime',
          description: 'Full ISO datetime',
          usage: '\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d{3})?Z?',
          example: '2024-01-15T10:30:00.000Z',
        },
        {
          command: 'Date (YYYY-MM-DD)',
          description: 'ISO date format',
          usage: '\\d{4}-\\d{2}-\\d{2}',
          example: '2024-01-15',
        },
        {
          command: 'Date (MM/DD/YYYY)',
          description: 'US date format',
          usage: '(0[1-9]|1[0-2])\\/(0[1-9]|[12][0-9]|3[01])\\/\\d{4}',
          example: '12/31/2024',
        },
        {
          command: 'Date (DD/MM/YYYY)',
          description: 'European date format',
          usage: '(0[1-9]|[12][0-9]|3[01])\\/(0[1-9]|1[0-2])\\/\\d{4}',
          example: '31/12/2024',
        },
        {
          command: 'Time (HH:MM:SS)',
          description: '24-hour time with seconds',
          usage: '([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]',
          example: '14:30:45',
        },
        {
          command: 'Time (HH:MM)',
          description: '24-hour time without seconds',
          usage: '([01]?[0-9]|2[0-3]):[0-5][0-9]',
          example: '14:30',
        },
        {
          command: 'Time (12h AM/PM)',
          description: '12-hour format',
          usage: '(0?[1-9]|1[0-2]):[0-5][0-9]\\s?(AM|PM|am|pm)',
          example: '2:30 PM, 09:15 am',
        },
        {
          command: 'Weekday Names',
          description: 'Match day names',
          usage: '\\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\\b',
          example: 'Monday, Tuesday, etc.',
        },
        {
          command: 'Month Names',
          description: 'Match month names',
          usage: '\\b(January|February|March|April|May|June|July|August|September|October|November|December)\\b',
          example: 'January, February, etc.',
        },
      ],
    },
    {
      title: 'Number Patterns',
      commands: [
        {
          command: 'Integer',
          description: 'Positive or negative integer',
          usage: '^-?\\d+$',
          example: '123, -456, 0',
        },
        {
          command: 'Positive Integer',
          description: 'Only positive numbers',
          usage: '^\\d+$',
          example: '123, 456 (not -123)',
        },
        {
          command: 'Decimal Number',
          description: 'Decimal with optional sign',
          usage: '^-?\\d+(?:\\.\\d+)?$',
          example: '123.45, -67.89, 100',
        },
        {
          command: 'Scientific Notation',
          description: 'Scientific number format',
          usage: '^[+-]?\\d+(?:\\.\\d+)?[eE][+-]?\\d+$',
          example: '1.23e-4, 5E+10',
        },
        {
          command: 'Binary Number',
          description: 'Binary digits only',
          usage: '^[01]+$',
          example: '1010, 1111',
        },
        {
          command: 'Hexadecimal',
          description: 'Hex number',
          usage: '^[0-9A-Fa-f]+$',
          example: 'FF, 1A2B, dead',
        },
        {
          command: 'Roman Numerals',
          description: 'Roman numeral pattern',
          usage: '^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$',
          example: 'I, IV, X, XL, C, CD, M',
        },
        {
          command: 'Percentage',
          description: 'Percentage value',
          usage: '^\\d+(?:\\.\\d+)?%$',
          example: '50%, 12.5%, 100%',
        },
      ],
    },
    {
      title: 'File & Path Patterns',
      commands: [
        {
          command: 'Windows Path',
          description: 'Windows file path',
          usage: '^[a-zA-Z]:\\\\(?:[^\\\\/:*?"<>|\\r\\n]+\\\\)*[^\\\\/:*?"<>|\\r\\n]*$',
          example: 'C:\\Users\\Documents\\file.txt',
        },
        {
          command: 'Unix Path',
          description: 'Unix/Linux path',
          usage: '^\\/(?:[^\\/]+\\/)*[^\\/]+$',
          example: '/home/user/documents/file.txt',
        },
        {
          command: 'Relative Path',
          description: 'Relative file path',
          usage: '^(?:\\.\\.?\\/)?[^\\/]+(?:\\/[^\\/]+)*$',
          example: './folder/file.txt, ../parent/file.txt',
        },
        {
          command: 'Filename with Extension',
          description: 'File with extension',
          usage: '^[^\\/\\\\:*?"<>|]+\\.[a-zA-Z0-9]+$',
          example: 'document.pdf, image.jpg',
        },
        {
          command: 'Image Files',
          description: 'Image file extensions',
          usage: '\\.(jpg|jpeg|png|gif|svg|webp|bmp|ico)$',
          example: 'image.jpg, photo.png',
        },
        {
          command: 'Video Files',
          description: 'Video file extensions',
          usage: '\\.(mp4|avi|mov|wmv|flv|webm|mkv)$',
          example: 'video.mp4, movie.avi',
        },
        {
          command: 'Audio Files',
          description: 'Audio file extensions',
          usage: '\\.(mp3|wav|flac|aac|ogg|wma)$',
          example: 'song.mp3, audio.wav',
        },
        {
          command: 'Document Files',
          description: 'Document file extensions',
          usage: '\\.(pdf|doc|docx|xls|xlsx|ppt|pptx|txt|rtf)$',
          example: 'document.pdf, spreadsheet.xlsx',
        },
      ],
    },
    {
      title: 'Code Patterns',
      commands: [
        {
          command: 'JavaScript Function',
          description: 'Function declaration',
          usage: '\\b(function|const|let|var)\\s+\\w+\\s*=\\s*(?:async\\s+)?\\([^)]*\\)\\s*=>',
          example: 'const func = () => {}, function myFunc() {}',
        },
        {
          command: 'CSS Property',
          description: 'CSS property-value pair',
          usage: '([\\w-]+)\\s*:\\s*([^;]+);',
          example: 'color: red; margin: 10px;',
        },
        {
          command: 'HTML Tag',
          description: 'HTML element tag',
          usage: '<([a-z][a-z0-9]*)\\b[^>]*>',
          example: '<div>, <span class="x">',
        },
        {
          command: 'HTML Closing Tag',
          description: 'Closing HTML tag',
          usage: '<\\/([a-z][a-z0-9]*)>',
          example: '</div>, </span>',
        },
        {
          command: 'CSS Class Selector',
          description: 'CSS class',
          usage: '\\.([\\w-]+)',
          example: '.container, .btn-primary',
        },
        {
          command: 'CSS ID Selector',
          description: 'CSS ID',
          usage: '#([\\w-]+)',
          example: '#header, #main-content',
        },
        {
          command: 'Import Statement',
          description: 'ES6 import',
          usage: '^import\\s+(?:\\{[^}]+\\}|\\w+)\\s+from\\s+["\']([^"\']+)["\']',
          example: 'import { Component } from "react"',
        },
        {
          command: 'Require Statement',
          description: 'CommonJS require',
          usage: 'require\\(["\']([^"\']+)["\']\\)',
          example: 'require("module"), require("./file")',
        },
      ],
    },
    {
      title: 'Security Patterns',
      commands: [
        {
          command: 'SQL Injection Detection',
          description: 'Detect potential SQL injection',
          usage: '(?i)(union|select|insert|update|delete|drop|exec|script)',
          example: 'Detect common SQL keywords',
        },
        {
          command: 'XSS Detection',
          description: 'Detect potential XSS',
          usage: '<script[^>]*>|javascript:|on\\w+\\s*=',
          example: '<script>, javascript:, onclick=',
        },
        {
          command: 'Path Traversal',
          description: 'Detect directory traversal',
          usage: '\\.\\.(?:\\/|\\\\)',
          example: '../, ..\\',
        },
        {
          command: 'Command Injection',
          description: 'Detect command injection',
          usage: '[;&|`$(){}]',
          example: '; rm -rf, | cat /etc/passwd',
        },
        {
          command: 'Sensitive Data',
          description: 'Detect potential secrets',
          usage: '(?i)(password|secret|key|token|api[_-]?key)\\s*[:=]\\s*["\']?[\\w-]+',
          example: 'password: "secret123"',
        },
      ],
    },
    {
      title: 'Log Parsing',
      commands: [
        {
          command: 'Log Timestamp',
          description: 'Extract timestamp from logs',
          usage: '\\d{4}-\\d{2}-\\d{2}\\s+\\d{2}:\\d{2}:\\d{2}',
          example: '2024-01-15 10:30:45',
        },
        {
          command: 'Log Level',
          description: 'Extract log level',
          usage: '\\b(DEBUG|INFO|WARN|ERROR|FATAL)\\b',
          example: '[INFO], ERROR:, WARN',
        },
        {
          command: 'IP in Logs',
          description: 'Extract IP from log entry',
          usage: '\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b',
          example: '192.168.1.1',
        },
        {
          command: 'HTTP Status Code',
          description: 'Extract HTTP status',
          usage: '\\b(\\d{3})\\b',
          example: '200, 404, 500',
        },
        {
          command: 'Error Message',
          description: 'Extract error messages',
          usage: '(?i)error[\\s:]+(.+)',
          example: 'ERROR: Connection failed',
        },
      ],
    },
    {
      title: 'Social Media Patterns',
      commands: [
        {
          command: 'Twitter Handle',
          description: 'Twitter username',
          usage: '@[\\w]{1,15}',
          example: '@username, @john_doe',
        },
        {
          command: 'Instagram Handle',
          description: 'Instagram username',
          usage: '@[\\w.]+',
          example: '@user.name, @john_doe',
        },
        {
          command: 'Hashtag',
          description: 'Social media hashtag',
          usage: '#[\\w]+',
          example: '#coding, #webdev',
        },
        {
          command: 'Mention',
          description: 'Social media mention',
          usage: '@[\\w.]+',
          example: '@user, @john.doe',
        },
        {
          command: 'YouTube Video ID',
          description: 'YouTube video identifier',
          usage: '[\\w-]{11}',
          example: 'dQw4w9WgXcQ',
        },
        {
          command: 'YouTube URL',
          description: 'YouTube video URL',
          usage: '(?:youtube\\.com\\/watch\\?v=|youtu\\.be\\/)([\\w-]{11})',
          example: 'youtube.com/watch?v=dQw4w9WgXcQ',
        },
      ],
    },
    {
      title: 'International Patterns',
      commands: [
        {
          command: 'Chinese Characters',
          description: 'Match Chinese characters',
          usage: '[\\u4e00-\\u9fff]+',
          example: '你好, 世界',
        },
        {
          command: 'Japanese Characters',
          description: 'Match Japanese (Hiragana, Katakana, Kanji)',
          usage: '[\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FAF]+',
          example: 'こんにちは, カタカナ, 漢字',
        },
        {
          command: 'Arabic Characters',
          description: 'Match Arabic script',
          usage: '[\\u0600-\\u06FF]+',
          example: 'مرحبا',
        },
        {
          command: 'Cyrillic Characters',
          description: 'Match Cyrillic script',
          usage: '[\\u0400-\\u04FF]+',
          example: 'Привет, мир',
        },
        {
          command: 'Emoji',
          description: 'Match emoji characters',
          usage: '[\\u{1F600}-\\u{1F64F}\\u{1F300}-\\u{1F5FF}\\u{1F680}-\\u{1F6FF}\\u{2600}-\\u{26FF}\\u{2700}-\\u{27BF}]',
          example: '😀, 🎉, ❤️',
        },
      ],
    },
    {
      title: 'Practical Examples',
      commands: [
        {
          command: 'Validate Phone (US)',
          description: 'US phone number validation',
          usage: '^(?:\\+?1[-.]?)?\\(?([0-9]{3})\\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$',
          example: '(123) 456-7890, 123-456-7890, +1-123-456-7890',
        },
        {
          command: 'Validate ZIP Code',
          description: 'US ZIP code',
          usage: '^\\d{5}(-\\d{4})?$',
          example: '12345, 12345-6789',
        },
        {
          command: 'Validate SSN',
          description: 'US Social Security Number',
          usage: '^\\d{3}-\\d{2}-\\d{4}$',
          example: '123-45-6789',
        },
        {
          command: 'Extract Price',
          description: 'Extract price from text',
          usage: '\\$\\d+(?:\\.\\d{2})?',
          example: '$19.99, $100',
        },
        {
          command: 'Find Duplicate Lines',
          description: 'Find repeated lines',
          usage: '^(.*)$\\s+?^\\1$',
          example: 'Finds consecutive duplicate lines',
        },
        {
          command: 'Match Indented Block',
          description: 'Match indented code block',
          usage: '^(?:    |\\t)+.*$',
          example: 'Matches lines with 4 spaces or tab',
        },
        {
          command: 'Extract Markdown Links',
          description: 'Get markdown link text and URL',
          usage: '\\[([^\\]]+)\\]\\(([^)]+)\\)',
          example: '[text](url) → text, url',
        },
        {
          command: 'Extract Markdown Headers',
          description: 'Get markdown header level and text',
          usage: '^(#{1,6})\\s+(.+)$',
          example: '# Header, ## Subheader',
        },
      ],
    },
  ],
};
