"use client"

import * as React from "react"
import { Panel, PanelGroup } from "react-resizable-panels"

import { cn } from "@/lib/utils"

const Splitter = (props: React.ComponentProps<typeof PanelGroup>) => <PanelGroup {...props} />

const SplitterPanel = ({ className, ...props }: React.ComponentProps<typeof Panel> & { className?: string }) => (
  <Panel className={cn("!overflow-auto", className)} {...props} />
)

export { Splitter, SplitterPanel }
