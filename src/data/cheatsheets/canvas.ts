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
          command: 'What is HTML5 Canvas?',
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
- Cross-browser support

Key Features:
- 2D drawing context
- WebGL for 3D graphics
- Path drawing and shapes
- Text rendering
- Image manipulation
- Animation support
- Event handling
- Performance optimized

Common Uses:
- Games and interactive media
- Data visualizations
- Image editors
- Drawing applications
- Charts and graphs
- Photo filters
- Real-time visualizations
- Creative coding`
        },
        {
          command: 'Setting up Canvas',
          description: 'Create and configure canvas element',
          usage: 'Add canvas to HTML and get context',
          example: `<!-- HTML -->
<canvas id="myCanvas" width="500" height="400"></canvas>

<!-- JavaScript -->
<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Check if canvas is supported
if (ctx) {
  console.log('Canvas is supported!');
} else {
  console.log('Canvas is not supported');
}
</script>`
        },
        {
          command: 'Canvas Coordinates',
          description: 'Understanding canvas coordinate system',
          usage: 'Canvas uses Cartesian coordinate system',
          example: `Canvas Coordinate System:
- Origin (0,0) is at top-left corner
- X increases to the right
- Y increases downward
- Width and height define canvas dimensions

Example:
const canvas = document.getElementById('myCanvas');
canvas.width = 500;  // Canvas width in pixels
canvas.height = 400; // Canvas height in pixels

// Drawing at specific coordinates
ctx.fillRect(10, 20, 100, 50); // x=10, y=20, width=100, height=50

// Center point
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;`
        },
        {
          command: 'Basic Drawing',
          description: 'Draw simple shapes and lines',
          usage: 'Use context methods for basic shapes',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 50);

// Draw stroked rectangle
ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;
ctx.strokeRect(10, 70, 100, 50);

// Draw line
ctx.beginPath();
ctx.moveTo(150, 10);
ctx.lineTo(250, 60);
ctx.stroke();

// Draw circle
ctx.beginPath();
ctx.arc(200, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = 'green';
ctx.fill();`
        },
        {
          command: 'Colors and Styles',
          description: 'Apply colors, gradients, and patterns',
          usage: 'Set fillStyle, strokeStyle, and gradients',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Solid colors
ctx.fillStyle = '#FF0000'; // Red
ctx.fillRect(10, 10, 50, 50);

ctx.strokeStyle = 'rgb(0, 0, 255)'; // Blue
ctx.strokeRect(70, 10, 50, 50);

// Linear gradient
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(10, 70, 200, 50);

// Radial gradient
const radialGradient = ctx.createRadialGradient(100, 180, 10, 100, 180, 50);
radialGradient.addColorStop(0, 'yellow');
radialGradient.addColorStop(1, 'orange');
ctx.fillStyle = radialGradient;
ctx.fillRect(50, 130, 100, 100);`
        }
      ],
    },
    {
      title: 'Drawing Shapes',
      commands: [
        {
          command: 'Rectangles',
          description: 'Draw filled and stroked rectangles',
          usage: 'fillRect(), strokeRect(), clearRect()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Filled rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 50);

// Stroked rectangle
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.strokeRect(10, 70, 100, 50);

// Clear rectangle (transparent)
ctx.clearRect(20, 20, 80, 30);

// Rectangle with both fill and stroke
ctx.fillStyle = 'green';
ctx.fillRect(150, 10, 100, 50);
ctx.strokeStyle = 'black';
ctx.strokeRect(150, 10, 100, 50);

// Using rect() method
ctx.beginPath();
ctx.rect(150, 70, 100, 50);
ctx.fillStyle = 'purple';
ctx.fill();
ctx.stroke();`
        },
        {
          command: 'Circles and Arcs',
          description: 'Draw circles, arcs, and curves',
          usage: 'arc(), arcTo() methods',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Full circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();

// Half circle (semi-circle)
ctx.beginPath();
ctx.arc(250, 100, 50, 0, Math.PI);
ctx.fillStyle = 'blue';
ctx.fill();

// Quarter circle
ctx.beginPath();
ctx.arc(100, 200, 50, 0, Math.PI / 2);
ctx.fillStyle = 'green';
ctx.fill();

// Arc with stroke
ctx.beginPath();
ctx.arc(250, 200, 50, 0, Math.PI * 1.5);
ctx.strokeStyle = 'purple';
ctx.lineWidth = 3;
ctx.stroke();

// Using arcTo for rounded corners
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.arcTo(150, 300, 150, 350, 50);
ctx.arcTo(150, 350, 50, 350, 50);
ctx.arcTo(50, 350, 50, 300, 50);
ctx.closePath();
ctx.stroke();`
        },
        {
          command: 'Lines and Paths',
          description: 'Create custom paths and lines',
          usage: 'beginPath(), moveTo(), lineTo(), closePath()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Simple line
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(100, 50);
ctx.stroke();

// Connected lines
ctx.beginPath();
ctx.moveTo(10, 70);
ctx.lineTo(50, 120);
ctx.lineTo(90, 70);
ctx.lineTo(130, 120);
ctx.stroke();

// Closed path
ctx.beginPath();
ctx.moveTo(150, 70);
ctx.lineTo(200, 120);
ctx.lineTo(250, 70);
ctx.closePath();
ctx.stroke();

// Filled path
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(200, 200);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.fillStyle = 'lightblue';
ctx.fill();

// Complex shape
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(350, 50);
ctx.lineTo(400, 100);
ctx.lineTo(380, 150);
ctx.lineTo(320, 150);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();`
        },
        {
          command: 'Curves',
          description: 'Draw quadratic and Bezier curves',
          usage: 'quadraticCurveTo(), bezierCurveTo()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Quadratic curve
ctx.beginPath();
ctx.moveTo(10, 100);
ctx.quadraticCurveTo(100, 20, 190, 100);
ctx.stroke();

// Bezier curve
ctx.beginPath();
ctx.moveTo(10, 200);
ctx.bezierCurveTo(50, 150, 150, 250, 190, 200);
ctx.stroke();

// Multiple curves
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.quadraticCurveTo(300, 100, 350, 50);
ctx.quadraticCurveTo(400, 0, 450, 50);
ctx.stroke();

// Curved path
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.bezierCurveTo(280, 120, 320, 180, 350, 150);
ctx.bezierCurveTo(380, 120, 420, 180, 450, 150);
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.stroke();`
        }
      ],
    },
    {
      title: 'Text and Typography',
      commands: [
        {
          command: 'Drawing Text',
          description: 'Render text on canvas',
          usage: 'fillText(), strokeText()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Filled text
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello Canvas!', 10, 40);

// Stroked text
ctx.font = '30px Arial';
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.strokeText('Hello Canvas!', 10, 80);

// Both fill and stroke
ctx.font = 'bold 30px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('Bold Text', 10, 120);
ctx.strokeStyle = 'darkblue';
ctx.strokeText('Bold Text', 10, 120);

// Text alignment
ctx.font = '20px Arial';
ctx.textAlign = 'center';
ctx.fillText('Centered', 200, 160);

ctx.textAlign = 'right';
ctx.fillText('Right', 380, 160);

ctx.textAlign = 'left';
ctx.fillText('Left', 20, 160);`
        },
        {
          command: 'Text Styling',
          description: 'Style and format text',
          usage: 'font, textAlign, textBaseline',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Font properties
ctx.font = 'italic bold 24px Georgia';
ctx.fillText('Italic Bold Georgia', 10, 40);

// Different fonts
ctx.font = '20px Arial';
ctx.fillText('Arial Font', 10, 80);

ctx.font = '20px Times New Roman';
ctx.fillText('Times Font', 10, 110);

ctx.font = '20px Courier';
ctx.fillText('Courier Font', 10, 140);

// Text baseline
ctx.font = '16px Arial';
ctx.textBaseline = 'top';
ctx.fillText('Top', 200, 50);

ctx.textBaseline = 'middle';
ctx.fillText('Middle', 200, 80);

ctx.textBaseline = 'bottom';
ctx.fillText('Bottom', 200, 110);

ctx.textBaseline = 'alphabetic';
ctx.fillText('Alphabetic', 200, 140);`
        },
        {
          command: 'Text Measurement',
          description: 'Measure text width and metrics',
          usage: 'measureText()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const text = 'Hello World!';
ctx.font = '24px Arial';

// Measure text
const metrics = ctx.measureText(text);
console.log('Width:', metrics.width);

// Center text using measurement
const x = (canvas.width - metrics.width) / 2;
ctx.fillText(text, x, 50);

// Text bounding box approximation
const height = 24; // Approximate height
ctx.strokeStyle = 'red';
ctx.strokeRect(x, 26, metrics.width, height);

// Multiple text measurements
const texts = ['Short', 'Medium Length', 'Very Long Text'];
let yPos = 100;

texts.forEach(t => {
  const metrics = ctx.measureText(t);
  ctx.fillText(t, 10, yPos);
  ctx.fillText(\`Width: \${metrics.width}px\`, 200, yPos);
  yPos += 30;
});`
        }
      ],
    },
    {
      title: 'Images and Media',
      commands: [
        {
          command: 'Drawing Images',
          description: 'Draw images on canvas',
          usage: 'drawImage() method',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create image object
const img = new Image();

img.onload = function() {
  // Draw image at original size
  ctx.drawImage(img, 10, 10);
  
  // Draw scaled image
  ctx.drawImage(img, 150, 10, 100, 100);
  
  // Draw cropped portion
  ctx.drawImage(img, 
    50, 50, 100, 100,  // Source rectangle
    300, 10, 150, 150  // Destination rectangle
  );
};

img.src = 'path/to/image.jpg';

// Using video element
const video = document.getElementById('myVideo');
video.addEventListener('play', function() {
  function drawFrame() {
    if (!video.paused && !video.ended) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(drawFrame);
    }
  }
  drawFrame();
});`
        },
        {
          command: 'Image Manipulation',
          description: 'Manipulate pixels and apply effects',
          usage: 'getImageData(), putImageData()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw image first
const img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  
  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Invert colors
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];       // Red
    data[i + 1] = 255 - data[i + 1]; // Green
    data[i + 2] = 255 - data[i + 2]; // Blue
    // Alpha channel (data[i + 3]) remains unchanged
  }
  
  // Put modified image data back
  ctx.putImageData(imageData, 0, 0);
  
  // Get portion of image
  const portion = ctx.getImageData(50, 50, 100, 100);
  ctx.putImageData(portion, 200, 200);
};

img.src = 'path/to/image.jpg';`
        },
        {
          command: 'Image Filters',
          description: 'Apply filters to images',
          usage: 'Pixel manipulation for effects',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Grayscale filter
  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    data[i] = gray;     // Red
    data[i + 1] = gray; // Green
    data[i + 2] = gray; // Blue
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Brightness adjustment
  const brightness = 50;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.min(255, data[i] + brightness);
    data[i + 1] = Math.min(255, data[i + 1] + brightness);
    data[i + 2] = Math.min(255, data[i + 2] + brightness);
  }
  
  // Contrast adjustment
  const contrast = 1.5;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.min(255, Math.max(0, (data[i] - 128) * contrast + 128));
    data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - 128) * contrast + 128));
    data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - 128) * contrast + 128));
  }
};

