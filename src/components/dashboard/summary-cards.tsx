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
import { demoSummaryMetrics } from "@/lib/demo/data";
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
  default: "bg-muted text-foreground",
  accent: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/15 text-warning-foreground",
  danger: "bg-danger/10 text-danger",
} as const;

export function SummaryCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {demoSummaryMetrics.map((metric, index) => {
        const Icon = iconMap[metric.id as keyof typeof iconMap] ?? FolderKanban;
        return (
          <Card
            key={metric.id}
            className="overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <CardContent className="flex items-start gap-3 p-4">
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                  toneStyles[metric.tone ?? "default"],
                )}
              >
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-muted-foreground">{metric.label}</p>
                <p className="mt-1 truncate text-lg font-semibold tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">{metric.hint}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
