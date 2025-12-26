import { GitBranch } from 'lucide-react';

export const mermaidCheatsheet = {
  id: 'mermaid',
  name: 'Mermaid',
  description: 'Master Mermaid diagrams from basics to expert features (2024+)',
  icon: GitBranch,
  colorTheme: 'purple' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Mermaid',
      commands: [
        {
          command: 'What is Mermaid',
          description: 'Understanding Mermaid basics and purpose',
          usage: 'Diagramming and charting tool for creating visualizations',
          example: '# Mermaid is a JavaScript-based diagramming tool\n# Creates diagrams from simple text-based syntax\n# Integrates with Markdown, documentation tools\n# Supports multiple diagram types\n\n# Basic syntax:\n```mermaid\ngraph TD\n    A[Start] --> B[Process]\n    B --> C[End]\n```',
        },
        {
          command: 'Installing Mermaid',
          description: 'Set up Mermaid in different environments',
          usage: 'Installation methods for various platforms',
          example: '# VS Code: Mermaid Preview extension\n# GitHub: Built-in support in Markdown\n# GitLab: Built-in Mermaid support\n# Notion: Mermaid diagrams\n# Web: Include via CDN:\n\n<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>\n\n# npm:\nnpm install mermaid\n\n# Initialize:\nmermaid.initialize({ startOnLoad: true });',
        },
        {
          command: 'Basic Diagram Structure',
          description: 'Learn basic Mermaid diagram syntax',
          usage: 'Diagram type and node connections',
          example: '# Basic flowchart:\n```mermaid\ngraph TD\n    A --> B\n    B --> C\n```\n\n# With node text:\n```mermaid\ngraph LR\n    A[Start] --> B[Process]\n    B --> C[End]\n```',
        },
      ],
    },
    {
      title: 'Flowchart Basics',
      commands: [
        {
          command: 'Graph Directions',
          description: 'Control diagram flow direction',
          usage: 'graph TD, LR, TB, BT, RL',
          example: '# Top to Bottom (default):\ngraph TD\n    A --> B\n\n# Left to Right:\ngraph LR\n    A --> B\n\n# Bottom to Top:\ngraph BT\n    A --> B\n\n# Right to Left:\ngraph RL\n    A --> B',
        },
        {
          command: 'Basic Nodes',
          description: 'Create different types of nodes',
          usage: 'Node text and shapes',
          example: '# Rectangle (default):\n    A[Default Text]\n\n# Round edges:\n    B(Rounded Edges)\n\n# Stadium shape:\n    C(Stadium Shape)\n\n# Circle:\n    D((Circle))\n\n# Asymmetric shape:\n    E>Asymmetric]\n\n# Rhombus:\n    F{Rhombus}\n\n# Hexagon:\n    G{{Hexagon}}\n\n# Parallelogram:\n    H[/Parallelogram/]\n\n# Parallelogram alt:\n    I[\\Parallelogram Alt\\]\n\n# Trapezoid:\n    J[/Trapezoid\\]\n\n# Trapezoid alt:\n    K[\\Trapezoid Alt/]',
        },
        {
          command: 'Basic Connections',
          description: 'Connect nodes with different arrow types',
          usage: 'Arrows and line styles',
          example: '# Solid arrow:\n    A --> B\n\n# Open arrow:\n    A --o B\n\n# Cross arrow:\n    A --x B\n\n# Dotted arrow:\n    A -.-> B\n\n# Thick arrow:\n    A ==> B\n\n# Line without arrow:\n    A --- B\n\n# Text on connection:\n    A -- Text --> B\n    A-. Text .-> B\n    A == Text ==> B',
        },
      ],
    },
    {
      title: 'Node Styling and IDs',
      commands: [
        {
          command: 'Node IDs',
          description: 'Use IDs for complex node references',
          usage: 'id[Text] format',
          example: '# Simple IDs:\n    a1[Node A]\n    b2[Node B]\n    a1 --> b2\n\n# Complex IDs:\n    node1[Complex Node ID]\n    node_2[Another Node]\n    node1 --> node_2\n\n# IDs with special chars:\n    "node-3"[Node with dash ID]\n    "node_4"[Node with underscore]',
        },
        {
          command: 'Basic Styling',
          description: 'Apply basic styles to nodes',
          usage: 'style node fill,stroke',
          example: '# Node styling:\n```mermaid\ngraph TD\n    A[Styled Node]\n    B[Another Node]\n    style A fill:#f9f,stroke:#333,stroke-width:2px\n    style B fill:#bbf,stroke:#f66\n```\n\n# Multiple styles:\n    style A fill:#f9f,stroke:#333\n    style B fill:#bbf,stroke:#f66,stroke-width:4px',
        },
        {
          command: 'CSS Classes',
          description: 'Apply CSS classes to nodes',
          usage: 'classDef and class keywords',
          example: '# Define class:\n```mermaid\ngraph TD\n    A[Class A]\n    B[Class B]\n    C[Regular Node]\n    \n    classDef defaultClass fill:#f9f,stroke:#333,stroke-width:2px\n    classDef specialClass fill:#bbf,stroke:#f66\n    \n    class A,B defaultClass\n    class C specialClass\n```',
        },
      ],
    },
    {
      title: 'Subgraphs and Groups',
      commands: [
        {
          command: 'Basic Subgraphs',
          description: 'Group related nodes together',
          usage: 'subgraph title ... end',
          example: '# Simple subgraph:\n```mermaid\ngraph TD\n    subgraph Group 1\n        A[A Node]\n        B[B Node]\n    end\n    \n    subgraph Group 2\n        C[C Node]\n        D[D Node]\n    end\n    \n    A --> C\n    B --> D\n```',
        },
        {
          command: 'Nested Subgraphs',
          description: 'Create nested subgraph structures',
          usage: 'subgraph within subgraph',
          example: '# Nested subgraphs:\n```mermaid\ngraph TD\n    subgraph Main Group\n        subgraph Sub Group 1\n            A[Node A]\n            B[Node B]\n        end\n        \n        subgraph Sub Group 2\n            C[Node C]\n            D[Node D]\n        end\n    end\n    \n    E[External Node]\n    A --> C\n    E --> A\n```',
        },
        {
          command: 'Subgraph Styling',
          description: 'Style subgraph containers',
          usage: 'Style subgraph backgrounds',
          example: '# Styled subgraphs:\n```mermaid\ngraph TD\n    subgraph "Group A"\n        A[Node A]\n        B[Node B]\n    end\n    \n    subgraph "Group B"\n        C[Node C]\n        D[Node D]\n    end\n    \n    style Group A fill:#f9f,stroke:#333\n    style Group B fill:#bbf,stroke:#f66\n```',
        },
      ],
    },
    {
      title: 'Sequence Diagrams',
      commands: [
        {
          command: 'Basic Sequence Diagram',
          description: 'Create simple sequence diagrams',
          usage: 'sequenceDiagram with participants',
          example: '# Basic sequence:\n```mermaid\nsequenceDiagram\n    participant A as Alice\n    participant B as Bob\n    \n    A->>B: Hello Bob!\n    B-->>A: Hello Alice!\n```',
        },
        {
          command: 'Message Types',
          description: 'Different arrow types for messages',
          usage: '->>, -->>, -x, --x',
          example: '# Message types:\n```mermaid\nsequenceDiagram\n    participant A as Alice\n    participant B as Bob\n    participant C as Carol\n    \n    A->>B: Solid message\n    B-->>A: Dashed response\n    A-x C: Crossed message\n    C--x B: Crossed response\n    A->>B: Another solid\n```',
        },
        {
          command: 'Loops and Conditions',
          description: 'Add control structures to sequences',
          usage: 'loop, alt, opt, par',
          example: '# Control structures:\n```mermaid\nsequenceDiagram\n    participant A as Client\n    participant S as Server\n    \n    A->>S: Request\n    \n    loop Retry attempts\n        S-->>A: Process request\n    end\n    \n    alt Success\n        S-->>A: Success response\n    else Failure\n        S-->>A: Error response\n    end\n```',
        },
        {
          command: 'Activation and Lifelines',
          description: 'Show activation periods',
          usage: 'activate/deactivate and +/+',
          example: '# Activation:\n```mermaid\nsequenceDiagram\n    participant A as Alice\n    participant B as Bob\n    \n    A->>+B: Request\n    B-->>-A: Response\n    \n    A->>B: Another request\n    activate B\n    B-->>A: Another response\n    deactivate B\n```',
        },
      ],
    },
    {
      title: 'Class Diagrams',
      commands: [
        {
          command: 'Basic Class Definition',
          description: 'Define classes with properties and methods',
          usage: 'class ClassName { properties methods }',
          example: '# Basic class:\n```mermaid\nclassDiagram\n    class Animal {\n        +String name\n        +int age\n        +makeSound()\n        +eat()\n    }\n    \n    class Dog {\n        +String breed\n        +bark()\n        +wagTail()\n    }\n```',
        },
        {
          command: 'Relationships',
          description: 'Define relationships between classes',
          usage: 'Inheritance, composition, aggregation',
          example: '# Relationships:\n```mermaid\nclassDiagram\n    class Animal {\n        +makeSound()\n    }\n    \n    class Dog {\n        +bark()\n    }\n    \n    class Person {\n        +name: String\n        +adoptDog()\n    }\n    \n    Animal <|-- Dog : Inheritance\n    Person "1" -- "0..*" Dog : owns\n```',
        },
        {
          command: 'Access Modifiers',
          description: 'Specify visibility of members',
          usage: '+ public, - private, # protected',
          example: '# Access modifiers:\n```mermaid\nclassDiagram\n    class BankAccount {\n        -String accountNumber\n        -double balance\n        #String accountType\n        +deposit(amount)\n        +withdraw(amount)\n        #getAccountType()\n    }\n```',
        },
        {
          command: 'Abstract Classes and Interfaces',
          description: 'Define abstract classes and interfaces',
          usage: 'abstract, class, interface',
          example: '# Abstract and interface:\n```mermaid\nclassDiagram\n    class Shape {\n        <<abstract>>\n        +area()\n        +perimeter()\n    }\n    \n    class Drawable {\n        <<interface>>\n        +draw()\n    }\n    \n    class Circle {\n        -double radius\n        +area()\n        +draw()\n    }\n    \n    Shape <|-- Circle\n    Drawable <|.. Circle\n```',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'State Diagrams',
      commands: [
        {
          command: 'Basic State Diagram',
          description: 'Create simple state machines',
          usage: 'stateDiagram-v2 with states and transitions',
          example: '# Basic state diagram:\n```mermaid\nstateDiagram-v2\n    [*] --> Still\n    Still --> Moving: Accelerate\n    Moving --> Still: Brake\n    Moving --> Crash: Collision\n    Crash --> Still: Repair\n    Still --> [*]\n```',
        },
        {
          command: 'Composite States',
          description: 'Create nested state structures',
          usage: 'state ParentState { ... }',
          example: '# Composite states:\n```mermaid\nstateDiagram-v2\n    [*] --> Active\n    \n    state Active {\n        [*] --> Idle\n        Idle --> Processing: Start\n        Processing --> Idle: Complete\n    }\n    \n    Active --> Inactive: Sleep\n    Inactive --> Active: Wake\n    Inactive --> [*]\n```',
        },
        {
          command: 'Choice States',
          description: 'Add decision points in state diagrams',
          usage: 'choice state with multiple transitions',
          example: '# Choice state:\n```mermaid\nstateDiagram-v2\n    [*] --> Processing\n    Processing --> Choice: Evaluate\n    \n    state Choice <<choice>>\n    Choice --> Success: Pass\n    Choice --> Error: Fail\n    \n    Success --> [*]\n    Error --> [*]\n```',
        },
      ],
    },
    {
      title: 'Entity Relationship Diagrams',
      commands: [
        {
          command: 'Basic ER Diagram',
          description: 'Create database entity relationships',
          usage: 'erDiagram with entities and relationships',
          example: '# Basic ER diagram:\n```mermaid\nerDiagram\n    CUSTOMER ||--o{ ORDER : places\n    ORDER ||--|{ LINE-ITEM : contains\n    PRODUCT ||--o{ LINE-ITEM : "ordered in"\n    \n    CUSTOMER {\n        int id PK\n        string name\n        string email\n    }\n    \n    ORDER {\n        int id PK\n        date order_date\n        decimal total\n    }\n```',
        },
        {
          command: 'Relationship Cardinality',
          description: 'Specify relationship types',
          usage: '|o, ||, |{, }|, }{',
          example: '# Cardinality types:\n```mermaid\nerDiagram\n    USER ||--o{ POST : creates\n    POST ||--|{ COMMENT : has\n    POST }o--|| CATEGORY : belongs_to\n    USER ||--o{ COMMENT : writes\n    \n    USER {\n        int id PK\n        string username\n    }\n    \n    POST {\n        int id PK\n        string title\n    }\n```',
        },
        {
          command: 'Advanced ER Features',
          description: 'Use advanced ER diagram features',
          usage: 'Keys, constraints, and relationships',
          example: '# Advanced ER:\n```mermaid\nerDiagram\n    DEPARTMENT {\n        int dept_id PK\n        string dept_name\n        string location\n    }\n    \n    EMPLOYEE {\n        int emp_id PK\n        string name\n        int dept_id FK\n        int manager_id FK\n    }\n    \n    PROJECT {\n        int project_id PK\n        string project_name\n        date start_date\n    }\n    \n    DEPARTMENT ||--o{ EMPLOYEE : "employs"\n    EMPLOYEE ||--o{ PROJECT : "works on"\n    EMPLOYEE }o--|| EMPLOYEE : "manages"\n```',
        },
      ],
    },
    {
      title: 'Gantt Charts',
      commands: [
        {
          command: 'Basic Gantt Chart',
          description: 'Create project timelines',
          usage: 'gantt with dates and tasks',
          example: '# Basic Gantt:\n```mermaid\ngantt\n    title Project Timeline\n    dateFormat  YYYY-MM-DD\n    \n    section Phase 1\n    Research     :a1, 2024-01-01, 7d\n    Planning     :a2, after a1, 5d\n    \n    section Phase 2\n    Development  :a3, after a2, 14d\n    Testing      :a4, after a3, 7d\n```',
        },
        {
          command: 'Task Dependencies',
          description: 'Link tasks with dependencies',
          usage: 'after, before, task relationships',
          example: '# Dependencies:\n```mermaid\ngantt\n    title Software Development\n    dateFormat  YYYY-MM-DD\n    \n    section Setup\n    Requirements :done, req, 2024-01-01, 5d\n    Design       :done, des, after req, 5d\n    \n    section Development\n    Frontend     :active, fe, after des, 10d\n    Backend      :be, after des, 12d\n    Integration  :int, after fe, 5d\n    \n    section Testing\n    Unit Tests   :ut, after be, 3d\n    QA Testing   :qa, after int, 7d\n```',
        },
        {
          command: 'Milestones and Markers',
          description: 'Add milestones and progress indicators',
          usage: 'milestone and status markers',
          example: '# Milestones:\n```mermaid\ngantt\n    title Product Launch\n    dateFormat  YYYY-MM-DD\n    \n    section Planning\n    Market Research :done, research, 2024-01-01, 10d\n    Requirements    :done, req, after research, 5d\n    Design Complete  :milestone, m1, after req, 0d\n    \n    section Development\n    Alpha Build     :active, alpha, after req, 15d\n    Beta Build      :beta, after alpha, 10d\n    Release Ready   :milestone, m2, after beta, 0d\n```',
        },
      ],
    },
    {
      title: 'Pie Charts and Graphs',
      commands: [
        {
          command: 'Basic Pie Chart',
          description: 'Create pie charts with data',
          usage: 'pie title with data values',
          example: '# Basic pie chart:\n```mermaid\npie title Market Share\n    "Product A" : 35\n    "Product B" : 25\n    "Product C" : 20\n    "Product D" : 15\n    "Others"    : 5\n```',
        },
        {
          command: 'Advanced Pie Charts',
          description: 'Customize pie chart appearance',
          usage: 'Custom colors and formatting',
          example: '# Styled pie chart:\n```mermaid\npie showData\n    title Budget Distribution 2024\n    "Marketing" : 30\n    "Development" : 45\n    "Operations" : 15\n    "Research" : 10\n```',
        },
        {
          command: 'Quadrant Charts',
          description: 'Create quadrant analysis charts',
          usage: 'quadrantChart with axes and data',
          example: '# Quadrant chart:\n```mermaid\nquadrantChart\n    title Product Features Analysis\n    x-axis "Low Cost" --> "High Cost"\n    y-axis "Low Value" --> "High Value"\n    quadrant-1 "High Priority"\n    quadrant-2 "Strategic"\n    quadrant-3 "Basic"\n    quadrant-4 "Premium"\n    "Feature A": [0.3, 0.8]\n    "Feature B": [0.7, 0.6]\n    "Feature C": [0.2, 0.4]\n    "Feature D": [0.8, 0.9]\n```',
        }],
    },
    {
      title: 'Advanced Styling and Themes',
      commands: [
        {
          command: 'Custom Themes',
          description: 'Apply predefined themes',
          usage: '%%{init: {\'theme\': \'themeName\'}}%%',
          example: '# Theme initialization:\n```mermaid\n%%{init: {\'theme\': \'base\', \'themeVariables\': {\'primaryColor\': \'#ffecb3\'}}}%%\ngraph TD\n    A[Themed Node]\n    B[Another Node]\n    A --> B\n```\n\n# Available themes:\n# base, default, dark, forest, neutral, null\n\n# Custom theme variables:\n%%{init: {\n    \'theme\': \'base\',\n    \'themeVariables\': {\n        \'primaryColor\': \'#ffecb3\',\n        \'primaryTextColor\': \'#000\',\n        \'primaryBorderColor\': \'#000\',\n        \'lineColor\': \'#000\',\n        \'sectionBkgColor\': \'#ffecb3\',\n        \'altSectionBkgColor\': \'#fff\'\n    }\n}}%%',
        },
        {
          command: 'Advanced CSS Styling',
          description: 'Complex styling with CSS',
          usage: 'Multiple style definitions',
          example: '# Advanced styling:\n```mermaid\ngraph TD\n    A[Styled Node A]\n    B[Styled Node B]\n    C[Styled Node C]\n    D[Styled Node D]\n    \n    A --> B\n    B --> C\n    C --> D\n    \n    classDef nodeA fill:#f9f,stroke:#333,stroke-width:2px,color:#000\n    classDef nodeB fill:#bbf,stroke:#f66,stroke-width:3px,color:#fff\n    classDef nodeC fill:#bfb,stroke:#6f6,stroke-width:4px,color:#000\n    classDef nodeD fill:#fbb,stroke:#66f,stroke-width:5px,color:#fff\n    \n    class A nodeA\n    class B nodeB\n    class C nodeC\n    class D nodeD\n    \n    linkStyle 0 stroke:#f00,stroke-width:2px\n    linkStyle 1 stroke:#0f0,stroke-width:3px\n    linkStyle 2 stroke:#00f,stroke-width:4px\n```',
        },
        {
          command: 'Conditional Styling',
          description: 'Apply styles based on conditions',
          usage: 'Dynamic styling with conditions',
          example: '# Conditional styling:\n```mermaid\ngraph TD\n    A[Start]\n    B{Decision}\n    C[Success Path]\n    D[Error Path]\n    \n    A --> B\n    B -->|Yes| C\n    B -->|No| D\n    \n    classDef success fill:#bfb,stroke:#6f6\n    classDef error fill:#fbb,stroke:#f66\n    classDef decision fill:#ffeb3b,stroke:#f57f17\n    \n    class C success\n    class D error\n    class B decision\n```',
        },
      ],
    },
    {
      title: 'Advanced Diagram Features',
      commands: [
        {
          command: 'Markdown in Nodes',
          description: 'Use Markdown formatting in node text',
          usage: 'Markdown syntax in node content',
          example: '# Markdown in nodes:\n```mermaid\ngraph TD\n    A["**Bold Text**"]\n    B["*Italic Text*"]\n    C["`Code Block`"]\n    D["[Link](https://example.com)"]\n    E["Line 1<br>Line 2<br>Line 3"]\n    \n    A --> B\n    B --> C\n    C --> D\n    D --> E\n```\n\n# Escaped characters:\n    F["Escaped \\[brackets\\]"]\n    G["Escaped \\"quotes\\""]',
        },
        {
          command: 'Comments and Annotations',
          description: 'Add comments to diagrams',
          usage: '%% for comments',
          example: '# Comments:\n```mermaid\n%% This is a comment\n%% Multi-line comment\n%% about the diagram\n\ngraph TD\n    A[Start] %% Inline comment\n    B[Process]\n    C[End]\n    \n    A --> B\n    B --> C\n    \n    %% Another comment\n    style A fill:#f9f\n```',
        },
        {
          command: 'Unicode and Special Characters',
          description: 'Use Unicode characters in diagrams',
          usage: 'Special characters and emojis',
          example: '# Unicode support:\n```mermaid\ngraph TD\n    A["🚀 Start"]\n    B["⚙️ Process"]\n    C["✅ Success"]\n    D["❌ Error"]\n    \n    A --> B\n    B --> C\n    B --> D\n    \n    E["Math: α + β = γ"]\n    F["Currency: $100, €200, £300"]\n    \n    C --> E\n    D --> F\n```',
        },
      ],
    },
    {
      title: 'Integration and Automation',
      commands: [
        {
          command: 'JavaScript Integration',
          description: 'Integrate Mermaid with JavaScript',
          usage: 'Programmatic diagram generation',
          example: '# JavaScript integration:\n```javascript\n// Initialize Mermaid\nmermaid.initialize({ \n    startOnLoad: true,\n    theme: \'forest\',\n    flowchart: {\n        useMaxWidth: true,\n        htmlLabels: true\n    }\n});\n\n// Render diagram from string\nconst graphDefinition = \'graph TD\\n    A[Start] --> B[End]\';\nconst element = document.querySelector(\'#diagram\');\nmermaid.render(\'diagram-svg\', graphDefinition, element);\n\n// Async rendering\nmermaid.render(\'myDiagram\', graphDefinition).then(svg => {\n    document.getElementById(\'container\').innerHTML = svg;\n});\n```',
        },
        {
          command: 'API Integration',
          description: 'Generate diagrams from data',
          usage: 'Dynamic diagram generation',
          example: '# API integration:\n```javascript\n// Generate flowchart from JSON data\nfunction generateFlowchart(data) {\n    let mermaidCode = \'graph TD\\n\';\n    \n    data.nodes.forEach(node => {\n        mermaidCode += `    ${node.id}[${node.label}]\\n`;\n    });\n    \n    data.connections.forEach(conn => {\n        mermaidCode += `    ${conn.from} --> ${conn.to}\\n`;\n    });\n    \n    return mermaidCode;\n}\n\n// Usage:\nconst apiData = {\n    nodes: [\n        {id: \'A\', label: \'Start\'},\n        {id: \'B\', label: \'Process\'}\n    ],\n    connections: [\n        {from: \'A\', to: \'B\'}\n    ]\n};\n\nconst diagramCode = generateFlowchart(apiData);\nmermaid.render(\'api-diagram\', diagramCode);\n```',
        },
        {
          command: 'Export and Sharing',
          description: 'Export diagrams in various formats',
          usage: 'SVG, PNG export options',
          example: '# Export options:\n```javascript\n// Export to SVG\nconst svgCode = await mermaid.render(\'diagram\', mermaidCode);\n\n// Export to PNG (using canvas)\nfunction exportToPNG(svgElement, filename) {\n    const canvas = document.createElement(\'canvas\');\n    const ctx = canvas.getContext(\'2d\');\n    const svgData = new XMLSerializer().serializeToString(svgElement);\n    \n    const img = new Image();\n    img.onload = function() {\n        canvas.width = img.width;\n        canvas.height = img.height;\n        ctx.drawImage(img, 0, 0);\n        \n        const link = document.createElement(\'a\');\n        link.download = filename;\n        link.href = canvas.toDataURL();\n        link.click();\n    };\n    \n    img.src = \'data:image/svg+xml;base64,\' + btoa(svgData);\n}\n\n// Export to PDF (using libraries)\n// Use jsPDF or similar libraries for PDF export\n```',
        },
      ],
    },
    {
      title: 'Performance and Best Practices',
      commands: [
        {
          command: 'Performance Optimization',
          description: 'Optimize diagram rendering performance',
          usage: 'Best practices for large diagrams',
          example: '# Performance tips:\n```mermaid\n%% Use subgraphs to organize complex diagrams\n%% Limit nodes per diagram (< 1000 recommended)\n%% Use efficient styling with classes\n%% Avoid excessive text in nodes\n\ngraph TD\n    subgraph "Module A"\n        A1[Node 1]\n        A2[Node 2]\n        A3[Node 3]\n    end\n    \n    subgraph "Module B"\n        B1[Node 1]\n        B2[Node 2]\n        B3[Node 3]\n    end\n    \n    A1 --> B1\n    A2 --> B2\n    A3 --> B3\n    \n    classDef moduleNode fill:#f9f,stroke:#333\n    class A1,A2,A3,B1,B2,B3 moduleNode\n```\n\n# JavaScript optimization:\n```javascript\n// Lazy loading diagrams\nconst observer = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n        if (entry.isIntersecting) {\n            renderDiagram(entry.target);\n            observer.unobserve(entry.target);\n        }\n    });\n});\n\ndocument.querySelectorAll(\'.mermaid\').forEach(el => {\n    observer.observe(el);\n});\n```',
        },
        {
          command: 'Common Patterns',
          description: 'Reusable diagram patterns',
          usage: 'Standard diagram templates',
          example: '# System architecture pattern:\n```mermaid\ngraph TB\n    subgraph "Frontend"\n        UI[User Interface]\n        SPA[Single Page App]\n    end\n    \n    subgraph "Backend"\n        API[REST API]\n        AUTH[Authentication]\n        DB[(Database)]\n    end\n    \n    subgraph "External"\n        PAY[Payment Gateway]\n        EMAIL[Email Service]\n    end\n    \n    UI --> SPA\n    SPA --> API\n    API --> AUTH\n    API --> DB\n    API --> PAY\n    API --> EMAIL\n```\n\n# CI/CD pipeline pattern:\n```mermaid\ngraph LR\n    DEV[Development] --> BUILD[Build]\n    BUILD --> TEST[Testing]\n    TEST --> STAGE[Staging]\n    STAGE --> PROD[Production]\n    \n    PROD --> MONITOR[Monitoring]\n    MONITOR --> DEV\n```',
        },
        {
          command: 'Debugging and Troubleshooting',
          description: 'Common issues and solutions',
          usage: 'Debug diagram problems',
          example: '# Common issues and solutions:\n\n# 1. Diagram not rendering\n# - Check syntax errors\n# - Verify mermaid.init() called\n# - Check console for errors\n\n# 2. Styling not applying\n# - Verify CSS class names\n# - Check theme initialization\n# - Use style keyword for individual nodes\n\n# 3. Large diagram performance\n# - Use subgraphs\n# - Limit node count\n# - Implement lazy loading\n\n# 4. Export issues\n# - Check browser compatibility\n# - Verify SVG generation\n# - Use proper export libraries\n\n# Debug syntax:\n```mermaid\n%% Enable debug mode\n%%{init: {\'logLevel\': 1}}%%\n\ngraph TD\n    A[Test Node]\n    B[Debug Node]\n    A --> B\n```\n\n# Validate syntax:\n# Use Mermaid Live Editor\n# Check bracket matching\n# Verify keyword spelling',
        },
      ],
    },
    {
      title: 'Modern Mermaid Features (2024+)',
      commands: [
        {
          command: 'New Diagram Types',
          description: 'Latest diagram types added',
          usage: 'journey, requirement, gitgraph',
          example: '# Journey diagram:\n```mermaid\njourney\n    title User Journey\n    section Onboarding\n      Register: 5: User\n      Login: 3: User\n      Dashboard: 4: User\n    section Daily Use\n      View Reports: 5: User\n      Export Data: 3: User\n```\n\n# Requirement diagram:\n```mermaid\nrequirementDiagram\n    requirement test_req {\n        id: 1\n        text: the test text.\n        risk: high\n        verifyMethod: test\n    }\n    \n    element test_elem {\n        type: simulation\n        docRef: test_req\n    }\n    \n    test_elem - satisfies -> test_req\n```\n\n# Git graph:\n```mermaid\ngitGraph\n    commit\n    branch develop\n    checkout develop\n    commit\n    commit\n    checkout main\n    merge develop\n    commit\n    branch feature\n    checkout feature\n    commit\n    checkout main\n    merge feature\n```',
        },
        {
          command: 'Advanced Interactions',
          description: 'Interactive diagram features',
          usage: 'Click actions and handlers',
          example: '# Click actions:\n```mermaid\ngraph TD\n    A[Click me]\n    B[Clicked!]\n    \n    A --> B\n    \n    click A "alert(\'Node A clicked!\')" "Click me"\n    click B "window.open(\'https://example.com\')" "Open Link"\n```\n\n# Callback functions:\n```javascript\nmermaid.initialize({\n    click: function(nodeId) {\n        console.log(\'Clicked:\', nodeId);\n        // Custom click handling\n    }\n});\n```',
        },
        {
          command: 'AI Integration Features',
          description: 'AI-powered diagram generation',
          usage: 'AI-enhanced diagram creation',
          example: '# AI diagram generation (experimental):\n# Natural language to Mermaid\n# "Show a flowchart of user registration process"\n# → Generates Mermaid code\n\n# AI assistance features:\n# - Auto-completion of diagram syntax\n# - Smart layout suggestions\n# - Automatic styling recommendations\n\n# Integration with AI tools:\n# GitHub Copilot with Mermaid\n# ChatGPT + Mermaid export\n# Custom AI diagram generators',
        },
      ],
    },
    {
      title: 'Real-World Examples',
      commands: [
        {
          command: 'Software Architecture',
          description: 'Complete system architecture diagram',
          usage: 'Microservices architecture',
          example: '# Microservices architecture:\n```mermaid\ngraph TB\n    subgraph "Client Layer"\n        WEB[Web App]\n        MOBILE[Mobile App]\n    end\n    \n    subgraph "API Gateway"\n        GATEWAY[API Gateway]\n    end\n    \n    subgraph "Microservices"\n        AUTH[Auth Service]\n        USER[User Service]\n        ORDER[Order Service]\n        PAYMENT[Payment Service]\n        NOTIFICATION[Notification Service]\n    end\n    \n    subgraph "Data Layer"\n        USER_DB[(User DB)]\n        ORDER_DB[(Order DB)]\n        PAYMENT_DB[(Payment DB)]\n        CACHE[(Redis Cache)]\n    end\n    \n    subgraph "External Services"\n        EMAIL[Email Service]\n        SMS[SMS Service]\n    end\n    \n    WEB --> GATEWAY\n    MOBILE --> GATEWAY\n    \n    GATEWAY --> AUTH\n    GATEWAY --> USER\n    GATEWAY --> ORDER\n    GATEWAY --> PAYMENT\n    GATEWAY --> NOTIFICATION\n    \n    AUTH --> USER_DB\n    USER --> USER_DB\n    ORDER --> ORDER_DB\n    PAYMENT --> PAYMENT_DB\n    \n    USER --> CACHE\n    ORDER --> CACHE\n    \n    NOTIFICATION --> EMAIL\n    NOTIFICATION --> SMS\n```\n\n# Class diagram for e-commerce:\n```mermaid\nclassDiagram\n    class User {\n        +int id\n        +string name\n        +string email\n        +register()\n        +login()\n        +logout()\n    }\n    \n    class Product {\n        +int id\n        +string name\n        +decimal price\n        +getDetails()\n        +updatePrice()\n    }\n    \n    class Order {\n        +int id\n        +date orderDate\n        +decimal total\n        +addItem()\n        +removeItem()\n        +calculateTotal()\n    }\n    \n    class OrderItem {\n        +int quantity\n        +decimal unitPrice\n        +getSubtotal()\n    }\n    \n    User "1" -- "0..*" Order : places\n    Order "1" -- "1..*" OrderItem : contains\n    Product "1" -- "0..*" OrderItem : "ordered in"\n```',
        },
        {
          command: 'Business Process Flow',
          description: 'Complete business process diagram',
          usage: 'Order processing workflow',
          example: '# Order processing workflow:\n```mermaid\nflowchart TD\n    START([Start]) --> CHECK{Check Inventory}\n    \n    CHECK -->|Available| RESERVE[Reserve Items]\n    CHECK -->|Out of Stock| BACKORDER[Create Backorder]\n    \n    RESERVE --> PAYMENT{Payment Valid?}\n    PAYMENT -->|Valid| PROCESS[Process Order]\n    PAYMENT -->|Invalid| FAIL[Payment Failed]\n    \n    BACKORDER --> NOTIFY[Notify Customer]\n    PROCESS --> SHIP[Ship Order]\n    NOTIFY --> WAIT[Wait for Stock]\n    \n    SHIP --> TRACK[Track Delivery]\n    WAIT --> CHECK\n    FAIL --> RETRY{Retry Payment?}\n    \n    RETRY -->|Yes| PAYMENT\n    RETRY -->|No| CANCEL[Cancel Order]\n    \n    TRACK --> COMPLETE([Order Complete])\n    CANCEL --> END([End])\n    COMPLETE --> END\n```\n\n# Project management Gantt:\n```mermaid\ngantt\n    title Website Development Project\n    dateFormat  YYYY-MM-DD\n    \n    section Planning\n    Requirements     :done, req, 2024-01-01, 5d\n    Design           :done, design, after req, 7d\n    Design Review    :milestone, m1, after design, 0d\n    \n    section Development\n    Frontend Dev     :active, fe, after design, 14d\n    Backend Dev      :be, after design, 18d\n    Database Setup   :db, after design, 5d\n    \n    section Testing\n    Unit Testing     :ut, after fe, 7d\n    Integration Test :it, after be, 5d\n    UAT              :uat, after it, 7d\n    \n    section Deployment\n    Staging Deploy   :staging, after uat, 3d\n    Production Deploy:prod, after staging, 2d\n    Launch           :milestone, m2, after prod, 0d\n```',
        },
        {
          command: 'Data Flow and Analysis',
          description: 'Data analysis and flow diagrams',
          usage: 'ETL process and data analysis',
          example: '# ETL Data Pipeline:\n```mermaid\nflowchart LR\n    subgraph "Data Sources"\n        API1[REST API 1]\n        API2[REST API 2]\n        DB1[(Database 1)]\n        FILES[CSV Files]\n    end\n    \n    subgraph "Extraction"\n        EXTRACT[Data Extraction Service]\n    end\n    \n    subgraph "Transformation"\n        CLEAN[Data Cleaning]\n        VALIDATE[Data Validation]\n        ENRICH[Data Enrichment]\n        AGGREGATE[Aggregation]\n    end\n    \n    subgraph "Loading"\n        DATAWARE[(Data Warehouse)]\n        DATALAKE[(Data Lake)]\n    end\n    \n    subgraph "Analytics"\n        DASHBOARDS[Dashboards]\n        REPORTS[Reports]\n        ML[ML Models]\n    end\n    \n    API1 --> EXTRACT\n    API2 --> EXTRACT\n    DB1 --> EXTRACT\n    FILES --> EXTRACT\n    \n    EXTRACT --> CLEAN\n    CLEAN --> VALIDATE\n    VALIDATE --> ENRICH\n    ENRICH --> AGGREGATE\n    \n    AGGREGATE --> DATAWARE\n    AGGREGATE --> DATALAKE\n    \n    DATAWARE --> DASHBOARDS\n    DATAWARE --> REPORTS\n    DATALAKE --> ML\n```\n\n# User Analytics Funnel:\n```mermaid\npie title Website Conversion Funnel\n    "Visitors" : 10000\n    "Sign-ups" : 2500\n    "Active Users" : 1500\n    "Paying Customers" : 300\n    "Premium Users" : 75\n```\n\n# Performance Metrics Quadrant:\n```mermaid\nquadrantChart\n    title Feature Performance Analysis\n    x-axis "Low Impact" --> "High Impact"\n    y-axis "Low Effort" --> "High Effort"\n    quadrant-1 "Quick Wins"\n    quadrant-2 "Major Projects"\n    quadrant-3 "Fill-ins"\n    quadrant-4 "Thankless Tasks"\n    "Bug Fixes" : [0.2, 0.3]\n    "New Features" : [0.8, 0.7]\n    "Documentation" : [0.3, 0.2]\n    "Refactoring" : [0.6, 0.8]\n```',
        },
      ],
    },
  ],
};
