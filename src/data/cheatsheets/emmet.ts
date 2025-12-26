import { Zap } from 'lucide-react';

export const emmetCheatsheet = {
  id: 'emmet',
  name: 'Emmet',
  description: 'Master Emmet abbreviations from basics to expert features (2024+)',
  icon: Zap,
  colorTheme: 'green' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Emmet',
      commands: [
        {
          command: 'What is Emmet',
          description: 'Understanding Emmet basics and purpose',
          usage: 'HTML/CSS abbreviation expander for faster coding',
          example: '# Emmet is a plugin for text editors\n# Expands abbreviations into HTML/CSS code\n# Built into VS Code, Sublime Text, WebStorm\n# Available as plugin for most editors\n\n# Basic usage:\n# Type abbreviation + Tab/Enter\n# Example: html:5 + Tab = full HTML5 document',
        },
        {
          command: 'Installing Emmet',
          description: 'Install and configure Emmet in different editors',
          usage: 'Editor-specific installation instructions',
          example: '# VS Code: Built-in, enabled by default\n# Sublime Text: Package Control → Emmet\n# WebStorm: Built-in, enabled by default\n# Atom: emmet package\n# Vim: emmet-vim plugin\n\n# Verify installation:\n# Type "!" + Tab in HTML file\n# Should expand to HTML5 boilerplate',
        },
        {
          command: 'Basic Expansion',
          description: 'Learn basic Emmet expansion',
          usage: 'Type abbreviation and press Tab/Enter',
          example: '# Basic element expansion:\ndiv + Tab → <div></div>\np + Tab → <p></p>\na + Tab → <a href=""></a>\nimg + Tab → <img src="" alt="">\n\n# HTML5 boilerplate:\n! + Tab → Complete HTML5 document\nhtml:5 + Tab → Complete HTML5 document',
        },
      ],
    },
    {
      title: 'Basic Elements and Structure',
      commands: [
        {
          command: 'HTML Elements',
          description: 'Create basic HTML elements',
          usage: 'Element name + Tab',
          example: '# Common elements:\nheader → <header></header>\nnav → <nav></nav>\nmain → <main></main>\nsection → <section></section>\narticle → <article></article>\naside → <aside></aside>\nfooter → <footer></footer>\n\n# Text elements:\nh1 → <h1></h1>\np → <p></p>\nspan → <span></span>\nstrong → <strong></strong>\nem → <em></em>',
        },
        {
          command: 'Self-Closing Elements',
          description: 'Elements that don\'t need closing tags',
          usage: 'Self-closing element names',
          example: '# Self-closing elements:\nimg → <img src="" alt="">\ninput → <input type="">\nbr → <br>\nhr → <hr>\nlink → <link rel="stylesheet" href="">\nmeta → <meta charset="">\n\n# Void elements automatically get proper attributes',
        },
        {
          command: 'Text Content',
          description: 'Add text content to elements',
          usage: 'element{text}',
          example: '# Text content:\np{Hello World} → <p>Hello World</p>\nh1{Title} → <h1>Title</h1>\na{Click me} → <a href="">Click me</a>\n\n# Multiple words:\ndiv{This is a test} → <div>This is a test</div>',
        },
      ],
    },
    {
      title: 'Basic Attributes',
      commands: [
        {
          command: 'ID Attribute',
          description: 'Add ID to elements',
          usage: 'element#id',
          example: '# ID attribute:\ndiv#header → <div id="header"></div>\nnav#main-nav → <nav id="main-nav"></nav>\nsection#content → <section id="content"></div>\n\n# Multiple elements with ID:\nheader#top + main#center + footer#bottom',
        },
        {
          command: 'Class Attribute',
          description: 'Add class to elements',
          usage: 'element.class',
          example: '# Single class:\ndiv.container → <div class="container"></div>\np.text-center → <p class="text-center"></p>\n\n# Multiple classes:\ndiv.container.fluid → <div class="container fluid"></div>\nbutton.btn.btn-primary → <button class="btn btn-primary"></button>',
        },
        {
          command: 'Combined ID and Class',
          description: 'Use both ID and classes',
          usage: 'element#id.class1.class2',
          example: '# ID and classes:\ndiv#main.container → <div id="main" class="container"></div>\nnav#navbar.navbar-dark → <nav id="navbar" class="navbar-dark"></nav>\n\n# Multiple classes with ID:\nsection#content.padded.shadowed → <section id="content" class="padded shadowed"></section>',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Nesting and Sibling Operators',
      commands: [
        {
          command: 'Child Operator >',
          description: 'Nest elements inside parent',
          usage: 'parent>child>grandchild',
          example: '# Basic nesting:\nul>li → <ul><li></li></ul>\ndiv>p>span → <div><p><span></span></p></div>\n\n# Deep nesting:\nnav>ul>li>a → <nav><ul><li><a href=""></a></li></ul></nav>\n\n# Multiple children:\ndiv>h1+p → <div><h1></h1><p></p></div>',
        },
        {
          command: 'Sibling Operator +',
          description: 'Create elements at same level',
          usage: 'element1+element2+element3',
          example: '# Sibling elements:\nh1+h2+h3 → <h1></h1><h2></h2><h3></h3>\n\n# Mixed with nesting:\ndiv>h1+div>p → <div><h1></h1><div><p></p></div></div>\n\n# List items:\nul>li.item1+li.item2+li.item3',
        },
        {
          command: 'Climb-up Operator ^',
          description: 'Move up one level in hierarchy',
          usage: 'parent>child^sibling',
          example: '# Climb up:\ndiv>p>span+em → <div><p><span></span><em></em></p></div>\ndiv>p>span^div → <div><p><span></span></p><div></div></div>\n\n# Multiple climb-ups:\ndiv>p>span^^div → <div><p><span></span></p></div><div></div>',
        },
        {
          command: 'Multiplication Operator *',
          description: 'Create multiple elements',
          usage: 'element*n',
          example: '# Multiple elements:\nli*5 → <li></li><li></li><li></li><li></li><li></li>\n\n# With classes:\ndiv.item*3 → <div class="item"></div><div class="item"></div><div class="item"></div>\n\n# Combined with nesting:\nul>li.item*5 → <ul><li class="item"></li><li class="item"></li><li class="item"></li><li class="item"></li><li class="item"></li></ul>',
        },
      ],
    },
    {
      title: 'Grouping and Parentheses',
      commands: [
        {
          command: 'Grouping ()',
          description: 'Group elements for complex operations',
          usage: '(group)*n or parent>(group)',
          example: '# Basic grouping:\ndiv>(h1+p)*3 → <div><h1></h1><p></p><h1></h1><p></p><h1></h1><p></p></div>\n\n# Complex grouping:\n(div>h1+p)+(section>h2+p)*2\n\n# With multiplication:\nul>(li>a)*5 → <ul><li><a href=""></a></li><li><a href=""></a></li><li><a href=""></a></li><li><a href=""></a></li><li><a href=""></a></li></ul>',
        },
        {
          command: 'Advanced Grouping',
          description: 'Complex nested structures with grouping',
          usage: 'Complex parentheses combinations',
          example: '# Card structure:\ndiv.card>(div.header>h3)+(div.body>p*2)+(div.footer>button)\n\n# Navigation:\nnav>(ul>li*5>a)+(div.search>input+button)\n\n# Form with groups:\nform>(div.form-group>label+input)*3+div.submit>button',
        },
      ],
    },
    {
      title: 'Attributes and Properties',
      commands: [
        {
          command: 'Custom Attributes',
          description: 'Add any HTML attribute',
          usage: 'element[attr="value"]',
          example: '# Single attribute:\na[href="https://example.com"] → <a href="https://example.com"></a>\ninput[type="text"] → <input type="text">\n\n# Multiple attributes:\ninput[type="email" placeholder="Enter email" required]\n→ <input type="email" placeholder="Enter email" required>\n\n# Data attributes:\ndiv[data-id="123" data-role="user"]',
        },
        {
          command: 'Boolean Attributes',
          description: 'Add boolean attributes without values',
          usage: 'element[attr]',
          example: '# Boolean attributes:\ninput[checked] → <input type="" checked>\ninput[disabled] → <input type="" disabled>\ninput[required] → <input type="" required>\n\n# Multiple boolean:\ninput[checked disabled required]',
        },
        {
          command: 'Attribute Values with Variables',
          description: 'Use variables in attribute values',
          usage: 'element[attr="$value"]',
          example: '# Dollar sign variables:\nimg[src="image$.jpg"]*3\n→ <img src="image1.jpg"><img src="image2.jpg"><img src="image3.jpg">\n\n# Multiple variables:\ndiv[data-id="item$" data-name="name$"]*3',
        },
      ],
    },
    {
      title: 'Numbering and Counting',
      commands: [
        {
          command: 'Item Numbering $',
          description: 'Auto-number elements',
          usage: 'element$*n',
          example: '# Basic numbering:\nli.item$*5 → <li class="item1"></li><li class="item2"></li>...\n\n# Multiple $ signs for padding:\nli.item$$*5 → <li class="item01"></li><li class="item02"></li>...\n\n# In attributes:\ninput[name="field$" id="field$"]*3',
        },
        {
          command: 'Custom Starting Number',
          description: 'Start numbering from specific number',
          usage: 'element@N*n',
          example: '# Start from 5:\nli.item$@5*3 → <li class="item5"></li><li class="item6"></li><li class="item7"></li>\n\n# With padding:\nli.item$$@05*3 → <li class="item05"></li><li class="item06"></li><li class="item07"></li>\n\n# Reverse numbering:\nli.item$@-*3 → <li class="item3"></li><li class="item2"></li><li class="item1"></li>',
        },
        {
          command: 'Advanced Numbering',
          description: 'Complex numbering patterns',
          usage: 'element$@N* with text',
          example: '# Text with numbering:\nh${Title $}*3 → <h1>Title 1</h1><h1>Title 2</h1><h1>Title 3</h1>\n\n# Multiple numbering:\ndiv${Section $}>p${Paragraph $}*2*2',
        },
      ],
    },
    {
      title: 'Advanced Nesting Patterns',
      commands: [
        {
          command: 'Complex HTML Structures',
          description: 'Create complete page layouts',
          usage: 'Multi-level nesting with grouping',
          example: '# Bootstrap card:\ndiv.card>(div.card-header>h3.card-title)+(div.card-body>p.card-text*2)+(div.card-footer>button.btn.btn-primary)\n\n# HTML5 semantic layout:\nheader>nav>ul>li*5>a\n+main>section>article>h1+p*3\n+aside>div.widget*3>h4+p\n+footer>div>nav>ul>li*4>a',
        },
        {
          command: 'Table Structures',
          description: 'Create complex table layouts',
          usage: 'Table-specific abbreviations',
          example: '# Basic table:\ntable>thead>tr>th*3+tbody>tr*4>td*3\n\n# Table with caption:\ntable>(caption>Table Title)+(thead>tr>th*3)+(tbody>tr*4>td*3)+(tfoot>tr>td[colspan="3"])',
        },
        {
          command: 'Form Structures',
          description: 'Create complete forms',
          usage: 'Form elements with labels',
          example: '# Contact form:\nform>(div.form-group>label+input[type="text"])*3+div.form-group>label+textarea+button[type="submit"]\n\n# Login form:\nform>(div.form-group>label[for="email"]+input#email[type="email"])+(div.form-group>label[for="password"]+input#password[type="password"])+button.btn',
        },
      ],
    },
    {
      title: 'Emmet Filters',
      commands: [
        {
          command: 'HTML Filters',
          description: 'Modify output with filters',
          usage: 'abbreviation|filter',
          example: '# HTML comment filter:\ndiv>p|c → <!-- <div><p></p></div> -->\n\n# HTML escape filter:\ndiv{<script>alert("xss")</script>}|e\n→ <div>&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;</div>\n\n# Single line filter:\ndiv>p|s → <div><p></p></div>',
        },
        {
          command: 'CSS Filters',
          description: 'CSS-specific filters',
          usage: 'CSS abbreviation|filter',
          example: '# CSS filter:\nbd10:s|0 → border: 10px solid;\n\n# Expand filter:\npos:a|e → position: absolute;',
        },
        {
          command: 'Numbering Filters',
          description: 'Numbering with filters',
          usage: 'abbreviation|filter',
          example: '# Numbering with filter:\nli.item$*5|c → <!-- <li class="item1"></li> -->...',
        },
      ],
    },
    {
      title: 'CSS Abbreviations',
      commands: [
        {
          command: 'CSS Properties',
          description: 'CSS property abbreviations',
          usage: 'Property abbreviation',
          example: '# Common properties:\nm → margin:\np → padding:\nbg → background:\nc → color:\n\n# With values:\nm10 → margin: 10px;\np10-20 → padding: 10px 20px;\nc#f00 → color: #f00;',
        },
        {
          command: 'CSS Values',
          description: 'CSS value abbreviations',
          usage: 'Property with value abbreviations',
          example: '# Units:\np10 → padding: 10px;\nm1e → margin: 1em;\nw100% → width: 100%;\n\n# Colors:\nc#f00 → color: #f00;\nc#f0f0 → color: #f0f0f0;\nc#fff → color: #ffffff;',
        },
        {
          command: 'CSS Vendor Prefixes',
          description: 'Auto-vendor prefixing',
          usage: '-property: value',
          example: '# Vendor prefixes:\n-bdrs10 → -webkit-border-radius: 10px;\n            -moz-border-radius: 10px;\n            -ms-border-radius: 10px;\n            -o-border-radius: 10px;\n            border-radius: 10px;\n\n# -transform: rotate(45deg)',
        },
        {
          command: 'CSS Complex Properties',
          description: 'Complex CSS abbreviations',
          usage: 'Multiple CSS properties',
          example: '# Multiple properties:\nd10:m10:p5 → display: block; margin: 10px; padding: 5px;\n\n# CSS shortcuts:\nbd10:s#f00 → border: 10px solid #f00;\nbg:url(img.jpg) no-repeat 0 0',
        },
      ],
    },
    {
      title: 'Custom Snippets and Configurations',
      commands: [
        {
          command: 'Custom Snippets',
          description: 'Create your own Emmet snippets',
          usage: 'Configure in editor settings',
          example: '# VS Code settings.json:\n{\n  "emmet.includeLanguages": {\n    "javascript": "javascriptreact"\n  },\n  "emmet.extensionsPath": ["./snippets"]\n}\n\n# Custom snippets.json:\n{\n  "html": {\n    "abbreviations": {\n      "jq": "jQuery(function($){\\n\\t${0}\\n});",\n      "log": "console.log(${1});"\n    }\n  }\n}',
        },
        {
          command: 'Syntax Profiles',
          description: 'Configure syntax-specific behavior',
          usage: 'Syntax profiles for different output',
          example: '# HTML profiles:\n# html: Self-closing tags for void elements\n# xhtml: All tags closed\n# xml: XML-style output\n\n# Configure in settings:\n{\n  "emmet.syntaxProfiles": {\n    "html": "html",\n    "xhtml": "xhtml",\n    "xml": "xml"\n  }\n}',
        },
        {
          command: 'Variables',
          description: 'Use variables in snippets',
          usage: 'Variable substitution',
          example: '# Built-in variables:\n${lang} → Document language\n${charset} → Document charset\n\n# Custom variables:\n# In snippets:\n"init": "/*! ${project_name} v${version} */"',
        },
      ],
    },
    {
      title: 'Advanced Features and Techniques',
      commands: [
        {
          command: 'Lorem Ipsum Generator',
          description: 'Generate placeholder text',
          usage: 'loremN or lipsumN',
          example: '# Lorem ipsum:\nlorem → 30 words of lorem ipsum\nlorem10 → 10 words\nlorem5*3 → 3 paragraphs of 5 words each\n\n# With elements:\np>lorem5 → <p>Lorem ipsum dolor sit amet.</p>\n\n# Mixed with other content:\ndiv>h1{Title}+p>lorem20',
        },
        {
          command: 'Wrap with Abbreviation',
          description: 'Wrap existing content with Emmet',
          usage: 'Select text + Wrap with Abbreviation',
          example: '# Wrap selected text:\n# Select "Hello World"\n# Use abbreviation: p.highlight\n# Result: <p class="highlight">Hello World</p>\n\n# Wrap multiple lines:\n# Select multiple items\n# Use: ul>li*',
        },
        {
          command: 'Balance and Select',
          description: 'Navigate and select matching tags',
          usage: 'Editor commands',
          example: '# VS Code shortcuts:\n# Ctrl+Shift+A (Windows/Linux)\n# Cmd+Shift+A (Mac)\n\n# Balance:\n# Select matching opening/closing tags\n\n# Expand/Shrink selection:\n# Select inner/outer content',
        },
        {
          command: 'Update Tag',
          description: 'Change HTML tags while preserving content',
          usage: 'Update Tag command',
          example: '# Change tag:\n# Select: <div>Content</div>\n# Use Update Tag + "section"\n# Result: <section>Content</section>\n\n# Preserves attributes and content',
        },
      ],
    },
    {
      title: 'Editor Integration and Shortcuts',
      commands: [
        {
          command: 'VS Code Integration',
          description: 'Emmet in Visual Studio Code',
          usage: 'VS Code specific features',
          example: '# VS Code shortcuts:\n# Tab/Enter: Expand abbreviation\n# Ctrl+Space: Show suggestions\n# Ctrl+Shift+A: Balance tags\n# Ctrl+Shift+G: Wrap with abbreviation\n\n# Settings:\n"emmet.triggerExpansionOnTab": true,\n"emmet.showAbbreviationSuggestions": true,\n"emmet.showExpandedAbbreviation": "always"',
        },
        {
          command: 'Sublime Text Integration',
          description: 'Emmet in Sublime Text',
          usage: 'Sublime Text specific features',
          example: '# Sublime Text shortcuts:\n# Tab: Expand abbreviation\n# Ctrl+E: Evaluate math expression\n# Ctrl+Shift+A: Balance tags\n# Ctrl+Alt+Enter: Wrap with abbreviation\n\n# Preferences:\n{\n  "emmet": {\n    "preferences": {\n      "style_sheet": "css"\n    }\n  }\n}',
        },
        {
          command: 'WebStorm Integration',
          description: 'Emmet in JetBrains IDEs',
          usage: 'WebStorm/PhpStorm features',
          example: '# WebStorm shortcuts:\n# Tab: Expand abbreviation\n# Ctrl+J: Show live templates\n# Ctrl+Alt+T: Surround with\n\n# Settings:\n# Editor → Code Style → Emmet\n# Configure syntax profiles and filters',
        },
      ],
    },
    {
      title: 'Performance and Best Practices',
      commands: [
        {
          command: 'Performance Tips',
          description: 'Optimize Emmet usage',
          usage: 'Best practices for speed',
          example: '# Use meaningful abbreviations:\nnav.main>ul>li*5>a.nav-link\n\n# Group related elements:\nform>(div.form-group>label+input)*3+button\n\n# Use numbering for lists:\nul>li.item$*10\n\n# Combine with text:\nh1{Page $}+p>lorem20',
        },
        {
          command: 'Common Patterns',
          description: 'Reusable Emmet patterns',
          usage: 'Common web development patterns',
          example: '# Bootstrap grid:\ndiv.container>div.row>div.col-md-4*3>h3+p\n\n# Navigation:\nnav.navbar>div.container>a.navbar-brand+ul.nav>li.nav-item*3>a.nav-link\n\n# Card layout:\ndiv.card>(div.card-body>h4.card-title+p.card-text+button.btn)*3',
        },
        {
          command: 'Debugging Emmet',
          description: 'Troubleshoot common issues',
          usage: 'Debug Emmet problems',
          example: '# Common issues:\n# 1. Abbreviation not expanding\n#   - Check file type (HTML/CSS)\n#   - Check Emmet is enabled\n#   - Check tab settings\n\n# 2. Unexpected output\n#   - Check syntax profile\n#   - Check for conflicting snippets\n\n# 3. Custom snippets not working\n#   - Check file path and format\n#   - Restart editor after changes',
        },
      ],
    },
    {
      title: 'Modern Emmet Features (2024+)',
      commands: [
        {
          command: 'ES6+ Class Generation',
          description: 'Generate JavaScript class structures',
          usage: 'ES6 class abbreviations',
          example: '# JavaScript class:\nclass:MyClass>constructor+method1+method2\n→ class MyClass {\n    constructor() {}\n    method1() {}\n    method2() {}\n  }\n\n# React component:\nreact:component>constructor+render+propTypes',
        },
        {
          command: 'Vue.js Components',
          description: 'Vue.js component generation',
          usage: 'Vue component abbreviations',
          example: '# Vue component:\nvue:component>template+script+style\n→ <template></template>\n  <script></script>\n  <style></style>\n\n# Vue with TypeScript:\nvue:ts-component>template+script[lang="ts"]+style',
        },
        {
          command: 'Tailwind CSS Integration',
          description: 'Tailwind CSS class generation',
          usage: 'Tailwind-specific abbreviations',
          example: '# Tailwind utilities:\ntw:flex.tw:items-center.tw:justify-between\n\n# Tailwind component:\ndiv.tw:flex.tw:flex-col>div.tw:flex-1+div.tw:flex-shrink-0',
        },
        {
          command: 'AI-Powered Suggestions',
          description: 'Modern AI integration features',
          usage: 'AI-enhanced Emmet',
          example: '# AI suggestions (experimental):\n# Context-aware abbreviations\n# Learning from your patterns\n# Smart completion\n\n# Available in:\n# GitHub Copilot with Emmet\n# VS Code IntelliCode + Emmet',
        },
      ],
    },
    {
      title: 'Real-World Examples',
      commands: [
        {
          command: 'Complete HTML5 Page',
          description: 'Generate full HTML5 structure',
          usage: 'Complete page layout',
          example: '# Full page:\nhtml:5>(header>nav>ul>li*5>a)+(main>section>article>h1+p*3)+(aside>div.widget*3>h4+p)+footer\n\n# With semantic structure:\nhtml:5>(header>h1{Site Title}+nav>ul>li*4>a)+main>(article>header>h2+time+section>p*3)+aside>section>h3+ul>li*5+a+footer',
        },
        {
          command: 'Bootstrap Components',
          description: 'Generate Bootstrap components',
          usage: 'Bootstrap-specific patterns',
          example: '# Bootstrap navbar:\nnav.navbar.navbar-expand-lg>div.container>a.navbar-brand+button.navbar-toggler+div.collapse.navbar-collapse>ul.navbar-nav>li.nav-item*4>a.nav-link\n\n# Bootstrap modal:\ndiv.modal.fade>div.modal-dialog>div.modal-content>div.modal-header>h5.modal-title+button.btn-close+div.modal-body+p+div.modal-footer>button.btn*2',
        },
        {
          command: 'React Component Patterns',
          description: 'React component generation',
          usage: 'React-specific patterns',
          example: '# Functional component:\nrfc→ React functional component template\n\n# Component with hooks:\nrfch→ Component with useState\n\n# Component with props:\nrfcp→ Component with PropTypes',
        },
        {
          command: 'CSS Grid Layouts',
          description: 'Generate CSS Grid structures',
          usage: 'CSS Grid abbreviations',
          example: '# CSS Grid:\ndisplay:g>grid-template-columns:repeat(3,1fr)>gap:1rem\n\n# Grid areas:\ngrid-template-areas:"header header header" "sidebar main main" "footer footer footer"',
        },
      ],
    },
  ],
};
