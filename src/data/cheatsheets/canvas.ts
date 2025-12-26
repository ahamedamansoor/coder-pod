import { Code } from 'lucide-react';

export const canvasCheatsheet = {
  id: 'canvas',
  name: 'Canvas',
  description: 'Master HTML5 Canvas from basics to advanced features',
  icon: Code,
  colorTheme: 'orange' as const,
  category: 'web-development',
  tags: ['canvas', 'html5', 'graphics', 'animation', 'web', 'javascript'],
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Canvas',
      commands: [
        {
          command: 'Canvas Overview',
          description: 'Understanding Canvas API and capabilities',
          usage: 'Canvas is HTML5 element for drawing graphics',
          example: `Canvas Overview:
- HTML5 element for 2D/3D graphics
- JavaScript-based drawing API
- Pixel-based rendering system
- Real-time graphics and animations
- Image manipulation and processing
- Game development platform
- Data visualization
- Photo editing capabilities
- Interactive graphics
- Cross-browser support`,
        },
        {
          command: 'Canvas Key Features',
          description: 'Main features of Canvas API',
          usage: 'Core capabilities of Canvas',
          example: `Key Features:
- 2D drawing context
- WebGL for 3D graphics
- Path drawing and shapes
- Text rendering
- Image manipulation
- Animation support
- Event handling
- Performance optimized`,
        },
        {
          command: 'Canvas Common Uses',
          description: 'Typical applications of Canvas',
          usage: 'Popular use cases',
          example: `Common Uses:
- Games and interactive media
- Data visualizations
- Image editors
- Drawing applications
- Charts and graphs
- Photo filters
- Real-time visualizations
- Creative coding`,
        },
        {
          command: 'Canvas HTML Element',
          description: 'Add canvas to HTML',
          usage: 'HTML canvas element',
          example: `<!-- HTML -->
<canvas id="myCanvas" width="500" height="400"></canvas>`,
        },
        {
          command: 'Get Canvas Context',
          description: 'Get 2D drawing context',
          usage: 'getContext() method',
          example: `<!-- JavaScript -->
<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');`,
        },
        {
          command: 'Canvas Support Check',
          description: 'Check if canvas is supported',
          usage: 'Test context availability',
          example: `// Check if canvas is supported
if (ctx) {
  console.log('Canvas is supported!');
} else {
  console.log('Canvas is not supported');
}
</script>`,
        },
        {
          command: 'Canvas Coordinate System',
          description: 'Understanding canvas coordinate system',
          usage: 'Canvas uses Cartesian coordinate system',
          example: `Canvas Coordinate System:
- Origin (0,0) is at top-left corner
- X increases to the right
- Y increases downward
- Width and height define canvas dimensions`,
        },
        {
          command: 'Canvas Dimensions',
          description: 'Set canvas dimensions',
          usage: 'canvas.width and canvas.height',
          example: `const canvas = document.getElementById('myCanvas');
canvas.width = 500;  // Canvas width in pixels
canvas.height = 400; // Canvas height in pixels`,
        },
        {
          command: 'Drawing at Coordinates',
          description: 'Draw at specific coordinates',
          usage: 'Use x, y coordinates',
          example: `// Drawing at specific coordinates
ctx.fillRect(10, 20, 100, 50); // x=10, y=20, width=100, height=50`,
        },
        {
          command: 'Canvas Center Point',
          description: 'Calculate canvas center',
          usage: 'width/2 and height/2',
          example: `// Center point
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;`,
        },
        {
          command: 'Canvas Setup Complete',
          description: 'Complete canvas setup example',
          usage: 'Full setup with context and dimensions',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 400;`,
        },
        {
          command: 'Draw Filled Rectangle',
          description: 'Draw filled rectangle',
          usage: 'fillRect() method',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 50);`,
        },
        {
          command: 'Draw Stroked Rectangle',
          description: 'Draw rectangle outline',
          usage: 'strokeRect() method',
          example: `// Draw stroked rectangle
ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;
ctx.strokeRect(10, 70, 100, 50);`,
        },
        {
          command: 'Draw Line',
          description: 'Draw straight line',
          usage: 'moveTo() and lineTo()',
          example: `// Draw line
ctx.beginPath();
ctx.moveTo(150, 10);
ctx.lineTo(250, 60);
ctx.stroke();`,
        },
        {
          command: 'Draw Circle',
          description: 'Draw filled circle',
          usage: 'arc() method with fill',
          example: `// Draw circle
ctx.beginPath();
ctx.arc(200, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = 'green';
ctx.fill();`,
        },
        {
          command: 'Solid Color Fill',
          description: 'Apply solid color fill',
          usage: 'fillStyle with hex color',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Solid colors
ctx.fillStyle = '#FF0000'; // Red
ctx.fillRect(10, 10, 50, 50);`,
        },
        {
          command: 'RGB Color Stroke',
          description: 'Apply RGB color stroke',
          usage: 'strokeStyle with rgb()',
          example: `ctx.strokeStyle = 'rgb(0, 0, 255)'; // Blue
ctx.strokeRect(70, 10, 50, 50);`,
        },
        {
          command: 'Linear Gradient Setup',
          description: 'Create linear gradient',
          usage: 'createLinearGradient()',
          example: `// Linear gradient
const gradient = ctx.createLinearGradient(0, 0, 200, 0);`,
        },
        {
          command: 'Linear Gradient Colors',
          description: 'Add color stops to gradient',
          usage: 'addColorStop() method',
          example: `gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');`,
        },
        {
          command: 'Apply Linear Gradient',
          description: 'Apply linear gradient to shape',
          usage: 'fillStyle with gradient',
          example: `ctx.fillStyle = gradient;
ctx.fillRect(10, 70, 200, 50);`,
        },
        {
          command: 'Radial Gradient Setup',
          description: 'Create radial gradient',
          usage: 'createRadialGradient()',
          example: `// Radial gradient
const radialGradient = ctx.createRadialGradient(100, 180, 10, 100, 180, 50);`,
        },
        {
          command: 'Radial Gradient Colors',
          description: 'Add colors to radial gradient',
          usage: 'addColorStop() for radial gradient',
          example: `radialGradient.addColorStop(0, 'yellow');
radialGradient.addColorStop(1, 'orange');`,
        },
        {
          command: 'Apply Radial Gradient',
          description: 'Apply radial gradient to shape',
          usage: 'fillStyle with radial gradient',
          example: `ctx.fillStyle = radialGradient;
ctx.fillRect(50, 130, 100, 100);`,
        },
      ],
    },
    {
      title: 'Drawing Shapes',
      commands: [
        {
          command: 'Filled Rectangle',
          description: 'Draw filled rectangle',
          usage: 'fillRect(x, y, width, height)',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Filled rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 50);`,
        },
        {
          command: 'Stroked Rectangle',
          description: 'Draw rectangle outline',
          usage: 'strokeRect(x, y, width, height)',
          example: `// Stroked rectangle
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.strokeRect(10, 70, 100, 50);`,
        },
        {
          command: 'Clear Rectangle',
          description: 'Clear rectangular area',
          usage: 'clearRect(x, y, width, height)',
          example: `// Clear rectangle (transparent)
ctx.clearRect(20, 20, 80, 30);`,
        },
        {
          command: 'Rectangle with Fill and Stroke',
          description: 'Rectangle with both fill and stroke',
          usage: 'fillRect() and strokeRect()',
          example: `// Rectangle with both fill and stroke
ctx.fillStyle = 'green';
ctx.fillRect(150, 10, 100, 50);
ctx.strokeStyle = 'black';
ctx.strokeRect(150, 10, 100, 50);`,
        },
        {
          command: 'Rectangle Path Method',
          description: 'Use rect() method for rectangle',
          usage: 'rect() with fill() and stroke()',
          example: `// Using rect() method
ctx.beginPath();
ctx.rect(150, 70, 100, 50);
ctx.fillStyle = 'purple';
ctx.fill();
ctx.stroke();`,
        },
        {
          command: 'Full Circle',
          description: 'Draw complete circle',
          usage: 'arc() with full rotation',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Full circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();`,
        },
        {
          command: 'Half Circle',
          description: 'Draw semi-circle',
          usage: 'arc() with half rotation',
          example: `// Half circle (semi-circle)
ctx.beginPath();
ctx.arc(250, 100, 50, 0, Math.PI);
ctx.fillStyle = 'blue';
ctx.fill();`,
        },
        {
          command: 'Quarter Circle',
          description: 'Draw quarter circle',
          usage: 'arc() with quarter rotation',
          example: `// Quarter circle
ctx.beginPath();
ctx.arc(100, 200, 50, 0, Math.PI / 2);
ctx.fillStyle = 'green';
ctx.fill();`,
        },
        {
          command: 'Arc with Stroke',
          description: 'Draw arc with stroke only',
          usage: 'arc() with stroke()',
          example: `// Arc with stroke
ctx.beginPath();
ctx.arc(250, 200, 50, 0, Math.PI * 1.5);
ctx.strokeStyle = 'purple';
ctx.lineWidth = 3;
ctx.stroke();`,
        },
        {
          command: 'Rounded Corner with ArcTo',
          description: 'Create rounded corners with arcTo',
          usage: 'arcTo() for rounded corners',
          example: `// Using arcTo for rounded corners
ctx.beginPath();
ctx.moveTo(50, 300);`,
        },
        {
          command: 'Multiple ArcTo Corners',
          description: 'Complete rounded rectangle with arcTo',
          usage: 'Multiple arcTo() calls',
          example: `ctx.arcTo(150, 300, 150, 350, 50);
ctx.arcTo(150, 350, 50, 350, 50);
ctx.arcTo(50, 350, 50, 300, 50);
ctx.closePath();
ctx.stroke();`,
        },
        {
          command: 'Simple Line',
          description: 'Draw single line',
          usage: 'moveTo() and lineTo()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Simple line
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(100, 50);
ctx.stroke();`,
        },
        {
          command: 'Connected Lines',
          description: 'Draw connected line segments',
          usage: 'Multiple lineTo() calls',
          example: `// Connected lines
ctx.beginPath();
ctx.moveTo(10, 70);
ctx.lineTo(50, 120);
ctx.lineTo(90, 70);
ctx.lineTo(130, 120);
ctx.stroke();`,
        },
        {
          command: 'Closed Path',
          description: 'Draw closed path shape',
          usage: 'closePath() method',
          example: `// Closed path
ctx.beginPath();
ctx.moveTo(150, 70);
ctx.lineTo(200, 120);
ctx.lineTo(250, 70);
ctx.closePath();
ctx.stroke();`,
        },
        {
          command: 'Filled Path',
          description: 'Draw filled path shape',
          usage: 'fill() after closePath()',
          example: `// Filled path
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(200, 200);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.fillStyle = 'lightblue';
ctx.fill();`,
        },
        {
          command: 'Complex Shape',
          description: 'Draw complex polygon shape',
          usage: 'Multiple moveTo() and lineTo()',
          example: `// Complex shape
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(350, 50);
ctx.lineTo(400, 100);
ctx.lineTo(380, 150);
ctx.lineTo(320, 150);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();`,
        },
        {
          command: 'Quadratic Curve',
          description: 'Draw quadratic curve',
          usage: 'quadraticCurveTo() method',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Quadratic curve
ctx.beginPath();
ctx.moveTo(10, 100);
ctx.quadraticCurveTo(100, 20, 190, 100);
ctx.stroke();`,
        },
        {
          command: 'Bezier Curve',
          description: 'Draw cubic Bezier curve',
          usage: 'bezierCurveTo() method',
          example: `// Bezier curve
ctx.beginPath();
ctx.moveTo(10, 200);
ctx.bezierCurveTo(50, 150, 150, 250, 190, 200);
ctx.stroke();`,
        },
        {
          command: 'Multiple Quadratic Curves',
          description: 'Connect multiple quadratic curves',
          usage: 'Sequential quadraticCurveTo()',
          example: `// Multiple curves
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.quadraticCurveTo(300, 100, 350, 50);
ctx.quadraticCurveTo(400, 0, 450, 50);
ctx.stroke();`,
        },
        {
          command: 'Multiple Bezier Curves',
          description: 'Connect multiple Bezier curves',
          usage: 'Sequential bezierCurveTo()',
          example: `// Curved path
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.bezierCurveTo(280, 120, 320, 180, 350, 150);
ctx.bezierCurveTo(380, 120, 420, 180, 450, 150);
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.stroke();`,
        },
      ],
    },
    {
      title: 'Text and Typography',
      commands: [
        {
          command: 'Filled Text',
          description: 'Draw filled text',
          usage: 'fillText() method',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Filled text
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello Canvas!', 10, 40);`,
        },
        {
          command: 'Stroked Text',
          description: 'Draw text outline',
          usage: 'strokeText() method',
          example: `// Stroked text
ctx.font = '30px Arial';
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.strokeText('Hello Canvas!', 10, 80);`,
        },
        {
          command: 'Text with Fill and Stroke',
          description: 'Text with both fill and stroke',
          usage: 'fillText() and strokeText()',
          example: `// Both fill and stroke
ctx.font = 'bold 30px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('Bold Text', 10, 120);
ctx.strokeStyle = 'darkblue';
ctx.strokeText('Bold Text', 10, 120);`,
        },
        {
          command: 'Center Aligned Text',
          description: 'Center align text',
          usage: 'textAlign = "center"',
          example: `// Text alignment
ctx.font = '20px Arial';
ctx.textAlign = 'center';
ctx.fillText('Centered', 200, 160);`,
        },
        {
          command: 'Right Aligned Text',
          description: 'Right align text',
          usage: 'textAlign = "right"',
          example: `ctx.textAlign = 'right';
ctx.fillText('Right', 380, 160);`,
        },
        {
          command: 'Left Aligned Text',
          description: 'Left align text',
          usage: 'textAlign = "left"',
          example: `ctx.textAlign = 'left';
ctx.fillText('Left', 20, 160);`,
        },
        {
          command: 'Italic Bold Font',
          description: 'Set italic bold font',
          usage: 'font property with style',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Font properties
ctx.font = 'italic bold 24px Georgia';
ctx.fillText('Italic Bold Georgia', 10, 40);`,
        },
        {
          command: 'Arial Font',
          description: 'Use Arial font',
          usage: 'font with Arial family',
          example: `// Different fonts
ctx.font = '20px Arial';
ctx.fillText('Arial Font', 10, 80);`,
        },
        {
          command: 'Times New Roman Font',
          description: 'Use Times New Roman font',
          usage: 'font with Times family',
          example: `ctx.font = '20px Times New Roman';
ctx.fillText('Times Font', 10, 110);`,
        },
        {
          command: 'Courier Font',
          description: 'Use Courier font',
          usage: 'font with Courier family',
          example: `ctx.font = '20px Courier';
ctx.fillText('Courier Font', 10, 140);`,
        },
        {
          command: 'Top Text Baseline',
          description: 'Align text to top',
          usage: 'textBaseline = "top"',
          example: `// Text baseline
ctx.font = '16px Arial';
ctx.textBaseline = 'top';
ctx.fillText('Top', 200, 50);`,
        },
        {
          command: 'Middle Text Baseline',
          description: 'Align text to middle',
          usage: 'textBaseline = "middle"',
          example: `ctx.textBaseline = 'middle';
ctx.fillText('Middle', 200, 80);`,
        },
        {
          command: 'Bottom Text Baseline',
          description: 'Align text to bottom',
          usage: 'textBaseline = "bottom"',
          example: `ctx.textBaseline = 'bottom';
ctx.fillText('Bottom', 200, 110);`,
        },
        {
          command: 'Alphabetic Text Baseline',
          description: 'Align text alphabetic',
          usage: 'textBaseline = "alphabetic"',
          example: `ctx.textBaseline = 'alphabetic';
ctx.fillText('Alphabetic', 200, 140);`,
        },
        {
          command: 'Measure Text Width',
          description: 'Get text width measurement',
          usage: 'measureText() method',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const text = 'Hello World!';
ctx.font = '24px Arial';

// Measure text
const metrics = ctx.measureText(text);
console.log('Width:', metrics.width);`,
        },
        {
          command: 'Center Text Using Measurement',
          description: 'Center text using width measurement',
          usage: 'Calculate center position',
          example: `// Center text using measurement
const x = (canvas.width - metrics.width) / 2;
ctx.fillText(text, x, 50);`,
        },
        {
          command: 'Text Bounding Box',
          description: 'Draw text bounding box',
          usage: 'Approximate text dimensions',
          example: `// Text bounding box approximation
const height = 24; // Approximate height
ctx.strokeStyle = 'red';
ctx.strokeRect(x, 26, metrics.width, height);`,
        },
        {
          command: 'Multiple Text Measurements',
          description: 'Measure multiple text strings',
          usage: 'Loop through text array',
          example: `// Multiple text measurements
const texts = ['Short', 'Medium Length', 'Very Long Text'];
let yPos = 100;

texts.forEach(t => {
  const metrics = ctx.measureText(t);
  ctx.fillText(t, 10, yPos);
  ctx.fillText(\`Width: \${metrics.width}px\`, 200, yPos);
  yPos += 30;
});`,
        },
      ],
    },
    {
      title: 'Images and Media',
      commands: [
        {
          command: 'Create Image Object',
          description: 'Create new image object',
          usage: 'new Image() constructor',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create image object
const img = new Image();`,
        },
        {
          command: 'Draw Image Original Size',
          description: 'Draw image at original size',
          usage: 'drawImage(img, x, y)',
          example: `img.onload = function() {
  // Draw image at original size
  ctx.drawImage(img, 10, 10);`,
        },
        {
          command: 'Draw Scaled Image',
          description: 'Draw image with scaling',
          usage: 'drawImage(img, x, y, width, height)',
          example: `  // Draw scaled image
  ctx.drawImage(img, 150, 10, 100, 100);`,
        },
        {
          command: 'Draw Cropped Image',
          description: 'Draw cropped portion of image',
          usage: 'drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)',
          example: `  // Draw cropped portion
  ctx.drawImage(img, 
    50, 50, 100, 100,  // Source rectangle
    300, 10, 150, 150  // Destination rectangle
  );
};`,
        },
        {
          command: 'Set Image Source',
          description: 'Set image source URL',
          usage: 'img.src property',
          example: `img.src = 'path/to/image.jpg';`,
        },
        {
          command: 'Video Element Setup',
          description: 'Get video element',
          usage: 'document.getElementById()',
          example: `// Using video element
const video = document.getElementById('myVideo');`,
        },
        {
          command: 'Video Frame Drawing',
          description: 'Draw video frames to canvas',
          usage: 'drawImage() with video',
          example: `video.addEventListener('play', function() {
  function drawFrame() {
    if (!video.paused && !video.ended) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);`,
        },
        {
          command: 'Video Animation Loop',
          description: 'Create video animation loop',
          usage: 'requestAnimationFrame()',
          example: `      requestAnimationFrame(drawFrame);
    }
  }
  drawFrame();
});`,
        },
        {
          command: 'Draw Image for Manipulation',
          description: 'Draw image before manipulation',
          usage: 'drawImage() before pixel operations',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw image first
const img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0);`,
        },
        {
          command: 'Get Image Data',
          description: 'Get pixel data from canvas',
          usage: 'getImageData() method',
          example: `  
  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;`,
        },
        {
          command: 'Invert Colors Filter',
          description: 'Invert image colors',
          usage: 'Pixel manipulation loop',
          example: `  
  // Invert colors
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];       // Red
    data[i + 1] = 255 - data[i + 1]; // Green
    data[i + 2] = 255 - data[i + 2]; // Blue
    // Alpha channel (data[i + 3]) remains unchanged
  }`,
        },
        {
          command: 'Put Image Data',
          description: 'Put modified pixel data back',
          usage: 'putImageData() method',
          example: `  
  // Put modified image data back
  ctx.putImageData(imageData, 0, 0);`,
        },
        {
          command: 'Get Image Portion',
          description: 'Get portion of image data',
          usage: 'getImageData() with dimensions',
          example: `  
  // Get portion of image
  const portion = ctx.getImageData(50, 50, 100, 100);
  ctx.putImageData(portion, 200, 200);
};`,
        },
        {
          command: 'Set Image Source for Manipulation',
          description: 'Set image source for manipulation',
          usage: 'img.src for filter operations',
          example: `img.src = 'path/to/image.jpg';`,
        },
        {
          command: 'Grayscale Filter Setup',
          description: 'Setup for grayscale filter',
          usage: 'Get image data for grayscale',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;`,
        },
        {
          command: 'Grayscale Filter Algorithm',
          description: 'Convert to grayscale',
          usage: 'Weighted color conversion',
          example: `  
  // Grayscale filter
  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    data[i] = gray;     // Red
    data[i + 1] = gray; // Green
    data[i + 2] = gray; // Blue
  }`,
        },
        {
          command: 'Apply Grayscale Filter',
          description: 'Apply grayscale filter to canvas',
          usage: 'putImageData() after grayscale',
          example: `  
  ctx.putImageData(imageData, 0, 0);`,
        },
        {
          command: 'Brightness Adjustment Setup',
          description: 'Setup brightness adjustment',
          usage: 'Brightness variable',
          example: `  
  // Brightness adjustment
  const brightness = 50;`,
        },
        {
          command: 'Brightness Adjustment Algorithm',
          description: 'Adjust image brightness',
          usage: 'Add brightness to RGB values',
          example: `  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.min(255, data[i] + brightness);
    data[i + 1] = Math.min(255, data[i + 1] + brightness);
    data[i + 2] = Math.min(255, data[i + 2] + brightness);
  }`,
        },
        {
          command: 'Contrast Adjustment Setup',
          description: 'Setup contrast adjustment',
          usage: 'Contrast variable',
          example: `  
  // Contrast adjustment
  const contrast = 1.5;`,
        },
        {
          command: 'Contrast Adjustment Algorithm',
          description: 'Adjust image contrast',
          usage: 'Contrast formula application',
          example: `  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.min(255, Math.max(0, (data[i] - 128) * contrast + 128));
    data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - 128) * contrast + 128));
    data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - 128) * contrast + 128));
  }
};`,
        },
        {
          command: 'Set Image Source for Filters',
          description: 'Set image source for filters',
          usage: 'img.src for filter operations',
          example: `img.src = 'path/to/image.jpg';`,
        },
      ],
    },
    // Continue with more sections...
    {
      title: 'Transformations',
      commands: [
        {
          command: 'Translation Example',
          description: 'Draw rectangle at origin',
          usage: 'fillRect() at (0,0)',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangle at origin
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 50, 50);`,
        },
        {
          command: 'Translate Origin',
          description: 'Move canvas origin',
          usage: 'translate(x, y) method',
          example: `// Translate origin
ctx.translate(100, 100);`,
        },
        {
          command: 'Draw at New Origin',
          description: 'Draw rectangle at translated origin',
          usage: 'fillRect() after translate',
          example: `// Draw rectangle at new origin
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 50, 50);`,
        },
        {
          command: 'Multiple Translations',
          description: 'Apply multiple translations',
          usage: 'Sequential translate() calls',
          example: `// Translate again
ctx.translate(100, 100);

// Draw rectangle at new origin
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 50, 50);`,
        },
        {
          command: 'Reset Transformation',
          description: 'Reset transformation matrix',
          usage: 'setTransform() to identity',
          example: `// Reset transformation
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.fillStyle = 'purple';
ctx.fillRect(0, 0, 50, 50);`,
        },
        {
          command: 'Non-Rotated Rectangle',
          description: 'Draw rectangle without rotation',
          usage: 'fillRect() before rotation',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw non-rotated rectangle
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 50, 50);`,
        },
        {
          command: 'Rotate Around Center',
          description: 'Rotate around rectangle center',
          usage: 'translate to center, then rotate',
          example: `// Rotate 45 degrees
