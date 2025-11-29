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
  ],
};
