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
          command: 'What is D3.js?',
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
- Web standards compliant

Key Concepts:
- Data binding (data() to DOM)
- Selections (select, selectAll)
- Scales (linear, ordinal, time)
- Axes and legends
- Transitions and animations
- Event handling
- Layout algorithms
- Geographic projections

Benefits:
- Flexible and powerful
- Works with web standards
- Large community and ecosystem
- Extensive documentation
- Performance optimized
- Customizable visualizations`
        },
        {
          command: 'Installing D3.js',
          description: 'Install and set up D3.js in your project',
          usage: 'Set up D3.js with various methods',
          example: `# Install via npm
npm install d3

# Install via yarn
yarn add d3

# CDN links
<!-- Latest version -->
<script src="https://d3js.org/d3.v7.min.js"></script>

<!-- Specific version -->
<script src="https://d3js.org/d3.v5.min.js"></script>

# ES6 modules
import * as d3 from 'd3';

# CommonJS
const d3 = require('d3');

# Individual modules (tree-shaking)
import { select, scaleLinear } from 'd3';
import { csv, json } from 'd3-fetch';
import { line, area } from 'd3-shape';

# TypeScript support
npm install @types/d3`
        },
        {
          command: 'Basic D3 Setup',
          description: 'Set up basic D3.js environment',
          usage: 'Create basic D3 visualization setup',
          example: `<!DOCTYPE html>
<html>
<head>
  <title>D3.js Basic Setup</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <style>
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
  <div id="chart" class="chart"></div>
  
  <script>
    // Basic D3 setup
    const data = [10, 20, 30, 40, 50];
    
    // Create SVG
    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', 600)
      .attr('height', 400);
    
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
</html>`
        },
        {
          command: 'D3 Selections',
          description: 'Understanding D3 selection methods',
          usage: 'Select and manipulate DOM elements',
          example: `// Basic selections
const body = d3.select('body');
const paragraphs = d3.selectAll('p');
const firstDiv = d3.select('div:first-child');

// Selection chaining
d3.select('body')
  .append('div')
  .attr('class', 'container')
  .append('h1')
  .text('D3.js Visualization');

// Multiple selections
d3.selectAll('.item')
  .style('color', 'blue')
  .attr('data-index', (d, i) => i);

// Filtering selections
d3.selectAll('circle')
  .filter(d => d.radius > 10)
  .attr('fill', 'red');

