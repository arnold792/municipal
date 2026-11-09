import { AlertTriangle, CalendarClock, ClipboardCheck, Shield } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  demoActivities,
  demoDeadlines,
  demoInspections,
  demoPendingApprovals,
  demoProjects,
} from "@/lib/demo/data";
import { StatusBadge } from "@/components/shared/status-badge";
import { cn } from "@/lib/utils";

function WidgetCard({
  title,
  description,
  icon: Icon,
  iconTone = "default",
  action,
  children,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconTone?: "default" | "danger" | "warning";
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card className="h-full rounded-lg border-0 shadow-card">
      <CardHeader className="flex-row items-start justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="font-display text-lg font-semibold tracking-tight">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {action ?? (
          <div
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded",
              iconTone === "danger" && "bg-danger/10 text-danger",
              iconTone === "warning" && "bg-warning/15 text-warning",
              iconTone === "default" && "bg-muted text-muted-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-3">{children}</CardContent>
    </Card>
  );
}

function initials(label: string) {
  return label
    .split(/[\s—·-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function DashboardWidgets() {
  const highRisk = demoProjects.filter((project) =>
    ["At risk", "Delayed"].includes(project.status),
  );

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="space-y-5">
        <WidgetCard
          title="Recent project activity"
          description="Latest demonstration workspace events"
          icon={ClipboardCheck}
        >
          {demoActivities.map((item) => (
            <div key={item.id} className="flex items-start gap-2.5">
              <div
                className={cn(
                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                  item.type === "progress" && "bg-success/10 text-success",
                  item.type === "approval" && "bg-warning/15 text-warning",
                  item.type === "risk" && "bg-danger/10 text-danger",
                  item.type === "finance" && "bg-muted text-secondary",
                  item.type === "inspection" && "bg-muted text-foreground",
                )}
              >
                {initials(item.meta)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-semibold leading-5">{item.title}</p>
                <div className="mt-0.5 flex flex-wrap items-center gap-1 text-[11px] text-muted-foreground">
                  <span className="truncate">{item.meta}</span>
                  <span>·</span>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </WidgetCard>

        <WidgetCard
          title="Recent site inspections"
          description="Field verification snapshots"
          icon={ClipboardCheck}
        >
          {demoInspections.map((item) => (
            <div key={item.id} className="rounded-lg bg-muted/70 p-2.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[15px] font-semibold">{item.project}</p>
                <span className="text-[11px] text-muted-foreground">{item.date}</span>
              </div>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">{item.finding}</p>
              <p className="mt-1.5 text-[11px] font-medium text-secondary">{item.officer}</p>
            </div>
          ))}
        </WidgetCard>
      </div>

      <div className="space-y-5">
        <WidgetCard
          title="Upcoming deadlines"
          description="Milestones and verification due dates"
          icon={CalendarClock}
        >
          {demoDeadlines.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex items-center justify-between gap-3 rounded-lg px-2.5 py-2.5",
                item.status === "overdue" ? "bg-danger/5" : "bg-canvas",
              )}
            >
              <div className="min-w-0">
                <p className="truncate text-[15px] font-medium">{item.title}</p>
                <p className="text-[11px] text-muted-foreground">{item.project}</p>
              </div>
              <div className="shrink-0 text-right">
                <p
                  className={cn(
                    "text-[11px] font-semibold",
                    item.status === "overdue" ? "text-danger" : "text-foreground",
                  )}
                >
                  {item.dueDate}
                </p>
                <Badge
                  variant={item.status === "overdue" ? "danger" : "secondary"}
                  className="mt-1"
                >
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </WidgetCard>

        <WidgetCard
          title="High-risk & delayed projects"
          description="Projects needing management attention"
          icon={AlertTriangle}
          iconTone="danger"
        >
          {highRisk.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-2 rounded-lg bg-muted/70 p-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold">{project.name}</h3>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {project.code}
                  </span>
                </div>
                <StatusBadge status={project.status} />
              </div>
              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-[11px] text-muted-foreground">
                  {project.status === "Delayed"
                    ? "Drainage culvert delay · 14 days behind"
                    : "Contractor mobilization dispute"}
                </span>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-foreground hover:underline"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </WidgetCard>
      </div>

      <div className="space-y-5">
        <WidgetCard
          title="Pending approvals"
          description="Items waiting in the approval queue"
          icon={Shield}
          action={
            <span className="rounded bg-danger px-2 py-0.5 text-[11px] font-bold text-white">
              12 Pending
            </span>
          }
        >
          {demoPendingApprovals.map((item) => (
            <div key={item.id} className="rounded-lg bg-muted/70 p-2.5">
              <div className="mb-1 flex items-center justify-between gap-2">
                <Badge
                  variant={
                    item.type === "Budget revision"
                      ? "warning"
                      : item.type === "Payment approval"
                        ? "success"
                        : "default"
                  }
                >
                  {item.type}
                </Badge>
                <span className="text-[11px] text-muted-foreground">{item.submitted}</span>
              </div>
              <p className="text-[15px] font-semibold">{item.subject}</p>
              <p className="mt-0.5 text-[12px] text-muted-foreground">
                Requested by {item.requester}
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <Button size="sm" variant="default" className="h-7 flex-1 bg-secondary hover:bg-secondary/90">
                  Approve
                </Button>
                <Button size="sm" variant="outline" className="h-7">
                  Review
                </Button>
              </div>
            </div>
          ))}
        </WidgetCard>

        <WidgetCard
          title="Delayed milestones"
          description="Schedule exceptions from the demo set"
          icon={CalendarClock}
          iconTone="warning"
        >
          {demoDeadlines
            .filter((item) => item.status === "overdue")
            .concat(demoDeadlines.filter((item) => item.status === "upcoming").slice(0, 2))
            .map((item) => (
              <div
                key={`ms-${item.id}`}
                className="flex items-start justify-between gap-2 rounded-lg bg-canvas px-2.5 py-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-semibold">{item.title}</p>
                  <p className="text-[11px] text-muted-foreground">{item.project}</p>
                </div>
                <span
                  className={cn(
                    "shrink-0 text-[11px] font-bold",
                    item.status === "overdue" ? "text-danger" : "text-muted-foreground",
                  )}
                >
                  Due {item.dueDate}
                </span>
              </div>
            ))}
        </WidgetCard>
      </div>
    </div>
  );
}
