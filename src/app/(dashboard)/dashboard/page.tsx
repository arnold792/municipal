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
        title="Operations overview"
        description={`${municipalityDemo.name} · ${municipalityDemo.financialYear} · Currency ${municipalityDemo.currency}`}
        actions={
          <>
            <Badge variant="warning">Demo data</Badge>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4" />
              Export summary
            </Button>
          </>
        }
      />

      <div className="space-y-6">
        <SummaryCards />
        <DashboardCharts />
        <DashboardWidgets />
      </div>
    </DashboardShell>
  );
}
