"use client";

import {
  Bell,
  ChevronDown,
  Menu,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { municipalityDemo } from "@/lib/demo/data";

interface AppTopbarProps {
  title: string;
  breadcrumbs?: string[];
  onOpenMobileNav: () => void;
}

export function AppTopbar({ title, breadcrumbs, onOpenMobileNav }: AppTopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="flex h-14 items-center gap-3 px-4 lg:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onOpenMobileNav}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="min-w-0 flex-1">
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <div className="mb-0.5 hidden items-center gap-1.5 text-xs text-muted-foreground sm:flex">
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb} className="flex items-center gap-1.5">
                  {index > 0 && <span className="text-border">/</span>}
                  <span className={index === breadcrumbs.length - 1 ? "text-foreground" : ""}>
                    {crumb}
                  </span>
                </span>
              ))}
            </div>
          ) : null}
          <h1 className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base">
            {title}
          </h1>
        </div>

        <div className="hidden max-w-md flex-1 md:block lg:max-w-sm xl:max-w-md">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects, contractors, reports…"
              className="h-9 border-border/80 bg-muted/40 pl-9"
              aria-label="Global search"
            />
            <kbd className="pointer-events-none absolute top-1/2 right-2 hidden -translate-y-1/2 rounded border border-border bg-card px-1.5 py-0.5 text-[10px] text-muted-foreground lg:inline">
              ⌘K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button variant="outline" size="sm" className="hidden gap-1.5 xl:inline-flex">
            <span className="text-muted-foreground">FY</span>
            <span className="font-medium">{municipalityDemo.financialYear}</span>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </Button>

          <Button variant="soft" size="sm" className="hidden sm:inline-flex">
            <Plus className="h-4 w-4" />
            Quick create
          </Button>

          <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
          </Button>

          <button
            type="button"
            className="ml-1 flex items-center gap-2 rounded-xl border border-border bg-card px-1.5 py-1 pr-2 transition-colors hover:bg-muted/60"
          >
            <Avatar name="Super Administrator" />
            <div className="hidden text-left sm:block">
              <p className="text-xs font-semibold leading-tight">Super Admin</p>
              <p className="text-[10px] text-muted-foreground">Phase 1 UI preview</p>
            </div>
            <ChevronDown className="hidden h-3.5 w-3.5 text-muted-foreground sm:block" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-amber-200/70 bg-amber-50 px-4 py-1.5 text-[11px] text-amber-900 lg:px-6">
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-amber-600" />
        <span>
          Demonstration interface — metrics and project records are sample data only. Supabase
          authentication and live data arrive in Phase 2.
        </span>
      </div>
    </header>
  );
}