// Selection methods
selection
  .append('element')      // Add new element
  .remove()              // Remove elements
  .classed('name', bool) // Toggle classes
  .style('prop', 'value') // Set styles
  .attr('attr', 'value')  // Set attributes
  .text('content')        // Set text content
  .html('html')           // Set HTML content`
        },
      ],
    },
    {
      title: 'Data Binding',
      commands: [
        {
          command: 'Data Binding Basics',
          description: 'Bind data to DOM elements',
          usage: 'Use data() method to bind data',
          example: `// Basic data binding
const data = [10, 20, 30, 40, 50];

// Bind data to circles
d3.selectAll('circle')
  .data(data)
  .attr('r', d => d)
  .attr('cx', (d, i) => i * 50 + 25)
  .attr('cy', 50);

// Data with key function
const cities = [
  {name: 'New York', population: 8419000},
  {name: 'Los Angeles', population: 3980000},
  {name: 'Chicago', population: 2716000}
];

d3.selectAll('.city')
  .data(cities, d => d.name)
  .attr('data-population', d => d.population);

// Access bound data
d3.selectAll('circle')
  .each(function(d) {
    console.log('Bound data:', d);
  });`
        },
        {
          command: 'Enter, Update, Exit Pattern',
          description: 'Handle dynamic data with enter/update/exit',
          usage: 'Manage DOM elements based on data changes',
          example: `// Enter, Update, Exit pattern
function updateChart(data) {
  // Bind data
  const circles = d3.selectAll('circle')
    .data(data, d => d.id);
  
  // EXIT - Remove old elements
  circles.exit()
    .transition()
    .duration(500)
    .attr('r', 0)
    .remove();
  
  // UPDATE - Update existing elements
  circles
    .transition()
    .duration(500)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', d => d.r);
  
  // ENTER - Create new elements
  circles.enter()
    .append('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 0)
    .transition()
    .duration(500)
    .attr('r', d => d.r);
}

// General update pattern
function generalUpdate(selection, data) {
  const t = selection.transition().duration(750);
  
  selection = selection.data(data, d => d.id);
  
  selection.exit().remove();
  
  const enter = selection.enter()
    .append('div')
    .attr('class', 'item');
  
  enter.merge(selection)
    .call(update => update.transition(t).text(d => d.value));
}`
        },
        {
          command: 'Data Loading',
          description: 'Load external data files',
          usage: 'Load CSV, JSON, TSV, and other formats',
          example: `// Load CSV file
d3.csv('data.csv').then(data => {
  console.log('CSV data:', data);
}).catch(error => {
  console.error('Error loading CSV:', error);
});

// Load JSON file
d3.json('data.json').then(data => {
  console.log('JSON data:', data);
});

// Load TSV file
d3.tsv('data.tsv').then(data => {
  console.log('TSV data:', data);
});

// Load text file
d3.text('data.txt').then(text => {
  console.log('Text data:', text);
});

// Load image
d3.image('image.png').then(img => {
  console.log('Image loaded:', img);
});

// Load multiple files
Promise.all([
  d3.csv('sales.csv'),
  d3.json('products.json')
]).then(([sales, products]) => {
  console.log('Multiple files loaded');
});

// Parse CSV with custom parser
d3.csvParse(csvString, d => ({
  name: d.name,
  value: +d.value,  // Convert to number
  date: new Date(d.date)
}));`
        },
      ],
    },
    {
      title: 'Basic SVG Elements',
      commands: [
        {
          command: 'Creating SVG Elements',
          description: 'Create and manipulate SVG elements',
          usage: 'Use D3 to create SVG shapes',
          example: `// Create SVG container
const svg = d3.select('body')
  .append('svg')
  .attr('width', 800)
  .attr('height', 600);

// Create rectangles
svg.selectAll('rect')
  .data([10, 20, 30, 40, 50])
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 100)
  .attr('y', d => 400 - d * 5)
  .attr('width', 80)
  .attr('height', d => d * 5)
  .attr('fill', 'steelblue');

// Create circles
svg.selectAll('circle')
  .data([5, 10, 15, 20, 25])
  .enter()
  .append('circle')
  .attr('cx', (d, i) => i * 100 + 50)
  .attr('cy', 100)
  .attr('r', d => d)
  .attr('fill', 'orange');

// Create lines
svg.append('line')
  .attr('x1', 0)
  .attr('y1', 300)
  .attr('x2', 800)
  .attr('y2', 300)
  .attr('stroke', 'black')
  .attr('stroke-width', 2);

// Create text
svg.append('text')
  .attr('x', 400)
  .attr('y', 50)
  .attr('text-anchor', 'middle')
  .attr('font-size', '24px')
  .attr('fill', 'navy')
  .text('D3.js Visualization');`
        },
        {
          command: 'SVG Groups and Transformations',
          description: 'Use groups and transformations',
          usage: 'Organize elements with groups',
          example: `// Create groups for organization
const svg = d3.select('body')
  .append('svg')
  .attr('width', 800)
  .attr('height', 600);

// Main chart group
const chart = svg.append('g')
  .attr('class', 'chart')
  .attr('transform', 'translate(50, 50)');

// Axis groups
const xAxis = chart.append('g')
  .attr('class', 'x-axis')
  .attr('transform', 'translate(0, 400)');

const yAxis = chart.append('g')
  .attr('class', 'y-axis');

// Transformations
chart.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('transform', (d, i) => \`translate(\${i * 100}, 0)\`)
  .attr('width', 80)
  .attr('height', d => d * 5);

// Rotation and scaling
svg.append('g')
  .attr('transform', 'translate(400, 300) rotate(45) scale(1.5)')
  .append('rect')
  .attr('x', -50)
  .attr('y', -50)
  .attr('width', 100)
  .attr('height', 100)
  .attr('fill', 'purple');`
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Scales and Axes',
      commands: [
        {
          command: 'Linear Scales',
          description: 'Create linear scale mappings',
          usage: 'Map data values to visual properties',
          example: `// Linear scale
const linearScale = d3.scaleLinear()
  .domain([0, 100])  // Input domain
  .range([0, 500]);  // Output range

console.log(linearScale(50));    // 250
console.log(linearScale(75));    // 375

// Scale with nice rounding
const niceScale = d3.scaleLinear()
  .domain([0, 97])
  .nice()  // Rounds to nice values
  .range([0, 500]);

// Inverted scale
const invertedScale = d3.scaleLinear()
  .domain([0, 100])
  .range([500, 0]);  // Inverted range

// Multiple segments
const segmentedScale = d3.scaleLinear()
  .domain([0, 25, 50, 75, 100])
  .range(['red', 'orange', 'yellow', 'green', 'blue']);

// Clamp values
const clampedScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 500])
  .clamp(true);  // Clamp values outside domain`
        },
        {
          command: 'Ordinal Scales',
          description: 'Map discrete values to discrete outputs',
          usage: 'Handle categorical data',
          example: `// Ordinal scale
const ordinalScale = d3.scaleOrdinal()
  .domain(['apple', 'banana', 'orange'])
  .range(['#ff0000', '#ffff00', '#ffa500']);

console.log(ordinalScale('apple'));   // #ff0000

// Color schemes
const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
  .domain(['A', 'B', 'C', 'D', 'E']);

// Band scale for bars
const bandScale = d3.scaleBand()
  .domain(['Jan', 'Feb', 'Mar', 'Apr', 'May'])
  .range([0, 500])
  .padding(0.1);  // 10% padding

console.log(bandScale('Jan'));     // 0
console.log(bandScale.bandwidth()); // Width of each band

// Point scale for scatter plots
const pointScale = d3.scalePoint()
  .domain(['A', 'B', 'C', 'D', 'E'])
  .range([0, 500])
  .padding(0.5);`
        },
        {
          command: 'Time Scales',
          description: 'Handle dates and times',
          usage: 'Map temporal data to visual properties',
          example: `// Time scale
const timeScale = d3.scaleTime()
  .domain([new Date(2020, 0, 1), new Date(2020, 11, 31)])
  .range([0, 800]);

console.log(timeScale(new Date(2020, 5, 15))); // Middle of year

// Parse dates
const parseDate = d3.timeParse('%Y-%m-%d');
const formatDate = d3.timeFormat('%B %d, %Y');

const date = parseDate('2020-06-15');
console.log(formatDate(date)); // June 15, 2020

// Time intervals
const dateExtent = d3.extent(data, d => d.date);
const timeScale = d3.scaleTime()
  .domain(dateExtent)
  .range([0, width]);

// Time formatting
const formatTime = d3.timeFormat('%H:%M');
const formatDate = d3.timeFormat('%Y-%m-%d');
const formatDateTime = d3.timeFormat('%Y-%m-%d %H:%M');`
        },
        {
          command: 'Creating Axes',
          description: 'Create and customize axes',
          usage: 'Add axes to visualizations',
          example: `// X axis (bottom)
const xAxis = d3.axisBottom(xScale)
  .ticks(10)           // Number of ticks
  .tickFormat(d3.format('d'))  // Format ticks
  .tickSize(6)         // Tick size
  .tickPadding(5);     // Padding between ticks and labels

// Y axis (left)
const yAxis = d3.axisLeft(yScale)
  .ticks(5)
  .tickFormat(d3.format('.0%'));  // Percentage format

// Add axes to SVG
svg.append('g')
  .attr('class', 'x-axis')
  .attr('transform', \`translate(0, \${height})\`)
  .call(xAxis);

svg.append('g')
  .attr('class', 'y-axis')
  .call(yAxis);

// Custom axis styling
svg.selectAll('.tick line')
  .attr('stroke', '#666')
  .attr('stroke-width', 1);

svg.selectAll('.tick text')
  .style('font-size', '12px')
  .style('fill', '#333');

// Axis labels
svg.append('text')
  .attr('transform', 'rotate(-90)')
  .attr('y', 0 - margin.left)
  .attr('x', 0 - (height / 2))
  .attr('dy', '1em')
  .style('text-anchor', 'middle')
  .text('Value');`
        },
      ],
    },
    {
      title: 'Shapes and Lines',
      commands: [
        {
          command: 'Line Generators',
          description: 'Create line paths from data',
          usage: 'Generate SVG paths for line charts',
          example: `// Line generator
const line = d3.line()
  .x(d => xScale(d.x))
  .y(d => yScale(d.y))
  .curve(d3.curveMonotoneX);  // Curve type

// Generate path
const pathData = line(data);

svg.append('path')
  .datum(data)
  .attr('d', line)
  .attr('fill', 'none')
  .attr('stroke', 'steelblue')
  .attr('stroke-width', 2);

// Area generator
const area = d3.area()
  .x(d => xScale(d.x))
  .y0(yScale(0))  // Bottom line
  .y1(d => yScale(d.y))  // Top line
  .curve(d3.curveBasis);

svg.append('path')
  .datum(data)
  .attr('d', area)
  .attr('fill', 'lightblue')
  .attr('opacity', 0.7);

// Different curve types
const curves = [
  d3.curveLinear,
  d3.curveStep,
  d3.curveBasis,
  d3.curveCardinal,
  d3.curveCatmullRom,
  d3.curveMonotoneX,
  d3.curveMonotoneY
];`
        },
        {
          command: 'Pie and Arc Generators',
          description: 'Create pie charts and arc shapes',
          usage: 'Generate circular visualizations',
          example: `// Pie generator
const pie = d3.pie()
  .value(d => d.value)
  .sort(null);  // Don't sort

const arcData = pie(data);

// Arc generator
const arc = d3.arc()
  .innerRadius(0)    // For pie chart
  .outerRadius(radius);

// Donut chart arc
const donutArc = d3.arc()
  .innerRadius(radius * 0.6)
  .outerRadius(radius);

// Create pie slices
svg.selectAll('path')
  .data(arcData)
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', (d, i) => colorScale(i))
  .attr('stroke', 'white')
  .attr('stroke-width', 2);

// Add labels
const labelArc = d3.arc()
  .innerRadius(radius * 0.8)
  .outerRadius(radius * 0.8);

svg.selectAll('text')
  .data(arcData)
  .enter()
  .append('text')
  .attr('transform', d => \`translate(\${labelArc.centroid(d)})\`)
  .attr('text-anchor', 'middle')
  .text(d => d.data.label);`
        },
        {
          command: 'Stack Layout',
          description: 'Create stacked bar and area charts',
          usage: 'Stack multiple data series',
          example: `// Stack generator
const stack = d3.stack()
  .keys(['series1', 'series2', 'series3'])
  .order(d3.stackOrderNone)
  .offset(d3.stackOffsetNone);

const stackedData = stack(data);

// Create stacked bars
const series = svg.selectAll('.series')
  .data(stackedData)
  .enter()
  .append('g')
  .attr('class', 'series')
  .attr('fill', (d, i) => colors[i]);

series.selectAll('rect')
  .data(d => d)
  .enter()
  .append('rect')
  .attr('x', (d, i) => xScale(i))
  .attr('y', d => yScale(d[1]))
  .attr('height', d => yScale(d[0]) - yScale(d[1]))
  .attr('width', xScale.bandwidth());

// Normalized stack (100%)
const normalizedStack = d3.stack()
  .keys(['series1', 'series2', 'series3'])
  .offset(d3.stackOffsetExpand);

// Streamgraph
const streamgraph = d3.stack()
  .keys(['series1', 'series2', 'series3'])
  .offset(d3.stackOffsetWiggle);`
        },
      ],
    },
    {
      title: 'Interactivity',
      commands: [
        {
          command: 'Event Handling',
          description: 'Add interactivity to visualizations',
          usage: 'Handle mouse and touch events',
          example: `// Mouse events
d3.selectAll('circle')
  .on('click', function(event, d) {
    console.log('Clicked:', d);
    d3.select(this).attr('fill', 'red');
  })
  .on('mouseover', function(event, d) {
    d3.select(this)
      .transition()
      .duration(200)
      .attr('r', d => d * 1.2);
  })
  .on('mouseout', function(event, d) {
    d3.select(this)
      .transition()
      .duration(200)
      .attr('r', d);
  });

// Touch events
d3.selectAll('rect')
  .on('touchstart', function(event, d) {
    event.preventDefault();
    console.log('Touch started:', d);
  })
  .on('touchmove', function(event, d) {
    event.preventDefault();
    const touch = event.touches[0];
    console.log('Touch position:', touch.clientX, touch.clientY);
  });

// Drag behavior
const drag = d3.drag()
  .on('start', function(event, d) {
    d3.select(this).raise().classed('active', true);
  })
  .on('drag', function(event, d) {
    d3.select(this)
      .attr('cx', d.x = event.x)
      .attr('cy', d.y = event.y);
  })
  .on('end', function(event, d) {
    d3.select(this).classed('active', false);
  });

d3.selectAll('circle').call(drag);`
        },
        {
          command: 'Tooltips',
          description: 'Create interactive tooltips',
          usage: 'Show information on hover',
          example: `// Create tooltip
const tooltip = d3.select('body')
  .append('div')
  .attr('class', 'tooltip')
  .style('opacity', 0)
  .style('position', 'absolute')
  .style('background', 'rgba(0, 0, 0, 0.8)')
  .style('color', 'white')
  .style('padding', '8px')
  .style('border-radius', '4px')
  .style('font-size', '12px');

// Add tooltip events
d3.selectAll('circle')
  .on('mouseover', function(event, d) {
    tooltip.transition()
      .duration(200)
      .style('opacity', 1);
    
    tooltip.html(\`<strong>\${d.name}</strong><br/>Value: \${d.value}\`)
      .style('left', (event.pageX + 10) + 'px')
      .style('top', (event.pageY - 28) + 'px');
  })
  .on('mouseout', function(d) {
    tooltip.transition()
      .duration(500)
      .style('opacity', 0);
  });

// Advanced tooltip with HTML
const advancedTooltip = d3.select('body')
  .append('div')
  .attr('class', 'advanced-tooltip')
  .style('opacity', 0);

function showTooltip(event, d) {
  const content = \`
    <div style="font-weight: bold;">\${d.name}</div>
    <div>Value: \${d3.format(',.0f')(d.value)}</div>
    <div>Percentage: \${d3.format('.1%')(d.percent)}</div>
  \`;
  
  advancedTooltip
    .html(content)
    .style('left', event.pageX + 'px')
    .style('top', event.pageY + 'px')
    .transition()
    .duration(200)
    .style('opacity', 1);
}`
        },
        {
          command: 'Zoom and Pan',
          description: 'Add zoom and pan functionality',
          usage: 'Implement zoom and pan interactions',
          example: `// Zoom behavior
const zoom = d3.zoom()
  .scaleExtent([0.5, 10])  // Min/max zoom
  .on('zoom', function(event) {
    const { transform } = event;
    
    // Apply transform to chart group
    chart.attr('transform', transform);
    
    // Update axes
    xAxis.call(d3.axisBottom(xScale.scale(transform.rescaleX(xScale))));
    yAxis.call(d3.axisLeft(yScale.scale(transform.rescaleY(yScale))));
  });

// Apply zoom to SVG
svg.call(zoom);

// Zoom to specific area
function zoomToArea(x0, y0, x1, y1) {
  svg.transition()
    .duration(750)
    .call(
      zoom.transform,
      d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
        .translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
    );
}

// Reset zoom
function resetZoom() {
  svg.transition()
    .duration(750)
    .call(zoom.transform, d3.zoomIdentity);
}

// Constrained zoom
const constrainedZoom = d3.zoom()
  .scaleExtent([1, 10])
  .on('zoom', function(event) {
    const { transform } = event;
    
    // Constrain panning
    transform.x = Math.max(-width * (transform.k - 1), 
                   Math.min(0, transform.x));
    transform.y = Math.max(-height * (transform.k - 1), 
                   Math.min(0, transform.y));
    
    chart.attr('transform', transform);
  });`
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Advanced Data Manipulation',
      commands: [
        {
          command: 'Data Aggregation',
          description: 'Aggregate and summarize data',
          usage: 'Group and aggregate data for visualization',
          example: `// Group data
const groupedData = d3.group(data, d => d.category);

// Rollup (aggregate)
const aggregated = d3.rollup(
  data,
  v => d3.sum(v, d => d.value),  // Aggregator
  d => d.category,                // Group key
  d => d.subcategory              // Subgroup key
);

// Nest data (legacy)
const nested = d3.nest()
  .key(d => d.category)
  .key(d => d.subcategory)
  .rollup(values => d3.sum(values, d => d.value))
  .entries(data);

// Array aggregations
const extent = d3.extent(data, d => d.value);
const mean = d3.mean(data, d => d.value);
const median = d3.median(data, d => d.value);
const deviation = d3.deviation(data, d => d.value);

// Histogram
const histogram = d3.histogram()
  .value(d => d.value)
  .domain(d3.extent(data, d => d.value))
  .thresholds(20);

const bins = histogram(data);

// Bin data
const binScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([0, width]);

const bins = d3.bin()
  .value(d => d.value)
  .domain(binScale.domain())
  .thresholds(20)(data);`
        },
        {
          command: 'Data Filtering and Sorting',
          description: 'Filter and sort datasets',
          usage: 'Prepare data for visualization',
          example: `// Filter data
const filteredData = data.filter(d => d.value > 100);
const top10 = data
  .sort((a, b) => b.value - a.value)
  .slice(0, 10);

// Sort by multiple criteria
const sortedData = data.sort((a, b) => {
  if (a.category !== b.category) {
    return d3.ascending(a.category, b.category);
  }
  return d3.descending(a.value, b.value);
});

// Cross filter data
const crossfilter = {
  filterByCategory: function(data, category) {
    return data.filter(d => d.category === category);
  },
  filterByRange: function(data, min, max, accessor) {
    return data.filter(d => {
      const value = accessor(d);
      return value >= min && value <= max;
    });
  },
  filterByDate: function(data, startDate, endDate, accessor) {
    return data.filter(d => {
      const date = accessor(d);
      return date >= startDate && date <= endDate;
    });
  }
};

// Dynamic filtering
function filterData(data, filters) {
  return data.filter(d => {
    return Object.keys(filters).every(key => {
      if (filters[key] === null || filters[key] === undefined) {
        return true;
      }
      return d[key] === filters[key];
    });
  });
}`
        },
        {
          command: 'Data Joins',
          description: 'Join multiple datasets',
          usage: 'Combine data from different sources',
          example: `// Inner join
function innerJoin(left, right, leftKey, rightKey) {
  const index = new Map(right.map(d => [rightKey(d), d]));
  return left.map(l => {
    const r = index.get(leftKey(l));
    return r ? Object.assign({}, l, r) : null;
  }).filter(d => d !== null);
}

// Left join
function leftJoin(left, right, leftKey, rightKey) {
  const index = new Map(right.map(d => [rightKey(d), d]));
  return left.map(l => {
    const r = index.get(leftKey(l));
    return Object.assign({}, l, r || {});
  });
}

// Merge datasets
const mergedData = data1.map(d => {
  const match = data2.find(item => item.id === d.id);
  return match ? Object.assign({}, d, match) : d;
});

// D3 merge
const allArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];
const flattened = d3.merge(allArrays); // [1, 2, 3, 4, 5, 6, 7, 8]

// D3 zip
const zipped = d3.zip(['a', 'b', 'c'], [1, 2, 3]);
// [['a', 1], ['b', 2], ['c', 3]]`
        },
      ],
    },
    {
      title: 'Advanced Layouts',
      commands: [
        {
          command: 'Force Layout',
          description: 'Create force-directed graphs',
          usage: 'Build network visualizations',
          example: `// Force simulation
const simulation = d3.forceSimulation(nodes)
  .force('link', d3.forceLink(links).id(d => d.id).distance(50))
  .force('charge', d3.forceManyBody().strength(-100))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('collision', d3.forceCollide().radius(20))
  .on('tick', ticked);

// Create links
const link = svg.append('g')
  .selectAll('line')
  .data(links)
  .enter()
  .append('line')
  .attr('stroke', '#999')
  .attr('stroke-opacity', 0.6)
  .attr('stroke-width', d => Math.sqrt(d.value));

// Create nodes
const node = svg.append('g')
  .selectAll('circle')
  .data(nodes)
  .enter()
  .append('circle')
  .attr('r', 5)
  .attr('fill', d => color(d.group))
  .call(d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended));

// Update positions
function ticked() {
  link
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);
  
  node
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);
}

// Drag functions
function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}`
        },
        {
          command: 'Tree Layout',
          description: 'Create hierarchical tree visualizations',
          usage: 'Build tree diagrams and dendrograms',
          example: `// Tree layout
const treeLayout = d3.tree()
  .size([width, height])
  .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

// Create hierarchy
const root = d3.hierarchy(data);
treeLayout(root);

// Create links
const link = svg.selectAll('.link')
  .data(root.links())
  .enter()
  .append('path')
  .attr('class', 'link')
  .attr('d', d3.linkVertical()
    .x(d => d.x)
    .y(d => d.y))
  .attr('fill', 'none')
  .attr('stroke', '#ccc')
  .attr('stroke-width', 2);

// Create nodes
const node = svg.selectAll('.node')
  .data(root.descendants())
  .enter()
  .append('g')
  .attr('class', 'node')
  .attr('transform', d => \`translate(\${d.x}, \${d.y})\`);

node.append('circle')
  .attr('r', 5)
  .attr('fill', d => d.children ? 'steelblue' : 'lightsteelblue');

node.append('text')
  .attr('dy', '.35em')
  .attr('x', d => d.children ? -13 : 13)
  .style('text-anchor', d => d.children ? 'end' : 'start')
  .text(d => d.data.name);

// Radial tree
const radialTree = d3.tree()
  .size([2 * Math.PI, radius])
  .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

radialTree(root);

const radialLink = d3.linkRadial()
  .angle(d => d.x)
  .radius(d => d.y);`
        },
        {
          command: 'Cluster and Pack Layouts',
          description: 'Create cluster and treemap visualizations',
          usage: 'Build hierarchical visualizations',
          example: `// Cluster layout
const cluster = d3.cluster()
  .size([width, height])
  .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

const root = d3.hierarchy(data);
cluster(root);

// Treemap layout
const treemap = d3.treemap()
  .size([width, height])
  .padding(2)
  .round(true);

const root = d3.hierarchy(data)
  .sum(d => d.value)
  .sort((a, b) => b.value - a.value);

treemap(root);

const cell = svg.selectAll('.cell')
  .data(root.leaves())
  .enter()
  .append('g')
  .attr('class', 'cell')
  .attr('transform', d => \`translate(\${d.x0}, \${d.y0})\`);

cell.append('rect')
  .attr('width', d => d.x1 - d.x0)
  .attr('height', d => d.y1 - d.y0)
  .attr('fill', d => color(d.parent.data.name))
  .attr('stroke', 'white')
  .attr('stroke-width', 2);

cell.append('text')
  .attr('x', 4)
  .attr('y', 16)
  .text(d => d.data.name)
  .style('font-size', '12px')
  .style('font-family', 'Arial, sans-serif');

// Pack layout
const pack = d3.pack()
  .size([width, height])
  .padding(3);

const root = d3.hierarchy(data)
  .sum(d => d.value)
  .sort((a, b) => b.value - a.value);

pack(root);

const node = svg.selectAll('.node')
  .data(root.descendants())
  .enter()
  .append('g')
  .attr('class', 'node')
  .attr('transform', d => \`translate(\${d.x}, \${d.y})\`);

node.append('circle')
  .attr('r', d => d.r)
  .attr('fill', d => d.children ? color(d.depth) : 'lightsteelblue')
  .attr('stroke', 'white')
  .attr('stroke-width', 2);`
        },
      ],
    },
    {
      title: 'Geographic Visualization',
      commands: [
        {
          command: 'Geo Projections',
          description: 'Create map projections',
          usage: 'Visualize geographic data',
          example: `// Mercator projection
const projection = d3.geoMercator()
  .scale(100)
  .translate([width / 2, height / 2]);

// Path generator
const path = d3.geoPath().projection(projection);

// Load and display map
d3.json('world.geojson').then(world => {
  svg.selectAll('.country')
    .data(world.features)
    .enter()
    .append('path')
    .attr('class', 'country')
    .attr('d', path)
    .attr('fill', '#ccc')
    .attr('stroke', '#fff')
    .attr('stroke-width', 0.5);
});

// Different projections
const projections = {
  mercator: d3.geoMercator(),
  albers: d3.geoAlbers(),
  albersUsa: d3.geoAlbersUsa(),
  naturalEarth: d3.geoNaturalEarth1(),
  orthographic: d3.geoOrthographic(),
  stereographic: d3.geoStereographic()
};

// Custom projection
const customProjection = d3.geoTransverseMercator()
  .rotate([98, 0])
  .center([0, 38])
  .scale(1000)
  .translate([width / 2, height / 2]);

// Zoomable map
const zoom = d3.zoom()
  .scaleExtent([1, 8])
  .on('zoom', function(event) {
    const { transform } = event;
    
    g.selectAll('path')
      .attr('transform', transform);
  });

svg.call(zoom);`
        },
        {
          command: 'Geo Paths and Graticules',
          description: 'Create geographic paths and grids',
          usage: 'Draw maps and geographic features',
          example: `// Graticule (grid)
const graticule = d3.geoGraticule();

svg.append('path')
  .datum(graticule)
  .attr('class', 'graticule')
  .attr('d', path)
  .attr('fill', 'none')
  .attr('stroke', '#ddd')
  .attr('stroke-width', 0.5);

// Country boundaries
svg.append('g')
  .selectAll('.country')
  .data(countries.features)
  .enter()
  .append('path')
  .attr('class', 'country')
  .attr('d', path)
  .attr('fill', d => colorScale(d.properties.gdp))
  .attr('stroke', '#fff')
  .attr('stroke-width', 0.5)
  .on('mouseover', function(event, d) {
    d3.select(this)
      .attr('stroke', '#000')
      .attr('stroke-width', 2);
  })
  .on('mouseout', function(event, d) {
    d3.select(this)
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.5);
  });

// Points on map
svg.selectAll('.city')
  .data(cities)
  .enter()
  .append('circle')
  .attr('class', 'city')
  .attr('cx', d => projection([d.lon, d.lat])[0])
  .attr('cy', d => projection([d.lon, d.lat])[1])
  .attr('r', 5)
  .attr('fill', 'red')
  .attr('stroke', 'white')
  .attr('stroke-width', 2);

// Great circle paths
const greatCircle = d3.geoGreatCircle()
  .source([sourceLon, sourceLat])
  .target([targetLon, targetLat]);

svg.append('path')
  .datum(greatCircle())
  .attr('d', path)
  .attr('fill', 'none')
  .attr('stroke', 'blue')
  .attr('stroke-width', 2);`
        },
        {
          command: 'Choropleth Maps',
          description: 'Create thematic maps with data',
          usage: 'Color regions based on data values',
          example: `// Color scale for choropleth
const colorScale = d3.scaleSequential(d3.interpolateBlues)
  .domain([0, d3.max(data, d => d.value)]);

// Create choropleth
svg.selectAll('.region')
  .data(data)
  .enter()
  .append('path')
  .attr('class', 'region')
  .attr('d', d => path(d.geometry))
  .attr('fill', d => colorScale(d.value))
  .attr('stroke', '#fff')
  .attr('stroke-width', 1)
  .on('mouseover', function(event, d) {
    // Show tooltip
    tooltip.transition()
      .duration(200)
      .style('opacity', 1);
    
    tooltip.html(\`\${d.name}<br/>Value: \${d3.format(',.0f')(d.value)}\`)
      .style('left', (event.pageX + 10) + 'px')
      .style('top', (event.pageY - 28) + 'px');
  })
  .on('mouseout', function(d) {
    tooltip.transition()
      .duration(500)
      .style('opacity', 0);
  });

// Legend
const legendWidth = 200;
const legendHeight = 20;

const legend = svg.append('g')
  .attr('class', 'legend')
  .attr('transform', \`translate(\${width - legendWidth - 20}, 20)\`);

const legendScale = d3.scaleLinear()
  .domain(colorScale.domain())
  .range([0, legendWidth]);

const legendAxis = d3.axisBottom(legendScale)
  .ticks(5)
  .tickFormat(d3.format('.0f'));

legend.append('rect')
  .attr('width', legendWidth)
  .attr('height', legendHeight)
  .style('fill', 'url(#legend-gradient)');

legend.append('g')
  .attr('transform', \`translate(0, \${legendHeight})\`)
  .call(legendAxis);

// Gradient definition
const defs = svg.append('defs');

const gradient = defs.append('linearGradient')
  .attr('id', 'legend-gradient')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '0%');

gradient.selectAll('stop')
  .data(colorScale.ticks().map((t, i, n) => ({
    offset: \`$\{100 * i / n.length}%\`,
    color: colorScale(t)
  })))
  .enter()
  .append('stop')
  .attr('offset', d => d.offset)
  .attr('stop-color', d => d.color);`
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Rendering Optimization',
          description: 'Optimize rendering performance',
          usage: 'Improve visualization performance',
          example: `// Use canvas for large datasets
const canvas = d3.select('body')
  .append('canvas')
  .attr('width', width)
  .attr('height', height);

const context = canvas.node().getContext('2d');

// Efficient rendering
function renderPoints(data) {
  context.clearRect(0, 0, width, height);
  
  data.forEach(d => {
    context.beginPath();
    context.arc(xScale(d.x), yScale(d.y), 3, 0, 2 * Math.PI);
    context.fillStyle = colorScale(d.category);
    context.fill();
  });
}

// Quadtree for spatial indexing
const quadtree = d3.quadtree()
  .x(d => d.x)
  .y(d => d.y)
  .addAll(data);

// Find nearby points
function findNearby(x, y, radius) {
  const points = [];
  
  quadtree.visit((node, x1, y1, x2, y2) => {
    if (!node.length) {
      do {
        const d = node.data;
        const dx = x - d.x;
        const dy = y - d.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < radius) {
          points.push(d);
        }
      } while (node = node.next);
    }
    
    return x1 >= x + radius || y1 >= y + radius || 
           x2 < x - radius || y2 < y - radius;
  });
  
  return points;
}

// Level of detail (LOD)
function renderWithLOD(data, zoomLevel) {
  const filteredData = zoomLevel < 2 
    ? data.filter((d, i) => i % 10 === 0)  // Show 10% of points
    : zoomLevel < 5 
    ? data.filter((d, i) => i % 2 === 0)   // Show 50% of points
    : data;                                 // Show all points
  
  renderPoints(filteredData);
}

// Request animation frame
function animate() {
  requestAnimationFrame(animate);
  
  // Update visualization
  updateVisualization();
}

animate();`
        },
        {
          command: 'Memory Management',
          description: 'Manage memory efficiently',
          usage: 'Prevent memory leaks and optimize usage',
          example: `// Clean up resources
function cleanup() {
  // Remove event listeners
  d3.selectAll('*').on('click', null);
  d3.selectAll('*').on('mouseover', null);
  d3.selectAll('*').on('mouseout', null);
  
  // Clear selections
  d3.selectAll('*').remove();
  
  // Stop simulations
  if (simulation) {
    simulation.stop();
  }
  
  // Clear timers
  timers.forEach(timer => clearInterval(timer));
  timers = [];
}

// Efficient data updates
function updateData(newData) {
  // Reuse elements instead of recreating
  const update = selection.data(newData, d => d.id);
  
  update.exit().remove();
  
  const enter = update.enter()
    .append('circle')
    .attr('r', 0);
  
  enter.merge(update)
    .transition()
    .duration(1000)
    .attr('r', d => d.r)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);
}

// Object pooling for frequently created/destroyed objects
class ObjectPool {
  constructor(createFn, resetFn, initialSize = 10) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.pool = [];
    
    for (let i = 0; i < initialSize; i++) {
      this.pool.push(this.createFn());
    }
  }
  
  acquire() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }
    return this.createFn();
  }
  
  release(obj) {
    this.resetFn(obj);
    this.pool.push(obj);
  }
}

// Usage
const pointPool = new ObjectPool(
  () => ({ x: 0, y: 0, r: 0, color: '' }),
  (obj) => { obj.x = 0; obj.y = 0; obj.r = 0; obj.color = ''; }
);`
        },
        {
          command: 'WebGL Integration',
          description: 'Use WebGL for high-performance rendering',
          usage: 'Integrate WebGL with D3.js',
          example: `// WebGL context
const canvas = d3.select('body')
  .append('canvas')
  .attr('width', width)
  .attr('height', height);

const gl = canvas.node().getContext('webgl');

// Vertex shader
const vertexShaderSource = \`
  attribute vec2 a_position;
  attribute vec3 a_color;
  varying vec3 v_color;
  uniform vec2 u_resolution;
  
  void main() {
    vec2 clipSpace = ((a_position / u_resolution) * 2.0) - 1.0;
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = 10.0;
    v_color = a_color;
  }
\`;

// Fragment shader
const fragmentShaderSource = \`
  precision mediump float;
  varying vec3 v_color;
  
  void main() {
    gl_FragColor = vec4(v_color, 1.0);
  }
\`;

// Create shaders
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

// Create program
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

// Use D3 for data processing, WebGL for rendering
function renderWebGL(data) {
  // Process data with D3
  const processedData = data.map(d => ({
    x: xScale(d.x),
    y: yScale(d.y),
    color: d3.rgb(colorScale(d.category))
  }));
  
  // Render with WebGL
  const positions = new Float32Array(processedData.flatMap(d => [d.x, d.y]));
  const colors = new Float32Array(processedData.flatMap(d => [d.color.r / 255, d.color.g / 255, d.color.b / 255]));
  
  // Update buffers and draw
  updateBuffers(positions, colors);
  gl.drawArrays(gl.POINTS, 0, positions.length / 2);
}

// Hybrid approach: D3 for interaction, WebGL for rendering
const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('position', 'absolute')
  .style('pointer-events', 'none');

// Update SVG overlay for interaction
function updateInteractionLayer(data) {
  const circles = svg.selectAll('circle')
    .data(data, d => d.id);
  
  circles.exit().remove();
  
  circles.enter()
    .append('circle')
    .attr('r', 10)
    .style('opacity', 0)
    .merge(circles)
    .attr('cx', d => xScale(d.x))
    .attr('cy', d => yScale(d.y))
    .on('mouseover', handleMouseOver)
    .on('mouseout', handleMouseOut);
}`
        },
      ],
    },
    {
      title: 'Modern D3 Features',
      commands: [
        {
          command: 'D3 v7+ New Features',
          description: 'Latest features in D3.js v7+',
          usage: 'Use modern D3 capabilities',
          example: `// D3 v7+ features
import { select, scaleLinear } from 'd3';
import { csv, json } from 'd3-fetch';
import { line, area } from 'd3-shape';
import { zoom, drag } from 'd3-drag';
import { forceSimulation, forceLink } from 'd3-force';

// ES6 modules and tree-shaking
import { 
  select,
  scaleLinear,
  scaleTime,
  csv,
  json,
  line,
  area,
  pie,
  arc,
  hierarchy,
  tree,
  pack,
  zoom,
  drag
} from 'd3';

// Async/await support
async function loadData() {
  try {
    const data = await csv('data.csv');
    const processedData = processData(data);
    return processedData;
  } catch (error) {
    console.error('Error loading data:', error);
  }
}

// Improved TypeScript support
interface DataPoint {
  x: number;
  y: number;
  category: string;
  value: number;
}

const data: DataPoint[] = await loadData();

// New color schemes
const sequentialScale = d3.scaleSequential(d3.interpolateViridis);
const divergingScale = d3.scaleSequential(d3.interpolateRdBu);
const categoricalScale = d3.scaleOrdinal(d3.schemeTableau10);

// Improved time formatting
const timeFormat = d3.timeFormat('%Y-%m-%d');
const utcFormat = d3.utcFormat('%Y-%m-%dT%H:%M:%S.%LZ');

// New interpolation methods
const colorInterpolator = d3.interpolateRgb('#ff0000', '#0000ff');
const dateInterpolator = d3.interpolateDate(new Date(2020, 0, 1), new Date(2020, 11, 31));
const numberInterpolator = d3.interpolateNumber(0, 100);`
        },
        {
          command: 'D3 with React',
          description: 'Integrate D3.js with React',
          usage: 'Build reactive visualizations',
          example: `import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface D3ChartProps {
  data: any[];
  width: number;
  height: number;
}

const D3Chart: React.FC<D3ChartProps> = ({ data, width, height }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current || !data) return;
    
    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();
    
    // Create scales
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([0, width]);
    
    const yScale = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, height])
      .padding(0.1);
    
    // Create SVG
    const svg = d3.select(svgRef.current);
    
    // Create bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', d => yScale(d.name))
      .attr('width', d => xScale(d.value))
      .attr('height', yScale.bandwidth())
      .attr('fill', 'steelblue');
    
    // Add axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    
    svg.append('g')
      .attr('transform', \`translate(0, \${height})\`)
      .call(xAxis);
    
    svg.append('g')
      .call(yAxis);
    
  }, [data, width, height]);
  
  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
    />
  );
};

// Custom hook for D3 visualization
const useD3 = (createChart: (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) => void) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    createChart(svg);
    
    return () => {
      // Cleanup
      svg.selectAll('*').remove();
    };
  }, [createChart]);
  
  return svgRef;
};

// Usage
const ChartComponent: React.FC = () => {
  const svgRef = useD3((svg) => {
    // D3 chart creation logic
    const data = [10, 20, 30, 40, 50];
    
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => i * 50)
      .attr('cy', 50)
      .attr('r', d => d / 2)
      .attr('fill', 'orange');
  });
  
  return <svg ref={svgRef} width={500} height={300} />;
};`
        },
        {
          command: 'D3 with Vue',
          description: 'Integrate D3.js with Vue.js',
          usage: 'Build reactive visualizations with Vue',
          example: `<template>
  <div>
    <svg ref="chart" :width="width" :height="height"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'D3Chart',
  props: {
    data: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 300
    }
  },
  mounted() {
    this.createChart();
  },
  watch: {
    data: {
      handler() {
        this.updateChart();
      },
      deep: true
    }
  },
  methods: {
    createChart() {
      const svg = d3.select(this.$refs.chart);
      
      // Create scales
      this.xScale = d3.scaleLinear()
        .domain([0, d3.max(this.data, d => d.value)])
        .range([0, this.width]);
      
      this.yScale = d3.scaleBand()
        .domain(this.data.map(d => d.name))
        .range([0, this.height])
        .padding(0.1);
      
      // Create chart
      this.renderChart();
    },
    
    renderChart() {
      const svg = d3.select(this.$refs.chart);
      
      // Data binding
      const bars = svg.selectAll('rect')
        .data(this.data);
      
      // Enter
      bars.enter()
        .append('rect')
        .attr('x', 0)
        .attr('y', d => this.yScale(d.name))
        .attr('width', d => this.xScale(d.value))
        .attr('height', this.yScale.bandwidth())
        .attr('fill', 'steelblue');
      
      // Update
      bars.transition()
        .duration(1000)
        .attr('width', d => this.xScale(d.value));
      
      // Exit
      bars.exit().remove();
    },
    
    updateChart() {
      this.renderChart();
    }
  }
};
</script>

<!-- Composition API -->
<script setup>
import { ref, onMounted, watch } from 'vue';
import * as d3 from 'd3';

const props = defineProps({
  data: Array,
  width: { type: Number, default: 500 },
  height: { type: Number, default: 300 }
});

const chart = ref(null);

let xScale, yScale;

const createChart = () => {
  const svg = d3.select(chart.value);
  
  xScale = d3.scaleLinear()
    .domain([0, d3.max(props.data, d => d.value)])
    .range([0, props.width]);
  
  yScale = d3.scaleBand()
    .domain(props.data.map(d => d.name))
    .range([0, props.height])
    .padding(0.1);
  
  renderChart();
};

const renderChart = () => {
  const svg = d3.select(chart.value);
  
  svg.selectAll('rect')
    .data(props.data)
    .join('rect')
    .attr('x', 0)
    .attr('y', d => yScale(d.name))
    .attr('width', d => xScale(d.value))
    .attr('height', yScale.bandwidth())
    .attr('fill', 'steelblue');
};

onMounted(createChart);

watch(() => props.data, renderChart, { deep: true });
</script>`
        },
      ],
    },
    {
      title: 'D3 Best Practices',
      commands: [
        {
          command: 'Code Organization',
          description: 'Organize D3 code effectively',
          usage: 'Structure D3 projects for maintainability',
          example: `// Modular chart components
class BarChart {
  constructor(container, config = {}) {
    this.container = d3.select(container);
    this.config = {
      width: 800,
      height: 400,
      margin: { top: 20, right: 20, bottom: 40, left: 40 },
      ...config
    };
    
    this.svg = null;
    this.xScale = null;
    this.yScale = null;
    
    this.init();
  }
  
  init() {
    this.createSvg();
    this.createScales();
    this.createAxes();
  }
  
  createSvg() {
    this.svg = this.container
      .append('svg')
      .attr('width', this.config.width)
      .attr('height', this.config.height);
    
    this.chart = this.svg
      .append('g')
      .attr('transform', \`translate(\${this.config.margin.left}, \${this.config.margin.top})\`);
  }
  
  createScales() {
    this.xScale = d3.scaleBand()
      .range([0, this.config.width - this.config.margin.left - this.config.margin.right])
      .padding(0.1);
    
    this.yScale = d3.scaleLinear()
      .range([this.config.height - this.config.margin.top - this.config.margin.bottom, 0]);
  }
  
  update(data) {
    this.xScale.domain(data.map(d => d.key));
    this.yScale.domain([0, d3.max(data, d => d.value)]);
    
    this.renderBars(data);
    this.updateAxes();
  }
  
  renderBars(data) {
    const bars = this.chart.selectAll('.bar')
      .data(data);
    
    bars.enter()
      .append('rect')
      .attr('class', 'bar')
      .merge(bars)
      .transition()
      .duration(1000)
      .attr('x', d => this.xScale(d.key))
      .attr('y', d => this.yScale(d.value))
      .attr('width', this.xScale.bandwidth())
      .attr('height', d => this.config.height - this.config.margin.top - this.config.margin.bottom - this.yScale(d.value));
    
    bars.exit().remove();
  }
}

// Factory pattern
const ChartFactory = {
  createBarChart: (container, config) => new BarChart(container, config),
  createLineChart: (container, config) => new LineChart(container, config),
  createPieChart: (container, config) => new PieChart(container, config)
};

// Plugin system
class ChartPlugin {
  constructor(name) {
    this.name = name;
  }
  
  init(chart) {
    // Plugin initialization
  }
  
  render(chart) {
    // Plugin rendering logic
  }
}

class TooltipPlugin extends ChartPlugin {
  init(chart) {
    this.tooltip = d3.select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);
  }
  
  render(chart) {
    chart.chart.selectAll('.bar')
      .on('mouseover', (event, d) => {
        this.tooltip.transition().duration(200).style('opacity', 1);
        this.tooltip.html(\`\${d.key}: \${d.value}\`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', () => {
        this.tooltip.transition().duration(500).style('opacity', 0);
      });
  }
}`
        },
        {
          command: 'Performance Best Practices',
          description: 'Optimize D3 performance',
          usage: 'Build efficient visualizations',
          example: `// Use requestAnimationFrame for smooth animations
function animate() {
  requestAnimationFrame(animate);
  
  // Update visualization
  updateVisualization();
}

// Debounce resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const handleResize = debounce(() => {
  updateChart();
}, 250);

window.addEventListener('resize', handleResize);

// Efficient data updates
function updateData(newData) {
  // Use key function for efficient updates
  const selection = chart.selectAll('.element')
    .data(newData, d => d.id);
  
  // Reuse elements
  selection.enter()
    .append('circle')
    .attr('class', 'element')
    .merge(selection)
    .transition()
    .duration(300)
    .attr('cx', d => xScale(d.x))
    .attr('cy', d => yScale(d.y));
  
  selection.exit().remove();
}

// Canvas for large datasets
function renderLargeDataset(data) {
  const canvas = d3.select('#canvas').node();
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Render points
  data.forEach(d => {
    ctx.beginPath();
    ctx.arc(xScale(d.x), yScale(d.y), 2, 0, 2 * Math.PI);
    ctx.fillStyle = colorScale(d.category);
    ctx.fill();
  });
}

// Level of detail (LOD)
function renderWithLOD(data, zoomLevel) {
  const sampleRate = zoomLevel < 2 ? 0.1 : 
                    zoomLevel < 5 ? 0.5 : 1;
  
  const sampledData = data.filter((d, i) => Math.random() < sampleRate);
  renderChart(sampledData);
}

// Web Workers for heavy computation
const worker = new Worker('data-processor.js');

worker.postMessage({ data: largeDataset });
worker.onmessage = function(e) {
  const processedData = e.data;
  renderChart(processedData);
};

// Memory management
function cleanup() {
  // Remove event listeners
  d3.selectAll('*').on('click', null);
  d3.selectAll('*').on('mouseover', null);
  
  // Clear selections
  d3.selectAll('*').remove();
  
  // Stop animations
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
}`
        },
        {
          command: 'Testing D3 Code',
          description: 'Test D3 visualizations',
          usage: 'Write tests for D3 components',
          example: `// Unit tests with Jest
import { jest } from '@jest/globals';
import * as d3 from 'd3';
import { BarChart } from './BarChart';

describe('BarChart', () => {
  let container;
  let chart;
  
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    chart = new BarChart(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
  });
  
  test('should create SVG element', () => {
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg.getAttribute('width')).toBe('800');
    expect(svg.getAttribute('height')).toBe('400');
  });
  
  test('should render bars correctly', () => {
    const data = [
      { key: 'A', value: 10 },
      { key: 'B', value: 20 },
      { key: 'C', value: 30 }
    ];
    
    chart.update(data);
    
    const bars = container.querySelectorAll('.bar');
    expect(bars.length).toBe(3);
  });
  
  test('should update scales correctly', () => {
    const data = [
      { key: 'A', value: 10 },
      { key: 'B', value: 20 }
    ];
    
    chart.update(data);
    
    expect(chart.xScale.domain()).toEqual(['A', 'B']);
    expect(chart.yScale.domain()).toEqual([0, 20]);
  });
});

// Integration tests
describe('Chart Integration', () => {
  test('should handle data updates', async () => {
    const container = document.createElement('div');
    const chart = new BarChart(container);
    
    const initialData = [{ key: 'A', value: 10 }];
    const updatedData = [{ key: 'A', value: 20 }];
    
    chart.update(initialData);
    expect(chart.yScale.domain()[1]).toBe(10);
    
    chart.update(updatedData);
    expect(chart.yScale.domain()[1]).toBe(20);
  });
});

// Visual regression testing
import { createCanvas } from 'canvas';
import { imageDataToPNG } from 'canvas-screenshot';

async function captureChart(chart) {
  const canvas = createCanvas(chart.config.width, chart.config.height);
  const ctx = canvas.getContext('2d');
  
  // Render chart to canvas
  // ... rendering logic
  
  return canvas.toBuffer('image/png');
}

test('should match reference image', async () => {
  const chart = new BarChart(container);
  chart.update(testData);
  
  const screenshot = await captureChart(chart);
  const referenceImage = fs.readFileSync('./reference/bar-chart.png');
  
  expect(screenshot).toEqual(referenceImage);
});

// Performance testing
test('should render large dataset efficiently', () => {
  const largeData = Array.from({ length: 10000 }, (_, i) => ({
    key: \`Item_\${i}\`,
    value: Math.random() * 100
  }));
  
  const startTime = performance.now();
  chart.update(largeData);
  const endTime = performance.now();
  
  expect(endTime - startTime).toBeLessThan(1000); // Should render in < 1 second
});`
        },
      ],
    },
  ],
};
