"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
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
          "fixed inset-y-0 left-0 z-50 flex h-full flex-col bg-sidebar text-sidebar-foreground transition-all duration-300 lg:static",
          collapsed ? "w-[72px]" : "w-72",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div
          className={cn(
            "flex h-16 items-center gap-3 bg-black/20 px-5",
            collapsed && "justify-center px-2",
          )}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-[#dae2fd]">
            <Landmark className="h-[22px] w-[22px]" />
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1 animate-fade-in">
              <p className="truncate text-[15px] font-bold leading-none text-white">
                Municipal M&E
              </p>
              <p className="mt-1 truncate text-[11px] tracking-wider text-sidebar-muted uppercase">
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

        <nav className="flex-1 space-y-4 overflow-y-auto px-3 py-4 scrollbar-thin">
          {navigationSections.map((section) => (
            <div key={section.title} className="space-y-1">
              {!collapsed && (
                <p className="px-3 py-1 text-[11px] font-semibold tracking-wider text-sidebar-muted uppercase">
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
                          "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                          collapsed && "justify-center px-0",
                          active
                            ? "bg-white/15 font-semibold text-white"
                            : "text-sidebar-muted hover:bg-white/10 hover:text-white",
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-[18px] w-[18px] shrink-0",
                            active ? "text-white" : "text-sidebar-muted group-hover:text-white",
                          )}
                        />
                        {!collapsed && (
                          <>
                            <span className="flex-1 truncate text-[13px]">{item.title}</span>
                            {item.badge && (
                              <span className="rounded bg-danger px-1.5 py-0.5 text-[10px] font-bold text-white">
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
            "bg-black/20 p-3",
            collapsed && "flex justify-center",
          )}
        >
          {!collapsed ? (
            <div className="flex items-center gap-2 rounded-lg bg-white/10 p-2.5 animate-fade-in">
              <div className="text-[#85f8c4]">
                <CalendarDays className="h-[18px] w-[18px]" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-medium text-white">
                  {municipalityDemo.financialYear}
                </p>
                <p className="truncate text-[10px] text-sidebar-muted">
                  {municipalityDemo.financialYearRange}
                </p>
              </div>
            </div>
          ) : (
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white"
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
