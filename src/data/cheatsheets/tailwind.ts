import { Sparkles } from 'lucide-react';

export const tailwindCheatsheet = {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'Complete Tailwind CSS utility classes reference: spacing, colors, typography, layout, and more',
    icon: Sparkles,
    colorTheme: 'cyan' as const,
    sections: [
        {
            title: 'Spacing',
            commands: [
                {
                    command: 'Padding',
                    description: 'Add padding',
                    usage: 'p-{size} | px-{size} | py-{size} | pt-{size} | pr-{size} | pb-{size} | pl-{size}',
                    example: '<div class="p-4">All sides</div>\n<div class="px-6 py-4">Horizontal & vertical</div>\n<div class="pt-2 pb-8">Top & bottom</div>',
                },
                {
                    command: 'Margin',
                    description: 'Add margin',
                    usage: 'm-{size} | mx-{size} | my-{size} | mt-{size} | mr-{size} | mb-{size} | ml-{size}',
                    example: '<div class="m-4">All sides</div>\n<div class="mx-auto">Center horizontally</div>\n<div class="mt-8 mb-4">Top & bottom</div>',
                },
                {
                    command: 'Space Between',
                    description: 'Add space between children',
                    usage: 'space-x-{size} | space-y-{size}',
                    example: '<div class="space-y-4">\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>',
                },
                {
                    command: 'Spacing Scale',
                    description: 'Spacing values (0-96)',
                    usage: '0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96',
                    example: 'p-0 (0px), p-1 (0.25rem), p-2 (0.5rem), p-4 (1rem), p-8 (2rem), p-16 (4rem)',
                },
            ],
        },
        {
            title: 'Typography',
            commands: [
                {
                    command: 'Font Size',
                    description: 'Set font size',
                    usage: 'text-xs | text-sm | text-base | text-lg | text-xl | text-2xl | text-3xl | text-4xl | text-5xl | text-6xl | text-7xl | text-8xl | text-9xl',
                    example: '<h1 class="text-4xl">Large heading</h1>\n<p class="text-base">Body text</p>',
                },
                {
                    command: 'Font Weight',
                    description: 'Set font weight',
                    usage: 'font-thin | font-extralight | font-light | font-normal | font-medium | font-semibold | font-bold | font-extrabold | font-black',
                    example: '<p class="font-normal">Normal</p>\n<p class="font-bold">Bold</p>',
                },
                {
                    command: 'Font Style',
                    description: 'Italic text',
                    usage: 'italic | not-italic',
                    example: '<p class="italic">Italic text</p>',
                },
                {
                    command: 'Letter Spacing',
                    description: 'Control letter spacing',
                    usage: 'tracking-tighter | tracking-tight | tracking-normal | tracking-wide | tracking-wider | tracking-widest',
                    example: '<h1 class="tracking-wide">Wide spacing</h1>',
                },
                {
                    command: 'Line Height',
                    description: 'Set line height',
                    usage: 'leading-none | leading-tight | leading-snug | leading-normal | leading-relaxed | leading-loose | leading-{size}',
                    example: '<p class="leading-relaxed">Relaxed line height</p>',
                },
                {
                    command: 'Text Align',
                    description: 'Text alignment',
                    usage: 'text-left | text-center | text-right | text-justify',
                    example: '<p class="text-center">Centered text</p>',
                },
                {
                    command: 'Text Decoration',
                    description: 'Text decoration',
                    usage: 'underline | overline | line-through | no-underline',
                    example: '<a class="underline">Underlined link</a>',
                },
                {
                    command: 'Text Transform',
                    description: 'Text case',
                    usage: 'uppercase | lowercase | capitalize | normal-case',
                    example: '<p class="uppercase">UPPERCASE TEXT</p>',
                },
                {
                    command: 'Text Overflow',
                    description: 'Handle overflow text',
                    usage: 'truncate | text-ellipsis | text-clip',
                    example: '<p class="truncate">Long text that will be truncated...</p>',
                },
                {
                    command: 'Word Break',
                    description: 'Control word breaking',
                    usage: 'break-normal | break-words | break-all',
                    example: '<p class="break-words">Long word handling</p>',
                },
            ],
        },
        {
            title: 'Colors',
            commands: [
                {
                    command: 'Text Color',
                    description: 'Set text color',
                    usage: 'text-{color}-{shade}',
                    example: '<p class="text-blue-500">Blue text</p>\n<p class="text-gray-900">Dark gray</p>\n<p class="text-red-600">Red text</p>',
                },
                {
                    command: 'Background Color',
                    description: 'Set background color',
                    usage: 'bg-{color}-{shade}',
                    example: '<div class="bg-blue-500">Blue background</div>\n<div class="bg-gray-100">Light gray</div>',
                },
                {
                    command: 'Border Color',
                    description: 'Set border color',
                    usage: 'border-{color}-{shade}',
                    example: '<div class="border-2 border-blue-500">Blue border</div>',
                },
                {
                    command: 'Color Palette',
                    description: 'Available colors',
                    usage: 'slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose',
                    example: 'Each color has shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950',
                },
                {
                    command: 'Opacity',
                    description: 'Control color opacity',
                    usage: 'text-{color}-{shade}/{opacity} | bg-{color}-{shade}/{opacity}',
                    example: '<div class="bg-blue-500/50">50% opacity</div>\n<p class="text-gray-900/75">75% opacity</p>',
                },
            ],
        },
        {
            title: 'Layout',
            commands: [
                {
                    command: 'Display',
                    description: 'Set display type',
                    usage: 'block | inline-block | inline | flex | inline-flex | grid | inline-grid | table | hidden',
                    example: '<div class="flex">Flex container</div>\n<div class="hidden">Hidden element</div>',
                },
                {
                    command: 'Position',
                    description: 'Set positioning',
                    usage: 'static | fixed | absolute | relative | sticky',
                    example: '<div class="fixed top-0">Fixed header</div>\n<div class="absolute top-4 right-4">Absolute positioned</div>',
                },
                {
                    command: 'Top/Right/Bottom/Left',
                    description: 'Set position offsets',
                    usage: 'top-{size} | right-{size} | bottom-{size} | left-{size}',
                    example: '<div class="absolute top-4 right-8">Positioned</div>',
                },
                {
                    command: 'Z-Index',
                    description: 'Set stacking order',
                    usage: 'z-0 | z-10 | z-20 | z-30 | z-40 | z-50 | z-auto',
                    example: '<div class="z-50">Top layer</div>',
                },
                {
                    command: 'Float',
                    description: 'Float elements',
                    usage: 'float-right | float-left | float-none',
                    example: '<img class="float-left">Floated image</img>',
                },
                {
                    command: 'Clear',
                    description: 'Clear floats',
                    usage: 'clear-left | clear-right | clear-both | clear-none',
                    example: '<div class="clear-both">Cleared</div>',
                },
                {
                    command: 'Object Fit',
                    description: 'How replaced element fits',
                    usage: 'object-contain | object-cover | object-fill | object-none | object-scale-down',
                    example: '<img class="object-cover w-full h-64">Cover image</img>',
                },
                {
                    command: 'Object Position',
                    description: 'Position of replaced element',
                    usage: 'object-{position}',
                    example: '<img class="object-center">Centered</img>',
                },
                {
                    command: 'Overflow',
                    description: 'Handle overflow',
                    usage: 'overflow-auto | overflow-hidden | overflow-visible | overflow-scroll | overflow-x-{type} | overflow-y-{type}',
                    example: '<div class="overflow-hidden">Hidden overflow</div>',
                },
                {
                    command: 'Visibility',
                    description: 'Control visibility',
                    usage: 'visible | invisible',
                    example: '<div class="invisible">Invisible but takes space</div>',
                },
            ],
        },
        {
            title: 'Flexbox',
            commands: [
                {
                    command: 'Flex Direction',
                    description: 'Set flex direction',
                    usage: 'flex-row | flex-row-reverse | flex-col | flex-col-reverse',
                    example: '<div class="flex flex-col">Column layout</div>',
                },
                {
                    command: 'Flex Wrap',
                    description: 'Control wrapping',
                    usage: 'flex-wrap | flex-wrap-reverse | flex-nowrap',
                    example: '<div class="flex flex-wrap">Wrapping flex</div>',
                },
                {
                    command: 'Justify Content',
                    description: 'Main axis alignment',
                    usage: 'justify-start | justify-end | justify-center | justify-between | justify-around | justify-evenly',
                    example: '<div class="flex justify-between">Space between</div>',
                },
                {
                    command: 'Align Items',
                    description: 'Cross axis alignment',
                    usage: 'items-start | items-end | items-center | items-baseline | items-stretch',
                    example: '<div class="flex items-center">Centered items</div>',
                },
                {
                    command: 'Align Content',
                    description: 'Align wrapped lines',
                    usage: 'content-start | content-end | content-center | content-between | content-around | content-evenly',
                    example: '<div class="flex flex-wrap content-between">Aligned content</div>',
                },
                {
                    command: 'Align Self',
                    description: 'Override align-items',
                    usage: 'self-auto | self-start | self-end | self-center | self-stretch | self-baseline',
                    example: '<div class="self-center">Self centered</div>',
                },
                {
                    command: 'Flex',
                    description: 'Flex grow/shrink',
                    usage: 'flex-1 | flex-auto | flex-initial | flex-none | flex-{grow} | flex-{grow}-{shrink}',
                    example: '<div class="flex-1">Takes available space</div>',
                },
                {
                    command: 'Gap',
                    description: 'Space between flex items',
                    usage: 'gap-{size} | gap-x-{size} | gap-y-{size}',
                    example: '<div class="flex gap-4">Items with gap</div>',
                },
            ],
        },
        {
            title: 'Grid',
            commands: [
                {
                    command: 'Grid Template Columns',
                    description: 'Define columns',
                    usage: 'grid-cols-{n} | grid-cols-none',
                    example: '<div class="grid grid-cols-3">3 columns</div>\n<div class="grid grid-cols-12">12 columns</div>',
                },
                {
                    command: 'Grid Column',
                    description: 'Place item in columns',
                    usage: 'col-auto | col-span-{n} | col-start-{n} | col-end-{n}',
                    example: '<div class="col-span-2">Spans 2 columns</div>\n<div class="col-start-2 col-end-4">From col 2 to 4</div>',
                },
                {
                    command: 'Grid Template Rows',
                    description: 'Define rows',
                    usage: 'grid-rows-{n} | grid-rows-none',
                    example: '<div class="grid grid-rows-3">3 rows</div>',
                },
                {
                    command: 'Grid Row',
                    description: 'Place item in rows',
                    usage: 'row-auto | row-span-{n} | row-start-{n} | row-end-{n}',
                    example: '<div class="row-span-2">Spans 2 rows</div>',
                },
                {
                    command: 'Gap',
                    description: 'Space between grid items',
                    usage: 'gap-{size} | gap-x-{size} | gap-y-{size}',
                    example: '<div class="grid gap-4">Grid with gap</div>',
                },
                {
                    command: 'Grid Auto Flow',
                    description: 'Auto placement',
                    usage: 'grid-flow-row | grid-flow-col | grid-flow-dense | grid-flow-row-dense',
                    example: '<div class="grid grid-flow-dense">Dense grid</div>',
                },
            ],
        },
        {
            title: 'Sizing',
            commands: [
                {
                    command: 'Width',
                    description: 'Set width',
                    usage: 'w-{size} | w-auto | w-full | w-screen | w-min | w-max | w-fit',
                    example: '<div class="w-full">Full width</div>\n<div class="w-64">256px width</div>',
                },
                {
                    command: 'Min/Max Width',
                    description: 'Set min/max width',
                    usage: 'min-w-{size} | max-w-{size} | max-w-screen-{size}',
                    example: '<div class="min-w-0 max-w-xl">Constrained width</div>',
                },
                {
                    command: 'Height',
                    description: 'Set height',
                    usage: 'h-{size} | h-auto | h-full | h-screen | h-min | h-max | h-fit',
                    example: '<div class="h-screen">Full screen height</div>',
                },
                {
                    command: 'Min/Max Height',
                    description: 'Set min/max height',
                    usage: 'min-h-{size} | max-h-{size} | max-h-screen',
                    example: '<div class="min-h-screen">Min screen height</div>',
                },
            ],
        },
        {
            title: 'Borders',
            commands: [
                {
                    command: 'Border Width',
                    description: 'Set border width',
                    usage: 'border | border-{side} | border-{width}',
                    example: '<div class="border">1px border</div>\n<div class="border-2">2px border</div>\n<div class="border-t-4">Top border</div>',
                },
                {
                    command: 'Border Color',
                    description: 'Set border color',
                    usage: 'border-{color}-{shade}',
                    example: '<div class="border-2 border-blue-500">Blue border</div>',
                },
                {
                    command: 'Border Style',
                    description: 'Set border style',
                    usage: 'border-solid | border-dashed | border-dotted | border-double | border-none',
                    example: '<div class="border-2 border-dashed">Dashed border</div>',
                },
                {
                    command: 'Border Radius',
                    description: 'Round corners',
                    usage: 'rounded | rounded-{size} | rounded-{corner}',
                    example: '<div class="rounded-lg">Large radius</div>\n<div class="rounded-t-xl">Top corners</div>\n<div class="rounded-full">Circle</div>',
                },
                {
                    command: 'Divide',
                    description: 'Add borders between children',
                    usage: 'divide-x | divide-y | divide-{color}',
                    example: '<div class="divide-y divide-gray-200">Divided children</div>',
                },
            ],
        },
        {
            title: 'Effects',
            commands: [
                {
                    command: 'Box Shadow',
                    description: 'Add shadow',
                    usage: 'shadow-sm | shadow | shadow-md | shadow-lg | shadow-xl | shadow-2xl | shadow-inner | shadow-none',
                    example: '<div class="shadow-lg">Large shadow</div>',
                },
                {
                    command: 'Opacity',
                    description: 'Set opacity',
                    usage: 'opacity-{value}',
                    example: '<div class="opacity-50">50% opacity</div>\n<div class="opacity-0">Invisible</div>',
                },
                {
                    command: 'Mix Blend Mode',
                    description: 'Blend mode',
                    usage: 'mix-blend-{mode}',
                    example: '<div class="mix-blend-multiply">Blended</div>',
                },
                {
                    command: 'Background Blend Mode',
                    description: 'Background blend',
                    usage: 'bg-blend-{mode}',
                    example: '<div class="bg-blend-overlay">Blended background</div>',
                },
            ],
        },
        {
            title: 'Filters',
            commands: [
                {
                    command: 'Blur',
                    description: 'Blur effect',
                    usage: 'blur-{size} | blur-none',
                    example: '<div class="blur-sm">Slightly blurred</div>',
                },
                {
                    command: 'Brightness',
                    description: 'Adjust brightness',
                    usage: 'brightness-{value}',
                    example: '<div class="brightness-150">Brighter</div>',
                },
                {
                    command: 'Contrast',
                    description: 'Adjust contrast',
                    usage: 'contrast-{value}',
                    example: '<div class="contrast-125">More contrast</div>',
                },
                {
                    command: 'Grayscale',
                    description: 'Grayscale filter',
                    usage: 'grayscale | grayscale-0',
                    example: '<img class="grayscale">Grayscale image</img>',
                },
                {
                    command: 'Hue Rotate',
                    description: 'Rotate hue',
                    usage: 'hue-rotate-{degrees}',
                    example: '<div class="hue-rotate-90">Rotated hue</div>',
                },
                {
                    command: 'Invert',
                    description: 'Invert colors',
                    usage: 'invert | invert-0',
                    example: '<div class="invert">Inverted</div>',
                },
                {
                    command: 'Saturate',
                    description: 'Adjust saturation',
                    usage: 'saturate-{value}',
                    example: '<div class="saturate-150">More saturated</div>',
                },
                {
                    command: 'Sepia',
                    description: 'Sepia tone',
                    usage: 'sepia | sepia-0',
                    example: '<img class="sepia">Sepia image</img>',
                },
            ],
        },
        {
            title: 'Transitions & Animations',
            commands: [
                {
                    command: 'Transition Property',
                    description: 'What to transition',
                    usage: 'transition-none | transition-all | transition | transition-{property}',
                    example: '<div class="transition-all">All properties</div>',
                },
                {
                    command: 'Transition Duration',
                    description: 'Transition duration',
                    usage: 'duration-{time}',
                    example: '<div class="transition duration-300">300ms transition</div>',
                },
                {
                    command: 'Transition Timing',
                    description: 'Timing function',
                    usage: 'ease-linear | ease-in | ease-out | ease-in-out',
                    example: '<div class="transition ease-in-out">Eased transition</div>',
                },
                {
                    command: 'Transition Delay',
                    description: 'Transition delay',
                    usage: 'delay-{time}',
                    example: '<div class="transition delay-150">Delayed transition</div>',
                },
                {
                    command: 'Animation',
                    description: 'Animate element',
                    usage: 'animate-{name}',
                    example: '<div class="animate-spin">Spinning</div>\n<div class="animate-pulse">Pulsing</div>\n<div class="animate-bounce">Bouncing</div>',
                },
            ],
        },
        {
            title: 'Transforms',
            commands: [
                {
                    command: 'Transform',
                    description: 'Enable transforms',
                    usage: 'transform | transform-none',
                    example: '<div class="transform">Transform enabled</div>',
                },
                {
                    command: 'Scale',
                    description: 'Scale element',
                    usage: 'scale-{value} | scale-x-{value} | scale-y-{value}',
                    example: '<div class="scale-110">110% scale</div>\n<div class="hover:scale-125">Hover scale</div>',
                },
                {
                    command: 'Rotate',
                    description: 'Rotate element',
                    usage: 'rotate-{degrees}',
                    example: '<div class="rotate-45">45deg rotation</div>',
                },
                {
                    command: 'Translate',
                    description: 'Move element',
                    usage: 'translate-x-{size} | translate-y-{size}',
                    example: '<div class="translate-x-4">Moved right</div>',
                },
                {
                    command: 'Skew',
                    description: 'Skew element',
                    usage: 'skew-x-{degrees} | skew-y-{degrees}',
                    example: '<div class="skew-x-12">Skewed</div>',
                },
                {
                    command: 'Transform Origin',
                    description: 'Transform origin point',
                    usage: 'origin-{position}',
                    example: '<div class="origin-top-left">Origin top left</div>',
                },
            ],
        },
        {
            title: 'Interactivity',
            commands: [
                {
                    command: 'Hover',
                    description: 'Hover state',
                    usage: 'hover:{class}',
                    example: '<button class="bg-blue-500 hover:bg-blue-700">Hover me</button>',
                },
                {
                    command: 'Focus',
                    description: 'Focus state',
                    usage: 'focus:{class}',
                    example: '<input class="focus:ring-2 focus:ring-blue-500">',
                },
                {
                    command: 'Active',
                    description: 'Active state',
                    usage: 'active:{class}',
                    example: '<button class="active:scale-95">Click me</button>',
                },
                {
                    command: 'Disabled',
                    description: 'Disabled state',
                    usage: 'disabled:{class}',
                    example: '<button class="disabled:opacity-50">Disabled</button>',
                },
                {
                    command: 'Cursor',
                    description: 'Cursor style',
                    usage: 'cursor-{type}',
                    example: '<button class="cursor-pointer">Pointer cursor</button>\n<div class="cursor-not-allowed">Not allowed</div>',
                },
                {
                    command: 'User Select',
                    description: 'Text selection',
                    usage: 'select-none | select-text | select-all | select-auto',
                    example: '<div class="select-none">Not selectable</div>',
                },
            ],
        },
        {
            title: 'Responsive Design',
            commands: [
                {
                    command: 'Breakpoints',
                    description: 'Responsive breakpoints',
                    usage: 'sm: | md: | lg: | xl: | 2xl:',
                    example: '<div class="text-sm md:text-base lg:text-lg">Responsive text</div>',
                },
                {
                    command: 'Breakpoint Values',
                    description: 'Breakpoint sizes',
                    usage: 'sm:640px | md:768px | lg:1024px | xl:1280px | 2xl:1536px',
                    example: '<div class="w-full md:w-1/2 lg:w-1/3">Responsive width</div>',
                },
                {
                    command: 'Mobile First',
                    description: 'Default is mobile, add breakpoints for larger',
                    usage: 'base styles + breakpoint:styles',
                    example: '<div class="p-4 md:p-8 lg:p-12">Responsive padding</div>',
                },
            ],
        },
        {
            title: 'Dark Mode',
            commands: [
                {
                    command: 'Dark Mode',
                    description: 'Dark mode styles',
                    usage: 'dark:{class}',
                    example: '<div class="bg-white dark:bg-gray-900">Dark mode background</div>\n<p class="text-gray-900 dark:text-white">Dark mode text</p>',
                },
                {
                    command: 'Dark Mode Config',
                    description: 'Enable in tailwind.config.js',
                    usage: 'darkMode: "media" | "class"',
                    example: 'module.exports = {\n  darkMode: "class", // or "media"\n  // ...\n}',
                },
            ],
        },
        {
            title: 'Pseudo-class Variants',
            commands: [
                {
                    command: 'First/Last Child',
                    description: 'Style first/last child',
                    usage: 'first:{class} | last:{class}',
                    example: '<li class="first:mt-0 last:mb-0">List item</li>',
                },
                {
                    command: 'Odd/Even',
                    description: 'Style odd/even children',
                    usage: 'odd:{class} | even:{class}',
                    example: '<tr class="even:bg-gray-100">Table row</tr>',
                },
                {
                    command: 'Nth Child',
                    description: 'Style nth child (requires plugin)',
                    usage: 'nth-{n}:{class}',
                    example: '<div class="nth-3:bg-blue-500">Third child</div>',
                },
                {
                    command: 'Group Hover',
                    description: 'Hover parent, style child',
                    usage: 'group hover:group-hover:{class}',
                    example: '<div class="group">\n  <div class="group-hover:bg-blue-500">Hover parent</div>\n</div>',
                },
                {
                    command: 'Peer',
                    description: 'Style based on sibling',
                    usage: 'peer peer-{state}:{class}',
                    example: '<input class="peer">\n<div class="peer-checked:block hidden">Shown when checked</div>',
                },
            ],
        },
        {
            title: 'Arbitrary Values',
            commands: [
                {
                    command: 'Arbitrary Values',
                    description: 'Use custom values',
                    usage: '[{value}]',
                    example: '<div class="w-[500px]">Custom width</div>\n<div class="bg-[#1da1f2]">Custom color</div>\n<div class="text-[14px]">Custom font size</div>',
                },
                {
                    command: 'Arbitrary Properties',
                    description: 'Use any CSS property',
                    usage: '[{property}:{value}]',
                    example: '<div class="[mask-image:url(...)]">Custom property</div>',
                },
            ],
        },
        {
            title: 'Important Modifier',
            commands: [
                {
                    command: 'Important',
                    description: 'Add !important',
                    usage: '!{class}',
                    example: '<div class="!text-red-500">Important red</div>',
                },
            ],
        },
        {
            title: 'Container',
            commands: [
                {
                    command: 'Container',
                    description: 'Centered container with max-width',
                    usage: 'container',
                    example: '<div class="container mx-auto">Centered container</div>',
                },
                {
                    command: 'Container Sizes',
                    description: 'Container breakpoints',
                    usage: 'Configure in tailwind.config.js',
                    example: 'container: {\n  center: true,\n  padding: "2rem",\n}',
                },
            ],
        },
        {
            title: 'Aspect Ratio',
            commands: [
                {
                    command: 'Aspect Ratio',
                    description: 'Maintain aspect ratio',
                    usage: 'aspect-{ratio}',
                    example: '<div class="aspect-video">16:9</div>\n<div class="aspect-square">1:1</div>\n<img class="aspect-[4/3]">Custom ratio</img>',
                },
            ],
        },
        {
            title: 'Tables',
            commands: [
                {
                    command: 'Table Layout',
                    description: 'Table display',
                    usage: 'table | table-auto | table-fixed',
                    example: '<table class="table-auto">Auto table</table>',
                },
                {
                    command: 'Table Borders',
                    description: 'Table borders',
                    usage: 'border-collapse | border-separate',
                    example: '<table class="border-collapse">Collapsed borders</table>',
                },
            ],
        },
        {
            title: 'Lists',
            commands: [
                {
                    command: 'List Style',
                    description: 'List marker style',
                    usage: 'list-none | list-disc | list-decimal',
                    example: '<ul class="list-disc list-inside">Bulleted list</ul>',
                },
                {
                    command: 'List Position',
                    description: 'Marker position',
                    usage: 'list-inside | list-outside',
                    example: '<ul class="list-outside">Outside markers</ul>',
                },
            ],
        },
        {
            title: 'Accessibility',
            commands: [
                {
                    command: 'Screen Reader Only',
                    description: 'Hide visually, show to screen readers',
                    usage: 'sr-only',
                    example: '<span class="sr-only">Screen reader text</span>',
                },
                {
                    command: 'Not Screen Reader Only',
                    description: 'Show visually, hide from screen readers',
                    usage: 'not-sr-only',
                    example: '<div class="not-sr-only">Visible</div>',
                },
            ],
        },
        {
            title: 'Configuration',
            commands: [
                {
                    command: 'Tailwind Config',
                    description: 'Configure Tailwind',
                    usage: 'tailwind.config.js',
                    example: 'module.exports = {\n  content: ["./src/**/*.{js,jsx,ts,tsx}"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}',
                },
                {
                    command: 'Extend Theme',
                    description: 'Add custom values',
                    usage: 'theme.extend',
                    example: 'theme: {\n  extend: {\n    colors: {\n      brand: "#1da1f2",\n    },\n  },\n}',
                },
                {
                    command: 'Plugins',
                    description: 'Add plugins',
                    usage: 'plugins: [require("@tailwindcss/forms")]',
                    example: 'plugins: [\n  require("@tailwindcss/forms"),\n  require("@tailwindcss/typography"),\n]',
                },
            ],
        },
    ],
};