ctx.translate(125, 125); // Move to center of rectangle
ctx.rotate(Math.PI / 4);
ctx.fillStyle = 'blue';
ctx.fillRect(-25, -25, 50, 50);`,
        },
        {
          command: 'Different Rotation Angle',
          description: 'Apply different rotation angle',
          usage: 'rotate() with different angle',
          example: `// Reset and rotate different angle
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.translate(225, 125);
ctx.rotate(Math.PI / 2);
ctx.fillStyle = 'green';
ctx.fillRect(-25, -25, 50, 50);`,
        },
        {
          command: 'Continuous Rotation Setup',
          description: 'Setup for continuous rotation',
          usage: 'angle variable and animation function',
          example: `// Continuous rotation
let angle = 0;
function rotateAnimation() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.translate(325, 125);
  ctx.rotate(angle);
  ctx.fillStyle = 'purple';
  ctx.fillRect(-25, -25, 50, 50);
  
  angle += 0.05;
  requestAnimationFrame(rotateAnimation);
}
rotateAnimation();`,
        },
        {
          command: 'Original Size Drawing',
          description: 'Draw shape at original size',
          usage: 'fillRect() before scaling',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw original size
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 50, 50);`,
        },
        {
          command: 'Scale 2x',
          description: 'Scale canvas by 2x',
          usage: 'scale(2, 2)',
          example: `// Scale 2x
ctx.scale(2, 2);
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 50, 50);`,
        },
        {
          command: 'Scale 0.5x',
          description: 'Scale canvas by 0.5x',
          usage: 'scale(0.5, 0.5)',
          example: `// Scale 0.5x
ctx.scale(0.5, 0.5);
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 50, 50);`,
        },
        {
          command: 'Non-Uniform Scaling',
          description: 'Scale with different X and Y values',
          usage: 'scale(x, y) with different values',
          example: `// Non-uniform scaling
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.scale(2, 0.5);
ctx.fillStyle = 'purple';
ctx.fillRect(10, 10, 50, 50);`,
        },
        {
          command: 'Scale from Center',
          description: 'Scale from center point',
          usage: 'translate to center, then scale',
          example: `// Scale from center
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.translate(200, 200);
ctx.scale(3, 3);
ctx.fillStyle = 'orange';
ctx.fillRect(-25, -25, 50, 50);`,
        },
        {
          command: 'Save State',
          description: 'Save current canvas state',
          usage: 'save() method',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Save current state
ctx.save();`,
        },
        {
          command: 'Apply Multiple Transforms',
          description: 'Apply multiple transformations',
          usage: 'translate, rotate, scale sequence',
          example: `// Apply transformations
ctx.translate(200, 200);
ctx.rotate(Math.PI / 4);
ctx.scale(2, 2);

// Draw transformed shape
ctx.fillStyle = 'red';
ctx.fillRect(-25, -25, 50, 50);`,
        },
        {
          command: 'Restore State',
          description: 'Restore saved canvas state',
          usage: 'restore() method',
          example: `// Restore to original state
ctx.restore();

// Draw non-transformed shape
ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 50, 50);`,
        },
        {
          command: 'Reset with setTransform',
          description: 'Reset with setTransform',
          usage: 'setTransform(1, 0, 0, 1, 0, 0)',
          example: `// Using setTransform
ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset`,
        },
        {
          command: 'Custom Transform Matrix',
          description: 'Apply custom transformation matrix',
          usage: 'setTransform(a, b, c, d, e, f)',
          example: `ctx.setTransform(
  1, 0,  // Scale X, Skew Y
  0, 1,  // Skew X, Scale Y
  100, 100 // Translate X, Y
);
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 50, 50);`,
        },
        {
          command: 'Advanced Transform Matrix',
          description: 'Advanced transformation with skew',
          usage: 'setTransform with skew values',
          example: `// Custom transformation matrix
