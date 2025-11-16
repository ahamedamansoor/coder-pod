
"use client"

import * as React from "react"
import { ImperativePanelGroupHandle, Panel, PanelGroup } from "react-resizable-panels"

import { cn } from "@/lib/utils"

const Splitter = React.forwardRef<
  ImperativePanelGroupHandle,
  React.ComponentProps<typeof PanelGroup>
>((props, ref) => <PanelGroup ref={ref} {...props} />)
Splitter.displayName = "Splitter"

const SplitterPanel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Panel> & {
    className?: string
  }
>(({ className, ...props }, ref) => (
  <Panel ref={ref} className={cn("!overflow-auto", className)} {...props} />
))
SplitterPanel.displayName = "SplitterPanel"

const SplitterResizeHandle = PanelGroup.Handle

export { Splitter, SplitterPanel, SplitterResizeHandle }
