"use client";

import {
  Bell,
  ChevronDown,
  Info,
  Menu,
  Plus,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";
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
  const [showBanner, setShowBanner] = useState(true);

  return (
    <header className="sticky top-0 z-30">
      <div className="flex h-16 items-center justify-between gap-3 bg-card px-5 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex min-w-0 items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onOpenMobileNav}
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="min-w-0">
            {breadcrumbs && breadcrumbs.length > 0 ? (
              <div className="hidden items-center gap-1 text-[12px] text-muted-foreground sm:flex">
                {breadcrumbs.map((crumb, index) => (
                  <span key={crumb} className="flex items-center gap-1">
                    {index > 0 && <span className="text-border">›</span>}
                    <span
                      className={
                        index === breadcrumbs.length - 1
                          ? "font-semibold text-foreground"
                          : "hover:text-foreground"
                      }
                    >
                      {crumb}
                    </span>
                  </span>
                ))}
              </div>
            ) : (
              <h1 className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base">
                {title}
              </h1>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden w-64 items-center md:flex">
            <Search className="pointer-events-none absolute left-3 h-[18px] w-[18px] text-muted-foreground" />
            <Input
              placeholder="Search M&E data..."
              className="h-9 border-0 bg-canvas pl-9 pr-12"
              aria-label="Global search"
            />
            <div className="pointer-events-none absolute right-2 rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
              ⌘K
            </div>
          </div>

          <div className="hidden items-center gap-1 rounded-lg bg-canvas px-2 py-1 xl:flex">
            <span className="text-[12px] text-muted-foreground">FY</span>
            <span className="text-[12px] font-medium text-foreground">
              {municipalityDemo.financialYear}
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </div>

          <Button
            size="sm"
            className="hidden h-9 bg-secondary text-secondary-foreground hover:bg-secondary/90 sm:inline-flex"
          >
            <Plus className="h-4 w-4" />
            Quick Create
          </Button>

          <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-danger" />
          </Button>

          <div className="mx-1 hidden h-6 w-px bg-muted sm:block" />

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg px-1 py-1 transition-colors hover:bg-muted/60"
          >
            <Avatar name="Super Administrator" className="bg-primary text-primary-foreground" />
            <div className="hidden text-left sm:block">
              <div className="flex items-center gap-1.5">
                <p className="text-[12px] leading-none font-semibold">Super Admin (SA)</p>
                <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold text-[#dae2fd]">
                  Executive
                </span>
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground">County HQ Admin</p>
            </div>
          </button>
        </div>
      </div>

      {showBanner ? (
        <div className="flex items-center justify-between gap-3 bg-muted px-5 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-info/10 text-info">
              <Info className="h-[18px] w-[18px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-foreground">
              <span className="rounded bg-info px-1.5 py-0.5 text-[11px] font-bold tracking-wider text-white uppercase">
                Phase 1 Preview
              </span>
              <span className="text-[13px] text-muted-foreground">
                Demonstration interface with sample project metrics. Live Supabase database
                integration coming in Phase 2.
              </span>
            </div>
          </div>
          <button
            type="button"
            className="rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setShowBanner(false)}
            aria-label="Dismiss preview banner"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>
      ) : null}
    </header>
  );
}