ctx.setTransform(
  2, 0.5,  // a, b
  -0.5, 2, // c, d
  300, 100 // e, f
);
ctx.fillStyle = 'purple';
ctx.fillRect(0, 0, 50, 50);`,
        },
      ],
    },
    {
      title: 'Animation Basics',
      commands: [
        {
          command: 'Animation Variables Setup',
          description: 'Setup animation variables',
          usage: 'Initialize position and speed',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = 0;
let y = canvas.height / 2;
let speed = 2;`,
        },
        {
          command: 'Animation Function Structure',
          description: 'Basic animation function structure',
          usage: 'function animate() {}',
          example: `function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update position
  x += speed;
  
  // Bounce off walls
  if (x > canvas.width || x < 0) {
    speed = -speed;
  }
  
  // Draw circle
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();
  
  // Continue animation
  requestAnimationFrame(animate);
}`,
        },
        {
          command: 'Start Animation',
          description: 'Start the animation loop',
          usage: 'animate() call',
          example: `animate();`,
        },
        {
          command: 'Ball Class Constructor',
          description: 'Create ball object class',
          usage: 'class Ball with constructor',
          example: `class Ball {
  constructor(x, y, radius, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;`,
        },
        {
          command: 'Ball Class Properties',
          description: 'Define ball properties',
          usage: 'Set color and velocity',
          example: `    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }`,
        },
        {
          command: 'Ball Update Method',
          description: 'Update ball position',
          usage: 'update() method',
          example: `  update(canvas) {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Bounce off walls
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.speedY = -this.speedY;
    }
  }`,
        },
        {
          command: 'Ball Draw Method',
          description: 'Draw ball on canvas',
          usage: 'draw() method',
          example: `  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}`,
        },
        {
          command: 'Multiple Balls Setup',
          description: 'Create multiple ball objects',
          usage: 'Array of ball objects',
          example: `// Create multiple balls
const balls = [
  new Ball(100, 100, 20, 'red', 3, 2),
  new Ball(200, 150, 15, 'blue', -2, 3),
  new Ball(150, 200, 25, 'green', 4, -2)
];`,
        },
        {
          command: 'Animate Multiple Objects',
          description: 'Animate multiple objects loop',
          usage: 'Loop through objects array',
          example: `function animateObjects() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  balls.forEach(ball => {
    ball.update(canvas);
    ball.draw(ctx);
  });
  
  requestAnimationFrame(animateObjects);
}

animateObjects();`,
        },
      ],
    },
    {
      title: 'Advanced Animation',
      commands: [
        {
          command: 'Easing Functions',
          description: 'Apply easing to animations',
          usage: 'Mathematical easing functions',
          example: `// Easing functions
const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};`,
        },
        {
          command: 'Tween Animation',
          description: 'Create tween animation',
          usage: 'Animate between start and end values',
          example: `function tween(start, end, duration, callback) {
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);
    
    const value = start + (end - start) * easedProgress;
    callback(value);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// Usage: tween position
tween(0, 300, 2000, (x) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x, 100, 50, 50);
});`,
        },
        {
          command: 'Particle System Setup',
          description: 'Create particle system',
          usage: 'Particle class and system',
          example: `class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = (Math.random() - 0.5) * 4;
    this.radius = Math.random() * 3 + 1;
    this.life = 1;
    this.decay = Math.random() * 0.02 + 0.005;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life -= this.decay;
    this.vx *= 0.98;
    this.vy *= 0.98;
  }
  
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.life;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.restore();
  }
}`,
        },
        {
          command: 'Particle Animation',
          description: 'Animate particle system',
          usage: 'Particle system animation loop',
          example: `const particles = [];

function createParticles(x, y, count) {
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(x, y));
  }
}

function animateParticles() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  for (let i = particles.length - 1; i >= 0; i--) {
    const particle = particles[i];
    particle.update();
    particle.draw(ctx);
    
    if (particle.life <= 0) {
      particles.splice(i, 1);
    }
  }
  
  requestAnimationFrame(animateParticles);
}

// Create particles on click
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  createParticles(x, y, 20);
});

animateParticles();`,
        },
      ],
    },
    {
      title: 'Interactive Canvas',
      commands: [
        {
          command: 'Mouse Position Tracking',
          description: 'Track mouse position on canvas',
          usage: 'mousemove event listener',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});`,
        },
        {
          command: 'Draw at Mouse Position',
          description: 'Draw following mouse movement',
          usage: 'Update drawing based on mouse position',
          example: `function drawMouseFollower() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw circle at mouse position
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();
  
  requestAnimationFrame(drawMouseFollower);
}

