"use client";

import { cn } from "@/lib/utils";
import { DashedBorderCard } from "@/components/dashed-border-card";
import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Upload,
  Image,
  FileText,
  Zap,
  Globe,
  CreditCard,
  Package,
  GitBranch,
  Lock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { ToggleTheme } from "@/components/theme/toggle-theme";

export default function HomePage() {
  return (
    <main className="relative">
      <div className="w-full flex justify-center fixed bottom-4 z-50">
        <ToggleTheme />
      </div>
      {/* Hero */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="font-mono text-xs">
                v1.0
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
              Dashed Border Card
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              A drop-in React component that renders customizable dashed borders
              using SVG. Full control over dash length, gap size, border radius,
              stroke width, and color via Tailwind classes.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Tailwind v4
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Dark mode ready
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-16 space-y-20">
        {/* Installation */}
        <section className="space-y-6">
          <SectionHeader
            title="Installation"
            description="Copy the component into your project. It only depends on your cn() utility."
          />
          <CodeBlock
            code={`// components/dashed-border-card.tsx

      import { cn } from "@/lib/utils"

    interface DashedBorderCardProps {
    children: React.ReactNode
    className?: string
    dashLength?: number     // default: 12
    gapLength?: number      // default: 8
    borderRadius?: number   // default: 10
    strokeWidth?: number    // default: 1
    strokeClassName?: string // default: "text-border"
  }

  export function DashedBorderCard({
  children,
  className,
  dashLength = 12,
  gapLength = 8,
  borderRadius = 10,
  strokeWidth = 1,
  strokeClassName = "text-border",
}: DashedBorderCardProps) {
  return (
    <div
      className={cn(
        "relative transition-colors",
        strokeClassName,
        className
      )}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <rect
          x={strokeWidth / 2}
          y={strokeWidth / 2}
          width="100%"
          height="100%"
          style={{
            width: \`calc(100% - \${strokeWidth}px)\`,
            height: \`calc(100% - \${strokeWidth}px)\`,
          }}
          rx={borderRadius}
          ry={borderRadius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={\`\${dashLength} \${gapLength}\`}
        />
      </svg>
      <div className="text-foreground">{children}</div>
    </div>
  )
}`}
          />
        </section>

        <Separator />

        {/* Quick Start */}
        <section className="space-y-6">
          <SectionHeader
            title="Quick Start"
            description="Import the component and wrap any content with it."
          />
          <Tabs defaultValue="code">
            <TabsList>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="code" className="mt-4">
              <CodeBlock
                code={`import { DashedBorderCard } from "@/components/dashed-border-card"

<DashedBorderCard className="rounded-lg p-8">
  <p>Your content here</p>
</DashedBorderCard>`}
              />
            </TabsContent>
            <TabsContent value="preview" className="mt-4">
              <DashedBorderCard className="rounded-lg p-8">
                <p className="text-center text-muted-foreground">
                  Your content here
                </p>
              </DashedBorderCard>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        {/* Examples Gallery */}
        <section className="space-y-10">
          <SectionHeader
            title="Examples"
            description="Real-world usage patterns showing different configurations."
          />

          {/* Example 1: Default */}
          <ExampleBlock title="Default" propSummary="No extra props needed">
            <DashedBorderCard className="p-8 rounded-lg">
              <div className="flex flex-col items-center gap-3 text-center">
                <IconCircle icon={Plus} />
                <div>
                  <p className="font-medium text-foreground">
                    Create new project
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Click to get started with a new project
                  </p>
                </div>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Example 2: Primary color with long dashes */}
          <ExampleBlock
            title="Primary Color"
            propSummary='strokeClassName="text-primary" dashLength={20} gapLength={10}'
          >
            <DashedBorderCard
              dashLength={20}
              gapLength={10}
              className="rounded-xl p-8"
              borderRadius={12}
              strokeClassName="text-primary"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <IconCircle
                  icon={Upload}
                  colorClass="text-primary"
                  bgClass="bg-primary/10"
                />
                <div>
                  <p className="font-medium text-foreground">Upload files</p>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop or click to upload
                  </p>
                </div>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Example 3: Blue 500 */}
          <ExampleBlock
            title="Tailwind Color"
            propSummary='strokeClassName="text-blue-500" strokeWidth={1.5}'
          >
            <DashedBorderCard
              dashLength={16}
              gapLength={6}
              className="rounded-xl p-8"
              borderRadius={12}
              strokeClassName="text-blue-500"
              strokeWidth={1.5}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <IconCircle
                  icon={Image}
                  colorClass="text-blue-500"
                  bgClass="bg-blue-500/10"
                />
                <div>
                  <p className="font-medium text-foreground">Add cover image</p>
                  <p className="text-sm text-muted-foreground">
                    Recommended size: 1200 x 630px
                  </p>
                </div>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Example 4: Destructive */}
          <ExampleBlock
            title="Destructive"
            propSummary='strokeClassName="text-destructive" strokeWidth={1.5}'
          >
            <DashedBorderCard
              dashLength={10}
              gapLength={8}
              className="rounded-lg p-8"
              strokeClassName="text-destructive"
              strokeWidth={1.5}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <IconCircle
                  icon={Lock}
                  colorClass="text-destructive"
                  bgClass="bg-destructive/10"
                />
                <div>
                  <p className="font-medium text-foreground">Danger zone</p>
                  <p className="text-sm text-muted-foreground">
                    This action cannot be undone
                  </p>
                </div>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Example 5: Foreground, dotted style */}
          <ExampleBlock
            title="Dotted Style"
            propSummary='strokeClassName="text-foreground" dashLength={4} gapLength={6} strokeWidth={2}'
          >
            <DashedBorderCard
              dashLength={4}
              gapLength={6}
              className="rounded-lg p-8"
              strokeClassName="text-foreground"
              strokeWidth={2}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <IconCircle
                  icon={Zap}
                  colorClass="text-foreground"
                  bgClass="bg-foreground/10"
                />
                <div>
                  <p className="font-medium text-foreground">Add integration</p>
                  <p className="text-sm text-muted-foreground">
                    Connect a new service to your project
                  </p>
                </div>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Example 6: Emerald file drop zone */}
          <ExampleBlock
            title="File Drop Zone"
            propSummary='strokeClassName="text-emerald-500" dashLength={14} gapLength={10}'
          >
            <DashedBorderCard
              dashLength={14}
              gapLength={10}
              className="rounded-xl p-10"
              borderRadius={12}
              strokeClassName="text-emerald-500"
              strokeWidth={1.5}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10">
                  <FileText className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Drop your files here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Supports PDF, DOCX, and TXT up to 10MB
                  </p>
                </div>
                <button className="mt-1 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600">
                  Browse files
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Example 7: Grid of cards */}
          <ExampleBlock
            title="Card Grid"
            propSummary="Multiple cards in a responsive grid layout"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Globe, label: "Website", desc: "Deploy to the web" },
                { icon: Package, label: "Package", desc: "Publish to npm" },
                {
                  icon: GitBranch,
                  label: "Repository",
                  desc: "Push to GitHub",
                },
              ].map((item) => (
                <DashedBorderCard
                  key={item.label}
                  className="rounded-lg p-6 transition-colors hover:bg-muted/50"
                  dashLength={8}
                  gapLength={8}
                  borderRadius={8}
                >
                  <div className="flex flex-col gap-3">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </DashedBorderCard>
              ))}
            </div>
          </ExampleBlock>

          {/* Example 8: Amber payment placeholder */}
          <ExampleBlock
            title="Payment Method Slot"
            propSummary='strokeClassName="text-amber-500" dashLength={18} gapLength={8}'
          >
            <DashedBorderCard
              dashLength={18}
              gapLength={8}
              className="rounded-xl p-8"
              borderRadius={12}
              strokeClassName="text-amber-500"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                  <CreditCard className="h-6 w-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">
                    Add payment method
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Credit card, debit card, or bank account
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </DashedBorderCard>
          </ExampleBlock>
        </section>

        <Separator />

        {/* Hover Examples */}
        <section className="space-y-10">
          <SectionHeader
            title="Hover States"
            description="Add hover:text-* classes to strokeClassName for smooth color transitions on hover. The component includes transition-colors by default."
          />

          {/* Hover 1: Subtle — border to foreground */}
          <ExampleBlock
            title="Subtle Shift"
            propSummary='strokeClassName="text-border hover:text-foreground"'
          >
            <DashedBorderCard
              className="cursor-pointer rounded-lg p-8"
              strokeClassName="text-border hover:text-foreground"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <IconCircle icon={Plus} />
                <div>
                  <p className="font-medium text-foreground">
                    Create new project
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Hover to see the border shift from border to foreground
                  </p>
                </div>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Hover 2: Muted to Primary */}
          <ExampleBlock
            title="Muted to Primary"
            propSummary='strokeClassName="text-muted-foreground/40 hover:text-primary"'
          >
            <DashedBorderCard
              dashLength={16}
              gapLength={8}
              className="cursor-pointer rounded-xl p-8 hover:bg-primary/5"
              borderRadius={12}
              strokeClassName="text-muted-foreground/40 hover:text-primary"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <IconCircle
                  icon={Upload}
                  colorClass="text-muted-foreground"
                  bgClass="bg-muted"
                />
                <div>
                  <p className="font-medium text-foreground">Upload files</p>
                  <p className="text-sm text-muted-foreground">
                    Border transitions from muted to primary on hover
                  </p>
                </div>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Hover 3: Blue shade shift */}
          <ExampleBlock
            title="Shade Shift"
            propSummary='strokeClassName="text-blue-300 hover:text-blue-500"'
          >
            <DashedBorderCard
              dashLength={20}
              gapLength={10}
              className="cursor-pointer rounded-xl p-8"
              borderRadius={12}
              strokeClassName="text-blue-300 hover:text-blue-500"
              strokeWidth={1.5}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <IconCircle
                  icon={Image}
                  colorClass="text-blue-500"
                  bgClass="bg-blue-500/10"
                />
                <div>
                  <p className="font-medium text-foreground">Add cover image</p>
                  <p className="text-sm text-muted-foreground">
                    Blue-300 to blue-500 on hover
                  </p>
                </div>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Hover 4: Emerald drop zone interactive */}
          <ExampleBlock
            title="Interactive Drop Zone"
            propSummary='strokeClassName="text-muted-foreground/30 hover:text-emerald-500"'
          >
            <DashedBorderCard
              dashLength={14}
              gapLength={10}
              className="cursor-pointer rounded-xl p-10 hover:bg-emerald-500/5 group"
              borderRadius={12}
              strokeClassName="text-muted-foreground/30 hover:text-emerald-500"
              strokeWidth={1.5}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="size-14 flex items-center justify-center rounded-full transition-colors group-hover:bg-emerald-500/10 group-hover:text-emerald-500">
                  <FileText className="size-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Drop your files here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Border turns emerald on hover
                  </p>
                </div>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Hover 5: Destructive warning */}
          <ExampleBlock
            title="Destructive Warning"
            propSummary='strokeClassName="text-border hover:text-destructive"'
          >
            <DashedBorderCard
              dashLength={10}
              gapLength={8}
              className="cursor-pointer rounded-lg p-8 hover:bg-destructive/5 group"
              strokeClassName="text-border hover:text-destructive"
              strokeWidth={1.5}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <IconCircle
                  icon={Lock}
                  colorClass="text-muted-foreground group-hover:text-red-500"
                  bgClass="bg-muted group-hover:bg-red-500/10"
                />
                <div>
                  <p className="font-medium text-foreground">
                    Delete workspace
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Hover reveals the danger with a red border
                  </p>
                </div>
              </div>
            </DashedBorderCard>
          </ExampleBlock>

          {/* Hover 6: Grid with individual hovers */}
          <ExampleBlock
            title="Hover Grid"
            propSummary="Each card independently transitions on hover"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Globe,
                  label: "Website",
                  desc: "Deploy to the web",
                  hoverColor: "text-border hover:text-blue-500",
                },
                {
                  icon: Package,
                  label: "Package",
                  desc: "Publish to npm",
                  hoverColor: "text-border hover:text-emerald-500",
                },
                {
                  icon: GitBranch,
                  label: "Repository",
                  desc: "Push to GitHub",
                  hoverColor: "text-border hover:text-violet-500",
                },
              ].map((item) => (
                <DashedBorderCard
                  key={item.label}
                  className="cursor-pointer rounded-lg p-6 hover:bg-muted/50"
                  dashLength={8}
                  gapLength={8}
                  borderRadius={8}
                  strokeClassName={item.hoverColor}
                >
                  <div className="flex flex-col gap-3">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </DashedBorderCard>
              ))}
            </div>
          </ExampleBlock>
        </section>

        <Separator />

        {/* How it Works */}
        <section className="space-y-8">
          <SectionHeader
            title="How it Works"
            description="A deep dive into the technique, and why CSS border-dashed isn't enough."
          />

          {/* The Problem */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              The Problem with CSS border-dashed
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {"CSS provides "}
              <InlineCode>border-style: dashed</InlineCode>
              {
                " out of the box, but it offers zero control over the dash pattern. You can't change how long each dash is, how much space sits between them, or make them longer than the browser default. Every browser renders dashes slightly differently, and none of them let you customize the pattern. This is why Vercel, Linear, and other design-focused companies use a different approach."
              }
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
                <p className="text-sm font-medium text-destructive">
                  CSS border-dashed
                </p>
                <div className="rounded-md border-2 border-dashed border-muted-foreground/30 p-6 text-center text-sm text-muted-foreground">
                  Fixed dash size. No customization.
                </div>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  SVG stroke-dasharray
                </p>
                <DashedBorderCard
                  dashLength={16}
                  gapLength={8}
                  className="rounded-md p-6"
                  borderRadius={6}
                  strokeClassName="text-foreground"
                >
                  <p className="text-center text-sm text-muted-foreground">
                    Fully customizable dashes.
                  </p>
                </DashedBorderCard>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              The Solution: SVG stroke-dasharray
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {"Instead of relying on CSS borders, we position an SVG "}
              <InlineCode>{"<rect>"}</InlineCode>
              {" element absolutely over the container. The SVG "}
              <InlineCode>stroke-dasharray</InlineCode>
              {
                " property accepts two values: the dash length and the gap length. This gives you pixel-perfect control over the pattern."
              }
            </p>
            <CodeBlock
              code={`<svg class="pointer-events-none absolute inset-0 h-full w-full">
  <rect
    x="0.5"
    y="0.5"
    width="calc(100% - 1px)"
    height="calc(100% - 1px)"
    rx="10"                        <!-- border radius -->
    ry="10"                        <!-- border radius -->
    fill="none"                    <!-- transparent fill -->
    stroke="currentColor"          <!-- inherits CSS color -->
    stroke-width="1"               <!-- border thickness -->
    stroke-dasharray="12 8"        <!-- 12px dash, 8px gap -->
  />
</svg>`}
            />
          </div>

          {/* Key properties */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Key SVG Properties Explained
            </h3>
            <div className="space-y-3">
              <PropertyRow
                name="stroke-dasharray"
                value='"12 8"'
                description='Defines the dash pattern. First number is the dash length in pixels, second is the gap between dashes. You can also pass more values for complex patterns like "12 4 4 4" (long dash, short gap, short dash, short gap).'
              />
              <PropertyRow
                name="stroke"
                value='"currentColor"'
                description="Inherits the CSS color property from the parent element. This is the key trick — by setting a Tailwind text-* class on the SVG wrapper, the stroke automatically picks up that color without needing to resolve CSS variables manually."
              />
              <PropertyRow
                name="rx / ry"
                value='"10"'
                description="Horizontal and vertical border radius of the rectangle, equivalent to CSS border-radius. Must be set in SVG attributes, not CSS."
              />
              <PropertyRow
                name="fill"
                value='"none"'
                description="Set to none so only the border is visible. The component children render behind the SVG overlay."
              />
              <PropertyRow
                name="x / y offsets"
                value="strokeWidth / 2"
                description="The rect is inset by half the stroke width so the border doesn't get clipped at the edges of the SVG viewport."
              />
              <PropertyRow
                name="pointer-events"
                value='"none"'
                description="Applied via CSS on the SVG so clicks pass through to the content underneath."
              />
            </div>
          </div>

          {/* The currentColor trick */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              The currentColor Trick
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {"The most important detail is "}
              <InlineCode>{'stroke="currentColor"'}</InlineCode>
              {". In SVG, "}
              <InlineCode>currentColor</InlineCode>
              {" resolves to the computed value of the CSS "}
              <InlineCode>color</InlineCode>
              {" property on that element. Tailwind's "}
              <InlineCode>text-*</InlineCode>
              {" utilities set the "}
              <InlineCode>color</InlineCode>
              {
                " property, so by applying a text color class to the SVG, the stroke inherits it automatically. This means any Tailwind color class works:"
              }
            </p>
            <CodeBlock
              code={`// Design tokens (resolve from your CSS theme)
<DashedBorderCard strokeClassName="text-border" />
<DashedBorderCard strokeClassName="text-primary" />
<DashedBorderCard strokeClassName="text-foreground" />
<DashedBorderCard strokeClassName="text-destructive" />
<DashedBorderCard strokeClassName="text-muted-foreground" />

// Tailwind palette colors
<DashedBorderCard strokeClassName="text-blue-500" />
<DashedBorderCard strokeClassName="text-emerald-500" />
<DashedBorderCard strokeClassName="text-amber-500" />
<DashedBorderCard strokeClassName="text-rose-400" />

// With opacity modifiers
<DashedBorderCard strokeClassName="text-foreground/50" />
<DashedBorderCard strokeClassName="text-blue-500/30" />

// Hover transitions (smooth by default via transition-colors)
<DashedBorderCard strokeClassName="text-border hover:text-foreground" />
<DashedBorderCard strokeClassName="text-muted-foreground/40 hover:text-primary" />
<DashedBorderCard strokeClassName="text-blue-300 hover:text-blue-500" />
<DashedBorderCard strokeClassName="text-border hover:text-destructive" />`}
            />
          </div>

          {/* Why not background-image? */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Why Not background-image?
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {"Another common approach is using CSS "}
              <InlineCode>background-image</InlineCode>
              {
                " with repeating-linear-gradient to simulate dashes. While this works for straight lines, it breaks down with rounded corners, doesn't respect border-radius, requires complex math for each side, and is harder to maintain. The SVG approach handles rounded corners natively via "
              }
              <InlineCode>rx</InlineCode>
              {" / "}
              <InlineCode>ry</InlineCode>
              {" and scales perfectly with the container."}
            </p>
          </div>

          {/* How hover works */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              How Hover Transitions Work
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {"The color classes are applied to the outer "}
              <InlineCode>{"<div>"}</InlineCode>
              {" wrapper, not the "}
              <InlineCode>{"<svg>"}</InlineCode>
              {" itself. This is critical because the SVG has "}
              <InlineCode>pointer-events: none</InlineCode>
              {
                " (so clicks pass through to content), which means it can never receive hover events. By placing the color on the wrapper div, the "
              }
              <InlineCode>hover:</InlineCode>
              {" pseudo-class fires on the interactive container, the CSS "}
              <InlineCode>color</InlineCode>
              {" property changes, and the SVG's "}
              <InlineCode>{'stroke="currentColor"'}</InlineCode>
              {" inherits the new value. Combined with "}
              <InlineCode>transition-colors</InlineCode>
              {" on the wrapper, you get a smooth animated transition."}
            </p>
            <CodeBlock
              code={`<!-- How it renders in the DOM -->
<div class="relative transition-colors text-border hover:text-primary ...">
  <!--                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  -->
  <!--                             color classes live on the outer div -->
  <svg class="pointer-events-none absolute inset-0 ...">
    <rect stroke="currentColor" ... />
    <!--         ^^^^^^^^^^^^                                             -->
    <!--   inherits color from the parent div, including hover changes    -->
  </svg>
  <div class="text-foreground">
    <!-- children have their color reset so they don't turn blue/red/etc -->
  </div>
</div>`}
            />
            <p className="leading-relaxed text-muted-foreground">
              {"The inner "}
              <InlineCode>{'<div class="text-foreground">'}</InlineCode>
              {
                " wrapper resets the text color for children, so your content text doesn't inherit the stroke color. Only the SVG border is affected by the strokeClassName colors."
              }
            </p>
          </div>
        </section>

        <Separator />

        {/* API Reference */}
        <section className="space-y-6">
          <SectionHeader
            title="API Reference"
            description="All available props for the DashedBorderCard component."
          />
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <PropRow
                  prop="children"
                  type="ReactNode"
                  def="-"
                  desc="Content rendered inside the card."
                />
                <PropRow
                  prop="className"
                  type="string"
                  def="-"
                  desc="Additional classes applied to the outer wrapper div."
                />
                <PropRow
                  prop="dashLength"
                  type="number"
                  def="12"
                  desc="Length of each dash in pixels."
                />
                <PropRow
                  prop="gapLength"
                  type="number"
                  def="8"
                  desc="Gap between dashes in pixels."
                />
                <PropRow
                  prop="borderRadius"
                  type="number"
                  def="10"
                  desc="Border radius of the SVG rect in pixels."
                />
                <PropRow
                  prop="strokeWidth"
                  type="number"
                  def="1"
                  desc="Thickness of the dashed border in pixels."
                />
                <PropRow
                  prop="strokeClassName"
                  type="string"
                  def='"text-border"'
                  desc="Tailwind class to control stroke color. Uses currentColor, so any text-* class works."
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-10">
          <p className="text-sm text-muted-foreground text-center">
            Built with love by{" "}
            <Link
              className="font-medium text-foreground hover:text-blue-500"
              href="https://github.com/talismike"
            >
              @talismike
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}

/* ─── Helper components ──────────────────────────────────────────────── */

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-1.5">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function ExampleBlock({
  title,
  propSummary,
  children,
}: {
  title: string;
  propSummary: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline gap-3">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
          {propSummary}
        </code>
      </div>
      {children}
    </div>
  );
}

function IconCircle({
  icon: Icon,
  colorClass = "text-muted-foreground",
  bgClass = "bg-muted",
}: {
  icon: React.ElementType;
  colorClass?: string;
  bgClass?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full",
        bgClass,
      )}
    >
      <Icon className={cn("h-5 w-5", colorClass)} />
    </div>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
      {children}
    </code>
  );
}

function PropertyRow({
  name,
  value,
  description,
}: {
  name: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 space-y-1.5">
      <div className="flex items-center gap-3">
        <code className="rounded bg-muted px-2 py-0.5 font-mono text-sm font-medium text-foreground">
          {name}
        </code>
        <span className="font-mono text-xs text-muted-foreground">{value}</span>
      </div>
      <p
        className="text-sm leading-relaxed text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

function PropRow({
  prop,
  type,
  def,
  desc,
}: {
  prop: string;
  type: string;
  def: string;
  desc: string;
}) {
  return (
    <tr>
      <td className="px-4 py-3 font-mono text-foreground">{prop}</td>
      <td className="px-4 py-3 font-mono text-muted-foreground">{type}</td>
      <td className="px-4 py-3 font-mono text-muted-foreground">{def}</td>
      <td className="px-4 py-3 text-muted-foreground">{desc}</td>
    </tr>
  );
}
