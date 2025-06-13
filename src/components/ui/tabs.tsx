
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "relative inline-flex h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground",
      "overflow-x-auto scrollbar-hide snap-x scroll-px-4 whitespace-nowrap",
      "sm:flex-wrap sm:overflow-visible",
      "after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-6 after:bg-gradient-to-l after:from-japanBlack after:pointer-events-none sm:after:hidden",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium",
      "snap-start shrink-0 text-sm", 
      "ring-offset-background transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-japanRed focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-japanRed data-[state=active]:text-white data-[state=active]:shadow-sm",
      "data-[state=inactive]:hover:bg-japanCharcoal/50",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "scroll-mt-20", // Add scroll margin to account for fixed header
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
