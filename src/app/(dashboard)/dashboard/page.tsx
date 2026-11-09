import { Download, RefreshCw } from "lucide-react";
import { DashboardCharts } from "@/components/dashboard/dashboard-charts";
import { DashboardWidgets } from "@/components/dashboard/dashboard-widgets";
import { SummaryCards } from "@/components/dashboard/summary-cards";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { municipalityDemo } from "@/lib/demo/data";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <DashboardShell title="Dashboard" breadcrumbs={["Workspace", "Dashboard"]}>
      <PageHeader
        title="Operations Overview"
        description={`${municipalityDemo.name} · ${municipalityDemo.financialYear} · Currency ${municipalityDemo.currency}`}
        actions={
          <>
            <Badge variant="warning">Demo Data</Badge>
            <Button variant="outline" size="sm" className="bg-card shadow-card">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="h-4 w-4" />
              Export Summary
            </Button>
          </>
        }
      />

      <div className="space-y-6">
        <SummaryCards />
        <DashboardCharts />
        <DashboardWidgets />

        <div className="flex flex-col items-center justify-between gap-2 border-t border-border pt-4 text-[11px] text-muted-foreground sm:flex-row">
          <p>
            Nakuru County Municipality Electronic Monitoring & Evaluation Information System
            (M&E-IS)
          </p>
          <p>
            Fiscal Year: 2025/2026 · CIDP III Implementation Cycle
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
