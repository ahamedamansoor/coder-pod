# HTML Content Authoring Guidelines

These rules apply to all HTML educational components. Follow them alongside `COMPONENT_DESIGN_SYSTEM.md`.

## Structure
- Start with `PageHeader` (blue theme) and an overview card using the gradient/border pattern.
- Use clear, single-level sections—no tab components. Space sections with `space-y-10` and `pb-16`.
- Include at least one visual explainer (diagram, flow, or stacked badges) for key concepts.
- Provide a playground demo with polished HTML/CSS (centered card/panel, rounded corners, soft background). Avoid unnecessary `<h1>` in the preview unless teaching headings.

## Content Rules
- Demonstrate correct heading hierarchy (`h1` then `h2`, `h3`, …) and explain head vs body responsibilities.
- Highlight semantics and accessibility: language attribute on `<html>`, meaningful tags, and alt text for images.
- Call out best practices with a Do/Don’t grid (emerald vs rose).
- Keep examples concise and purposeful; avoid deprecated tags and inline layout styling.
- Show form basics with labels, inputs, and proper `for`/`id` pairing; include `aria-*` when helpful (e.g., `aria-describedby` for hints).
- When covering media (images/video), include responsive patterns: `width: 100%`, `max-width`, `loading="lazy"`, and `alt`/`title` guidance.
- For lists/links, demonstrate semantic choices: ordered vs unordered, nav lists for menus, descriptive link text.

## Code & Examples
- Use consistent, minimal code blocks; add comments only when clarifying intent.
- For text content examples (headings/paragraphs), show lead vs regular text, lists, and link/media basics.
- Include at least one accessibility-focused snippet (landmarks, aria labels, or proper heading order).
- Prefer semantic wrappers (`header`, `nav`, `main`, `section`, `footer`) in examples; show nesting that respects hierarchy.
- If showing tables, include `<caption>`, `<th scope="col|row">`, and zebra striping per design system.

## Icons & Imports
- Import every icon you render (e.g., `AlertTriangle`, `CheckCircle2`, `Lightbulb`) and remove unused imports to avoid runtime errors.

## Styling Notes
- Light/dark friendly: pair light backgrounds with `dark:` variants; prefer low-opacity gradients.
- Add borders and rounding (`rounded-xl` for cards, `rounded-lg` for code blocks).
- Use `text-muted-foreground` for secondary text; keep typography hierarchy per design system.
- Keep playground CSS modest: predictable spacing (`padding`, `gap`), legible fonts, and no heavy animations.

## Playground Guidance
- Encourage opening DevTools to view structure; mention that comments are ignored by the DOM if relevant.
- Ensure preview text is readable and the layout looks intentional (no placeholder lorem).
- In playgrounds that demonstrate structure, avoid extra `<h1>` unless teaching headings; use concise labels/pills for visual clarity.
