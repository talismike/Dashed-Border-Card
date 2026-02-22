# Dashed Border Card

A drop-in React component that renders **customizable dashed borders** using SVG. Full control over dash length, gap size, border radius, stroke width, and color — all via Tailwind CSS classes, including hover states.

CSS `border-dashed` doesn't let you control dash length. This component uses an SVG `<rect>` with `stroke-dasharray` and `stroke="currentColor"`, so any Tailwind `text-*` class (including `hover:`) controls the border color.

## Installation

Copy `components/dashed-border-card.tsx` into your project. It only depends on your `cn()` utility.

## Usage

```tsx
import { DashedBorderCard } from "@/components/dashed-border-card";

{
  /* Basic */
}
<DashedBorderCard className="rounded-lg p-8">
  <p>Your content here</p>
</DashedBorderCard>;

{
  /* Custom color */
}
<DashedBorderCard
  strokeClassName="text-blue-500"
  dashLength={16}
  gapLength={6}
  className="rounded-xl p-8"
>
  <p>Blue dashed border</p>
</DashedBorderCard>;

{
  /* With hover transition */
}
<DashedBorderCard
  strokeClassName="text-border hover:text-primary"
  className="cursor-pointer rounded-lg p-8"
>
  <p>Hover me</p>
</DashedBorderCard>;
```

## Props

| Prop              | Type        | Default         | Description                                                   |
| ----------------- | ----------- | --------------- | ------------------------------------------------------------- |
| `children`        | `ReactNode` | —               | Content inside the card                                       |
| `className`       | `string`    | —               | Classes for the outer wrapper (padding, rounding, bg, etc.)   |
| `strokeClassName` | `string`    | `"text-border"` | Tailwind `text-*` classes for stroke color. Supports `hover:` |
| `dashLength`      | `number`    | `12`            | Length of each dash in pixels                                 |
| `gapLength`       | `number`    | `8`             | Gap between dashes in pixels                                  |
| `borderRadius`    | `number`    | `10`            | Border radius in pixels                                       |
| `strokeWidth`     | `number`    | `1`             | Stroke width in pixels                                        |

## Color Examples

```tsx
{/* Design tokens */}
<DashedBorderCard strokeClassName="text-primary" />
<DashedBorderCard strokeClassName="text-foreground" />
<DashedBorderCard strokeClassName="text-destructive" />

{/* Tailwind palette */}
<DashedBorderCard strokeClassName="text-blue-500" />
<DashedBorderCard strokeClassName="text-emerald-500" />

{/* Opacity */}
<DashedBorderCard strokeClassName="text-foreground/50" />

{/* Hover transitions */}
<DashedBorderCard strokeClassName="text-border hover:text-foreground" />
<DashedBorderCard strokeClassName="text-muted-foreground/40 hover:text-primary" />
<DashedBorderCard strokeClassName="text-blue-300 hover:text-blue-500" />
<DashedBorderCard strokeClassName="text-border hover:text-destructive" />
```

## How It Works

1. An SVG `<rect>` is positioned absolutely over the container with `pointer-events-none`
2. `stroke-dasharray` controls dash and gap length (CSS `border-dashed` can't do this)
3. `stroke="currentColor"` inherits the CSS `color` property from the wrapper `<div>`
4. Tailwind `text-*` classes set `color`, so they control the stroke
5. `hover:text-*` works because the color classes live on the outer `<div>` (not the SVG)
6. `transition-colors` is included by default for smooth hover animations
7. Children are wrapped in `<div class="text-foreground">` so they don't inherit the stroke color

## License

MIT
