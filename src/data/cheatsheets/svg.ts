import { Code } from 'lucide-react';

export const svgCheatsheet = {
  id: 'svg',
  name: 'SVG',
  description: 'Master SVG graphics from basics to advanced features',
  icon: Code,
  colorTheme: 'orange' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with SVG',
      commands: [
        {
          command: 'What is SVG?',
          description: 'Understanding Scalable Vector Graphics',
          usage: 'SVG is XML-based vector image format',
          example: `SVG Overview:
- Scalable Vector Graphics
- XML-based markup language
- Resolution-independent graphics
- Supports interactivity and animation
- Can be styled with CSS
- Scriptable with JavaScript
- Text-based and searchable
- Compresses well
- Widely supported by browsers
- Perfect for icons, charts, illustrations

Key Benefits:
- Infinite scalability
- Small file sizes
- Accessibility support
- SEO friendly
- Animation capabilities
- Interactive elements
- Style customization
- Print quality

Common Uses:
- Icons and logos
- Data visualizations
- Illustrations
- Animations
- UI components
- Charts and graphs
- Interactive graphics`
        },
        {
          command: 'SVG Document Structure',
          description: 'Basic SVG document structure',
          usage: 'Create proper SVG documents',
          example: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="200" 
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 200 200">
  
  <!-- SVG content goes here -->
  
</svg>

<!-- HTML5 inline SVG -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="red" />
</svg>

<!-- SVG with title and description -->
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <title>Example SVG</title>
  <desc>This is an example SVG graphic</desc>
  
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>

<!-- SVG with external CSS -->
<?xml-stylesheet type="text/css" href="styles.css"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="50" class="my-circle" />
</svg>`
        },
        {
          command: 'SVG Coordinate System',
          description: 'Understanding SVG coordinates and units',
          usage: 'Work with SVG coordinate system',
          example: `<!-- SVG coordinate system -->
<svg width="400" height="300" viewBox="0 0 400 300">
  <!-- Origin (0,0) is top-left -->
  <circle cx="0" cy="0" r="5" fill="red" />      <!-- Top-left corner -->
  <circle cx="400" cy="0" r="5" fill="green" />   <!-- Top-right corner -->
  <circle cx="0" cy="300" r="5" fill="blue" />   <!-- Bottom-left corner -->
  <circle cx="400" cy="300" r="5" fill="yellow" /> <!-- Bottom-right corner -->
  <circle cx="200" cy="150" r="5" fill="purple" /> <!-- Center -->
</svg>

<!-- Different units -->
<svg width="100mm" height="100mm">
  <rect x="10mm" y="10mm" width="80mm" height="80mm" fill="lightblue" />
</svg>

<!-- Percentage units -->
<svg width="200" height="200">
  <rect x="10%" y="10%" width="80%" height="80%" fill="lightgreen" />
</svg>

<!-- ViewBox for scaling -->
<svg width="200" height="200" viewBox="0 0 100 100">
  <!-- This circle will appear larger due to viewBox scaling -->
  <circle cx="50" cy="50" r="40" fill="orange" />
</svg>`
        },
      ],
    },
    {
      title: 'Basic SVG Shapes',
      commands: [
        {
          command: 'Rectangle',
          description: 'Create rectangles and squares',
          usage: '<rect x="" y="" width="" height="" />',
          example: `<!-- Basic rectangle -->
<rect x="10" y="10" width="100" height="50" fill="blue" />

<!-- Square -->
<rect x="10" y="70" width="50" height="50" fill="red" />

<!-- Rounded corners -->
<rect x="70" y="70" width="80" height="50" 
      rx="10" ry="10" fill="green" />

<!-- Different corner radii -->
<rect x="10" y="130" width="100" height="60" 
      rx="20" ry="10" fill="purple" />

<!-- Stroked rectangle -->
<rect x="120" y="130" width="80" height="60" 
      fill="none" stroke="black" stroke-width="2" />

<!-- Complex rectangle -->
<rect x="10" y="200" width="150" height="80"
      rx="15" ry="15"
      fill="lightblue"
      stroke="darkblue"
      stroke-width="3"
      stroke-dasharray="5,5"
      opacity="0.8" />`
        },
        {
          command: 'Circle',
          description: 'Create perfect circles',
          usage: '<circle cx="" cy="" r="" />',
          example: `<!-- Basic circle -->
<circle cx="50" cy="50" r="40" fill="red" />

<!-- Different sized circles -->
<circle cx="150" cy="50" r="30" fill="blue" />
<circle cx="250" cy="50" r="20" fill="green" />

<!-- Stroked circle -->
<circle cx="50" cy="150" r="40" 
        fill="none" stroke="black" stroke-width="2" />

<!-- Circle with gradient -->
<defs>
  <radialGradient id="grad1">
    <stop offset="0%" stop-color="yellow" />
    <stop offset="100%" stop-color="orange" />
  </radialGradient>
</defs>
<circle cx="150" cy="150" r="40" fill="url(#grad1)" />

<!-- Semi-transparent circle -->
<circle cx="250" cy="150" r="40" 
        fill="purple" opacity="0.5" />

<!-- Circle with shadow effect -->
<circle cx="50" cy="250" r="40" 
        fill="darkblue" 
        filter="url(#shadow)" />`
        },
        {
          command: 'Ellipse',
          description: 'Create ovals and ellipses',
          usage: '<ellipse cx="" cy="" rx="" ry="" />',
          example: `<!-- Basic ellipse -->
<ellipse cx="100" cy="50" rx="80" ry="30" fill="blue" />

<!-- Vertical ellipse -->
<ellipse cx="250" cy="50" rx="30" ry="50" fill="green" />

<!-- Different proportions -->
<ellipse cx="100" cy="150" rx="60" ry="20" fill="red" />
<ellipse cx="250" cy="150" rx="40" ry="40" fill="purple" />

<!-- Stroked ellipse -->
<ellipse cx="100" cy="250" rx="70" ry="30" 
         fill="none" stroke="black" stroke-width="2" />

<!-- Filled and stroked -->
<ellipse cx="250" cy="250" rx="60" ry="25" 
         fill="lightblue" stroke="darkblue" stroke-width="3" />

<!-- Rotated ellipse -->
<ellipse cx="100" cy="350" rx="50" ry="20" 
         fill="orange" transform="rotate(45 100 350)" />`
        },
        {
          command: 'Line',
          description: 'Create straight lines',
          usage: '<line x1="" y1="" x2="" y2="" />',
          example: `<!-- Basic line -->
<line x1="10" y1="10" x2="100" y2="100" 
      stroke="black" stroke-width="2" />

<!-- Horizontal line -->
<line x1="10" y1="50" x2="200" y2="50" 
      stroke="red" stroke-width="3" />

<!-- Vertical line -->
<line x1="50" y1="10" x2="50" y2="100" 
      stroke="blue" stroke-width="4" />

<!-- Diagonal lines -->
<line x1="10" y1="10" x2="150" y2="80" 
      stroke="green" stroke-width="2" />
<line x1="150" y1="10" x2="10" y2="80" 
      stroke="purple" stroke-width="2" />

<!-- Dashed line -->
<line x1="10" y1="120" x2="200" y2="120" 
      stroke="orange" stroke-width="3" 
      stroke-dasharray="10,5" />

<!-- Dotted line -->
<line x1="10" y1="150" x2="200" y2="150" 
      stroke="darkblue" stroke-width="2" 
      stroke-dasharray="2,4" />

<!-- Line with opacity -->
<line x1="10" y1="180" x2="200" y2="180" 
      stroke="red" stroke-width="5" opacity="0.5" />`
        },
      ],
    },
    {
      title: 'Advanced Shapes',
      commands: [
        {
          command: 'Polygon',
          description: 'Create closed shapes with multiple sides',
          usage: '<polygon points="" />',
          example: `<!-- Triangle -->
<polygon points="50,10 90,90 10,90" fill="red" />

<!-- Square -->
<polygon points="10,10 90,10 90,90 10,90" fill="blue" />

<!-- Pentagon -->
<polygon points="50,10 90,35 75,80 25,80 10,35" fill="green" />

<!-- Hexagon -->
<polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="purple" />

<!-- Star -->
<polygon points="50,10 61,35 88,35 66,52 77,78 50,60 23,78 34,52 12,35 39,35" 
         fill="yellow" stroke="orange" stroke-width="2" />

<!-- Complex shape -->
<polygon points="50,10 90,25 90,75 50,90 10,75 10,25" 
         fill="lightblue" stroke="darkblue" stroke-width="2" 
         stroke-dasharray="5,3" opacity="0.8" />`
        },
        {
          command: 'Polyline',
          description: 'Create open shapes with multiple points',
          usage: '<polyline points="" />',
          example: `<!-- Simple polyline -->
<polyline points="10,10 50,50 90,10 130,50 170,10" 
          fill="none" stroke="red" stroke-width="2" />

<!-- Filled polyline -->
<polyline points="10,50 50,10 90,50 130,10 170,50" 
          fill="lightblue" stroke="blue" stroke-width="2" />

<!-- Zigzag pattern -->
<polyline points="10,50 30,10 50,50 70,10 90,50 110,10 130,50" 
          fill="none" stroke="green" stroke-width="3" />

<!-- Wave pattern -->
<polyline points="10,50 25,30 40,70 55,30 70,70 85,30 100,50" 
          fill="none" stroke="purple" stroke-width="2" />

<!-- Mountain range -->
<polyline points="0,100 50,50 100,80 150,30 200,60 250,40 300,100" 
          fill="none" stroke="brown" stroke-width="3" />

<!-- Complex pattern -->
<polyline points="10,10 40,40 70,20 100,50 130,30 160,60 190,40" 
          fill="none" stroke="orange" stroke-width="2" 
          stroke-dasharray="5,5" />`
        },
        {
          command: 'Path',
          description: 'Create complex shapes with path commands',
          usage: '<path d="" />',
          example: `<!-- Basic path with line commands -->
<path d="M 10 10 L 100 10 L 100 100 L 10 100 Z" 
      fill="lightblue" stroke="blue" stroke-width="2" />

<!-- Curved path -->
<path d="M 10 50 Q 50 10 90 50" 
      fill="none" stroke="red" stroke-width="2" />

<!-- Complex path -->
<path d="M 10 10 
         L 50 10 
         Q 90 10 90 50 
         L 90 90 
         Q 90 130 50 130 
         L 10 130 
         Z" 
      fill="lightgreen" stroke="green" stroke-width="2" />

<!-- Bezier curves -->
<path d="M 10 50 C 20 10, 80 10, 90 50" 
      fill="none" stroke="purple" stroke-width="2" />

<!-- Smooth curve -->
<path d="M 10 50 S 50 10 90 50 S 130 90 170 50" 
      fill="none" stroke="orange" stroke-width="2" />

<!-- Arc command -->
<path d="M 10 50 A 40 40 0 0 1 90 50" 
      fill="none" stroke="darkblue" stroke-width="2" />`
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Text in SVG',
      commands: [
        {
          command: 'Basic Text',
          description: 'Add text to SVG graphics',
          usage: '<text x="" y="">Text</text>',
          example: `<!-- Simple text -->
<text x="50" y="50">Hello SVG!</text>

<!-- Positioned text -->
<text x="10" y="30">Top left</text>
<text x="200" y="30">Top right</text>
<text x="10" y="100">Bottom left</text>

<!-- Styled text -->
<text x="50" y="150" 
      font-family="Arial" 
      font-size="24" 
      fill="blue">Styled Text</text>

<!-- Bold and italic -->
<text x="50" y="200" 
      font-weight="bold" 
      font-style="italic"
      fill="red">Bold Italic</text>

<!-- Text with stroke -->
<text x="50" y="250" 
      font-size="32"
      fill="yellow" 
      stroke="black" 
      stroke-width="1">Outlined Text</text>`
        },
        {
          command: 'Text Alignment',
          description: 'Control text positioning and alignment',
          usage: 'text-anchor, alignment-baseline attributes',
          example: `<!-- Text anchor positions -->
<text x="100" y="30" text-anchor="start">Start</text>
<text x="100" y="60" text-anchor="middle">Middle</text>
<text x="100" y="90" text-anchor="end">End</text>

<!-- Baseline alignment -->
<text x="50" y="50" alignment-baseline="auto">Auto</text>
<text x="150" y="50" alignment-baseline="middle">Middle</text>
<text x="250" y="50" alignment-baseline="hanging">Hanging</text>

<!-- Multiple lines with tspan -->
<text x="50" y="150">
  <tspan x="50" dy="0">First line</tspan>
  <tspan x="50" dy="1.2em">Second line</tspan>
  <tspan x="50" dy="1.2em">Third line</tspan>
</text>

<!-- Styled tspan -->
<text x="50" y="250">
  Normal 
  <tspan font-weight="bold">Bold</tspan> and 
  <tspan fill="red">Red</tspan> text
</text>`
        },
        {
          command: 'Text on Path',
          description: 'Place text along a path',
          usage: '<textPath> element',
          example: `<!-- Define path -->
<defs>
  <path id="myPath" d="M 50 100 Q 150 50 250 100" />
</defs>

<!-- Text on path -->
<text>
  <textPath href="#myPath">Text following a curved path</textPath>
</text>

<!-- Start offset -->
<text>
  <textPath href="#myPath" startOffset="25%">Start at 25%</textPath>
</text>

<!-- Circular text -->
<defs>
  <path id="circle" d="M 100 50 A 50 50 0 0 1 100 150 A 50 50 0 0 1 100 50" />
</defs>

<text>
  <textPath href="#circle">Circular text around a circle</textPath>
</text>

<!-- Multiple text paths -->
<defs>
  <path id="wave" d="M 0 50 Q 25 25 50 50 T 100 50 T 150 50 T 200 50" />
</defs>

<text font-size="14">
  <textPath href="#wave">Wavy text following the path</textPath>
</text>`
        },
      ],
    },
    {
      title: 'Gradients and Patterns',
      commands: [
        {
          command: 'Linear Gradient',
          description: 'Create linear color gradients',
          usage: '<linearGradient> element',
          example: `<!-- Linear gradient definition -->
<defs>
  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="red" />
    <stop offset="50%" stop-color="yellow" />
    <stop offset="100%" stop-color="green" />
  </linearGradient>
  
  <!-- Vertical gradient -->
  <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="blue" />
    <stop offset="100%" stop-color="purple" />
  </linearGradient>
  
  <!-- Diagonal gradient -->
  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="orange" />
    <stop offset="100%" stop-color="darkred" />
  </linearGradient>
</defs>

<!-- Apply gradients -->
<rect x="10" y="10" width="180" height="50" fill="url(#grad1)" />
<rect x="10" y="70" width="180" height="50" fill="url(#grad2)" />
<rect x="10" y="130" width="180" height="50" fill="url(#grad3)" />`
        },
        {
          command: 'Radial Gradient',
          description: 'Create radial color gradients',
          usage: '<radialGradient> element',
          example: `<!-- Radial gradient definition -->
<defs>
  <!-- Basic radial gradient -->
  <radialGradient id="radial1">
    <stop offset="0%" stop-color="white" />
    <stop offset="100%" stop-color="blue" />
  </radialGradient>
  
  <!-- Centered radial gradient -->
  <radialGradient id="radial2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="yellow" />
    <stop offset="50%" stop-color="orange" />
    <stop offset="100%" stop-color="red" />
  </radialGradient>
  
  <!-- Offset center -->
  <radialGradient id="radial3" cx="30%" cy="30%" r="70%">
    <stop offset="0%" stop-color="lightgreen" />
    <stop offset="100%" stop-color="darkgreen" />
  </radialGradient>
</defs>

<!-- Apply radial gradients -->
<circle cx="100" cy="100" r="80" fill="url(#radial1)" />
<circle cx="300" cy="100" r="80" fill="url(#radial2)" />
<circle cx="500" cy="100" r="80" fill="url(#radial3)" />`
        },
        {
          command: 'Patterns',
          description: 'Create repeating patterns',
          usage: '<pattern> element',
          example: `<!-- Pattern definitions -->
<defs>
  <!-- Dot pattern -->
  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="3" fill="red" />
  </pattern>
  
  <!-- Stripe pattern -->
  <pattern id="stripes" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
    <rect x="0" y="0" width="5" height="10" fill="blue" />
  </pattern>
  
  <!-- Grid pattern -->
  <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    <rect x="0" y="0" width="20" height="20" fill="none" stroke="gray" stroke-width="1" />
  </pattern>
  
  <!-- Complex pattern -->
  <pattern id="complex" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
    <rect x="0" y="0" width="40" height="40" fill="lightblue" />
    <circle cx="20" cy="20" r="10" fill="darkblue" />
  </pattern>
</defs>

<!-- Apply patterns -->
<rect x="10" y="10" width="150" height="100" fill="url(#dots)" />
<rect x="170" y="10" width="150" height="100" fill="url(#stripes)" />
<rect x="10" y="120" width="150" height="100" fill="url(#grid)" />
<rect x="170" y="120" width="150" height="100" fill="url(#complex)" />`
        },
      ],
    },
    {
      title: 'Transformations',
      commands: [
        {
          command: 'Translation',
          description: 'Move elements in SVG',
          usage: 'transform="translate(x, y)"',
          example: `<!-- Original shape -->
<rect x="0" y="0" width="50" height="50" fill="lightblue" />

<!-- Translated shapes -->
<rect x="0" y="0" width="50" height="50" fill="blue" 
      transform="translate(60, 0)" />

<rect x="0" y="0" width="50" height="50" fill="red" 
      transform="translate(120, 0)" />

<rect x="0" y="0" width="50" height="50" fill="green" 
      transform="translate(60, 60)" />

<rect x="0" y="0" width="50" height="50" fill="purple" 
      transform="translate(120, 60)" />

<!-- Negative translation -->
<rect x="100" y="100" width="50" height="50" fill="orange" 
      transform="translate(-30, -30)" />`
        },
        {
          command: 'Rotation',
          description: 'Rotate elements around a point',
          usage: 'transform="rotate(angle, cx, cy)"',
          example: `<!-- Original rectangle -->
<rect x="75" y="75" width="50" height="20" fill="blue" />

<!-- Rotated rectangles -->
<rect x="75" y="75" width="50" height="20" fill="red" 
      transform="rotate(45, 100, 85)" />

<rect x="75" y="75" width="50" height="20" fill="green" 
      transform="rotate(90, 100, 85)" />

<rect x="75" y="75" width="50" height="20" fill="purple" 
      transform="rotate(135, 100, 85)" />

<rect x="75" y="75" width="50" height="20" fill="orange" 
      transform="rotate(180, 100, 85)" />

<!-- Rotation around origin -->
<rect x="75" y="75" width="50" height="20" fill="pink" 
      transform="rotate(45)" />`
        },
        {
          command: 'Scaling',
          description: 'Scale elements up or down',
          usage: 'transform="scale(sx, sy)"',
          example: `<!-- Original circle -->
<circle cx="100" cy="100" r="20" fill="blue" />

<!-- Scaled circles -->
<circle cx="100" cy="100" r="20" fill="red" 
        transform="scale(1.5)" />

<circle cx="100" cy="100" r="20" fill="green" 
        transform="scale(2)" />

<circle cx="100" cy="100" r="20" fill="purple" 
        transform="scale(0.5)" />

<!-- Non-uniform scaling -->
<circle cx="100" cy="100" r="20" fill="orange" 
        transform="scale(2, 0.5)" />

<circle cx="100" cy="100" r="20" fill="pink" 
        transform="scale(0.5, 2)" />`
        },
        {
          command: 'Multiple Transforms',
          description: 'Combine multiple transformations',
          usage: 'transform="translate() rotate() scale()"',
          example: `<!-- Combined transformations -->
<rect x="0" y="0" width="40" height="20" fill="blue" 
      transform="translate(50, 50) rotate(45)" />

<rect x="0" y="0" width="40" height="20" fill="red" 
      transform="rotate(45) translate(50, 50)" />

<rect x="0" y="0" width="40" height="20" fill="green" 
      transform="translate(100, 50) scale(1.5) rotate(30)" />

<rect x="0" y="0" width="40" height="20" fill="purple" 
      transform="scale(2) rotate(45) translate(20, 20)" />

<!-- Complex transformation -->
<g transform="translate(150, 100)">
  <rect x="-20" y="-10" width="40" height="20" fill="orange" 
        transform="rotate(45) scale(1.2)" />
</g>

<!-- Transformation matrix -->
<rect x="0" y="0" width="40" height="20" fill="pink" 
      transform="matrix(1, 0.5, -0.5, 1, 50, 50)" />`
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'SVG Animation',
      commands: [
        {
          command: 'Animate Element',
          description: 'Animate SVG attributes',
          usage: '<animate> element',
          example: `<!-- Animate color -->
<circle cx="50" cy="50" r="20" fill="blue">
  <animate attributeName="fill" 
           values="blue;red;green;blue" 
           dur="4s" 
           repeatCount="indefinite" />
</circle>

<!-- Animate position -->
<rect x="10" y="10" width="30" height="30" fill="red">
  <animate attributeName="x" 
           values="10;100;10" 
           dur="3s" 
           repeatCount="indefinite" />
</rect>

<!-- Animate size -->
<circle cx="200" cy="50" r="10" fill="green">
  <animate attributeName="r" 
           values="10;30;10" 
           dur="2s" 
           repeatCount="indefinite" />
</circle>

<!-- Animate opacity -->
<rect x="50" y="100" width="50" height="50" fill="purple">
  <animate attributeName="opacity" 
           values="1;0.2;1" 
           dur="2s" 
           repeatCount="indefinite" />
</circle>`
        },
        {
          command: 'Animate Transform',
          description: 'Animate transformations',
          usage: '<animateTransform> element',
          example: `<!-- Rotation animation -->
<rect x="45" y="45" width="10" height="10" fill="blue">
  <animateTransform attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="3s"
                    repeatCount="indefinite" />
</rect>

<!-- Scale animation -->
<circle cx="150" cy="50" r="20" fill="red">
  <animateTransform attributeName="transform"
                    type="scale"
                    values="1;1.5;1"
                    dur="2s"
                    repeatCount="indefinite" />
</circle>

<!-- Translation animation -->
<rect x="0" y="100" width="30" height="30" fill="green">
  <animateTransform attributeName="transform"
                    type="translate"
                    values="0,0; 100,0; 0,0"
                    dur="4s"
                    repeatCount="indefinite" />
</rect>

<!-- Complex transform animation -->
<g transform="translate(250, 50)">
  <rect x="-15" y="-15" width="30" height="30" fill="purple">
    <animateTransform attributeName="transform"
                      type="rotate"
                      values="0;360"
                      dur="3s"
                      repeatCount="indefinite" />
    <animateTransform attributeName="transform"
                      type="scale"
                      values="1;1.5;1"
                      dur="1.5s"
                      repeatCount="indefinite"
                      additive="sum" />
  </rect>
</g>`
        },
        {
          command: 'Motion Path',
          description: 'Animate along a path',
          usage: '<animateMotion> element',
          example: `<!-- Define motion path -->
<defs>
  <path id="motionPath" d="M 50 50 Q 150 20 250 50" />
</defs>

<!-- Show path -->
<path d="M 50 50 Q 150 20 250 50" 
      fill="none" stroke="gray" stroke-width="2" stroke-dasharray="5,5" />

<!-- Circle following path -->
<circle r="10" fill="red">
  <animateMotion dur="3s" repeatCount="indefinite">
    <mpath href="#motionPath" />
  </animateMotion>
</circle>

<!-- Rectangle with rotation -->
<rect x="-10" y="-5" width="20" height="10" fill="blue">
  <animateMotion dur="4s" repeatCount="indefinite"
                rotate="auto">
    <mpath href="#motionPath" />
  </animateMotion>
</rect>

<!-- Multiple objects on same path -->
<circle r="5" fill="green">
  <animateMotion dur="3s" repeatCount="indefinite"
                begin="1s">
    <mpath href="#motionPath" />
  </animateMotion>
</circle>

<circle r="5" fill="purple">
  <animateMotion dur="3s" repeatCount="indefinite"
                begin="2s">
    <mpath href="#motionPath" />
  </animateMotion>
</circle>`
        },
      ],
    },
    {
      title: 'Filters and Effects',
      commands: [
        {
          command: 'Gaussian Blur',
          description: 'Apply blur effects',
          usage: '<feGaussianBlur> filter',
          example: `<!-- Blur filter definition -->
<defs>
  <filter id="blur1">
    <feGaussianBlur stdDeviation="2" />
  </filter>
  
  <filter id="blur2">
    <feGaussianBlur stdDeviation="5" />
  </filter>
  
  <filter id="blur3">
    <feGaussianBlur stdDeviation="10" />
  </filter>
</defs>

<!-- Apply blur filters -->
<rect x="10" y="10" width="80" height="50" fill="blue" />
<rect x="100" y="10" width="80" height="50" fill="blue" filter="url(#blur1)" />
<rect x="190" y="10" width="80" height="50" fill="blue" filter="url(#blur2)" />
<rect x="280" y="10" width="80" height="50" fill="blue" filter="url(#blur3)" />

<!-- Blur with text -->
<text x="50" y="100" font-size="24" fill="red">Sharp</text>
<text x="150" y="100" font-size="24" fill="red" filter="url(#blur1)">Blurry</text>
<text x="250" y="100" font-size="24" fill="red" filter="url(#blur2)">Very Blurry</text>`
        },
        {
          command: 'Drop Shadow',
          description: 'Create shadow effects',
          usage: '<feDropShadow> filter',
          example: `<!-- Drop shadow filters -->
<defs>
  <filter id="shadow1">
    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.5" />
  </filter>
  
  <filter id="shadow2">
    <feDropShadow dx="4" dy="4" stdDeviation="3" flood-opacity="0.3" />
  </filter>
  
  <filter id="shadow3">
    <feDropShadow dx="6" dy="6" stdDeviation="4" flood-opacity="0.4" flood-color="red" />
  </filter>
</defs>

<!-- Apply shadow filters -->
<rect x="10" y="10" width="80" height="50" fill="blue" />
<rect x="100" y="10" width="80" height="50" fill="blue" filter="url(#shadow1)" />
<rect x="190" y="10" width="80" height="50" fill="blue" filter="url(#shadow2)" />
<rect x="280" y="10" width="80" height="50" fill="blue" filter="url(#shadow3)" />

<!-- Shadow on text -->
<text x="50" y="100" font-size="32" fill="darkblue" filter="url(#shadow1)">Shadow Text</text>
<text x="250" y="100" font-size="32" fill="darkgreen" filter="url(#shadow2)">Green Shadow</text>`
        },
        {
          command: 'Complex Filters',
          description: 'Combine multiple filter effects',
          usage: 'Multiple filter primitives',
          example: `<!-- Complex filter combinations -->
<defs>
  <!-- Glow effect -->
  <filter id="glow">
    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
    <feMerge>
      <feMergeNode in="coloredBlur"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
  
  <!-- Emboss effect -->
  <filter id="emboss">
    <feConvolveMatrix kernelMatrix="3 0 0 0 0 0 0 0 -3" />
  </filter>
  
  <!-- Color manipulation -->
  <filter id="colorize">
    <feColorMatrix type="saturate" values="0"/>
    <feColorMatrix type="matrix" 
                   values="0 0 0 0 0.5
                           0 0 0 0 0.3
                           0 0 0 0 0.8
                           0 0 0 1 0"/>
  </filter>
  
  <!-- Distortion effect -->
  <filter id="distort">
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" />
  </filter>
</defs>

<!-- Apply complex filters -->
<text x="100" y="50" font-size="36" fill="yellow" filter="url(#glow)">Glow Effect</text>
<text x="100" y="100" font-size="36" fill="blue" filter="url(#emboss)">Emboss Effect</text>
<text x="100" y="150" font-size="36" fill="red" filter="url(#colorize)">Colorized</text>
<text x="100" y="200" font-size="36" fill="green" filter="url(#distort)">Distorted</text>`
        },
      ],
    },
    {
      title: 'SVG with JavaScript',
      commands: [
        {
          command: 'DOM Manipulation',
          description: 'Manipulate SVG with JavaScript',
          usage: 'JavaScript SVG DOM methods',
          example: `// Create SVG element
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '400');
svg.setAttribute('height', '300');
document.body.appendChild(svg);

// Create shapes
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', '200');
circle.setAttribute('cy', '150');
circle.setAttribute('r', '50');
circle.setAttribute('fill', 'blue');
svg.appendChild(circle);

// Create rectangle
const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rect.setAttribute('x', '50');
rect.setAttribute('y', '50');
rect.setAttribute('width', '100');
rect.setAttribute('height', '60');
rect.setAttribute('fill', 'red');
svg.appendChild(rect);

// Create text
const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '200');
text.setAttribute('y', '250');
text.setAttribute('text-anchor', 'middle');
text.textContent = 'Dynamic SVG';
svg.appendChild(text);

// Modify existing elements
circle.setAttribute('fill', 'green');
circle.setAttribute('r', '60');`
        },
        {
          command: 'Event Handling',
          description: 'Handle events on SVG elements',
          usage: 'JavaScript event listeners',
          example: `// Add click event to SVG elements
const circles = document.querySelectorAll('circle');
circles.forEach(circle => {
  circle.addEventListener('click', function() {
    this.setAttribute('fill', 'red');
  });
  
  circle.addEventListener('mouseover', function() {
    this.setAttribute('r', '60');
  });
  
  circle.addEventListener('mouseout', function() {
    this.setAttribute('r', '50');
  });
});

// Drag and drop
let isDragging = false;
let currentElement = null;

svg.addEventListener('mousedown', function(e) {
  if (e.target.tagName === 'circle' || e.target.tagName === 'rect') {
    isDragging = true;
    currentElement = e.target;
  }
});

svg.addEventListener('mousemove', function(e) {
  if (isDragging && currentElement) {
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
    
    if (currentElement.tagName === 'circle') {
      currentElement.setAttribute('cx', svgP.x);
      currentElement.setAttribute('cy', svgP.y);
    } else if (currentElement.tagName === 'rect') {
      currentElement.setAttribute('x', svgP.x - 25);
      currentElement.setAttribute('y', svgP.y - 15);
    }
  }
});

svg.addEventListener('mouseup', function() {
  isDragging = false;
  currentElement = null;
});`
        },
        {
          command: 'Dynamic Data Visualization',
          description: 'Create dynamic charts with JavaScript',
          usage: 'JavaScript for data-driven SVG',
          example: `// Dynamic bar chart
function createBarChart(data, container) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '500');
  svg.setAttribute('height', '300');
  
  const maxValue = Math.max(...data.map(d => d.value));
  const barWidth = 400 / data.length;
  
  data.forEach((item, index) => {
    const barHeight = (item.value / maxValue) * 250;
    const x = 50 + index * barWidth;
    const y = 250 - barHeight;
    
    // Create bar
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', barWidth - 10);
    rect.setAttribute('height', barHeight);
    rect.setAttribute('fill', item.color || 'steelblue');
    rect.setAttribute('class', 'bar');
    
    // Add animation
    rect.style.animation = \`growBar 1s ease-out \${index * 0.1}s both\`;
    
    // Add label
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x + barWidth / 2);
    text.setAttribute('y', 270);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', '12');
    text.textContent = item.label;
    
    svg.appendChild(rect);
    svg.appendChild(text);
  });
  
  container.appendChild(svg);
}

// Sample data
const chartData = [
  { label: 'Jan', value: 65, color: '#ff6384' },
  { label: 'Feb', value: 45, color: '#36a2eb' },
  { label: 'Mar', value: 80, color: '#ffce56' },
  { label: 'Apr', value: 55, color: '#4bc0c0' },
  { label: 'May', value: 70, color: '#9966ff' }
];

// Create chart
createBarChart(chartData, document.getElementById('chart-container'));

// Add CSS animation
const style = document.createElement('style');
style.textContent = \`
  @keyframes growBar {
    from {
      transform: scaleY(0);
      transform-origin: bottom;
    }
    to {
      transform: scaleY(1);
      transform-origin: bottom;
    }
  }
\`;
document.head.appendChild(style);`
        },
      ],
    },
    {
      title: 'Modern SVG Features',
      commands: [
        {
          command: 'SVG 2.0 Features',
          description: 'Latest SVG specification features',
          usage: 'Modern SVG capabilities',
          example: `<!-- SVG 2.0 length units -->
<svg width="10cm" height="5cm" viewBox="0 0 100 50">
  <rect x="1cm" y="1cm" width="8cm" height="3cm" fill="lightblue" />
  <text x="5cm" y="3cm" text-anchor="middle" font-size="0.5cm">SVG 2.0</text>
</svg>

<!-- SVG 2.0 text wrapping -->
<svg width="300" height="200">
  <foreignObject x="10" y="10" width="280" height="180">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Arial;">
      <p>This text wraps automatically using SVG 2.0 features. 
         It supports HTML content within SVG foreign objects.</p>
    </div>
  </foreignObject>
</svg>

<!-- CSS variables in SVG -->
<svg width="200" height="200" style="--main-color: #3498db; --secondary-color: #e74c3c;">
  <defs>
    <style>
      .shape { fill: var(--main-color); transition: fill 0.3s; }
      .shape:hover { fill: var(--secondary-color); }
    </style>
  </defs>
  <rect x="50" y="50" width="100" height="100" class="shape" rx="10" />
</svg>

<!-- SVG 2.0 mesh gradients (experimental) -->
<svg width="200" height="200">
  <defs>
    <meshgradient id="mesh1" x="0" y="0" width="200" height="200">
      <meshrow>
        <meshpatch>
          <stop path="L 0,0" stop-color="red" />
          <stop path="L 200,0" stop-color="yellow" />
          <stop path="L 200,200" stop-color="green" />
          <stop path="L 0,200" stop-color="blue" />
        </meshpatch>
      </meshrow>
    </meshgradient>
  </defs>
  <rect width="200" height="200" fill="url(#mesh1)" />
</svg>`
        },
        {
          command: 'SVG with CSS Grid/Flexbox',
          description: 'Integrate SVG with modern CSS layouts',
          usage: 'CSS Grid and Flexbox with SVG',
          example: `<!-- CSS Grid layout with SVG -->
<style>
.svg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.svg-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.svg-card svg {
  width: 100%;
  height: auto;
  max-height: 150px;
}
</style>

<div class="svg-grid">
  <div class="svg-card">
    <h3>Circle</h3>
    <svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="#3498db" />
    </svg>
  </div>
  
  <div class="svg-card">
    <h3>Square</h3>
    <svg viewBox="0 0 100 100">
      <rect x="10" y="10" width="80" height="80" fill="#e74c3c" />
    </svg>
  </div>
  
  <div class="svg-card">
    <h3>Triangle</h3>
    <svg viewBox="0 0 100 100">
      <polygon points="50,10 90,90 10,90" fill="#2ecc71" />
    </svg>
  </div>
</div>

<!-- Flexbox layout with SVG -->
<style>
.svg-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
}

.svg-flex svg {
  flex: 1;
  max-width: 200px;
  margin: 0 10px;
}
</style>

<div class="svg-flex">
  <svg viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="30" fill="#9b59b6" />
  </svg>
  
  <svg viewBox="0 0 100 100">
    <rect x="20" y="20" width="60" height="60" fill="#f39c12" rx="5" />
  </svg>
  
  <svg viewBox="0 0 100 100">
    <polygon points="50,15 85,85 15,85" fill="#1abc9c" />
  </svg>
</div>`
        },
        {
          command: 'SVG and Web Components',
          description: 'Create reusable SVG web components',
          usage: 'Custom elements with SVG',
          example: `// Custom SVG icon component
class SVGIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    const type = this.getAttribute('type') || 'circle';
    const color = this.getAttribute('color') || '#3498db';
    const size = this.getAttribute('size') || '50';
    
    const svg = this.createSVG(type, color, size);
    this.shadowRoot.appendChild(svg);
  }
  
  createSVG(type, color, size) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('viewBox', '0 0 100 100');
    
    switch(type) {
      case 'circle':
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '50');
        circle.setAttribute('cy', '50');
        circle.setAttribute('r', '40');
        circle.setAttribute('fill', color);
        svg.appendChild(circle);
        break;
        
      case 'square':
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', '10');
        rect.setAttribute('y', '10');
        rect.setAttribute('width', '80');
        rect.setAttribute('height', '80');
        rect.setAttribute('fill', color);
        svg.appendChild(rect);
        break;
        
      case 'star':
        const star = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        star.setAttribute('points', '50,10 61,35 88,35 66,52 77,78 50,60 23,78 34,52 12,35 39,35');
        star.setAttribute('fill', color);
        svg.appendChild(star);
        break;
    }
    
    return svg;
  }
}

// Register the custom element
customElements.define('svg-icon', SVGIcon);

// Usage in HTML
// <svg-icon type="circle" color="#3498db" size="100"></svg-icon>
// <svg-icon type="square" color="#e74c3c" size="80"></svg-icon>
// <svg-icon type="star" color="#f39c12" size="120"></svg-icon>`
        },
      ],
    },
    {
      title: 'SVG Best Practices',
      commands: [
        {
          command: 'Performance Optimization',
          description: 'Optimize SVG for performance',
          usage: 'Best practices for SVG performance',
          example: `<!-- Use viewBox instead of width/height when possible -->
<!-- Good: Responsive with viewBox -->
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>

<!-- Avoid: Fixed dimensions -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>

<!-- Use symbols for reusable elements -->
<defs>
  <symbol id="icon-star" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </symbol>
</defs>

<!-- Use the symbol -->
<svg width="24" height="24">
  <use href="#icon-star" fill="gold"/>
</svg>

<!-- Optimize paths -->
<!-- Instead of multiple small paths, combine when possible -->
<!-- Good: Single path -->
<path d="M10,10 L90,10 L90,90 L10,90 Z" />

<!-- Instead of: -->
<line x1="10" y1="10" x2="90" y2="10" />
<line x1="90" y1="10" x2="90" y2="90" />
<line x1="90" y1="90" x2="10" y2="90" />
<line x1="10" y1="90" x2="10" y2="10" />

<!-- Use relative coordinates in paths when appropriate -->
<path d="M10,10 l80,0 l0,80 l-80,0 z" />`
        },
        {
          command: 'Accessibility',
          description: 'Make SVG accessible',
          usage: 'ARIA and accessibility features',
          example: `<!-- Add titles and descriptions -->
<svg role="img" aria-labelledby="title desc" width="200" height="200">
  <title id="title">Blue Circle</title>
  <desc id="desc">A blue circle with a 40 pixel radius centered in a 200x200 SVG</desc>
  <circle cx="100" cy="100" r="40" fill="blue" />
</svg>

<!-- Use ARIA labels -->
<svg aria-label="Chart showing sales data" role="img" width="400" height="300">
  <!-- Chart content -->
</svg>

<!-- Add focus indicators for interactive SVG -->
<svg tabindex="0" role="button" aria-label="Click to animate">
  <style>
    svg:focus {
      outline: 2px solid #0066cc;
      outline-offset: 2px;
    }
  </style>
  <circle cx="50" cy="50" r="30" fill="green" />
</svg>

<!-- Provide text alternatives -->
<svg aria-hidden="true" focusable="false">
  <!-- Decorative SVG -->
  <circle cx="50" cy="50" r="30" fill="purple" />
</svg>

<!-- Use semantic markup -->
<figure>
  <svg role="img" aria-labelledby="chart-title" width="400" height="300">
    <title id="chart-title">Monthly Sales Chart</title>
    <!-- Chart content -->
  </svg>
  <figcaption>Bar chart showing monthly sales data for Q1 2023</figcaption>
</figure>`
        },
        {
          command: 'SVG Optimization Tools',
          description: 'Tools and techniques for SVG optimization',
          usage: 'Manual and automated optimization',
          example: `<!-- Manual optimization techniques -->
<!-- 1. Remove unnecessary attributes -->
<!-- Before: -->
<rect x="10" y="10" width="50" height="30" fill="blue" stroke="black" stroke-width="0" stroke="none" />

<!-- After: -->
<rect x="10" y="10" width="50" height="30" fill="blue" />

<!-- 2. Use short attribute names -->
<!-- Before: -->
<linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">

<!-- After: -->
<linearGradient id="g" x1="0" y1="0" x2="100" y2="0">

<!-- 3. Optimize decimal precision -->
<!-- Before: -->
<circle cx="50.123456" cy="75.987654" r="33.333333" fill="red" />

<!-- After: -->
<circle cx="50.12" cy="75.99" r="33.33" fill="red" />

<!-- 4. Remove default values -->
<!-- Before: -->
<rect x="10" y="10" width="50" height="30" fill="blue" fill-opacity="1" stroke="none" />

<!-- After: -->
<rect x="10" y="10" width="50" height="30" fill="blue" />

<!-- 5. Use compression-friendly formatting -->
<!-- Minified SVG for production -->
<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="blue"/></svg>

<!-- Optimization tools -->
<!-- 1. SVGO - Node.js tool -->
<!-- npm install -g svgo -->
<!-- svgo input.svg -o output.svg -->

<!-- 2. SVGOMG - Online optimizer -->
<!-- https://jakearchibald.github.io/svgomg/ -->

<!-- 3. Adobe Illustrator SVG export settings -->
<!-- - Optimize for web -->
<!-- - Responsive checked -->
<!-- - Minify JavaScript -->

<!-- 4. Inkscape save as optimized SVG -->
<!-- File -> Save As -> Optimized SVG -->`
        },
      ],
    },
  ],
};