drawMouseFollower();`,
        },
        {
          command: 'Click Drawing',
          description: 'Draw on canvas click',
          usage: 'click event listener',
          example: `canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  // Draw circle at click position
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
});`,
        },
        {
          command: 'Drag and Drop',
          description: 'Implement drag and drop',
          usage: 'mousedown, mousemove, mouseup events',
          example: `let isDragging = false;
let dragObject = { x: 100, y: 100, width: 50, height: 50 };

canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  // Check if click is on object
  if (x >= dragObject.x && x <= dragObject.x + dragObject.width &&
      y >= dragObject.y && y <= dragObject.y + dragObject.height) {
    isDragging = true;
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const rect = canvas.getBoundingClientRect();
    dragObject.x = e.clientX - rect.left - dragObject.width / 2;
    dragObject.y = e.clientY - rect.top - dragObject.height / 2;
    
    // Redraw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(dragObject.x, dragObject.y, dragObject.width, dragObject.height);
  }
});

canvas.addEventListener('mouseup', () => {
  isDragging = false;
});`,
        },
        {
          command: 'Keyboard Controls',
          description: 'Handle keyboard input',
          usage: 'keydown event listener',
          example: `const player = { x: 200, y: 200, size: 30 };

document.addEventListener('keydown', (e) => {
  const speed = 10;
  
  switch(e.key) {
    case 'ArrowUp':
      player.y -= speed;
      break;
    case 'ArrowDown':
      player.y += speed;
      break;
    case 'ArrowLeft':
      player.x -= speed;
      break;
    case 'ArrowRight':
      player.x += speed;
      break;
  }
  
  // Redraw player
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(player.x, player.y, player.size, player.size);
});`,
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Offscreen Canvas',
          description: 'Use offscreen canvas for better performance',
          usage: 'create offscreen canvas for complex drawings',
          example: `// Create offscreen canvas