img.src = 'path/to/image.jpg';`
        }
      ],
    },
    {
      title: 'Transformations',
      commands: [
        {
          command: 'Translation',
          description: 'Move canvas origin',
          usage: 'translate() method',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangle at origin
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 50, 50);

// Translate origin
ctx.translate(100, 100);

// Draw rectangle at new origin
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 50, 50);

// Translate again
ctx.translate(100, 100);

// Draw rectangle at new origin
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 50, 50);

// Reset transformation
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.fillStyle = 'purple';
ctx.fillRect(0, 0, 50, 50);`
        },
        {
          command: 'Rotation',
          description: 'Rotate canvas context',
          usage: 'rotate() method',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw non-rotated rectangle
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 50, 50);

// Rotate 45 degrees
ctx.translate(125, 125); // Move to center of rectangle
ctx.rotate(Math.PI / 4);
ctx.fillStyle = 'blue';
ctx.fillRect(-25, -25, 50, 50);

// Reset and rotate different angle
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.translate(225, 125);
ctx.rotate(Math.PI / 2);
ctx.fillStyle = 'green';
ctx.fillRect(-25, -25, 50, 50);

// Continuous rotation
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
rotateAnimation();`
        },
        {
          command: 'Scaling',
          description: 'Scale canvas context',
          usage: 'scale() method',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw original size
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 50, 50);

// Scale 2x
ctx.scale(2, 2);
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 50, 50);

// Scale 0.5x
ctx.scale(0.5, 0.5);
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 50, 50);

// Non-uniform scaling
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.scale(2, 0.5);
ctx.fillStyle = 'purple';
ctx.fillRect(10, 10, 50, 50);

// Scale from center
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.translate(200, 200);
ctx.scale(3, 3);
ctx.fillStyle = 'orange';
ctx.fillRect(-25, -25, 50, 50);`
        },
        {
          command: 'Complex Transformations',
          description: 'Combine multiple transformations',
          usage: 'save(), restore(), setTransform()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Save current state
ctx.save();

// Apply transformations
ctx.translate(200, 200);
ctx.rotate(Math.PI / 4);
ctx.scale(2, 2);

// Draw transformed shape
ctx.fillStyle = 'red';
ctx.fillRect(-25, -25, 50, 50);

// Restore to original state
ctx.restore();

// Draw non-transformed shape
ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 50, 50);

