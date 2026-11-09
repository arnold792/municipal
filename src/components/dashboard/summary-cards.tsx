import {
  AlertTriangle,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FolderKanban,
  ShieldAlert,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { demoProjects, demoSummaryMetrics } from "@/lib/demo/data";
import { cn } from "@/lib/utils";

const iconMap = {
  total: FolderKanban,
  active: TrendingUp,
  completed: CheckCircle2,
  delayed: Clock3,
  risk: AlertTriangle,
  approvals: ShieldAlert,
  budget: Wallet,
  spend: CircleDollarSign,
  remaining: Wallet,
} as const;

const toneStyles = {
  default: "bg-muted text-muted-foreground",
  accent: "bg-muted text-muted-foreground",
  success: "bg-success/10 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/10 text-danger",
  info: "bg-info/10 text-info",
} as const;

const projectMetricIds = ["total", "active", "completed", "delayed", "risk", "approvals"] as const;
const financeMetricIds = ["budget", "spend", "remaining"] as const;

const totalBudget = demoProjects.reduce((sum, p) => sum + p.approvedBudget, 0);
const totalExpenditure = demoProjects.reduce((sum, p) => sum + p.expenditure, 0);
const burnRate = totalBudget > 0 ? (totalExpenditure / totalBudget) * 100 : 0;
const remainingRate = 100 - burnRate;

const financeExtras: Record<
  (typeof financeMetricIds)[number],
  { barLabel: string; barValue: string; percent: number; barTone: string }
> = {
  budget: {
    barLabel: "Allocated vs Target",
    barValue: "100%",
    percent: 100,
    barTone: "bg-primary",
  },
  spend: {
    barLabel: "Burn Rate",
    barValue: `${burnRate.toFixed(1)}% utilized`,
    percent: burnRate,
    barTone: "bg-info",
  },
  remaining: {
    barLabel: "Available Reserve",
    barValue: `${remainingRate.toFixed(1)}% remaining`,
    percent: remainingRate,
    barTone: "bg-success",
  },
};

export function SummaryCards() {
  const projectMetrics = demoSummaryMetrics.filter((metric) =>
    projectMetricIds.includes(metric.id as (typeof projectMetricIds)[number]),
  );
  const financeMetrics = demoSummaryMetrics.filter((metric) =>
    financeMetricIds.includes(metric.id as (typeof financeMetricIds)[number]),
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {projectMetrics.map((metric, index) => {
          const Icon = iconMap[metric.id as keyof typeof iconMap] ?? FolderKanban;
          return (
            <Card
              key={metric.id}
              className="animate-rise overflow-hidden rounded-lg border-0 shadow-card"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <CardContent className="flex h-full flex-col justify-between p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                    {metric.label}
                  </span>
                  <div
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded",
                      toneStyles[metric.tone ?? "default"],
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-baseline gap-1.5">
                    <p className="font-display text-[28px] leading-8 font-bold tracking-tight">
                      {metric.value}
                    </p>
                    {metric.id === "active" ? (
                      <span className="rounded bg-success/10 px-1.5 py-0.5 text-[10px] font-bold text-success">
                        50%
                      </span>
                    ) : null}
                    {metric.id === "delayed" ? (
                      <span className="rounded bg-warning/15 px-1.5 py-0.5 text-[10px] font-bold text-warning">
                        Schedule lag
                      </span>
                    ) : null}
                    {metric.id === "risk" ? (
                      <span className="rounded bg-danger/10 px-1.5 py-0.5 text-[10px] font-bold text-danger">
                        Action req.
                      </span>
                    ) : null}
                    {metric.id === "approvals" ? (
                      <span className="rounded bg-info/10 px-1.5 py-0.5 text-[10px] font-bold text-info">
                        Queue active
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 truncate text-[11px] text-muted-foreground">{metric.hint}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {financeMetrics.map((metric, index) => {
          const Icon = iconMap[metric.id as keyof typeof iconMap] ?? Wallet;
          const extras = financeExtras[metric.id as (typeof financeMetricIds)[number]];
          const valueTone =
            metric.id === "spend"
              ? "text-info"
              : metric.id === "remaining"
                ? "text-success"
                : "text-foreground";

          return (
            <Card
              key={metric.id}
              className="animate-rise overflow-hidden rounded-lg border-0 shadow-card"
              style={{ animationDelay: `${(index + 6) * 40}ms` }}
            >
              <CardContent className="flex h-full flex-col justify-between p-5">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                      {metric.label}
                    </span>
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded",
                        metric.id === "spend"
                          ? toneStyles.info
                          : metric.id === "remaining"
                            ? toneStyles.success
                            : toneStyles.default,
                      )}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <p
                    className={cn(
                      "font-display mt-2 text-[28px] leading-8 font-bold tracking-tight",
                      valueTone,
                    )}
                  >
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{metric.hint}</p>
                </div>
                <div className="mt-4 pt-2">
                  <div className="mb-1 flex justify-between text-[11px] text-muted-foreground">
                    <span>{extras.barLabel}</span>
                    <span className="font-semibold text-foreground">{extras.barValue}</span>
                  </div>
                  <Progress
                    value={extras.percent}
                    className="h-2 rounded-full bg-muted"
                    indicatorClassName={cn("rounded-full", extras.barTone)}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
