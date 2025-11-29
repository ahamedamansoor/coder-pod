import { Zap } from 'lucide-react';

export const emmetCheatsheet = {
  id: 'emmet',
  name: 'Emmet',
  description: 'Emmet HTML & CSS abbreviations',
  icon: Zap,
  colorTheme: 'cyan' as const,
  sections: [
    {
      title: 'HTML Elements',
      commands: [
        {
          command: 'div',
          description: 'Create div element',
          usage: 'div',
          example: 'div → <div></div>',
        },
        {
          command: 'p',
          description: 'Paragraph',
          usage: 'p',
          example: 'p → <p></p>',
        },
        {
          command: 'a',
          description: 'Anchor tag',
          usage: 'a',
          example: 'a → <a href=""></a>',
        },
        {
          command: 'img',
          description: 'Image tag',
          usage: 'img',
          example: 'img → <img src="" alt="">',
        },
        {
          command: 'ul>li',
          description: 'Unordered list with item',
          usage: 'ul>li',
          example: 'ul>li → <ul><li></li></ul>',
        },
        {
          command: 'table>tr>td',
          description: 'Table structure',
          usage: 'table>tr>td',
          example: 'table>tr>td → Full table structure',
        },
      ],
    },
    {
      title: 'ID & Classes',
      commands: [
        {
          command: '#id',
          description: 'Element with ID',
          usage: 'div#header',
          example: 'div#header → <div id="header"></div>',
        },
        {
          command: '.class',
          description: 'Element with class',
          usage: 'div.container',
          example: 'div.container → <div class="container"></div>',
        },
        {
          command: '.class1.class2',
          description: 'Multiple classes',
          usage: 'div.class1.class2',
          example: 'div.class1.class2 → <div class="class1 class2"></div>',
        },
        {
          command: '#id.class',
          description: 'ID and class',
          usage: 'div#main.container',
          example: '<div id="main" class="container"></div>',
        },
      ],
    },
    {
      title: 'Nesting',
      commands: [
        {
          command: '>',
          description: 'Child element',
          usage: 'div>ul>li',
          example: 'div>ul>li → Nested structure',
        },
        {
          command: '+',
          description: 'Sibling element',
          usage: 'div+p',
          example: 'div+p → <div></div><p></p>',
        },
        {
          command: '^',
          description: 'Climb up',
          usage: 'div>p^div',
          example: 'Move up one level in nesting',
        },
        {
          command: '()',
          description: 'Grouping',
          usage: '(header>nav)+main',
          example: 'Group elements together',
        },
      ],
    },
    {
      title: 'Multiplication',
      commands: [
        {
          command: '*n',
          description: 'Multiply element',
          usage: 'li*5',
          example: 'li*5 → Creates 5 <li> elements',
        },
        {
          command: 'ul>li*3',
          description: 'Multiple children',
          usage: 'ul>li*3',
          example: 'ul>li*3 → <ul> with 3 <li>',
        },
        {
          command: 'ul>li.item$*3',
          description: 'Numbered classes',
          usage: 'li.item$*3',
          example: 'item1, item2, item3',
        },
      ],
    },
    {
      title: 'Attributes',
      commands: [
        {
          command: '[attr]',
          description: 'Custom attributes',
          usage: 'a[href="#"]',
          example: 'a[href="#"] → <a href="#"></a>',
        },
        {
          command: '[attr=value]',
          description: 'Attribute with value',
          usage: 'input[type=text]',
          example: 'input[type=text] → <input type="text">',
        },
        {
          command: '[attr1 attr2]',
          description: 'Multiple attributes',
          usage: 'img[src alt]',
          example: 'img[src="" alt=""]',
        },
      ],
    },
    {
      title: 'Text Content',
      commands: [
        {
          command: '{text}',
          description: 'Add text content',
          usage: 'p{Hello World}',
          example: 'p{Hello} → <p>Hello</p>',
        },
        {
          command: 'a{Click}',
          description: 'Text in element',
          usage: 'a{Click here}',
          example: 'a{Click here} → <a href="">Click here</a>',
        },
        {
          command: 'li{Item $}*3',
          description: 'Text with number',
          usage: 'li{Item $}*3',
          example: 'Item 1, Item 2, Item 3',
        },
      ],
    },
    {
      title: 'Numbering',
      commands: [
        {
          command: '$',
          description: 'Item number',
          usage: 'li.item$*3',
          example: 'item1, item2, item3',
        },
        {
          command: '$$',
          description: 'Zero-padded number',
          usage: 'li.item$$*3',
          example: 'item01, item02, item03',
        },
        {
          command: '$@-',
          description: 'Reverse numbering',
          usage: 'li.item$@-*3',
          example: 'item3, item2, item1',
        },
        {
          command: '$@3',
          description: 'Start from 3',
          usage: 'li.item$@3*3',
          example: 'item3, item4, item5',
        },
      ],
    },
    {
      title: 'Common HTML Snippets',
      commands: [
        {
          command: '!',
          description: 'HTML5 boilerplate',
          usage: '!',
          example: '! → Full HTML5 template',
        },
        {
          command: 'link',
          description: 'CSS link tag',
          usage: 'link',
          example: 'link → <link rel="stylesheet" href="">',
        },
        {
          command: 'script:src',
          description: 'Script with src',
          usage: 'script:src',
          example: 'script:src → <script src=""></script>',
        },
        {
          command: 'form:post',
          description: 'POST form',
          usage: 'form:post',
          example: '<form method="post"></form>',
        },
        {
          command: 'input:text',
          description: 'Text input',
          usage: 'input:text',
          example: '<input type="text">',
        },
        {
          command: 'btn',
          description: 'Button',
          usage: 'btn',
          example: 'btn → <button></button>',
        },
      ],
    },
    {
      title: 'CSS Abbreviations',
      commands: [
        {
          command: 'w100',
          description: 'Width',
          usage: 'w100',
          example: 'w100 → width: 100px;',
        },
        {
          command: 'm10',
          description: 'Margin',
          usage: 'm10',
          example: 'm10 → margin: 10px;\nm10-20 → margin: 10px 20px;',
        },
        {
          command: 'p10',
          description: 'Padding',
          usage: 'p10',
          example: 'p10 → padding: 10px;',
        },
        {
          command: 'd:f',
          description: 'Display flex',
          usage: 'd:f',
          example: 'd:f → display: flex;',
        },
        {
          command: 'fz16',
          description: 'Font size',
          usage: 'fz16',
          example: 'fz16 → font-size: 16px;',
        },
        {
          command: 'c#fff',
          description: 'Color',
          usage: 'c#fff',
          example: 'c#fff → color: #fff;',
        },
        {
          command: 'bg#000',
          description: 'Background color',
          usage: 'bg#000',
          example: 'bg#000 → background: #000;',
        },
        {
          command: 'bd1',
          description: 'Border',
          usage: 'bd1',
          example: 'bd1 → border: 1px solid;',
        },
      ],
    },
    {
      title: 'CSS Flexbox',
      commands: [
        {
          command: 'd:f',
          description: 'Display flex',
          usage: 'd:f',
          example: 'd:f → display: flex;',
        },
        {
          command: 'jc:c',
          description: 'Justify content center',
          usage: 'jc:c',
          example: 'jc:c → justify-content: center;',
        },
        {
          command: 'ai:c',
          description: 'Align items center',
          usage: 'ai:c',
          example: 'ai:c → align-items: center;',
        },
        {
          command: 'fd:c',
          description: 'Flex direction column',
          usage: 'fd:c',
          example: 'fd:c → flex-direction: column;',
        },
      ],
    },
    {
      title: 'Complex Examples',
      commands: [
        {
          command: 'nav>ul>li*5>a',
          description: 'Navigation menu',
          usage: 'nav>ul>li*5>a',
          example: 'Creates full nav structure',
        },
        {
          command: 'div.container>header+main+footer',
          description: 'Page layout',
          usage: 'div.container>header+main+footer',
          example: 'Basic page structure',
        },
        {
          command: 'ul.list>li.item$*3',
          description: 'Styled list',
          usage: 'ul.list>li.item$*3',
          example: 'List with numbered classes',
        },
        {
          command: 'table>(thead>tr>th*3)+(tbody>tr*3>td*3)',
          description: 'Complete table',
          usage: 'table>(thead>tr>th*3)+(tbody>tr*3>td*3)',
          example: 'Table with header and body',
        },
      ],
    },
  ],
};
