"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Landmark,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { navigationSections } from "@/lib/navigation";
import { municipalityDemo } from "@/lib/demo/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AppSidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggleCollapsed: () => void;
  onCloseMobile: () => void;
}

export function AppSidebar({
  collapsed,
  mobileOpen,
  onToggleCollapsed,
  onCloseMobile,
}: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onCloseMobile}
        aria-hidden
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex h-full flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300 lg:static",
          collapsed ? "w-[72px]" : "w-[272px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div
          className={cn(
            "flex h-14 items-center gap-3 border-b border-sidebar-border px-3",
            collapsed && "justify-center px-2",
          )}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Landmark className="h-4.5 w-4.5" />
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1 animate-fade-in">
              <p className="truncate text-sm font-semibold tracking-tight text-white">
                Municipal M&E
              </p>
              <p className="truncate text-[11px] text-sidebar-muted">
                {municipalityDemo.name}
              </p>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-sidebar-muted hover:bg-sidebar-accent hover:text-white lg:inline-flex"
            onClick={onToggleCollapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3 scrollbar-thin">
          {navigationSections.map((section) => (
            <div key={section.title} className="mb-4">
              {!collapsed && (
                <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-sidebar-muted">
                  {section.title}
                </p>
              )}
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/dashboard" && pathname.startsWith(item.href));
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onCloseMobile}
                        title={collapsed ? item.title : undefined}
                        className={cn(
                          "group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors",
                          collapsed && "justify-center px-0",
                          active
                            ? "bg-primary text-white shadow-sm"
                            : "text-sidebar-muted hover:bg-sidebar-accent hover:text-white",
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-4 w-4 shrink-0",
                            active ? "text-white" : "text-sidebar-muted group-hover:text-white",
                          )}
                        />
                        {!collapsed && (
                          <>
                            <span className="flex-1 truncate">{item.title}</span>
                            {item.badge && (
                              <span
                                className={cn(
                                  "rounded-md px-1.5 py-0.5 text-[10px] font-semibold",
                                  active
                                    ? "bg-white/20 text-white"
                                    : "bg-primary/20 text-primary-foreground",
                                )}
                              >
                                {item.badge}
                              </span>
                            )}
                          </>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div
          className={cn(
            "border-t border-sidebar-border p-3",
            collapsed && "flex justify-center",
          )}
        >
          {!collapsed ? (
            <div className="rounded-xl bg-sidebar-accent p-3 animate-fade-in">
              <p className="text-xs font-medium text-white">Financial year</p>
              <p className="mt-0.5 text-sm font-semibold text-primary-foreground">
                {municipalityDemo.financialYear}
              </p>
              <p className="mt-1 text-[11px] text-sidebar-muted">
                {municipalityDemo.financialYearRange}
              </p>
            </div>
          ) : (
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-accent text-xs font-bold text-white"
              title={municipalityDemo.financialYear}
            >
              FY
            </div>
          )}
        </div>

        <button
          type="button"
          className="absolute top-1/2 -right-3 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm lg:flex"
          onClick={onToggleCollapsed}
          aria-label="Toggle sidebar width"
        >
          {collapsed ? (
            <ChevronRight className="h-3.5 w-3.5" />
          ) : (
            <ChevronLeft className="h-3.5 w-3.5" />
          )}
        </button>
      </aside>
    </>
  );
}
