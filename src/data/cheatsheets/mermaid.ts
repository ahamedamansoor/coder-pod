import { GitBranch } from 'lucide-react';

export const mermaidCheatsheet = {
  id: 'mermaid',
  name: 'Mermaid',
  description: 'Master Mermaid diagrams from basics to expert features (2024+)',
  icon: GitBranch,
  colorTheme: 'purple' as const,
  sections: [
    {
      title: 'Getting Started with Mermaid',
      commands: [
        {
          command: 'Mermaid Overview',
          description: 'Understanding Mermaid basics and purpose',
          usage: 'Diagramming and charting tool for creating visualizations',
          example: `# Mermaid is a JavaScript-based diagramming tool
# Creates diagrams from simple text-based syntax
# Integrates with Markdown, documentation tools
# Supports multiple diagram types`,
        },
        {
          command: 'Basic Mermaid Syntax',
          description: 'Basic diagram syntax structure',
          usage: 'Diagram type and connections',
          example: `# Basic syntax:
\`\`\`mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
\`\`\``,
        },
        {
          command: 'VS Code Extension',
          description: 'Install Mermaid in VS Code',
          usage: 'VS Code Marketplace',
          example: `# VS Code: Mermaid Preview extension`,
        },
        {
          command: 'GitHub Integration',
          description: 'Use Mermaid in GitHub',
          usage: 'Built-in GitHub support',
          example: `# GitHub: Built-in support in Markdown`,
        },
        {
          command: 'GitLab Integration',
          description: 'Use Mermaid in GitLab',
          usage: 'Built-in GitLab support',
          example: `# GitLab: Built-in Mermaid support`,
        },
        {
          command: 'Notion Integration',
          description: 'Use Mermaid in Notion',
          usage: 'Notion Mermaid diagrams',
          example: `# Notion: Mermaid diagrams`,
        },
        {
          command: 'Web CDN Integration',
          description: 'Include Mermaid via CDN',
          usage: 'HTML script tag',
          example: `<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>`,
        },
        {
          command: 'NPM Installation',
          description: 'Install Mermaid via npm',
          usage: 'npm package manager',
          example: `npm install mermaid`,
        },
        {
          command: 'Initialize Mermaid',
          description: 'Initialize Mermaid in JavaScript',
          usage: 'mermaid.initialize()',
          example: `mermaid.initialize({ startOnLoad: true });`,
        },
        {
          command: 'Basic Flowchart Top to Bottom',
          description: 'Create basic top to bottom flowchart',
          usage: 'graph TD',
          example: `# Basic flowchart:
\`\`\`mermaid
graph TD
    A --> B
    B --> C
\`\`\``,
        },
        {
          command: 'Flowchart with Node Text',
          description: 'Add text to flowchart nodes',
          usage: 'graph LR with node text',
          example: `# With node text:
\`\`\`mermaid
graph LR
    A[Start] --> B[Process]
    B --> C[End]
\`\`\``,
        },
      ],
    },
    {
      title: 'Flowchart Basics',
      commands: [
        {
          command: 'Graph Top to Bottom',
          description: 'Set diagram flow top to bottom',
          usage: 'graph TD',
          example: `# Top to Bottom (default):
graph TD
    A --> B`,
        },
        {
          command: 'Graph Left to Right',
          description: 'Set diagram flow left to right',
          usage: 'graph LR',
          example: `# Left to Right:
graph LR
    A --> B`,
        },
        {
          command: 'Graph Bottom to Top',
          description: 'Set diagram flow bottom to top',
          usage: 'graph BT',
          example: `# Bottom to Top:
graph BT
    A --> B`,
        },
        {
          command: 'Graph Right to Left',
          description: 'Set diagram flow right to left',
          usage: 'graph RL',
          example: `# Right to Left:
graph RL
    A --> B`,
        },
        {
          command: 'Rectangle Node',
          description: 'Create rectangle node',
          usage: 'A[Text]',
          example: `# Rectangle (default):
    A[Default Text]`,
        },
        {
          command: 'Round Edges Node',
          description: 'Create round-edged node',
          usage: 'B(Text)',
          example: `# Round edges:
    B(Rounded Edges)`,
        },
        {
          command: 'Stadium Shape Node',
          description: 'Create stadium-shaped node',
          usage: 'C(Text)',
          example: `# Stadium shape:
    C(Stadium Shape)`,
        },
        {
          command: 'Circle Node',
          description: 'Create circular node',
          usage: 'D((Text))',
          example: `# Circle:
    D((Circle))`,
        },
        {
          command: 'Asymmetric Shape Node',
          description: 'Create asymmetric-shaped node',
          usage: 'E>Text]',
          example: `# Asymmetric shape:
    E>Asymmetric]`,
        },
        {
          command: 'Rhombus Node',
          description: 'Create rhombus-shaped node',
          usage: 'F{Text}',
          example: `# Rhombus:
    F{Rhombus}`,
        },
        {
          command: 'Hexagon Node',
          description: 'Create hexagon-shaped node',
          usage: 'G{{Text}}',
          example: `# Hexagon:
    G{{Hexagon}}`,
        },
        {
          command: 'Parallelogram Node',
          description: 'Create parallelogram node',
          usage: 'H[/Text/]',
          example: `# Parallelogram:
    H[/Parallelogram/]`,
        },
        {
          command: 'Parallelogram Alt Node',
          description: 'Create alternative parallelogram node',
          usage: 'I[\\Text\\]',
          example: `# Parallelogram alt:
    I[\\Parallelogram Alt\\]`,
        },
        {
          command: 'Trapezoid Node',
          description: 'Create trapezoid node',
          usage: 'J[/Text\\]',
          example: `# Trapezoid:
    J[/Trapezoid\\]`,
        },
        {
          command: 'Trapezoid Alt Node',
          description: 'Create alternative trapezoid node',
          usage: 'K[\\Text/]',
          example: `# Trapezoid alt:
    K[\\Trapezoid Alt/]`,
        },
        {
          command: 'Solid Arrow Connection',
          description: 'Create solid arrow connection',
          usage: 'A --> B',
          example: `# Solid arrow:
    A --> B`,
        },
        {
          command: 'Open Arrow Connection',
          description: 'Create open arrow connection',
          usage: 'A --o B',
          example: `# Open arrow:
    A --o B`,
        },
        {
          command: 'Cross Arrow Connection',
          description: 'Create cross arrow connection',
          usage: 'A --x B',
          example: `# Cross arrow:
    A --x B`,
        },
        {
          command: 'Dotted Arrow Connection',
          description: 'Create dotted arrow connection',
          usage: 'A -.-> B',
          example: `# Dotted arrow:
    A -.-> B`,
        },
        {
          command: 'Thick Arrow Connection',
          description: 'Create thick arrow connection',
          usage: 'A ==> B',
          example: `# Thick arrow:
    A ==> B`,
        },
        {
          command: 'Line Connection',
          description: 'Create line without arrow',
          usage: 'A --- B',
          example: `# Line without arrow:
    A --- B`,
        },
        {
          command: 'Text on Solid Arrow',
          description: 'Add text to solid arrow',
          usage: 'A -- Text --> B',
          example: `# Text on connection:
    A -- Text --> B`,
        },
        {
          command: 'Text on Dotted Arrow',
          description: 'Add text to dotted arrow',
          usage: 'A-. Text .-> B',
          example: `    A-. Text .-> B`,
        },
        {
          command: 'Text on Thick Arrow',
          description: 'Add text to thick arrow',
          usage: 'A == Text ==> B',
          example: `    A == Text ==> B`,
        },
      ],
    },
    {
      title: 'Node Styling and IDs',
      commands: [
        {
          command: 'Simple Node IDs',
          description: 'Use simple IDs for nodes',
          usage: 'a1[Text]',
          example: `# Simple IDs:
    a1[Node A]
    b2[Node B]
    a1 --> b2`,
        },
        {
          command: 'Complex Node IDs',
          description: 'Use complex IDs for nodes',
          usage: 'node1[Text]',
          example: `# Complex IDs:
    node1[Complex Node ID]
    node_2[Another Node]
    node1 --> node_2`,
        },
        {
          command: 'Special Character IDs',
          description: 'Use IDs with special characters',
          usage: '"node-3"[Text]',
          example: `# IDs with special chars:
    "node-3"[Node with dash ID]
    "node_4"[Node with underscore]`,
        },
        {
          command: 'Basic Node Styling',
          description: 'Apply basic styles to nodes',
          usage: 'style node fill,stroke',
          example: `# Node styling:
\`\`\`mermaid
graph TD
    A[Styled Node]
    B[Another Node]
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#f66
\`\`\``,
        },
        {
          command: 'Multiple Node Styles',
          description: 'Apply multiple styles to nodes',
          usage: 'Multiple style properties',
          example: `# Multiple styles:
    style A fill:#f9f,stroke:#333
    style B fill:#bbf,stroke:#f66,stroke-width:4px`,
        },
        {
          command: 'Define CSS Class',
          description: 'Define CSS class for nodes',
          usage: 'classDef keyword',
          example: `# Define class:
\`\`\`mermaid
graph TD
    A[Class A]
    B[Class B]
    C[Regular Node]
    
    classDef defaultClass fill:#f9f,stroke:#333,stroke-width:2px
    classDef specialClass fill:#bbf,stroke:#f66
    
    class A,B defaultClass
    class C specialClass
\`\`\``,
        },
      ],
    },
    {
      title: 'Subgraphs and Groups',
      commands: [
        {
          command: 'Simple Subgraph',
          description: 'Create simple subgraph',
          usage: 'subgraph title ... end',
          example: `# Simple subgraph:
\`\`\`mermaid
graph TD
    subgraph Group 1
        A[A Node]
        B[B Node]
    end
    
    subgraph Group 2
        C[C Node]
        D[D Node]
    end
    
    A --> C
    B --> D
\`\`\``,
        },
        {
          command: 'Nested Subgraph',
          description: 'Create nested subgraph structure',
          usage: 'subgraph within subgraph',
          example: `# Nested subgraphs:
\`\`\`mermaid
graph TD
    subgraph Main Group
        subgraph Sub Group 1
            A[Node A]
            B[Node B]
        end
        
        subgraph Sub Group 2
            C[Node C]
            D[Node D]
        end
    end
    
    E[External Node]
    A --> C
    E --> A
\`\`\``,
        },
        {
          command: 'Styled Subgraph',
          description: 'Style subgraph containers',
          usage: 'Style subgraph backgrounds',
          example: `# Styled subgraphs:
\`\`\`mermaid
graph TD
    subgraph "Group A"
        A[Node A]
        B[Node B]
    end
    
    subgraph "Group B"
        C[Node C]
        D[Node D]
    end
    
    style Group A fill:#f9f,stroke:#333
    style Group B fill:#bbf,stroke:#f66
\`\`\``,
        },
      ],
    },
    {
      title: 'Sequence Diagrams',
      commands: [
        {
          command: 'Basic Sequence Diagram',
          description: 'Create simple sequence diagram',
          usage: 'sequenceDiagram with participants',
          example: `# Basic sequence:
\`\`\`mermaid
sequenceDiagram
    participant A as Alice
    participant B as Bob
    
    A->>B: Hello Bob!
    B-->>A: Hello Alice!
\`\`\``,
        },
        {
          command: 'Solid Message Arrow',
          description: 'Create solid message arrow',
          usage: 'A->>B: Message',
          example: `# Message types:
\`\`\`mermaid
sequenceDiagram
    participant A as Alice
    participant B as Bob
    
    A->>B: Solid message
\`\`\``,
        },
        {
          command: 'Dashed Response Arrow',
          description: 'Create dashed response arrow',
          usage: 'B-->>A: Response',
          example: `    B-->>A: Dashed response`,
        },
        {
          command: 'Crossed Message Arrow',
          description: 'Create crossed message arrow',
          usage: 'A-x C: Message',
          example: `    A-x C: Crossed message`,
        },
        {
          command: 'Crossed Response Arrow',
          description: 'Create crossed response arrow',
          usage: 'C--x B: Response',
          example: `    C--x B: Crossed response`,
        },
        {
          command: 'Loop Structure',
          description: 'Add loop to sequence diagram',
          usage: 'loop description ... end',
          example: `# Control structures:
\`\`\`mermaid
sequenceDiagram
    participant A as Client
    participant S as Server
    
    A->>S: Request
    
    loop Retry attempts
        S-->>A: Process request
    end
\`\`\``,
        },
        {
          command: 'Alternative Structure',
          description: 'Add alternative branches',
          usage: 'alt condition ... else ... end',
          example: `    alt Success
        S-->>A: Success response
    else Failure
        S-->>A: Error response
    end`,
        },
        {
          command: 'Activation with Plus',
          description: 'Show activation with plus notation',
          usage: 'A->>+B: Message',
          example: `# Activation:
\`\`\`mermaid
sequenceDiagram
    participant A as Alice
    participant B as Bob
    
    A->>+B: Request
    B-->>-A: Response
\`\`\``,
        },
        {
          command: 'Manual Activation',
          description: 'Manually control activation',
          usage: 'activate/deactivate',
          example: `    A->>B: Another request
    activate B
    B-->>A: Another response
    deactivate B`,
        },
      ],
    },
    {
      title: 'Class Diagrams',
      commands: [
        {
          command: 'Basic Class Definition',
          description: 'Define basic class structure',
          usage: 'class ClassName { properties methods }',
          example: `# Basic class:
\`\`\`mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound()
        +eat()
    }
\`\`\``,
        },
        {
          command: 'Multiple Classes',
          description: 'Define multiple classes',
          usage: 'Multiple class definitions',
          example: `    class Dog {
        +String breed
        +bark()
        +wagTail()
    }`,
        },
        {
          command: 'Inheritance Relationship',
          description: 'Define inheritance relationship',
          usage: 'Parent <|-- Child',
          example: `# Relationships:
\`\`\`mermaid
classDiagram
    class Animal {
        +makeSound()
    }
    
    class Dog {
        +bark()
    }
    
    Animal <|-- Dog : Inheritance
\`\`\``,
        },
        {
          command: 'Composition Relationship',
          description: 'Define composition relationship',
          usage: 'Owner "1" -- "0..*" Part',
          example: `    Person "1" -- "0..*" Dog : owns`,
        },
        {
          command: 'Public Access Modifier',
          description: 'Define public member',
          usage: '+ public member',
          example: `# Access modifiers:
\`\`\`mermaid
classDiagram
    class BankAccount {
        +deposit(amount)
        +withdraw(amount)
    }
\`\`\``,
        },
        {
          command: 'Private Access Modifier',
          description: 'Define private member',
          usage: '- private member',
          example: `    -String accountNumber
    -double balance`,
        },
        {
          command: 'Protected Access Modifier',
          description: 'Define protected member',
          usage: '# protected member',
          example: `    #String accountType
    #getAccountType()`,
        },
        {
          command: 'Abstract Class',
          description: 'Define abstract class',
          usage: '<<abstract>> class',
          example: `# Abstract and interface:
\`\`\`mermaid
classDiagram
    class Shape {
        <<abstract>>
        +area()
        +perimeter()
    }
\`\`\``,
        },
        {
          command: 'Interface Definition',
          description: 'Define interface',
          usage: '<<interface>> class',
          example: `    class Drawable {
        <<interface>>
        +draw()
    }`,
        },
        {
          command: 'Interface Implementation',
          description: 'Implement interface',
          usage: 'Interface <|.. Class',
          example: `    Drawable <|.. Circle`,
        },
      ],
    },
    {
      title: 'State Diagrams',
      commands: [
        {
          command: 'Basic State Diagram',
          description: 'Create simple state machine',
          usage: 'stateDiagram-v2 with states',
          example: `# Basic state diagram:
\`\`\`mermaid
stateDiagram-v2
    [*] --> Still
    Still --> Moving: Accelerate
    Moving --> Still: Brake
    Moving --> Crash: Collision
    Crash --> Still: Repair
    Still --> [*]
\`\`\``,
        },
        {
          command: 'Composite State',
          description: 'Create nested state structure',
          usage: 'state ParentState { ... }',
          example: `# Composite states:
\`\`\`mermaid
stateDiagram-v2
    [*] --> Active
    
    state Active {
        [*] --> Idle
        Idle --> Processing: Start
        Processing --> Idle: Complete
    }
    
    Active --> Inactive: Sleep
    Inactive --> Active: Wake
    Inactive --> [*]
\`\`\``,
        },
        {
          command: 'Choice State',
          description: 'Add decision point in state diagram',
          usage: 'choice state with transitions',
          example: `# Choice state:
\`\`\`mermaid
stateDiagram-v2
    [*] --> Processing
    Processing --> Choice: Evaluate
    
    state Choice <<choice>>
    Choice --> Success: Pass
    Choice --> Error: Fail
    
    Success --> [*]
    Error --> [*]
\`\`\``,
        },
      ],
    },
    {
      title: 'Entity Relationship Diagrams',
      commands: [
        {
          command: 'Basic ER Diagram',
          description: 'Create basic entity relationship diagram',
          usage: 'erDiagram with entities',
          example: `# Basic ER diagram:
\`\`\`mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    PRODUCT ||--o{ LINE-ITEM : "ordered in"
\`\`\``,
        },
        {
          command: 'Entity Definition',
          description: 'Define entity with attributes',
          usage: 'ENTITY { attributes }',
          example: `    CUSTOMER {
        int id PK
        string name
        string email
    }`,
        },
        {
          command: 'One to Many Relationship',
          description: 'Define one-to-many relationship',
          usage: '||--o{',
          example: `# Cardinality types:
\`\`\`mermaid
erDiagram
    USER ||--o{ POST : creates
    POST ||--|{ COMMENT : has
\`\`\``,
        },
        {
          command: 'Many to One Relationship',
          description: 'Define many-to-one relationship',
          usage: '}o--||',
          example: `    POST }o--|| CATEGORY : belongs_to`,
        },
        {
          command: 'Foreign Key Definition',
          description: 'Define foreign key in entity',
          usage: 'attribute FK',
          example: `# Advanced ER:
\`\`\`mermaid
erDiagram
    EMPLOYEE {
        int emp_id PK
        string name
        int dept_id FK
        int manager_id FK
    }
\`\`\``,
        },
        {
          command: 'Self Relationship',
          description: 'Define self-referencing relationship',
          usage: 'Entity }o--|| Entity',
          example: `    EMPLOYEE }o--|| EMPLOYEE : "manages"`,
        },
      ],
    },
    {
      title: 'Gantt Charts',
      commands: [
        {
          command: 'Basic Gantt Chart',
          description: 'Create basic project timeline',
          usage: 'gantt with dates and tasks',
          example: `# Basic Gantt:
\`\`\`mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    
    section Phase 1
    Research     :a1, 2024-01-01, 7d
    Planning     :a2, after a1, 5d
\`\`\``,
        },
        {
          command: 'Task Dependencies',
          description: 'Link tasks with dependencies',
          usage: 'after keyword for dependencies',
          example: `# Dependencies:
\`\`\`mermaid
gantt
    title Software Development
    dateFormat  YYYY-MM-DD
    
    section Setup
    Requirements :done, req, 2024-01-01, 5d
    Design       :done, des, after req, 5d
    
    section Development
    Frontend     :active, fe, after des, 10d
    Backend      :be, after des, 12d
\`\`\``,
        },
        {
          command: 'Task Status Markers',
          description: 'Add status markers to tasks',
          usage: 'done, active, crit',
          example: `    Requirements :done, req, 2024-01-01, 5d
    Design       :done, des, after req, 5d
    Frontend     :active, fe, after des, 10d`,
        },
        {
          command: 'Milestone Definition',
          description: 'Define project milestone',
          usage: 'milestone, id, date, 0d',
          example: `# Milestones:
\`\`\`mermaid
gantt
    title Product Launch
    dateFormat  YYYY-MM-DD
    
    section Planning
    Design Complete  :milestone, m1, after req, 0d
    
    section Development
    Release Ready   :milestone, m2, after beta, 0d
\`\`\``,
        },
      ],
    },
    {
      title: 'Pie Charts and Graphs',
      commands: [
        {
          command: 'Basic Pie Chart',
          description: 'Create basic pie chart',
          usage: 'pie title with data',
          example: `# Basic pie chart:
\`\`\`mermaid
pie title Market Share
    "Product A" : 35
    "Product B" : 25
    "Product C" : 20
    "Product D" : 15
    "Others"    : 5
\`\`\``,
        },
        {
          command: 'Show Data Pie Chart',
          description: 'Show data values on pie chart',
          usage: 'pie showData title',
          example: `# Styled pie chart:
\`\`\`mermaid
pie showData
    title Budget Distribution 2024
    "Marketing" : 30
    "Development" : 45
    "Operations" : 15
    "Research" : 10
\`\`\``,
        },
        {
          command: 'Quadrant Chart',
          description: 'Create quadrant analysis chart',
          usage: 'quadrantChart with axes',
          example: `# Quadrant chart:
\`\`\`mermaid
quadrantChart
    title Product Features Analysis
    x-axis "Low Cost" --> "High Cost"
    y-axis "Low Value" --> "High Value"
    quadrant-1 "High Priority"
    quadrant-2 "Strategic"
    quadrant-3 "Basic"
    quadrant-4 "Premium"
    "Feature A": [0.3, 0.8]
    "Feature B": [0.7, 0.6]
\`\`\``,
        },
      ],
    },
    {
      title: 'Advanced Styling and Themes',
      commands: [
        {
          command: 'Theme Initialization',
          description: 'Initialize Mermaid with theme',
          usage: '%%{init: {\'theme\': \'themeName\'}}%%',
          example: `# Theme initialization:
\`\`\`mermaid
%%{init: {\'theme\': \'base\', \'themeVariables\': {\'primaryColor\': \'#ffecb3\'}}}%%
graph TD
    A[Themed Node]
    B[Another Node]
    A --> B
\`\`\``,
        },
        {
          command: 'Available Themes',
          description: 'List of available themes',
          usage: 'Theme names',
          example: `# Available themes:
# base, default, dark, forest, neutral, null`,
        },
        {
          command: 'Custom Theme Variables',
          description: 'Define custom theme variables',
          usage: 'themeVariables object',
          example: `# Custom theme variables:
%%{init: {
    \'theme\': \'base\',
    \'themeVariables\': {
        \'primaryColor\': \'#ffecb3\',
        \'primaryTextColor\': \'#000\',
        \'primaryBorderColor\': \'#000\'
    }
}}%%`,
        },
        {
          command: 'Advanced CSS Styling',
          description: 'Apply complex CSS styling',
          usage: 'Multiple style definitions',
          example: `# Advanced styling:
\`\`\`mermaid
graph TD
    A[Styled Node A]
    B[Styled Node B]
    
    classDef nodeA fill:#f9f,stroke:#333,stroke-width:2px,color:#000
    classDef nodeB fill:#bbf,stroke:#f66,stroke-width:3px,color:#fff
    
    class A nodeA
    class B nodeB
\`\`\``,
        },
        {
          command: 'Link Styling',
          description: 'Style connections between nodes',
          usage: 'linkStyle index properties',
          example: `    linkStyle 0 stroke:#f00,stroke-width:2px
    linkStyle 1 stroke:#0f0,stroke-width:3px
    linkStyle 2 stroke:#00f,stroke-width:4px`,
        },
        {
          command: 'Conditional Styling',
          description: 'Apply styles based on conditions',
          usage: 'Different classes for different states',
          example: `# Conditional styling:
\`\`\`mermaid
graph TD
    A[Start]
    B{Decision}
    C[Success Path]
    D[Error Path]
    
    A --> B
    B -->|Yes| C
    B -->|No| D
    
    classDef success fill:#bfb,stroke:#6f6
    classDef error fill:#fbb,stroke:#f66
    
    class C success
    class D error
\`\`\``,
        },
      ],
    },
    {
      title: 'Advanced Diagram Features',
      commands: [
        {
          command: 'Bold Text in Nodes',
          description: 'Use bold text formatting',
          usage: '**Bold Text**',
          example: `# Markdown in nodes:
\`\`\`mermaid
graph TD
    A["**Bold Text**"]
    B["*Italic Text*"]
    C["\`Code Block\`"]
    
    A --> B
    B --> C
\`\`\``,
        },
        {
          command: 'Italic Text in Nodes',
          description: 'Use italic text formatting',
          usage: '*Italic Text*',
          example: `    B["*Italic Text*"]`,
        },
        {
          command: 'Code Text in Nodes',
          description: 'Use code formatting',
          usage: '`Code Block`',
          example: `    C["\`Code Block\`"]`,
        },
        {
          command: 'Links in Nodes',
          description: 'Add clickable links',
          usage: '[Link](url)',
          example: `    D["[Link](https://example.com)"]`,
        },
        {
          command: 'Line Breaks in Nodes',
          description: 'Add line breaks in node text',
          usage: 'Text<br>More text',
          example: `    E["Line 1<br>Line 2<br>Line 3"]`,
        },
        {
          command: 'Escaped Characters',
          description: 'Escape special characters',
          usage: 'Escaped \\[brackets\\]',
          example: `# Escaped characters:
    F["Escaped \\[brackets\\]"]
    G["Escaped \\"quotes\\""]`,
        },
        {
          command: 'Comments in Diagrams',
          description: 'Add comments to diagrams',
          usage: '%% Comment',
          example: `# Comments:
\`\`\`mermaid
%% This is a comment
%% Multi-line comment

graph TD
    A[Start] %% Inline comment
    B[Process]
    
    A --> B
    %% Another comment
\`\`\``,
        },
        {
          command: 'Unicode Characters',
          description: 'Use Unicode and emojis',
          usage: 'Emoji and special characters',
          example: `# Unicode support:
\`\`\`mermaid
graph TD
    A["🚀 Start"]
    B["⚙️ Process"]
    C["✅ Success"]
    D["❌ Error"]
    
    A --> B
    B --> C
    B --> D
\`\`\``,
        },
        {
          command: 'Math Symbols',
          description: 'Use mathematical symbols',
          usage: 'Greek letters and math',
          example: `    E["Math: α + β = γ"]
    F["Currency: $100, €200, £300"]`,
        },
      ],
    },
    {
      title: 'Integration and Automation',
      commands: [
        {
          command: 'JavaScript Initialization',
          description: 'Initialize Mermaid in JavaScript',
          usage: 'mermaid.initialize()',
          example: `# JavaScript integration:
\`\`\`javascript
// Initialize Mermaid
mermaid.initialize({ 
    startOnLoad: true,
    theme: \'forest\',
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true
    }
});
\`\`\``,
        },
        {
          command: 'Render Diagram from String',
          description: 'Render diagram from string definition',
          usage: 'mermaid.render()',
          example: `// Render diagram from string
const graphDefinition = \'graph TD\\n    A[Start] --> B[End]\';
const element = document.querySelector(\'#diagram\');
mermaid.render(\'diagram-svg\', graphDefinition, element);`,
        },
        {
          command: 'Async Rendering',
          description: 'Render diagrams asynchronously',
          usage: 'mermaid.render() with promises',
          example: `// Async rendering
mermaid.render(\'myDiagram\', graphDefinition).then(svg => {
    document.getElementById(\'container\').innerHTML = svg;
});`,
        },
        {
          command: 'Generate Flowchart from JSON',
          description: 'Convert JSON data to flowchart',
          usage: 'JSON to Mermaid conversion',
          example: `// Generate flowchart from JSON data
function generateFlowchart(data) {
    let mermaidCode = \'graph TD\\n\';
    
    data.nodes.forEach(node => {
        mermaidCode += \`    \${node.id}[\${node.label}]\\n\`;
    });
    
    data.connections.forEach(conn => {
        mermaidCode += \`    \${conn.from} --> \${conn.to}\\n\`;
    });
    
    return mermaidCode;
}`,
        },
        {
          command: 'API Data Structure',
          description: 'Define API data structure',
          usage: 'JSON data format',
          example: `// Usage:
const apiData = {
    nodes: [
        {id: \'A\', label: \'Start\'},
        {id: \'B\', label: \'Process\'}
    ],
    connections: [
        {from: \'A\', to: \'B\'}
    ]
};`,
        },
        {
          command: 'Export to SVG',
          description: 'Export diagram as SVG',
          usage: 'mermaid.render() returns SVG',
          example: `// Export to SVG
const svgCode = await mermaid.render(\'diagram\', mermaidCode);`,
        },
        {
          command: 'Export to PNG',
          description: 'Export diagram as PNG image',
          usage: 'Canvas conversion method',
          example: `// Export to PNG (using canvas)
function exportToPNG(svgElement, filename) {
    const canvas = document.createElement(\'canvas\');
    const ctx = canvas.getContext(\'2d\');
    const svgData = new XMLSerializer().serializeToString(svgElement);
    
    const img = new Image();
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const link = document.createElement(\'a\');
        link.download = filename;
        link.href = canvas.toDataURL();
        link.click();
    };
    
    img.src = \'data:image/svg+xml;base64,\' + btoa(svgData);
}`,
        },
      ],
    },
    {
      title: 'Performance and Best Practices',
      commands: [
        {
          command: 'Use Subgraphs for Organization',
          description: 'Organize complex diagrams with subgraphs',
          usage: 'subgraph for structure',
          example: `# Performance tips:
\`\`\`mermaid
%% Use subgraphs to organize complex diagrams
%% Limit nodes per diagram (< 1000 recommended)

graph TD
    subgraph "Module A"
        A1[Node 1]
        A2[Node 2]
    end
    
    subgraph "Module B"
        B1[Node 1]
        B2[Node 2]
    end
    
    A1 --> B1
    A2 --> B2
\`\`\``,
        },
        {
          command: 'Efficient Styling with Classes',
          description: 'Use CSS classes for efficient styling',
          usage: 'classDef for multiple nodes',
          example: `    classDef moduleNode fill:#f9f,stroke:#333
    class A1,A2,A3,B1,B2,B3 moduleNode`,
        },
        {
          command: 'Lazy Loading Diagrams',
          description: 'Implement lazy loading for performance',
          usage: 'Intersection Observer API',
          example: `// Lazy loading diagrams
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            renderDiagram(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(\'.mermaid\').forEach(el => {
    observer.observe(el);
});`,
        },
        {
          command: 'System Architecture Pattern',
          description: 'Standard system architecture template',
          usage: 'Reusable architecture pattern',
          example: `# System architecture pattern:
\`\`\`mermaid
graph TB
    subgraph "Frontend"
        UI[User Interface]
        SPA[Single Page App]
    end
    
    subgraph "Backend"
        API[REST API]
        AUTH[Authentication]
        DB[(Database)]
    end
    
    UI --> SPA
    SPA --> API
    API --> AUTH
    API --> DB
\`\`\``,
        },
        {
          command: 'CI/CD Pipeline Pattern',
          description: 'Standard CI/CD pipeline template',
          usage: 'Reusable pipeline pattern',
          example: `# CI/CD pipeline pattern:
\`\`\`mermaid
graph LR
    DEV[Development] --> BUILD[Build]
    BUILD --> TEST[Testing]
    TEST --> STAGE[Staging]
    STAGE --> PROD[Production]
    
    PROD --> MONITOR[Monitoring]
    MONITOR --> DEV
\`\`\``,
        },
        {
          command: 'Debug Mode',
          description: 'Enable debug mode for troubleshooting',
          usage: 'logLevel configuration',
          example: `# Debug syntax:
\`\`\`mermaid
%% Enable debug mode
%%{init: {\'logLevel\': 1}}%%

graph TD
    A[Test Node]
    B[Debug Node]
    A --> B
\`\`\``,
        },
        {
          command: 'Common Issues Solutions',
          description: 'Solutions to common Mermaid problems',
          usage: 'Troubleshooting guide',
          example: `# Common issues and solutions:

# 1. Diagram not rendering
# - Check syntax errors
# - Verify mermaid.init() called
# - Check console for errors

# 2. Styling not applying
# - Verify CSS class names
# - Check theme initialization
# - Use style keyword for individual nodes`,
        },
      ],
    },
    {
      title: 'Modern Mermaid Features (2024+)',
      commands: [
        {
          command: 'Journey Diagram',
          description: 'Create user journey diagrams',
          usage: 'journey with sections',
          example: `# Journey diagram:
\`\`\`mermaid
journey
    title User Journey
    section Onboarding
      Register: 5: User
      Login: 3: User
      Dashboard: 4: User
    section Daily Use
      View Reports: 5: User
      Export Data: 3: User
\`\`\``,
        },
        {
          command: 'Requirement Diagram',
          description: 'Create requirement diagrams',
          usage: 'requirementDiagram syntax',
          example: `# Requirement diagram:
\`\`\`mermaid
requirementDiagram
    requirement test_req {
        id: 1
        text: the test text.
        risk: high
        verifyMethod: test
    }
    
    element test_elem {
        type: simulation
        docRef: test_req
    }
    
    test_elem - satisfies -> test_req
\`\`\``,
        },
        {
          command: 'Git Graph Diagram',
          description: 'Create Git repository graphs',
          usage: 'gitGraph syntax',
          example: `# Git graph:
\`\`\`mermaid
gitGraph
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    branch feature
    checkout feature
    commit
    checkout main
    merge feature
\`\`\``,
        },
        {
          command: 'Click Actions',
          description: 'Add click actions to nodes',
          usage: 'click nodeId "javascript" "tooltip"',
          example: `# Click actions:
\`\`\`mermaid
graph TD
    A[Click me]
    B[Clicked!]
    
    A --> B
    
    click A "alert(\'Node A clicked!\')" "Click me"
    click B "window.open(\'https://example.com\')" "Open Link"
\`\`\``,
        },
        {
          command: 'Click Callback Functions',
          description: 'Define custom click handlers',
          usage: 'mermaid.initialize with click callback',
          example: `# Callback functions:
\`\`\`javascript
mermaid.initialize({
    click: function(nodeId) {
        console.log(\'Clicked:\', nodeId);
        // Custom click handling
    }
});
\`\`\``,
        },
        {
          command: 'AI Diagram Generation',
          description: 'AI-powered diagram generation',
          usage: 'Natural language to Mermaid',
          example: `# AI diagram generation (experimental):
# Natural language to Mermaid
# "Show a flowchart of user registration process"
# → Generates Mermaid code

# AI assistance features:
# - Auto-completion of diagram syntax
# - Smart layout suggestions
# - Automatic styling recommendations`,
        },
        {
          command: 'GitHub Copilot Integration',
          description: 'Use GitHub Copilot with Mermaid',
          usage: 'AI-assisted diagram creation',
          example: `# Integration with AI tools:
# GitHub Copilot with Mermaid
# ChatGPT + Mermaid export
# Custom AI diagram generators`,
        },
      ],
    },
    {
      title: 'Real-World Examples',
      commands: [
        {
          command: 'Microservices Architecture',
          description: 'Complete microservices system diagram',
          usage: 'Enterprise architecture pattern',
          example: `# Microservices architecture:
\`\`\`mermaid
graph TB
    subgraph "Client Layer"
        WEB[Web App]
        MOBILE[Mobile App]
    end
    
    subgraph "API Gateway"
        GATEWAY[API Gateway]
    end
    
    subgraph "Microservices"
        AUTH[Auth Service]
        USER[User Service]
        ORDER[Order Service]
        PAYMENT[Payment Service]
        NOTIFICATION[Notification Service]
    end
    
    subgraph "Data Layer"
        USER_DB[(User DB)]
        ORDER_DB[(Order DB)]
        PAYMENT_DB[(Payment DB)]
        CACHE[(Redis Cache)]
    end
    
    WEB --> GATEWAY
    MOBILE --> GATEWAY
    
    GATEWAY --> AUTH
    GATEWAY --> USER
    GATEWAY --> ORDER
    GATEWAY --> PAYMENT
    GATEWAY --> NOTIFICATION
    
    AUTH --> USER_DB
    USER --> USER_DB
    ORDER --> ORDER_DB
    PAYMENT --> PAYMENT_DB
    
    USER --> CACHE
    ORDER --> CACHE
\`\`\``,
        },
        {
          command: 'E-commerce Class Diagram',
          description: 'Complete e-commerce class structure',
          usage: 'Business domain modeling',
          example: `# Class diagram for e-commerce:
\`\`\`mermaid
classDiagram
    class User {
        +int id
        +string name
        +string email
        +register()
        +login()
        +logout()
    }
    
    class Product {
        +int id
        +string name
        +decimal price
        +getDetails()
        +updatePrice()
    }
    
    class Order {
        +int id
        +date orderDate
        +decimal total
        +addItem()
        +removeItem()
        +calculateTotal()
    }
    
    class OrderItem {
        +int quantity
        +decimal unitPrice
        +getSubtotal()
    }
    
    User "1" -- "0..*" Order : places
    Order "1" -- "1..*" OrderItem : contains
    Product "1" -- "0..*" OrderItem : "ordered in"
\`\`\``,
        },
        {
          command: 'Order Processing Workflow',
          description: 'Complete business process flow',
          usage: 'Business process modeling',
          example: `# Order processing workflow:
\`\`\`mermaid
flowchart TD
    START([Start]) --> CHECK{Check Inventory}
    
    CHECK -->|Available| RESERVE[Reserve Items]
    CHECK -->|Out of Stock| BACKORDER[Create Backorder]
    
    RESERVE --> PAYMENT{Payment Valid?}
    PAYMENT -->|Valid| PROCESS[Process Order]
    PAYMENT -->|Invalid| FAIL[Payment Failed]
    
    BACKORDER --> NOTIFY[Notify Customer]
    PROCESS --> SHIP[Ship Order]
    NOTIFY --> WAIT[Wait for Stock]
    
    SHIP --> TRACK[Track Delivery]
    WAIT --> CHECK
    FAIL --> RETRY{Retry Payment?}
    
    RETRY -->|Yes| PAYMENT
    RETRY -->|No| CANCEL[Cancel Order]
    
    TRACK --> COMPLETE([Order Complete])
    CANCEL --> END([End])
    COMPLETE --> END
\`\`\``,
        },
        {
          command: 'Website Development Gantt',
          description: 'Complete project management timeline',
          usage: 'Project planning and tracking',
          example: `# Project management Gantt:
\`\`\`mermaid
gantt
    title Website Development Project
    dateFormat  YYYY-MM-DD
    
    section Planning
    Requirements     :done, req, 2024-01-01, 5d
    Design           :done, design, after req, 7d
    Design Review    :milestone, m1, after design, 0d
    
    section Development
    Frontend Dev     :active, fe, after design, 14d
    Backend Dev      :be, after design, 18d
    Database Setup   :db, after design, 5d
    
    section Testing
    Unit Testing     :ut, after fe, 7d
    Integration Test :it, after be, 5d
    UAT              :uat, after it, 7d
    
    section Deployment
    Staging Deploy   :staging, after uat, 3d
    Production Deploy:prod, after staging, 2d
    Launch           :milestone, m2, after prod, 0d
\`\`\``,
        },
        {
          command: 'ETL Data Pipeline',
          description: 'Complete data processing flow',
          usage: 'Data engineering architecture',
          example: `# ETL Data Pipeline:
\`\`\`mermaid
flowchart LR
    subgraph "Data Sources"
        API1[REST API 1]
        API2[REST API 2]
        DB1[(Database 1)]
        FILES[CSV Files]
    end
    
    subgraph "Extraction"
        EXTRACT[Data Extraction Service]
    end
    
    subgraph "Transformation"
        CLEAN[Data Cleaning]
        VALIDATE[Data Validation]
        ENRICH[Data Enrichment]
        AGGREGATE[Aggregation]
    end
    
    subgraph "Loading"
        DATAWARE[(Data Warehouse)]
        DATALAKE[(Data Lake)]
    end
    
    API1 --> EXTRACT
    API2 --> EXTRACT
    DB1 --> EXTRACT
    FILES --> EXTRACT
    
    EXTRACT --> CLEAN
    CLEAN --> VALIDATE
    VALIDATE --> ENRICH
    ENRICH --> AGGREGATE
    
    AGGREGATE --> DATAWARE
    AGGREGATE --> DATALAKE
\`\`\``,
        },
        {
          command: 'Website Conversion Funnel',
          description: 'Marketing analytics pie chart',
          usage: 'Conversion tracking visualization',
          example: `# User Analytics Funnel:
\`\`\`mermaid
pie title Website Conversion Funnel
    "Visitors" : 10000
    "Sign-ups" : 2500
    "Active Users" : 1500
    "Paying Customers" : 300
    "Premium Users" : 75
\`\`\``,
        },
        {
          command: 'Feature Performance Quadrant',
          description: 'Feature analysis quadrant chart',
          usage: 'Product prioritization matrix',
          example: `# Performance Metrics Quadrant:
\`\`\`mermaid
quadrantChart
    title Feature Performance Analysis
    x-axis "Low Impact" --> "High Impact"
    y-axis "Low Effort" --> "High Effort"
    quadrant-1 "Quick Wins"
    quadrant-2 "Major Projects"
    quadrant-3 "Fill-ins"
    quadrant-4 "Thankless Tasks"
    "Bug Fixes" : [0.2, 0.3]
    "New Features" : [0.8, 0.7]
    "Documentation" : [0.3, 0.2]
    "Refactoring" : [0.6, 0.8]
\`\`\``,
        },
      ],
    },
  ],
};