// Using setTransform
ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset
ctx.setTransform(
  1, 0,  // Scale X, Skew Y
  0, 1,  // Skew X, Scale Y
  100, 100 // Translate X, Y
);
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 50, 50);

// Custom transformation matrix
ctx.setTransform(
  2, 0.5,  // a, b
  -0.5, 2, // c, d
  300, 100 // e, f
);
ctx.fillStyle = 'purple';
ctx.fillRect(0, 0, 50, 50);`
        }
      ],
    },
    {
      title: 'Animation Basics',
      commands: [
        {
          command: 'Animation Loop',
          description: 'Create basic animation loops',
          usage: 'requestAnimationFrame(), clearRect()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = 0;
let y = canvas.height / 2;
let speed = 2;

function animate() {
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
}

animate();`
        },
        {
          command: 'Object Animation',
          description: 'Animate multiple objects',
          usage: 'Object-oriented animation',
          example: `class Ball {
  constructor(x, y, radius, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  
  update(canvas) {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Bounce off walls
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.speedY = -this.speedY;
    }
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const balls = [
  new Ball(50, 50, 20, 'red', 3, 2),
  new Ball(100, 100, 15, 'blue', -2, 3),
  new Ball(150, 75, 25, 'green', 4, -2)
];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  balls.forEach(ball => {
    ball.update(canvas);
    ball.draw(ctx);
  });
  
  requestAnimationFrame(animate);
}

animate();`
        },
        {
          command: 'Easing Functions',
          description: 'Apply easing to animations',
          usage: 'Mathematical easing functions',
          example: `// Easing functions
const easing = {
  linear: t => t,
  easeIn: t => t * t,
  easeOut: t => t * (2 - t),
  easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  bounce: t => {
    if (t < 1/2.75) {
      return 7.5625 * t * t;
    } else if (t < 2/2.75) {
      return 7.5625 * (t -= 1.5/2.75) * t + 0.75;
    } else if (t < 2.5/2.75) {
      return 7.5625 * (t -= 2.25/2.75) * t + 0.9375;
    } else {
      return 7.5625 * (t -= 2.625/2.75) * t + 0.984375;
    }
  }
};

// Animated box with easing
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let startTime = null;
const duration = 2000; // 2 seconds
const startX = 0;
const endX = canvas.width - 50;

function animateBox(timestamp) {
  if (!startTime) startTime = timestamp;
  const elapsed = timestamp - startTime;
  const progress = Math.min(elapsed / duration, 1);
  
  // Apply easing
  const easedProgress = easing.bounce(progress);
  const x = startX + (endX - startX) * easedProgress;
  
  // Clear and draw
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'blue';
  ctx.fillRect(x, canvas.height / 2 - 25, 50, 50);
  
  if (progress < 1) {
    requestAnimationFrame(animateBox);
  }
}

requestAnimationFrame(animateBox);`
        }
      ],
    },
    {
      title: 'Advanced Drawing Techniques',
      commands: [
        {
          command: 'Composite Operations',
          description: 'Control how shapes are drawn together',
          usage: 'globalCompositeOperation property',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw first circle
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();

// Set composite operation
ctx.globalCompositeOperation = 'source-over'; // Default
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(150, 100, 50, 0, Math.PI * 2);
ctx.fill();

// Clear and try different operations
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Source-over (default)
ctx.globalCompositeOperation = 'source-over';
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 100, 100);

// Source-atop
ctx.globalCompositeOperation = 'source-atop';
ctx.fillStyle = 'green';
ctx.fillRect(200, 50, 100, 100);

// Multiply
ctx.globalCompositeOperation = 'multiply';
ctx.fillStyle = 'yellow';
ctx.fillRect(250, 100, 100, 100);

// Reset to default
ctx.globalCompositeOperation = 'source-over';`
        },
        {
          command: 'Clipping and Masking',
          description: 'Create clipping regions and masks',
          usage: 'clip(), save(), restore()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Basic clipping
ctx.save();
ctx.beginPath();
ctx.arc(150, 150, 80, 0, Math.PI * 2);
ctx.clip();

// Draw image - only visible inside circle
const img = new Image();
img.onload = function() {
  ctx.drawImage(img, 50, 50, 200, 200);
};
img.src = 'path/to/image.jpg';

ctx.restore();

// Complex clipping path
ctx.save();
ctx.beginPath();
ctx.moveTo(250, 100);
ctx.lineTo(350, 100);
ctx.lineTo(300, 200);
ctx.closePath();
ctx.clip();

// Draw gradient
const gradient = ctx.createLinearGradient(250, 100, 350, 200);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(250, 100, 100, 100);

ctx.restore();

// Text clipping
ctx.save();
ctx.font = 'bold 60px Arial';
ctx.fillText('CLIP', 50, 300);

// Use text as clipping mask
ctx.globalCompositeOperation = 'source-in';
const pattern = ctx.createPattern(img, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 250, 400, 100);

ctx.restore();`
        },
        {
          command: 'Shadows and Effects',
          description: 'Add shadows and visual effects',
          usage: 'shadowColor, shadowBlur, shadowOffsetX/Y',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Basic shadow
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Colored shadow
ctx.shadowColor = 'rgba(255, 0, 0, 0.5)';
ctx.shadowBlur = 15;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(250, 100, 50, 0, Math.PI * 2);
ctx.fill();

// Text shadow
ctx.font = 'bold 48px Arial';
ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
ctx.shadowBlur = 5;
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.fillStyle = 'black';
ctx.fillText('Shadow Text', 50, 250);

// Multiple shadows (draw multiple times)
ctx.shadowColor = 'transparent';
ctx.fillStyle = 'yellow';
ctx.fillRect(200, 200, 80, 80);

ctx.shadowColor = 'rgba(255, 0, 0, 0.5)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 3;
ctx.shadowOffsetY = 3;
ctx.fillRect(200, 200, 80, 80);

// Reset shadow
ctx.shadowColor = 'transparent';
ctx.shadowBlur = 0;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;`
        },
        {
          command: 'Gradients and Patterns',
          description: 'Create complex gradients and patterns',
          usage: 'createLinearGradient(), createPattern()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Linear gradient
const linearGradient = ctx.createLinearGradient(0, 0, 200, 0);
linearGradient.addColorStop(0, 'red');
linearGradient.addColorStop(0.5, 'green');
linearGradient.addColorStop(1, 'blue');
ctx.fillStyle = linearGradient;
ctx.fillRect(50, 50, 200, 100);

// Diagonal gradient
const diagonalGradient = ctx.createLinearGradient(0, 0, 200, 200);
diagonalGradient.addColorStop(0, 'yellow');
diagonalGradient.addColorStop(1, 'orange');
ctx.fillStyle = diagonalGradient;
ctx.fillRect(300, 50, 200, 100);

// Radial gradient
const radialGradient = ctx.createRadialGradient(150, 250, 20, 150, 250, 80);
radialGradient.addColorStop(0, 'white');
radialGradient.addColorStop(0.5, 'lightblue');
radialGradient.addColorStop(1, 'darkblue');
ctx.fillStyle = radialGradient;
ctx.fillRect(50, 170, 200, 160);

// Pattern
const patternCanvas = document.createElement('canvas');
const patternCtx = patternCanvas.getContext('2d');
patternCanvas.width = 20;
patternCanvas.height = 20;

// Create pattern design
patternCtx.fillStyle = 'red';
patternCtx.fillRect(0, 0, 10, 10);
patternCtx.fillRect(10, 10, 10, 10);
patternCtx.fillStyle = 'blue';
patternCtx.fillRect(10, 0, 10, 10);
patternCtx.fillRect(0, 10, 10, 10);

const pattern = ctx.createPattern(patternCanvas, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(300, 200, 200, 200);`
        }
      ],
    },
    {
      title: 'Path Operations',
      commands: [
        {
          command: 'Path Drawing',
          description: 'Create complex paths',
          usage: 'beginPath(), closePath(), fill(), stroke()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Star path
function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
}

// Draw star
drawStar(150, 150, 5, 50, 25);
ctx.fillStyle = 'gold';
ctx.fill();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 3;
ctx.stroke();

// Heart path
function drawHeart(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y + size / 4);
  ctx.quadraticCurveTo(x, y, x + size / 4, y);
  ctx.quadraticCurveTo(x + size / 2, y, x + size / 2, y + size / 4);
  ctx.quadraticCurveTo(x + size / 2, y, x + size * 3/4, y);
  ctx.quadraticCurveTo(x + size, y, x + size, y + size / 4);
  ctx.quadraticCurveTo(x + size, y + size / 2, x + size * 3/4, y + size * 3/4);
  ctx.lineTo(x + size / 2, y + size);
  ctx.lineTo(x + size / 4, y + size * 3/4);
  ctx.quadraticCurveTo(x, y + size / 2, x, y + size / 4);
}

drawHeart(250, 200, 60);
ctx.fillStyle = 'red';
ctx.fill();`
        },
        {
          command: 'SVG Path',
          description: 'Use SVG path syntax',
          usage: 'Path2D object with SVG path data',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create Path2D from SVG path string
const svgPath = new Path2D('M 100 100 L 200 100 L 150 200 Z');
ctx.fillStyle = 'lightblue';
ctx.fill(svgPath);

// Complex SVG path
const complexPath = new Path2D(\`
  M 250 100
  C 250 50, 350 50, 350 100
  S 450 150, 450 100
  S 350 50, 350 100
\`);
ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;
ctx.stroke(complexPath);

// Reusable path component
function createCirclePath(x, y, radius) {
  const path = new Path2D();
  path.arc(x, y, radius, 0, Math.PI * 2);
  return path;
}

// Use multiple circle paths
const circle1 = createCirclePath(100, 250, 30);
const circle2 = createCirclePath(180, 250, 30);
const circle3 = createCirclePath(140, 300, 30);

ctx.fillStyle = 'red';
ctx.fill(circle1);
ctx.fillStyle = 'green';
ctx.fill(circle2);
ctx.fillStyle = 'blue';
ctx.fill(circle3);

// Combine paths
const combined = new Path2D();
combined.addPath(createCirclePath(300, 250, 40));
combined.addPath(createCirclePath(380, 250, 40));
ctx.fillStyle = 'purple';
ctx.fill(combined);`
        },
        {
          command: 'Hit Detection',
          description: 'Detect clicks on paths and shapes',
          usage: 'isPointInPath(), isPointInStroke()',
          example: `const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw shapes
const shapes = [
  {
    type: 'rect',
    x: 50, y: 50, width: 100, height: 80,
    color: 'red'
  },
  {
    type: 'circle',
    x: 250, y: 100, radius: 50,
    color: 'blue'
  },
  {
    type: 'path',
    path: new Path2D('M 350 50 L 400 100 L 350 150 L 300 100 Z'),
    color: 'green'
  }
];

// Draw all shapes
shapes.forEach(shape => {
  ctx.fillStyle = shape.color;
  
  if (shape.type === 'rect') {
    ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
  } else if (shape.type === 'circle') {
    ctx.beginPath();
    ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
    ctx.fill();
  } else if (shape.type === 'path') {
    ctx.fill(shape.path);
  }
});

// Hit detection
canvas.addEventListener('click', function(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  shapes.forEach(shape => {
    let hit = false;
    
    if (shape.type === 'rect') {
      hit = x >= shape.x && x <= shape.x + shape.width &&
            y >= shape.y && y <= shape.y + shape.height;
    } else if (shape.type === 'circle') {
      const distance = Math.sqrt(Math.pow(x - shape.x, 2) + Math.pow(y - shape.y, 2));
      hit = distance <= shape.radius;
    } else if (shape.type === 'path') {
      hit = ctx.isPointInPath(shape.path, x, y);
    }
    
    if (hit) {
      console.log('Hit:', shape.color);
    }
  });
});`
        }
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Offscreen Canvas',
          description: 'Use offscreen canvas for better performance',
          usage: 'OffscreenCanvas for complex operations',
          example: `// Create offscreen canvas
const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d');

// Set size
offscreenCanvas.width = 500;
offscreenCanvas.height = 500;

// Draw complex scene offscreen
function drawComplexScene(ctx) {
  // Draw many objects
  for (let i = 0; i < 1000; i++) {
    const x = Math.random() * 500;
    const y = Math.random() * 500;
    const radius = Math.random() * 5;
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = \`hsl(\${Math.random() * 360}, 70%, 50%)\`;
    ctx.fill();
  }
}

// Draw once to offscreen canvas
drawComplexScene(offscreenCtx);

// Main canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Copy from offscreen to main
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(offscreenCanvas, 0, 0);
  requestAnimationFrame(render);
}

render();`
        },
        {
          command: 'Layer Management',
          description: 'Manage layers for complex scenes',
          usage: 'Multiple canvases for layers',
          example: `// Create layer canvases
const backgroundLayer = document.createElement('canvas');
const foregroundLayer = document.createElement('canvas');
const uiLayer = document.createElement('canvas');

const bgCtx = backgroundLayer.getContext('2d');
const fgCtx = foregroundLayer.getContext('2d');
const uiCtx = uiLayer.getContext('2d');

// Set dimensions
[backgroundLayer, foregroundLayer, uiLayer].forEach(layer => {
  layer.width = 800;
  layer.height = 600;
});

// Draw static background
function drawBackground() {
  bgCtx.fillStyle = '#87CEEB';
  bgCtx.fillRect(0, 0, 800, 600);
  
  // Draw mountains
  bgCtx.fillStyle = '#8B7355';
  bgCtx.beginPath();
  bgCtx.moveTo(0, 400);
  bgCtx.lineTo(200, 200);
  bgCtx.lineTo(400, 350);
  bgCtx.lineTo(600, 150);
  bgCtx.lineTo(800, 300);
  bgCtx.lineTo(800, 600);
  bgCtx.lineTo(0, 600);
  bgCtx.closePath();
  bgCtx.fill();
}

// Draw animated foreground
function drawForeground(time) {
  fgCtx.clearRect(0, 0, 800, 600);
  
  // Animated clouds
  const cloudX = (time * 0.01) % 800;
  fgCtx.fillStyle = 'white';
  fgCtx.beginPath();
  fgCtx.arc(cloudX, 100, 30, 0, Math.PI * 2);
  fgCtx.arc(cloudX + 25, 100, 35, 0, Math.PI * 2);
  fgCtx.arc(cloudX + 50, 100, 30, 0, Math.PI * 2);
  fgCtx.fill();
}

// Draw UI
function drawUI() {
  uiCtx.clearRect(0, 0, 800, 600);
  uiCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  uiCtx.fillRect(10, 10, 200, 100);
  uiCtx.fillStyle = 'white';
  uiCtx.font = '16px Arial';
  uiCtx.fillText('Score: 1000', 20, 35);
  uiCtx.fillText('Level: 5', 20, 60);
  uiCtx.fillText('Time: 02:30', 20, 85);
}

// Main render loop
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function render(time) {
  // Draw background (static)
  if (!backgroundLayer.drawn) {
    drawBackground();
    backgroundLayer.drawn = true;
  }
  
  // Draw layers
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundLayer, 0, 0);
  drawForeground(time);
  ctx.drawImage(foregroundLayer, 0, 0);
  drawUI();
  ctx.drawImage(uiLayer, 0, 0);
  
  requestAnimationFrame(render);
}

requestAnimationFrame(render);`
        },
        {
          command: 'Memory Management',
          description: 'Manage memory efficiently in canvas',
          usage: 'Prevent memory leaks and optimize usage',
          example: `// Canvas memory management best practices

// 1. Clear event listeners and animations
class CanvasManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.animationId = null;
    this.eventListeners = [];
  }
  
  startAnimation() {
    const animate = () => {
      this.update();
      this.draw();
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }
  
  stopAnimation() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
  
  addEventListener(type, handler) {
    this.canvas.addEventListener(type, handler);
    this.eventListeners.push({ type, handler });
  }
  
  cleanup() {
    this.stopAnimation();
    this.eventListeners.forEach(({ type, handler }) => {
      this.canvas.removeEventListener(type, handler);
    });
    this.eventListeners = [];
  }
}

// 2. Reuse objects
class ParticlePool {
  constructor(maxSize) {
    this.pool = [];
    this.maxSize = maxSize;
  }
  
  get() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }
    return this.create();
  }
  
  release(particle) {
    if (this.pool.length < this.maxSize) {
      particle.reset();
      this.pool.push(particle);
    }
  }
  
  create() {
    return {
      x: 0, y: 0,
      vx: 0, vy: 0,
      life: 1,
      reset() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.life = 1;
      }
    };
  }
}

// 3. Optimize image loading
class ImageCache {
  constructor() {
    this.cache = new Map();
  }
  
  load(src) {
    if (this.cache.has(src)) {
      return Promise.resolve(this.cache.get(src));
    }
    
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.cache.set(src, img);
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });
  }
}

// 4. Monitor memory usage
function monitorMemory() {
  if (performance.memory) {
    console.log('Memory usage:', {
      used: Math.round(performance.memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(performance.memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) + ' MB'
    });
  }
}

// Monitor memory periodically
setInterval(monitorMemory, 10000);`
        },
        {
          command: 'Canvas Best Practices',
          description: 'Best practices for canvas development',
          usage: 'Guidelines for efficient canvas code',
          example: `// Canvas best practices

// 1. Use requestAnimationFrame for animations
function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

// 2. Batch operations together
function drawBatch(objects) {
  objects.forEach(obj => {
    ctx.save();
    ctx.translate(obj.x, obj.y);
    ctx.rotate(obj.rotation);
    
    // Draw object
    ctx.fillStyle = obj.color;
    ctx.fillRect(-obj.width/2, -obj.height/2, obj.width, obj.height);
    
    ctx.restore();
  });
}

// 3. Avoid unnecessary state changes
function drawOptimized(objects) {
  // Group by color to minimize fillStyle changes
  const byColor = {};
  objects.forEach(obj => {
    if (!byColor[obj.color]) {
      byColor[obj.color] = [];
    }
    byColor[obj.color].push(obj);
  });
  
  // Draw each color group
  Object.entries(byColor).forEach(([color, objs]) => {
    ctx.fillStyle = color;
    objs.forEach(obj => {
      ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
    });
  });
}

// 4. Use offscreen canvas for complex drawings
const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d');

function preRenderComplexShape() {
  // Expensive drawing operation
  offscreenCtx.fillStyle = 'gradient';
  // ... complex drawing code
}

// 5. Implement dirty rectangle optimization
class DirtyRectManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.dirtyRects = [];
  }
  
  addDirtyRect(x, y, width, height) {
    this.dirtyRects.push({ x, y, width, height });
  }
  
  clearDirtyRects() {
    this.dirtyRects.forEach(rect => {
      this.ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
    });
    this.dirtyRects = [];
  }
}

// 6. Profile and optimize
function profileDraw(func, iterations = 1000) {
  const start = performance.now();
  
  for (let i = 0; i < iterations; i++) {
    func();
  }
  
  const end = performance.now();
  console.log(\`\${func.name}: \${end - start}ms for \${iterations} iterations\`);
}

// 7. Use appropriate canvas size
function setupCanvas(canvas, width, height) {
  // Set actual size in memory
  canvas.width = width;
  canvas.height = height;
  
  // Scale for CSS if needed
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
}

// 8. Clean up resources
function cleanupCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Remove references
  canvas.width = 0;
  canvas.height = 0;
}`
        }
      ],
    },
    {
      title: 'Modern Canvas Features',
      commands: [
        {
          command: 'OffscreenCanvas',
          description: 'Use OffscreenCanvas for better performance',
          usage: 'OffscreenCanvas API for worker rendering',
          example: `// OffscreenCanvas for worker-based rendering

// Main thread
const canvas = document.getElementById('myCanvas');
const offscreen = canvas.transferControlToOffscreen();

// Send to worker
const worker = new Worker('canvas-worker.js');
worker.postMessage({ canvas: offscreen }, [offscreen]);

// Worker thread (canvas-worker.js)
self.onmessage = function(e) {
  const { canvas } = e.data;
  const ctx = canvas.getContext('2d');
  
  let animationId;
  
  function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw animation
    const time = Date.now() * 0.001;
    
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2 + Math.cos(time) * 100,
      canvas.height / 2 + Math.sin(time) * 100,
      20,
      0,
      Math.PI * 2
    );
    ctx.fill();
    
    animationId = requestAnimationFrame(animate);
  }
  
  animate();
};

// Transfer back to main thread if needed
// worker.postMessage({ type: 'transferControl', canvas: offscreen }, [offscreen]);`
        },
        {
          command: 'WebGL Canvas',
          description: 'Use WebGL for 3D graphics',
          usage: 'WebGL context for GPU acceleration',
          example: `// WebGL setup and basic rendering
const canvas = document.getElementById('myCanvas');
const gl = canvas.getContext('webgl');

if (!gl) {
  console.error('WebGL not supported');
}

// Vertex shader
const vertexShaderSource = \`
  attribute vec2 a_position;
  attribute vec4 a_color;
  varying vec4 v_color;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_color = a_color;
  }
\`;

// Fragment shader
const fragmentShaderSource = \`
  precision mediump float;
  varying vec4 v_color;
  
  void main() {
    gl_FragColor = v_color;
  }
\`;

// Create shaders
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  
  return shader;
}

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

// Create program
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

// Set up geometry
const vertices = new Float32Array([
  // x, y, r, g, b, a
  -0.5, -0.5, 1.0, 0.0, 0.0, 1.0,
   0.5, -0.5, 0.0, 1.0, 0.0, 1.0,
   0.0,  0.5, 0.0, 0.0, 1.0, 1.0
]);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// Set up attributes
const positionLocation = gl.getAttribLocation(program, 'a_position');
const colorLocation = gl.getAttribLocation(program, 'a_color');

gl.enableVertexAttribArray(positionLocation);
gl.enableVertexAttribArray(colorLocation);

gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 24, 0);
gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 24, 8);

// Render
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.useProgram(program);
gl.drawArrays(gl.TRIANGLES, 0, 3);`
        },
        {
          command: 'Canvas in Web Workers',
          description: 'Use canvas in web workers',
          usage: 'OffscreenCanvas in workers',
          example: `// Main thread
const canvas = document.getElementById('myCanvas');
const offscreen = canvas.transferControlToOffscreen();

const worker = new Worker('canvas-worker.js');
worker.postMessage({ 
  type: 'init',
  canvas: offscreen,
  width: canvas.width,
  height: canvas.height
}, [offscreen]);

// Send drawing commands to worker
worker.postMessage({
  type: 'draw',
  command: 'circle',
  x: 100,
  y: 100,
  radius: 50,
  color: 'blue'
});

// Worker thread (canvas-worker.js)
let ctx;
let canvas;

self.onmessage = function(e) {
  const { type, data } = e.data;
  
  switch (type) {
    case 'init':
      canvas = data.canvas;
      ctx = canvas.getContext('2d');
      break;
      
    case 'draw':
      handleDraw(data);
      break;
      
    case 'animate':
      handleAnimation(data);
      break;
  }
};

function handleDraw(data) {
  switch (data.command) {
    case 'circle':
      ctx.beginPath();
      ctx.arc(data.x, data.y, data.radius, 0, Math.PI * 2);
      ctx.fillStyle = data.color;
      ctx.fill();
      break;
      
    case 'rect':
      ctx.fillStyle = data.color;
      ctx.fillRect(data.x, data.y, data.width, data.height);
      break;
      
    case 'clear':
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      break;
  }
}

function handleAnimation(data) {
  let frame = 0;
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw animated content
    const x = Math.sin(frame * 0.05) * 100 + canvas.width / 2;
    const y = Math.cos(frame * 0.03) * 100 + canvas.height / 2;
    
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    
    frame++;
    
    if (frame < data.duration) {
      requestAnimationFrame(animate);
    }
  }
  
  animate();
}`
        },
        {
          command: 'WebGPU Canvas',
          description: 'Use WebGPU for next-gen graphics',
          usage: 'WebGPU context for advanced rendering',
          example: `// WebGPU setup (experimental)
const canvas = document.getElementById('myCanvas');

if (!navigator.gpu) {
  console.error('WebGPU not supported');
}

async function initWebGPU() {
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    console.error('No appropriate GPUAdapter found');
    return;
  }
  
  const device = await adapter.requestDevice();
  const context = canvas.getContext('webgpu');
  
  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
    device,
    format: presentationFormat,
  });
  
  // Create shader module
  const shaderModule = device.createShaderModule({
    code: \`
      @vertex
      fn vs_main(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4<f32> {
        let x = f32(i32(vertex_index) - 1);
        let y = f32(i32(vertex_index & 1u) * 2 - 1);
        return vec4<f32>(x, y, 0.0, 1.0);
      }
      
      @fragment
      fn fs_main() -> @location(0) vec4<f32> {
        return vec4<f32>(1.0, 0.0, 0.0, 1.0); // Red
      }
    \`
  });
  
  // Create pipeline
  const pipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
      module: shaderModule,
      entryPoint: 'vs_main',
    },
    fragment: {
      module: shaderModule,
      entryPoint: 'fs_main',
      targets: [{
        format: presentationFormat,
      }],
    },
    primitive: {
      topology: 'triangle-list',
    },
  });
  
  // Render loop
  function frame() {
    const commandEncoder = device.createCommandEncoder();
    const textureView = context.getCurrentTexture().createView();
    
    const renderPass = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: textureView,
        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
        loadOp: 'clear',
        storeOp: 'store',
      }],
    });
    
    renderPass.setPipeline(pipeline);
    renderPass.draw(3);
    renderPass.end();
    
    device.queue.submit([commandEncoder.finish()]);
    requestAnimationFrame(frame);
  }
  
  frame();
}

initWebGPU().catch(console.error);`
        }
      ],
    },
    {
      title: 'Canvas Libraries and Frameworks',
      commands: [
        {
          command: 'Popular Canvas Libraries',
          description: 'Overview of canvas libraries and frameworks',
          usage: 'Choose the right library for your needs',
          example: `// Popular Canvas Libraries Overview

// 1. Fabric.js - Object model on top of canvas
import { fabric } from 'fabric';

const canvas = new fabric.Canvas('myCanvas');

// Add shapes
const rect = new fabric.Rect({
  left: 100,
  top: 100,
  width: 50,
  height: 50,
  fill: 'red'
});

canvas.add(rect);

// Add text
const text = new fabric.Text('Hello World', {
  left: 100,
  top: 50,
  fontSize: 20
});

canvas.add(text);

// 2. Konva.js - 2D canvas library
import Konva from 'konva';

const stage = new Konva.Stage({
  container: 'container',
  width: 500,
  height: 500
});

const layer = new Konva.Layer();
stage.add(layer);

const circle = new Konva.Circle({
  x: 100,
  y: 100,
  radius: 50,
  fill: 'green'
});

layer.add(circle);
layer.draw();

// 3. Paper.js - Vector graphics scripting framework
import paper from 'paper';

paper.setup('myCanvas');

const path = new paper.Path();
path.strokeColor = 'black';
path.add(new paper.Point(100, 100));
path.add(new paper.Point(200, 200));
path.add(new paper.Point(300, 100));
path.closed = true;
path.fillColor = 'red';

// 4. P5.js - Creative coding library
import p5 from 'p5';

new p5(function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
  };
  
  p.draw = function() {
    p.background(220);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
});

// 5. Three.js - 3D graphics (uses WebGL)
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 400/400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') });

renderer.setSize(400, 400);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();`
        },
        {
          command: 'Canvas Game Development',
          description: 'Build games with canvas',
          usage: 'Game development patterns and techniques',
          example: `// Simple game engine structure
class GameEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    
    this.entities = [];
    this.systems = [];
    this.running = false;
    this.lastTime = 0;
  }
  
  addEntity(entity) {
    this.entities.push(entity);
  }
  
  addSystem(system) {
    this.systems.push(system);
  }
  
  start() {
    this.running = true;
    this.lastTime = performance.now();
    this.gameLoop();
  }
  
  stop() {
    this.running = false;
  }
  
  gameLoop() {
    if (!this.running) return;
    
    const currentTime = performance.now();
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;
    
    this.update(deltaTime);
    this.render();
    
    requestAnimationFrame(() => this.gameLoop());
  }
  
  update(deltaTime) {
    this.systems.forEach(system => {
      system.update(this.entities, deltaTime);
    });
  }
  
  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    this.systems.forEach(system => {
      if (system.render) {
        system.render(this.ctx, this.entities);
      }
    });
  }
}

// Entity component system
class Entity {
  constructor() {
    this.components = new Map();
  }
  
  addComponent(name, component) {
    this.components.set(name, component);
  }
  
  getComponent(name) {
    return this.components.get(name);
  }
}

// Components
class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Velocity {
  constructor(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }
}

class Renderable {
  constructor(color, size) {
    this.color = color;
    this.size = size;
  }
}

// Systems
class MovementSystem {
  update(entities, deltaTime) {
    entities.forEach(entity => {
      const position = entity.getComponent('position');
      const velocity = entity.getComponent('velocity');
      
      if (position && velocity) {
        position.x += velocity.vx * deltaTime;
        position.y += velocity.vy * deltaTime;
      }
    });
  }
}

class RenderSystem {
  render(ctx, entities) {
    entities.forEach(entity => {
      const position = entity.getComponent('position');
      const renderable = entity.getComponent('renderable');
      
      if (position && renderable) {
        ctx.fillStyle = renderable.color;
        ctx.fillRect(
          position.x - renderable.size / 2,
          position.y - renderable.size / 2,
          renderable.size,
          renderable.size
        );
      }
    });
  }
}

// Usage
const canvas = document.getElementById('myCanvas');
const game = new GameEngine(canvas);

game.addSystem(new MovementSystem());
game.addSystem(new RenderSystem());

// Create player
const player = new Entity();
player.addComponent('position', new Position(100, 100));
player.addComponent('velocity', new Velocity(50, 0));
player.addComponent('renderable', new Renderable('blue', 20));

game.addEntity(player);
game.start();`
        },
        {
          command: 'Canvas Testing',
          description: 'Test canvas applications',
          usage: 'Unit testing and visual regression testing',
          example: `// Canvas testing utilities

class CanvasTestHelper {
  constructor(width = 100, height = 100) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext('2d');
  }
  
  // Draw test pattern
  drawTestPattern() {
    const ctx = this.ctx;
    
    // Clear canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw grid
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    
    for (let x = 0; x <= this.canvas.width; x += 10) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.canvas.height);
      ctx.stroke();
    }
    
    for (let y = 0; y <= this.canvas.height; y += 10) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.canvas.width, y);
      ctx.stroke();
    }
    
    // Draw test shapes
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 30, 30);
    
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(70, 30, 15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(10, 70);
    ctx.lineTo(40, 90);
    ctx.lineTo(70, 70);
    ctx.stroke();
  }
  
  // Compare with expected image
  async compareWithExpected(expectedImageData) {
    const currentImageData = this.ctx.getImageData(
      0, 0, this.canvas.width, this.canvas.height
    );
    
    return this.compareImageData(currentImageData, expectedImageData);
  }
  
  compareImageData(data1, data2) {
    if (data1.width !== data2.width || data1.height !== data2.height) {
      return { equal: false, difference: 1.0 };
    }
    
    let diff = 0;
    const pixels = data1.width * data1.height * 4;
    
    for (let i = 0; i < pixels; i++) {
      diff += Math.abs(data1.data[i] - data2.data[i]);
    }
    
    const difference = diff / (pixels * 255);
    
    return {
      equal: difference < 0.01,
      difference
    };
  }
  
  // Export as base64
  toDataURL() {
    return this.canvas.toDataURL();
  }
  
  // Load from data URL
  fromDataURL(dataURL) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(img, 0, 0);
        resolve();
      };
      img.src = dataURL;
    });
  }
}

// Test framework
class CanvasTestRunner {
  constructor() {
    this.tests = [];
    this.results = [];
  }
  
  addTest(name, testFunction) {
    this.tests.push({ name, testFunction });
  }
  
  async runTests() {
    this.results = [];
    
    for (const test of this.tests) {
      try {
        const helper = new CanvasTestHelper();
        await test.testFunction(helper);
        
        this.results.push({
          name: test.name,
          passed: true,
          error: null
        });
      } catch (error) {
        this.results.push({
          name: test.name,
          passed: false,
          error: error.message
        });
      }
    }
    
    return this.results;
  }
  
  getResults() {
    return this.results;
  }
}

// Example tests
const testRunner = new CanvasTestRunner();

testRunner.addTest('Basic Drawing', async (helper) => {
  helper.drawTestPattern();
  
  // Check if red rectangle was drawn
  const imageData = helper.ctx.getImageData(25, 25, 1, 1);
  const pixel = imageData.data;
  
  if (pixel[0] < 200) { // Red channel
    throw new Error('Red rectangle not drawn correctly');
  }
});

testRunner.addTest('Circle Drawing', async (helper) => {
  const ctx = helper.ctx;
  
  ctx.fillStyle = 'blue';
  ctx.beginPath();
  ctx.arc(50, 50, 20, 0, Math.PI * 2);
  ctx.fill();
  
  // Check center of circle
  const imageData = ctx.getImageData(50, 50, 1, 1);
  const pixel = imageData.data;
  
  if (pixel[2] < 200) { // Blue channel
    throw new Error('Circle not drawn correctly');
  }
});

// Run tests
testRunner.runTests().then(results => {
  console.log('Test Results:', results);
  
  results.forEach(result => {
    console.log(\`\${result.name}: \${result.passed ? 'PASSED' : 'FAILED'}\`);
    if (!result.passed) {
      console.log('  Error:', result.error);
    }
  });
});`
        },
        {
          command: 'Canvas Debugging',
          description: 'Debug canvas applications',
          usage: 'Debugging tools and techniques',
          example: `// Canvas debugging utilities

class CanvasDebugger {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.debugMode = false;
    this.debugInfo = [];
  }
  
  enableDebugMode() {
    this.debugMode = true;
  }
  
  disableDebugMode() {
    this.debugMode = false;
  }
  
  // Draw debug info
  drawDebugInfo() {
    if (!this.debugMode) return;
    
    const ctx = this.ctx;
    
    // Save current state
    ctx.save();
    
    // Draw debug overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(10, 10, 200, 100);
    
    ctx.fillStyle = 'white';
    ctx.font = '12px monospace';
    
    let y = 30;
    this.debugInfo.forEach(info => {
      ctx.fillText(info, 20, y);
      y += 15;
    });
    
    // Draw coordinate grid
    this.drawGrid();
    
    // Draw bounds
    this.drawBounds();
    
    // Restore state
    ctx.restore();
  }
  
  drawGrid() {
    const ctx = this.ctx;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    
    // Vertical lines
    for (let x = 0; x <= this.canvas.width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.canvas.height);
      ctx.stroke();
    }
    
    // Horizontal lines
    for (let y = 0; y <= this.canvas.height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.canvas.width, y);
      ctx.stroke();
    }
  }
  
  drawBounds() {
    const ctx = this.ctx;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  addDebugInfo(info) {
    this.debugInfo.push(info);
    if (this.debugInfo.length > 5) {
      this.debugInfo.shift();
    }
  }
  
  // Log canvas state
  logCanvasState() {
    console.log('Canvas State:', {
      width: this.canvas.width,
      height: this.canvas.height,
      transform: this.ctx.getTransform(),
      fillStyle: this.ctx.fillStyle,
      strokeStyle: this.ctx.strokeStyle,
      lineWidth: this.ctx.lineWidth,
      globalAlpha: this.ctx.globalAlpha
    });
  }
  
  // Visualize hit areas
  visualizeHitAreas(areas) {
    if (!this.debugMode) return;
    
    const ctx = this.ctx;
    ctx.save();
    
    areas.forEach(area => {
      ctx.strokeStyle = 'yellow';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      
      if (area.type === 'rect') {
        ctx.strokeRect(area.x, area.y, area.width, area.height);
      } else if (area.type === 'circle') {
        ctx.beginPath();
        ctx.arc(area.x, area.y, area.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    });
    
    ctx.restore();
  }
}

// Performance monitor
class CanvasPerformanceMonitor {
  constructor(canvas) {
    this.canvas = canvas;
    this.frameCount = 0;
    this.fps = 0;
    this.lastTime = performance.now();
    this.frameTime = [];
  }
  
  start() {
    this.monitor();
  }
  
  stop() {
    // Stop monitoring
  }
  
  monitor() {
    const now = performance.now();
    const delta = now - this.lastTime;
    
    this.frameTime.push(delta);
    if (this.frameTime.length > 60) {
      this.frameTime.shift();
    }
    
    this.frameCount++;
    
    if (this.frameCount % 60 === 0) {
      this.calculateFPS();
    }
    
    this.lastTime = now;
    requestAnimationFrame(() => this.monitor());
  }
  
  calculateFPS() {
    const avgFrameTime = this.frameTime.reduce((a, b) => a + b, 0) / this.frameTime.length;
    this.fps = 1000 / avgFrameTime;
    
    console.log(\`FPS: \${this.fps.toFixed(2)}\`);
  }
  
  getMetrics() {
    return {
      fps: this.fps,
      frameCount: this.frameCount,
      avgFrameTime: this.frameTime.reduce((a, b) => a + b, 0) / this.frameTime.length
    };
  }
}

// Error handling
class CanvasErrorHandler {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.errors = [];
  }
  
  wrapMethod(methodName, originalMethod) {
    return (...args) => {
      try {
        return originalMethod.apply(this.ctx, args);
      } catch (error) {
        this.errors.push({
          method: methodName,
          args: args,
          error: error.message,
          timestamp: Date.now()
        });
        
        console.error(\`Canvas error in \${methodName}:\`, error);
        
        // Draw error indicator
        this.drawErrorIndicator();
        
        return null;
      }
    };
  }
  
  drawErrorIndicator() {
    const ctx = this.ctx;
    ctx.save();
    
    ctx.fillStyle = 'red';
    ctx.fillRect(this.canvas.width - 20, 0, 20, 20);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('!', this.canvas.width - 15, 15);
    
    ctx.restore();
  }
  
  getErrors() {
    return this.errors;
  }
  
  clearErrors() {
    this.errors = [];
  }
}

// Usage
const canvas = document.getElementById('myCanvas');
const debugger = new CanvasDebugger(canvas);
const monitor = new CanvasPerformanceMonitor(canvas);
const errorHandler = new CanvasErrorHandler(canvas);

debugger.enableDebugMode();
monitor.start();

// Wrap canvas methods for error handling
const originalFillRect = canvas.getContext('2d').fillRect;
canvas.getContext('2d').fillRect = errorHandler.wrapMethod('fillRect', originalFillRect);`
        }
      ],
    },
  ],
};
