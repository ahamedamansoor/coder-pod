import { BarChart3 } from 'lucide-react';

export const d3Cheatsheet = {
  id: 'd3',
  name: 'D3.js',
  description: 'Master D3.js data visualization from beginner to expert (v7+)',
  icon: BarChart3,
  colorTheme: 'orange' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with D3',
      commands: [
        {
          command: 'D3.js Overview',
          description: 'Understanding D3.js and data-driven documents',
          usage: 'D3.js is a JavaScript library for data visualization',
          example: `D3.js Overview:
- Data-Driven Documents
- Manipulate DOM based on data
- Powerful data visualization library
- SVG, Canvas, and HTML support
- Extensive ecosystem of plugins
- Functional programming style
- Data binding and transitions
- Scales and layouts
- Interactive visualizations
- Web standards compliant`,
        },
        {
          command: 'D3.js Key Concepts',
          description: 'Core concepts of D3.js',
          usage: 'Fundamental D3.js concepts',
          example: `Key Concepts:
- Data binding (data() to DOM)
- Selections (select, selectAll)
- Scales (linear, ordinal, time)
- Axes and legends
- Transitions and animations
- Event handling
- Layout algorithms
- Geographic projections`,
        },
        {
          command: 'D3.js Benefits',
          description: 'Advantages of using D3.js',
          usage: 'Why choose D3.js',
          example: `Benefits:
- Flexible and powerful
- Works with web standards
- Large community and ecosystem
- Extensive documentation
- Performance optimized
- Customizable visualizations`,
        },
        {
          command: 'Install D3 via npm',
          description: 'Install D3.js using npm',
          usage: 'npm install d3',
          example: `# Install via npm
npm install d3`,
        },
        {
          command: 'Install D3 via yarn',
          description: 'Install D3.js using yarn',
          usage: 'yarn add d3',
          example: `# Install via yarn
yarn add d3`,
        },
        {
          command: 'D3 CDN Latest Version',
          description: 'Use D3.js via CDN (latest version)',
          usage: 'Script tag with CDN link',
          example: `# CDN links
<!-- Latest version -->
<script src="https://d3js.org/d3.v7.min.js"></script>`,
        },
        {
          command: 'D3 CDN Specific Version',
          description: 'Use D3.js via CDN (specific version)',
          usage: 'Script tag with version-specific CDN link',
          example: `<!-- Specific version -->
<script src="https://d3js.org/d3.v5.min.js"></script>`,
        },
        {
          command: 'ES6 Modules Import',
          description: 'Import D3.js as ES6 module',
          usage: 'import * as d3 from "d3"',
          example: `# ES6 modules
import * as d3 from 'd3';`,
        },
        {
          command: 'CommonJS Import',
          description: 'Import D3.js as CommonJS module',
          usage: 'const d3 = require("d3")',
          example: `# CommonJS
const d3 = require('d3');`,
        },
        {
          command: 'Individual Modules Import',
          description: 'Import specific D3 modules for tree-shaking',
          usage: 'Import individual modules',
          example: `# Individual modules (tree-shaking)
import { select, scaleLinear } from 'd3';
import { csv, json } from 'd3-fetch';
import { line, area } from 'd3-shape';`,
        },
        {
          command: 'TypeScript Support',
          description: 'Install TypeScript types for D3.js',
          usage: 'npm install @types/d3',
          example: `# TypeScript support
npm install @types/d3`,
        },
        {
          command: 'HTML Structure Setup',
          description: 'Create basic HTML structure for D3.js',
          usage: 'HTML boilerplate for D3.js',
          example: `<!DOCTYPE html>
<html>
<head>
  <title>D3.js Basic Setup</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>`,
        },
        {
          command: 'CSS Styles Setup',
          description: 'Add CSS styles for D3.js visualization',
          usage: 'CSS for chart styling',
          example: `  <style>
    .chart {
      width: 600px;
      height: 400px;
      border: 1px solid #ccc;
    }
    .bar {
      fill: steelblue;
    }
    .bar:hover {
      fill: orange;
    }
  </style>
</head>
<body>
  <div id="chart" class="chart"></div>`,
        },
        {
          command: 'D3 Basic Data Setup',
          description: 'Define basic data for visualization',
          usage: 'JavaScript data array',
          example: `  <script>
    // Basic D3 setup
    const data = [10, 20, 30, 40, 50];`,
        },
        {
          command: 'Create SVG Container',
          description: 'Create SVG element for visualization',
          usage: 'd3.select().append("svg")',
          example: `    
    // Create SVG
    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', 600)
      .attr('height', 400);`,
        },
        {
          command: 'Create Basic Bars',
          description: 'Create bar chart elements',
          usage: 'selectAll().data().enter().append()',
          example: `    
    // Create bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => i * 100)
      .attr('y', d => 400 - d * 5)
      .attr('width', 80)
      .attr('height', d => d * 5);
  </script>
</body>
</html>`,
        },
        {
          command: 'Basic Selection Methods',
          description: 'Select DOM elements with D3.js',
          usage: 'd3.select() and d3.selectAll()',
          example: `// Basic selections
const body = d3.select('body');
const paragraphs = d3.selectAll('p');
const firstDiv = d3.select('div:first-child');`,
        },
        {
          command: 'Selection Chaining',
          description: 'Chain D3.js selection methods',
          usage: 'Method chaining in D3.js',
          example: `// Selection chaining
d3.select('body')
  .append('div')
  .attr('class', 'container')
  .append('h1')
  .text('D3.js Visualization');`,
        },
        {
          command: 'Multiple Selections',
          description: 'Apply operations to multiple elements',
          usage: 'selectAll() with data binding',
          example: `// Multiple selections
d3.selectAll('.item')
  .style('color', 'blue')
  .attr('data-index', (d, i) => i);`,
        },
        {
          command: 'Filtering Selections',
          description: 'Filter selected elements',
          usage: 'filter() method',
          example: `// Filtering selections
d3.selectAll('circle')
  .filter(d => d.radius > 10)
  .attr('fill', 'red');`,
        },
        {
          command: 'Selection Methods Overview',
          description: 'Common D3.js selection methods',
          usage: 'Selection method reference',
          example: `// Selection methods
selection
  .append('element')      // Add new element
  .remove()              // Remove elements
  .classed('name', bool) // Toggle classes
  .style('prop', 'value') // Set styles
  .attr('attr', 'value')  // Set attributes
  .text('content')        // Set text content
  .html('html')           // Set HTML content`,
        },
        {
          command: 'Basic Data Binding',
          description: 'Bind data array to DOM elements',
          usage: 'data() method',
          example: `// Basic data binding
const data = [10, 20, 30, 40, 50];

// Bind data to circles
d3.selectAll('circle')
  .data(data)
  .attr('r', d => d)
  .attr('cx', (d, i) => i * 50 + 25)
  .attr('cy', 50);`,
        },
        {
          command: 'Data with Key Function',
          description: 'Bind data with key function for consistency',
          usage: 'data(data, keyFunction)',
          example: `// Data with key function
const cities = [
  {name: 'New York', population: 8419000},
  {name: 'Los Angeles', population: 3980000},
  {name: 'Chicago', population: 2716000}
];

d3.selectAll('.city')
  .data(cities, d => d.name)
  .attr('data-population', d => d.population);`,
        },
        {
          command: 'Access Bound Data',
          description: 'Access data bound to DOM elements',
          usage: 'each() method',
          example: `// Access bound data
d3.selectAll('circle')
  .each(function(d) {
    console.log('Bound data:', d);
  });`,
        },
        {
          command: 'Enter Update Exit Pattern',
          description: 'Handle dynamic data changes',
          usage: 'enter(), update(), exit() pattern',
          example: `// Enter, Update, Exit pattern
function updateChart(data) {
  // Bind data
  const circles = d3.selectAll('circle')
    .data(data, d => d.id);`,
        },
        {
          command: 'Exit Pattern',
          description: 'Remove elements that no longer have data',
          usage: 'exit().remove() with transition',
          example: `  
  // EXIT - Remove old elements
  circles.exit()
    .transition()
    .duration(500)
    .attr('r', 0)
    .remove();`,
        },
        {
          command: 'Update Pattern',
          description: 'Update existing elements with new data',
          usage: 'Update selection with transition',
          example: `  
  // UPDATE - Update existing elements
  circles
    .transition()
    .duration(500)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', d => d.r);`,
        },
        {
          command: 'Enter Pattern',
          description: 'Create new elements for new data',
          usage: 'enter().append() with transition',
          example: `  
  // ENTER - Create new elements
  circles.enter()
    .append('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 0)
    .transition()
    .duration(500)
    .attr('r', d => d.r);
}`,
        },
        {
          command: 'General Update Pattern Setup',
          description: 'Setup for general update pattern',
          usage: 'General update pattern function',
          example: `// General update pattern
function generalUpdate(selection, data) {
  const t = selection.transition().duration(750);
  
  selection = selection.data(data, d => d.id);`,
        },
        {
          command: 'General Update Exit',
          description: 'Remove elements in general update pattern',
          usage: 'exit().remove()',
          example: `  
  selection.exit().remove();`,
        },
        {
          command: 'General Update Enter',
          description: 'Create elements in general update pattern',
          usage: 'enter().append()',
          example: `  
  const enter = selection.enter()
    .append('div')
    .attr('class', 'item');`,
        },
        {
          command: 'General Update Merge',
          description: 'Update and enter elements together',
          usage: 'enter.merge(selection)',
          example: `  
  enter.merge(selection)
    .call(update => update.transition(t).text(d => d.value));
}`,
        },
        {
          command: 'Load CSV File',
          description: 'Load CSV data file',
          usage: 'd3.csv() method',
          example: `// Load CSV file
d3.csv('data.csv').then(data => {
  console.log('CSV data:', data);
}).catch(error => {
  console.error('Error loading CSV:', error);
});`,
        },
        {
          command: 'Load JSON File',
          description: 'Load JSON data file',
          usage: 'd3.json() method',
          example: `// Load JSON file
d3.json('data.json').then(data => {
  console.log('JSON data:', data);
});`,
        },
        {
          command: 'Load TSV File',
          description: 'Load TSV data file',
          usage: 'd3.tsv() method',
          example: `// Load TSV file
d3.tsv('data.tsv').then(data => {
  console.log('TSV data:', data);
});`,
        },
        {
          command: 'Load Text File',
          description: 'Load text data file',
          usage: 'd3.text() method',
          example: `// Load text file
d3.text('data.txt').then(text => {
  console.log('Text data:', text);
});`,
        },
        {
          command: 'Load Image File',
          description: 'Load image file',
          usage: 'd3.image() method',
          example: `// Load image
d3.image('image.png').then(img => {
  console.log('Image loaded:', img);
});`,
        },
        {
          command: 'Load Multiple Files',
          description: 'Load multiple data files simultaneously',
          usage: 'Promise.all() with D3 loaders',
          example: `// Load multiple files
Promise.all([
  d3.csv('sales.csv'),
  d3.json('products.json')
]).then(([sales, products]) => {
  console.log('Multiple files loaded');
});`,
        },
        {
          command: 'Parse CSV with Custom Parser',
          description: 'Parse CSV string with custom parser',
          usage: 'd3.csvParse() with row function',
          example: `// Parse CSV with custom parser
d3.csvParse(csvString, d => ({
  name: d.name,
  value: +d.value,  // Convert to number
  date: new Date(d.date)
}));`,
        },
        {
          command: 'Create SVG Container',
          description: 'Create SVG container for visualization',
          usage: 'd3.select().append("svg")',
          example: `// Create SVG container
const svg = d3.select('body')
  .append('svg')
  .attr('width', 800)
  .attr('height', 600);`,
        },
        {
          command: 'Create SVG Rectangles',
          description: 'Create rectangle elements in SVG',
          usage: 'selectAll("rect") with data binding',
          example: `// Create rectangles
svg.selectAll('rect')
  .data([10, 20, 30, 40, 50])
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 100)
  .attr('y', d => 400 - d * 5)
  .attr('width', 80)
  .attr('height', d => d * 5)
  .attr('fill', 'steelblue');`,
        },
        {
          command: 'Create SVG Circles',
          description: 'Create circle elements in SVG',
          usage: 'selectAll("circle") with data binding',
          example: `// Create circles
svg.selectAll('circle')
  .data([5, 10, 15, 20, 25])
  .enter()
  .append('circle')
  .attr('cx', (d, i) => i * 100 + 50)
  .attr('cy', 100)
  .attr('r', d => d)
  .attr('fill', 'orange');`,
        },
        {
          command: 'Create SVG Line',
          description: 'Create line element in SVG',
          usage: 'append("line") with attributes',
          example: `// Create lines
svg.append('line')
  .attr('x1', 0)
  .attr('y1', 300)
  .attr('x2', 800)
  .attr('y2', 300)
  .attr('stroke', 'black')
  .attr('stroke-width', 2);`,
        },
        {
          command: 'Create SVG Text',
          description: 'Create text element in SVG',
          usage: 'append("text") with attributes',
          example: `// Create text
svg.append('text')
  .attr('x', 400)
  .attr('y', 50)
  .attr('text-anchor', 'middle')
  .attr('font-size', '24px')
  .attr('fill', 'navy')
  .text('D3.js Visualization');`,
        },
        {
          command: 'Create SVG Container for Groups',
          description: 'Create SVG container for grouped elements',
          usage: 'SVG setup for groups',
          example: `// Create groups for organization
const svg = d3.select('body')
  .append('svg')
  .attr('width', 800)
  .attr('height', 600);`,
        },
        {
          command: 'Create Main Chart Group',
          description: 'Create main chart group with transform',
          usage: 'append("g") with transform',
          example: `// Main chart group
const chart = svg.append('g')
  .attr('class', 'chart')
  .attr('transform', 'translate(50, 50)');`,
        },
        {
          command: 'Create X Axis Group',
          description: 'Create X axis group',
          usage: 'append("g") for X axis',
          example: `// Axis groups
const xAxis = chart.append('g')
  .attr('class', 'x-axis')
  .attr('transform', 'translate(0, 400)');`,
        },
        {
          command: 'Create Y Axis Group',
          description: 'Create Y axis group',
          usage: 'append("g") for Y axis',
          example: `const yAxis = chart.append('g')
  .attr('class', 'y-axis');`,
        },
        {
          command: 'Transform Elements',
          description: 'Apply transform to elements',
          usage: 'transform attribute with translate',
          example: `// Transformations
chart.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('transform', (d, i) => \`translate(\${i * 100}, 0)\`)
  .attr('width', 80)
  .attr('height', d => d * 5);`,
        },
        {
          command: 'Rotation and Scaling Transform',
          description: 'Apply rotation and scaling to group',
          usage: 'transform with rotate and scale',
          example: `// Rotation and scaling
svg.append('g')
  .attr('transform', 'translate(400, 300) rotate(45) scale(1.5)')
  .append('rect')
  .attr('x', -50)
  .attr('y', -50)
  .attr('width', 100)
  .attr('height', 100)
  .attr('fill', 'purple');`,
        },
      ],
    },
    {
      title: 'Scales and Axes',
      commands: [
        {
          command: 'Linear Scale Basic',
          description: 'Create basic linear scale',
          usage: 'd3.scaleLinear()',
          example: `// Linear scale
const linearScale = d3.scaleLinear()
  .domain([0, 100])  // Input domain
  .range([0, 500]);  // Output range

console.log(linearScale(50));    // 250
console.log(linearScale(75));    // 375`,
        },
        {
          command: 'Linear Scale with Nice',
          description: 'Create linear scale with nice rounding',
          usage: 'scaleLinear().nice()',
          example: `// Scale with nice rounding
const niceScale = d3.scaleLinear()
  .domain([0, 97])
  .nice()  // Rounds to nice values
  .range([0, 500]);`,
        },
        {
          command: 'Inverted Linear Scale',
          description: 'Create inverted linear scale',
          usage: 'scaleLinear() with inverted range',
          example: `// Inverted scale
const invertedScale = d3.scaleLinear()
  .domain([0, 100])
  .range([500, 0]);  // Inverted range`,
        },
        {
          command: 'Segmented Linear Scale',
          description: 'Create linear scale with multiple segments',
          usage: 'scaleLinear() with multiple domain values',
          example: `// Multiple segments
const segmentedScale = d3.scaleLinear()
  .domain([0, 25, 50, 75, 100])
  .range(['red', 'orange', 'yellow', 'green', 'blue']);`,
        },
        {
          command: 'Clamped Linear Scale',
          description: 'Create linear scale with clamping',
          usage: 'scaleLinear().clamp()',
          example: `// Clamp values
const clampedScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 500])
  .clamp(true);  // Clamp values outside domain`,
        },
        {
          command: 'Ordinal Scale Basic',
          description: 'Create basic ordinal scale',
          usage: 'd3.scaleOrdinal()',
          example: `// Ordinal scale
const ordinalScale = d3.scaleOrdinal()
  .domain(['apple', 'banana', 'orange'])
  .range(['#ff0000', '#ffff00', '#ffa500']);

console.log(ordinalScale('apple'));   // #ff0000`,
        },
        {
          command: 'Ordinal Scale Color Schemes',
          description: 'Use D3 color schemes with ordinal scale',
          usage: 'scaleOrdinal() with d3.schemeCategory10',
          example: `// Color schemes
const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
  .domain(['A', 'B', 'C', 'D', 'E']);`,
        },
        {
          command: 'Ordinal Scale Range Bands',
          description: 'Create ordinal scale with band range',
          usage: 'd3.scaleBand()',
          example: `// Band scale
const bandScale = d3.scaleBand()
  .domain(['A', 'B', 'C', 'D'])
  .range([0, 400])
  .padding(0.1);`,
        },
        {
          command: 'Ordinal Scale Point Scale',
          description: 'Create ordinal scale with points',
          usage: 'd3.scalePoint()',
          example: `// Point scale
const pointScale = d3.scalePoint()
  .domain(['A', 'B', 'C', 'D'])
  .range([0, 400]);`,
        },
        {
          command: 'Time Scale Basic',
          description: 'Create time scale for dates',
          usage: 'd3.scaleTime()',
          example: `// Time scale
const timeScale = d3.scaleTime()
  .domain([new Date(2020, 0, 1), new Date(2020, 11, 31)])
  .range([0, 500]);`,
        },
        {
          command: 'Time Scale Nice',
          description: 'Create time scale with nice intervals',
          usage: 'scaleTime().nice()',
          example: `// Time scale with nice intervals
const niceTimeScale = d3.scaleTime()
  .domain([new Date(2020, 0, 1), new Date(2020, 11, 31)])
  .nice()
  .range([0, 500]);`,
        },
        {
          command: 'Log Scale',
          description: 'Create logarithmic scale',
          usage: 'd3.scaleLog()',
          example: `// Log scale
const logScale = d3.scaleLog()
  .domain([1, 1000])
  .range([0, 500]);`,
        },
        {
          command: 'Square Root Scale',
          description: 'Create square root scale',
          usage: 'd3.scaleSqrt()',
          example: `// Square root scale
const sqrtScale = d3.scaleSqrt()
  .domain([0, 100])
  .range([0, 500]);`,
        },
        {
          command: 'Quantize Scale',
          description: 'Create quantize scale for discrete ranges',
          usage: 'd3.scaleQuantize()',
          example: `// Quantize scale
const quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(['low', 'medium', 'high']);`,
        },
        {
          command: 'Quantile Scale',
          description: 'Create quantile scale for data distribution',
          usage: 'd3.scaleQuantile()',
          example: `// Quantile scale
const quantileScale = d3.scaleQuantile()
  .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .range(['Q1', 'Q2', 'Q3', 'Q4']);`,
        },
        {
          command: 'Threshold Scale',
          description: 'Create threshold scale for discrete thresholds',
          usage: 'd3.scaleThreshold()',
          example: `// Threshold scale
const thresholdScale = d3.scaleThreshold()
  .domain([0, 25, 50, 75, 100])
  .range(['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff']);`,
        },
        {
          command: 'Create Bottom Axis',
          description: 'Create bottom axis generator',
          usage: 'd3.axisBottom()',
          example: `// Bottom axis
const xAxis = d3.axisBottom(xScale)
  .tickSize(5)
  .tickPadding(5)
  .ticks(5);`,
        },
        {
          command: 'Create Left Axis',
          description: 'Create left axis generator',
          usage: 'd3.axisLeft()',
          example: `// Left axis
const yAxis = d3.axisLeft(yScale)
  .tickSize(5)
  .tickPadding(5)
  .ticks(5);`,
        },
        {
          command: 'Create Top Axis',
          description: 'Create top axis generator',
          usage: 'd3.axisTop()',
          example: `// Top axis
const topAxis = d3.axisTop(xScale)
  .tickSize(5)
  .tickPadding(5);`,
        },
        {
          command: 'Create Right Axis',
          description: 'Create right axis generator',
          usage: 'd3.axisRight()',
          example: `// Right axis
const rightAxis = d3.axisRight(yScale)
  .tickSize(5)
  .tickPadding(5);`,
        },
        {
          command: 'Render Axis',
          description: 'Render axis to SVG',
          usage: 'call() method with axis generator',
          example: `// Render axis
svg.append('g')
  .attr('class', 'x-axis')
  .attr('transform', 'translate(0, 400)')
  .call(xAxis);`,
        },
        {
          command: 'Custom Tick Format',
          description: 'Format axis ticks',
          usage: 'tickFormat() method',
          example: `// Custom tick format
const xAxis = d3.axisBottom(xScale)
  .tickFormat(d3.format('$,.0f'));  // Currency format`,
        },
        {
          command: 'Custom Tick Values',
          description: 'Set custom tick values',
          usage: 'tickValues() method',
          example: `// Custom tick values
const xAxis = d3.axisBottom(xScale)
  .tickValues([0, 25, 50, 75, 100]);`,
        },
        {
          command: 'Axis Styling',
          description: 'Style axis elements',
          usage: 'CSS styling for axis',
          example: `/* Axis styling */
.axis line {
  stroke: #000;
}

.axis path {
  stroke: #000;
  fill: none;
}

.axis text {
  font-size: 12px;
}`,
        },
      ],
    },
    // Continue with more sections...
  ],
};
