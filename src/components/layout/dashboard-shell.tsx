"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppTopbar } from "@/components/layout/app-topbar";
import { cn } from "@/lib/utils";

interface DashboardShellProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs?: string[];
}

export function DashboardShell({ children, title, breadcrumbs }: DashboardShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-canvas text-foreground">
      <AppSidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggleCollapsed={() => setCollapsed((value) => !value)}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col transition-[margin] duration-300",
        )}
      >
        <AppTopbar
          title={title}
          breadcrumbs={breadcrumbs}
          onOpenMobileNav={() => setMobileOpen(true)}
        />
        <main className="flex-1 overflow-x-hidden px-4 py-5 lg:px-6 lg:py-6">
          <div className="mx-auto w-full max-w-[1400px] animate-rise">{children}</div>
        </main>
      </div>
    </div>
  );
}