const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d');
offscreenCanvas.width = 500;
offscreenCanvas.height = 500;

// Draw complex shape on offscreen canvas
function drawComplexShape() {
  offscreenCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
  
  // Complex drawing operations
  for (let i = 0; i < 1000; i++) {
    offscreenCtx.beginPath();
    offscreenCtx.arc(
      Math.random() * offscreenCanvas.width,
      Math.random() * offscreenCanvas.height,
      Math.random() * 5,
      0, Math.PI * 2
    );
    offscreenCtx.fillStyle = \`hsl(\${Math.random() * 360}, 70%, 50%)\`;
    offscreenCtx.fill();
  }
}

// Draw offscreen canvas to main canvas
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(offscreenCanvas, 0, 0);
  requestAnimationFrame(render);
}

drawComplexShape();
render();`,
        },
        {
          command: 'Request Throttling',
          description: 'Throttle animation frame requests',
          usage: 'Limit frame rate for better performance',
          example: `let lastTime = 0;
const fps = 30;
const interval = 1000 / fps;

function throttleAnimate(currentTime) {
  if (currentTime - lastTime >= interval) {
    // Update and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ... drawing code ...
    
    lastTime = currentTime;
  }
  
  requestAnimationFrame(throttleAnimate);
}

requestAnimationFrame(throttleAnimate);`,
        },
        {
          command: 'Object Pooling',
          description: 'Reuse objects to reduce garbage collection',
          usage: 'Pool pattern for particles',
          example: `class ParticlePool {
  constructor(maxSize) {
    this.pool = [];
    this.maxSize = maxSize;
    
    for (let i = 0; i < maxSize; i++) {
      this.pool.push(new Particle(0, 0));
    }
  }
  
  get(x, y) {
    if (this.pool.length > 0) {
      const particle = this.pool.pop();
      particle.reset(x, y);
      return particle;
    }
    return null;
  }
  
  release(particle) {
    if (this.pool.length < this.maxSize) {
      this.pool.push(particle);
    }
  }
}

const particlePool = new ParticlePool(100);`,
        },
        {
          command: 'Dirty Rectangle Optimization',
          description: 'Only redraw changed areas',
          usage: 'Track and update only dirty regions',
          example: `const dirtyRects = [];

function markDirty(x, y, width, height) {
  dirtyRects.push({ x, y, width, height });
}

function renderDirty() {
  dirtyRects.forEach(rect => {
    ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
    // Redraw only this area
    redrawArea(rect);
  });
  
  dirtyRects.length = 0; // Clear dirty rects
}

// Mark areas as dirty when they change
markDirty(object.x, object.y, object.width, object.height);
renderDirty();`,
        },
      ],
    },
  ],
};
